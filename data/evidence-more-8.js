/* ========================================================================== 
   00A. FURTHER ADAPTED-GRADE STATEMENTS
   --------------------------------------------------------------------------
   These statements extend the rapid review into discharge communication,
   transitional care, multidisciplinary ward working, enhanced recovery,
   surgical safety, early warning systems, sepsis pathways and ICU discharge.
   Each finding is written to make sense when opened on its own.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.push(...[
    {
        id: "S96",
        statement: "Better communication with patients at hospital discharge reduces 30-day readmissions",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A systematic review of randomised trials found that discharge communication interventions reduced 30-day readmission from 13.5% to 9.1%, with a pooled risk ratio of 0.69.",
        design: "Systematic review of 60 randomised trials; 19 trials involving 3,953 patients contributed readmission data.",
        riskOfBias: "Some concern — interventions differed substantially and six of the 19 pooled trials were at high risk of bias.",
        consistency: "No major concern — statistical heterogeneity for readmission was low.",
        precision: "No major concern — the 95% confidence interval was 0.56 to 0.84.",
        directness: "Direct for communication delivered to patients at the point of hospital discharge.",
        otherFactors: "Interventions included education, written information, teach-back, motivational interviewing and shared decision-making.",
        ratingReason: "Randomised evidence supports a meaningful average reduction in readmission, although the active communication components varied between trials.",
        sources: [
            {
                title: "Interventions to improve communication at hospital discharge and rates of readmission",
                url: "https://pubmed.ncbi.nlm.nih.gov/34448868/"
            }
        ]
    },
    {
        id: "S97",
        statement: "Better communication at hospital discharge improves treatment adherence",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A systematic review of randomised trials found that discharge communication interventions increased adherence to the recommended treatment plan, with a pooled risk ratio of 1.24.",
        design: "Systematic review and meta-analysis of randomised clinical trials evaluating discharge communication.",
        riskOfBias: "Some concern — communication methods, follow-up periods and adherence measures differed between trials.",
        consistency: "Some concern — the direction was favourable, but adherence was measured in several different ways.",
        precision: "No major concern — the 95% confidence interval was 1.13 to 1.37.",
        directness: "Direct for patient understanding and adherence after hospital discharge.",
        otherFactors: "Improved adherence is a plausible mechanism linking discharge communication to fewer readmissions.",
        ratingReason: "The effect is reasonably consistent and supported by randomised evidence, while the precise communication package remains variable.",
        sources: [
            {
                title: "Interventions to improve communication at hospital discharge and rates of readmission",
                url: "https://pubmed.ncbi.nlm.nih.gov/34448868/"
            }
        ]
    },
    {
        id: "S98",
        statement: "Better communication at hospital discharge improves patient satisfaction",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A systematic review of randomised trials found higher patient satisfaction after discharge communication interventions, with a pooled risk ratio of 1.41.",
        design: "Systematic review and meta-analysis of randomised clinical trials.",
        riskOfBias: "Some concern — satisfaction is subjective and participants usually knew which communication support they received.",
        consistency: "Some concern — different questionnaires and thresholds were used across trials.",
        precision: "No major concern — the 95% confidence interval was 1.20 to 1.66.",
        directness: "Direct for the experience of patients leaving hospital.",
        otherFactors: "The result concerns satisfaction and understanding rather than hospital flow alone.",
        ratingReason: "Randomised evidence supports improved experience, although lack of blinding and varied measurement limit confidence in the exact size.",
        sources: [
            {
                title: "Interventions to improve communication at hospital discharge and rates of readmission",
                url: "https://pubmed.ncbi.nlm.nih.gov/34448868/"
            }
        ]
    },
    {
        id: "S99",
        statement: "Nurse-led transitional care reduces A&E visits after hospital discharge",
        association: "Moderate",
        evidence: "High",
        evidenceScore: 4,
        direction: "Supports the statement",
        finding: "A systematic review of randomised trials found that nurse-led transitional care reduced subsequent emergency-department visits, with a pooled risk ratio of 0.63.",
        design: "Systematic review of 16 randomised controlled trials of nurse-led transitional care after acute hospital discharge.",
        riskOfBias: "No major concern for this outcome — the review used randomised evidence and rated certainty as High.",
        consistency: "No major concern — statistical heterogeneity for emergency-department visits was reported as zero.",
        precision: "No major concern — the 95% confidence interval was 0.49 to 0.81.",
        directness: "Direct for adults discharged home from acute-care hospitals.",
        otherFactors: "Interventions commonly combined assessment, education, coordination and follow-up rather than one isolated contact.",
        ratingReason: "This is comparatively strong service evidence: randomised trials show a consistent reduction in later emergency visits.",
        sources: [
            {
                title: "Effectiveness of nurse-led transitional care interventions after acute hospital discharge",
                url: "https://pubmed.ncbi.nlm.nih.gov/40197243/"
            }
        ]
    },
    {
        id: "S100",
        statement: "Nurse-led transitional care reduces later hospital readmissions",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A systematic review of randomised trials found fewer readmissions when nurse-led transitional care continued beyond 12 weeks, with a pooled risk ratio of 0.67.",
        design: "Systematic review of 16 randomised controlled trials.",
        riskOfBias: "Some concern — interventions, populations and follow-up periods differed between trials.",
        consistency: "Serious concern — statistical heterogeneity for the longer-term readmission result was substantial.",
        precision: "No major concern — the 95% confidence interval was 0.49 to 0.92.",
        directness: "Direct for adults returning home after acute hospital care.",
        otherFactors: "The benefit was clearer when transitional support continued over time rather than ending soon after discharge.",
        ratingReason: "Randomised evidence supports a reduction, but variation between services makes the expected local effect less certain.",
        sources: [
            {
                title: "Effectiveness of nurse-led transitional care interventions after acute hospital discharge",
                url: "https://pubmed.ncbi.nlm.nih.gov/40197243/"
            }
        ]
    },
    {
        id: "S101",
        statement: "Structured multidisciplinary ward rounds reduce hospital length of stay",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "No clear answer",
        finding: "A systematic review found mixed length-of-stay results after structured multidisciplinary rounds: some studies reported shorter stays, one reported no change and one reported longer stays.",
        design: "Systematic review of eight quasi-experimental and descriptive acute-care studies.",
        riskOfBias: "Very serious concern — no randomised trials were included and most studies were local quality-improvement projects.",
        consistency: "Very serious concern — the direction of the length-of-stay effect differed between studies.",
        precision: "Very serious concern — clinical and methodological differences prevented meta-analysis.",
        directness: "Direct for inpatient ward rounds, but the team composition and communication tools varied widely.",
        otherFactors: "Improved communication does not automatically translate into faster discharge when downstream constraints remain.",
        ratingReason: "The model is sensible, but the available evidence does not establish a dependable length-of-stay benefit.",
        sources: [
            {
                title: "Effectiveness of structured multidisciplinary rounding in acute care units",
                url: "https://pubmed.ncbi.nlm.nih.gov/27532795/"
            },
            {
                title: "Structure and outcomes of interdisciplinary rounds in hospital medicine",
                url: "https://pubmed.ncbi.nlm.nih.gov/26991337/"
            }
        ]
    },
    {
        id: "S102",
        statement: "Structured multidisciplinary ward rounds improve staff satisfaction",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A systematic review found improved staff satisfaction in six studies after structured multidisciplinary rounds were introduced.",
        design: "Systematic review of quasi-experimental and descriptive quality-improvement studies.",
        riskOfBias: "Serious concern — staff knew the intervention had been introduced and satisfaction was vulnerable to response bias.",
        consistency: "No major concern for direction — the studies reporting staff satisfaction were generally favourable.",
        precision: "Serious concern — different surveys and reporting methods prevented a pooled estimate.",
        directness: "Direct for hospital staff participating in multidisciplinary rounds.",
        otherFactors: "Improved staff experience may help coordination even where patient flow effects remain uncertain.",
        ratingReason: "The direction is reasonably consistent, but the evidence is largely descriptive and does not quantify a standard effect.",
        sources: [
            {
                title: "Effectiveness of structured multidisciplinary rounding in acute care units",
                url: "https://pubmed.ncbi.nlm.nih.gov/27532795/"
            }
        ]
    },
    {
        id: "S103",
        statement: "Enhanced Recovery After Surgery pathways shorten hospital stay",
        association: "Strong",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A meta-analysis of randomised trials found that Enhanced Recovery After Surgery pathways shortened hospital stay by an average of 1.88 days compared with usual surgical care.",
        design: "Systematic review of 495 studies with meta-analysis of 74 randomised trials involving 9,076 participants.",
        riskOfBias: "Some concern — only about one fifth of the pooled trials were at low risk of bias.",
        consistency: "Serious concern — statistical heterogeneity for length of stay was high.",
        precision: "No major concern — the 95% confidence interval represented a reduction of 0.95 to 2.81 days.",
        directness: "Direct for patients undergoing nine types of surgery across 21 countries.",
        otherFactors: "The pathway is multi-component, so benefit depends on implementation of the full perioperative model.",
        ratingReason: "Randomised evidence supports a substantial average reduction, tempered by major variation between operations and programmes.",
        sources: [
            {
                title: "Enhanced Recovery After Surgery guidelines and hospital outcomes",
                url: "https://pubmed.ncbi.nlm.nih.gov/38888922/"
            }
        ]
    },
    {
        id: "S104",
        statement: "Enhanced Recovery After Surgery pathways reduce postoperative complications",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A meta-analysis of randomised trials found fewer 30-day postoperative complications with Enhanced Recovery After Surgery pathways, with a pooled risk ratio of 0.71.",
        design: "Meta-analysis of 74 randomised trials across several surgical specialties.",
        riskOfBias: "Some concern — many trials had methodological limitations and pathway adherence was reported inconsistently.",
        consistency: "Serious concern — statistical heterogeneity for complications was high.",
        precision: "No major concern — the 95% confidence interval was 0.59 to 0.87.",
        directness: "Direct for short-term postoperative complications.",
        otherFactors: "The effect reflects an organised package rather than one individual intervention.",
        ratingReason: "The pooled result is clinically meaningful and randomised, but the exact benefit varies with surgery type and implementation.",
        sources: [
            {
                title: "Enhanced Recovery After Surgery guidelines and hospital outcomes",
                url: "https://pubmed.ncbi.nlm.nih.gov/38888922/"
            }
        ]
    },
    {
        id: "S105",
        statement: "Enhanced Recovery After Surgery pathways reduce 30-day readmissions",
        association: "None",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Does not support the statement",
        finding: "A meta-analysis of randomised trials found no statistically clear reduction in 30-day readmission after Enhanced Recovery After Surgery pathways compared with usual care.",
        design: "Systematic review and meta-analysis of randomised clinical trials.",
        riskOfBias: "Some concern — readmission definitions and pathway adherence varied between trials.",
        consistency: "No major concern for the broad conclusion that shorter stays did not produce a clear readmission reduction.",
        precision: "Some concern — the pooled estimate allowed a modest reduction or increase.",
        directness: "Direct for 30-day hospital readmission after surgery.",
        otherFactors: "The absence of a readmission reduction is still reassuring because shorter hospital stays were not accompanied by a clear increase.",
        ratingReason: "Moderate evidence suggests that readmission is broadly unchanged rather than being a main benefit of the pathway.",
        sources: [
            {
                title: "Enhanced Recovery After Surgery guidelines and hospital outcomes",
                url: "https://pubmed.ncbi.nlm.nih.gov/38888922/"
            }
        ]
    },
    {
        id: "S106",
        statement: "Using the WHO surgical safety checklist reduces postoperative complications",
        association: "Strong",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A meta-analysis estimated fewer postoperative complications after implementation of the WHO surgical safety checklist, with a pooled risk ratio of 0.59.",
        design: "Systematic review and meta-analysis of seven predominantly observational implementation studies.",
        riskOfBias: "Serious concern — hospitals were not randomised and checklist introduction often occurred alongside wider safety improvement.",
        consistency: "Some concern — studies differed in implementation quality, baseline systems and outcome definitions.",
        precision: "No major concern for the pooled estimate — the 95% confidence interval was 0.47 to 0.74.",
        directness: "Direct for postoperative complications after checklist implementation.",
        otherFactors: "Greater adherence to the clinical actions within the checklist was associated with larger improvements.",
        ratingReason: "The association is large and consistent enough to be credible, but observational implementation evidence cannot prove the checklist alone caused it.",
        sources: [
            {
                title: "Effect of the WHO surgical safety checklist on postoperative complications",
                url: "https://pubmed.ncbi.nlm.nih.gov/24469615/"
            },
            {
                title: "Impact of the WHO surgical safety checklist relative to its intended use",
                url: "https://pubmed.ncbi.nlm.nih.gov/34592406/"
            }
        ]
    },
    {
        id: "S107",
        statement: "Using the WHO surgical safety checklist reduces postoperative mortality",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A meta-analysis estimated lower postoperative mortality after implementation of the WHO surgical safety checklist, with a pooled risk ratio of 0.77.",
        design: "Systematic review and meta-analysis of predominantly observational before-and-after studies.",
        riskOfBias: "Serious concern — concurrent improvements in surgical care, case mix and reporting may explain part of the observed reduction.",
        consistency: "Some concern — later reviews generally favoured checklist use, but effects depended strongly on implementation quality.",
        precision: "Some concern — the 95% confidence interval was 0.60 to 0.98, close to no effect at its upper limit.",
        directness: "Direct for mortality after surgery.",
        otherFactors: "A separate meta-analysis found the mortality estimate was not statistically clear, highlighting uncertainty in the exact effect.",
        ratingReason: "The evidence points towards benefit, but the non-randomised design and variation between reviews keep confidence Low.",
        sources: [
            {
                title: "Effect of the WHO surgical safety checklist on postoperative complications",
                url: "https://pubmed.ncbi.nlm.nih.gov/24469615/"
            },
            {
                title: "Effect of using a safety checklist on patient complications after surgery",
                url: "https://pubmed.ncbi.nlm.nih.gov/24845919/"
            }
        ]
    },
    {
        id: "S108",
        statement: "Discharging hospital patients at weekends worsens 30-day outcomes",
        association: "None",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Does not support a general weekend-discharge effect",
        finding: "A meta-analysis of 20 observational studies found no overall difference between weekend and weekday discharge in 30-day readmission, mortality, A&E visits or short-term follow-up attendance.",
        design: "Systematic review and meta-analysis of observational studies from seven countries.",
        riskOfBias: "Serious concern — patients selected for weekend discharge may differ from those discharged on weekdays.",
        consistency: "Some concern — United States studies showed higher readmission after weekend discharge, while the overall international result did not.",
        precision: "Some concern — substantial heterogeneity remained between settings and outcomes.",
        directness: "Direct for timing of hospital discharge, but weekend staffing and community support differ between health systems.",
        otherFactors: "The result does not imply that all weekend discharge processes are equally safe; reliable medicines, transport and follow-up still matter.",
        ratingReason: "The available evidence does not support treating weekend discharge itself as a general cause of worse outcomes.",
        sources: [
            {
                title: "Quality assessment of weekend discharge: systematic review and meta-analysis",
                url: "https://pubmed.ncbi.nlm.nih.gov/32453404/"
            }
        ]
    },
    {
        id: "S109",
        statement: "Implementing NEWS or NEWS2 reduces in-hospital mortality",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Possible benefit, but uncertain",
        finding: "A 2026 systematic review estimated lower in-hospital mortality after NEWS or NEWS2 implementation, with a pooled odds ratio of 0.79, but the apparent benefit disappeared in a sensitivity analysis that excluded conference abstracts.",
        design: "Systematic review of 20 comparative studies; the mortality meta-analysis included one cluster trial, two non-randomised comparative studies and eight uncontrolled before-and-after studies.",
        riskOfBias: "Very serious concern — most included studies had serious or high risk of bias and the pooled result was driven by uncontrolled before-and-after evaluations.",
        consistency: "Serious concern — statistical heterogeneity was extremely high and stronger study designs did not show a clear improvement.",
        precision: "Some concern — the main pooled confidence interval excluded no effect, but sensitivity analysis did not.",
        directness: "Direct for hospital use of NEWS and NEWS2, although only two included studies were conducted in the UK.",
        otherFactors: "The review found no evidence of negative clinical effects and supports continued use for detecting deterioration while effectiveness remains under evaluation.",
        ratingReason: "There is a favourable signal, but it is not secure enough to attribute lower mortality to the score itself.",
        sources: [
            {
                title: "Does the use of NEWS or NEWS2 improve patient outcomes?",
                url: "https://pubmed.ncbi.nlm.nih.gov/41618411/"
            }
        ]
    },
    {
        id: "S110",
        statement: "Compliance with the complete SEP-1 sepsis bundle reduces mortality",
        association: "Unknown",
        evidence: "Low",
        evidenceScore: 2,
        direction: "No dependable mortality benefit established",
        finding: "A 2025 systematic review found no moderate- or high-level evidence that compliance with, or implementation of, the complete SEP-1 sepsis bundle reduced mortality.",
        design: "Systematic review of 17 observational studies assessing bundle compliance or system implementation.",
        riskOfBias: "Very serious concern — none of the included studies had low risk of bias and treatment compliance is strongly confounded by patient severity and service performance.",
        consistency: "Very serious concern — five compliance studies reported benefit and seven did not; only one of five implementation studies reported benefit.",
        precision: "Serious concern — methodological heterogeneity prevented a meaningful meta-analysis.",
        directness: "Partly direct for hospital sepsis pathways, but SEP-1 is a United States measure and differs from NHS guidance.",
        otherFactors: "Individual components such as timely antibiotics may be beneficial even where the complete all-or-none bundle is not proven.",
        ratingReason: "The evidence does not justify assuming that meeting every bundle element causes lower mortality across all patients with sepsis.",
        sources: [
            {
                title: "Effect of SEP-1 compliance and implementation on mortality among patients with sepsis",
                url: "https://pubmed.ncbi.nlm.nih.gov/39961104/"
            }
        ]
    },
    {
        id: "S111",
        statement: "Discharging patients from intensive care out of hours increases mortality and ICU readmission",
        association: "Strong",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty about causation",
        finding: "A meta-analysis of 18 cohort studies found that out-of-hours ICU discharge was associated with 39% higher in-hospital mortality and 30% higher ICU readmission.",
        design: "Systematic review and meta-analysis of observational cohorts involving more than 1.1 million patients.",
        riskOfBias: "Serious concern — patients discharged at night may differ in illness severity, bed pressure and ongoing care needs despite statistical adjustment.",
        consistency: "No major concern for direction — the association persisted across definitions of out-of-hours and several health systems.",
        precision: "No major concern for the pooled estimates, although statistical heterogeneity was very high.",
        directness: "Direct for adults discharged alive from general intensive care to a lower level of hospital care.",
        otherFactors: "The association remained after adjustment in several large studies, but observational evidence cannot establish whether timing itself caused the harm.",
        ratingReason: "The signal is large, repeated and operationally relevant, but residual confounding prevents a causal Moderate rating.",
        sources: [
            {
                title: "Out-of-hours discharge from intensive care, mortality and ICU readmission",
                url: "https://pubmed.ncbi.nlm.nih.gov/29938369/"
            }
        ]
    }
]);