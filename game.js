// VOIDFALL loader — assembles optimized game.js from parts
const parts = [];
for (let i = 0; i < 5; i++) {
  const res = await fetch(new URL('./game.part' + i, import.meta.url));
  if (!res.ok) throw new Error('Missing game.part' + i);
  parts.push(await res.text());
}
const code = parts.join('');
const blob = new Blob([code], { type: 'text/javascript' });
await import(URL.createObjectURL(blob));
