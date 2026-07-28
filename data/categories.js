/* ========================================================================== 
   00A. DOMAIN ORDER AND STATEMENT MAPPING
   ========================================================================== */

window.HEALTH_SYSTEM_CATEGORIES = [
    "Primary care & access",
    "Ambulance & pre-hospital care",
    "A&E staffing & operations",
    "Hospital flow & discharge",
    "Admission avoidance & community care",
    "Mental health & specialist pathways"
];

const statementCategoryById = {
    S01: "Hospital flow & discharge",
    S02: "Hospital flow & discharge",
    S03: "Hospital flow & discharge",
    S04: "Primary care & access",
    S05: "Primary care & access",
    S06: "Primary care & access",
    S07: "Primary care & access",
    S08: "Primary care & access",
    S09: "A&E staffing & operations",
    S10: "Primary care & access",
    S11: "Primary care & access",
    S12: "A&E staffing & operations",
    S13: "Ambulance & pre-hospital care",
    S14: "A&E staffing & operations",
    S15: "A&E staffing & operations",
    S16: "A&E staffing & operations",
    S17: "Hospital flow & discharge",
    S18: "Admission avoidance & community care",
    S19: "Admission avoidance & community care",
    S20: "Primary care & access",
    S21: "Ambulance & pre-hospital care",
    S22: "Admission avoidance & community care",
    S23: "Admission avoidance & community care",
    S24: "A&E staffing & operations",
    S25: "A&E staffing & operations",
    S26: "Primary care & access",
    S27: "Primary care & access",
    S28: "Admission avoidance & community care",
    S29: "Admission avoidance & community care",
    S30: "Hospital flow & discharge",
    S31: "Mental health & specialist pathways",
    S32: "Ambulance & pre-hospital care",
    S33: "Admission avoidance & community care",
    S34: "A&E staffing & operations",
    S35: "Admission avoidance & community care",
    S36: "Primary care & access",
    S37: "Primary care & access",
    S38: "Admission avoidance & community care",
    S39: "Admission avoidance & community care",
    S40: "Admission avoidance & community care",
    S41: "Mental health & specialist pathways",
    S42: "Hospital flow & discharge",
    S43: "Admission avoidance & community care",
    S44: "Admission avoidance & community care",
    S45: "A&E staffing & operations",
    S46: "Admission avoidance & community care",
    S47: "Admission avoidance & community care",
    S48: "Admission avoidance & community care",
    S49: "Admission avoidance & community care",
    S50: "Admission avoidance & community care",
    S51: "Admission avoidance & community care",
    S53: "Admission avoidance & community care",
    S54: "Hospital flow & discharge",
    S55: "Mental health & specialist pathways",
    S56: "Hospital flow & discharge",
    S57: "Hospital flow & discharge",
    S58: "Admission avoidance & community care",
    S59: "Admission avoidance & community care",
    S60: "A&E staffing & operations",
    S61: "A&E staffing & operations",
    S62: "Hospital flow & discharge",
    S63: "Hospital flow & discharge",
    S64: "Hospital flow & discharge",
    S65: "Mental health & specialist pathways",
    S66: "A&E staffing & operations",
    S67: "A&E staffing & operations",
    S68: "Mental health & specialist pathways",
    S69: "Mental health & specialist pathways",
    S70: "Mental health & specialist pathways",
    S71: "Mental health & specialist pathways",
    S72: "Primary care & access",
    S73: "Admission avoidance & community care",
    S74: "Mental health & specialist pathways",
    S75: "Mental health & specialist pathways",
    S76: "Admission avoidance & community care",
    S77: "Admission avoidance & community care",
    S78: "Primary care & access",
    S79: "A&E staffing & operations",
    S80: "Hospital flow & discharge",
    S81: "Hospital flow & discharge",
    S82: "Hospital flow & discharge",
    S83: "Hospital flow & discharge",
    S84: "Hospital flow & discharge",
    S85: "Hospital flow & discharge",
    S86: "Hospital flow & discharge",
    S87: "Hospital flow & discharge",
    S88: "Mental health & specialist pathways",
    S89: "Mental health & specialist pathways",
    S90: "Mental health & specialist pathways",
    S91: "Hospital flow & discharge",
    S92: "Hospital flow & discharge",
    S93: "Hospital flow & discharge",
    S94: "Hospital flow & discharge",
    S95: "Hospital flow & discharge",
    S96: "Hospital flow & discharge",
    S97: "Hospital flow & discharge",
    S98: "Hospital flow & discharge",
    S99: "Hospital flow & discharge",
    S100: "Hospital flow & discharge",
    S101: "Hospital flow & discharge",
    S102: "Hospital flow & discharge",
    S103: "Mental health & specialist pathways",
    S104: "Mental health & specialist pathways",
    S105: "Mental health & specialist pathways",
    S106: "Mental health & specialist pathways",
    S107: "Mental health & specialist pathways",
    S108: "Hospital flow & discharge",
    S109: "Hospital flow & discharge",
    S110: "A&E staffing & operations",
    S111: "Hospital flow & discharge"
};

/* ========================================================================== 
   00B. SYNTHESIS CORRECTIONS
   --------------------------------------------------------------------------
   S33 and S52 described the same intervention, review and outcome. Keep one
   synthesised statement, retain the precise pooled estimate and remove S52.
   ========================================================================== */

const inpatientGeriatricAssessment = window.HEALTH_SYSTEM_STATEMENTS.find((statement) => statement.id === "S33");

if (inpatientGeriatricAssessment) {
    Object.assign(inpatientGeriatricAssessment, {
        statement: "Comprehensive geriatric assessment modestly increases the chance that admitted older people are alive and living at home",
        association: "Weak",
        evidence: "High",
        evidenceScore: 4,
        direction: "Supports the statement",
        finding: "A Cochrane review of 29 randomised trials involving 13,766 older people found a small but dependable increase in the chance of being alive and living at home at follow-up, with a risk ratio of 1.06.",
        design: "Cochrane systematic review of 29 randomised and cluster-randomised trials involving 13,766 older people.",
        riskOfBias: "No major concern — allocation was randomised, although blinding of this type of service intervention was not practical.",
        consistency: "No major concern — the direction was stable across a large international evidence base.",
        precision: "No major concern — the 95% confidence interval was 1.01 to 1.10.",
        directness: "Direct for older people admitted to acute hospital care, including services comparable with NHS geriatric care.",
        otherFactors: "The benefit comes from organised specialist geriatric care, not simply completion of an assessment form.",
        ratingReason: "The average effect is small but supported by a large randomised evidence base, giving High confidence in a Weak association."
    });
}

const duplicateStatementIndex = window.HEALTH_SYSTEM_STATEMENTS.findIndex((statement) => statement.id === "S52");

if (duplicateStatementIndex !== -1) {
    window.HEALTH_SYSTEM_STATEMENTS.splice(duplicateStatementIndex, 1);
}

/* ========================================================================== 
   00C. APPLY DOMAIN CATEGORIES
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.forEach((statement) => {
    statement.category = statementCategoryById[statement.id] || "Other";
});