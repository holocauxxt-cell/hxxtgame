# VOIDFALL — Three.js v2

Mobile-first 3D roguelite prototype for GitHub Pages.

## Added in v2
- Procedural surface textures for arena panels and cover blocks (generated locally in the browser).
- Higher camera angle with damped follow/look-at to reduce camera shake.
- Level-up choice screen: movement speed, weapon range, fire rate, damage, loot magnet and dash cooldown.
- Dash/parkour burst button and Space on desktop, with a short roll-like body animation.
- Responsive touch joystick still appears at the exact point of first touch.

## Publish to GitHub Pages
Upload all files in this folder to the repository root, replacing old files, and commit to `main`. Three.js is loaded from jsDelivr, so the first load requires internet access.

## Controls
- Touch/drag anywhere on the play field: dynamic movement joystick.
- Dash button (or Space on desktop): short burst dodge.
- Inventory: view and switch unlocked weapons / gear.
- Fire is automatic when an enemy is in weapon range.

This remains a lightweight prototype; test on the target iPhone and tune quality as needed.
