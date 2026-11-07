# Changelog

All notable changes to Taddicons. The project follows [Semantic Versioning](https://semver.org): icon names and
webfont code points never change within a major version.

## Unreleased

- Message emoji for every icon (founder, 7 November 2026: white sticker, Taddi gradient lines): `svg/emoji/<name>.svg`,
  `sprite/taddicons-emoji.svg`, PNG and WebP at 32, 64, 96 and 144 px in the release downloads, and `emoji.json` with
  the picker groups, titles, keywords and the matching standard emoji for 583 icons.
- `emoji.json` `fromUnicode`: the Taddicons emoji that replaces each typed standard emoji (founder, 7 November 2026:
  keyboard emoji are swapped), with the lookup rules in `swap`.

## 2.0.1 (2026-11-07)

228 icons redrawn so they read more clearly at small sizes. Names and code points are unchanged.

- Icons that looked too much like something else, were too busy at 16 px or left out a key detail were redrawn, across
  every section. Examples: the NFC icon no longer resembles the NFC Forum mark, the refund icon stays inside the grid,
  the file warning has its dot, and skip back 10 matches skip forward 10.
- The orthodox cross now shows the lower bar raised on the viewer's left, the usual Russian Orthodox form.
- The PNG, WebP, AVIF and ICO downloads are rebuilt with the new drawings.

## 2.0.0 (2026-11-07)

Taddicons becomes a complete icon set: 5,840 outline icons in 79 categories and eight sections.

- 5,440 new icons, drawn by hand in the same style as version 1: interface (arrows, controls, text, files,
  communication, devices, connectivity, media, design, code, charts, security, time, shapes, maths), business (office,
  commerce, finance, logistics, property), people (people, hands, accessibility, emoji, celebrations, faith, society),
  everyday life (health, dental, veterinary, beauty, baby, household, kitchen, food, clothing, education), science and
  leisure (science, the lab, sports, games, instruments, photography), the world (animals, nature, the outdoors,
  gardening, farming, weather, energy, transport, aviation, maritime, maps, buildings) and making things (tools, the
  trades, electronics, industry, crafts).
- Every name and code point of version 1 is unchanged (`U+E001` to `U+E190`); the new icons follow from `U+E191`.
- `icons.json` adds `sections`, and each category names its `section`. `tier`, `kind` and `channels` stay on the
  document icons only.
- The PNG, WebP, AVIF and ICO files moved out of the repository into the release downloads, one ZIP per format
  (`npm run release`). The repository keeps the SVGs, the sprite, the webfont and the data.
- The gallery is one Markdown page per category (`gallery/<category>.md`) and one searchable page,
  `gallery/index.html`.

## 1.0.0 (2026-11-07)

The first release.

- 400 outline icons in 18 categories, one for every kind of document Taddi writes.
- SVG in three colourings (`outline` with `currentColor`, `gradient`, `mark`) and an SVG sprite.
- Webfont: WOFF2, WOFF and TTF, CSS with size, rotate, flip, gradient, mark and list helpers, ligatures for every
  icon name, a Sass map and a code point map.
- PNG, WebP and AVIF at 32, 64, 128, 256 and 512 px in the `gradient` and `mark` colourings; ICO with seven sizes.
- `icons.json` with titles, categories, tiers, kinds, channels, search keywords and code points.
- The complete icon gallery in `gallery/index.html`.
