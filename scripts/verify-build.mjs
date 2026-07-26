/**
 * Post-build guards for two bugs that reached production once and would not be caught
 * by a typecheck, a lint, or a Playwright run against the dev server.
 *
 * Run after `npm run build`:  npm run verify
 */
import fs from 'node:fs';
import path from 'node:path';

let failures = 0;
const pass = (msg) => console.log(`  PASS  ${msg}`);
const fail = (msg) => {
  failures++;
  console.log(`  FAIL  ${msg}`);
};

/* ------------------------------------------------------------------ *
 * 1. Minified CSS integrity
 *
 * globals.css once carried a declaration with no selector inside `@layer base`
 * (`-webkit-tap-highlight-color: transparent;`). The minifier folded the duplicate
 * `.sr-only` blocks into the rule that followed it, and the browser then parsed
 * `-webkit-tap-highlight-color:transparent;.sr-only { … }` as one invalid qualified
 * rule -- discarding `.sr-only` entirely. The skip link shipped as a permanently
 * visible full-width bar above the header.
 * ------------------------------------------------------------------ */
function checkCss() {
  console.log('\nCSS integrity');
  const dir = '.next/static/css';
  if (!fs.existsSync(dir)) return fail(`${dir} missing -- run \`npm run build\` first`);

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.css'));
  if (!files.length) return fail('no stylesheet emitted');

  for (const file of files) {
    const css = fs.readFileSync(path.join(dir, file), 'utf8');

    // A declaration at the top level, where a selector belongs.
    const dangling = [...css.matchAll(/[;}]\s*-?[a-zA-Z-]+\s*:\s*[^;{}]+;\s*[.#@a-zA-Z[]/g)].filter(
      (m) => {
        const before = css.slice(0, m.index);
        return (before.match(/\{/g) || []).length === (before.match(/\}/g) || []).length;
      },
    );
    if (dangling.length) {
      fail(`${file}: declaration outside any selector -> ${JSON.stringify(dangling[0][0].slice(0, 90))}`);
    } else {
      pass(`${file}: no declaration sits outside a selector`);
    }

    // The rules accessibility depends on must survive minification, and must not be
    // preceded by anything that would swallow them.
    for (const [needle, label] of [
      ['.sr-only{', 'sr-only utility'],
      ['.skip-link{', 'skip-link base rule'],
      ['.skip-link:focus-visible{', 'skip-link focus-visible rule'],
    ]) {
      const i = css.indexOf(needle);
      if (i === -1) {
        fail(`${file}: ${label} is missing (${needle})`);
        continue;
      }
      const prev = css.slice(Math.max(0, i - 80), i).trimEnd().slice(-1);
      if (['}', '{', '', ','].includes(prev)) pass(`${file}: ${label} intact`);
      else fail(`${file}: ${label} is preceded by ${JSON.stringify(prev)} -- browser will drop it`);
    }

    const opens = (css.match(/\{/g) || []).length;
    const closes = (css.match(/\}/g) || []).length;
    if (opens === closes) pass(`${file}: braces balanced`);
    else fail(`${file}: unbalanced braces (${opens} open, ${closes} close)`);
  }
}

/* ------------------------------------------------------------------ *
 * 2. Prerendered HTML
 *
 * JSON-LD has to be a real tag in the static output. A next/script inline payload is
 * only attached once client JS runs, so crawlers never see it. Also asserts that no
 * fabricated social proof crept back in.
 * ------------------------------------------------------------------ */
function checkHtml() {
  console.log('\nPrerendered HTML');
  const file = '.next/server/app/index.html';
  if (!fs.existsSync(file)) return fail(`${file} missing -- run \`npm run build\` first`);
  const html = fs.readFileSync(file, 'utf8');

  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) {
    fail('no static <script type="application/ld+json"> -- crawlers will not see the schema');
  } else {
    try {
      const data = JSON.parse(match[1]);
      pass(`JSON-LD parses (@type=${data['@type']})`);
      if (String(data.hasMap).includes('&amp;')) fail('an ampersand was HTML-escaped inside the JSON');
      else pass('query-string ampersands survived intact');

      for (const key of ['aggregateRating', 'review', 'ratingValue']) {
        if (key in data) fail(`schema self-asserts ${key} -- ratings live on Google, not here`);
        else pass(`no self-asserted ${key}`);
      }
    } catch (err) {
      fail(`JSON-LD does not parse: ${err.message}`);
    }
  }

  const firstFocusable = html.match(/<(?:a|button)\b[^>]*>/);
  if (firstFocusable?.[0].includes('skip-link')) pass('skip link is the first focusable element');
  else fail(`skip link is not first (got ${firstFocusable?.[0].slice(0, 70)})`);

  for (const [needle, label] of [
    ['549', 'hardcoded follower count'],
    ['takipçi', 'follower label'],
    ['Takip Ediliyor', 'fake following state'],
    ['REELS', 'imitated Instagram tab'],
  ]) {
    if (html.includes(needle)) fail(`fabricated social proof is back: ${label} ("${needle}")`);
    else pass(`no ${label}`);
  }
}

checkCss();
checkHtml();

console.log(failures === 0 ? '\nAll build guards passed.\n' : `\n${failures} guard failure(s).\n`);
process.exit(failures === 0 ? 0 : 1);
