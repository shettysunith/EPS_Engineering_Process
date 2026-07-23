# Engineering Process Hub

Interactive engineering process-stage landing page with an M0-M10 maturity
stage-gate map and an ASPICE capability learning matrix.

## Live site

https://shettysunith.github.io/EPS_Engineering_Process/#/home

ASPICE capability matrix:

https://shettysunith.github.io/EPS_Engineering_Process/#/aspice

## Run locally

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/#/home`.

## Files

- `index.html` - application shell
- `styles.css` - responsive process map and detail page styling
- `script.js` - process data, hash routing, and search
- `maturity.js` - M0-M10 definitions, artifact templates, responsibilities,
  required actions, and readiness checklists
- `aspice.js` - capability levels, process attributes, PA 1.1 workflow, and
  V-model work-product guidance
- `V_Cycle.jpg` - original layout reference
