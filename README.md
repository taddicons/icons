<p align="center">
  <a href="https://taddicons.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="assets/taddicons-logo-light.png">
      <img src="assets/taddicons-logo.png" alt="Taddicons" width="560">
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://taddicons.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.svg">
      <img src="assets/banner-light.svg" alt="Taddicons, the official Taddi icon set" width="100%">
    </picture>
  </a>
</p>

<p align="center">
  <b>400 outline icons, one for every kind of document people write.</b><br>
  Birthday cards and condolence notes, refund requests and rental leases, cover letters and school forms:<br>
  each one has its own icon, drawn by hand in one calm, consistent style.
</p>

<p align="center">
  <a href="https://taddicons.com"><img src="https://img.shields.io/badge/icons-400-f25e3a?style=flat-square" alt="400 icons"></a>
  <a href="#formats"><img src="https://img.shields.io/badge/formats-SVG%20%C2%B7%20font%20%C2%B7%20PNG%20%C2%B7%20WebP%20%C2%B7%20AVIF%20%C2%B7%20ICO-444?style=flat-square" alt="Formats"></a>
  <a href="CHANGELOG.md"><img src="https://img.shields.io/badge/version-1.0.0-444?style=flat-square" alt="Version 1.0.0"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-444?style=flat-square" alt="MIT License"></a>
</p>

<p align="center">
  <a href="https://taddicons.com"><b>Website</b></a> ·
  <a href="#gallery">Gallery</a> ·
  <a href="#quick-start">Quick start</a> ·
  <a href="#formats">Formats</a> ·
  <a href="#webfont">Webfont</a> ·
  <a href="#style-guide">Style guide</a> ·
  <a href="#metadata">Metadata</a> ·
  <a href="LICENSE">License</a>
</p>

---

## Why Taddicons

Most icon sets have a dozen "file" icons. Taddicons has an icon for **what the document is about**. It was made for
[Taddi](https://taddi.app), where every kind of document (a "Tad") has its own rulebook, and every Tad needed a picture
people recognise at a glance.

- **400 icons in 18 categories.** Everyday messages, cards, invitations, social posts, life events, family, letters to
  companies, money, housing, work, small business, buying and selling, school, health, government, legal, community
  and travel.
- **One style throughout.** A 24 px grid, a thin 1.35 line (never a hairline), round caps and joins, soft corners and
  warm, simple shapes. Calm and friendly, never cartoonish or technical.
- **Families you can read.** Cards are a card set down at a slight angle, invitations a card rising from an envelope,
  social posts a rounded square, and formal documents a page with a folded corner. The picture inside tells you the topic.
- **Every format you need.** SVG files in three colourings, an SVG sprite, a webfont with CSS classes and ligatures, and
  PNG, WebP, AVIF and ICO files in five sizes.
- **Made to be found.** Every icon has a category, a frequency tier, a document kind and 6 to 10 search keywords in
  [`icons.json`](icons.json).
- **Free.** MIT licensed, for personal and commercial work.

## Quick start

### SVG files

Copy the icon you need from [`svg/outline`](svg/outline). The outline icons use `currentColor`, so they take the
colour of the text around them when you place them inline.

```html
<!-- As an image -->
<img src="svg/outline/birthday-card.svg" width="24" height="24" alt="Birthday card">

<!-- Inline: the icon takes the text colour -->
<button class="btn">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">…paths from the file…</svg>
  New birthday card
</button>
```

### SVG sprite

One request for all 400 icons. Each icon is a `<symbol>` with the icon's name as its id; the line style comes from the
`<svg>` that uses it, so you can change colour and weight with CSS.

```html
<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.35"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <use href="/sprite/taddicons.svg#refund-request"/>
</svg>
```

### Webfont

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/taddicons/icons@1.0.0/font/taddicons.min.css">

<i class="ti ti-wedding-invitation"></i>
<i class="ti ti-2x ti-gradient ti-thank-you-note"></i>
<i class="ti ti-mark ti-cover-letter"></i>
```

### Images and favicons

Ready-made files in two colourings, `gradient` (the lines in the Taddi gradient on a transparent background) and `mark`
(the official mark: the gradient icon on a light circle):

```html
<img src="https://cdn.jsdelivr.net/gh/taddicons/icons@1.0.0/webp/mark/128/moving-announcement.webp" width="64" height="64" alt="Moving announcement">
<link rel="icon" href="https://cdn.jsdelivr.net/gh/taddicons/icons@1.0.0/ico/travel-post.ico" sizes="any">
```

Every file in this repository is on the jsDelivr CDN at
`https://cdn.jsdelivr.net/gh/taddicons/icons@1.0.0/<path>`, for example `.../svg/outline/lease-agreement.svg`.

## Formats

| Folder | Format | Colouring | Sizes | Best for |
|---|---|---|---|---|
| [`svg/outline`](svg/outline) | SVG | `currentColor` lines | scalable, 24 px grid | Websites and apps; any colour through CSS |
| [`svg/gradient`](svg/gradient) | SVG | Taddi gradient lines, transparent | scalable | Design tools, presentations |
| [`svg/mark`](svg/mark) | SVG | Gradient icon on the light circle | scalable, 40 px grid | Avatars, list markers, docs |
| [`sprite`](sprite) | SVG sprite | from the page | scalable | Many icons on one page with one request |
| [`font`](font) | WOFF2, WOFF, TTF, CSS, SCSS, JSON | text colour, or the gradient helpers | scalable | `<i class="ti ti-…">`, ligatures |
| [`png`](png) | PNG | `gradient`, `mark` | 32, 64, 128, 256, 512 | Email, documents, anything without SVG |
| [`webp`](webp) | WebP (lossless) | `gradient`, `mark` | 32, 64, 128, 256, 512 | Small files for the web |
| [`avif`](avif) | AVIF | `gradient`, `mark` | 32, 64, 128, 256, 512 | The smallest files for modern browsers |
| [`ico`](ico) | ICO (PNG frames) | `mark` | 16, 24, 32, 48, 64, 128, 256 in one file | Favicons, Windows |
| [`icons.json`](icons.json) | JSON | | | Names, titles, categories, keywords, code points |
| [`gallery`](gallery) | HTML | | | The complete icon gallery, one self-contained page |

Raster files are sorted as `<format>/<colouring>/<size>/<name>.<ext>`:

```
taddicons/
├── svg/
│   ├── outline/        400 × .svg   currentColor
│   ├── gradient/       400 × .svg
│   └── mark/           400 × .svg
├── sprite/taddicons.svg
├── font/               taddicons.woff2 · .woff · .ttf · .css · .min.css · .scss · .json · demo.html
├── png/
│   ├── gradient/       32/ 64/ 128/ 256/ 512/
│   └── mark/           32/ 64/ 128/ 256/ 512/
├── webp/               same layout as png/
├── avif/               same layout as png/
├── ico/                400 × .ico
├── gallery/index.html  the complete gallery
├── icons.json          metadata
└── scripts/            the build
```

## Webfont

The font is in [`font`](font). Load `taddicons.css` (or `taddicons.min.css`) and the font files next to it.

```html
<i class="ti ti-apology-letter" aria-hidden="true"></i>
```

| Class | What it does |
|---|---|
| `ti` | Base class, always needed |
| `ti-<name>` | The icon, for example `ti-job-application` |
| `ti-xs` `ti-sm` `ti-lg` `ti-xl` | 0.75, 0.875, 1.25 and 1.5 times the text size |
| `ti-2x` … `ti-10x` | 2 to 10 times the text size |
| `ti-fw` | Fixed width, so icons line up in lists and menus |
| `ti-rotate-90` `ti-rotate-180` `ti-rotate-270` | Rotate |
| `ti-flip-h` `ti-flip-v` `ti-flip-both` | Mirror |
| `ti-gradient` | The lines in the Taddi button gradient |
| `ti-mark` | The official mark: the gradient icon on a light circle |
| `ti-ul` + `ti-li` | Icons as list bullets |

**Ligatures.** The font knows every icon's name, so the name written as text turns into the icon:

```html
<span class="ti">birthday-card</span>
```

**Code points.** Icons sit in the Private Use Area from `U+E001`, in catalog order. The full map is in
[`font/taddicons.json`](font/taddicons.json) and as a Sass map in [`font/taddicons.scss`](font/taddicons.scss):

```scss
@use "taddicons" as ti;
.receipt::before { font-family: ti.$font-family; content: map-get(ti.$icons, "refund-request"); }
```

The font's line is drawn at 1.5 on the 24 grid (the SVGs use 1.35), so it stays crisp at 14 to 16 px. Open
[`font/demo.html`](font/demo.html) to see every glyph. With forced colours (Windows high contrast) the gradient
helpers fall back to the system text colour.

## Using it in an app

**React, with the sprite**

```jsx
export function Taddicon({ name, size = 24, label }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
         strokeWidth={Math.max(1.35, 24 / size)} role={label ? "img" : undefined}
         aria-label={label} aria-hidden={label ? undefined : true}>
      <use href={`/taddicons.svg#${name}`} />
    </svg>
  );
}
```

**Any bundler, with the SVG files**: import `svg/outline/<name>.svg` with your SVG loader (SVGR, vite-svg-loader, …).

**Install from GitHub**

```sh
npm install github:taddicons/icons
```

## Style guide

| | |
|---|---|
| Grid | 24 × 24, drawn inside 2 to 22 |
| Line | 1.35 on the grid, round caps, round joins, no fills |
| Smallest line | 1 px on screen: for an icon drawn `s` px wide use `stroke-width = max(1.35, 24 / s)` |
| Best sizes | 16, 20, 24, 32, 48 px |
| Gradient | `#f76845` → `#f25e3a`, left to right (`oklch(70.66% 0.1785 34.6)` → `oklch(66.88% 0.1894 34.86)`) |
| Mark | Circle `#fafafa` (`lab(98.27 0 0)`), faint edge `#e4e4e4` (`lab(90.5 0 0)`), icon at 60% of the circle |

**Accessibility.** An icon next to a text label is decoration: give it `aria-hidden="true"`. An icon on its own needs
a name: `role="img"` and `aria-label="…"` on the `<svg>`, or `alt` on the `<img>`. Keep icon buttons at least 24 px
(44 px on touch screens) and keep the line colour at 3:1 contrast or more against its background.

## Categories

<!-- categories:start -->
| | Category | Icons | What it covers |
|:-:|---|--:|---|
| <img src="svg/mark/information-request.svg" width="28" height="28" alt=""> | [Everyday messages](#everyday-messages) | 23 | Quick notes, replies and emails for the day-to-day. |
| <img src="svg/mark/anniversary-card.svg" width="28" height="28" alt=""> | [Cards and greetings](#cards-and-greetings) | 31 | Designed digital cards for every occasion, sent as a link or printed. |
| <img src="svg/mark/birthday-party-invitation.svg" width="28" height="28" alt=""> | [Invitations and events](#invitations-and-events) | 32 | Designed invitations with their own RSVP page, plus every message around an event. |
| <img src="svg/mark/lost-pet-post.svg" width="28" height="28" alt=""> | [Social posts](#social-posts) | 26 | Posts with a picture for the networks you connected, written for regular people, not influencers. |
| <img src="svg/mark/apology.svg" width="28" height="28" alt=""> | [Life events and speeches](#life-events-and-speeches) | 30 | Announcements, letters and the words for the big moments. |
| <img src="svg/mark/babysitter-instructions.svg" width="28" height="28" alt=""> | [Family and home](#family-and-home) | 20 | Notes, plans and instructions that keep a household running. |
| <img src="svg/mark/data-deletion-request.svg" width="28" height="28" alt=""> | [Letters to companies](#letters-to-companies) | 32 | Complaints, refunds, cancellations and your consumer rights, done properly. |
| <img src="svg/mark/payment-plan-request.svg" width="28" height="28" alt=""> | [Money and bills](#money-and-bills) | 19 | Invoices, reminders, payment plans, claims and money between friends. |
| <img src="svg/mark/deposit-return-request.svg" width="28" height="28" alt=""> | [Home and renting](#home-and-renting) | 18 | Landlords, tenants, neighbours and moving. |
| <img src="svg/mark/job-offer-acceptance.svg" width="28" height="28" alt=""> | [Work and jobs](#work-and-jobs) | 35 | Applications, requests and messages at work. |
| <img src="svg/mark/appointment-reminder.svg" width="28" height="28" alt=""> | [Small business and side hustle](#small-business-and-side-hustle) | 25 | Everything a small shop, freelancer or club treasurer sends to customers. |
| <img src="svg/mark/marketplace-listing.svg" width="28" height="28" alt=""> | [Buy and sell](#buy-and-sell) | 10 | Listings and messages for selling and buying things online. |
| <img src="svg/mark/extension-request.svg" width="28" height="28" alt=""> | [School and learning](#school-and-learning) | 17 | For students, parents and teachers. |
| <img src="svg/mark/medical-bill-dispute.svg" width="28" height="28" alt=""> | [Health and care](#health-and-care) | 16 | Doctors, records, insurance and caring for someone. |
| <img src="svg/mark/benefits-appeal.svg" width="28" height="28" alt=""> | [Government and official](#government-and-official) | 19 | Authorities, appeals, permits and your representatives. |
| <img src="svg/mark/demand-letter.svg" width="28" height="28" alt=""> | [Agreements and legal](#agreements-and-legal) | 19 | Simple agreements, consents and formal notices; complex matters go to a lawyer. |
| <img src="svg/mark/fundraising-letter.svg" width="28" height="28" alt=""> | [Community and clubs](#community-and-clubs) | 16 | Clubs, teams, neighbours, volunteers and causes. |
| <img src="svg/mark/digital-postcard.svg" width="28" height="28" alt=""> | [Travel](#travel) | 12 | Bookings, hosts, plans and postcards. |
| | **All** | **400** | |
<!-- categories:end -->

## Gallery

All 400 icons, as the official mark. Open [`gallery/index.html`](gallery/index.html) in a browser for the complete
gallery at full size, or search and filter them all on [taddicons.com](https://taddicons.com).

<!-- gallery:start -->
### Everyday messages

Quick notes, replies and emails for the day-to-day. 23 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/information-request.svg" width="44" height="44" alt="Ask for information"><br><sub><b>Ask for information</b></sub><br><sub><code>information-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/condolence-message.svg" width="44" height="44" alt="Condolence message"><br><sub><b>Condolence message</b></sub><br><sub><code>condolence-message</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/follow-up-email.svg" width="44" height="44" alt="Follow-up email"><br><sub><b>Follow-up email</b></sub><br><sub><code>follow-up-email</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/formal-email.svg" width="44" height="44" alt="Formal email"><br><sub><b>Formal email</b></sub><br><sub><code>formal-email</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/say-no-politely.svg" width="44" height="44" alt="Say no politely"><br><sub><b>Say no politely</b></sub><br><sub><code>say-no-politely</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/favor-request.svg" width="44" height="44" alt="Ask a favour"><br><sub><b>Ask a favour</b></sub><br><sub><code>favor-request</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/reschedule-request.svg" width="44" height="44" alt="Ask to reschedule"><br><sub><b>Ask to reschedule</b></sub><br><sub><code>reschedule-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/appointment-cancellation.svg" width="44" height="44" alt="Cancel an appointment"><br><sub><b>Cancel an appointment</b></sub><br><sub><code>appointment-cancellation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/check-in-message.svg" width="44" height="44" alt="Checking in on someone"><br><sub><b>Checking in on someone</b></sub><br><sub><code>check-in-message</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/appointment-confirmation.svg" width="44" height="44" alt="Confirm an appointment"><br><sub><b>Confirm an appointment</b></sub><br><sub><code>appointment-confirmation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/congratulations-message.svg" width="44" height="44" alt="Congratulations message"><br><sub><b>Congratulations message</b></sub><br><sub><code>congratulations-message</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/friendly-reminder.svg" width="44" height="44" alt="Friendly reminder"><br><sub><b>Friendly reminder</b></sub><br><sub><code>friendly-reminder</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/get-well-message.svg" width="44" height="44" alt="Get well soon message"><br><sub><b>Get well soon message</b></sub><br><sub><code>get-well-message</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/holiday-greetings-message.svg" width="44" height="44" alt="Holiday greetings message"><br><sub><b>Holiday greetings message</b></sub><br><sub><code>holiday-greetings-message</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/group-announcement.svg" width="44" height="44" alt="Message to a group"><br><sub><b>Message to a group</b></sub><br><sub><code>group-announcement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/out-of-office.svg" width="44" height="44" alt="Out-of-office reply"><br><sub><b>Out-of-office reply</b></sub><br><sub><code>out-of-office</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/quick-reply.svg" width="44" height="44" alt="Quick reply"><br><sub><b>Quick reply</b></sub><br><sub><code>quick-reply</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/running-late.svg" width="44" height="44" alt="Running late"><br><sub><b>Running late</b></sub><br><sub><code>running-late</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/short-apology.svg" width="44" height="44" alt="Short apology"><br><sub><b>Short apology</b></sub><br><sub><code>short-apology</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/thank-you-message.svg" width="44" height="44" alt="Thank-you message"><br><sub><b>Thank-you message</b></sub><br><sub><code>thank-you-message</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/introduction-email.svg" width="44" height="44" alt="Introduce two people"><br><sub><b>Introduce two people</b></sub><br><sub><code>introduction-email</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/reconnect-message.svg" width="44" height="44" alt="Reconnect with an old friend"><br><sub><b>Reconnect with an old friend</b></sub><br><sub><code>reconnect-message</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/voice-message.svg" width="44" height="44" alt="Voice message for a call"><br><sub><b>Voice message for a call</b></sub><br><sub><code>voice-message</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Cards and greetings

Designed digital cards for every occasion, sent as a link or printed. 31 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/anniversary-card.svg" width="44" height="44" alt="Anniversary card"><br><sub><b>Anniversary card</b></sub><br><sub><code>anniversary-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/birthday-card.svg" width="44" height="44" alt="Birthday card"><br><sub><b>Birthday card</b></sub><br><sub><code>birthday-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/christmas-card.svg" width="44" height="44" alt="Christmas card"><br><sub><b>Christmas card</b></sub><br><sub><code>christmas-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/fathers-day-card.svg" width="44" height="44" alt="Father's Day card"><br><sub><b>Father's Day card</b></sub><br><sub><code>fathers-day-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/mothers-day-card.svg" width="44" height="44" alt="Mother's Day card"><br><sub><b>Mother's Day card</b></sub><br><sub><code>mothers-day-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/sympathy-card.svg" width="44" height="44" alt="Sympathy card"><br><sub><b>Sympathy card</b></sub><br><sub><code>sympathy-card</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/thank-you-card.svg" width="44" height="44" alt="Thank-you card"><br><sub><b>Thank-you card</b></sub><br><sub><code>thank-you-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/congratulations-card.svg" width="44" height="44" alt="Congratulations card"><br><sub><b>Congratulations card</b></sub><br><sub><code>congratulations-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/easter-card.svg" width="44" height="44" alt="Easter card"><br><sub><b>Easter card</b></sub><br><sub><code>easter-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/get-well-card.svg" width="44" height="44" alt="Get well card"><br><sub><b>Get well card</b></sub><br><sub><code>get-well-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/just-because-card.svg" width="44" height="44" alt="Just because card"><br><sub><b>Just because card</b></sub><br><sub><code>just-because-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/new-year-card.svg" width="44" height="44" alt="New Year card"><br><sub><b>New Year card</b></sub><br><sub><code>new-year-card</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/valentines-card.svg" width="44" height="44" alt="Valentine's card"><br><sub><b>Valentine's card</b></sub><br><sub><code>valentines-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/diwali-card.svg" width="44" height="44" alt="Diwali card"><br><sub><b>Diwali card</b></sub><br><sub><code>diwali-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/eid-card.svg" width="44" height="44" alt="Eid card"><br><sub><b>Eid card</b></sub><br><sub><code>eid-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/engagement-card.svg" width="44" height="44" alt="Engagement card"><br><sub><b>Engagement card</b></sub><br><sub><code>engagement-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/farewell-card.svg" width="44" height="44" alt="Farewell card"><br><sub><b>Farewell card</b></sub><br><sub><code>farewell-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/graduation-card.svg" width="44" height="44" alt="Graduation card"><br><sub><b>Graduation card</b></sub><br><sub><code>graduation-card</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/hanukkah-card.svg" width="44" height="44" alt="Hanukkah card"><br><sub><b>Hanukkah card</b></sub><br><sub><code>hanukkah-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/lunar-new-year-card.svg" width="44" height="44" alt="Lunar New Year card"><br><sub><b>Lunar New Year card</b></sub><br><sub><code>lunar-new-year-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/new-baby-card.svg" width="44" height="44" alt="New baby card"><br><sub><b>New baby card</b></sub><br><sub><code>new-baby-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/new-home-card.svg" width="44" height="44" alt="New home card"><br><sub><b>New home card</b></sub><br><sub><code>new-home-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/retirement-card.svg" width="44" height="44" alt="Retirement card"><br><sub><b>Retirement card</b></sub><br><sub><code>retirement-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/teacher-thank-you-card.svg" width="44" height="44" alt="Thank you, teacher card"><br><sub><b>Thank you, teacher card</b></sub><br><sub><code>teacher-thank-you-card</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/thanksgiving-card.svg" width="44" height="44" alt="Thanksgiving card"><br><sub><b>Thanksgiving card</b></sub><br><sub><code>thanksgiving-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/wedding-card.svg" width="44" height="44" alt="Wedding congratulations card"><br><sub><b>Wedding congratulations card</b></sub><br><sub><code>wedding-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/baptism-card.svg" width="44" height="44" alt="Baptism or christening card"><br><sub><b>Baptism or christening card</b></sub><br><sub><code>baptism-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/bar-bat-mitzvah-card.svg" width="44" height="44" alt="Bar or bat mitzvah card"><br><sub><b>Bar or bat mitzvah card</b></sub><br><sub><code>bar-bat-mitzvah-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/pet-sympathy-card.svg" width="44" height="44" alt="Pet sympathy card"><br><sub><b>Pet sympathy card</b></sub><br><sub><code>pet-sympathy-card</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/remembrance-card.svg" width="44" height="44" alt="Remembrance anniversary card"><br><sub><b>Remembrance anniversary card</b></sub><br><sub><code>remembrance-card</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/carer-thank-you-card.svg" width="44" height="44" alt="Thank you to a carer or nurse"><br><sub><b>Thank you to a carer or nurse</b></sub><br><sub><code>carer-thank-you-card</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Invitations and events

Designed invitations with their own RSVP page, plus every message around an event. 32 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/birthday-party-invitation.svg" width="44" height="44" alt="Birthday party invitation"><br><sub><b>Birthday party invitation</b></sub><br><sub><code>birthday-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/invitation.svg" width="44" height="44" alt="Invitation"><br><sub><b>Invitation</b></sub><br><sub><code>invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/kids-party-invitation.svg" width="44" height="44" alt="Kids' party invitation"><br><sub><b>Kids' party invitation</b></sub><br><sub><code>kids-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/save-the-date.svg" width="44" height="44" alt="Save the date"><br><sub><b>Save the date</b></sub><br><sub><code>save-the-date</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/wedding-invitation.svg" width="44" height="44" alt="Wedding invitation"><br><sub><b>Wedding invitation</b></sub><br><sub><code>wedding-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/event-cancellation.svg" width="44" height="44" alt="Cancel an event"><br><sub><b>Cancel an event</b></sub><br><sub><code>event-cancellation</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/event-update.svg" width="44" height="44" alt="Change of plans for an event"><br><sub><b>Change of plans for an event</b></sub><br><sub><code>event-update</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/dinner-invitation.svg" width="44" height="44" alt="Dinner invitation"><br><sub><b>Dinner invitation</b></sub><br><sub><code>dinner-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/game-night-invitation.svg" width="44" height="44" alt="Game night invitation"><br><sub><b>Game night invitation</b></sub><br><sub><code>game-night-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/meeting-invitation.svg" width="44" height="44" alt="Meeting invitation"><br><sub><b>Meeting invitation</b></sub><br><sub><code>meeting-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/playdate-invitation.svg" width="44" height="44" alt="Playdate invitation"><br><sub><b>Playdate invitation</b></sub><br><sub><code>playdate-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/rsvp-reply.svg" width="44" height="44" alt="Reply to an invitation"><br><sub><b>Reply to an invitation</b></sub><br><sub><code>rsvp-reply</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/anniversary-party-invitation.svg" width="44" height="44" alt="Anniversary party invitation"><br><sub><b>Anniversary party invitation</b></sub><br><sub><code>anniversary-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/baby-shower-invitation.svg" width="44" height="44" alt="Baby shower invitation"><br><sub><b>Baby shower invitation</b></sub><br><sub><code>baby-shower-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/bachelor-party-invitation.svg" width="44" height="44" alt="Bachelor or bachelorette party invitation"><br><sub><b>Bachelor or bachelorette party invitation</b></sub><br><sub><code>bachelor-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/book-club-invitation.svg" width="44" height="44" alt="Book club invitation"><br><sub><b>Book club invitation</b></sub><br><sub><code>book-club-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/bridal-shower-invitation.svg" width="44" height="44" alt="Bridal shower invitation"><br><sub><b>Bridal shower invitation</b></sub><br><sub><code>bridal-shower-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/engagement-party-invitation.svg" width="44" height="44" alt="Engagement party invitation"><br><sub><b>Engagement party invitation</b></sub><br><sub><code>engagement-party-invitation</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/family-reunion-invitation.svg" width="44" height="44" alt="Family reunion invitation"><br><sub><b>Family reunion invitation</b></sub><br><sub><code>family-reunion-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/farewell-party-invitation.svg" width="44" height="44" alt="Farewell party invitation"><br><sub><b>Farewell party invitation</b></sub><br><sub><code>farewell-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/fundraiser-invitation.svg" width="44" height="44" alt="Fundraiser invitation"><br><sub><b>Fundraiser invitation</b></sub><br><sub><code>fundraiser-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/graduation-party-invitation.svg" width="44" height="44" alt="Graduation party invitation"><br><sub><b>Graduation party invitation</b></sub><br><sub><code>graduation-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/holiday-party-invitation.svg" width="44" height="44" alt="Holiday party invitation"><br><sub><b>Holiday party invitation</b></sub><br><sub><code>holiday-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/housewarming-invitation.svg" width="44" height="44" alt="Housewarming invitation"><br><sub><b>Housewarming invitation</b></sub><br><sub><code>housewarming-invitation</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/memorial-service-invitation.svg" width="44" height="44" alt="Memorial service invitation"><br><sub><b>Memorial service invitation</b></sub><br><sub><code>memorial-service-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/online-event-invitation.svg" width="44" height="44" alt="Online event invitation"><br><sub><b>Online event invitation</b></sub><br><sub><code>online-event-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/retirement-party-invitation.svg" width="44" height="44" alt="Retirement party invitation"><br><sub><b>Retirement party invitation</b></sub><br><sub><code>retirement-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/street-party-invitation.svg" width="44" height="44" alt="Street party invitation"><br><sub><b>Street party invitation</b></sub><br><sub><code>street-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/surprise-party-invitation.svg" width="44" height="44" alt="Surprise party invitation"><br><sub><b>Surprise party invitation</b></sub><br><sub><code>surprise-party-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/workshop-invitation.svg" width="44" height="44" alt="Workshop or class invitation"><br><sub><b>Workshop or class invitation</b></sub><br><sub><code>workshop-invitation</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/class-reunion-invitation.svg" width="44" height="44" alt="Class reunion invitation"><br><sub><b>Class reunion invitation</b></sub><br><sub><code>class-reunion-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/quinceanera-invitation.svg" width="44" height="44" alt="Quinceañera invitation"><br><sub><b>Quinceañera invitation</b></sub><br><sub><code>quinceanera-invitation</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Social posts

Posts with a picture for the networks you connected, written for regular people, not influencers. 26 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/lost-pet-post.svg" width="44" height="44" alt="Lost pet post"><br><sub><b>Lost pet post</b></sub><br><sub><code>lost-pet-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/new-job-post.svg" width="44" height="44" alt="New job announcement"><br><sub><b>New job announcement</b></sub><br><sub><code>new-job-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/open-to-work-post.svg" width="44" height="44" alt="Open to work post"><br><sub><b>Open to work post</b></sub><br><sub><code>open-to-work-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/small-business-promo-post.svg" width="44" height="44" alt="Small business promotion post"><br><sub><b>Small business promotion post</b></sub><br><sub><code>small-business-promo-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/recommendation-request-post.svg" width="44" height="44" alt="Ask your network for a recommendation"><br><sub><b>Ask your network for a recommendation</b></sub><br><sub><code>recommendation-request-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/birthday-wish-post.svg" width="44" height="44" alt="Birthday wishes post"><br><sub><b>Birthday wishes post</b></sub><br><sub><code>birthday-wish-post</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/holiday-greetings-post.svg" width="44" height="44" alt="Holiday greetings post"><br><sub><b>Holiday greetings post</b></sub><br><sub><code>holiday-greetings-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/life-update-post.svg" width="44" height="44" alt="Life update post"><br><sub><b>Life update post</b></sub><br><sub><code>life-update-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/photo-caption.svg" width="44" height="44" alt="Photo caption"><br><sub><b>Photo caption</b></sub><br><sub><code>photo-caption</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/local-business-shoutout.svg" width="44" height="44" alt="Shout-out for a local business"><br><sub><b>Shout-out for a local business</b></sub><br><sub><code>local-business-shoutout</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/thank-you-post.svg" width="44" height="44" alt="Thank-you post"><br><sub><b>Thank-you post</b></sub><br><sub><code>thank-you-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/travel-post.svg" width="44" height="44" alt="Travel post"><br><sub><b>Travel post</b></sub><br><sub><code>travel-post</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/baby-announcement-post.svg" width="44" height="44" alt="Baby announcement post"><br><sub><b>Baby announcement post</b></sub><br><sub><code>baby-announcement-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/volunteer-call-post.svg" width="44" height="44" alt="Call for volunteers post"><br><sub><b>Call for volunteers post</b></sub><br><sub><code>volunteer-call-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/community-event-post.svg" width="44" height="44" alt="Community event post"><br><sub><b>Community event post</b></sub><br><sub><code>community-event-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/engagement-post.svg" width="44" height="44" alt="Engagement announcement post"><br><sub><b>Engagement announcement post</b></sub><br><sub><code>engagement-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/event-promotion-post.svg" width="44" height="44" alt="Event promotion post"><br><sub><b>Event promotion post</b></sub><br><sub><code>event-promotion-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/fundraiser-post.svg" width="44" height="44" alt="Fundraiser post"><br><sub><b>Fundraiser post</b></sub><br><sub><code>fundraiser-post</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/graduation-post.svg" width="44" height="44" alt="Graduation post"><br><sub><b>Graduation post</b></sub><br><sub><code>graduation-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/in-memoriam-post.svg" width="44" height="44" alt="In memoriam post"><br><sub><b>In memoriam post</b></sub><br><sub><code>in-memoriam-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/milestone-post.svg" width="44" height="44" alt="Milestone post"><br><sub><b>Milestone post</b></sub><br><sub><code>milestone-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/product-launch-post.svg" width="44" height="44" alt="Product launch post"><br><sub><b>Product launch post</b></sub><br><sub><code>product-launch-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/sale-post.svg" width="44" height="44" alt="Sale announcement post"><br><sub><b>Sale announcement post</b></sub><br><sub><code>sale-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/hiring-post.svg" width="44" height="44" alt="We are hiring post"><br><sub><b>We are hiring post</b></sub><br><sub><code>hiring-post</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/moving-post.svg" width="44" height="44" alt="We moved post"><br><sub><b>We moved post</b></sub><br><sub><code>moving-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/awareness-post.svg" width="44" height="44" alt="Awareness post for a cause"><br><sub><b>Awareness post for a cause</b></sub><br><sub><code>awareness-post</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Life events and speeches

Announcements, letters and the words for the big moments. 30 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/apology.svg" width="44" height="44" alt="Apology"><br><sub><b>Apology</b></sub><br><sub><code>apology</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/best-man-speech.svg" width="44" height="44" alt="Best man speech"><br><sub><b>Best man speech</b></sub><br><sub><code>best-man-speech</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/birth-announcement.svg" width="44" height="44" alt="Birth announcement"><br><sub><b>Birth announcement</b></sub><br><sub><code>birth-announcement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/condolence.svg" width="44" height="44" alt="Condolence letter"><br><sub><b>Condolence letter</b></sub><br><sub><code>condolence</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/eulogy.svg" width="44" height="44" alt="Eulogy"><br><sub><b>Eulogy</b></sub><br><sub><code>eulogy</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/formal-letter.svg" width="44" height="44" alt="Formal letter"><br><sub><b>Formal letter</b></sub><br><sub><code>formal-letter</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/funeral-notice.svg" width="44" height="44" alt="Funeral notice"><br><sub><b>Funeral notice</b></sub><br><sub><code>funeral-notice</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/maid-of-honor-speech.svg" width="44" height="44" alt="Maid of honour speech"><br><sub><b>Maid of honour speech</b></sub><br><sub><code>maid-of-honor-speech</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/obituary.svg" width="44" height="44" alt="Obituary"><br><sub><b>Obituary</b></sub><br><sub><code>obituary</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/thank-you.svg" width="44" height="44" alt="Thank-you note"><br><sub><b>Thank-you note</b></sub><br><sub><code>thank-you</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/wedding-speech.svg" width="44" height="44" alt="Wedding speech"><br><sub><b>Wedding speech</b></sub><br><sub><code>wedding-speech</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/wedding-vows.svg" width="44" height="44" alt="Wedding vows"><br><sub><b>Wedding vows</b></sub><br><sub><code>wedding-vows</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/new-pet-announcement.svg" width="44" height="44" alt="New pet announcement"><br><sub><b>New pet announcement</b></sub><br><sub><code>new-pet-announcement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/personal-letter.svg" width="44" height="44" alt="Personal letter"><br><sub><b>Personal letter</b></sub><br><sub><code>personal-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/holiday-letter.svg" width="44" height="44" alt="Annual holiday letter"><br><sub><b>Annual holiday letter</b></sub><br><sub><code>holiday-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/father-of-the-bride-speech.svg" width="44" height="44" alt="Father of the bride speech"><br><sub><b>Father of the bride speech</b></sub><br><sub><code>father-of-the-bride-speech</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/gratitude-letter.svg" width="44" height="44" alt="Gratitude letter"><br><sub><b>Gratitude letter</b></sub><br><sub><code>gratitude-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/love-letter.svg" width="44" height="44" alt="Love letter"><br><sub><b>Love letter</b></sub><br><sub><code>love-letter</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/memorial-tribute.svg" width="44" height="44" alt="Memorial tribute"><br><sub><b>Memorial tribute</b></sub><br><sub><code>memorial-tribute</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/moving-announcement.svg" width="44" height="44" alt="Moving announcement"><br><sub><b>Moving announcement</b></sub><br><sub><code>moving-announcement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/retirement-announcement.svg" width="44" height="44" alt="Retirement announcement"><br><sub><b>Retirement announcement</b></sub><br><sub><code>retirement-announcement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/retirement-speech.svg" width="44" height="44" alt="Retirement speech"><br><sub><b>Retirement speech</b></sub><br><sub><code>retirement-speech</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/toast.svg" width="44" height="44" alt="Toast"><br><sub><b>Toast</b></sub><br><sub><code>toast</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/wedding-announcement.svg" width="44" height="44" alt="Wedding announcement"><br><sub><b>Wedding announcement</b></sub><br><sub><code>wedding-announcement</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/adoption-announcement.svg" width="44" height="44" alt="Adoption announcement"><br><sub><b>Adoption announcement</b></sub><br><sub><code>adoption-announcement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/breakup-letter.svg" width="44" height="44" alt="Breakup letter"><br><sub><b>Breakup letter</b></sub><br><sub><code>breakup-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/coming-out-letter.svg" width="44" height="44" alt="Coming-out letter"><br><sub><b>Coming-out letter</b></sub><br><sub><code>coming-out-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/grief-letter.svg" width="44" height="44" alt="Letter to someone who died"><br><sub><b>Letter to someone who died</b></sub><br><sub><code>grief-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/proposal-words.svg" width="44" height="44" alt="Marriage proposal words"><br><sub><b>Marriage proposal words</b></sub><br><sub><code>proposal-words</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/reconciliation-letter.svg" width="44" height="44" alt="Reconciliation letter"><br><sub><b>Reconciliation letter</b></sub><br><sub><code>reconciliation-letter</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Family and home

Notes, plans and instructions that keep a household running. 20 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/babysitter-instructions.svg" width="44" height="44" alt="Babysitter instructions"><br><sub><b>Babysitter instructions</b></sub><br><sub><code>babysitter-instructions</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/emergency-contact-sheet.svg" width="44" height="44" alt="Emergency contact sheet"><br><sub><b>Emergency contact sheet</b></sub><br><sub><code>emergency-contact-sheet</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/school-absence-note.svg" width="44" height="44" alt="School absence note"><br><sub><b>School absence note</b></sub><br><sub><code>school-absence-note</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/family-group-update.svg" width="44" height="44" alt="Family group update"><br><sub><b>Family group update</b></sub><br><sub><code>family-group-update</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/holiday-plans-message.svg" width="44" height="44" alt="Holiday plans message"><br><sub><b>Holiday plans message</b></sub><br><sub><code>holiday-plans-message</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/note-to-teacher.svg" width="44" height="44" alt="Note to a teacher"><br><sub><b>Note to a teacher</b></sub><br><sub><code>note-to-teacher</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/recipe.svg" width="44" height="44" alt="Recipe"><br><sub><b>Recipe</b></sub><br><sub><code>recipe</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/thank-you-for-gift.svg" width="44" height="44" alt="Thank you for the gift"><br><sub><b>Thank you for the gift</b></sub><br><sub><code>thank-you-for-gift</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/grandparent-update.svg" width="44" height="44" alt="Update for the grandparents"><br><sub><b>Update for the grandparents</b></sub><br><sub><code>grandparent-update</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/care-plan-for-parent.svg" width="44" height="44" alt="Care plan for an ageing parent"><br><sub><b>Care plan for an ageing parent</b></sub><br><sub><code>care-plan-for-parent</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/caregiver-instructions.svg" width="44" height="44" alt="Caregiver instructions"><br><sub><b>Caregiver instructions</b></sub><br><sub><code>caregiver-instructions</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/family-newsletter.svg" width="44" height="44" alt="Family newsletter"><br><sub><b>Family newsletter</b></sub><br><sub><code>family-newsletter</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/house-sitter-instructions.svg" width="44" height="44" alt="House-sitter instructions"><br><sub><b>House-sitter instructions</b></sub><br><sub><code>house-sitter-instructions</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/pet-sitter-instructions.svg" width="44" height="44" alt="Pet-sitter instructions"><br><sub><b>Pet-sitter instructions</b></sub><br><sub><code>pet-sitter-instructions</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/family-history-story.svg" width="44" height="44" alt="Family history story"><br><sub><b>Family history story</b></sub><br><sub><code>family-history-story</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/legacy-letter.svg" width="44" height="44" alt="Legacy letter"><br><sub><b>Legacy letter</b></sub><br><sub><code>legacy-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/letter-to-santa.svg" width="44" height="44" alt="Letter to Santa"><br><sub><b>Letter to Santa</b></sub><br><sub><code>letter-to-santa</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/letter-to-my-child.svg" width="44" height="44" alt="Letter to my child"><br><sub><b>Letter to my child</b></sub><br><sub><code>letter-to-my-child</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/letter-to-future-self.svg" width="44" height="44" alt="Letter to my future self"><br><sub><b>Letter to my future self</b></sub><br><sub><code>letter-to-future-self</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/life-story.svg" width="44" height="44" alt="Life story memoir"><br><sub><b>Life story memoir</b></sub><br><sub><code>life-story</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Letters to companies

Complaints, refunds, cancellations and your consumer rights, done properly. 32 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/data-deletion-request.svg" width="44" height="44" alt="Ask to delete my data"><br><sub><b>Ask to delete my data</b></sub><br><sub><code>data-deletion-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/gym-cancellation.svg" width="44" height="44" alt="Cancel a gym membership"><br><sub><b>Cancel a gym membership</b></sub><br><sub><code>gym-cancellation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/contract-cancellation.svg" width="44" height="44" alt="Cancel a phone or internet contract"><br><sub><b>Cancel a phone or internet contract</b></sub><br><sub><code>contract-cancellation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/cancellation.svg" width="44" height="44" alt="Cancellation"><br><sub><b>Cancellation</b></sub><br><sub><code>cancellation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/change-of-address.svg" width="44" height="44" alt="Change of address"><br><sub><b>Change of address</b></sub><br><sub><code>change-of-address</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/complaint.svg" width="44" height="44" alt="Complaint"><br><sub><b>Complaint</b></sub><br><sub><code>complaint</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/chargeback-dispute.svg" width="44" height="44" alt="Dispute a card charge"><br><sub><b>Dispute a card charge</b></sub><br><sub><code>chargeback-dispute</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/flight-compensation-claim.svg" width="44" height="44" alt="Flight delay or cancellation claim"><br><sub><b>Flight delay or cancellation claim</b></sub><br><sub><code>flight-compensation-claim</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/refund-request.svg" width="44" height="44" alt="Refund request"><br><sub><b>Refund request</b></sub><br><sub><code>refund-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/fraud-report.svg" width="44" height="44" alt="Report fraud to your bank"><br><sub><b>Report fraud to your bank</b></sub><br><sub><code>fraud-report</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/data-access-request.svg" width="44" height="44" alt="Request my personal data"><br><sub><b>Request my personal data</b></sub><br><sub><code>data-access-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/return-request.svg" width="44" height="44" alt="Return request"><br><sub><b>Return request</b></sub><br><sub><code>return-request</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/warranty-claim.svg" width="44" height="44" alt="Warranty claim"><br><sub><b>Warranty claim</b></sub><br><sub><code>warranty-claim</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/quote-request.svg" width="44" height="44" alt="Ask a tradesperson for a quote"><br><sub><b>Ask a tradesperson for a quote</b></sub><br><sub><code>quote-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/delivery-complaint.svg" width="44" height="44" alt="Delivery complaint"><br><sub><b>Delivery complaint</b></sub><br><sub><code>delivery-complaint</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/repair-request.svg" width="44" height="44" alt="Repair or service request"><br><sub><b>Repair or service request</b></sub><br><sub><code>repair-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/unsubscribe-request.svg" width="44" height="44" alt="Stop marketing messages"><br><sub><b>Stop marketing messages</b></sub><br><sub><code>unsubscribe-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/order-inquiry.svg" width="44" height="44" alt="Where is my order"><br><sub><b>Where is my order</b></sub><br><sub><code>order-inquiry</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/positive-review.svg" width="44" height="44" alt="Write a positive review"><br><sub><b>Write a positive review</b></sub><br><sub><code>positive-review</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/better-price-request.svg" width="44" height="44" alt="Ask for a better price"><br><sub><b>Ask for a better price</b></sub><br><sub><code>better-price-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/insurance-cancellation.svg" width="44" height="44" alt="Cancel an insurance policy"><br><sub><b>Cancel an insurance policy</b></sub><br><sub><code>insurance-cancellation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/contractor-complaint.svg" width="44" height="44" alt="Complaint about a contractor"><br><sub><b>Complaint about a contractor</b></sub><br><sub><code>contractor-complaint</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/compliment-letter.svg" width="44" height="44" alt="Compliment the staff"><br><sub><b>Compliment the staff</b></sub><br><sub><code>compliment-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/bank-fee-dispute.svg" width="44" height="44" alt="Dispute a bank fee"><br><sub><b>Dispute a bank fee</b></sub><br><sub><code>bank-fee-dispute</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/billing-dispute.svg" width="44" height="44" alt="Dispute a bill"><br><sub><b>Dispute a bill</b></sub><br><sub><code>billing-dispute</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/complaint-escalation.svg" width="44" height="44" alt="Escalate a complaint"><br><sub><b>Escalate a complaint</b></sub><br><sub><code>complaint-escalation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/hotel-complaint.svg" width="44" height="44" alt="Hotel complaint"><br><sub><b>Hotel complaint</b></sub><br><sub><code>hotel-complaint</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/lost-luggage-claim.svg" width="44" height="44" alt="Lost or damaged luggage claim"><br><sub><b>Lost or damaged luggage claim</b></sub><br><sub><code>lost-luggage-claim</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/negative-review.svg" width="44" height="44" alt="Write a fair negative review"><br><sub><b>Write a fair negative review</b></sub><br><sub><code>negative-review</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/accessibility-request.svg" width="44" height="44" alt="Ask for accessibility"><br><sub><b>Ask for accessibility</b></sub><br><sub><code>accessibility-request</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/identity-theft-report.svg" width="44" height="44" alt="Identity theft report"><br><sub><b>Identity theft report</b></sub><br><sub><code>identity-theft-report</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/product-safety-report.svg" width="44" height="44" alt="Report an unsafe product"><br><sub><b>Report an unsafe product</b></sub><br><sub><code>product-safety-report</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Money and bills

Invoices, reminders, payment plans, claims and money between friends. 19 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/payment-plan-request.svg" width="44" height="44" alt="Ask for a payment plan"><br><sub><b>Ask for a payment plan</b></sub><br><sub><code>payment-plan-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/hardship-letter.svg" width="44" height="44" alt="Hardship letter"><br><sub><b>Hardship letter</b></sub><br><sub><code>hardship-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/insurance-claim.svg" width="44" height="44" alt="Insurance claim"><br><sub><b>Insurance claim</b></sub><br><sub><code>insurance-claim</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/invoice.svg" width="44" height="44" alt="Invoice"><br><sub><b>Invoice</b></sub><br><sub><code>invoice</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/payment-reminder.svg" width="44" height="44" alt="Payment reminder"><br><sub><b>Payment reminder</b></sub><br><sub><code>payment-reminder</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/quote.svg" width="44" height="44" alt="Quote"><br><sub><b>Quote</b></sub><br><sub><code>quote</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/receipt.svg" width="44" height="44" alt="Receipt"><br><sub><b>Receipt</b></sub><br><sub><code>receipt</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/repayment-reminder.svg" width="44" height="44" alt="Remind a friend to pay back"><br><sub><b>Remind a friend to pay back</b></sub><br><sub><code>repayment-reminder</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/split-the-bill.svg" width="44" height="44" alt="Split the bill"><br><sub><b>Split the bill</b></sub><br><sub><code>split-the-bill</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/insurance-claim-appeal.svg" width="44" height="44" alt="Appeal an insurance decision"><br><sub><b>Appeal an insurance decision</b></sub><br><sub><code>insurance-claim-appeal</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/debt-validation-request.svg" width="44" height="44" alt="Ask a collector to prove a debt"><br><sub><b>Ask a collector to prove a debt</b></sub><br><sub><code>debt-validation-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/donation-request.svg" width="44" height="44" alt="Ask for a donation"><br><sub><b>Ask for a donation</b></sub><br><sub><code>donation-request</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/sponsorship-request.svg" width="44" height="44" alt="Ask for sponsorship"><br><sub><b>Ask for sponsorship</b></sub><br><sub><code>sponsorship-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/borrow-money-request.svg" width="44" height="44" alt="Ask to borrow money"><br><sub><b>Ask to borrow money</b></sub><br><sub><code>borrow-money-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/fee-waiver-request.svg" width="44" height="44" alt="Ask to waive a fee"><br><sub><b>Ask to waive a fee</b></sub><br><sub><code>fee-waiver-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/crowdfunding-pitch.svg" width="44" height="44" alt="Crowdfunding pitch"><br><sub><b>Crowdfunding pitch</b></sub><br><sub><code>crowdfunding-pitch</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/debt-dispute.svg" width="44" height="44" alt="Dispute a debt"><br><sub><b>Dispute a debt</b></sub><br><sub><code>debt-dispute</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/personal-loan-agreement.svg" width="44" height="44" alt="Loan agreement between friends"><br><sub><b>Loan agreement between friends</b></sub><br><sub><code>personal-loan-agreement</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/donation-thank-you.svg" width="44" height="44" alt="Thank a donor"><br><sub><b>Thank a donor</b></sub><br><sub><code>donation-thank-you</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Home and renting

Landlords, tenants, neighbours and moving. 18 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/deposit-return-request.svg" width="44" height="44" alt="Ask for the deposit back"><br><sub><b>Ask for the deposit back</b></sub><br><sub><code>deposit-return-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/neighbour-noise-letter.svg" width="44" height="44" alt="Letter about noise to a neighbour"><br><sub><b>Letter about noise to a neighbour</b></sub><br><sub><code>neighbour-noise-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/rental-application.svg" width="44" height="44" alt="Rental application"><br><sub><b>Rental application</b></sub><br><sub><code>rental-application</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/rental-contract.svg" width="44" height="44" alt="Rental contract"><br><sub><b>Rental contract</b></sub><br><sub><code>rental-contract</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/repair-request-landlord.svg" width="44" height="44" alt="Repair request to the landlord"><br><sub><b>Repair request to the landlord</b></sub><br><sub><code>repair-request-landlord</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/notice-to-vacate.svg" width="44" height="44" alt="Tenant's notice to move out"><br><sub><b>Tenant's notice to move out</b></sub><br><sub><code>notice-to-vacate</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/viewing-request.svg" width="44" height="44" alt="Ask for a viewing"><br><sub><b>Ask for a viewing</b></sub><br><sub><code>viewing-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/neighbour-introduction.svg" width="44" height="44" alt="Hello from your new neighbour"><br><sub><b>Hello from your new neighbour</b></sub><br><sub><code>neighbour-introduction</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/rent-reminder.svg" width="44" height="44" alt="Rent reminder from the landlord"><br><sub><b>Rent reminder from the landlord</b></sub><br><sub><code>rent-reminder</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/landlord-reference-request.svg" width="44" height="44" alt="Ask for a landlord reference"><br><sub><b>Ask for a landlord reference</b></sub><br><sub><code>landlord-reference-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/rent-reduction-request.svg" width="44" height="44" alt="Ask for a rent reduction"><br><sub><b>Ask for a rent reduction</b></sub><br><sub><code>rent-reduction-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/lease-renewal-request.svg" width="44" height="44" alt="Ask to renew the lease"><br><sub><b>Ask to renew the lease</b></sub><br><sub><code>lease-renewal-request</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/sublet-request.svg" width="44" height="44" alt="Ask to sublet"><br><sub><b>Ask to sublet</b></sub><br><sub><code>sublet-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/hoa-letter.svg" width="44" height="44" alt="Letter to the homeowners' association"><br><sub><b>Letter to the homeowners' association</b></sub><br><sub><code>hoa-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/move-in-report.svg" width="44" height="44" alt="Move-in condition report"><br><sub><b>Move-in condition report</b></sub><br><sub><code>move-in-report</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/rent-increase-objection.svg" width="44" height="44" alt="Object to a rent increase"><br><sub><b>Object to a rent increase</b></sub><br><sub><code>rent-increase-objection</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/property-listing.svg" width="44" height="44" alt="Room or flat listing"><br><sub><b>Room or flat listing</b></sub><br><sub><code>property-listing</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/roommate-agreement.svg" width="44" height="44" alt="Roommate agreement"><br><sub><b>Roommate agreement</b></sub><br><sub><code>roommate-agreement</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Work and jobs

Applications, requests and messages at work. 35 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/job-offer-acceptance.svg" width="44" height="44" alt="Accept a job offer"><br><sub><b>Accept a job offer</b></sub><br><sub><code>job-offer-acceptance</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/raise-request.svg" width="44" height="44" alt="Ask for a raise"><br><sub><b>Ask for a raise</b></sub><br><sub><code>raise-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/cover-letter.svg" width="44" height="44" alt="Cover letter"><br><sub><b>Cover letter</b></sub><br><sub><code>cover-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/job-application.svg" width="44" height="44" alt="Job application"><br><sub><b>Job application</b></sub><br><sub><code>job-application</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/salary-negotiation.svg" width="44" height="44" alt="Negotiate a salary"><br><sub><b>Negotiate a salary</b></sub><br><sub><code>salary-negotiation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/networking-message.svg" width="44" height="44" alt="Networking message"><br><sub><b>Networking message</b></sub><br><sub><code>networking-message</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/profile-summary.svg" width="44" height="44" alt="Profile summary"><br><sub><b>Profile summary</b></sub><br><sub><code>profile-summary</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/reference-letter.svg" width="44" height="44" alt="Reference letter"><br><sub><b>Reference letter</b></sub><br><sub><code>reference-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/resignation-letter.svg" width="44" height="44" alt="Resignation letter"><br><sub><b>Resignation letter</b></sub><br><sub><code>resignation-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/resume.svg" width="44" height="44" alt="Résumé"><br><sub><b>Résumé</b></sub><br><sub><code>resume</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/sick-note-employer.svg" width="44" height="44" alt="Tell work you are sick"><br><sub><b>Tell work you are sick</b></sub><br><sub><code>sick-note-employer</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/interview-thank-you.svg" width="44" height="44" alt="Thank you after an interview"><br><sub><b>Thank you after an interview</b></sub><br><sub><code>interview-thank-you</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/vacation-request.svg" width="44" height="44" alt="Holiday request"><br><sub><b>Holiday request</b></sub><br><sub><code>vacation-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/meeting-minutes.svg" width="44" height="44" alt="Meeting minutes"><br><sub><b>Meeting minutes</b></sub><br><sub><code>meeting-minutes</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/memo.svg" width="44" height="44" alt="Memo"><br><sub><b>Memo</b></sub><br><sub><code>memo</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/team-update.svg" width="44" height="44" alt="Team update"><br><sub><b>Team update</b></sub><br><sub><code>team-update</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/welcome-colleague.svg" width="44" height="44" alt="Welcome a new colleague"><br><sub><b>Welcome a new colleague</b></sub><br><sub><code>welcome-colleague</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/informational-interview-request.svg" width="44" height="44" alt="Ask for a coffee chat"><br><sub><b>Ask for a coffee chat</b></sub><br><sub><code>informational-interview-request</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/promotion-request.svg" width="44" height="44" alt="Ask for a promotion"><br><sub><b>Ask for a promotion</b></sub><br><sub><code>promotion-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/reference-request.svg" width="44" height="44" alt="Ask for a reference"><br><sub><b>Ask for a reference</b></sub><br><sub><code>reference-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/remote-work-request.svg" width="44" height="44" alt="Ask to work remotely"><br><sub><b>Ask to work remotely</b></sub><br><sub><code>remote-work-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/hr-complaint.svg" width="44" height="44" alt="Complaint to HR"><br><sub><b>Complaint to HR</b></sub><br><sub><code>hr-complaint</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/job-offer-decline.svg" width="44" height="44" alt="Decline a job offer"><br><sub><b>Decline a job offer</b></sub><br><sub><code>job-offer-decline</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/employment-termination.svg" width="44" height="44" alt="Employment termination"><br><sub><b>Employment termination</b></sub><br><sub><code>employment-termination</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/faq.svg" width="44" height="44" alt="FAQ"><br><sub><b>FAQ</b></sub><br><sub><code>faq</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/farewell-email.svg" width="44" height="44" alt="Goodbye to colleagues"><br><sub><b>Goodbye to colleagues</b></sub><br><sub><code>farewell-email</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/internship-application.svg" width="44" height="44" alt="Internship application"><br><sub><b>Internship application</b></sub><br><sub><code>internship-application</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/parental-leave-request.svg" width="44" height="44" alt="Parental leave request"><br><sub><b>Parental leave request</b></sub><br><sub><code>parental-leave-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/policy.svg" width="44" height="44" alt="Policy"><br><sub><b>Policy</b></sub><br><sub><code>policy</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/proposal.svg" width="44" height="44" alt="Proposal"><br><sub><b>Proposal</b></sub><br><sub><code>proposal</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/colleague-recommendation.svg" width="44" height="44" alt="Recommendation for a colleague"><br><sub><b>Recommendation for a colleague</b></sub><br><sub><code>colleague-recommendation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/report.svg" width="44" height="44" alt="Report"><br><sub><b>Report</b></sub><br><sub><code>report</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/short-bio.svg" width="44" height="44" alt="Short bio"><br><sub><b>Short bio</b></sub><br><sub><code>short-bio</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/sop.svg" width="44" height="44" alt="Standard procedure"><br><sub><b>Standard procedure</b></sub><br><sub><code>sop</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/volunteer-application.svg" width="44" height="44" alt="Volunteer application"><br><sub><b>Volunteer application</b></sub><br><sub><code>volunteer-application</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Small business and side hustle

Everything a small shop, freelancer or club treasurer sends to customers. 25 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/appointment-reminder.svg" width="44" height="44" alt="Appointment reminder for customers"><br><sub><b>Appointment reminder for customers</b></sub><br><sub><code>appointment-reminder</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/review-request.svg" width="44" height="44" alt="Ask customers for a review"><br><sub><b>Ask customers for a review</b></sub><br><sub><code>review-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/order-confirmation.svg" width="44" height="44" alt="Order confirmation"><br><sub><b>Order confirmation</b></sub><br><sub><code>order-confirmation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/product-description.svg" width="44" height="44" alt="Product description"><br><sub><b>Product description</b></sub><br><sub><code>product-description</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/review-response.svg" width="44" height="44" alt="Reply to a customer review"><br><sub><b>Reply to a customer review</b></sub><br><sub><code>review-response</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/support-email.svg" width="44" height="44" alt="Support reply"><br><sub><b>Support reply</b></sub><br><sub><code>support-email</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/blog-post.svg" width="44" height="44" alt="Blog post"><br><sub><b>Blog post</b></sub><br><sub><code>blog-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/holiday-closure-notice.svg" width="44" height="44" alt="Holiday closure notice"><br><sub><b>Holiday closure notice</b></sub><br><sub><code>holiday-closure-notice</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/project-update.svg" width="44" height="44" alt="Project update for a client"><br><sub><b>Project update for a client</b></sub><br><sub><code>project-update</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/customer-thank-you.svg" width="44" height="44" alt="Thank a customer"><br><sub><b>Thank a customer</b></sub><br><sub><code>customer-thank-you</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/customer-welcome.svg" width="44" height="44" alt="Welcome a new customer"><br><sub><b>Welcome a new customer</b></sub><br><sub><code>customer-welcome</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/business-announcement.svg" width="44" height="44" alt="Business announcement"><br><sub><b>Business announcement</b></sub><br><sub><code>business-announcement</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/client-onboarding.svg" width="44" height="44" alt="Client onboarding email"><br><sub><b>Client onboarding email</b></sub><br><sub><code>client-onboarding</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/final-payment-notice.svg" width="44" height="44" alt="Final payment notice"><br><sub><b>Final payment notice</b></sub><br><sub><code>final-payment-notice</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/flyer.svg" width="44" height="44" alt="Flyer"><br><sub><b>Flyer</b></sub><br><sub><code>flyer</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/estimate-follow-up.svg" width="44" height="44" alt="Follow up on an estimate"><br><sub><b>Follow up on an estimate</b></sub><br><sub><code>estimate-follow-up</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/menu.svg" width="44" height="44" alt="Menu"><br><sub><b>Menu</b></sub><br><sub><code>menu</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/newsletter.svg" width="44" height="44" alt="Newsletter"><br><sub><b>Newsletter</b></sub><br><sub><code>newsletter</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/loyalty-offer.svg" width="44" height="44" alt="Offer for regular customers"><br><sub><b>Offer for regular customers</b></sub><br><sub><code>loyalty-offer</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/partnership-proposal.svg" width="44" height="44" alt="Partnership proposal"><br><sub><b>Partnership proposal</b></sub><br><sub><code>partnership-proposal</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/poster.svg" width="44" height="44" alt="Poster"><br><sub><b>Poster</b></sub><br><sub><code>poster</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/press-release.svg" width="44" height="44" alt="Press release"><br><sub><b>Press release</b></sub><br><sub><code>press-release</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/price-list.svg" width="44" height="44" alt="Price list"><br><sub><b>Price list</b></sub><br><sub><code>price-list</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/sales-email.svg" width="44" height="44" alt="Sales email"><br><sub><b>Sales email</b></sub><br><sub><code>sales-email</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/gift-voucher.svg" width="44" height="44" alt="Gift voucher"><br><sub><b>Gift voucher</b></sub><br><sub><code>gift-voucher</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Buy and sell

Listings and messages for selling and buying things online. 10 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/marketplace-listing.svg" width="44" height="44" alt="Sell something online"><br><sub><b>Sell something online</b></sub><br><sub><code>marketplace-listing</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/pickup-arrangement.svg" width="44" height="44" alt="Arrange a pickup"><br><sub><b>Arrange a pickup</b></sub><br><sub><code>pickup-arrangement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/buyer-inquiry.svg" width="44" height="44" alt="Ask a seller about an item"><br><sub><b>Ask a seller about an item</b></sub><br><sub><code>buyer-inquiry</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/giveaway-post.svg" width="44" height="44" alt="Free to a good home"><br><sub><b>Free to a good home</b></sub><br><sub><code>giveaway-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/wanted-post.svg" width="44" height="44" alt="Looking to buy post"><br><sub><b>Looking to buy post</b></sub><br><sub><code>wanted-post</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/offer-message.svg" width="44" height="44" alt="Make an offer"><br><sub><b>Make an offer</b></sub><br><sub><code>offer-message</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/seller-reply.svg" width="44" height="44" alt="Reply to a buyer"><br><sub><b>Reply to a buyer</b></sub><br><sub><code>seller-reply</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/bill-of-sale.svg" width="44" height="44" alt="Bill of sale"><br><sub><b>Bill of sale</b></sub><br><sub><code>bill-of-sale</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/car-sale-ad.svg" width="44" height="44" alt="Car for sale ad"><br><sub><b>Car for sale ad</b></sub><br><sub><code>car-sale-ad</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/yard-sale-flyer.svg" width="44" height="44" alt="Yard sale flyer"><br><sub><b>Yard sale flyer</b></sub><br><sub><code>yard-sale-flyer</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### School and learning

For students, parents and teachers. 17 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/extension-request.svg" width="44" height="44" alt="Ask for a deadline extension"><br><sub><b>Ask for a deadline extension</b></sub><br><sub><code>extension-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/college-application-essay.svg" width="44" height="44" alt="College application essay"><br><sub><b>College application essay</b></sub><br><sub><code>college-application-essay</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/email-to-professor.svg" width="44" height="44" alt="Email to a professor"><br><sub><b>Email to a professor</b></sub><br><sub><code>email-to-professor</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/scholarship-application.svg" width="44" height="44" alt="Scholarship application"><br><sub><b>Scholarship application</b></sub><br><sub><code>scholarship-application</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/teacher-meeting-request.svg" width="44" height="44" alt="Ask for a meeting with the teacher"><br><sub><b>Ask for a meeting with the teacher</b></sub><br><sub><code>teacher-meeting-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/book-report.svg" width="44" height="44" alt="Book report"><br><sub><b>Book report</b></sub><br><sub><code>book-report</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/tutoring-request.svg" width="44" height="44" alt="Find a tutor"><br><sub><b>Find a tutor</b></sub><br><sub><code>tutoring-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/class-parents-message.svg" width="44" height="44" alt="Message to the class parents"><br><sub><b>Message to the class parents</b></sub><br><sub><code>class-parents-message</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/summer-job-application.svg" width="44" height="44" alt="Summer job application"><br><sub><b>Summer job application</b></sub><br><sub><code>summer-job-application</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/recommendation-request-teacher.svg" width="44" height="44" alt="Ask a teacher for a recommendation"><br><sub><b>Ask a teacher for a recommendation</b></sub><br><sub><code>recommendation-request-teacher</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/school-complaint.svg" width="44" height="44" alt="Complaint to the school"><br><sub><b>Complaint to the school</b></sub><br><sub><code>school-complaint</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/graduation-speech.svg" width="44" height="44" alt="Graduation speech"><br><sub><b>Graduation speech</b></sub><br><sub><code>graduation-speech</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/presentation-script.svg" width="44" height="44" alt="Presentation script"><br><sub><b>Presentation script</b></sub><br><sub><code>presentation-script</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/research-paper.svg" width="44" height="44" alt="Research paper"><br><sub><b>Research paper</b></sub><br><sub><code>research-paper</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/school-essay.svg" width="44" height="44" alt="School essay"><br><sub><b>School essay</b></sub><br><sub><code>school-essay</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/host-family-letter.svg" width="44" height="44" alt="Letter to a host family"><br><sub><b>Letter to a host family</b></sub><br><sub><code>host-family-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/thesis-chapter.svg" width="44" height="44" alt="Thesis chapter"><br><sub><b>Thesis chapter</b></sub><br><sub><code>thesis-chapter</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Health and care

Doctors, records, insurance and caring for someone. 16 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/medical-bill-dispute.svg" width="44" height="44" alt="Dispute a medical bill"><br><sub><b>Dispute a medical bill</b></sub><br><sub><code>medical-bill-dispute</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/medication-list.svg" width="44" height="44" alt="Medication list"><br><sub><b>Medication list</b></sub><br><sub><code>medication-list</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/medical-records-request.svg" width="44" height="44" alt="Request my medical records"><br><sub><b>Request my medical records</b></sub><br><sub><code>medical-records-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/symptom-summary.svg" width="44" height="44" alt="Symptom summary for the doctor"><br><sub><b>Symptom summary for the doctor</b></sub><br><sub><code>symptom-summary</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/doctor-appointment-request.svg" width="44" height="44" alt="Ask for a doctor's appointment"><br><sub><b>Ask for a doctor's appointment</b></sub><br><sub><code>doctor-appointment-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/vet-appointment-request.svg" width="44" height="44" alt="Book the vet"><br><sub><b>Book the vet</b></sub><br><sub><code>vet-appointment-request</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/hospital-update.svg" width="44" height="44" alt="Hospital update for family and friends"><br><sub><b>Hospital update for family and friends</b></sub><br><sub><code>hospital-update</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/caregiver-update.svg" width="44" height="44" alt="Update from the carer"><br><sub><b>Update from the carer</b></sub><br><sub><code>caregiver-update</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/disability-accommodation-request.svg" width="44" height="44" alt="Ask for a disability accommodation"><br><sub><b>Ask for a disability accommodation</b></sub><br><sub><code>disability-accommodation-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/second-opinion-request.svg" width="44" height="44" alt="Ask for a second opinion"><br><sub><b>Ask for a second opinion</b></sub><br><sub><code>second-opinion-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/preauthorization-request.svg" width="44" height="44" alt="Ask the insurer to approve a treatment"><br><sub><b>Ask the insurer to approve a treatment</b></sub><br><sub><code>preauthorization-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/care-home-inquiry.svg" width="44" height="44" alt="Care home inquiry"><br><sub><b>Care home inquiry</b></sub><br><sub><code>care-home-inquiry</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/therapist-inquiry.svg" width="44" height="44" alt="Contact a therapist"><br><sub><b>Contact a therapist</b></sub><br><sub><code>therapist-inquiry</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/meal-train.svg" width="44" height="44" alt="Organise meals for someone"><br><sub><b>Organise meals for someone</b></sub><br><sub><code>meal-train</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/pet-health-record.svg" width="44" height="44" alt="Pet health record"><br><sub><b>Pet health record</b></sub><br><sub><code>pet-health-record</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/advance-directive.svg" width="44" height="44" alt="Advance directive wishes"><br><sub><b>Advance directive wishes</b></sub><br><sub><code>advance-directive</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Government and official

Authorities, appeals, permits and your representatives. 19 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/benefits-appeal.svg" width="44" height="44" alt="Appeal a benefits decision"><br><sub><b>Appeal a benefits decision</b></sub><br><sub><code>benefits-appeal</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/parking-ticket-appeal.svg" width="44" height="44" alt="Appeal a parking ticket"><br><sub><b>Appeal a parking ticket</b></sub><br><sub><code>parking-ticket-appeal</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/tax-office-letter.svg" width="44" height="44" alt="Letter to the tax office"><br><sub><b>Letter to the tax office</b></sub><br><sub><code>tax-office-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/letter-to-representative.svg" width="44" height="44" alt="Letter to your representative"><br><sub><b>Letter to your representative</b></sub><br><sub><code>letter-to-representative</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/objection-to-decision.svg" width="44" height="44" alt="Object to an official decision"><br><sub><b>Object to an official decision</b></sub><br><sub><code>objection-to-decision</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/visa-invitation-letter.svg" width="44" height="44" alt="Visa invitation letter"><br><sub><b>Visa invitation letter</b></sub><br><sub><code>visa-invitation-letter</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/city-issue-report.svg" width="44" height="44" alt="Report a problem to the city"><br><sub><b>Report a problem to the city</b></sub><br><sub><code>city-issue-report</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/traffic-fine-appeal.svg" width="44" height="44" alt="Appeal a traffic fine"><br><sub><b>Appeal a traffic fine</b></sub><br><sub><code>traffic-fine-appeal</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/tax-payment-plan.svg" width="44" height="44" alt="Ask the tax office for a payment plan"><br><sub><b>Ask the tax office for a payment plan</b></sub><br><sub><code>tax-payment-plan</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/jury-duty-excuse.svg" width="44" height="44" alt="Ask to be excused from jury duty"><br><sub><b>Ask to be excused from jury duty</b></sub><br><sub><code>jury-duty-excuse</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/benefits-application.svg" width="44" height="44" alt="Benefits application letter"><br><sub><b>Benefits application letter</b></sub><br><sub><code>benefits-application</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/character-reference.svg" width="44" height="44" alt="Character reference for court"><br><sub><b>Character reference for court</b></sub><br><sub><code>character-reference</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/foi-request.svg" width="44" height="44" alt="Freedom of information request"><br><sub><b>Freedom of information request</b></sub><br><sub><code>foi-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/name-change-notice.svg" width="44" height="44" alt="Name change notice"><br><sub><b>Name change notice</b></sub><br><sub><code>name-change-notice</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/authority-noise-complaint.svg" width="44" height="44" alt="Noise complaint to the authorities"><br><sub><b>Noise complaint to the authorities</b></sub><br><sub><code>authority-noise-complaint</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/permit-application.svg" width="44" height="44" alt="Permit application letter"><br><sub><b>Permit application letter</b></sub><br><sub><code>permit-application</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/petition.svg" width="44" height="44" alt="Petition"><br><sub><b>Petition</b></sub><br><sub><code>petition</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/visa-cover-letter.svg" width="44" height="44" alt="Visa application cover letter"><br><sub><b>Visa application cover letter</b></sub><br><sub><code>visa-cover-letter</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/public-comment.svg" width="44" height="44" alt="Public comment"><br><sub><b>Public comment</b></sub><br><sub><code>public-comment</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Agreements and legal

Simple agreements, consents and formal notices; complex matters go to a lawyer. 19 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/demand-letter.svg" width="44" height="44" alt="Demand letter before court"><br><sub><b>Demand letter before court</b></sub><br><sub><code>demand-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/service-contract.svg" width="44" height="44" alt="Service contract"><br><sub><b>Service contract</b></sub><br><sub><code>service-contract</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/child-travel-consent.svg" width="44" height="44" alt="Travel consent for a child"><br><sub><b>Travel consent for a child</b></sub><br><sub><code>child-travel-consent</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/cease-and-desist.svg" width="44" height="44" alt="Cease and desist letter"><br><sub><b>Cease and desist letter</b></sub><br><sub><code>cease-and-desist</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/privacy-complaint.svg" width="44" height="44" alt="Complaint to a data protection authority"><br><sub><b>Complaint to a data protection authority</b></sub><br><sub><code>privacy-complaint</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/nda.svg" width="44" height="44" alt="Confidentiality agreement"><br><sub><b>Confidentiality agreement</b></sub><br><sub><code>nda</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/consent-form.svg" width="44" height="44" alt="Consent form"><br><sub><b>Consent form</b></sub><br><sub><code>consent-form</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/takedown-request.svg" width="44" height="44" alt="Copyright takedown request"><br><sub><b>Copyright takedown request</b></sub><br><sub><code>takedown-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/freelance-agreement.svg" width="44" height="44" alt="Freelance agreement"><br><sub><b>Freelance agreement</b></sub><br><sub><code>freelance-agreement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/harassment-report.svg" width="44" height="44" alt="Harassment report"><br><sub><b>Harassment report</b></sub><br><sub><code>harassment-report</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/incident-report.svg" width="44" height="44" alt="Incident report"><br><sub><b>Incident report</b></sub><br><sub><code>incident-report</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/breach-notice.svg" width="44" height="44" alt="Notice of breach of contract"><br><sub><b>Notice of breach of contract</b></sub><br><sub><code>breach-notice</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/power-of-attorney.svg" width="44" height="44" alt="Power of attorney"><br><sub><b>Power of attorney</b></sub><br><sub><code>power-of-attorney</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/settlement-offer.svg" width="44" height="44" alt="Settlement offer"><br><sub><b>Settlement offer</b></sub><br><sub><code>settlement-offer</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/small-claims-statement.svg" width="44" height="44" alt="Small claims statement"><br><sub><b>Small claims statement</b></sub><br><sub><code>small-claims-statement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/witness-statement.svg" width="44" height="44" alt="Witness statement"><br><sub><b>Witness statement</b></sub><br><sub><code>witness-statement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/event-waiver.svg" width="44" height="44" alt="Event participation waiver"><br><sub><b>Event participation waiver</b></sub><br><sub><code>event-waiver</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/will-wishes.svg" width="44" height="44" alt="Notes for my will"><br><sub><b>Notes for my will</b></sub><br><sub><code>will-wishes</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/model-release.svg" width="44" height="44" alt="Photo or model release"><br><sub><b>Photo or model release</b></sub><br><sub><code>model-release</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Community and clubs

Clubs, teams, neighbours, volunteers and causes. 16 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/fundraising-letter.svg" width="44" height="44" alt="Fundraising letter"><br><sub><b>Fundraising letter</b></sub><br><sub><code>fundraising-letter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/coach-to-parents.svg" width="44" height="44" alt="Coach's message to parents"><br><sub><b>Coach's message to parents</b></sub><br><sub><code>coach-to-parents</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/lost-and-found-notice.svg" width="44" height="44" alt="Lost and found notice"><br><sub><b>Lost and found notice</b></sub><br><sub><code>lost-and-found-notice</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/meeting-announcement.svg" width="44" height="44" alt="Meeting announcement"><br><sub><b>Meeting announcement</b></sub><br><sub><code>meeting-announcement</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/team-schedule.svg" width="44" height="44" alt="Team schedule message"><br><sub><b>Team schedule message</b></sub><br><sub><code>team-schedule</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/club-welcome.svg" width="44" height="44" alt="Welcome a new member"><br><sub><b>Welcome a new member</b></sub><br><sub><code>club-welcome</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/club-newsletter.svg" width="44" height="44" alt="Club newsletter"><br><sub><b>Club newsletter</b></sub><br><sub><code>club-newsletter</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/community-survey.svg" width="44" height="44" alt="Community survey"><br><sub><b>Community survey</b></sub><br><sub><code>community-survey</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/letter-to-the-editor.svg" width="44" height="44" alt="Letter to the editor"><br><sub><b>Letter to the editor</b></sub><br><sub><code>letter-to-the-editor</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/membership-renewal.svg" width="44" height="44" alt="Membership renewal reminder"><br><sub><b>Membership renewal reminder</b></sub><br><sub><code>membership-renewal</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/neighbourhood-alert.svg" width="44" height="44" alt="Neighbourhood alert"><br><sub><b>Neighbourhood alert</b></sub><br><sub><code>neighbourhood-alert</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/sponsor-thank-you.svg" width="44" height="44" alt="Thank a sponsor"><br><sub><b>Thank a sponsor</b></sub><br><sub><code>sponsor-thank-you</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/volunteer-thank-you.svg" width="44" height="44" alt="Thank the volunteers"><br><sub><b>Thank the volunteers</b></sub><br><sub><code>volunteer-thank-you</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/volunteer-signup.svg" width="44" height="44" alt="Volunteer sign-up"><br><sub><b>Volunteer sign-up</b></sub><br><sub><code>volunteer-signup</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/award-nomination.svg" width="44" height="44" alt="Award nomination"><br><sub><b>Award nomination</b></sub><br><sub><code>award-nomination</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/parish-bulletin.svg" width="44" height="44" alt="Parish or congregation bulletin"><br><sub><b>Parish or congregation bulletin</b></sub><br><sub><code>parish-bulletin</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>

### Travel

Bookings, hosts, plans and postcards. 12 icons.

<table>
<tr>
<td align="center" width="16%"><img src="svg/mark/digital-postcard.svg" width="44" height="44" alt="Digital postcard"><br><sub><b>Digital postcard</b></sub><br><sub><code>digital-postcard</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/hotel-booking-request.svg" width="44" height="44" alt="Hotel booking request"><br><sub><b>Hotel booking request</b></sub><br><sub><code>hotel-booking-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/host-thank-you.svg" width="44" height="44" alt="Thank your host"><br><sub><b>Thank your host</b></sub><br><sub><code>host-thank-you</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/tour-inquiry.svg" width="44" height="44" alt="Tour or activity inquiry"><br><sub><b>Tour or activity inquiry</b></sub><br><sub><code>tour-inquiry</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/travel-itinerary.svg" width="44" height="44" alt="Travel itinerary to share"><br><sub><b>Travel itinerary to share</b></sub><br><sub><code>travel-itinerary</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/group-trip-plan.svg" width="44" height="44" alt="Group trip plan"><br><sub><b>Group trip plan</b></sub><br><sub><code>group-trip-plan</code></sub></td>
</tr>
<tr>
<td align="center" width="16%"><img src="svg/mark/trip-invitation.svg" width="44" height="44" alt="Invite friends on a trip"><br><sub><b>Invite friends on a trip</b></sub><br><sub><code>trip-invitation</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/rental-car-dispute.svg" width="44" height="44" alt="Rental car damage dispute"><br><sub><b>Rental car damage dispute</b></sub><br><sub><code>rental-car-dispute</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/guest-review.svg" width="44" height="44" alt="Review a stay"><br><sub><b>Review a stay</b></sub><br><sub><code>guest-review</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/hotel-special-request.svg" width="44" height="44" alt="Special request to a hotel"><br><sub><b>Special request to a hotel</b></sub><br><sub><code>hotel-special-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/house-swap-request.svg" width="44" height="44" alt="House swap request"><br><sub><b>House swap request</b></sub><br><sub><code>house-swap-request</code></sub></td>
<td align="center" width="16%"><img src="svg/mark/embassy-letter.svg" width="44" height="44" alt="Letter to an embassy"><br><sub><b>Letter to an embassy</b></sub><br><sub><code>embassy-letter</code></sub></td>
</tr>
</table>

<p align="right"><sub><a href="#gallery">Back to the gallery index</a></sub></p>
<!-- gallery:end -->

## Metadata

[`icons.json`](icons.json) describes the set and every icon:

```json
{
  "name": "birthday-card",
  "title": "Birthday card",
  "category": "cards",
  "categoryTitle": "Cards and greetings",
  "tier": "essential",
  "kind": "card",
  "channels": ["card-page", "sms", "whatsapp", "email", "print"],
  "tags": ["cake", "candle", "happy birthday", "celebrate", "party", "age", "wishes", "gift"],
  "unicode": "e019"
}
```

| Field | Meaning |
|---|---|
| `name` | The icon's name: file name, sprite id, CSS class (`ti-<name>`) and ligature |
| `title` | A short English title |
| `category` | One of the 18 categories (`categories` at the top of the file) |
| `tier` | How often people need this document: `essential`, `daily`, `special` or `rare` |
| `kind` | The kind of document: `letter`, `email`, `message`, `document`, `card`, `post`, `invitation`, `speech`, … |
| `channels` | How it is usually sent: `email`, `sms`, `whatsapp`, `pdf`, `print`, `post`, `link`, … |
| `tags` | Search keywords |
| `unicode` | The webfont code point (hex) |

## Names and versions

Icon names are the document type keys Taddi uses, in lowercase kebab-case (`notice-to-vacate`, `school-absence-note`).
Names and code points never change within a major version, and new icons are added at the end. Version history is in
[CHANGELOG.md](CHANGELOG.md).

## Build from source

The SVG files in `svg/outline` and the metadata in `icons.json` are the source; everything else is generated.

```sh
npm install                                  # sharp, for PNG, WebP, AVIF and ICO
python3 -m pip install -r scripts/requirements.txt   # fontTools, skia-pathops, picosvg, for the webfont
npm run build                                # font, images, then the README gallery and banner
```

| Script | Makes |
|---|---|
| [`scripts/build-font.py`](scripts/build-font.py) | Turns every line into a filled outline, merges it into one glyph, and writes WOFF2, WOFF, TTF, the CSS, the SCSS map and the code point JSON |
| [`scripts/build-images.mjs`](scripts/build-images.mjs) | The sprite, the gradient and mark SVGs, all PNG, WebP and AVIF sizes and the ICO files |
| [`scripts/build-docs.mjs`](scripts/build-docs.mjs) | The README banner, category table and gallery, and `font/demo.html` |

## Contributing

Found an icon that could read more clearly, or a kind of document that is missing? Open an
[issue](https://github.com/taddicons/icons/issues). New drawings follow the [style guide](#style-guide): the 24
grid, the 1.35 line, round caps and joins, outline only, at most about six shapes, and readable at 16 px.

## License

Taddicons is released under the [MIT License](LICENSE). Use the icons in personal and commercial projects, change
them and share them; keep the copyright notice with copies of the set. The Taddi name and logo are trademarks of Taddi
and are not covered by this license.

---

<p align="center">
  <a href="https://taddi.app">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="assets/taddi-logo-light.png">
      <img src="assets/taddi-logo.png" alt="Taddi" height="32">
    </picture>
  </a>
</p>

<p align="center"><sub>Made by <a href="https://taddi.app">Taddi</a>, one app to communicate online.<br>
Copyright © 2026 Taddi. Taddicons is released under the <a href="LICENSE">MIT License</a>. Taddi is a product by <a href="https://avonao.com">Avonao</a>.</sub></p>
