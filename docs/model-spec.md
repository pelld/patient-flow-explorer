# Model specification: urgent GP access and A&E

## 00A. Purpose

The first model asks whether increasing usable urgent GP appointments changes minor A&E attendance, total A&E attendance and A&E waits.

It is a demonstration of the wider approach. It is not yet suitable for operational decision-making.

## 00B. Model chain

```text
Increase urgent GP appointments
→ additional appointments actually used
→ minor A&E attendances avoided
→ change in total A&E attendance
→ change in A&E waits
```

The final relationship is deliberately left unquantified until an appropriate local model is available.

## 00C. Current provisional calculation

```text
Additional appointments offered = baseline urgent GP appointments × selected percentage increase

Additional appointments used = additional appointments offered × utilisation assumption

Minor A&E attendances avoided = additional appointments used ÷ additional GP appointments per minor A&E attendance avoided

Minor A&E attendances avoided are capped at the assumed maximum substitutable share of baseline minor A&E activity.

Total A&E reduction = minor A&E attendances avoided ÷ baseline total A&E attendance
```

## 00D. Current illustrative assumptions

| Parameter | Prototype value | Status |
|---|---:|---|
| Baseline urgent GP appointments per month | 100,000 | Illustrative |
| Baseline minor A&E attendances per month | 10,000 | Illustrative |
| Baseline total A&E attendances per month | 50,000 | Illustrative |
| Utilisation of additional GP appointments | 90% | Assumption |
| Additional GP appointments per minor A&E attendance avoided | 3 | Evidence-informed provisional estimate |
| Maximum substitutable share of minor A&E activity | 30% | Assumption |
| A&E arrival-to-wait coefficient | Not set | Local model required |

## 00E. Evidence use

The model distinguishes:

- **Published evidence** — externally sourced findings.
- **Local estimates** — coefficients estimated from local activity and access data.
- **Assumptions** — explicit values used where evidence is insufficient.
- **Unknown relationships** — shown as missing rather than silently estimated.

The full evidence register is stored in `data/evidence.js` and displayed on the webpage.

## 00F. Next analytical step

Replace the illustrative baseline with practice and hospital-level data, then estimate:

1. the relationship between usable urgent GP access and minor/self-referred A&E activity; and
2. the local relationship between A&E arrivals and waiting-time performance, accounting for admissions, bed occupancy and discharge flow.
