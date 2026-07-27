# Health System Levers

An evidence-led interactive model showing how patient choices, service access and system capacity affect flows through urgent and emergency care.

The first worked relationship explores whether increasing usable urgent GP appointments changes minor A&E attendance, total A&E attendance and, ultimately, A&E waits.

## Live site

Once GitHub Pages is enabled, the site will be available at:

`https://pelld.github.io/patient-flow-explorer/`

## Principles

- Evidence should be visible beside every modelled relationship.
- Published evidence, local estimates and assumptions must be clearly distinguished.
- Uncertainty should be shown rather than hidden.
- The model should support comparison of effort, cost and likely impact.
- A zero or negligible effect is a valid result.

## Current status

This is an early prototype. The GP-to-A&E relationship is included to demonstrate the structure of the eventual decision-support tool. Estimates are provisional and must not yet be used for operational decisions.

## Project structure

```text
index.html              Main webpage
css/styles.css          Page layout and visual design
js/app.js               Interaction and provisional model calculations
data/evidence.js        Evidence register and model parameters
docs/model-spec.md      Explanation of the first model
```
