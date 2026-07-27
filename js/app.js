/* ========================================================================== 
   00A. APPLICATION STATE AND SHARED REFERENCES
   ========================================================================== */

const statements = window.HEALTH_SYSTEM_STATEMENTS || [];
const statementsById = new Map(statements.map((item) => [item.id, item]));

const statementGrid = document.querySelector("#statement-grid");
const evidenceTooltip = document.querySelector("#evidence-tooltip");
const tooltipContent = document.querySelector("#tooltip-content");
const tooltipClose = document.querySelector("#tooltip-close");

let activeStatementCard = null;

/* ========================================================================== 
   01A. SMALL TEXT HELPERS
   ========================================================================== */

function toClassName(value) {
    return value.toLowerCase().replaceAll(" ", "-");
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
   02A. STATEMENT CARD RENDERING
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

function renderStatementCards() {
    statementGrid.innerHTML = statements.map(createStatementCardMarkup).join("");
}

/* ========================================================================== 
   03A. EVIDENCE TOOLTIP CONTENT
   ========================================================================== */

function createSourceMarkup(source) {
    return `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title} ↗</a></li>`;
}

function createEvidenceTooltipMarkup(statement) {
    const sourcesMarkup = statement.sources.length > 0
        ? `<ul class="tooltip-sources">${statement.sources.map(createSourceMarkup).join("")}</ul>`
        : `<p class="tooltip-source--missing">No direct source identified yet.</p>`;

    return `
        <p class="tooltip-kicker">${statement.id} · Adapted GRADE</p>
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
   03B. EVIDENCE TOOLTIP POSITIONING
   ========================================================================== */

function positionEvidenceTooltip(card) {
    const cardBox = card.getBoundingClientRect();
    const tooltipBox = evidenceTooltip.getBoundingClientRect();
    const pagePadding = 12;
    const gap = 9;

    let left = cardBox.left + (cardBox.width / 2) - (tooltipBox.width / 2);
    left = Math.max(pagePadding, Math.min(left, window.innerWidth - tooltipBox.width - pagePadding));

    let top = cardBox.bottom + gap;

    if (top + tooltipBox.height > window.innerHeight - pagePadding) {
        top = cardBox.top - tooltipBox.height - gap;
    }

    top = Math.max(pagePadding, top);

    evidenceTooltip.style.left = `${left}px`;
    evidenceTooltip.style.top = `${top}px`;
}

/* ========================================================================== 
   03C. EVIDENCE TOOLTIP OPEN AND CLOSE
   ========================================================================== */

function showEvidenceTooltip(card) {
    const statement = statementsById.get(card.dataset.statementId);

    if (!statement) {
        return;
    }

    activeStatementCard = card;
    tooltipContent.innerHTML = createEvidenceTooltipMarkup(statement);
    evidenceTooltip.hidden = false;
    positionEvidenceTooltip(card);
}

function hideEvidenceTooltip() {
    evidenceTooltip.hidden = true;
    activeStatementCard = null;
}

/* ========================================================================== 
   04A. EVENT HANDLERS
   ========================================================================== */

statementGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-statement-id]");

    if (!card) {
        return;
    }

    event.stopPropagation();

    if (activeStatementCard === card && !evidenceTooltip.hidden) {
        hideEvidenceTooltip();
        return;
    }

    showEvidenceTooltip(card);
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
    if (activeStatementCard && !evidenceTooltip.hidden) {
        positionEvidenceTooltip(activeStatementCard);
    }
});

/* ========================================================================== 
   05A. INITIAL PAGE RENDER
   ========================================================================== */

renderStatementCards();
