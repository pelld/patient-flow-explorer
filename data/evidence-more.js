/* ========================================================================== 
   00A. ADDITIONAL ADAPTED-GRADE STATEMENTS
   --------------------------------------------------------------------------
   These records extend the first rapid evidence review across A&E operations,
   ambulance pathways, primary care continuity, SDEC and hospital at home.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS.push(...[
    {
        id: "S12",
        statement: "Lower A&E nurse staffing increases waits and delays care",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "Systematic reviews found that lower nurse staffing was generally associated with longer waits, longer stays, more patients leaving without being seen and slower treatment, but the evidence was described as weak.",
        design: "Systematic reviews of mainly observational studies from several health systems.",
        riskOfBias: "Serious concern — staffing levels may respond to expected demand and studies could not fully adjust for workload, skill mix or wider departmental capacity.",
        consistency: "Some concern — most studies pointed in the same direction, but staffing and outcome measures differed substantially.",
        precision: "Serious concern — the reviews could not provide one dependable staffing-to-waiting-time estimate.",
        directness: "Partly direct — several studies measured A&E waiting and treatment outcomes, but UK evidence was limited.",
        otherFactors: "No upgrade applied because the evidence remained predominantly observational.",
        ratingReason: "The direction is fairly consistent and operationally plausible, but the evidence cannot yet say how many additional nurses would produce a particular improvement.",
        sources: [
            {
                title: "Association between nurse staffing and quality of care in emergency departments: systematic review",
                url: "https://pubmed.ncbi.nlm.nih.gov/38447488/"
            },
            {
                title: "Safe staffing for nursing in emergency departments: evidence review",
                url: "https://pubmed.ncbi.nlm.nih.gov/26273096/"
            }
        ]
    },
    {
        id: "S13",
        statement: "Faster ambulance response times improve survival across all emergencies",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "No general answer",
        finding: "A large systematic review found positive associations in selected groups, but concluded that the evidence was too uncertain to infer a general survival benefit across all ambulance patients.",
        design: "Systematic review and meta-analysis of 115 mainly observational studies covering 691,056 patients.",
        riskOfBias: "Very serious concern — confounding by indication and reverse causation are substantial because the sickest patients receive the highest response priority.",
        consistency: "Very serious concern — findings differed by condition, response system and study method.",
        precision: "Serious concern — pooled estimates were not sufficiently dependable for a general operational rule.",
        directness: "Indirect for a general NHS staffing decision because effects vary greatly by condition; cardiac arrest and major trauma are distinct cases.",
        otherFactors: "No upgrade applied; the review itself rated certainty as very low.",
        ratingReason: "Response time is clearly important for some time-critical conditions, but the evidence does not support a single claim that simply shortening all responses improves survival overall.",
        sources: [
            {
                title: "Association of ambulance and helicopter response times with patient survival: systematic review and meta-analysis",
                url: "https://pubmed.ncbi.nlm.nih.gov/41248153/"
            }
        ]
    },
    {
        id: "S14",
        statement: "Putting a doctor in A&E triage reduces length of stay",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A 2025 systematic review estimated that physician-led triage interventions reduced A&E length of stay by about 22 minutes on average.",
        design: "Systematic review and meta-analysis of controlled and observational evaluations, including 245,404 patients across all intervention groups.",
        riskOfBias: "Some concern — many included studies were before-and-after evaluations and implementation differed between sites.",
        consistency: "Some concern — the direction was generally favourable but statistical heterogeneity was high.",
        precision: "No major concern — the pooled 95% confidence interval was approximately 15 to 28 minutes shorter.",
        directness: "Direct for A&E length of stay, but mostly outside the NHS and therefore partly indirect for England.",
        otherFactors: "The review rated the certainty of this intervention as Moderate.",
        ratingReason: "There is a measurable pooled reduction and a plausible mechanism, but the size of benefit will depend on how triage is organised locally.",
        sources: [
            {
                title: "Effective strategies for reducing patient length of stay in the emergency department",
                url: "https://pubmed.ncbi.nlm.nih.gov/39979831/"
            },
            {
                title: "Interventions to improve emergency department throughput and care delivery indicators",
                url: "https://pubmed.ncbi.nlm.nih.gov/38826092/"
            }
        ]
    },
    {
        id: "S15",
        statement: "Fast-track pathways reduce A&E length of stay for lower-acuity patients",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "A recent meta-analysis estimated that fast-track pathways reduced A&E length of stay by about 22 minutes, while an earlier systematic review found moderately strong evidence for improved flow outcomes.",
        design: "Systematic reviews of controlled and before-and-after evaluations.",
        riskOfBias: "Serious concern — many studies were non-randomised and fast-track services may have been introduced alongside other operational changes.",
        consistency: "Some concern — most results were favourable, but intervention definitions and patient groups varied.",
        precision: "Some concern — the pooled confidence interval was wide, from about 2 to 42 minutes shorter.",
        directness: "Direct for lower-acuity A&E flow, but transferability to each NHS department depends on its case mix and existing streaming arrangements.",
        otherFactors: "No upgrade applied because the recent review rated certainty as Low.",
        ratingReason: "Fast track probably improves flow for selected patients, but it is not evidence that total departmental crowding or admitted-patient waits will fall by the same amount.",
        sources: [
            {
                title: "Effective strategies for reducing patient length of stay in the emergency department",
                url: "https://pubmed.ncbi.nlm.nih.gov/39979831/"
            },
            {
                title: "Systematic review of triage-related interventions to improve patient flow",
                url: "https://pubmed.ncbi.nlm.nih.gov/21771339/"
            }
        ]
    },
    {
        id: "S16",
        statement: "Point-of-care testing reduces A&E length of stay",
        association: "Unknown",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Possible benefit, not demonstrated clearly",
        finding: "A recent meta-analysis estimated a reduction of about 42 minutes, but the confidence interval included no effect. Another review found highly variable results depending on the test and outcome measured.",
        design: "Systematic reviews including randomised trials, cohort studies and before-and-after evaluations.",
        riskOfBias: "Serious concern — studies tested different technologies and frequently changed wider clinical processes at the same time.",
        consistency: "Serious concern — results varied considerably across tests, settings and time outcomes.",
        precision: "Very serious concern — the pooled confidence interval ranged from a substantial reduction to a possible increase.",
        directness: "Direct for test turnaround and selected A&E pathways, but less direct for overall departmental length of stay.",
        otherFactors: "No upgrade applied.",
        ratingReason: "Faster results do not automatically produce faster discharge or admission when other parts of the pathway remain constrained.",
        sources: [
            {
                title: "Effective strategies for reducing patient length of stay in the emergency department",
                url: "https://pubmed.ncbi.nlm.nih.gov/39979831/"
            },
            {
                title: "Point-of-care tests and time metrics for urgent interventions in emergency departments",
                url: "https://pubmed.ncbi.nlm.nih.gov/36426166/"
            }
        ]
    },
    {
        id: "S17",
        statement: "Very long A&E stays increase in-hospital mortality",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement for some patient groups",
        finding: "A systematic review of 52 studies found that stays over 24 hours were associated with higher in-hospital mortality among patients admitted to intensive care, with an odds ratio of about 1.40.",
        design: "Systematic review and meta-analysis of observational studies including more than 1.7 million A&E patients.",
        riskOfBias: "Serious concern — patients who remain longest may be sicker or harder to place, even after statistical adjustment.",
        consistency: "Some concern — associations were not found at every time threshold or in every patient group.",
        precision: "No major concern for the over-24-hour intensive-care subgroup; the confidence interval excluded no association.",
        directness: "Direct for A&E length of stay and mortality, but the evidence combined several countries and health systems.",
        otherFactors: "The very large combined population strengthens confidence in the observed risk signal.",
        ratingReason: "The evidence supports avoiding extremely prolonged A&E stays, while not proving that an arbitrary reduction in time will itself reduce mortality for every patient.",
        sources: [
            {
                title: "Length of stay in the emergency department and in-hospital mortality: systematic review and meta-analysis",
                url: "https://pubmed.ncbi.nlm.nih.gov/36614835/"
            }
        ]
    },
    {
        id: "S18",
        statement: "Admission-avoidance hospital at home gives similar mortality and readmission outcomes to inpatient care",
        association: "None",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports similar outcomes",
        finding: "A 2024 Cochrane review found little or no difference in six-month mortality or later readmission for selected older patients treated through hospital at home rather than inpatient care.",
        design: "Cochrane systematic review of randomised controlled trials.",
        riskOfBias: "Some concern — services and eligible patient groups differed across trials and blinding was not possible.",
        consistency: "No major concern for mortality; moderate variation was present for readmission.",
        precision: "Some concern — the confidence intervals allow modest benefit or harm, although they exclude very large differences.",
        directness: "Direct for selected older people who would otherwise require hospital admission; not applicable to all acute patients.",
        otherFactors: "The review itself rated both outcomes as Moderate-certainty evidence.",
        ratingReason: "For carefully selected patients, hospital at home appears to be a credible alternative rather than an obviously inferior substitute for inpatient care.",
        sources: [
            {
                title: "Admission avoidance hospital at home: Cochrane review",
                url: "https://pubmed.ncbi.nlm.nih.gov/38438116/"
            }
        ]
    },
    {
        id: "S19",
        statement: "Admission-avoidance hospital at home reduces moves into residential care",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "The 2024 Cochrane review estimated that selected older patients receiving hospital at home were less likely to be living in residential care at six months than patients receiving inpatient care.",
        design: "Cochrane systematic review of four randomised trials with 1,271 participants for this outcome.",
        riskOfBias: "Some concern — models of hospital at home and usual care differed between trials.",
        consistency: "Serious concern — statistical heterogeneity was substantial, although the direction favoured hospital at home.",
        precision: "No major concern — the pooled risk ratio was 0.53 with a 95% confidence interval of 0.41 to 0.69.",
        directness: "Direct for selected older adults considered suitable for admission avoidance.",
        otherFactors: "The review rated this outcome as Moderate-certainty evidence.",
        ratingReason: "A meaningful and reasonably precise effect was observed, but it depends on selecting patients who can safely receive acute treatment at home.",
        sources: [
            {
                title: "Admission avoidance hospital at home: Cochrane review",
                url: "https://pubmed.ncbi.nlm.nih.gov/38438116/"
            }
        ]
    },
    {
        id: "S20",
        statement: "Greater continuity with the same GP reduces emergency admissions among older people",
        association: "Strong",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "An English study found that older patients with the least continuity had roughly twice the odds of emergency admission compared with those with the greatest continuity.",
        design: "Prospective cohort and nested case-control analyses in English general practice.",
        riskOfBias: "Serious concern — worsening health may itself reduce continuity and increase admissions, and residual differences between patients may remain.",
        consistency: "Some concern — both analyses showed a graded relationship, but this rating relies heavily on one research programme.",
        precision: "Some concern — the strongest estimates were statistically precise, while the prospective analysis was less consistent.",
        directness: "Direct for English patients aged 65 and over and emergency hospital admission.",
        otherFactors: "A dose-response pattern across continuity levels supports the credibility of the association.",
        ratingReason: "The association is large and graded, but observational evidence cannot show how much admissions would fall if a continuity intervention were introduced.",
        sources: [
            {
                title: "Continuity of primary care and emergency hospital admissions among older patients in England",
                url: "https://pubmed.ncbi.nlm.nih.gov/29133489/"
            }
        ]
    },
    {
        id: "S21",
        statement: "Alternative ambulance pathways safely reduce A&E conveyance",
        association: "Unknown",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Promising but unresolved",
        finding: "Reviews found promising examples of referral and non-conveyance pathways, but safety, effectiveness and efficiency were not established consistently. Around one in five non-transported patients subsequently attended A&E in a separate meta-analysis.",
        design: "Scoping review of 41 studies and a systematic review of outcomes after ambulance non-transport.",
        riskOfBias: "Serious concern — patients selected for non-conveyance differ markedly, and many studies lacked a comparable control group.",
        consistency: "Serious concern — pathway designs and subsequent attendance estimates varied widely.",
        precision: "Serious concern — subsequent A&E attendance ranged from 5% to 46% across studies.",
        directness: "Partly direct — several studies involved UK ambulance services, but pathways and available community alternatives differ locally.",
        otherFactors: "No upgrade applied.",
        ratingReason: "Alternative pathways may be valuable, but the evidence does not support assuming that all non-conveyance schemes are safe or reduce total urgent-care demand.",
        sources: [
            {
                title: "Alternatives to direct emergency department conveyance of ambulance patients",
                url: "https://pubmed.ncbi.nlm.nih.gov/33407771/"
            },
            {
                title: "Outcomes of patients not transported following ambulance attendance",
                url: "https://pubmed.ncbi.nlm.nih.gov/30943579/"
            }
        ]
    },
    {
        id: "S22",
        statement: "Expanding same-day emergency care reduces emergency admissions",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "Insufficient direct evidence",
        finding: "A 2024 review of UK adult medical SDEC found only two observational cohorts, four audits and substantial descriptive or policy literature, with too little evidence to establish effectiveness or safety reliably.",
        design: "UK scoping review rather than an effectiveness meta-analysis.",
        riskOfBias: "Very serious concern — most available reports lacked robust comparison groups and may reflect selective local implementation.",
        consistency: "Very serious concern — SDEC models, eligible patients and reported outcomes differed between services.",
        precision: "Very serious concern — no dependable pooled reduction in admissions was available.",
        directness: "Direct for UK NHS SDEC services, but the reported evidence was mainly descriptive rather than causal.",
        otherFactors: "No upgrade applied.",
        ratingReason: "SDEC is a plausible and widely promoted model, but current published evidence does not yet quantify the admission reduction managers should expect from expansion.",
        sources: [
            {
                title: "Evidence base for adult medical Same Day Emergency Care in UK NHS hospitals",
                url: "https://pubmed.ncbi.nlm.nih.gov/38646058/"
            }
        ]
    },
    {
        id: "S23",
        statement: "SDEC selection scores reliably identify patients suitable for same-day care",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "Does not support choosing one tool yet",
        finding: "A systematic review of nine studies found that sensitivity, specificity and the proportion judged suitable varied extremely widely, and no study tested implementation in practice.",
        design: "Systematic review of nine validation studies covering three selection scores.",
        riskOfBias: "Serious concern — studies used different exclusion criteria and definitions of suitability.",
        consistency: "Very serious concern — performance estimates were highly heterogeneous and could not be compared directly.",
        precision: "Serious concern — sensitivity ranged from 18% to 99% and specificity from 10% to 89%.",
        directness: "Direct for selecting acute medical patients for SDEC, but indirect for real-world clinical implementation and outcomes.",
        otherFactors: "No upgrade applied.",
        ratingReason: "The evidence does not justify assuming that a single score will select SDEC patients accurately without local clinical assessment and evaluation.",
        sources: [
            {
                title: "Strategies to identify medical patients suitable for same-day emergency care",
                url: "https://pubmed.ncbi.nlm.nih.gov/39033821/"
            }
        ]
    },
    {
        id: "S24",
        statement: "A&E crowding increases the number of patients who leave without being seen",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement",
        finding: "A systematic review found that five included studies reported higher rates of patients leaving without being seen when A&E departments were more crowded.",
        design: "Systematic review of observational studies using several different measures of crowding.",
        riskOfBias: "Serious concern — crowding may be measured by the same waits that influence patients to leave, and other service pressures may explain both.",
        consistency: "Some concern — the direction was consistent in the relevant studies, but crowding definitions differed.",
        precision: "Serious concern — the review did not provide one pooled effect estimate.",
        directness: "Direct for A&E crowding and leaving without being seen, but evidence came from several health systems.",
        otherFactors: "No upgrade applied.",
        ratingReason: "The relationship is plausible and repeatedly observed, but the evidence cannot define the exact reduction achieved by a particular anti-crowding intervention.",
        sources: [
            {
                title: "Relationship between emergency department crowding and patient outcomes: systematic review",
                url: "https://pubmed.ncbi.nlm.nih.gov/24354886/"
            }
        ]
    },
    {
        id: "S25",
        statement: "A&E time-based targets improve patient outcomes",
        association: "Weak",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Generally favourable, but implementation matters",
        finding: "A systematic review covering 33 studies and about 34 million attendances found improvements in crowding, assessment and admission times, with mortality lower in some settings and unchanged in others.",
        design: "Systematic review of national, regional and state policy evaluations, predominantly observational.",
        riskOfBias: "Serious concern — time targets were introduced alongside other system changes and gaming or short-stay admission effects are possible.",
        consistency: "Serious concern — mortality findings differed between settings and implementation approaches.",
        precision: "Some concern — the review used narrative and harvest-plot synthesis rather than one pooled effect.",
        directness: "Partly direct — it included the UK-style target but much of the evidence came from Australia and New Zealand.",
        otherFactors: "The very large combined population improves detection of uncommon harms, but does not remove policy confounding.",
        ratingReason: "Targets may improve flow and some outcomes when backed by operational change, but the target itself should not be treated as a standalone clinical intervention.",
        sources: [
            {
                title: "Have time-based A&E length-of-stay targets influenced quality of care?",
                url: "https://pubmed.ncbi.nlm.nih.gov/33724685/"
            }
        ]
    }
]);
