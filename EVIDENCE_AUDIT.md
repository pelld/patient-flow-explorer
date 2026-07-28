# Evidence statement duplicate and overlap audit

**Audit date:** 28 July 2026  
**Register before synthesis:** 111 source records  
**Register after synthesis:** 74 visible statements  
**Records merged or retired:** 37

## Audit rule

Records were merged when they described the same or substantially overlapping:

1. intervention or service model;
2. population and setting;
3. outcome or closely related outcomes; and
4. evidence base, especially the same systematic review or overlapping primary studies.

Separate statements were retained where the distinction changes the decision: for example, admission avoidance versus post-discharge care, hospital-initiated versus community-initiated case management, or a prognostic screening tool versus an intervention triggered by it.

The source-record IDs are retained in the data as `sourceIds`. The visible cards are renumbered from S01 to S74 after synthesis.

## Merged clusters

| Original records | Synthesised conclusion |
|---|---|
| S02, S03 | Poor discharge flow is associated with longer A&E waits; delayed-transfer counts alone are a less reliable measure. |
| S04, S05 | Early NHS 111 implementation did not reduce A&E or ambulance use. |
| S06, S07, S08 | Improved GP access reduces some minor or self-referred A&E visits, but has little clear effect on total attendance. |
| S14, S34 | Doctor-supported A&E triage reduces length of stay and patients leaving without being seen. |
| S18, S19, S76 | Admission-avoidance hospital at home is a credible alternative to inpatient care and may reduce residential care and costs. |
| S28, S67 | Geriatric assessment pathways in A&E may reduce admission, but the size of benefit is uncertain. |
| S29, S53 | Community comprehensive geriatric assessment may modestly reduce unplanned admissions. |
| S30, S42, S81, S82, S83 | Individualised discharge planning modestly shortens stay and reduces readmissions, without a clear mortality effect. |
| S33, S52, S64 | Organised comprehensive geriatric care produces small but dependable improvements in living at home and functional outcomes. |
| S38, S39 | Post-discharge virtual wards reduce later A&E visits, but readmission benefits vary by condition. |
| S46, S47 | Pulmonary rehabilitation after COPD admission probably reduces readmissions, but mortality benefit is uncertain. |
| S48, S49 | Supported COPD self-management reduces respiratory admissions more clearly than all-cause admissions. |
| S50, S51 | Heart-failure telemonitoring reduces heart-failure admissions, but not clearly all-cause admissions. |
| S56, S57 | Acute medical units probably shorten stay; mortality benefit is uncertain. |
| S58, S59 | Enhanced care-home healthcare may reduce admissions, but does not clearly reduce A&E transfers. |
| S62, S84, S85 | Medication review alone has, at most, a small effect on readmissions and no clear effect on later A&E use. |
| S68, S69 | Stroke-unit care reduces death or dependency and increases independent living at home. |
| S70, S71 | Orthogeriatric collaboration probably reduces mortality and may shorten stay after hip fracture. |
| S74, S75 | Heart-failure case management is more effective when started in hospital than when initiated only in the community. |
| S88, S89, S90 | Home palliative care strongly increases home death and modestly improves symptoms, but does not reliably reduce admissions. |
| S91, S92 | Tailored falls prevention, particularly education, probably reduces inpatient falls. |
| S93, S94 | Generic exercise during an unplanned admission does not produce a clinically important average improvement in independence or mobility. |
| S96, S97, S98 | Better discharge communication reduces readmissions and improves adherence and satisfaction. |
| S99, S100 | Nurse-led transitional care reduces later A&E visits and may reduce readmissions when sustained. |
| S101, S102 | Structured multidisciplinary ward rounds improve staff satisfaction, but do not clearly shorten stay. |
| S103, S104, S105 | Enhanced Recovery After Surgery shortens stay and reduces complications without clearly changing readmissions. |
| S106, S107 | WHO surgical safety checklists reduce complications and probably reduce mortality when implemented well. |

## Association-label corrections

The audit also applied the existing rule that **None** means reasonably informative evidence of little or no association. An imprecise low-certainty result is **Unknown**, not **None**.

The following records were changed to **Unknown** without otherwise changing their evidence rating:

- S41 — consultation-only liaison psychiatry and length of stay
- S73 — care-home medication optimisation and admissions
- S79 — simple referral after A&E discharge and repeat visits
- S86 — medication reconciliation and rehospitalisation
- S95 — inpatient exercise and fall risk

## Close relationships retained as separate statements

These pairs were reviewed but retained because the distinction materially changes the interpretation:

- **GP clinicians inside A&E** versus **doctor-supported triage**: different patients, roles and service models.
- **SDEC effectiveness** versus **SDEC selection scores**: an intervention question versus a diagnostic-selection question.
- **Admission-avoidance hospital at home** versus **post-discharge virtual wards**: alternatives to admission versus support after discharge.
- **Stroke-unit care** versus **early supported discharge after stroke**: inpatient organisation versus earlier transfer home.
- **Community geriatric assessment and admissions** versus **community geriatric assessment and A&E attendance**: the A&E estimate is much less precise.
- **Frailty predicts poor outcomes** versus **frailty screening changes outcomes**: prognosis is not evidence that screening itself works.
- **Medication review alone** versus **multi-component medication review, reconciliation, education and transitional care**: the broader package is a materially different intervention.
- **Hospital-initiated heart-failure case management** versus **telemonitoring**: one is a coordinated service pathway; the other is a monitoring technology linked to clinical response.
- **Short-stay mental-health crisis units** versus **home crisis treatment**: facility-based assessment and home-based alternatives address different points in the pathway.

## Implementation

The raw evidence files remain unchanged as the source register. `data/synthesis-audit.js` performs the documented merges before categories and the chart are rendered. This keeps the audit trail visible in the code while ensuring the webpage shows the synthesised register rather than every accumulated source record.
