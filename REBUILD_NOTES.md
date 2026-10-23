# VOIDFALL rebuild notes

## Saved rollback point
- Backup branch: `voidfall-v1-backup-2026-10-23`
- Baseline commit: `ea844c0efe3b342633b3f18240341ef8fdb5f05f`
- Existing published branch remains: `safe/mobile-button-targets`
- Do not overwrite the existing game while the rebuild is being tested.

## Rebuild prototype
- File: `VOIDFALL_V2.html`
- Branch: `voidfall-rebuild`
- First prototype commit: `ae9ba7f0bd5edb061f9c78c60c96fe7b316398fd`

## User requirements
- iPhone 14–15 / Safari; target 60 FPS, verify with real device measurements.
- Third-person tactical military survival shooter; grounded military look and high perceived detail without overloading mobile GPU.
- Keep core features from the previous project: character/skin selection, weapons, enemies and bosses (bosses still need to be implemented in V2), loot and upgrades/inventory (still need implementation in V2), dash, jump, enemy waves, responsive mobile controls.
- Add articulated skeletal-style animation: joints/pivots, gait, aim pose, recoil, jump/landing, dash, hit/death transitions. Current prototype has articulated pivot limbs and procedural gait; additional animation states and transitions remain to be built.
- Never claim performance or gameplay is fixed until tested on device.
- Work in `voidfall-rebuild` first. Only publish to the Pages branch after validation and explicit user agreement.
