#!/usr/bin/env node
/**
 * Structural check of the tree-code page.
 * Reads real shipped source (and dist HTML if present). Does not hardcode
 * the full page title as a dummy constant.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const page = join(root, "src/pages/[...lang]/codes/tree-code.astro");
const related = join(root, "src/components/RelatedGuides.astro");
const home = join(root, "src/pages/[...lang]/index.astro");

const failures = [];
function must(cond, msg) {
	if (!cond) failures.push(msg);
}

must(existsSync(page), "missing tree-code.astro");

const source = existsSync(page) ? readFileSync(page, "utf8") : "";

must(/getStaticPaths/.test(source), "source missing getStaticPaths");
must(/t\(\{/.test(source), "source missing t({");

const h1Count = (source.match(/<h1/g) || []).length;
must(h1Count === 1, `astro file must have exactly one <h1, found ${h1Count}`);

const h1Block = source.match(/<h1[\s\S]*?<\/h1>/);
must(Boolean(h1Block), "could not parse <h1> from source");
if (h1Block) {
	must(/Tree Code/.test(h1Block[0]), "English H1 string must include Tree Code");
	must(/Checkerboard/.test(h1Block[0]), "English H1 string must include Checkerboard");
}

must(source.includes("plant(Entities.Tree)"), "source missing plant(Entities.Tree)");
must(/%\s*2/.test(source), "source missing % 2 / %2 checkerboard test");

const relatedText = existsSync(related) ? readFileSync(related, "utf8") : "";
const homeText = existsSync(home) ? readFileSync(home, "utf8") : "";
must(
	relatedText.includes("/codes/tree-code") || homeText.includes("/codes/tree-code"),
	"RelatedGuides or homepage source missing /codes/tree-code",
);

function titleOf(html) {
	const m = html.match(/<title>([^<]*)<\/title>/i);
	return m ? m[1].trim() : "";
}

function h1Text(html) {
	const m = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
	if (!m) return "";
	return m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

const distPage = join(root, "dist/codes/tree-code/index.html");
if (existsSync(distPage)) {
	const html = readFileSync(distPage, "utf8");
	const pageTitle = titleOf(html);
	must(pageTitle.length > 0, "dist tree-code title is empty");

	const homeHtmlPath = join(root, "dist/index.html");
	if (existsSync(homeHtmlPath)) {
		const homeTitle = titleOf(readFileSync(homeHtmlPath, "utf8"));
		must(pageTitle !== homeTitle, "dist tree-code title must differ from homepage title");
	}

	const distH1Count = (html.match(/<h1/g) || []).length;
	must(distH1Count === 1, `dist HTML must have exactly 1 h1, found ${distH1Count}`);
	must(/tree code/i.test(h1Text(html)), "dist h1 must match /tree code/i");

	const sitemap0 = join(root, "dist/sitemap-0.xml");
	const sitemapIndex = join(root, "dist/sitemap-index.xml");
	const sitemap = existsSync(sitemap0)
		? readFileSync(sitemap0, "utf8")
		: existsSync(sitemapIndex)
			? readFileSync(sitemapIndex, "utf8")
			: "";
	must(
		sitemap.includes("https://thefarmerwasreplaced.com/codes/tree-code"),
		"sitemap missing https://thefarmerwasreplaced.com/codes/tree-code",
	);
}

if (failures.length) {
	console.error("FAIL");
	for (const f of failures) console.error(" -", f);
	process.exit(1);
}
console.log("PASS");
console.log("page:", page);
console.log("h1 count:", h1Count);
if (h1Block) console.log("source h1 includes Tree Code + Checkerboard");
