# VOIDFALL — Three.js v3: Outbreak Arenas

Mobile-first 3D roguelite prototype for GitHub Pages.

## New in v3
- Three procedural ground materials: abandoned base, wasteland and industrial zone; theme changes as the run advances after boss victories.
- More detailed ground-panel textures with scratches, seams and rivets.
- Soldier-style player model with generated camouflage fabric, helmet, tactical vest, pouches, backpack, rifle and articulated arms/legs.
- Humanoid zombie enemies with heads, torsos, dangling arms and legs; gait and body sway animate as they pursue the player.
- Raised platforms, visible ramps and a jump button for parkour-like traversal, plus the existing dash.
- Dynamic joystick appears at the exact touch point; auto-fire, inventory and level-up upgrades remain.

## Publish to GitHub Pages
Upload all files in this folder to the repository root, replacing the old files, and commit to `main`. Three.js is loaded from jsDelivr, so the first load requires internet access. If an old version remains cached, close the tab and reopen the game after the service worker updates.

## Controls
- Touch/drag anywhere on the play field: dynamic movement joystick.
- Jump button (or E on desktop): jump.
- Dash button (or Space on desktop): quick dodge.
- Inventory: view and switch unlocked weapons / gear.
- Fire is automatic when an enemy is in weapon range.

## Mobile troubleshooting
- Open the game in Safari and wait for the first load to finish; an internet connection is needed to load Three.js.
- If controls or visuals look outdated after an update, close the game tab completely and reopen it.
- If performance drops, close other heavy browser tabs and try again.

This is a procedural 3D prototype, not a production-quality animation pack: soldier and zombie meshes are assembled from Three.js geometry, and textures are generated in the browser. Test on the target iPhone and tune performance as needed.
