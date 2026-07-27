/* ========================================================================== 
   00A. FURTHER ADAPTED-GRADE STATEMENTS
   --------------------------------------------------------------------------
   These statements extend the rapid review into stroke-unit care, hip-fracture
   pathways, medicines safety, heart-failure case management, hospital at home,
   transitional care and antimicrobial stewardship.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.push(...[
    {
        id: "S68",
        statement: "Organised stroke-unit care reduces death or dependency after stroke",
        association: "Strong",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A Cochrane network meta-analysis found that organised stroke-unit care reduced death or dependency compared with care on a general ward, with an odds ratio of 0.75.",
        design: "Cochrane systematic review and network meta-analysis of 29 randomised trials involving 5,902 people.",
        riskOfBias: "Some concern — patients and staff could not be blinded to the ward model, although sensitivity analyses restricted to stronger trials gave similar results.",
        consistency: "No major concern — benefits were seen across age, sex, stroke type and initial severity.",
        precision: "No major concern — the 95% confidence interval was 0.66 to 0.85.",
        directness: "Direct for people admitted to hospital after acute stroke.",
        otherFactors: "Benefits were clearest in dedicated stroke wards rather than mobile teams working across general wards.",
        ratingReason: "This is a defined service model supported by randomised evidence and clinically important patient outcomes.",
        sources: [
            {
                title: "Organised inpatient stroke-unit care",
                url: "https://www.cochrane.org/evidence/CD000197_organised-inpatient-stroke-unit-care"
            }
        ]
    },
    {
        id: "S69",
        statement: "Organised stroke-unit care increases the chance of living independently at home",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "The same review estimated that, for every 100 people receiving stroke-unit care, about six additional people were living at home and six additional people were independent in daily activities at follow-up.",
        design: "Cochrane systematic review and network meta-analysis of randomised trials.",
        riskOfBias: "Some concern — service delivery could not be blinded, but outcome assessment was stronger in several trials.",
        consistency: "No major concern — functional benefits were broadly consistent across patient groups.",
        precision: "No major concern for the pooled death-or-institutional-care and death-or-dependency outcomes.",
        directness: "Direct for stroke survivors requiring inpatient treatment.",
        otherFactors: "The outcome reflects what matters to patients rather than only bed use or process measures.",
        ratingReason: "The average benefit is moderate rather than dramatic, but the direction is dependable and supported by randomised evidence.",
        sources: [
            {
                title: "Organised inpatient stroke-unit care",
                url: "https://www.cochrane.org/evidence/CD000197_organised-inpatient-stroke-unit-care"
            }
        ]
    },
    {
        id: "S70",
        statement: "Orthogeriatric collaboration reduces mortality after hip fracture",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A meta-analysis found lower in-hospital mortality and lower longer-term mortality when geriatricians and orthopaedic teams collaborated in hip-fracture care.",
        design: "Systematic review and meta-analysis of 18 comparative studies involving 9,094 patients, predominantly non-randomised.",
        riskOfBias: "Serious concern — hospitals adopting orthogeriatric care may also have introduced faster surgery, rehabilitation and other improvements.",
        consistency: "Some concern — several models were combined, including consultation, shared care and dedicated wards.",
        precision: "No major concern for pooled mortality estimates, although individual studies varied.",
        directness: "Direct for older patients admitted with hip fracture.",
        otherFactors: "A later review also found the clearest mortality benefit in dedicated orthogeriatric wards.",
        ratingReason: "The mortality signal is consistent and clinically important, but most evidence remains observational and cannot isolate the active component.",
        sources: [
            {
                title: "Orthogeriatric care models and outcomes in hip fracture patients",
                url: "https://pubmed.ncbi.nlm.nih.gov/23912859/"
            },
            {
                title: "Optimal orthogeriatric care model after hip fracture",
                url: "https://pubmed.ncbi.nlm.nih.gov/29691612/"
            }
        ]
    },
    {
        id: "S71",
        statement: "Orthogeriatric collaboration shortens hospital stay after hip fracture",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports a small or variable reduction",
        finding: "The hip-fracture meta-analysis found a shorter length of stay overall, with larger reductions in shared-care models, but statistical heterogeneity limited interpretation.",
        design: "Systematic review and meta-analysis of comparative orthogeriatric studies.",
        riskOfBias: "Serious concern — length of stay is affected by rehabilitation capacity, discharge arrangements and local coding as well as the clinical model.",
        consistency: "Serious concern — reductions varied substantially between orthogeriatric models and hospitals.",
        precision: "Some concern — the pooled standardised difference favoured orthogeriatric care, but it does not translate cleanly into a single number of days.",
        directness: "Direct for hospital stay following hip-fracture repair.",
        otherFactors: "The mortality evidence is more persuasive than the precise bed-day estimate.",
        ratingReason: "A shorter stay is plausible and repeatedly observed, but local pathway design is likely to determine the size of the effect.",
        sources: [
            {
                title: "Orthogeriatric care models and outcomes in hip fracture patients",
                url: "https://pubmed.ncbi.nlm.nih.gov/23912859/"
            }
        ]
    },
    {
        id: "S72",
        statement: "Primary-care medication-safety interventions reduce hospital admissions or A&E visits",
        association: "None",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Does not support the broad statement",
        finding: "A Cochrane review found that professional and organisational interventions intended to reduce medication errors in primary care probably make little or no difference to hospital admissions, hospitalisations, A&E visits or mortality.",
        design: "Cochrane systematic review of 30 studies involving 169,969 participants.",
        riskOfBias: "Some concern — each intervention type was represented by relatively few studies and programmes varied.",
        consistency: "No major concern for the conclusion that system-level hospital use did not clearly fall.",
        precision: "Some concern — precision differed between outcomes and intervention types.",
        directness: "Direct for medication-safety interventions delivered in primary care, community pharmacy, homes and outpatient settings.",
        otherFactors: "Interventions may still improve prescribing processes without producing a measurable reduction in hospital use.",
        ratingReason: "This is useful negative evidence: improving a medication process should not automatically be counted as an admission-reduction intervention.",
        sources: [
            {
                title: "Actions to reduce medication errors in adults in primary care",
                url: "https://www.cochrane.org/evidence/CD003942_actions-reduce-medication-errors-adults-primary-care"
            }
        ]
    },
    {
        id: "S73",
        statement: "Medication optimisation in care homes reduces hospital admissions",
        association: "None",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Does not show a clear admission reduction",
        finding: "A Cochrane review found improved prescribing appropriateness, but the majority of studies did not show fewer hospital admissions, adverse drug events or deaths.",
        design: "Cochrane systematic review of 12 studies involving 10,953 residents in 355 care homes.",
        riskOfBias: "Serious concern — interventions were multi-component, outcomes were inconsistently measured and several studies were at risk of bias.",
        consistency: "No major concern for the conclusion that hospital-admission benefits were not established.",
        precision: "Serious concern — only isolated studies reported fewer hospital days or other service benefits.",
        directness: "Direct for older care-home residents receiving pharmacist, prescriber or multidisciplinary medication interventions.",
        otherFactors: "Better prescribing is valuable even when an effect on hospital demand is not demonstrated.",
        ratingReason: "The evidence supports safer prescribing processes, but not using reduced hospital admissions as a dependable benefit.",
        sources: [
            {
                title: "Interventions to optimise prescribing for older people in care homes",
                url: "https://www.cochrane.org/evidence/CD009095_interventions-optimise-prescribing-older-people-care-homes"
            }
        ]
    },
    {
        id: "S74",
        statement: "Hospital-initiated heart-failure case management reduces unplanned readmissions",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A systematic review found that heart-failure case management started in hospital reduced unplanned readmissions, with a rate ratio of 0.74, and shortened hospital stay by about 1.3 days.",
        design: "Systematic review of 22 controlled studies, including 17 randomised trials and five non-randomised trials.",
        riskOfBias: "Some concern — programmes differed in staffing, home visits, follow-up and usual care.",
        consistency: "Some concern — benefits were clearer for programmes initiated during hospital care than those started solely in the community.",
        precision: "No major concern — the readmission confidence interval was 0.60 to 0.92.",
        directness: "Direct for people discharged after a heart-failure admission.",
        otherFactors: "Cost studies did not show a consistent financial difference despite lower readmission and length of stay.",
        ratingReason: "The timing and continuity of the programme appear important; a named pathway beginning before discharge is better supported than generic community case management.",
        sources: [
            {
                title: "Community case management for patients with heart failure",
                url: "https://pubmed.ncbi.nlm.nih.gov/27165648/"
            }
        ]
    },
    {
        id: "S75",
        statement: "Community-initiated heart-failure case management reduces hospital admissions",
        association: "None",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Does not show a clear reduction",
        finding: "In the same review, randomised studies of case management initiated in the community did not demonstrate a clear reduction in admissions.",
        design: "Systematic review containing a small subgroup of community-initiated controlled studies.",
        riskOfBias: "Serious concern — relatively few community-initiated studies were available and non-randomised studies were more positive than trials.",
        consistency: "Serious concern — results differed by study design and recruitment setting.",
        precision: "Serious concern — the evidence base was too small for a robust pooled estimate.",
        directness: "Direct for community case-management programmes serving people with heart failure.",
        otherFactors: "This does not mean community teams are ineffective; it means the strongest admission evidence came from pathways beginning around hospital discharge.",
        ratingReason: "The setting and timing of enrolment materially change the evidence and should not be collapsed into one generic case-management claim.",
        sources: [
            {
                title: "Community case management for patients with heart failure",
                url: "https://pubmed.ncbi.nlm.nih.gov/27165648/"
            }
        ]
    },
    {
        id: "S76",
        statement: "Admission-avoidance hospital at home reduces health-service costs",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A 2024 Cochrane review concluded that admission-avoidance hospital at home probably reduces health-service costs compared with inpatient admission, although studies used different costing methods and reported different amounts.",
        design: "Cochrane systematic review of randomised trials; three trials provided fuller economic evaluations and 2,148 participants contributed cost evidence.",
        riskOfBias: "Some concern — costing methods, included resources and local service prices differed.",
        consistency: "Some concern — the direction generally favoured hospital at home, but the size of savings varied.",
        precision: "Some concern — the review could not provide one transferable cost-saving figure.",
        directness: "Direct for selected older people who would otherwise be admitted to hospital.",
        otherFactors: "The same review found broadly similar mortality and readmission outcomes, reducing concern that lower cost simply reflected worse care.",
        ratingReason: "The direction of the cost effect is reasonably credible, but local implementation and which costs are counted will determine the actual saving.",
        sources: [
            {
                title: "Admission avoidance hospital at home",
                url: "https://www.cochrane.org/evidence/CD007491_hospital-home-services-avoid-admission-hospital"
            }
        ]
    },
    {
        id: "S77",
        statement: "Transitional care for care-home residents reduces hospital or A&E readmissions",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A systematic review and meta-analysis found lower hospital or A&E readmission after transitional-care interventions for older long-term-care residents, but heterogeneity was high.",
        design: "Systematic review of 15 quantitative studies involving 32,722 participants or records, with controlled and observational designs.",
        riskOfBias: "Serious concern — intervention allocation, resident selection and outcome recording differed between studies.",
        consistency: "Very serious concern — statistical heterogeneity for readmission was 81%.",
        precision: "Some concern — the pooled estimate favoured intervention, but the range of credible effects remained wide.",
        directness: "Direct for older residents moving between hospitals and long-term-care facilities, though systems differed from the NHS.",
        otherFactors: "Communication and referral processes between professionals were recurring features of more effective interventions.",
        ratingReason: "The overall direction is encouraging, but the evidence does not yet identify one standard transitional-care model or expected effect size.",
        sources: [
            {
                title: "Transitional care interventions for older residents of long-term care facilities",
                url: "https://pubmed.ncbi.nlm.nih.gov/35507344/"
            }
        ]
    },
    {
        id: "S78",
        statement: "Primary-care involvement after hospital discharge reduces readmissions among older patients",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A systematic review and meta-analysis found lower 30-day and six-month readmission when primary healthcare was integrated into aftercare for older patients discharged from hospital.",
        design: "Systematic review and meta-analysis of 30 studies involving 11,693 older patients.",
        riskOfBias: "Serious concern — interventions and comparison care varied, and not all included studies were randomised.",
        consistency: "Some concern — the direction was favourable, particularly where primary-care involvement continued over time.",
        precision: "No major concern for the pooled 30-day and six-month estimates.",
        directness: "Partly direct — the hospital-to-primary-care pathway is NHS-relevant, but the studies came from several health systems.",
        otherFactors: "Continuity of primary-care involvement appeared more important than a single handover contact.",
        ratingReason: "The evidence supports connected aftercare, but the effect cannot be attributed to one standard primary-care intervention.",
        sources: [
            {
                title: "Integrating primary healthcare in aftercare for older patients",
                url: "https://pubmed.ncbi.nlm.nih.gov/35753767/"
            }
        ]
    },
    {
        id: "S79",
        statement: "Simple referral after A&E discharge reduces repeat visits among older people",
        association: "None",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "Does not support simple referral alone",
        finding: "A systematic review found that low-intensity referral-only interventions were less likely to improve repeat attendance and other adverse outcomes than intensive interventions that continued beyond the A&E visit.",
        design: "Systematic review of nine heterogeneous controlled studies of older people discharged from A&E.",
        riskOfBias: "Very serious concern — studies were small, interventions and outcomes differed, and results could not be pooled.",
        consistency: "Serious concern — only broad trends could be identified across the studies.",
        precision: "Very serious concern — no dependable effect estimate was available.",
        directness: "Direct for older people discharged from A&E, but the evidence predates many modern frailty and community pathways.",
        otherFactors: "More intensive follow-up and targeting high-risk patients appeared more promising than an unsupported referral.",
        ratingReason: "Giving a referral is not equivalent to ensuring that assessment, treatment and follow-up actually occur.",
        sources: [
            {
                title: "A&E interventions to reduce repeat visits among older patients",
                url: "https://pubmed.ncbi.nlm.nih.gov/26171554/"
            }
        ]
    },
    {
        id: "S80",
        statement: "Hospital antimicrobial-stewardship programmes reduce mortality, length of stay or readmission",
        association: "Unknown",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Patient-outcome benefit is not established clearly",
        finding: "A systematic review found that stewardship programmes generally improved antibiotic use and prescribing, but few intervention types showed a clear effect on mortality, length of stay, readmission or Clostridioides difficile infection.",
        design: "Systematic review of heterogeneous inpatient antimicrobial-stewardship evaluations.",
        riskOfBias: "Serious concern — studies were usually short, underpowered for patient outcomes and methodologically weak.",
        consistency: "Some concern — prescribing outcomes improved more consistently than clinical or service outcomes.",
        precision: "Serious concern — most studies were not powered to detect mortality or readmission effects.",
        directness: "Direct for hospital antimicrobial stewardship, but specific interventions and patient groups varied.",
        otherFactors: "Reduced antimicrobial use and improved resistance patterns remain important benefits even where immediate flow outcomes are uncertain.",
        ratingReason: "The intervention has a strong medicines-safety and population-health rationale, but it should not be sold primarily as a proven length-of-stay or readmission lever.",
        sources: [
            {
                title: "Antimicrobial stewardship programmes in inpatient hospitals",
                url: "https://pubmed.ncbi.nlm.nih.gov/25203174/"
            }
        ]
    }
]);
