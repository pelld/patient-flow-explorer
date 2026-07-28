/* ========================================================================== 
   00A. DOMAIN ORDER AND ORIGINAL-ID MAPPING
   ========================================================================== */

window.HEALTH_SYSTEM_CATEGORIES = [
    "Primary care & access",
    "Ambulance & pre-hospital care",
    "A&E staffing & operations",
    "Hospital flow & discharge",
    "Admission avoidance & community care",
    "Mental health & specialist pathways"
];

const statementCategoryByOriginalId = {
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
    S52: "Admission avoidance & community care",
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
   00B. APPLY CATEGORIES BEFORE RENUMBERING
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.forEach((statement) => {
    const originalId = statement.sourceIds?.[0] || statement.id;
    statement.category = statementCategoryByOriginalId[originalId] || "Other";
});

/* ========================================================================== 
   00C. CLEAN DISPLAY IDS
   --------------------------------------------------------------------------
   Original source-record IDs remain in `sourceIds` for the audit trail. The
   visible cards and map use a fresh uninterrupted sequence after synthesis.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.forEach((statement, index) => {
    statement.id = `S${String(index + 1).padStart(2, "0")}`;
});
