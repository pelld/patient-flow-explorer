/* ========================================================================== 
   00A. EVIDENCE STATEMENT REGISTER
   --------------------------------------------------------------------------
   Each record contains the short statement shown on the page and the fuller
   evidence summary shown only when the user opens the tooltip.
   ========================================================================== */

window.HEALTH_SYSTEM_STATEMENTS = [
    {
        id: "S01",
        statement: "Better same-day GP access reduces self-referred A&E visits",
        association: "Moderate",
        evidence: "Moderate",
        finding: "Practices in the most accessible fifth had 10.2% fewer self-referred A&E visits ending in discharge than practices in the least accessible fifth.",
        evidenceAvailable: "One large national observational study.",
        sample: "7,856 general practices covering 54.2 million registered patients in England.",
        uncertainty: "The study adjusted for population, health and travel factors, but it was observational and cannot prove that better access caused the difference.",
        replication: "Smaller local studies had mixed results.",
        sourceTitle: "Access to Primary Care and Visits to Emergency Departments in England",
        sourceUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066699"
    },
    {
        id: "S02",
        statement: "Failed GP access contributes to A&E attendance",
        association: "Strong",
        evidence: "Low",
        finding: "A national survey analysis estimated that 26.5% of unplanned A&E attendances followed an unsuccessful attempt to obtain a convenient GP appointment.",
        evidenceAvailable: "One national cross-sectional survey analysis.",
        sample: "The estimate used the 2012–13 GP Patient Survey and national activity estimates.",
        uncertainty: "The result was modelled rather than counted directly. Sensitivity analysis ranged from 17.5% to 37.2%.",
        replication: "The broad relationship is supported elsewhere, but this exact percentage has not been established as a causal effect.",
        sourceTitle: "Access to general practice and visits to accident and emergency departments in England",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24982496/"
    },
    {
        id: "S03",
        statement: "Extended evening and weekend GP access reduces minor A&E visits",
        association: "Strong",
        evidence: "Moderate",
        finding: "Practices offering extended access had 26.4% fewer patient-initiated A&E visits for minor problems than matched practices without extended access.",
        evidenceAvailable: "One difference-in-differences evaluation with matched comparison practices.",
        sample: "56 intervention practices covering 346,024 patients, compared with 469 practices covering 2.6 million patients in Greater Manchester.",
        uncertainty: "Practices chose whether to take part, so unmeasured differences may remain. The result may not transfer directly to other areas.",
        replication: "The study reported robust sensitivity checks, but the wider evidence base remains limited.",
        sourceTitle: "Associations between Extending Access to Primary Care and Emergency Department Visits",
        sourceUrl: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002113"
    },
    {
        id: "S04",
        statement: "Extended evening and weekend GP access reduces all A&E visits",
        association: "Weak",
        evidence: "Moderate",
        finding: "The same Greater Manchester evaluation estimated 3.1% fewer total A&E visits, but the result was not statistically significant.",
        evidenceAvailable: "One difference-in-differences evaluation with matched comparison practices.",
        sample: "56 intervention practices covering 346,024 patients, compared with 469 practices covering 2.6 million patients.",
        uncertainty: "The confidence interval included no effect. The clearer effect was limited to minor, patient-initiated A&E visits.",
        replication: "The broader literature on extended primary care access is mixed.",
        sourceTitle: "Associations between Extending Access to Primary Care and Emergency Department Visits",
        sourceUrl: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002113"
    },
    {
        id: "S05",
        statement: "More urgent GP appointments reduce A&E waiting times",
        association: "Unknown",
        evidence: "Very low",
        finding: "No direct estimate is used. Existing studies mainly measure A&E attendance, not the effect on waiting times.",
        evidenceAvailable: "No direct evidence identified in this first review.",
        sample: "Not applicable.",
        uncertainty: "Waiting times also depend on staffing, patient severity, admissions, available beds and discharge delays.",
        replication: "A local arrivals-to-waits model would be needed before estimating an effect.",
        sourceTitle: "Direct evidence still required",
        sourceUrl: ""
    },
    {
        id: "S06",
        statement: "Minor injury units reduce total urgent care demand",
        association: "None",
        evidence: "Low",
        finding: "A small study found that some minor injury unit users would otherwise have attended A&E, while others would have used their GP or treated themselves. The authors warned that total workload might increase.",
        evidenceAvailable: "One small observational study.",
        sample: "1,472 self-referred minor injury unit users, with a smaller interviewed group.",
        uncertainty: "The study was old, local and not designed to estimate the effect of opening a new unit on total demand.",
        replication: "No strong replicated estimate is included yet.",
        sourceTitle: "Do patients use minor injury units appropriately?",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/8816312/"
    }
];
