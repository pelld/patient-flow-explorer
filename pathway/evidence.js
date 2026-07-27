/* ========================================================================== 
   00A. EVIDENCE REGISTER
   ========================================================================== */

window.HEALTH_SYSTEM_EVIDENCE = [
    {
        id: "E01",
        title: "Getting a GP appointment and using A&E",
        confidence: "Moderate",
        estimate: "Practices where patients could get timely GP appointments had about 10% fewer self-referred A&E visits ending in discharge than practices with the poorest access.",
        meaning: "This supports the idea that easier GP access may reduce some A&E use, but it does not prove that extra appointments caused the difference.",
        sourceTitle: "Association between access to primary care and emergency department visits in England",
        sourceUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066699"
    },
    {
        id: "E02",
        title: "Extra GP access and minor A&E visits",
        confidence: "Moderate",
        estimate: "Extra evening and weekend GP access was linked to 26.4% fewer minor patient-initiated A&E visits. The estimated change in all A&E visits was only 3.1% and was not statistically significant.",
        meaning: "The study suggests the effect is much larger for minor A&E visits than for total A&E demand. It provided about three extra GP consultations for each minor A&E visit avoided.",
        sourceTitle: "Impact of extending general practice opening hours on emergency department attendance",
        sourceUrl: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002113"
    },
    {
        id: "E03",
        title: "A&E arrivals and A&E waits",
        confidence: "Low",
        estimate: "There is no single safe estimate for how a fall in arrivals changes waiting times.",
        meaning: "The result depends on local staffing, how ill patients are, admissions, available beds and discharge delays. The prototype therefore does not invent a number.",
        sourceTitle: "Local model still required",
        sourceUrl: ""
    }
];

/* ========================================================================== 
   00B. PROVISIONAL MODEL INPUTS
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
