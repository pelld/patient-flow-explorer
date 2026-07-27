/* ========================================================================== 
   00A. FURTHER ADAPTED-GRADE STATEMENTS
   --------------------------------------------------------------------------
   These statements extend the rapid review into COPD rehabilitation and self-
   management, heart-failure monitoring, frailty, hospital safety and mental
   health crisis care.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.push(...[
    {
        id: "S46",
        statement: "Pulmonary rehabilitation after a COPD admission reduces later hospital readmissions",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A Cochrane review found fewer hospital readmissions after post-exacerbation pulmonary rehabilitation, with a pooled odds ratio of 0.44, although results varied substantially between programmes.",
        design: "Cochrane systematic review of 20 randomised trials involving 1,477 people; eight studies contributed readmission data.",
        riskOfBias: "Some concern — several trials were small and the quality of delivery and reporting varied.",
        consistency: "Serious concern — results differed considerably between studies and more recent trials generally found smaller effects.",
        precision: "Some concern — the confidence interval was wide, from 0.21 to 0.91.",
        directness: "Direct for people recently admitted with a COPD exacerbation, but programmes differed in intensity and setting.",
        otherFactors: "The review rated the readmission evidence Moderate and found clearer benefits for quality of life and exercise capacity.",
        ratingReason: "The intervention probably reduces readmissions for some patients, but the expected effect depends heavily on how intensive and well-connected the rehabilitation programme is.",
        sources: [
            {
                title: "Pulmonary rehabilitation following COPD exacerbations",
                url: "https://www.cochrane.org/evidence/CD005305_pulmonary-rehabilitation-people-who-have-been-hospital-exacerbation-chronic-obstructive-pulmonary"
            }
        ]
    },
    {
        id: "S47",
        statement: "Pulmonary rehabilitation after a COPD admission reduces mortality",
        association: "Unknown",
        evidence: "Low",
        evidenceScore: 2,
        direction: "No clear answer",
        finding: "The same Cochrane review estimated lower mortality, but the confidence interval was compatible with substantial benefit, little effect or harm.",
        design: "Cochrane systematic review of randomised trials; six studies involving 670 people contributed mortality data.",
        riskOfBias: "Serious concern — mortality results were influenced by trial quality and programme intensity.",
        consistency: "Serious concern — findings differed between studies and newer trials were less favourable.",
        precision: "Very serious concern — the pooled odds ratio was 0.68 with a 95% confidence interval from 0.28 to 1.67.",
        directness: "Direct for people after a COPD exacerbation requiring hospital care.",
        otherFactors: "No upgrade applied; the review rated mortality evidence Low.",
        ratingReason: "Pulmonary rehabilitation has established patient benefits, but reduced mortality should not currently be used as a dependable planning assumption.",
        sources: [
            {
                title: "Pulmonary rehabilitation following COPD exacerbations",
                url: "https://www.cochrane.org/evidence/CD005305_pulmonary-rehabilitation-people-who-have-been-hospital-exacerbation-chronic-obstructive-pulmonary"
            }
        ]
    },
    {
        id: "S48",
        statement: "Supported COPD self-management with an action plan reduces respiratory admissions",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A Cochrane review found that supported self-management including an exacerbation action plan reduced the chance of at least one respiratory-related admission, with an odds ratio of 0.69.",
        design: "Cochrane systematic review of 22 randomised trials involving 3,854 people; 14 studies contributed respiratory-admission data.",
        riskOfBias: "Some concern — participants and staff could not be blinded and intervention content differed.",
        consistency: "Some concern — programmes varied, but the pooled direction favoured self-management.",
        precision: "No major concern — the 95% confidence interval was 0.51 to 0.94.",
        directness: "Direct for people with COPD receiving supported self-management rather than a written leaflet alone.",
        otherFactors: "The estimated number needed to treat to prevent one respiratory admission over a year ranged from about 12 to 17 depending on baseline risk.",
        ratingReason: "Supported self-management is reasonably well evidenced for reducing COPD-related admissions, provided it includes repeated professional support rather than simply handing out an action plan.",
        sources: [
            {
                title: "COPD self-management interventions including action plans",
                url: "https://www.cochrane.org/evidence/CD011682_self-management-interventions-including-action-plans-patients-chronic-obstructive-pulmonary-disease"
            }
        ]
    },
    {
        id: "S49",
        statement: "Supported COPD self-management reduces all-cause hospital admissions",
        association: "Weak",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Weak support only",
        finding: "The same review estimated fewer all-cause admissions, but the confidence interval included no effect.",
        design: "Cochrane systematic review of randomised trials; 14 studies involving 2,467 people reported all-cause admissions.",
        riskOfBias: "Some concern — interventions and usual care varied substantially.",
        consistency: "Some concern — benefits were clearer for COPD-related admissions than for total hospital use.",
        precision: "Serious concern — the pooled odds ratio was 0.74 with a 95% confidence interval from 0.54 to 1.03.",
        directness: "Direct for all-cause hospital admission among people with COPD.",
        otherFactors: "No upgrade applied because the result did not exclude little or no effect.",
        ratingReason: "Managers should expect a more credible effect on COPD-related admissions than on total hospital demand.",
        sources: [
            {
                title: "COPD self-management interventions including action plans",
                url: "https://www.cochrane.org/evidence/CD011682_self-management-interventions-including-action-plans-patients-chronic-obstructive-pulmonary-disease"
            }
        ]
    },
    {
        id: "S50",
        statement: "Home telemonitoring for heart failure reduces heart-failure admissions",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A Cochrane review found that non-invasive home telemonitoring reduced heart-failure-related hospitalisation, with a pooled risk ratio of 0.71.",
        design: "Cochrane systematic review of randomised trials; eight studies involving 2,148 people contributed this outcome.",
        riskOfBias: "Some concern — technologies, monitoring intensity and clinical responses differed between trials.",
        consistency: "No major concern — statistical heterogeneity for this outcome was low.",
        precision: "No major concern — the 95% confidence interval was 0.60 to 0.83.",
        directness: "Direct for people with heart failure monitored at home, though modern NHS platforms may operate differently.",
        otherFactors: "The review rated this evidence Moderate and also found reduced mortality.",
        ratingReason: "Telemonitoring can reduce heart-failure-specific admissions when monitoring is linked to an effective clinical response pathway.",
        sources: [
            {
                title: "Structured telephone support and non-invasive telemonitoring for heart failure",
                url: "https://www.cochrane.org/evidence/CD007228_structured-telephone-support-and-non-invasive-telemonitoring-management-people-heart-failure"
            }
        ]
    },
    {
        id: "S51",
        statement: "Home telemonitoring for heart failure reduces all-cause hospital admissions",
        association: "Weak",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "Does not show a clear overall reduction",
        finding: "The same review found no clear reduction in all-cause hospitalisation from either telemonitoring or structured telephone support.",
        design: "Cochrane systematic review of randomised trials; 13 telemonitoring studies involving 3,332 people contributed all-cause admission data.",
        riskOfBias: "Serious concern — interventions and usual care differed and some trials had incomplete reporting.",
        consistency: "Serious concern — statistical heterogeneity was high.",
        precision: "Serious concern — the pooled risk ratio was 0.95 with a 95% confidence interval from 0.89 to 1.01.",
        directness: "Direct for all-cause hospitalisation in heart failure populations.",
        otherFactors: "The review rated this outcome Very low certainty despite clearer disease-specific benefits.",
        ratingReason: "A service may prevent heart-failure admissions without producing the same reduction in every cause of hospital admission.",
        sources: [
            {
                title: "Structured telephone support and non-invasive telemonitoring for heart failure",
                url: "https://www.cochrane.org/evidence/CD007228_structured-telephone-support-and-non-invasive-telemonitoring-management-people-heart-failure"
            }
        ]
    },
    {
        id: "S52",
        statement: "Comprehensive geriatric assessment increases the chance that older inpatients are living at home after discharge",
        association: "Weak",
        evidence: "High",
        evidenceScore: 4,
        direction: "Supports the statement",
        finding: "A Cochrane review found that older patients receiving comprehensive geriatric assessment were modestly more likely to be alive and living at home at follow-up, with a risk ratio of 1.06.",
        design: "Cochrane systematic review of 29 randomised trials involving 13,766 older people.",
        riskOfBias: "No major concern — the evidence came from randomised trials, although blinding of service delivery was not possible.",
        consistency: "No major concern — the direction was stable across a large international evidence base.",
        precision: "No major concern — the 95% confidence interval was 1.01 to 1.10.",
        directness: "Direct for older people admitted to acute hospital care.",
        otherFactors: "The review rated this outcome High certainty and also found fewer nursing-home admissions.",
        ratingReason: "The average effect is modest but dependable, making this a useful example of strong evidence for a smaller service effect.",
        sources: [
            {
                title: "Comprehensive geriatric assessment for older adults admitted to hospital",
                url: "https://www.cochrane.org/evidence/CD006211_comprehensive-geriatric-assessment-older-adults-admitted-hospital"
            }
        ]
    },
    {
        id: "S53",
        statement: "Community comprehensive geriatric assessment reduces unplanned admissions among frail older people",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A Cochrane review estimated fewer unplanned hospital admissions after community-based comprehensive geriatric assessment, with a risk ratio of 0.83.",
        design: "Cochrane systematic review of randomised trials; six studies involving 1,716 people contributed admission data.",
        riskOfBias: "Serious concern — only a minority of studies were at low risk of bias and models differed.",
        consistency: "Some concern — programmes were delivered in homes, practices and community clinics.",
        precision: "Serious concern — the upper confidence limit was 0.99, close to no effect.",
        directness: "Direct for community-dwelling frail older people at high risk of poor outcomes.",
        otherFactors: "The review found little or no effect on mortality or nursing-home admission and very uncertain evidence for A&E visits.",
        ratingReason: "Community assessment may reduce admissions, but the effect is less certain than inpatient geriatric assessment and should be evaluated locally.",
        sources: [
            {
                title: "Community comprehensive geriatric assessment for frail older people",
                url: "https://www.cochrane.org/evidence/CD012705_comprehensive-geriatric-assessment-older-people-community-risk-poor-health-outcomes"
            }
        ]
    },
    {
        id: "S54",
        statement: "Hospital rapid-response teams reduce in-hospital cardiac arrests",
        association: "Strong",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A systematic review and meta-analysis estimated 35% fewer in-hospital cardiac arrests after rapid-response teams were introduced, with a pooled risk ratio of 0.65.",
        design: "Systematic review and meta-analysis of controlled and mainly before-and-after hospital studies.",
        riskOfBias: "Serious concern — most studies were non-randomised and other patient-safety changes may have occurred at the same time.",
        consistency: "Serious concern — study effects varied substantially.",
        precision: "No major concern for the pooled estimate — the 95% confidence interval was 0.49 to 0.87.",
        directness: "Direct for adult inpatient cardiac arrests, but not specifically for A&E or ambulance pathways.",
        otherFactors: "The estimated effect was large, but the review itself rated the evidence Low because of bias and heterogeneity.",
        ratingReason: "Rapid-response systems probably prevent some arrests, but the size of benefit cannot be separated confidently from wider improvements in hospital safety.",
        sources: [
            {
                title: "Effectiveness of rapid response teams in reducing cardiac arrests and deaths",
                url: "https://pubmed.ncbi.nlm.nih.gov/30328990/"
            }
        ]
    },
    {
        id: "S55",
        statement: "Mental-health crisis intervention and home treatment reduce repeat psychiatric admissions",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Promising, but uncertain",
        finding: "A Cochrane review found that crisis intervention may reduce repeat admission, but the main estimate came from one trial and its confidence interval included no effect.",
        design: "Cochrane systematic review of eight randomised trials involving 1,144 people; one trial with 369 participants reported repeat admission at six months.",
        riskOfBias: "Serious concern — studies were small, old and had unclear reporting, attrition and blinding risks.",
        consistency: "Serious concern — outcomes could rarely be pooled and the crisis-care models were not described consistently.",
        precision: "Serious concern — the repeat-admission risk ratio was 0.75 with a 95% confidence interval from 0.50 to 1.13.",
        directness: "Partly direct for people with severe mental illness in crisis, but modern NHS crisis-resolution teams may differ from the services studied.",
        otherFactors: "Crisis care was more acceptable to service users and reduced family burden in some studies.",
        ratingReason: "Home-based crisis care is a credible alternative to admission, but the evidence does not provide a dependable admission-reduction forecast for a modern local service.",
        sources: [
            {
                title: "Crisis intervention for people with severe mental illnesses",
                url: "https://www.cochrane.org/evidence/CD001087_crisis-intervention-people-severe-mental-illnesses"
            }
        ]
    }
]);
