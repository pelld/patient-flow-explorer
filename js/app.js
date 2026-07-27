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

function createScoreMarkup(label, value, type) {
    return `
        <span class="score score--${type}-${toClassName(value)}">
            <span>${label}</span>
            <strong>${value}</strong>
        </span>
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
                ${createScoreMarkup("Association", statement.association, "association")}
                ${createScoreMarkup("Evidence", statement.evidence, "evidence")}
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

function createEvidenceTooltipMarkup(statement) {
    const sourceMarkup = statement.sourceUrl
        ? `<a class="tooltip-source" href="${statement.sourceUrl}" target="_blank" rel="noopener noreferrer">Read the source ↗</a>`
        : `<span class="tooltip-source tooltip-source--missing">No direct source identified yet</span>`;

    return `
        <p class="tooltip-kicker">${statement.id}</p>
        <h2 id="tooltip-title">${statement.statement}</h2>

        <div class="tooltip-scores">
            ${createScoreMarkup("Association", statement.association, "association")}
            ${createScoreMarkup("Evidence", statement.evidence, "evidence")}
        </div>

        <dl class="tooltip-details">
            <div>
                <dt>What was found</dt>
                <dd>${statement.finding}</dd>
            </div>
            <div>
                <dt>Evidence available</dt>
                <dd>${statement.evidenceAvailable}</dd>
            </div>
            <div>
                <dt>Sample</dt>
                <dd>${statement.sample}</dd>
            </div>
            <div>
                <dt>Uncertainty</dt>
                <dd>${statement.uncertainty}</dd>
            </div>
            <div>
                <dt>Replication</dt>
                <dd>${statement.replication}</dd>
            </div>
        </dl>

        ${sourceMarkup}
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
