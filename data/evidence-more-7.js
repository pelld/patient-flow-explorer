/* ========================================================================== 
   00A. FURTHER ADAPTED-GRADE STATEMENTS
   --------------------------------------------------------------------------
   These statements extend the rapid review into discharge planning, medicines
   optimisation, post-discharge follow-up, palliative care and hospital safety.
   Each finding is written to stand alone when opened from either the card grid
   or the evidence map.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.push(...[
    {
        id: "S81",
        statement: "Individualised discharge planning shortens hospital length of stay",
        association: "Weak",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports a small reduction",
        finding: "A Cochrane review found that discharge plans tailored to the individual reduced the initial hospital stay by an average of about 0.7 days among people admitted with medical conditions.",
        design: "Cochrane systematic review of randomised trials; 11 trials involving 2,113 participants contributed length-of-stay data.",
        riskOfBias: "Some concern — the content and delivery of discharge planning varied and blinding of staff and patients was not feasible.",
        consistency: "Some concern — most estimates favoured discharge planning, but the size of benefit differed between studies.",
        precision: "No major concern — the pooled mean difference was 0.73 days shorter, with a 95% confidence interval from 0.12 to 1.33 days shorter.",
        directness: "Direct for older medical inpatients leaving acute hospital care.",
        otherFactors: "The average effect is small, so local bed-day impact depends on scale and on whether downstream services can receive patients promptly.",
        ratingReason: "Randomised evidence supports a real but modest reduction in hospital stay rather than a large discharge-flow effect.",
        sources: [
            {
                title: "Discharge planning from hospital",
                url: "https://www.cochrane.org/evidence/CD000313_discharge-planning-hospital"
            }
        ]
    },
    {
        id: "S82",
        statement: "Individualised discharge planning reduces hospital readmissions",
        association: "Weak",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports a small reduction",
        finding: "A Cochrane review found that tailored discharge planning reduced readmission over roughly three months, with a pooled risk ratio of 0.89.",
        design: "Cochrane systematic review of randomised trials; 17 trials involving 5,126 participants contributed readmission data.",
        riskOfBias: "Some concern — interventions ranged from relatively simple plans to more intensive coordination and follow-up.",
        consistency: "No major concern — the pooled result favoured discharge planning across a substantial evidence base.",
        precision: "No major concern — the 95% confidence interval was 0.81 to 0.97.",
        directness: "Direct for medical inpatients discharged from hospital, particularly older adults.",
        otherFactors: "A relative reduction of about 11% is meaningful but smaller than is sometimes assumed in operational plans.",
        ratingReason: "The result is reasonably dependable, but the average association is modest and does not identify one universally effective discharge model.",
        sources: [
            {
                title: "Discharge planning from hospital",
                url: "https://www.cochrane.org/evidence/CD000313_discharge-planning-hospital"
            }
        ]
    },
    {
        id: "S83",
        statement: "Individualised discharge planning reduces mortality after hospital discharge",
        association: "None",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Does not support the statement",
        finding: "A Cochrane review found little or no difference in mortality three to nine months after discharge, with a pooled risk ratio of 1.05.",
        design: "Cochrane systematic review of eight randomised trials involving 2,721 participants for mortality.",
        riskOfBias: "Some concern — service delivery could not be blinded, although mortality is an objective outcome.",
        consistency: "No major concern — the combined trials did not show a mortality signal.",
        precision: "Some concern — the 95% confidence interval of 0.85 to 1.29 excludes a very large effect but allows modest benefit or harm.",
        directness: "Direct for people discharged after an acute hospital admission.",
        otherFactors: "Discharge planning may still improve flow and readmissions without changing mortality.",
        ratingReason: "Moderate-certainty evidence supports treating mortality as broadly unchanged rather than as a likely benefit of discharge planning.",
        sources: [
            {
                title: "Discharge planning from hospital",
                url: "https://www.cochrane.org/evidence/CD000313_discharge-planning-hospital"
            }
        ]
    },
    {
        id: "S84",
        statement: "Medication review for hospitalised adults reduces readmissions",
        association: "Weak",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports a small reduction",
        finding: "A 2023 Cochrane review found that medication reviews probably reduced hospital readmissions, with a pooled risk ratio of 0.93.",
        design: "Cochrane systematic review of 17 randomised trials involving 9,561 participants for readmission.",
        riskOfBias: "Some concern — medication-review models and follow-up varied, and most participants were older people taking several medicines.",
        consistency: "No major concern for the pooled readmission outcome.",
        precision: "No major concern — the 95% confidence interval was 0.89 to 0.98.",
        directness: "Direct for hospitalised adults, but generalisability beyond older people with polypharmacy is limited.",
        otherFactors: "The average reduction is small and is unlikely to release large numbers of beds unless the programme reaches a large high-risk population.",
        ratingReason: "Randomised evidence supports a modest readmission benefit rather than a major system-wide reduction.",
        sources: [
            {
                title: "Medication review in hospitalised patients to reduce morbidity and mortality",
                url: "https://www.cochrane.org/evidence/CD008986_what-are-benefits-and-risks-medication-reviews-hospitalised-adults"
            }
        ]
    },
    {
        id: "S85",
        statement: "Medication review for hospitalised adults reduces later A&E visits",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Possible benefit, not demonstrated clearly",
        finding: "A Cochrane review estimated fewer later A&E contacts after medication review, but the confidence interval included no effect.",
        design: "Cochrane systematic review of eight randomised trials involving 3,527 participants for A&E contacts.",
        riskOfBias: "Some concern — interventions differed in professional input, intensity and post-discharge support.",
        consistency: "Some concern — the direction was favourable but not consistently conclusive across trials.",
        precision: "Serious concern — the pooled risk ratio was 0.84 with a 95% confidence interval from 0.68 to 1.03.",
        directness: "Direct for subsequent A&E use among hospitalised adults, mainly older people with polypharmacy.",
        otherFactors: "No upgrade applied because the estimate remained compatible with little or no effect.",
        ratingReason: "There may be an A&E benefit, but current evidence is not precise enough to use it as a dependable demand-reduction assumption.",
        sources: [
            {
                title: "Medication review in hospitalised patients to reduce morbidity and mortality",
                url: "https://www.cochrane.org/evidence/CD008986_what-are-benefits-and-risks-medication-reviews-hospitalised-adults"
            }
        ]
    },
    {
        id: "S86",
        statement: "Medication reconciliation at care transitions reduces unplanned rehospitalisation",
        association: "Weak",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Does not show a clear reduction",
        finding: "A Cochrane review found that medication reconciliation probably made little or no difference to unplanned rehospitalisation when that outcome was reported separately.",
        design: "Cochrane systematic review of five randomised trials involving 1,206 participants for unplanned rehospitalisation.",
        riskOfBias: "Some concern — interventions were usually pharmacist-led but differed in timing, intensity and communication with other services.",
        consistency: "Some concern — medication discrepancies often improved, while patient and utilisation outcomes were less consistent.",
        precision: "Serious concern — the pooled risk ratio was 0.72 with a 95% confidence interval from 0.44 to 1.18.",
        directness: "Direct for people moving between hospital and other care settings.",
        otherFactors: "Medication reconciliation remains an important safety process even where a readmission effect is not established.",
        ratingReason: "The evidence does not support treating reconciliation alone as a reliable readmission-reduction intervention.",
        sources: [
            {
                title: "Medication reconciliation for improving transitions of care",
                url: "https://www.cochrane.org/evidence/CD010791_what-interventions-improve-accuracy-and-continuity-medication-lists-patients-move-between-healthcare"
            }
        ]
    },
    {
        id: "S87",
        statement: "A routine telephone call after discharge reduces readmissions and post-discharge problems",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "No dependable answer",
        finding: "A Cochrane review found no consistent evidence that a hospital-initiated telephone call during the first month after discharge improved outcomes compared with usual follow-up.",
        design: "Cochrane systematic review of 33 randomised or quasi-randomised studies involving 5,110 patients.",
        riskOfBias: "Very serious concern — most studies were methodologically weak and telephone interventions varied greatly.",
        consistency: "Very serious concern — effects differed within and between patient groups and outcomes.",
        precision: "Very serious concern — only a small number of outcomes could be pooled and several analyses were highly heterogeneous.",
        directness: "Direct for simple hospital-based telephone follow-up, but the evidence is old and may not represent modern digitally supported transitional care.",
        otherFactors: "No adverse effects were identified, but feasibility and patient appreciation are not evidence of reduced hospital use.",
        ratingReason: "A call may be useful as part of a wider pathway, but isolated telephone follow-up has not shown a dependable outcome benefit.",
        sources: [
            {
                title: "Telephone follow-up by a hospital-based health professional after hospital discharge",
                url: "https://www.cochrane.org/evidence/CD004510_telephone-follow-hospital-based-health-professional-after-hospital-discharge"
            }
        ]
    },
    {
        id: "S88",
        statement: "Home palliative-care services increase the chance of dying at home",
        association: "Strong",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A Cochrane review found that adults with advanced illness receiving specialist home palliative care were more than twice as likely to die at home, with a pooled odds ratio of 2.21.",
        design: "Systematic review of 23 controlled studies involving 37,561 patients; seven trials involving 1,222 participants contributed the pooled place-of-death estimate.",
        riskOfBias: "Some concern — the review combined randomised and non-randomised designs and services differed substantially.",
        consistency: "Serious concern — statistical heterogeneity was high, although the overall direction strongly favoured home palliative care.",
        precision: "Some concern — the 95% confidence interval was 1.31 to 3.71.",
        directness: "Direct for adults with advanced illness who wish to receive end-of-life care at home.",
        otherFactors: "The estimated number needed to treat for one additional home death was about five, although baseline circumstances vary.",
        ratingReason: "The effect is large and clinically meaningful, but variation between services and study designs prevents a High rating.",
        sources: [
            {
                title: "Home-based palliative care for adults with advanced illness",
                url: "https://www.cochrane.org/evidence/CD007760_effectiveness-and-cost-effectiveness-home-based-palliative-care-services-adults-advanced-illness-and"
            }
        ]
    },
    {
        id: "S89",
        statement: "Home palliative-care services reduce symptom burden",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports a small benefit",
        finding: "A Cochrane review found small improvements in symptom burden for adults with advanced illness receiving specialist home palliative care.",
        design: "Systematic review of controlled studies; symptom findings were drawn from three trials and one controlled before-and-after study involving 2,107 participants.",
        riskOfBias: "Serious concern — blinding was not feasible and symptom reporting may have been influenced by knowledge of the care model.",
        consistency: "Some concern — findings generally favoured home care, but diagnoses and services differed.",
        precision: "Serious concern — the evidence was synthesised narratively rather than as one dependable pooled effect.",
        directness: "Direct for adults with advanced illness receiving specialist support at home.",
        otherFactors: "Patient-centred symptom benefit may be valuable even when hospital utilisation is unchanged.",
        ratingReason: "The evidence supports a modest symptom benefit, but the size and transferability of the effect remain uncertain.",
        sources: [
            {
                title: "Home-based palliative care for adults with advanced illness",
                url: "https://www.cochrane.org/evidence/CD007760_effectiveness-and-cost-effectiveness-home-based-palliative-care-services-adults-advanced-illness-and"
            }
        ]
    },
    {
        id: "S90",
        statement: "Home-based end-of-life care reduces hospital admissions",
        association: "Unknown",
        evidence: "Low",
        evidenceScore: 2,
        direction: "No general answer",
        finding: "A Cochrane review found that hospital admission during home-based end-of-life care varied widely between trials, with some reporting fewer admissions and another reporting more.",
        design: "Cochrane systematic review of four randomised trials of home-based end-of-life care.",
        riskOfBias: "Serious concern — trials were few and service models, eligibility and usual care differed.",
        consistency: "Very serious concern — hospital-use effects pointed in different directions.",
        precision: "Serious concern — no stable pooled admission estimate was available.",
        directness: "Direct for people with terminal illness receiving organised end-of-life care at home.",
        otherFactors: "The review provided much clearer evidence for place of death than for hospital utilisation.",
        ratingReason: "Home care may support patient preference without predictably reducing admissions, so hospital-use savings should not be assumed.",
        sources: [
            {
                title: "Home-based end-of-life care",
                url: "https://www.cochrane.org/evidence/CD009231_home-based-end-life-care"
            }
        ]
    },
    {
        id: "S91",
        statement: "Tailored falls education reduces falls among older hospital patients",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "An updated 2026 Cochrane review concluded that education tailored to staff, patients and families probably reduces both the rate of falls and the risk of an individual falling in hospital.",
        design: "Cochrane systematic review of randomised and cluster-randomised hospital studies within a review of 55 studies and 104,474 participants.",
        riskOfBias: "Some concern — participants and staff usually knew which intervention they received and reporting was incomplete in some trials.",
        consistency: "No major concern for the overall direction of tailored education interventions.",
        precision: "Some concern — the public summary does not provide one simple pooled effect applicable to every hospital setting.",
        directness: "Direct for older people in acute and rehabilitation hospitals.",
        otherFactors: "Approaches integrated into the local service and involving patients or families appeared more effective than generic information alone.",
        ratingReason: "Current randomised evidence supports tailored education as a credible falls-reduction component, while the exact effect depends on implementation.",
        sources: [
            {
                title: "Interventions for preventing falls in older people in hospitals",
                url: "https://www.cochrane.org/evidence/CD016065_how-effective-are-interventions-designed-reduce-falls-older-people-hospitals"
            }
        ]
    },
    {
        id: "S92",
        statement: "Multifactorial falls-prevention programmes reduce falls in hospitals",
        association: "Weak",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Probably supports the statement",
        finding: "A 2026 Cochrane review concluded that multifactorial programmes probably reduce the rate of falls and the risk of falling, although the confidence intervals also allowed little effect or a slight increase.",
        design: "Cochrane systematic review of randomised and cluster-randomised hospital studies.",
        riskOfBias: "Some concern — interventions could not be blinded and the selected components differed according to local risk assessment.",
        consistency: "Some concern — programmes and settings varied and not every study found benefit.",
        precision: "Serious concern — pooled uncertainty included the possibility of no effect or slight harm.",
        directness: "Direct for older patients in acute and rehabilitation hospitals.",
        otherFactors: "Programmes appear more credible when tailored to local systems and individual risks rather than applied as a generic bundle.",
        ratingReason: "The overall evidence is reasonably strong, but the expected association is modest and implementation-dependent.",
        sources: [
            {
                title: "Interventions for preventing falls in older people in hospitals",
                url: "https://www.cochrane.org/evidence/CD016065_how-effective-are-interventions-designed-reduce-falls-older-people-hospitals"
            }
        ]
    },
    {
        id: "S93",
        statement: "Exercise during an unplanned hospital stay improves independence in daily activities",
        association: "None",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Does not show a clinically important benefit",
        finding: "A Cochrane review found that in-hospital exercise produced an average 1.8-point improvement on a 100-point independence scale, far below the estimated 11-point threshold for a clinically important change.",
        design: "Cochrane systematic review of 16 randomised or quasi-randomised studies involving 5,174 older medical inpatients for this outcome.",
        riskOfBias: "Serious concern — several studies had problems with randomisation or outcome measurement.",
        consistency: "Serious concern — exercise type, dose and adherence varied widely.",
        precision: "Some concern — the 95% confidence interval ranged from 0.43 points worse to 4.12 points better.",
        directness: "Direct for adults aged 65 and over during an unplanned medical admission.",
        otherFactors: "The finding does not exclude benefits for selected patients or better-targeted exercise programmes.",
        ratingReason: "Current evidence does not support a meaningful average improvement in daily independence from generic in-hospital exercise programmes.",
        sources: [
            {
                title: "Exercise for older patients during unplanned hospital stays",
                url: "https://www.cochrane.org/evidence/CD005955_exercise-older-patients-during-unplanned-hospital-stays"
            }
        ]
    },
    {
        id: "S94",
        statement: "Exercise during an unplanned hospital stay improves functional mobility",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "Possible benefit, highly uncertain",
        finding: "A Cochrane review estimated better mobility scores after in-hospital exercise, but the improvement was below the usual threshold for clinical importance and the evidence was very uncertain.",
        design: "Cochrane systematic review of eight randomised or quasi-randomised studies involving 2,369 older medical inpatients.",
        riskOfBias: "Very serious concern — several studies had design limitations and outcome measurement was vulnerable to bias.",
        consistency: "Very serious concern — programmes ranged from general activity to structured and resistance exercise.",
        precision: "Serious concern — the pooled improvement was 0.78 points, with a confidence interval from 0.02 points worse to 1.57 points better on a 12-point scale.",
        directness: "Direct for older adults admitted unexpectedly with general medical conditions.",
        otherFactors: "No particular exercise model could be identified as reliably superior.",
        ratingReason: "The result is promising enough for targeted evaluation but too uncertain for a general mobility-improvement claim.",
        sources: [
            {
                title: "Exercise for older patients during unplanned hospital stays",
                url: "https://www.cochrane.org/evidence/CD005955_exercise-older-patients-during-unplanned-hospital-stays"
            }
        ]
    },
    {
        id: "S95",
        statement: "Exercise programmes during acute hospital admission increase inpatient falls",
        association: "None",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Does not support an increased risk",
        finding: "A Cochrane review found virtually identical inpatient fall rates with exercise and usual care, with a pooled risk ratio of 0.99.",
        design: "Cochrane systematic review of randomised or quasi-randomised trials involving 1,787 older medical inpatients for falls.",
        riskOfBias: "Some concern — exercise delivery and fall reporting differed between trials.",
        consistency: "No major concern for the conclusion that exercise did not materially increase falls.",
        precision: "Some concern — the 95% confidence interval from 0.59 to 1.65 allows moderate benefit or harm, but the central estimate shows no difference.",
        directness: "Direct for exercise delivered during unplanned medical admissions among older people.",
        otherFactors: "Safety evidence does not establish effectiveness for independence or mobility.",
        ratingReason: "Moderate-certainty evidence is reassuring about average fall risk, while remaining too imprecise to exclude smaller subgroup differences.",
        sources: [
            {
                title: "Exercise for older patients during unplanned hospital stays",
                url: "https://www.cochrane.org/evidence/CD005955_exercise-older-patients-during-unplanned-hospital-stays"
            }
        ]
    }
]);