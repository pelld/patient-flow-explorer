/* ========================================================================== 
   00A. FURTHER ADAPTED-GRADE STATEMENTS
   --------------------------------------------------------------------------
   These statements extend the rapid review into acute medical units, care-home
   models, frailty screening, medication review, geriatric units, observation
   units and specialist palliative care.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.push(...[
    {
        id: "S56",
        statement: "Acute medical units reduce hospital length of stay",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "Systematic reviews found shorter hospital stays after acute medical units were introduced, with reported reductions ranging from about 0.3 to 2.6 days.",
        design: "Systematic reviews of mainly observational before-and-after and comparative hospital studies.",
        riskOfBias: "Serious concern — units were introduced alongside other service changes and hospitals were not randomised.",
        consistency: "Some concern — studies generally favoured acute medical units, but the size of the reduction varied substantially.",
        precision: "Serious concern — no single dependable pooled effect was available.",
        directness: "Direct for acute medical admissions in European and Australasian hospitals, including NHS-relevant models.",
        otherFactors: "The direction was consistent enough to support a real flow benefit, but the active components of the model remain unclear.",
        ratingReason: "Acute medical units probably shorten stays, but the evidence cannot state how much benefit a particular local design will produce.",
        sources: [
            {
                title: "The effectiveness and variation of acute medical units: a systematic review",
                url: "https://pubmed.ncbi.nlm.nih.gov/27313174/"
            },
            {
                title: "Effectiveness of acute medical units in hospitals: a systematic review",
                url: "https://pubmed.ncbi.nlm.nih.gov/19903756/"
            }
        ]
    },
    {
        id: "S57",
        statement: "Acute medical units reduce inpatient mortality",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Possible benefit",
        finding: "Most published analyses reported lower mortality after acute medical units were introduced, but effects ranged from almost no change to sizeable reductions.",
        design: "Systematic reviews of observational hospital evaluations.",
        riskOfBias: "Very serious concern — mortality may also have changed because of staffing, coding, case mix or wider hospital improvement programmes.",
        consistency: "Some concern — the direction was usually favourable, but not every analysis found a reduction.",
        precision: "Serious concern — estimates were heterogeneous and could not be combined into a dependable effect.",
        directness: "Direct for acute medical inpatients, but individual unit designs and consultant working patterns varied.",
        otherFactors: "No upgrade applied because the observational design cannot separate the unit effect from other changes.",
        ratingReason: "The mortality signal is encouraging, but much less secure than the evidence for shorter length of stay.",
        sources: [
            {
                title: "The effectiveness and variation of acute medical units: a systematic review",
                url: "https://pubmed.ncbi.nlm.nih.gov/27313174/"
            }
        ]
    },
    {
        id: "S58",
        statement: "Enhanced healthcare models in care homes reduce unplanned hospital admissions",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "May support the statement",
        finding: "A Cochrane review concluded that alternative multidisciplinary and outreach models may reduce unplanned hospital admissions from residential care facilities.",
        design: "Cochrane systematic review of randomised and non-randomised evaluations of alternative care models.",
        riskOfBias: "Serious concern — interventions differed substantially and several studies were small or non-randomised.",
        consistency: "Serious concern — models ranged from multidisciplinary teams to specialist outreach and enhanced primary care.",
        precision: "Serious concern — the evidence did not provide one robust expected reduction.",
        directness: "Partly direct — the population is highly relevant, but many studies were outside the UK and residential-care systems differ.",
        otherFactors: "The review did not show a corresponding clear reduction in A&E visits.",
        ratingReason: "Enhanced care may prevent some admissions, but managers should not assume that every care-home model produces the same result.",
        sources: [
            {
                title: "Alternative ways to organise healthcare for older adults living in care facilities",
                url: "https://www.cochrane.org/evidence/CD013880_gaolingzhejiehushishenizhumugaolingzheniduisuruyiliaotigongnodaitifangfa"
            }
        ]
    },
    {
        id: "S59",
        statement: "Enhanced healthcare models in care homes reduce A&E visits",
        association: "None",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Does not show a clear reduction",
        finding: "The Cochrane review found that alternative care models may make little or no difference to emergency-department transfers from residential care facilities.",
        design: "Cochrane systematic review of varied randomised and non-randomised service models.",
        riskOfBias: "Serious concern — included services, populations and definitions of emergency transfer differed.",
        consistency: "Some concern — evidence did not show a reliable A&E reduction despite a possible effect on unplanned admissions.",
        precision: "Serious concern — estimates remained compatible with modest benefit or little effect.",
        directness: "Partly direct for care-home residents, but transferability to NHS care homes depends on local primary, community and ambulance services.",
        otherFactors: "The distinction between hospital admission and A&E attendance suggests that pathways may change without eliminating emergency assessment.",
        ratingReason: "The available evidence does not justify using fewer A&E visits as an automatic benefit of enhanced care-home support.",
        sources: [
            {
                title: "Alternative ways to organise healthcare for older adults living in care facilities",
                url: "https://www.cochrane.org/evidence/CD013880_gaolingzhejiehushishenizhumugaolingzheniduisuruyiliaotigongnodaitifangfa"
            }
        ]
    },
    {
        id: "S60",
        statement: "Frailty identified during an emergency admission predicts longer stays and poorer outcomes",
        association: "Strong",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "Across large unplanned-admission cohorts, clinically assessed moderate or severe frailty was consistently associated with higher mortality, longer stays and a lower chance of discharge home.",
        design: "Systematic review and meta-analysis of 45 observational cohorts covering more than 39 million admissions.",
        riskOfBias: "Serious concern — frailty is associated with age, illness severity and comorbidity, although many studies adjusted for these factors.",
        consistency: "No major concern for mortality and discharge outcomes when frailty was assessed clinically.",
        precision: "No major concern for the direction, although the exact size varied between cohorts and tools.",
        directness: "Direct for unplanned hospital admissions and clinically administered frailty measures.",
        otherFactors: "A graded relationship across frailty severity supports the credibility of the association.",
        ratingReason: "Frailty is a dependable risk marker, but this does not by itself prove that screening changes outcomes.",
        sources: [
            {
                title: "Prevalence and outcomes of frailty in unplanned hospital admissions",
                url: "https://pubmed.ncbi.nlm.nih.gov/37138587/"
            }
        ]
    },
    {
        id: "S61",
        statement: "Frailty screening by itself reduces admissions or repeat A&E visits",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "No direct answer",
        finding: "Reviews show that frailty screening predicts risk, but they do not establish that screening alone prevents admission, shortens stays or reduces repeat attendance.",
        design: "Systematic reviews of prognostic observational studies rather than trials of screening-led care.",
        riskOfBias: "Very serious concern — prediction has often been treated as evidence of intervention benefit without testing what happens after screening.",
        consistency: "Serious concern — frailty tools differ and evidence on 30-day A&E reattendance is inconsistent.",
        precision: "Very serious concern — no dependable intervention-effect estimate is available.",
        directness: "Indirect — the evidence measures prognosis, not the effect of implementing a screening programme.",
        otherFactors: "Screening may still be useful when linked to a proven geriatric assessment and treatment pathway.",
        ratingReason: "Identifying risk is not the same as changing it; the pathway following the score determines whether patients benefit.",
        sources: [
            {
                title: "Screening of the frail patient in the emergency department",
                url: "https://pubmed.ncbi.nlm.nih.gov/28986161/"
            }
        ]
    },
    {
        id: "S62",
        statement: "Medication review alone reduces hospital readmissions among older people",
        association: "None",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Does not support the statement",
        finding: "A systematic review of randomised trials found no reduction in readmissions when medication review was delivered as an isolated intervention.",
        design: "Systematic review and network meta-analysis of randomised controlled trials in hospitalised or recently discharged adults aged 65 and over.",
        riskOfBias: "Some concern — allocation concealment, blinding and contamination were imperfect in several trials.",
        consistency: "No major concern for the conclusion that review alone was insufficient.",
        precision: "Serious concern — the isolated-review estimate was imprecise, with a risk ratio of 1.06 and a confidence interval from 0.45 to 2.51.",
        directness: "Direct for older people and hospital readmission.",
        otherFactors: "Benefits appeared when medication review was combined with reconciliation, education and transitional care.",
        ratingReason: "The evidence argues against treating a one-off medication review as a complete readmission intervention.",
        sources: [
            {
                title: "Medication review interventions to reduce hospital readmissions in older people",
                url: "https://pubmed.ncbi.nlm.nih.gov/33576506/"
            }
        ]
    },
    {
        id: "S63",
        statement: "Medication review combined with reconciliation, education and transitional care reduces readmissions",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "The network meta-analysis found fewer readmissions when medication review was embedded in a broader package including reconciliation, patient and professional education, and transitional care.",
        design: "Systematic review and network meta-analysis of randomised controlled trials.",
        riskOfBias: "Some concern — several trials had limitations in allocation concealment, blinding and contamination.",
        consistency: "No major concern — combined, multi-component models performed more favourably than review alone at both early and later follow-up.",
        precision: "No major concern for the broader transitional-care package; the pooled risk ratio for readmission at any time was 0.82 with a 95% confidence interval of 0.74 to 0.91.",
        directness: "Direct for older adults leaving hospital, although the precise components differed between trials.",
        otherFactors: "The contrast with medication review alone strengthens the case that implementation and follow-through are essential.",
        ratingReason: "A connected medication-safety pathway is more credible than a stand-alone review completed without education or follow-up.",
        sources: [
            {
                title: "Medication review interventions to reduce hospital readmissions in older people",
                url: "https://pubmed.ncbi.nlm.nih.gov/33576506/"
            }
        ]
    },
    {
        id: "S64",
        statement: "Acute geriatric units reduce functional decline and later institutional care",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "Systematic reviews found less functional decline at discharge and fewer people living in institutional care after treatment in multidisciplinary geriatric units compared with usual inpatient care.",
        design: "Systematic reviews and meta-analyses of randomised and quasi-experimental comparative studies.",
        riskOfBias: "Some concern — service delivery could not be blinded and geriatric-unit components differed.",
        consistency: "Some concern — the clearest benefits were functional status and institutionalisation rather than mortality or readmission.",
        precision: "No major concern for the pooled institutionalisation and functional-decline findings.",
        directness: "Direct for acutely ill older inpatients receiving multidisciplinary geriatric care.",
        otherFactors: "Patient-centred care, frequent review, early rehabilitation and discharge planning were recurring components.",
        ratingReason: "The evidence supports a defined multidisciplinary model, while not showing that every geriatric-labelled bed or ward produces the same outcomes.",
        sources: [
            {
                title: "The effectiveness of inpatient geriatric evaluation and management units",
                url: "https://pubmed.ncbi.nlm.nih.gov/20002509/"
            },
            {
                title: "Effectiveness of acute geriatric unit care using Acute Care for Elders components",
                url: "https://pubmed.ncbi.nlm.nih.gov/23176020/"
            }
        ]
    },
    {
        id: "S65",
        statement: "Hospital-based specialist palliative care improves quality of life and symptom burden",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports a small benefit",
        finding: "Randomised evidence found small average improvements in quality of life, symptom burden, depression and satisfaction with care compared with usual hospital care.",
        design: "Systematic review of 42 randomised controlled trials involving 7,779 patients and unpaid caregivers.",
        riskOfBias: "Serious concern — participants and clinicians could not be blinded and many control groups also received some palliative-care input.",
        consistency: "No major concern for the small quality-of-life and symptom effects, although services and diagnoses varied.",
        precision: "No major concern for the pooled small effects, but evidence for survival and cost-effectiveness was inconclusive.",
        directness: "Direct for adults with advanced illness receiving hospital-linked specialist palliative care.",
        otherFactors: "The most important benefits were person-centred outcomes rather than a proven reduction in admissions or mortality.",
        ratingReason: "The average effect is small and the certainty limited, but the outcomes matter greatly to people with advanced illness and their families.",
        sources: [
            {
                title: "Hospital-based specialist palliative care compared with usual care",
                url: "https://pubmed.ncbi.nlm.nih.gov/34057828/"
            },
            {
                title: "Cochrane review of hospital-based specialist palliative care",
                url: "https://www.cochrane.org/CD012780/SYMPT_effectiveness-and-cost-effectiveness-hospital-based-specialist-palliative-care-hspc-adults-advanced"
            }
        ]
    },
    {
        id: "S66",
        statement: "A&E short-stay observation units reduce hospital length of stay",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A systematic review of randomised studies found that three of four studies reporting length of stay showed significant reductions for patients managed in short-stay units rather than inpatient wards.",
        design: "Systematic review of five small randomised studies comparing A&E short-stay units with inpatient care.",
        riskOfBias: "Serious concern — studies were small, at moderate risk of bias and often focused on selected diagnoses.",
        consistency: "Some concern — most studies favoured short stay, but outcomes were often reported by only one or two trials.",
        precision: "Serious concern — no robust pooled estimate of days saved was available.",
        directness: "Partly direct — the model is NHS-relevant, but included studies were not primarily from England.",
        otherFactors: "Safety evidence was limited because serious adverse outcomes were uncommon.",
        ratingReason: "Short-stay units probably reduce bed use for carefully selected patients, but results depend heavily on selection criteria and the alternative pathway.",
        sources: [
            {
                title: "Effectiveness and safety of short-stay units in the emergency department",
                url: "https://pubmed.ncbi.nlm.nih.gov/26201285/"
            }
        ]
    },
    {
        id: "S67",
        statement: "Geriatric A&E observation units reduce hospital admissions",
        association: "Unknown",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Promising, but unresolved",
        finding: "A recent review reported lower admission and readmission rates in many geriatric observation-unit studies, but comparative studies did not show a statistically clear difference in admissions saved.",
        design: "Systematic review and meta-analysis of 14 observational and comparative studies of geriatric A&E observation units.",
        riskOfBias: "Serious concern — patient selection and unit models varied, and many studies lacked a strong concurrent comparator.",
        consistency: "Serious concern — services differed in staffing, diagnoses, frailty criteria and comprehensive geriatric assessment components.",
        precision: "Serious concern — comparative evidence did not establish a dependable reduction.",
        directness: "Direct for older adults assessed in A&E observation units, but evidence came from several health systems.",
        otherFactors: "The units may still improve assessment and shorten stays even where admission reduction remains uncertain.",
        ratingReason: "The model is plausible and increasingly studied, but current comparative evidence is not strong enough for a firm admission-reduction claim.",
        sources: [
            {
                title: "Outcomes of emergency department observation units for geriatric assessment",
                url: "https://pubmed.ncbi.nlm.nih.gov/41987515/"
            }
        ]
    }
]);
