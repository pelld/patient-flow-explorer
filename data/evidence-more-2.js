/* ========================================================================== 
   00A. FURTHER ADAPTED-GRADE STATEMENTS
   --------------------------------------------------------------------------
   These statements extend the rapid review into frequent attendance, frailty,
   discharge planning, mental health crisis care and community paramedicine.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.push(...[
    {
        id: "S26",
        statement: "Putting GPs or primary-care clinicians inside A&E reduces waiting times",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "No dependable answer",
        finding: "A Cochrane review could not determine whether primary-care professionals treating non-urgent patients inside A&E changed waiting times or total length of stay.",
        design: "Cochrane systematic review including one randomised and three non-randomised studies with 11,463 patients.",
        riskOfBias: "Very serious concern — most studies were non-randomised and the models, triage systems and professional roles differed.",
        consistency: "Very serious concern — results were inconsistent and could not be pooled.",
        precision: "Very serious concern — waiting-time evidence came mainly from one small study.",
        directness: "Partly direct — the review included UK and Irish services, but modern co-located primary-care models may differ.",
        otherFactors: "No safety outcomes were reported, so absence of demonstrated harm should not be assumed.",
        ratingReason: "The intervention is plausible, but the available studies do not establish that it improves A&E flow or reduces crowding.",
        sources: [
            {
                title: "Primary care professionals providing non-urgent care in hospital emergency departments",
                url: "https://www.cochrane.org/evidence/CD002097_primary-care-professionals-providing-non-urgent-care-hospital-emergency-departments"
            }
        ]
    },
    {
        id: "S27",
        statement: "Case management reduces A&E use among frequent attenders",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Promising, but uncertain",
        finding: "Systematic reviews found that case management and individual care plans often reduced A&E use, but positive effects were much more common in uncontrolled before-and-after studies than in randomised trials.",
        design: "Systematic reviews including randomised trials, controlled studies and uncontrolled before-and-after evaluations.",
        riskOfBias: "Serious concern — regression to the mean is substantial because patients are often recruited immediately after a period of unusually high use.",
        consistency: "Serious concern — randomised and uncontrolled studies produced different conclusions.",
        precision: "Serious concern — different definitions of frequent attendance prevented a dependable pooled effect.",
        directness: "Direct for frequent A&E attenders, but most studies were outside the UK and programmes varied considerably.",
        otherFactors: "Benefits to housing, social support and patient experience may occur even where attendance reductions are modest.",
        ratingReason: "Targeted case management may help some high-need patients, but simple before-and-after reductions probably exaggerate the effect.",
        sources: [
            {
                title: "Effectiveness of interventions targeting frequent users of emergency departments",
                url: "https://pubmed.ncbi.nlm.nih.gov/21689565/"
            },
            {
                title: "Reducing frequent visits to the emergency department: systematic review",
                url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0123660"
            }
        ]
    },
    {
        id: "S28",
        statement: "Geriatric assessment in A&E reduces hospital admissions for older people",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "Five studies involving 28,434 older patients all reported lower admission rates after consultant-geriatrician-led assessment was introduced, with reductions ranging from 2.6% to 19.7%.",
        design: "Systematic review of four before-and-after observational studies and one prospective non-randomised controlled study.",
        riskOfBias: "Serious concern — service changes were not randomised and patient selection, community support and concurrent changes may explain part of the effect.",
        consistency: "Some concern — all studies favoured the intervention, but the size of benefit varied greatly.",
        precision: "Serious concern — no pooled estimate was appropriate because interventions and populations differed.",
        directness: "Direct for older people in A&E; four of the five studies were conducted in the UK.",
        otherFactors: "The consistent direction across several sites supports the credibility of some admission reduction.",
        ratingReason: "The evidence is encouraging and NHS-relevant, but it cannot yet define the expected benefit or prove that assessment alone caused it.",
        sources: [
            {
                title: "Consultant geriatrician-led comprehensive geriatric assessment in A&E",
                url: "https://academic.oup.com/ageing/article/46/3/366/2661787"
            }
        ]
    },
    {
        id: "S29",
        statement: "Community geriatric assessment reduces unplanned hospital admissions",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Possible small reduction",
        finding: "A Cochrane review found that community comprehensive geriatric assessment may reduce unplanned admission, with a risk ratio of 0.83 across six studies, but certainty was Low.",
        design: "Cochrane systematic review of randomised and cluster-randomised trials in frail, community-dwelling older people.",
        riskOfBias: "Some concern — interventions differed and blinding was generally not possible.",
        consistency: "Some concern — effects varied between programmes and settings.",
        precision: "Serious concern — the confidence interval was close to no effect.",
        directness: "Direct for frail older people living in the community, but not for the wider population.",
        otherFactors: "No convincing mortality or care-home-admission benefit was demonstrated.",
        ratingReason: "There may be a modest admissions benefit for selected frail people, but this is not evidence of a large system-wide reduction.",
        sources: [
            {
                title: "Comprehensive geriatric assessment for high-risk older people in the community",
                url: "https://www.cochrane.org/evidence/CD012705_comprehensive-geriatric-assessment-older-people-community-risk-poor-health-outcomes"
            }
        ]
    },
    {
        id: "S30",
        statement: "Personalised discharge planning reduces hospital readmissions",
        association: "Weak",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports a small benefit",
        finding: "A Cochrane review of 33 trials found that personalised discharge planning probably slightly reduced readmission, with a pooled risk ratio of 0.89 over about three months.",
        design: "Cochrane systematic review of randomised trials involving 12,242 participants.",
        riskOfBias: "Some concern — discharge-planning content and usual care differed across trials.",
        consistency: "No major concern — the pooled result across 17 trials was reasonably consistent.",
        precision: "No major concern — the 95% confidence interval was 0.81 to 0.97.",
        directness: "Direct for medical inpatients leaving hospital, though not specific to the NHS.",
        otherFactors: "The effect is statistically credible but modest rather than transformative.",
        ratingReason: "There is reasonably dependable evidence of a small reduction in readmission, not evidence that discharge planning alone will solve flow pressure.",
        sources: [
            {
                title: "Discharge planning from hospital: Cochrane review",
                url: "https://www.cochrane.org/evidence/CD000313_discharge-planning-hospital"
            }
        ]
    },
    {
        id: "S31",
        statement: "Short-stay mental health crisis units reduce A&E stays and inpatient admissions",
        association: "Strong",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement",
        finding: "A systematic review and meta-analysis estimated that crisis units reduced A&E length of stay by about 164 minutes and reduced the odds of inpatient admission to 0.55 compared with usual care.",
        design: "Systematic review and meta-analysis of evaluations of short-stay crisis or decision units.",
        riskOfBias: "Serious concern — services were not consistently randomised and local referral thresholds could influence both outcomes.",
        consistency: "Some concern — the pooled direction was favourable, but models and settings differed.",
        precision: "No major concern for the pooled A&E length-of-stay and admission outcomes.",
        directness: "Direct for mental-health crisis pathways, but much of the evidence came from non-UK systems.",
        otherFactors: "Patient experience and longer-term clinical outcomes were reported less consistently.",
        ratingReason: "The operational effect is sizeable, but transferability and non-randomised designs keep overall confidence Low.",
        sources: [
            {
                title: "Short-stay crisis units for mental health patients: systematic review and meta-analysis",
                url: "https://pubmed.ncbi.nlm.nih.gov/35876075/"
            }
        ]
    },
    {
        id: "S32",
        statement: "Community paramedicine reduces A&E use",
        association: "Moderate",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "Promising, but highly uncertain",
        finding: "Reviews generally reported lower A&E or hospital use after community-paramedicine programmes, but the strongest reductions tended to come from studies with the greatest risk of bias.",
        design: "Systematic reviews and an exploratory meta-analysis of heterogeneous community-paramedicine programmes.",
        riskOfBias: "Very serious concern — most studies were non-randomised, used historical controls or selected patients after high recent use.",
        consistency: "Serious concern — programmes ranged from preventive home visits to frequent-caller services and medication support.",
        precision: "Serious concern — programme diversity makes a single effect estimate difficult to interpret.",
        directness: "Indirect for the NHS because much of the evidence came from North America.",
        otherFactors: "The intervention may improve access and experience even where utilisation effects remain uncertain.",
        ratingReason: "Community paramedicine is a credible local test, but current evidence is too biased and heterogeneous for a dependable national impact estimate.",
        sources: [
            {
                title: "Mobile integrated health-community paramedicine programmes and A&E visits",
                url: "https://pubmed.ncbi.nlm.nih.gov/36640693/"
            },
            {
                title: "Limited data to support improved outcomes after community paramedicine",
                url: "https://pubmed.ncbi.nlm.nih.gov/30857911/"
            }
        ]
    },
    {
        id: "S33",
        statement: "Comprehensive geriatric assessment for admitted older people increases the chance of living at home",
        association: "Moderate",
        evidence: "High",
        evidenceScore: 4,
        direction: "Supports the statement",
        finding: "A Cochrane review of 29 trials found that older people receiving organised comprehensive geriatric assessment after admission were more likely to be alive and living at home at follow-up.",
        design: "Cochrane systematic review of randomised and cluster-randomised trials.",
        riskOfBias: "Some concern — blinding was not practical and service models differed, but allocation was randomised.",
        consistency: "No major concern — the overall direction was consistent across a substantial evidence base.",
        precision: "No major concern — the review included enough participants to estimate the outcome reliably.",
        directness: "Direct for older people admitted to hospital, including services comparable with NHS geriatric care.",
        otherFactors: "This is an outcome of specialist coordinated care, not simply completion of an assessment form.",
        ratingReason: "A large randomised evidence base provides high confidence that organised geriatric care improves the chance of returning to and remaining at home.",
        sources: [
            {
                title: "Comprehensive geriatric assessment for older adults admitted to hospital",
                url: "https://www.cochrane.org/evidence/CD006211_comprehensive-geriatric-assessment-older-adults-admitted-hospital"
            }
        ]
    },
    {
        id: "S34",
        statement: "A doctor supporting A&E triage reduces patients leaving without being seen",
        association: "Strong",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "Meta-analyses found fewer patients leaving without being seen when a triage liaison doctor was used, including a pooled risk ratio of 0.62 in one review.",
        design: "Systematic reviews and meta-analyses of controlled and before-and-after A&E studies.",
        riskOfBias: "Some concern — many studies were observational and implementation often involved wider triage redesign.",
        consistency: "No major concern — the direction was favourable across studies despite differences in model.",
        precision: "No major concern — pooled confidence intervals excluded no effect.",
        directness: "Direct for the A&E outcome, but studies were mainly conducted in North America.",
        otherFactors: "The effect on total A&E length of stay was less consistent than the effect on leaving without being seen.",
        ratingReason: "The evidence supports a meaningful reduction in patients leaving before assessment, while the local staffing model still matters.",
        sources: [
            {
                title: "Impact of triage liaison providers on A&E throughput",
                url: "https://pubmed.ncbi.nlm.nih.gov/32505473/"
            },
            {
                title: "Interventions to improve A&E throughput and care delivery indicators",
                url: "https://pubmed.ncbi.nlm.nih.gov/38826092/"
            }
        ]
    },
    {
        id: "S35",
        statement: "Community geriatric assessment reduces A&E visits",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "No dependable answer",
        finding: "A Cochrane review found the effect on A&E attendance was uncertain, with a pooled risk ratio of 0.65 but a very wide confidence interval from 0.26 to 1.59.",
        design: "Cochrane systematic review; the A&E outcome was reported by three studies with 873 participants.",
        riskOfBias: "Some concern — interventions and populations differed and blinding was not practical.",
        consistency: "Serious concern — only three studies reported the outcome and results varied.",
        precision: "Very serious concern — the confidence interval included a large reduction, no effect and a possible increase.",
        directness: "Direct for frail older people living in the community, but not for all A&E users.",
        otherFactors: "No upgrade applied.",
        ratingReason: "The evidence is too imprecise to claim either that community assessment reduces A&E visits or that it does not work.",
        sources: [
            {
                title: "Comprehensive geriatric assessment for high-risk older people in the community",
                url: "https://www.cochrane.org/evidence/CD012705_comprehensive-geriatric-assessment-older-people-community-risk-poor-health-outcomes"
            }
        ]
    }
]);
