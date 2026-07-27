/* ========================================================================== 
   00A. APPLICATION STATE AND SHARED REFERENCES
   ========================================================================== */

const evidenceRegister = window.HEALTH_SYSTEM_EVIDENCE || [];
const modelInputs = window.HEALTH_SYSTEM_MODEL || {};

const gpChangeSlider = document.querySelector("#gp-change");
const gpChangeValue = document.querySelector("#gp-change-value");
const outputExtraGp = document.querySelector("#output-extra-gp");
const outputMinorAe = document.querySelector("#output-minor-ae");
const outputTotalAe = document.querySelector("#output-total-ae");
const outputWaits = document.querySelector("#output-waits");
const evidenceList = document.querySelector("#evidence-list");
const evidenceSummary = document.querySelector("#evidence-summary");

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
   00C. PROVISIONAL GP-TO-A&E MODEL
   --------------------------------------------------------------------------
   The model intentionally stops before producing a numerical A&E wait effect.
   The evidence supports substitution at the margin, but not a general causal
   coefficient from total A&E arrivals to waiting-time performance.
   ========================================================================== */

function calculateScenario(gpIncreasePercentage) {
    const additionalAppointments = modelInputs.baselineUrgentGpAppointments * (gpIncreasePercentage / 100);
    const usedAdditionalAppointments = additionalAppointments * modelInputs.gpAppointmentUtilisation;
    const uncappedMinorAeAvoided = usedAdditionalAppointments / modelInputs.additionalGpAppointmentsPerMinorAeAvoided;
    const maximumMinorAeAvoided = modelInputs.baselineMinorAeAttendances * modelInputs.maximumSubstitutableMinorAeShare;
    const centralMinorAeAvoided = Math.min(uncappedMinorAeAvoided, maximumMinorAeAvoided);

    const lowMinorAeAvoided = centralMinorAeAvoided * 0.50;
    const highMinorAeAvoided = Math.min(centralMinorAeAvoided * 1.50, maximumMinorAeAvoided);
    const totalAeReductionPercentage = (centralMinorAeAvoided / modelInputs.baselineTotalAeAttendances) * 100;

    return {
        additionalAppointments,
        centralMinorAeAvoided,
        lowMinorAeAvoided,
        highMinorAeAvoided,
        totalAeReductionPercentage
    };
}

/* ========================================================================== 
   00D. SCENARIO OUTPUTS
   ========================================================================== */

function updateScenario() {
    const gpIncreasePercentage = Number(gpChangeSlider.value);
    const scenario = calculateScenario(gpIncreasePercentage);

    gpChangeValue.textContent = formatPercentage(gpIncreasePercentage);
    outputExtraGp.textContent = `+${formatNumber(scenario.additionalAppointments)}`;
    outputMinorAe.textContent = `−${formatNumber(scenario.centralMinorAeAvoided)} (${formatNumber(scenario.lowMinorAeAvoided)}–${formatNumber(scenario.highMinorAeAvoided)})`;
    outputTotalAe.textContent = `−${formatPercentage(scenario.totalAeReductionPercentage)}`;
    outputWaits.textContent = "Not yet quantified";
}

/* ========================================================================== 
   00E. EVIDENCE SIDE PANEL
   ========================================================================== */

function createEvidenceCard(evidence) {
    const sourceMarkup = evidence.sourceUrl
        ? `<a class="evidence-source" href="${evidence.sourceUrl}" target="_blank" rel="noopener noreferrer">Read source ↗</a>`
        : `<span class="evidence-source evidence-source--missing">Source still required</span>`;

    return `
        <article class="evidence-card" id="evidence-${evidence.id}">
            <div class="evidence-card__topline">
                <span class="evidence-id">${evidence.id}</span>
                <span class="confidence confidence--${evidence.confidence.toLowerCase()}">${evidence.confidence} confidence</span>
            </div>
            <h3>${evidence.relationship}</h3>
            <p class="evidence-type">${evidence.evidenceType}</p>
            <p>${evidence.headlineEstimate}</p>
            <p><strong>Use in model:</strong> ${evidence.modelUse}</p>
            <p class="evidence-notes">${evidence.notes}</p>
            ${sourceMarkup}
        </article>
    `;
}

function renderEvidenceRegister() {
    evidenceSummary.textContent = `${evidenceRegister.length} evidence records: ${evidenceRegister.filter((item) => item.sourceUrl).length} sourced and ${evidenceRegister.filter((item) => !item.sourceUrl).length} still requiring evidence.`;
    evidenceList.innerHTML = evidenceRegister.map(createEvidenceCard).join("");
}

function focusEvidenceRecord(evidenceId) {
    const target = document.querySelector(`#evidence-${evidenceId}`);

    if (!target) {
        return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.add("evidence-card--highlighted");
    window.setTimeout(() => target.classList.remove("evidence-card--highlighted"), 1400);
}

/* ========================================================================== 
   00F. EVENT HANDLERS
   ========================================================================== */

gpChangeSlider.addEventListener("input", updateScenario);

document.querySelectorAll("[data-evidence-id]").forEach((button) => {
    button.addEventListener("click", () => focusEvidenceRecord(button.dataset.evidenceId));
});

/* ========================================================================== 
   00G. INITIAL PAGE RENDER
   ========================================================================== */

renderEvidenceRegister();
updateScenario();
