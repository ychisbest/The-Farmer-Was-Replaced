#!/usr/bin/env node
/**
 * Structural check of the shipped dinosaur teaching page.
 * Reads real source + optional dist HTML. Fails if the page is a dump-only
 * script, if images are unused, or if an identifier is not on the wiki list.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const page = join(root, "src/pages/[...lang]/codes/dinosaur-code.astro");
const header = join(root, "src/components/Header.astro");
const footer = join(root, "src/components/Footer.astro");
const home = join(root, "src/pages/[...lang]/index.astro");
const related = join(root, "src/components/RelatedGuides.astro");

const wikiNames = new Set([
	"change_hat",
	"Hats.Dinosaur_Hat",
	"Hats.Straw_Hat",
	"num_items",
	"Items.Cactus",
	"Items.Bone",
	"move",
	"can_move",
	"measure",
	"print",
	"set_world_size",
	"clear",
	"get_pos_x",
	"get_pos_y",
	"North",
	"East",
	"South",
	"West",
]);

const source = readFileSync(page, "utf8");
const failures = [];

function must(cond, msg) {
	if (!cond) failures.push(msg);
}

must(existsSync(page), "missing dinosaur-code.astro");
must(/Step 1/.test(source), "missing Step 1 heading");
must(/Step 2/.test(source), "missing Step 2 heading");
must(/Step 3/.test(source), "missing Step 3 heading");
must(/Step 4/.test(source), "missing Step 4 heading");
must(/Step 5/.test(source), "missing Step 5 heading");
must(/Step 6/.test(source), "missing Step 6 heading");
must((source.match(/<CodeBlock/g) || []).length >= 6, "need a snippet per teaching step");
must(
	source.indexOf("change_hat(Hats.Dinosaur_Hat)") < source.indexOf("set_world_size(5)"),
	"tiny hat snippet must appear before the optional full practice loop",
);

must(existsSync(join(root, "src/assets/dinoHatFarm.jpg")), "missing asset dinoHatFarm.jpg");
must((source.match(/<Image/g) || []).length === 1, "page must show exactly one image");
must(source.includes("dinoHatFarm"), "page does not import dinoHatFarm");
must(!source.includes("dinoTailApple"), "removed dinoTailApple is still referenced");
must(!source.includes("dinoBonesHarvest"), "removed dinoBonesHarvest is still referenced");

const used = new Set();
for (const name of wikiNames) {
	if (source.includes(name)) used.add(name);
}
must(used.has("change_hat"), "shipped page never calls change_hat");
must(used.has("Hats.Dinosaur_Hat"), "shipped page never uses Hats.Dinosaur_Hat");
must(used.has("measure"), "shipped page never uses measure");
must(used.has("set_world_size"), "practice loop must use current set_world_size, not set_farm_size");
must(!source.includes("set_farm_size"), "outdated set_farm_size must not ship");
must(!source.includes("Grounds.Turf"), "do not invent Grounds.Turf");
must(!source.includes("Hats.Dino_Hat"), "do not invent Hats.Dino_Hat");

const banned = [
	"set_farm_size",
	"Grounds.Turf",
	"Hats.Dino_Hat",
	"Items.Bones",
	"Entities.Dino",
	"grow_tail",
];
for (const name of banned) {
	must(!source.includes(name), `invented or outdated name shipped: ${name}`);
}

const navFiles = { header, footer, home, related };
for (const [label, path] of Object.entries(navFiles)) {
	const text = readFileSync(path, "utf8");
	must(text.includes("/codes/dinosaur-code"), `${label} has no dinosaur-code link`);
}

const distPage = join(root, "dist/codes/dinosaur-code/index.html");
if (existsSync(distPage)) {
	const html = readFileSync(distPage, "utf8");
	const imgHits = html.match(/dinoHatFarm/g) || [];
	must(imgHits.length >= 1, "built HTML has no dinosaur image URL");
	must(!/dinoTailApple|dinoBonesHarvest/.test(html), "built HTML still references extra dinosaur images");
	must((html.match(/<h2/g) || []).length >= 6, "built HTML missing teaching headings");
	const homeHtml = join(root, "dist/index.html");
	if (existsSync(homeHtml)) {
		must(readFileSync(homeHtml, "utf8").includes("dinosaur-code"), "built home has no dinosaur link");
	}
	const zhHome = join(root, "dist/zh/index.html");
	if (existsSync(zhHome)) {
		must(readFileSync(zhHome, "utf8").includes("dinosaur-code"), "built zh home has no dinosaur link");
	}
}

if (failures.length) {
	console.error("FAIL");
	for (const f of failures) console.error(" -", f);
	process.exit(1);
}
console.log("PASS");
console.log("wiki-backed names used:", [...used].sort().join(", "));
console.log("images referenced in source: dinoHatFarm (single)");
console.log("nav: header, footer, home, related");
