#!/usr/bin/env node
/**
 * Fail if guide pages still ship removed/renamed 1.0 APIs inside copy-paste code.
 * Scans CodeBlock `code={` ... `}` regions.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const banned = [
  { re: /\btrade\s*\(/, msg: "trade() removed in 1.0" },
  { re: /\bItems\.Carrot_Seed\b/, msg: "Items.Carrot_Seed removed" },
  { re: /\bItems\.Water_Tank\b/, msg: "Items.Water_Tank renamed to Items.Water" },
  { re: /\bItems\.Empty_Tank\b/, msg: "Items.Empty_Tank removed with tank trade" },
  { re: /\bItems\.Bones\b/, msg: "Items.Bones renamed to Items.Bone" },
  { re: /\bEntities\.Carrots\b/, msg: "Entities.Carrots renamed to Entities.Carrot" },
  { re: /\bGrounds\.Turf\b/, msg: "Grounds.Turf renamed to Grounds.Grassland" },
  { re: /\bset_farm_size\s*\(/, msg: "set_farm_size renamed to set_world_size" },
  { re: /\bHats\.Dino_Hat\b/, msg: "invented Hats.Dino_Hat" },
  { re: /\bset_position\s*\(/, msg: "invented set_position()" },
];

const requiredHints = {
  "pumpkin-code.astro": [/Entities\.Dead_Pumpkin/, /Items\.Water/, /can_harvest\s*\(/],
  "sunflower-code.astro": [/measure\s*\(/, /Entities\.Sunflower/],
  "maze-code.astro": [/Weird_Substance/, /Entities\.Treasure/],
  "cactus-code.astro": [/swap\s*\(/, /measure\s*\(/],
  "carrot-code.astro": [/Grounds\.Soil/, /Items\.Water/, /Entities\.Carrot/],
  "tree-code.astro": [/Entities\.Tree/, /%\s*2/, /Items\.Water/],
};

const failures = [];
function must(cond, msg) {
  if (!cond) failures.push(msg);
}

function extractCodeBlocks(src) {
  const chunks = [];
  const re = /code=\{`([\s\S]*?)`\}/g;
  let m;
  while ((m = re.exec(src))) chunks.push(m[1]);
  const re2 = /```(?:python)?\n([\s\S]*?)```/g;
  while ((m = re2.exec(src))) chunks.push(m[1]);
  return chunks;
}

const pagesDir = join(root, "src/pages/[...lang]/codes");
const files = readdirSync(pagesDir).filter((f) => f.endsWith(".astro"));
for (const f of files) {
  const src = readFileSync(join(pagesDir, f), "utf8");
  const codes = extractCodeBlocks(src);
  must(codes.length > 0, `${f}: no code blocks found`);
  for (const [i, code] of codes.entries()) {
    for (const ban of banned) {
      if (ban.re.test(code)) failures.push(`${f} code#${i}: ${ban.msg}`);
    }
  }
  if (requiredHints[f]) {
    const all = codes.join("\n");
    for (const hint of requiredHints[f]) {
      must(hint.test(all), `${f}: missing required API ${hint}`);
    }
  }
}

// basic-codes + tutorial
for (const rel of [
  "src/pages/[...lang]/basic-codes.astro",
  "src/pages/[...lang]/tutorial.astro",
]) {
  const path = join(root, rel);
  if (!existsSync(path)) {
    failures.push(`missing ${rel}`);
    continue;
  }
  const src = readFileSync(path, "utf8");
  const codes = extractCodeBlocks(src);
  for (const [i, code] of codes.entries()) {
    for (const ban of banned) {
      if (ban.re.test(code)) failures.push(`${rel} code#${i}: ${ban.msg}`);
    }
  }
}

if (failures.length) {
  console.error("FAIL");
  for (const f of failures) console.error(" -", f);
  process.exit(1);
}
console.log("PASS guide API lint");
console.log("checked code pages:", files.join(", "));
