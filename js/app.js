/* ========================================================================== 
   00A. APPLICATION STATE AND SHARED REFERENCES
   ========================================================================== */

const evidenceRegister = window.HEALTH_SYSTEM_EVIDENCE || [];
const modelInputs = window.HEALTH_SYSTEM_MODEL || {};
const evidenceById = new Map(evidenceRegister.map((item) => [item.id, item]));

const gpChangeSlider = document.querySelector("#gp-change");
const gpChangeValue = document.querySelector("#gp-change-value");
const outputExtraGp = document.querySelector("#output-extra-gp");
const outputMinorAe = document.querySelector("#output-minor-ae");
const outputTotalAe = document.querySelector("#output-total-ae");
const outputWaits = document.querySelector("#output-waits");
const evidenceTooltip = document.querySelector("#evidence-tooltip");
const tooltipContent = document.querySelector("#tooltip-content");
const tooltipClose = document.querySelector("#tooltip-close");

let activeEvidenceButton = null;

/* ========================================================================== 
   00B. NUMBER FORMATTING
   ========================================================================== */

const numberFormatter = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 });
const percentageFormatter = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 1 });

function formatNumber(value) {
    return numberFormatter.format(Math.round(value));
}

function formatPercentage(value) {
    return `${percentageFormatter.format(value)}%`;
}

/* ========================================================================== 
   01A. PROVISIONAL GP-TO-A&E MODEL
   --------------------------------------------------------------------------
   This is an illustrative calculation. It estimates changes in minor and total
   A&E visits, but deliberately stops before inventing an A&E waiting-time effect.
   ========================================================================== */

function calculateScenario(gpIncreasePercentage) {
    const additionalAppointments = modelInputs.baselineUrgentGpAppointments * (gpIncreasePercentage / 100);
    const usedAdditionalAppointments = additionalAppointments * modelInputs.gpAppointmentUtilisation;
    const uncappedMinorAeAvoided = usedAdditionalAppointments / modelInputs.additionalGpAppointmentsPerMinorAeAvoided;
    const maximumMinorAeAvoided = modelInputs.baselineMinorAeAttendances * modelInputs.maximumSubstitutableMinorAeShare;
    const minorAeAvoided = Math.min(uncappedMinorAeAvoided, maximumMinorAeAvoided);
    const totalAeReductionPercentage = (minorAeAvoided / modelInputs.baselineTotalAeAttendances) * 100;

    return {
        additionalAppointments,
        minorAeAvoided,
        totalAeReductionPercentage
    };
}

/* ========================================================================== 
   01B. SCENARIO OUTPUTS
   ========================================================================== */

function updateScenario() {
    const gpIncreasePercentage = Number(gpChangeSlider.value);
    const scenario = calculateScenario(gpIncreasePercentage);

    gpChangeValue.textContent = formatPercentage(gpIncreasePercentage);
    outputExtraGp.textContent = `+${formatNumber(scenario.additionalAppointments)}`;
    outputMinorAe.textContent = scenario.minorAeAvoided === 0 ? "No change" : `About ${formatNumber(scenario.minorAeAvoided)} fewer`;
    outputTotalAe.textContent = scenario.totalAeReductionPercentage === 0 ? "No change" : `About ${formatPercentage(scenario.totalAeReductionPercentage)} fewer`;
    outputWaits.textContent = "Not estimated yet";
}

/* ========================================================================== 
   02A. EVIDENCE TOOLTIP CONTENT
   ========================================================================== */

function createEvidenceTooltipMarkup(evidence) {
    const sourceMarkup = evidence.sourceUrl
        ? `<a class="tooltip-source" href="${evidence.sourceUrl}" target="_blank" rel="noopener noreferrer">Read the study ↗</a>`
        : `<span class="tooltip-source tooltip-source--missing">Local evidence still needed</span>`;

    return `
        <p class="tooltip-evidence-id">${evidence.id} · ${evidence.confidence} confidence</p>
        <h3>${evidence.title}</h3>
        <p>${evidence.estimate}</p>
        <p><strong>What this means here:</strong> ${evidence.meaning}</p>
        ${sourceMarkup}
    `;
}

/* ========================================================================== 
   02B. EVIDENCE TOOLTIP POSITIONING
   ========================================================================== */

function positionEvidenceTooltip(button) {
    const buttonBox = button.getBoundingClientRect();
    const tooltipBox = evidenceTooltip.getBoundingClientRect();
    const pagePadding = 12;
    const gap = 8;

    let left = buttonBox.left + (buttonBox.width / 2) - (tooltipBox.width / 2);
    left = Math.max(pagePadding, Math.min(left, window.innerWidth - tooltipBox.width - pagePadding));

    let top = buttonBox.bottom + gap;

    if (top + tooltipBox.height > window.innerHeight - pagePadding) {
        top = buttonBox.top - tooltipBox.height - gap;
    }

    top = Math.max(pagePadding, top);

    evidenceTooltip.style.left = `${left}px`;
    evidenceTooltip.style.top = `${top}px`;
}

/* ========================================================================== 
   02C. EVIDENCE TOOLTIP OPEN AND CLOSE
   ========================================================================== */

function showEvidenceTooltip(button) {
    const evidence = evidenceById.get(button.dataset.evidenceId);

    if (!evidence) {
        return;
    }

    activeEvidenceButton = button;
    tooltipContent.innerHTML = createEvidenceTooltipMarkup(evidence);
    evidenceTooltip.hidden = false;
    positionEvidenceTooltip(button);
}

function hideEvidenceTooltip() {
    evidenceTooltip.hidden = true;
    activeEvidenceButton = null;
}

/* ========================================================================== 
   03A. EVENT HANDLERS
   ========================================================================== */

gpChangeSlider.addEventListener("input", updateScenario);

document.querySelectorAll("[data-evidence-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (activeEvidenceButton === button && !evidenceTooltip.hidden) {
            hideEvidenceTooltip();
            return;
        }

        showEvidenceTooltip(button);
    });
});

tooltipClose.addEventListener("click", hideEvidenceTooltip);

evidenceTooltip.addEventListener("click", (event) => event.stopPropagation());

document.addEventListener("click", hideEvidenceTooltip);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        hideEvidenceTooltip();
    }
});

window.addEventListener("resize", () => {
    if (activeEvidenceButton && !evidenceTooltip.hidden) {
        positionEvidenceTooltip(activeEvidenceButton);
    }
});

/* ========================================================================== 
   04A. INITIAL PAGE RENDER
   ========================================================================== */

updateScenario();