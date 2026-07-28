/* ========================================================================== 
   00A. SYNTHESIS AUDIT
   --------------------------------------------------------------------------
   The original rapid review accumulated 111 source records. This layer merges
   duplicate or substantially overlapping records before the categories and
   chart are rendered. The original IDs remain available in `sourceIds`.
   ========================================================================== */

const evidenceRegister = window.HEALTH_SYSTEM_STATEMENTS || [];

/* ========================================================================== 
   00B. SHARED AUDIT HELPERS
   ========================================================================== */

evidenceRegister.forEach((statement) => {
    statement.sourceIds = statement.sourceIds || [statement.id];
});

function deduplicateSources(sources) {
    const seen = new Set();

    return sources.filter((source) => {
        const key = source.url || source.title;

        if (seen.has(key)) {
            return false;
        }

        seen.add(key);
        return true;
    });
}

function synthesiseStatements(keepId, removeIds, replacement) {
    const keepStatement = evidenceRegister.find((statement) => statement.id === keepId);
    const mergedStatements = [keepId, ...removeIds]
        .map((id) => evidenceRegister.find((statement) => statement.id === id))
        .filter(Boolean);

    if (!keepStatement || mergedStatements.length === 0) {
        return;
    }

    const sourceIds = [...new Set(mergedStatements.flatMap((statement) => statement.sourceIds || [statement.id]))];
    const sources = deduplicateSources(mergedStatements.flatMap((statement) => statement.sources || []));

    Object.assign(keepStatement, replacement, {
        sourceIds,
        sources
    });

    removeIds.forEach((id) => {
        const removeIndex = evidenceRegister.findIndex((statement) => statement.id === id);

        if (removeIndex !== -1) {
            evidenceRegister.splice(removeIndex, 1);
        }
    });
}

function reviseStatement(id, replacement) {
    const statement = evidenceRegister.find((item) => item.id === id);

    if (statement) {
        Object.assign(statement, replacement);
    }
}

/* ========================================================================== 
   01A. SYSTEM FLOW AND URGENT-CARE ACCESS
   ========================================================================== */

synthesiseStatements("S02", ["S03"], {
    statement: "Poor hospital discharge flow is associated with longer A&E waits; delayed-transfer counts alone are a less reliable measure",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports the broader flow relationship",
    finding: "National English daily data show that lower discharges relative to admissions are associated with more A&E stays over four hours. A separate reanalysis found that the direct relationship between recorded delayed transfers and A&E breaches was not robust after shared time trends were considered.",
    design: "National routine-data analyses using hospital fixed effects and time-series reanalysis.",
    riskOfBias: "Serious concern — discharge flow, bed pressure and A&E performance may all reflect wider hospital strain, and the analyses remain observational.",
    consistency: "No major concern for the broader discharge-flow mechanism; serious concern for using recorded delayed transfers as a stand-alone causal measure.",
    precision: "No major concern for the daily discharge-flow estimates; no dependable direct effect estimate is available for delayed-transfer counts.",
    directness: "Direct for English NHS hospitals and A&E waiting performance.",
    otherFactors: "This separates a reasonably consistent system-flow relationship from a much weaker claim about one administrative delayed-transfer indicator.",
    ratingReason: "The synthesis supports hospital discharge flow as a relevant A&E pressure, while avoiding a stronger causal claim for delayed-transfer counts than the evidence allows."
});

synthesiseStatements("S04", ["S05"], {
    statement: "Early NHS 111 implementation did not reduce A&E or ambulance use",
    association: "None",
    evidence: "Low",
    evidenceScore: 2,
    direction: "Does not support demand substitution",
    finding: "A controlled evaluation of the first NHS 111 pilot sites found no attributable reduction in A&E attendance or ambulance calls and estimated a 2.9% increase in ambulance incidents.",
    design: "Controlled before-and-after time-series study using four pilot areas and three matched control areas.",
    riskOfBias: "Serious concern — pilot areas were not randomised and urgent-care services changed concurrently.",
    consistency: "Some concern — the finding is consistent with earlier telephone-triage evidence, but current NHS 111 pathways differ from the early pilots.",
    precision: "No major concern for the reported increase in ambulance incidents; less detail was available for the null A&E estimate.",
    directness: "Direct for early NHS 111 implementation in England and partly indirect for the present service.",
    otherFactors: "The result should not be read as evidence that every current NHS 111 pathway is ineffective.",
    ratingReason: "The best controlled evidence for the early service does not support a reduction in downstream urgent-care use, but transferability to the modern service is limited."
});

synthesiseStatements("S06", ["S07", "S08"], {
    statement: "Improved GP access reduces some minor or self-referred A&E visits, but has little clear effect on total attendance",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports limited substitution",
    finding: "More accessible practices had about 10% fewer self-referred A&E visits ending in discharge. A controlled Greater Manchester evaluation found 26.4% fewer minor patient-initiated visits after extended access, but only a small and statistically unclear 3.1% reduction in total A&E attendance.",
    design: "Large national cross-sectional analysis and a matched difference-in-differences evaluation.",
    riskOfBias: "Some concern — neither intervention was randomised and practice participation or local population differences may explain part of the association.",
    consistency: "Some concern — effects are more consistent for minor or self-referred attendance than for total A&E demand.",
    precision: "No major concern for the minor-attendance estimates; serious concern for the small total-attendance estimate.",
    directness: "Direct for English general practice and A&E attendance, but not for A&E waiting times.",
    otherFactors: "The evidence supports substitution of selected lower-acuity activity rather than a large system-wide reduction.",
    ratingReason: "Combining the studies gives Moderate confidence that access affects some minor attendance, while showing that the effect on total demand is much smaller and less certain."
});

synthesiseStatements("S14", ["S34"], {
    statement: "Doctor-supported A&E triage reduces length of stay and patients leaving without being seen",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports the statement",
    finding: "Meta-analyses estimate that physician-supported triage shortens A&E length of stay by about 22 minutes and reduces the proportion leaving without being seen, with one pooled risk ratio of 0.62.",
    design: "Systematic reviews and meta-analyses of controlled and observational A&E evaluations.",
    riskOfBias: "Some concern — many studies were before-and-after evaluations and physician triage was often introduced with wider streaming changes.",
    consistency: "No major concern for the direction of both flow outcomes, although the exact model varied.",
    precision: "No major concern for pooled length-of-stay and leaving-without-being-seen estimates.",
    directness: "Direct for A&E flow outcomes, but much of the evidence comes from non-UK health systems.",
    otherFactors: "The intervention requires an additional senior clinical resource and may move rather than remove workload.",
    ratingReason: "The two related outcomes point in the same direction, supporting a real but locally dependent improvement in front-door flow."
});

/* ========================================================================== 
   02A. ADMISSION AVOIDANCE, GERIATRIC CARE AND DISCHARGE
   ========================================================================== */

synthesiseStatements("S18", ["S19", "S76"], {
    statement: "Admission-avoidance hospital at home is a credible alternative to inpatient care and may reduce residential care and costs",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports the model for selected patients",
    finding: "Randomised evidence shows little or no difference in mortality or later readmission for selected older patients treated at home. It also suggests fewer people living in residential care at six months and probably lower health-service costs.",
    design: "Cochrane systematic review of randomised controlled trials, including clinical and economic outcomes.",
    riskOfBias: "Some concern — services, eligibility criteria, usual care and costing methods differed between trials.",
    consistency: "No major concern for mortality; some concern for readmission, residential-care and cost outcomes.",
    precision: "Moderate precision overall; the residential-care estimate was comparatively precise, while no single transferable cost figure was available.",
    directness: "Direct for selected older people who would otherwise require admission, not for all acute patients.",
    otherFactors: "Patient selection and the availability of reliable acute home support are central to safe implementation.",
    ratingReason: "The synthesis supports hospital at home as a viable alternative rather than a universally superior replacement for inpatient care."
});

synthesiseStatements("S28", ["S67"], {
    statement: "Geriatric assessment pathways in A&E may reduce hospital admission for older people, but the size of benefit is uncertain",
    association: "Moderate",
    evidence: "Low",
    evidenceScore: 2,
    direction: "Supports the statement, with uncertainty",
    finding: "Consultant-geriatrician-led A&E assessment studies generally reported fewer admissions, with reductions ranging from 2.6% to 19.7%. Evidence from geriatric observation units is also favourable, but comparative analyses have not established a dependable admission reduction.",
    design: "Systematic reviews of mainly observational before-and-after and comparative studies.",
    riskOfBias: "Serious concern — patient selection, community capacity, observation-unit criteria and concurrent service changes may explain part of the effect.",
    consistency: "Some concern — the direction is usually favourable, but models and effect sizes vary substantially.",
    precision: "Serious concern — no robust pooled number of admissions avoided is available.",
    directness: "Direct for older people assessed in A&E; several studies were UK-based.",
    otherFactors: "Assessment, observation and rapid access to community support are often bundled together.",
    ratingReason: "The pathway is promising and NHS-relevant, but the evidence cannot isolate the effective component or forecast a standard admission reduction."
});

synthesiseStatements("S29", ["S53"], {
    statement: "Community comprehensive geriatric assessment may modestly reduce unplanned admissions among frail older people",
    association: "Weak",
    evidence: "Low",
    evidenceScore: 2,
    direction: "Possible small reduction",
    finding: "A Cochrane review estimated fewer unplanned admissions after community comprehensive geriatric assessment, with a pooled risk ratio of 0.83 across six studies, but the upper confidence limit was close to no effect.",
    design: "Cochrane systematic review of randomised and cluster-randomised trials involving 1,716 community-dwelling frail older people.",
    riskOfBias: "Serious concern — only a minority of studies were at low risk of bias and models differed.",
    consistency: "Some concern — programmes were delivered in homes, practices and community clinics.",
    precision: "Serious concern — the upper confidence limit was 0.99.",
    directness: "Direct for frail older people living in the community, not for the wider population.",
    otherFactors: "Little or no effect was demonstrated for mortality or care-home admission, and A&E evidence was very uncertain.",
    ratingReason: "The pooled result supports, at most, a modest admission benefit for selected frail people."
});

synthesiseStatements("S30", ["S42", "S81", "S82", "S83"], {
    statement: "Individualised discharge planning modestly shortens hospital stay and reduces readmissions, without a clear mortality effect",
    association: "Weak",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports small flow benefits",
    finding: "Cochrane randomised evidence suggests an average hospital stay about 0.7 days shorter and an 11% relative reduction in readmission over roughly three months. An older-person review reported a larger readmission estimate but may include overlapping trials. Mortality was broadly unchanged.",
    design: "Cochrane systematic review of randomised trials, considered alongside an older-person review of systematic reviews.",
    riskOfBias: "Some concern — discharge-planning content ranged from simple plans to intensive coordination, and overlapping primary studies may appear in the older-person synthesis.",
    consistency: "No major concern for a small readmission benefit; some concern for length of stay because effect sizes varied.",
    precision: "No major concern for the main pooled length-of-stay and readmission estimates; mortality estimates exclude a very large effect but allow modest benefit or harm.",
    directness: "Direct for medical inpatients leaving acute hospital care, particularly older adults.",
    otherFactors: "The average effects are credible but modest and should not be interpreted as a complete solution to discharge constraints.",
    ratingReason: "A single synthesis better represents the evidence than separate cards for the same discharge-planning review and outcomes."
});

synthesiseStatements("S33", ["S52", "S64"], {
    statement: "Organised comprehensive geriatric care produces small but dependable improvements in living at home and functional outcomes",
    association: "Weak",
    evidence: "High",
    evidenceScore: 4,
    direction: "Supports the statement",
    finding: "A Cochrane review of 29 randomised trials involving 13,766 older people found a small but dependable increase in the chance of being alive and living at home, with a risk ratio of 1.06. Reviews of dedicated geriatric units also found less functional decline and institutional care.",
    design: "Cochrane systematic review of randomised and cluster-randomised trials, supported by reviews of multidisciplinary geriatric units.",
    riskOfBias: "No major concern for the principal outcome — allocation was randomised, although service delivery could not be blinded.",
    consistency: "No major concern — benefits are most consistent for living at home, function and institutional care rather than mortality or readmission.",
    precision: "No major concern — the principal 95% confidence interval was 1.01 to 1.10.",
    directness: "Direct for older people admitted to acute hospital care.",
    otherFactors: "The benefit comes from organised specialist multidisciplinary care, not simply completion of an assessment form.",
    ratingReason: "The average effect is small, but the large randomised evidence base gives High confidence that it is real."
});

synthesiseStatements("S38", ["S39"], {
    statement: "Post-discharge virtual wards reduce later A&E visits, but readmission benefits vary by condition",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports a selective benefit",
    finding: "A meta-analysis of 24 randomised trials found 17% fewer later A&E visits. Readmissions fell in heart-failure trials but did not clearly fall across other diagnoses, where the pooled risk ratio was 0.96.",
    design: "Systematic review and meta-analysis of 24 randomised controlled trials involving 10,876 patients.",
    riskOfBias: "Some concern — programme components, intensity and diagnostic groups varied.",
    consistency: "Some concern — the A&E effect was favourable, while readmission effects differed by condition.",
    precision: "No major concern for the pooled A&E estimate or the conclusion that a large non-heart-failure readmission effect is unlikely.",
    directness: "Direct for post-discharge virtual-ward transitional care, not admission-avoidance virtual wards.",
    otherFactors: "One system-wide readmission assumption should not be applied to every virtual-ward cohort.",
    ratingReason: "The synthesis preserves the positive A&E finding while making the diagnosis-specific readmission limitation explicit."
});

/* ========================================================================== 
   03A. CONDITION-SPECIFIC COMMUNITY AND POST-DISCHARGE CARE
   ========================================================================== */

synthesiseStatements("S46", ["S47"], {
    statement: "Pulmonary rehabilitation after a COPD admission probably reduces readmissions, but mortality benefit is uncertain",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports readmission benefit",
    finding: "A Cochrane review found fewer readmissions after post-exacerbation pulmonary rehabilitation, with a pooled odds ratio of 0.44. The mortality estimate was imprecise and compatible with substantial benefit, little effect or harm.",
    design: "Cochrane systematic review of randomised trials; eight studies contributed readmission data and six contributed mortality data.",
    riskOfBias: "Some concern — trials were often small and programme intensity and quality varied.",
    consistency: "Serious concern — readmission effects differed between programmes and newer trials were less favourable.",
    precision: "Some concern for readmission and very serious concern for mortality.",
    directness: "Direct for people recently admitted with a COPD exacerbation.",
    otherFactors: "Quality-of-life and exercise-capacity benefits are clearer than mortality benefit.",
    ratingReason: "The evidence supports readmission reduction for some programmes, but mortality should not be included as a dependable planning benefit."
});

synthesiseStatements("S48", ["S49"], {
    statement: "Supported COPD self-management reduces respiratory admissions more clearly than all-cause admissions",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports a disease-specific benefit",
    finding: "Supported self-management including an exacerbation action plan reduced the chance of a respiratory-related admission, with a pooled odds ratio of 0.69. The all-cause admission estimate was smaller and its confidence interval included no effect.",
    design: "Cochrane systematic review of 22 randomised trials involving 3,854 people.",
    riskOfBias: "Some concern — participants and staff could not be blinded and intervention content differed.",
    consistency: "Some concern — benefits were clearer for COPD-related admissions than total hospital use.",
    precision: "No major concern for respiratory admissions; serious concern for all-cause admissions.",
    directness: "Direct for people with COPD receiving supported self-management rather than a leaflet alone.",
    otherFactors: "Repeated professional support appears central to the intervention.",
    ratingReason: "The synthesis avoids treating a credible disease-specific effect as an equivalent reduction in every hospital admission."
});

synthesiseStatements("S50", ["S51"], {
    statement: "Home telemonitoring for heart failure reduces heart-failure admissions, but not clearly all-cause admissions",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports a disease-specific benefit",
    finding: "A Cochrane review found that non-invasive telemonitoring reduced heart-failure hospitalisation, with a pooled risk ratio of 0.71. It found no clear reduction in all-cause hospitalisation, where the pooled risk ratio was 0.95.",
    design: "Cochrane systematic review of randomised trials of structured telephone support and non-invasive telemonitoring.",
    riskOfBias: "Some concern — technologies, clinical responses and usual care differed between trials.",
    consistency: "No major concern for heart-failure admissions; serious concern for all-cause admissions because heterogeneity was high.",
    precision: "No major concern for both pooled estimates, although the all-cause estimate was close to no effect.",
    directness: "Direct for people with heart failure monitored at home.",
    otherFactors: "Monitoring is most plausible when abnormal results trigger an effective clinical response.",
    ratingReason: "The evidence supports fewer heart-failure admissions, not an equivalent reduction in total hospital demand."
});

synthesiseStatements("S56", ["S57"], {
    statement: "Acute medical units probably shorten hospital stay; mortality benefit is uncertain",
    association: "Moderate",
    evidence: "Low",
    evidenceScore: 2,
    direction: "Supports a flow benefit",
    finding: "Systematic reviews generally found shorter hospital stays after acute medical units were introduced, with reductions of about 0.3 to 2.6 days. Mortality usually moved in a favourable direction, but the evidence could not separate the unit effect from wider hospital changes.",
    design: "Systematic reviews of mainly observational before-and-after and comparative hospital studies.",
    riskOfBias: "Serious concern — units were introduced alongside staffing, coding and pathway changes and hospitals were not randomised.",
    consistency: "Some concern — length of stay generally improved, while mortality findings were less consistent.",
    precision: "Serious concern — no single dependable pooled number of days or mortality effect was available.",
    directness: "Direct for acute medical admissions in NHS-relevant hospital models.",
    otherFactors: "The active components of the model remain unclear.",
    ratingReason: "The evidence is more credible for shorter stay than for mortality, and both remain vulnerable to service-level confounding."
});

synthesiseStatements("S58", ["S59"], {
    statement: "Enhanced healthcare in care homes may reduce unplanned admissions, but does not clearly reduce A&E transfers",
    association: "Weak",
    evidence: "Low",
    evidenceScore: 2,
    direction: "Possible admission benefit",
    finding: "A Cochrane review found that multidisciplinary, outreach and enhanced-primary-care models may reduce unplanned hospital admissions from care facilities, but may make little or no difference to A&E transfers.",
    design: "Cochrane systematic review of randomised and non-randomised evaluations of varied care-home models.",
    riskOfBias: "Serious concern — interventions differed substantially and several studies were small or non-randomised.",
    consistency: "Serious concern — models and outcomes varied, and admission and A&E findings did not align fully.",
    precision: "Serious concern — no robust transferable effect estimate was available.",
    directness: "Partly direct for care-home residents; most evidence came from health systems organised differently from the NHS.",
    otherFactors: "A pathway may prevent admission after assessment without eliminating the emergency assessment itself.",
    ratingReason: "The synthesis prevents the possible admission effect from being mistaken for an established reduction in A&E demand."
});

/* ========================================================================== 
   04A. MEDICINES, STROKE, HIP FRACTURE AND HEART FAILURE
   ========================================================================== */

synthesiseStatements("S84", ["S62", "S85"], {
    statement: "Medication review alone has, at most, a small effect on readmissions and no clear effect on later A&E use",
    association: "Weak",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports only a small or uncertain utilisation benefit",
    finding: "A broad Cochrane review found a small reduction in readmissions, with a pooled risk ratio of 0.93. A network meta-analysis found no clear benefit from isolated medication review among older people, and later A&E use was also statistically uncertain.",
    design: "Systematic reviews and meta-analyses of randomised trials of medication review in hospitalised or recently discharged adults.",
    riskOfBias: "Some concern — review models, populations, timing and post-discharge support varied.",
    consistency: "Serious concern — broader reviews were slightly favourable, while isolated-review analyses were null and multi-component packages performed better.",
    precision: "No major concern for the small overall readmission estimate; serious concern for isolated review and A&E outcomes.",
    directness: "Direct for hospitalised adults, particularly older people with polypharmacy.",
    otherFactors: "Medication review combined with reconciliation, education and transitional care is represented separately because it is a materially different intervention.",
    ratingReason: "The synthesis resolves apparently conflicting cards by distinguishing a small average effect from the absence of a dependable benefit from review alone."
});

synthesiseStatements("S68", ["S69"], {
    statement: "Organised stroke-unit care reduces death or dependency and increases independent living at home",
    association: "Strong",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports the statement",
    finding: "A Cochrane network meta-analysis found lower death or dependency with stroke-unit care, with an odds ratio of 0.75. For every 100 people treated, about six additional people were living at home and six additional people were independent in daily activities.",
    design: "Cochrane systematic review and network meta-analysis of 29 randomised trials involving 5,902 people.",
    riskOfBias: "Some concern — ward allocation was randomised but the service model could not be blinded.",
    consistency: "No major concern — benefits were seen across age, sex, stroke type and initial severity.",
    precision: "No major concern for the main pooled outcomes.",
    directness: "Direct for people admitted after acute stroke.",
    otherFactors: "Benefits were clearest in dedicated stroke wards rather than mobile teams working across general wards.",
    ratingReason: "The outcomes form one coherent patient-centred conclusion and are better presented as a single stroke-unit synthesis."
});

synthesiseStatements("S70", ["S71"], {
    statement: "Orthogeriatric collaboration probably reduces mortality after hip fracture and may shorten hospital stay",
    association: "Moderate",
    evidence: "Low",
    evidenceScore: 2,
    direction: "Supports the statement, with uncertainty",
    finding: "Meta-analyses found lower in-hospital and longer-term mortality with orthogeriatric care. Length of stay also tended to fall, particularly in shared-care models, but the size of the bed-day effect varied greatly.",
    design: "Systematic reviews and meta-analyses of predominantly non-randomised comparative studies.",
    riskOfBias: "Serious concern — adopting hospitals often introduced faster surgery, rehabilitation and other pathway improvements at the same time.",
    consistency: "Some concern for mortality and serious concern for length of stay.",
    precision: "No major concern for pooled mortality estimates; no clean transferable number of days saved.",
    directness: "Direct for older patients admitted with hip fracture.",
    otherFactors: "Dedicated shared-care or orthogeriatric-ward models appear more favourable than consultation alone.",
    ratingReason: "The synthesis preserves the stronger mortality signal while presenting length of stay as a secondary, more variable benefit."
});

synthesiseStatements("S74", ["S75"], {
    statement: "Heart-failure case management is more effective when started in hospital than when initiated only in the community",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports hospital-initiated pathways",
    finding: "Case management beginning during a heart-failure admission reduced unplanned readmissions, with a rate ratio of 0.74, and shortened stay by about 1.3 days. Randomised studies of programmes initiated only in the community did not show a clear admission reduction.",
    design: "Systematic review of 22 controlled studies, including 17 randomised trials.",
    riskOfBias: "Some concern — programmes varied in staffing, home visits, follow-up and usual care.",
    consistency: "Some concern — results differed materially according to where and when enrolment began.",
    precision: "No major concern for the hospital-initiated readmission estimate; serious concern for the smaller community-initiated subgroup.",
    directness: "Direct for people with heart failure moving between hospital and community care.",
    otherFactors: "Starting the pathway before discharge may improve continuity and engagement.",
    ratingReason: "The synthesis retains the clinically important timing distinction without presenting two apparently contradictory generic case-management cards."
});

/* ========================================================================== 
   05A. PALLIATIVE CARE, FALLS, EXERCISE AND TRANSITIONAL CARE
   ========================================================================== */

synthesiseStatements("S88", ["S89", "S90"], {
    statement: "Home palliative care strongly increases the chance of dying at home and modestly improves symptoms, but does not reliably reduce admissions",
    association: "Strong",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports patient-centred benefits",
    finding: "Specialist home palliative care more than doubled the odds of dying at home and produced small improvements in symptom burden. Trials of home-based end-of-life care reported inconsistent effects on hospital admissions.",
    design: "Cochrane systematic reviews of controlled studies and randomised trials of home palliative and end-of-life care.",
    riskOfBias: "Some concern — services differed and blinding was not feasible; admission evidence came from few heterogeneous trials.",
    consistency: "No major concern for place of death, some concern for symptoms and very serious concern for hospital-use effects.",
    precision: "Some concern for place of death and serious concern for symptom and admission estimates.",
    directness: "Direct for adults with advanced or terminal illness receiving organised care at home.",
    otherFactors: "Supporting preferred place of care is a valuable outcome even when hospital savings are uncertain.",
    ratingReason: "A single card distinguishes the strong patient-centred effect from the much weaker claim that home palliative care consistently reduces hospital use."
});

synthesiseStatements("S91", ["S92"], {
    statement: "Tailored falls-prevention programmes, particularly education, probably reduce inpatient falls",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports the statement",
    finding: "An updated Cochrane review found the clearest evidence for education tailored to staff, patients and families. Broader multifactorial programmes probably also help, but their confidence intervals allowed little effect or a slight increase.",
    design: "Cochrane systematic review of randomised and cluster-randomised hospital studies.",
    riskOfBias: "Some concern — staff and patients usually knew which intervention they received and programme components varied.",
    consistency: "No major concern for tailored education; some concern for broader multifactorial programmes.",
    precision: "Some concern — the exact effect varies by hospital setting and programme.",
    directness: "Direct for older people in acute and rehabilitation hospitals.",
    otherFactors: "Locally integrated, tailored approaches appear more credible than generic bundles.",
    ratingReason: "The synthesis identifies the most consistently supported component rather than showing two overlapping cards from the same review."
});

synthesiseStatements("S93", ["S94"], {
    statement: "Generic exercise during an unplanned hospital admission does not produce a clinically important average improvement in independence or mobility",
    association: "None",
    evidence: "Low",
    evidenceScore: 2,
    direction: "Does not support a meaningful average benefit",
    finding: "A Cochrane review found very small average improvements in daily independence and mobility. Both were below the usual thresholds for clinical importance, and the mobility evidence was especially uncertain.",
    design: "Cochrane systematic review of randomised and quasi-randomised studies of older medical inpatients.",
    riskOfBias: "Serious concern — several studies had problems with randomisation, outcome measurement or adherence.",
    consistency: "Serious concern — exercise type, dose and delivery varied widely.",
    precision: "Some concern for independence and serious concern for mobility.",
    directness: "Direct for adults aged 65 and over during an unplanned medical admission.",
    otherFactors: "The conclusion does not exclude benefit for selected patients or better-targeted rehabilitation.",
    ratingReason: "The two closely related functional outcomes support one conclusion: generic programmes have not shown a clinically important average benefit."
});

synthesiseStatements("S96", ["S97", "S98"], {
    statement: "Better discharge communication reduces readmissions and improves adherence and satisfaction",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports the statement",
    finding: "Randomised trials found that discharge communication reduced 30-day readmission from 13.5% to 9.1%, improved adherence to the treatment plan and increased patient satisfaction.",
    design: "Systematic review and meta-analysis of 60 randomised trials of discharge communication interventions.",
    riskOfBias: "Some concern — communication methods and outcome measures varied, and subjective outcomes could not be blinded.",
    consistency: "No major concern for readmission and some concern for adherence and satisfaction because measurement differed.",
    precision: "No major concern for the pooled readmission, adherence and satisfaction estimates.",
    directness: "Direct for patients receiving information and support at hospital discharge.",
    otherFactors: "Interventions included education, written information, teach-back, motivational interviewing and shared decision-making.",
    ratingReason: "These outcomes came from the same intervention and review and form one coherent communication synthesis."
});

synthesiseStatements("S99", ["S100"], {
    statement: "Nurse-led transitional care reduces later A&E visits and may reduce readmissions when support is sustained",
    association: "Moderate",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports the statement",
    finding: "Randomised evidence found fewer later A&E visits, with a pooled risk ratio of 0.63. Readmissions also fell when nurse-led support continued beyond 12 weeks, although results varied between programmes.",
    design: "Systematic review of 16 randomised controlled trials after acute hospital discharge.",
    riskOfBias: "Some concern — intervention components, populations and follow-up periods differed.",
    consistency: "No major concern for A&E visits and serious concern for longer-term readmissions.",
    precision: "No major concern for both pooled estimates.",
    directness: "Direct for adults discharged home from acute-care hospitals.",
    otherFactors: "Programmes commonly combined assessment, education, coordination and follow-up rather than a single contact.",
    ratingReason: "The synthesis presents A&E and readmission effects together while preserving the importance of sustained support."
});

/* ========================================================================== 
   06A. HOSPITAL TEAMWORK AND SURGICAL PATHWAYS
   ========================================================================== */

synthesiseStatements("S101", ["S102"], {
    statement: "Structured multidisciplinary ward rounds improve staff satisfaction, but do not clearly shorten hospital stay",
    association: "Weak",
    evidence: "Low",
    evidenceScore: 2,
    direction: "Mixed outcomes",
    finding: "Reviews found generally better staff satisfaction after structured multidisciplinary rounds, but length-of-stay findings were mixed, including shorter, unchanged and longer stays.",
    design: "Systematic reviews of quasi-experimental and descriptive acute-care studies.",
    riskOfBias: "Serious concern — no randomised trials were identified and most studies were local quality-improvement projects.",
    consistency: "No major concern for staff satisfaction and very serious concern for length of stay.",
    precision: "Serious concern — different surveys and hospital designs prevented meaningful pooling.",
    directness: "Direct for acute hospital ward rounds, although team composition and tools varied.",
    otherFactors: "Better communication cannot overcome downstream discharge constraints by itself.",
    ratingReason: "The combined card separates a plausible staff benefit from an unproven patient-flow benefit."
});

synthesiseStatements("S103", ["S104", "S105"], {
    statement: "Enhanced Recovery After Surgery shortens hospital stay and reduces complications without clearly changing readmissions",
    association: "Strong",
    evidence: "Moderate",
    evidenceScore: 3,
    direction: "Supports important perioperative benefits",
    finding: "Randomised trials found that Enhanced Recovery After Surgery pathways shortened hospital stay by about 1.9 days and reduced 30-day complications, with a pooled risk ratio of 0.71. Thirty-day readmissions were broadly unchanged.",
    design: "Systematic review of 495 studies with meta-analysis of 74 randomised trials involving 9,076 participants.",
    riskOfBias: "Some concern — many trials had methodological limitations and pathway adherence varied.",
    consistency: "Serious concern — effects differed by operation and programme.",
    precision: "No major concern for length of stay and complications; some concern for readmissions.",
    directness: "Direct for patients undergoing several types of surgery.",
    otherFactors: "The effect reflects implementation of a multi-component perioperative pathway rather than one isolated action.",
    ratingReason: "The three outcomes provide one clear synthesis: shorter stays and fewer complications without evidence that readmissions are the main benefit."
});

synthesiseStatements("S106", ["S107"], {
    statement: "WHO surgical safety checklists reduce postoperative complications and probably reduce mortality when implemented well",
    association: "Strong",
    evidence: "Low",
    evidenceScore: 2,
    direction: "Supports the statement, with uncertainty",
    finding: "Meta-analyses estimate fewer postoperative complications, with a pooled risk ratio of 0.59, and lower mortality, with an estimate around 0.77. Effects appear larger when teams complete the intended clinical actions rather than treating the checklist as paperwork.",
    design: "Systematic reviews and meta-analyses of predominantly observational before-and-after implementation studies.",
    riskOfBias: "Serious concern — hospitals were not randomised and checklist introduction often accompanied wider safety improvement.",
    consistency: "Some concern — direction was generally favourable, but mortality estimates differed between reviews and implementation quality varied.",
    precision: "No major concern for complications and some concern for mortality.",
    directness: "Direct for postoperative outcomes after checklist implementation.",
    otherFactors: "Adherence to the clinical content is likely more important than simple recorded completion.",
    ratingReason: "The outcomes are best understood together, while the observational design prevents a higher confidence rating."
});

/* ========================================================================== 
   07A. ASSOCIATION-LABEL CONSISTENCY
   --------------------------------------------------------------------------
   `None` is reserved for reasonably informative evidence of little or no
   association. Imprecise low-certainty null findings are labelled `Unknown`.
   ========================================================================== */

reviseStatement("S41", {
    association: "Unknown",
    direction: "No dependable answer",
    ratingReason: "The available trials do not demonstrate a length-of-stay benefit, but their age, heterogeneity and limitations are too substantial to establish no effect."
});

reviseStatement("S73", {
    association: "Unknown",
    direction: "No clear admission reduction",
    ratingReason: "Medication optimisation improves prescribing, but low-certainty and inconsistently measured evidence cannot establish either an admission benefit or a dependable null effect."
});

reviseStatement("S79", {
    association: "Unknown",
    direction: "No dependable benefit from referral alone",
    ratingReason: "Low-intensity referral appears less promising than continued support, but very low-certainty evidence is insufficient to establish a true null effect."
});

reviseStatement("S86", {
    association: "Unknown",
    direction: "No clear reduction",
    ratingReason: "Medication reconciliation is an important safety process, but the imprecise rehospitalisation estimate does not establish either benefit or no effect."
});

reviseStatement("S95", {
    association: "Unknown",
    direction: "No clear change in fall risk",
    ratingReason: "The central estimate shows no difference, but the confidence interval is too wide to establish that exercise has no effect on inpatient falls."
});

/* ========================================================================== 
   08A. AUDIT METADATA
   ========================================================================== */

window.HEALTH_SYSTEM_AUDIT = {
    originalRecordCount: 111,
    activeStatementCount: evidenceRegister.length,
    retiredRecordCount: 111 - evidenceRegister.length,
    auditDate: "2026-07-28",
    method: "Merged records when the intervention, population and outcome were duplicate or substantially overlapping, especially when they used the same review or overlapping primary studies."
};
