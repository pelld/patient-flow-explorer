/* ========================================================================== 
   00A. EVIDENCE REGISTER
   --------------------------------------------------------------------------
   Every modelled relationship should point to one or more records here.
   Evidence, local estimates and assumptions are deliberately kept separate.
   ========================================================================== */

window.HEALTH_SYSTEM_EVIDENCE = [
    {
        id: "E01",
        relationship: "Timely GP access → self-referred A&E attendance",
        evidenceType: "Observational association",
        confidence: "Moderate",
        headlineEstimate: "Practices with the best timely access had around 10% fewer self-referred A&E attendances ending in discharge than practices with the poorest access.",
        modelUse: "Supports the direction of the relationship; not used as a direct causal coefficient.",
        sourceTitle: "Association between access to primary care and emergency department visits in England",
        sourceUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066699",
        notes: "Practice-level observational analysis. Residual confounding and reverse causality remain possible."
    },
    {
        id: "E02",
        relationship: "Extended GP access → minor patient-initiated A&E attendance",
        evidenceType: "Quasi-experimental evaluation",
        confidence: "Moderate",
        headlineEstimate: "Extended evening and weekend GP access was associated with 26.4% fewer minor patient-initiated A&E attendances; the estimated reduction in all A&E attendance was 3.1% and was not statistically significant.",
        modelUse: "Supports a larger effect on minor A&E activity than on total A&E activity.",
        sourceTitle: "Impact of extending general practice opening hours on emergency department attendance",
        sourceUrl: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002113",
        notes: "The intervention provided roughly three additional GP consultations for each minor A&E attendance avoided."
    },
    {
        id: "E03",
        relationship: "A&E arrivals → A&E waits",
        evidenceType: "Unquantified relationship",
        confidence: "Low",
        headlineEstimate: "No general coefficient is currently applied. The effect depends on local staffing, acuity, admissions, bed occupancy and discharge flow.",
        modelUse: "The prototype reports this outcome as not yet modelled rather than inventing a precise estimate.",
        sourceTitle: "Local arrival-to-wait model required",
        sourceUrl: "",
        notes: "A later version should estimate this relationship using hospital-level time-series or queueing/simulation analysis."
    }
];

/* ========================================================================== 
   00B. PROVISIONAL MODEL INPUTS
   --------------------------------------------------------------------------
   These values demonstrate how the decision tool will work. They are not
   operational estimates and are clearly identified as assumptions on screen.
   ========================================================================== */

window.HEALTH_SYSTEM_MODEL = {
    baselineUrgentGpAppointments: 100000,
    baselineMinorAeAttendances: 10000,
    baselineTotalAeAttendances: 50000,
    gpAppointmentUtilisation: 0.90,
    additionalGpAppointmentsPerMinorAeAvoided: 3.00,
    maximumSubstitutableMinorAeShare: 0.30,
    evidenceIds: ["E01", "E02", "E03"]
};
