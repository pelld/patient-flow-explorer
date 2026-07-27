/* ========================================================================== 
   00A. FURTHER ADAPTED-GRADE STATEMENTS
   --------------------------------------------------------------------------
   These statements extend the rapid review into pharmacy, virtual wards,
   discharge planning, liaison psychiatry and early supported discharge.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.push(...[
    {
        id: "S36",
        statement: "Community-pharmacy minor-ailment schemes reduce GP consultations",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports some substitution, with uncertainty",
        finding: "A UK systematic review found that GP consultations and prescribing for minor ailments often fell after pharmacy schemes were introduced, while symptom resolution was generally high. It could not establish how much total demand was genuinely shifted.",
        design: "Systematic review of 31 evaluations, mostly observational service studies.",
        riskOfBias: "Serious concern — patients chose whether to use the scheme, comparison groups were often weak and wider changes in local services may have affected demand.",
        consistency: "Some concern — most studies suggested substitution, but the size of the effect varied and several measured intended rather than actual alternative use.",
        precision: "Serious concern — no dependable pooled reduction in GP consultations was available.",
        directness: "Direct for UK community pharmacy and minor ailments, but older schemes may differ from current Pharmacy First services.",
        otherFactors: "High symptom-resolution and low reconsultation rates support the plausibility of genuine substitution.",
        ratingReason: "Pharmacy schemes probably absorb some minor-ailment work, but the evidence cannot yet state how many GP appointments will be released by expansion.",
        sources: [
            {
                title: "Are pharmacy-based minor ailment schemes a substitute for other service providers?",
                url: "https://pubmed.ncbi.nlm.nih.gov/23834884/"
            }
        ]
    },
    {
        id: "S37",
        statement: "Adding pharmacists to primary-care teams reduces GP workload and A&E attendance",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Possible benefit",
        finding: "A systematic review found fewer GP appointments and less A&E attendance after pharmacists were integrated into primary-care teams, but overall primary-care use increased and hospital admissions did not clearly change.",
        design: "Systematic review of 28 randomised and observational studies.",
        riskOfBias: "Serious concern — service models varied widely and observational studies may have selected practices or patients most likely to benefit.",
        consistency: "Some concern — workload and attendance findings were generally favourable, but outcomes and follow-up periods differed.",
        precision: "Serious concern — no single pooled workload or A&E effect was reported.",
        directness: "Partly direct — several studies were relevant to primary care, but health systems and pharmacist roles differed.",
        otherFactors: "The review found possible cost savings, but longer-term effects remained unclear.",
        ratingReason: "Pharmacists may redistribute work successfully, but the evidence is not strong enough to predict a specific reduction in GP or A&E activity.",
        sources: [
            {
                title: "Impact of integrating pharmacists into primary care teams on health-system indicators",
                url: "https://pubmed.ncbi.nlm.nih.gov/31455642/"
            }
        ]
    },
    {
        id: "S38",
        statement: "Post-discharge virtual wards reduce later A&E visits",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A meta-analysis of 24 randomised trials found that post-discharge virtual wards were associated with 17% fewer later A&E visits across diagnoses, with a pooled risk ratio of 0.83.",
        design: "Systematic review and meta-analysis of 24 randomised controlled trials involving 10,876 patients.",
        riskOfBias: "Some concern — virtual-ward components and intensity varied, and not every trial reported A&E use.",
        consistency: "Some concern — results were pooled across heart failure, COPD, high-risk and mixed populations.",
        precision: "No major concern — the 95% confidence interval was 0.70 to 0.98.",
        directness: "Partly direct — the pathway is relevant to NHS discharge care, but trials came from several health systems.",
        otherFactors: "Randomised evidence and a clinically meaningful pooled reduction support Moderate confidence.",
        ratingReason: "The evidence supports a reduction in later A&E use, while the exact effect will depend on patient selection and the service model used.",
        sources: [
            {
                title: "Virtual ward transitional care versus usual post-discharge care",
                url: "https://pubmed.ncbi.nlm.nih.gov/35763296/"
            }
        ]
    },
    {
        id: "S39",
        statement: "Post-discharge virtual wards reduce readmissions across all patient groups",
        association: "None",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Does not support the broad claim",
        finding: "The same meta-analysis found fewer readmissions in heart-failure trials, but no clear reduction in trials involving other diagnoses. The pooled risk ratio outside heart failure was 0.96.",
        design: "Systematic review and meta-analysis of randomised controlled trials, stratified by diagnosis.",
        riskOfBias: "Some concern — programmes differed and some diagnostic groups contained relatively few trials.",
        consistency: "No major concern for the conclusion that effects differ by patient group.",
        precision: "No major concern — outside heart failure the 95% confidence interval was 0.88 to 1.05, excluding a large overall benefit.",
        directness: "Direct for post-discharge virtual wards, but not for admission-avoidance virtual wards.",
        otherFactors: "The diagnosis-specific pattern argues against applying one system-wide readmission assumption.",
        ratingReason: "Virtual wards should not be expected to reduce readmissions equally across all conditions; the strongest evidence of benefit was in heart failure.",
        sources: [
            {
                title: "Virtual ward transitional care versus usual post-discharge care",
                url: "https://pubmed.ncbi.nlm.nih.gov/35763296/"
            }
        ]
    },
    {
        id: "S40",
        statement: "Advance care planning reduces A&E visits and ambulance calls from care homes",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A systematic review found that two care-home studies reported significant reductions in A&E visits and ambulance calls after advance care planning, while results in other settings and diseases were mixed.",
        design: "Systematic review of eight comparative studies.",
        riskOfBias: "Very serious concern — seven of the eight studies were rated at high risk of bias.",
        consistency: "Serious concern — effects differed substantially by setting and condition.",
        precision: "Serious concern — no pooled effect estimate was available.",
        directness: "Direct for care-home residents, but not for all people with serious illness.",
        otherFactors: "The setting-specific consistency provides a signal worth testing, but not a dependable system-wide estimate.",
        ratingReason: "Advance care planning may prevent unwanted emergency transfers from care homes, but the current evidence is too biased and heterogeneous for a precise forecast.",
        sources: [
            {
                title: "Association between advance care planning and emergency department visits",
                url: "https://pubmed.ncbi.nlm.nih.gov/36958094/"
            }
        ]
    },
    {
        id: "S41",
        statement: "Consultation-only inpatient liaison psychiatry reduces hospital length of stay",
        association: "None",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Does not show a clear benefit",
        finding: "A systematic review of randomised trials found no clear evidence that the consultation-liaison psychiatry models tested reduced length of stay, costs or patient outcomes compared with usual care.",
        design: "Systematic review of eight randomised trials.",
        riskOfBias: "Serious concern — every trial had methodological limitations and all were more than ten years old.",
        consistency: "No major concern — none of the tested consultation-only models showed a clear overall benefit.",
        precision: "Serious concern — clinical heterogeneity prevented meta-analysis and several trials were small.",
        directness: "Partly direct — inpatient liaison psychiatry is NHS-relevant, but modern integrated models may differ from the older consultation services tested.",
        otherFactors: "The findings apply mainly to consultation after screening, not necessarily to proactive embedded multidisciplinary teams.",
        ratingReason: "The available trials do not support assuming that a consultation-only service will shorten stays, although they do not rule out better-designed modern models.",
        sources: [
            {
                title: "Effectiveness of inpatient consultation-liaison psychiatry service models",
                url: "https://pubmed.ncbi.nlm.nih.gov/33906098/"
            }
        ]
    },
    {
        id: "S42",
        statement: "Structured discharge planning reduces readmissions among older hospital patients",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A review of systematic reviews found that discharge planning was associated with a 22% lower risk of readmission among older adults, with a pooled risk ratio of 0.78.",
        design: "Systematic review and meta-analysis of seven systematic reviews.",
        riskOfBias: "Some concern — discharge-planning interventions varied and reviews may have included overlapping primary studies.",
        consistency: "No major concern for readmission — both meta-analysis and narrative findings generally favoured discharge planning.",
        precision: "No major concern — the pooled 95% confidence interval was 0.72 to 0.84.",
        directness: "Direct for older adults discharged from acute hospitals.",
        otherFactors: "Effects on length of stay were smaller and more mixed than effects on readmission.",
        ratingReason: "The evidence supports structured discharge planning as a readmission-reduction measure, while not proving that every checklist or discharge role is equally effective.",
        sources: [
            {
                title: "Effect of discharge planning on length of stay and readmission rates of older adults",
                url: "https://pubmed.ncbi.nlm.nih.gov/34216502/"
            }
        ]
    },
    {
        id: "S43",
        statement: "Early supported discharge after stroke shortens hospital stay and reduces dependency",
        association: "Strong",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A Cochrane review of 17 trials found that coordinated early supported discharge shortened hospital stay by about 5.5 days and produced around five fewer cases of death or dependency per 100 patients.",
        design: "Cochrane systematic review of 17 randomised trials involving 2,422 participants.",
        riskOfBias: "Some concern — patients were selected and services differed, although allocation was randomised.",
        consistency: "No major concern — benefits were clearest when coordinated multidisciplinary teams treated people with mild-to-moderate disability.",
        precision: "No major concern — confidence intervals excluded no effect for hospital stay and death or dependency.",
        directness: "Direct for selected stroke patients suitable for supported discharge.",
        otherFactors: "The review rated the evidence Moderate and identified a coherent service model associated with benefit.",
        ratingReason: "This is one of the stronger service-delivery findings: a defined multidisciplinary model improves outcomes and releases bed days for an appropriate patient group.",
        sources: [
            {
                title: "Early supported discharge services for people with acute stroke",
                url: "https://pubmed.ncbi.nlm.nih.gov/28703869/"
            }
        ]
    },
    {
        id: "S44",
        statement: "Early supported discharge for older medical patients shortens hospital stay",
        association: "Strong",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A meta-analysis of five controlled trials found that early supported discharge shortened hospital stay by about six days, but did not demonstrate clear differences in mortality, readmission or function.",
        design: "Systematic review and meta-analysis of five randomised or quasi-randomised trials.",
        riskOfBias: "Serious concern — every study had some risk-of-bias concern and the services were not standardised.",
        consistency: "Very serious concern — statistical heterogeneity for length of stay was 90%.",
        precision: "Some concern — the pooled confidence interval suggested a reduction of roughly 2 to 10 days.",
        directness: "Direct for older adults admitted with medical complaints, but patient selection varied.",
        otherFactors: "No improvement was established for secondary outcomes, so fewer inpatient days should not automatically be interpreted as better overall care.",
        ratingReason: "The bed-day effect is substantial but highly variable, and stronger trials are needed before assuming it will transfer to every acute medical service.",
        sources: [
            {
                title: "Early supported discharge for older adults admitted with medical complaints",
                url: "https://pubmed.ncbi.nlm.nih.gov/35395719/"
            }
        ]
    },
    {
        id: "S45",
        statement: "Pharmacy teams in acute and emergency care reduce medication errors",
        association: "Strong",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement",
        finding: "A systematic review found that pharmacy-led medication reconciliation in acute and emergency settings consistently reduced medicine errors and related harm compared with usual care.",
        design: "Systematic review of 17 studies involving 7,630 patients; 15 were non-randomised and two were randomised.",
        riskOfBias: "Serious concern — most studies were non-randomised and many showed evidence of bias.",
        consistency: "No major concern for the direction — all included studies reported fewer errors with pharmacy involvement.",
        precision: "Serious concern — outcome definitions differed and statistical heterogeneity was very high.",
        directness: "Partly direct — the care setting was relevant, but none of the included studies was based in the UK.",
        otherFactors: "The consistent direction across heterogeneous studies strengthens confidence that the process benefit is real.",
        ratingReason: "Pharmacy teams very likely improve medication safety, but evidence on length of stay, admissions and cost remains much less certain.",
        sources: [
            {
                title: "Pharmacy teams in acute or emergency medicine departments",
                url: "https://pubmed.ncbi.nlm.nih.gov/36102210/"
            }
        ]
    }
]);
