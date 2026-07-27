/* ========================================================================== 
   00A. APPLICATION STATE AND SHARED REFERENCES
   ========================================================================== */

const statements = window.HEALTH_SYSTEM_STATEMENTS || [];
const categoryOrder = window.HEALTH_SYSTEM_CATEGORIES || [];
const statementsById = new Map(statements.map((item) => [item.id, item]));

const statementGrid = document.querySelector("#statement-grid");
const evidenceMap = document.querySelector("#evidence-map");
const categoryLegend = document.querySelector("#category-legend");
const evidenceTooltip = document.querySelector("#evidence-tooltip");
const tooltipContent = document.querySelector("#tooltip-content");
const tooltipClose = document.querySelector("#tooltip-close");

let activeEvidenceTrigger = null;

/* ========================================================================== 
   01A. SMALL TEXT AND CLASS HELPERS
   ========================================================================== */

function toClassName(value) {
    return value.toLowerCase().replaceAll("&", "and").replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/(^-|-$)/g, "");
}

function createAssociationMarkup(value) {
    return `
        <span class="score score--association-${toClassName(value)}">
            <span>Association</span>
            <strong>${value}</strong>
        </span>
    `;
}

function createEvidenceMarkup(statement) {
    return `
        <span class="score score--evidence-${toClassName(statement.evidence)}">
            <span>Evidence</span>
            <strong>${statement.evidenceScore}/4 · ${statement.evidence}</strong>
        </span>
    `;
}

function createDomainMarkup(label, value) {
    return `
        <div>
            <dt>${label}</dt>
            <dd>${value}</dd>
        </div>
    `;
}

/* ========================================================================== 
   02A. CATEGORISED STATEMENT CARD RENDERING
   ========================================================================== */

function createStatementCardMarkup(statement) {
    return `
        <button class="statement-card" type="button" data-statement-id="${statement.id}" aria-label="Open evidence for: ${statement.statement}">
            <div class="statement-card__text">${statement.statement}</div>
            <div class="statement-card__scores">
                ${createAssociationMarkup(statement.association)}
                ${createEvidenceMarkup(statement)}
            </div>
        </button>
    `;
}

function createCategorySectionMarkup(category) {
    const categoryStatements = statements.filter((statement) => statement.category === category);

    if (categoryStatements.length === 0) {
        return "";
    }

    return `
        <section class="category-section" id="category-${toClassName(category)}">
            <header class="category-heading">
                <h2><span class="category-dot category-dot--${toClassName(category)}"></span>${category}</h2>
                <span>${categoryStatements.length} statements</span>
            </header>
            <div class="statement-grid">
                ${categoryStatements.map(createStatementCardMarkup).join("")}
            </div>
        </section>
    `;
}

function renderStatementCards() {
    statementGrid.innerHTML = categoryOrder.map(createCategorySectionMarkup).join("");
}

/* ========================================================================== 
   03A. EVIDENCE MAP POSITIONING
   --------------------------------------------------------------------------
   Unknown is shown near the left because there is no dependable observed
   association. It is kept separate from "None" in the visible axis labels.
   ========================================================================== */

const associationPosition = {
    None: 8,
    Unknown: 22,
    Weak: 38,
    Moderate: 68,
    Strong: 92
};

const evidencePosition = {
    1: 90,
    2: 66,
    3: 34,
    4: 10
};

const jitterOffsets = [
    [0, 0], [-3, -2], [3, 2], [-5, 3], [5, -3], [-7, -1], [7, 1], [-2, 5], [2, -5]
];

function createMapPointMarkup(statement, duplicateIndex) {
    const offset = jitterOffsets[duplicateIndex % jitterOffsets.length];
    const x = Math.max(4, Math.min(96, associationPosition[statement.association] + offset[0]));
    const y = Math.max(5, Math.min(95, evidencePosition[statement.evidenceScore] + offset[1]));
    const categoryClass = toClassName(statement.category);

    return `
        <button
            class="map-point map-point--${categoryClass}"
            type="button"
            data-statement-id="${statement.id}"
            style="--point-x: ${x}%; --point-y: ${y}%;"
            aria-label="${statement.id}: ${statement.statement}"
            title="${statement.id}: ${statement.statement}">
            ${statement.id.replace("S", "")}
        </button>
    `;
}

function renderEvidenceMap() {
    const duplicateCounts = new Map();

    const points = statements.map((statement) => {
        const key = `${statement.association}-${statement.evidenceScore}`;
        const duplicateIndex = duplicateCounts.get(key) || 0;
        duplicateCounts.set(key, duplicateIndex + 1);
        return createMapPointMarkup(statement, duplicateIndex);
    }).join("");

    evidenceMap.innerHTML = `
        <div class="map-quadrant map-quadrant--top-left">Stronger evidence,<br>smaller or unclear effect</div>
        <div class="map-quadrant map-quadrant--top-right">Stronger case<br>to consider action</div>
        <div class="map-quadrant map-quadrant--bottom-left">Insufficient evidence<br>to decide</div>
        <div class="map-quadrant map-quadrant--bottom-right">Promising — test<br>and evaluate</div>

        <div class="map-axis map-axis--vertical"></div>
        <div class="map-axis map-axis--horizontal"></div>
        <div class="map-axis-title map-axis-title--y">Evidence strength</div>
        <div class="map-axis-title map-axis-title--x">Association strength</div>

        <div class="map-y-label map-y-label--high">4/4 High</div>
        <div class="map-y-label map-y-label--moderate">3/4 Moderate</div>
        <div class="map-y-label map-y-label--low">2/4 Low</div>
        <div class="map-y-label map-y-label--very-low">1/4 Very low</div>

        <div class="map-x-label map-x-label--none">None</div>
        <div class="map-x-label map-x-label--unknown">Unknown</div>
        <div class="map-x-label map-x-label--weak">Weak</div>
        <div class="map-x-label map-x-label--moderate">Moderate</div>
        <div class="map-x-label map-x-label--strong">Strong</div>

        ${points}
    `;

    categoryLegend.innerHTML = categoryOrder.map((category) => `
        <span><span class="category-dot category-dot--${toClassName(category)}"></span>${category}</span>
    `).join("");
}

/* ========================================================================== 
   04A. EVIDENCE TOOLTIP CONTENT
   ========================================================================== */

function createSourceMarkup(source) {
    return `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title} ↗</a></li>`;
}

function createEvidenceTooltipMarkup(statement) {
    const sources = statement.sources || [];
    const sourcesMarkup = sources.length > 0
        ? `<ul class="tooltip-sources">${sources.map(createSourceMarkup).join("")}</ul>`
        : `<p class="tooltip-source--missing">No direct source identified yet.</p>`;

    const publicationBias = statement.publicationBias || "Not assessed separately in this initial rapid review.";

    return `
        <p class="tooltip-kicker">${statement.id} · ${statement.category} · Adapted GRADE</p>
        <h2 id="tooltip-title">${statement.statement}</h2>

        <div class="tooltip-scores">
            ${createAssociationMarkup(statement.association)}
            ${createEvidenceMarkup(statement)}
        </div>

        <p class="tooltip-direction"><strong>Direction:</strong> ${statement.direction}</p>
        <p class="tooltip-finding">${statement.finding}</p>

        <dl class="tooltip-details">
            ${createDomainMarkup("Design", statement.design)}
            ${createDomainMarkup("Risk of bias", statement.riskOfBias)}
            ${createDomainMarkup("Consistency", statement.consistency)}
            ${createDomainMarkup("Precision", statement.precision)}
            ${createDomainMarkup("Directness", statement.directness)}
            ${createDomainMarkup("Publication bias", publicationBias)}
            ${createDomainMarkup("Other factors", statement.otherFactors)}
            ${createDomainMarkup("Why this rating?", statement.ratingReason)}
        </dl>

        <div class="tooltip-source-block">
            <h3>Sources</h3>
            ${sourcesMarkup}
        </div>
    `;
}

/* ========================================================================== 
   04B. EVIDENCE TOOLTIP POSITIONING
   ========================================================================== */

function positionEvidenceTooltip(trigger) {
    const triggerBox = trigger.getBoundingClientRect();
    const tooltipBox = evidenceTooltip.getBoundingClientRect();
    const pagePadding = 12;
    const gap = 9;

    let left = triggerBox.left + (triggerBox.width / 2) - (tooltipBox.width / 2);
    left = Math.max(pagePadding, Math.min(left, window.innerWidth - tooltipBox.width - pagePadding));

    let top = triggerBox.bottom + gap;

    if (top + tooltipBox.height > window.innerHeight - pagePadding) {
        top = triggerBox.top - tooltipBox.height - gap;
    }

    evidenceTooltip.style.left = `${left}px`;
    evidenceTooltip.style.top = `${Math.max(pagePadding, top)}px`;
}

/* ========================================================================== 
   04C. EVIDENCE TOOLTIP OPEN AND CLOSE
   ========================================================================== */

function showEvidenceTooltip(trigger) {
    const statement = statementsById.get(trigger.dataset.statementId);

    if (!statement) {
        return;
    }

    activeEvidenceTrigger = trigger;
    tooltipContent.innerHTML = createEvidenceTooltipMarkup(statement);
    evidenceTooltip.hidden = false;
    positionEvidenceTooltip(trigger);
}

function hideEvidenceTooltip() {
    evidenceTooltip.hidden = true;
    activeEvidenceTrigger = null;
}

/* ========================================================================== 
   05A. SHARED CLICK HANDLER
   ========================================================================== */

function handleEvidenceTriggerClick(event) {
    const trigger = event.target.closest("[data-statement-id]");

    if (!trigger) {
        return;
    }

    event.stopPropagation();

    if (activeEvidenceTrigger === trigger && !evidenceTooltip.hidden) {
        hideEvidenceTooltip();
        return;
    }

    showEvidenceTooltip(trigger);
}

statementGrid.addEventListener("click", handleEvidenceTriggerClick);
evidenceMap.addEventListener("click", handleEvidenceTriggerClick);

tooltipClose.addEventListener("click", hideEvidenceTooltip);
evidenceTooltip.addEventListener("click", (event) => event.stopPropagation());
document.addEventListener("click", hideEvidenceTooltip);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        hideEvidenceTooltip();
    }
});

window.addEventListener("resize", () => {
    if (activeEvidenceTrigger && !evidenceTooltip.hidden) {
        positionEvidenceTooltip(activeEvidenceTrigger);
    }
});

/* ========================================================================== 
   06A. INITIAL PAGE RENDER
   ========================================================================== */

renderEvidenceMap();
renderStatementCards();
