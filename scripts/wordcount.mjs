// Run after `npm run build`: node scripts/wordcount.mjs
// Counts visible words inside <main> for every page in /out.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith("index.html") ? [p] : [];
});
for (const f of walk("out").sort()) {
  const html = readFileSync(f, "utf8");
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [""])[0]
    .replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ");
  const words = main.split(/\s+/).filter(Boolean).length;
  console.log(String(words).padStart(5), words < 600 ? "LOW " : "    ", f.replace(/^out\//, "/"));
}
