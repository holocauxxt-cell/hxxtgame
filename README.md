# VOIDFALL — Three.js prototype

A mobile-first isometric 3D roguelite prototype using Three.js and procedural 3D geometry/materials.

## Files
- `index.html` — UI and page shell
- `game.js` — Three.js scene, player, enemies, bosses, weapons, loot, dynamic touch joystick
- `manifest.webmanifest` — install metadata
- `sw.js` — basic offline cache shell (Three.js itself is loaded from jsDelivr CDN)

## Controls
- Touch or click anywhere on the playfield: the virtual joystick appears at that exact point.
- Drag from that point to move; release to stop.
- Auto-aim and auto-fire target enemies inside the active weapon's range.
- Inventory button pauses the game; weapon button cycles owned weapons.
- Desktop: click and drag on the playfield, too.

## Publish on GitHub Pages
Upload all four files to the repository root and commit to `main`. In Settings → Pages, select `main` and `/(root)`. Open the Pages URL in Safari. Internet is required to load Three.js from jsDelivr.

## Notes
This is a playable prototype, not a finished commercial game. The environment, character, enemies and props are real Three.js 3D meshes with procedural materials. Textures are generated from geometry/materials rather than downloaded image texture packs. Tune enemy counts and effects for older phones if needed.
