/* ========================================================================== 
   00A. ADAPTED GRADE EVIDENCE STATEMENT REGISTER
   --------------------------------------------------------------------------
   This is an adaptation of GRADE for health-services research. Each statement
   is rated as a body of evidence, not simply by the label on one paper.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS = [
    {
        id: "S01",
        statement: "Very high hospital bed occupancy increases A&E waiting times",
        association: "Strong",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "Across all 138 English NHS providers with a major A&E department, modelled performance at 100% bed occupancy was associated with 9 percentage points more patients staying over four hours than at 85% occupancy.",
        design: "National daily routine-data study using provider fixed-effects regression over 90 winter days.",
        riskOfBias: "Serious concern — the study was ecological and residual confounding or reverse causation cannot be excluded.",
        consistency: "No major concern — the direction agrees with wider evidence on exit block and hospital occupancy.",
        precision: "No major concern — the reported 95% confidence interval was 7.5 to 11.1 percentage points.",
        directness: "Direct — English major A&E departments and the four-hour waiting outcome.",
        otherFactors: "The large, non-linear association supports retaining Moderate confidence despite the observational design.",
        ratingReason: "Large national dataset, direct NHS outcome and a precise association, downgraded because the design cannot establish causation.",
        sources: [
            {
                title: "Waiting times in emergency departments: factors associated with longer waits in England",
                url: "https://pubmed.ncbi.nlm.nih.gov/32933946/"
            }
        ]
    },
    {
        id: "S02",
        statement: "Improving hospital discharge flow reduces A&E waiting times",
        association: "Moderate",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "In national English daily data, lower discharges relative to admissions on the same day and over the following two days were associated with a higher proportion of A&E stays over four hours.",
        design: "National daily routine-data study using provider fixed-effects regression.",
        riskOfBias: "Serious concern — discharge flow and A&E performance may both reflect other pressures in the hospital.",
        consistency: "No major concern — the result fits the wider evidence on bed occupancy and exit block.",
        precision: "No major concern — associations were small but confidence intervals excluded no association.",
        directness: "Direct — English hospitals and A&E waiting performance.",
        otherFactors: "No upgrade applied because the estimated effects were modest and observational.",
        ratingReason: "A large direct NHS study with consistent estimates, but still an observational association rather than proof that a specific discharge intervention will improve waits.",
        sources: [
            {
                title: "Waiting times in emergency departments: factors associated with longer waits in England",
                url: "https://pubmed.ncbi.nlm.nih.gov/32933946/"
            }
        ]
    },
    {
        id: "S03",
        statement: "Delayed transfers of care increase A&E crowding",
        association: "Unknown",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Unclear",
        finding: "The mechanism is plausible, but a national reanalysis showed that a previously reported relationship between delayed transfers and four-hour breaches could be produced by shared trends over time.",
        design: "National routine-data reanalysis of delayed-transfer and A&E time series, considered alongside daily hospital-flow analysis.",
        riskOfBias: "Serious concern — strong time trends and system-wide confounding make a direct effect difficult to isolate.",
        consistency: "Serious concern — discharge-flow evidence supports the mechanism, but the direct delayed-transfer association is not robustly established.",
        precision: "Serious concern — no dependable direct effect estimate is available.",
        directness: "Direct population and outcome, but the delayed-transfer measure is an imperfect representation of total discharge constraint.",
        otherFactors: "No upgrade applied.",
        ratingReason: "Plausible and operationally important, but the direct evidence does not yet separate delayed transfers from wider hospital pressure convincingly.",
        sources: [
            {
                title: "The impact of delayed transfers of care on emergency departments: evidence and confounding",
                url: "https://pubmed.ncbi.nlm.nih.gov/31767673/"
            },
            {
                title: "Waiting times in emergency departments: factors associated with longer waits in England",
                url: "https://pubmed.ncbi.nlm.nih.gov/32933946/"
            }
        ]
    },
    {
        id: "S04",
        statement: "NHS 111 reduces A&E attendance",
        association: "None",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Does not support the statement",
        finding: "A controlled evaluation of the first four NHS 111 pilot sites found no change in A&E attendances attributable to the service.",
        design: "Controlled before-and-after time-series study using 36 months of routine activity from four pilot and three matched control areas.",
        riskOfBias: "Serious concern — pilot areas were not randomised and other urgent-care changes occurred during the study.",
        consistency: "Some support — earlier telephone-triage evaluations also found little effect on A&E demand, but modern NHS 111 models differ.",
        precision: "Some concern — the publication did not provide a single simple confidence interval for the null A&E effect.",
        directness: "Direct for early NHS 111 implementation in England, but less direct for the current service.",
        otherFactors: "No upgrade applied.",
        ratingReason: "A controlled national pilot evaluation is more informative than a simple before-and-after comparison, but it remains one early non-randomised evaluation.",
        sources: [
            {
                title: "Impact of the urgent care telephone service NHS 111 pilot sites",
                url: "https://bmjopen.bmj.com/content/3/11/e003451"
            }
        ]
    },
    {
        id: "S05",
        statement: "NHS 111 reduces ambulance use",
        association: "None",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Evidence points in the opposite direction",
        finding: "The controlled pilot evaluation found no reduction in ambulance calls and a 2.9% increase in ambulance incidents, with a 95% confidence interval of 1.0% to 4.8%.",
        design: "Controlled before-and-after time-series study using four pilot and three matched control areas.",
        riskOfBias: "Serious concern — non-random pilot selection and concurrent service changes may have affected ambulance activity.",
        consistency: "Some concern — this was an early version of NHS 111 and later pathways may operate differently.",
        precision: "No major concern for the reported increase in ambulance incidents.",
        directness: "Direct for the early English NHS 111 pilots; partly indirect for the present service.",
        otherFactors: "No upgrade applied.",
        ratingReason: "The best controlled evidence available for the early service contradicts the claimed reduction, but transferability to current NHS 111 is limited.",
        sources: [
            {
                title: "Impact of the urgent care telephone service NHS 111 pilot sites",
                url: "https://bmjopen.bmj.com/content/3/11/e003451"
            }
        ]
    },
    {
        id: "S06",
        statement: "Better same-day GP access reduces self-referred A&E visits",
        association: "Moderate",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Supports the statement, with uncertainty",
        finding: "Practices in the most accessible fifth had about 10% fewer self-referred A&E visits ending in discharge than practices in the least accessible fifth.",
        design: "Large national cross-sectional practice-level analysis using GP Patient Survey and routine A&E data.",
        riskOfBias: "Serious concern — residual confounding, ecological fallacy and reverse causation remain possible.",
        consistency: "Serious concern — smaller studies and reviews have reported mixed findings.",
        precision: "No major concern in the large national analysis, although precision does not remove confounding.",
        directness: "Direct for English general practice and self-referred discharged A&E visits; indirect for total A&E demand or waiting times.",
        otherFactors: "No upgrade applied because the association was not large enough to overcome the design limitations.",
        ratingReason: "A large and directly relevant association, but observational evidence with inconsistent supporting studies.",
        sources: [
            {
                title: "Association between access to primary care and emergency department visits in England",
                url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066699"
            },
            {
                title: "Reducing inappropriate A&E attendances: review of primary-care interventions",
                url: "https://pubmed.ncbi.nlm.nih.gov/24351497/"
            }
        ]
    },
    {
        id: "S07",
        statement: "Extended evening and weekend GP access reduces minor A&E visits",
        association: "Strong",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Supports the statement",
        finding: "A Greater Manchester evaluation estimated 26.4% fewer minor patient-initiated A&E visits in practices offering extended access than in matched comparison practices.",
        design: "Difference-in-differences evaluation of 56 intervention practices and 469 matched comparison practices.",
        riskOfBias: "Some concern — practices were not randomised and participation may reflect unmeasured differences.",
        consistency: "Some concern — wider studies of extended primary-care access are mixed, partly because they measure different outcomes.",
        precision: "No major concern for the minor-attendance estimate.",
        directness: "Direct for minor patient-initiated A&E visits in an English NHS setting.",
        otherFactors: "The comparatively large effect and controlled design support Moderate confidence.",
        ratingReason: "A strong, directly relevant quasi-experimental result, tempered by non-random participation and limited independent replication.",
        sources: [
            {
                title: "Associations between extending primary-care access and emergency department visits",
                url: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002113"
            }
        ]
    },
    {
        id: "S08",
        statement: "Extended evening and weekend GP access reduces all A&E visits",
        association: "Weak",
        evidence: "Moderate",
        evidenceScore: 3,
        direction: "Weak support only",
        finding: "The same evaluation estimated 3.1% fewer total A&E visits, but the confidence interval included no effect and the result was not statistically significant.",
        design: "Difference-in-differences evaluation with matched comparison practices.",
        riskOfBias: "Some concern — non-random participation and possible unmeasured differences.",
        consistency: "Some concern — broader reviews of after-hours primary care report mixed effects on total A&E use.",
        precision: "Serious concern — the estimate was compatible with no reduction.",
        directness: "Direct for total A&E attendance in Greater Manchester.",
        otherFactors: "No upgrade applied because the total-attendance effect was small and imprecise.",
        ratingReason: "The study design is reasonably strong, but it provides good evidence that any effect on total A&E demand is much smaller and less certain than the effect on minor attendance.",
        sources: [
            {
                title: "Associations between extending primary-care access and emergency department visits",
                url: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002113"
            },
            {
                title: "Systematic review of improved after-hours primary-care access",
                url: "https://pubmed.ncbi.nlm.nih.gov/32513447/"
            }
        ]
    },
    {
        id: "S09",
        statement: "Overnight A&E consultant staffing reduces waiting times",
        association: "Unknown",
        evidence: "Low",
        evidenceScore: 2,
        direction: "Conflicting results",
        finding: "A controlled interrupted time-series study found a non-significant 12-minute reduction in total time in department, while an earlier small observational study reported waiting times about 20 minutes shorter on consultant-led nights.",
        design: "One controlled interrupted time-series study and one prospective observational single-site study.",
        riskOfBias: "Serious concern — both studies were single-site and staffing patterns may have been linked to expected workload.",
        consistency: "Serious concern — the studies did not reach the same conclusion.",
        precision: "Serious concern — the stronger study's 95% confidence interval ranged from a 28-minute reduction to a 4-minute increase.",
        directness: "Direct for English A&E departments, but generalisability from two sites is limited.",
        otherFactors: "No upgrade applied.",
        ratingReason: "The stronger design did not demonstrate a clear effect, and the positive result came from a smaller study more vulnerable to confounding.",
        sources: [
            {
                title: "Impact of consultant overnight working in an English emergency department",
                url: "https://pubmed.ncbi.nlm.nih.gov/30093377/"
            },
            {
                title: "Impact of 24-hour consultant shop-floor presence",
                url: "https://pubmed.ncbi.nlm.nih.gov/22660466/"
            }
        ]
    },
    {
        id: "S10",
        statement: "Better access to urgent dental care reduces dental-related A&E attendance",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "Plausible but unquantified",
        finding: "UK studies show that difficulty obtaining dental care is commonly reported by people using emergency dental services, but there is no dependable UK intervention estimate showing how many A&E visits extra dental appointments would prevent.",
        design: "Systematic review of mainly descriptive and local UK studies, supported by cross-sectional questionnaires.",
        riskOfBias: "Very serious concern — selection, recall and local-site bias dominate the available evidence.",
        consistency: "Serious concern — studies describe different services, populations and definitions of inappropriate attendance.",
        precision: "Very serious concern — no pooled intervention-effect estimate is available.",
        directness: "Partly direct for UK dental presentations, but indirect for the effect of increasing dental capacity.",
        otherFactors: "A systematic review does not raise confidence when the included studies are weak and descriptive.",
        ratingReason: "The pathway is credible, but the evidence does not yet quantify the impact of a practical dental-access intervention on A&E attendance.",
        sources: [
            {
                title: "Non-traumatic dental presentations at A&E departments in the UK: systematic review",
                url: "https://pubmed.ncbi.nlm.nih.gov/32060459/"
            },
            {
                title: "Use of out-of-hours emergency dental services at two London hospitals",
                url: "https://pubmed.ncbi.nlm.nih.gov/19630986/"
            }
        ]
    },
    {
        id: "S11",
        statement: "More urgent GP appointments reduce A&E waiting times",
        association: "Unknown",
        evidence: "Very low",
        evidenceScore: 1,
        direction: "No direct answer",
        finding: "The available studies mainly examine minor or self-referred A&E attendance. They do not provide a dependable direct estimate of the effect on overall A&E waiting times.",
        design: "Indirect evidence from observational and quasi-experimental studies of A&E attendance.",
        riskOfBias: "Serious concern — the proposed pathway contains several unmeasured steps between GP capacity and A&E waits.",
        consistency: "Serious concern — evidence differs by type of A&E attendance and model of GP access.",
        precision: "Very serious concern — no direct waiting-time effect estimate is available.",
        directness: "Very serious concern — attendance outcomes are being used as a proxy for waiting times.",
        otherFactors: "No upgrade applied.",
        ratingReason: "There is evidence of some substitution of minor A&E activity, but not enough direct evidence to claim that adding GP appointments will materially improve A&E waits.",
        sources: [
            {
                title: "Association between access to primary care and emergency department visits in England",
                url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066699"
            },
            {
                title: "Associations between extending primary-care access and emergency department visits",
                url: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002113"
            },
            {
                title: "Waiting times in emergency departments: factors associated with longer waits in England",
                url: "https://pubmed.ncbi.nlm.nih.gov/32933946/"
            }
        ]
    }
];
