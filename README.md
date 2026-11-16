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
  <b><!-- count -->15,887<!-- /count --> outline icons in one calm style.</b><br>
  Every interface symbol, an icon for every kind of document people write, and the specialist icons other sets leave out,<br>
  from lab glassware and dental tools to plumbing valves and sailing knots. Free under the MIT License.
</p>

<p align="center">
  <a href="https://taddicons.com"><img src="https://img.shields.io/badge/icons-15%2C887-f25e3a?style=flat-square" alt="15,887 icons"></a>
  <a href="#formats"><img src="https://img.shields.io/badge/formats-SVG%20%C2%B7%20font%20%C2%B7%20PNG%20%C2%B7%20WebP%20%C2%B7%20AVIF%20%C2%B7%20ICO-444?style=flat-square" alt="Formats"></a>
  <a href="CHANGELOG.md"><img src="https://img.shields.io/badge/version-0.3.1-444?style=flat-square" alt="Version 0.3.1"></a>
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

Taddicons started as one icon for every kind of document [Taddi](https://taddi.app) writes (a "Tad"). Version 2 grows
it into a complete icon set: the interface icons every app needs, and thousands of specialist icons for the work and
life people actually write about.

- **<!-- count -->15,887<!-- /count --> icons in <!-- categories-count -->177<!-- /categories-count --> categories, in eight sections.** Documents and messages; interface (arrows, controls,
  text, files, communication, devices, media, design, code, charts, security, time, shapes, maths); business (office,
  commerce, finance, logistics, property); people (people, hands, accessibility, emoji, celebrations, faith, society);
  everyday life (health, dental, veterinary, beauty, baby, household, kitchen, food, clothing, education); science and
  leisure (science, the lab, sports, games, instruments, photography); the world (animals, nature, the outdoors,
  gardening, farming, weather, energy, transport, aviation, maritime, maps, buildings); and making things (tools, the
  trades, electronics, industry, crafts).
- **One style throughout.** A 24 px grid, a thin 1.35 line (never a hairline), round caps and joins, soft corners and
  warm, simple shapes. Calm and friendly, never cartoonish or technical.
- **Families you can read.** Cards are a card set down at a slight angle, invitations a card rising from an envelope,
  social posts a rounded square, and formal documents a page with a folded corner. The picture inside tells you the topic.
- **Every format you need.** SVG files in three colourings, an SVG sprite, a webfont with CSS classes and ligatures, and
  PNG, WebP, AVIF and ICO files in five sizes (in the [release downloads](https://github.com/taddicons/icons/releases/tag/v0.3.1)).
- **Made to be found.** Every icon has a section, a category and search keywords in [`icons.json`](icons.json); the
  document icons also have a frequency tier, a document kind and the channels they are sent on.
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

One request for all <!-- count -->15,887<!-- /count --> icons. Each icon is a `<symbol>` with the icon's name as its id; the line style comes from the
`<svg>` that uses it, so you can change colour and weight with CSS.

```html
<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.35"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <use href="/sprite/taddicons.svg#refund-request"/>
</svg>
```

### Webfont

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/taddicons/icons@0.3.1/font/taddicons.min.css">

<i class="ti ti-wedding-invitation"></i>
<i class="ti ti-2x ti-gradient ti-thank-you-note"></i>
<i class="ti ti-mark ti-cover-letter"></i>
```

### Images and favicons

The SVGs work as images anywhere, in two ready-made colourings besides the outline: `gradient` (the lines in the Taddi
gradient on a transparent background) and `mark` (the official mark: the gradient icon on a light circle):

```html
<img src="https://cdn.jsdelivr.net/gh/taddicons/icons@0.3.1/svg/mark/moving-announcement.svg" width="64" height="64" alt="Moving announcement">
```

PNG, WebP and AVIF at 32 to 512 px and an ICO for every icon are in the [release downloads](https://github.com/taddicons/icons/releases/tag/v0.3.1), one ZIP per format,
sorted as `<format>/<colouring>/<size>/<name>.<ext>`.

Every file in this repository is on the jsDelivr CDN at
`https://cdn.jsdelivr.net/gh/taddicons/icons@0.3.1/<path>`, for example `.../svg/outline/lease-agreement.svg`.

## Formats

| Folder | Format | Colouring | Sizes | Best for |
|---|---|---|---|---|
| [`svg/outline`](svg/outline) | SVG | `currentColor` lines | scalable, 24 px grid | Websites and apps; any colour through CSS |
| [`svg/gradient`](svg/gradient) | SVG | Taddi gradient lines, transparent | scalable | Design tools, presentations |
| [`svg/mark`](svg/mark) | SVG | Gradient icon on the light circle | scalable, 40 px grid | Avatars, list markers, docs |
| [`sprite`](sprite) | SVG sprite | from the page | scalable | Many icons on one page with one request |
| [`font`](font) | WOFF2, WOFF, TTF, CSS, SCSS, JSON | text colour, or the gradient helpers | scalable | `<i class="ti ti-…">`, ligatures |
| [Release](https://github.com/taddicons/icons/releases/tag/v0.3.1) `png` | PNG | `gradient`, `mark` | 32, 64, 128, 256, 512 | Email, documents, anything without SVG |
| [Release](https://github.com/taddicons/icons/releases/tag/v0.3.1) `webp` | WebP (lossless) | `gradient`, `mark` | 32, 64, 128, 256, 512 | Small files for the web |
| [Release](https://github.com/taddicons/icons/releases/tag/v0.3.1) `avif` | AVIF | `gradient`, `mark` | 32, 64, 128, 256, 512 | The smallest files for modern browsers |
| [Release](https://github.com/taddicons/icons/releases/tag/v0.3.1) `ico` | ICO (PNG frames) | `mark` | 16, 24, 32, 48, 64, 128, 256 in one file | Favicons, Windows |
| [`icons.json`](icons.json) | JSON | | | Names, titles, sections, categories, keywords, code points |
| [`gallery`](gallery) | Markdown, HTML | | | One page per category, and the whole set on one searchable page |

With <!-- count -->15,887<!-- /count --> icons the raster files (about a gigabyte) no longer live in the repository: each format is one ZIP in the
[release downloads](https://github.com/taddicons/icons/releases/tag/v0.3.1), sorted as `<format>/<colouring>/<size>/<name>.<ext>`:

```
taddicons/
├── svg/
│   ├── outline/        one .svg per icon, currentColor
│   ├── gradient/       one .svg per icon
│   └── mark/           one .svg per icon
├── sprite/taddicons.svg
├── font/               taddicons.woff2 · .woff · .ttf · .css · .min.css · .scss · .json · demo.html
├── gallery/          <category>.md pages and index.html, the whole set
├── icons.json          metadata
└── scripts/            the build

release downloads (one ZIP each):
├── png/
│   ├── gradient/       32/ 64/ 128/ 256/ 512/
│   └── mark/           32/ 64/ 128/ 256/ 512/
├── webp/               same layout as png/
├── avif/               same layout as png/
└── ico/                one .ico per icon
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

## Message emoji

Every icon also comes as a message emoji: a white sticker (the shape filled and edged in white) with the lines in the
Taddi gradient. It reads on light, coloured and dark chat bubbles alike. Taddi uses these in its messages.

| File | What it is |
|---|---|
| `svg/emoji/<name>.svg` | One emoji, viewBox `-3 -3 30 30`, no shadow (add your own, for example a 0.5 px drop shadow) |
| `sprite/taddicons-emoji.svg` | Every emoji as a `<symbol>`, sharing one gradient. Inline it in the page and use `<svg width="28" height="28"><use href="#face-smile"/></svg>` |
| `emoji.json` | The picker groups (faces, hands, people, celebrations, food, animals, nature, travel, activities, objects, Taddi), and per emoji its title, keywords and the standard emoji it stands for when there is one |
| Release `png` / `webp` `emoji/` | 32, 64, 96 and 144 px with a soft shadow, for notifications and emails |

A message stores an emoji as a short code, `:face-tears-of-joy:`. Where the sticker cannot be shown, use the `unicode`
field from `emoji.json` (😂), or the title.

Taddi swaps emoji typed on a keyboard for their Taddicons match, so a thread looks the same throughout. `fromUnicode`
in `emoji.json` maps each standard emoji (without U+FE0F) to the one Taddicons emoji that replaces it; `swap` describes
the lookup (skin tones and gendered people fall back to the neutral form). Emoji with no match stay as typed.

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
### Documents & messages

One icon for every kind of document Taddi writes. 10,447 icons.

| | Category | Icons | What it covers |
|:-:|---|--:|---|
| <img src="svg/mark/information-request.svg" width="28" height="28" alt=""> | [Everyday messages](gallery/messages.md) | 90 | Quick notes, replies and emails for the day-to-day. |
| <img src="svg/mark/anniversary-card.svg" width="28" height="28" alt=""> | [Cards and greetings](gallery/cards.md) | 90 | Designed digital cards for every occasion, sent as a link or printed. |
| <img src="svg/mark/birthday-party-invitation.svg" width="28" height="28" alt=""> | [Invitations and events](gallery/invitations.md) | 90 | Designed invitations with their own RSVP page, plus every message around an event. |
| <img src="svg/mark/lost-pet-post.svg" width="28" height="28" alt=""> | [Social posts](gallery/social.md) | 90 | Posts with a picture for the networks you connected, written for regular people, not influencers. |
| <img src="svg/mark/apology.svg" width="28" height="28" alt=""> | [Life events and speeches](gallery/life.md) | 90 | Announcements, letters and the words for the big moments. |
| <img src="svg/mark/babysitter-instructions.svg" width="28" height="28" alt=""> | [Family and home](gallery/family.md) | 92 | Notes, plans and instructions that keep a household running. |
| <img src="svg/mark/data-deletion-request.svg" width="28" height="28" alt=""> | [Letters to companies](gallery/consumer.md) | 90 | Complaints, refunds, cancellations and your consumer rights, done properly. |
| <img src="svg/mark/payment-plan-request.svg" width="28" height="28" alt=""> | [Money and bills](gallery/money.md) | 90 | Invoices, reminders, payment plans, claims and money between friends. |
| <img src="svg/mark/deposit-return-request.svg" width="28" height="28" alt=""> | [Home and renting](gallery/housing.md) | 90 | Landlords, tenants, neighbours and moving. |
| <img src="svg/mark/job-offer-acceptance.svg" width="28" height="28" alt=""> | [Work and jobs](gallery/work.md) | 90 | Applications, requests and messages at work. |
| <img src="svg/mark/appointment-reminder.svg" width="28" height="28" alt=""> | [Small business and side hustle](gallery/business.md) | 90 | Everything a small shop, freelancer or club treasurer sends to customers. |
| <img src="svg/mark/marketplace-listing.svg" width="28" height="28" alt=""> | [Buy and sell](gallery/selling.md) | 92 | Listings and messages for selling and buying things online. |
| <img src="svg/mark/extension-request.svg" width="28" height="28" alt=""> | [School and learning](gallery/school.md) | 90 | For students, parents and teachers. |
| <img src="svg/mark/medical-bill-dispute.svg" width="28" height="28" alt=""> | [Health and care](gallery/health.md) | 90 | Doctors, records, insurance and caring for someone. |
| <img src="svg/mark/benefits-appeal.svg" width="28" height="28" alt=""> | [Government and official](gallery/government.md) | 90 | Authorities, appeals, permits and your representatives. |
| <img src="svg/mark/demand-letter.svg" width="28" height="28" alt=""> | [Agreements and legal](gallery/legal.md) | 90 | Simple agreements, consents and formal notices; complex matters go to a lawyer. |
| <img src="svg/mark/fundraising-letter.svg" width="28" height="28" alt=""> | [Community and clubs](gallery/community.md) | 93 | Clubs, teams, neighbours, volunteers and causes. |
| <img src="svg/mark/digital-postcard.svg" width="28" height="28" alt=""> | [Travel](gallery/travel.md) | 90 | Bookings, hosts, plans and postcards. |
| <img src="svg/mark/pinned-intro-post.svg" width="28" height="28" alt=""> | [Social media](gallery/social-media.md) | 90 | Posts, replies, threads and captions for the networks, written for regular people, not influencers. |
| <img src="svg/mark/recruiter-reply.svg" width="28" height="28" alt=""> | [Jobs and careers](gallery/jobs-careers.md) | 90 | Everything between looking for work and leaving it: outreach, follow-ups, negotiation, references and moves. |
| <img src="svg/mark/supervisor-meeting-request.svg" width="28" height="28" alt=""> | [Academia and research](gallery/academia.md) | 90 | Students, supervisors and researchers: requests, extensions, appeals, applications and thanks. |
| <img src="svg/mark/brand-collab-pitch.svg" width="28" height="28" alt=""> | [Creators and makers](gallery/creators.md) | 90 | Pitches, collaboration asks, sponsor replies and fan messages for people who make things and share them. |
| <img src="svg/mark/venue-booking-enquiry.svg" width="28" height="28" alt=""> | [Events and tickets](gallery/events-tickets.md) | 90 | Organising, selling and attending events: tickets, venues, vendors, speakers and refunds. |
| <img src="svg/mark/naming-ceremony-invite.svg" width="28" height="28" alt=""> | [Faith and ceremonies](gallery/faith-ceremonies.md) | 90 | Messages for religious and cultural ceremonies of every tradition, written with respect and without assuming one. |
| <img src="svg/mark/trial-session-invite.svg" width="28" height="28" alt=""> | [Sports and clubs](gallery/sports-clubs.md) | 90 | Teams, clubs and hobby groups: sign-ups, fixtures, fees, kit, coaches and club news. |
| <img src="svg/mark/save-the-date-message.svg" width="28" height="28" alt=""> | [Weddings](gallery/weddings.md) | 90 | From the engagement to the thank-you: invitations around the day, vendors, speeches and guest messages. |
| <img src="svg/mark/vet-bill-question.svg" width="28" height="28" alt=""> | [Pets](gallery/pets.md) | 90 | Vets, boarding, adoption, lost and found, and everything else for the animal at home. |
| <img src="svg/mark/new-neighbour-welcome.svg" width="28" height="28" alt=""> | [Neighbourhood and environment](gallery/neighbourhood.md) | 90 | Neighbours, streets, councils and the local environment: asking, reporting and organising. |
| <img src="svg/mark/garage-quote-request.svg" width="28" height="28" alt=""> | [Cars and transport](gallery/cars-transport.md) | 90 | Buying, selling, repairing and insuring a vehicle, and getting around: garages, fines, trains, flights and rides. |
| <img src="svg/mark/account-recovery-request.svg" width="28" height="28" alt=""> | [Accounts and tech](gallery/accounts-tech.md) | 90 | Getting back into accounts, fixing devices and asking a company what it holds about you. |
| <img src="svg/mark/workplace-adjustment-request.svg" width="28" height="28" alt=""> | [Disability and access](gallery/disability-access.md) | 90 | Asking for what you need to take part, in plain words, with dignity and no jargon. |
| <img src="svg/mark/first-late-payment-chaser.svg" width="28" height="28" alt=""> | [Small business](gallery/small-business.md) | 90 | Customers, suppliers and staff of a small business: quotes, invoices, policies and polite firmness. |
| <img src="svg/mark/care-home-places-and-fees.svg" width="28" height="28" alt=""> | [Elder care and carers](gallery/elder-care.md) | 90 | Looking after an older person: care homes, carers, appointments, finances and family talks. |
| <img src="svg/mark/op-ed-pitch.svg" width="28" height="28" alt=""> | [Press and public voice](gallery/press.md) | 90 | Talking to journalists, editors and the public: pitches, corrections, statements and letters to the editor. |
| <img src="svg/mark/rental-host-welcome.svg" width="28" height="28" alt=""> | [Hospitality and stays](gallery/hospitality.md) | 90 | Hosting and staying: guests, rentals, restaurants, hotels and holiday homes. |
| <img src="svg/mark/volunteer-role-description.svg" width="28" height="28" alt=""> | [Nonprofits and volunteering](gallery/nonprofits.md) | 90 | Charities, volunteers and community groups: asking for help, thanking and reporting. |
| <img src="svg/mark/literary-agent-query.svg" width="28" height="28" alt=""> | [Arts and publishing](gallery/arts-publishing.md) | 90 | Writers, artists and musicians: submissions, queries, commissions, bios and thank-yous. |
| <img src="svg/mark/dating-app-first-message.svg" width="28" height="28" alt=""> | [Dating and relationships](gallery/dating-relationships.md) | 90 | Starting, deepening, repairing and ending relationships, with honesty and kindness. |
| <img src="svg/mark/tell-family-of-death.svg" width="28" height="28" alt=""> | [Grief and memorial](gallery/grief-memorial.md) | 90 | Words for loss and remembering: telling people, asking for help, and honouring someone. |
| <img src="svg/mark/compare-quotes-reply.svg" width="28" height="28" alt=""> | [Trades and home repairs](gallery/trades-documents.md) | 90 | Hiring, briefing and paying builders, plumbers, electricians and other trades, and what to do when it goes wrong. |
| <img src="svg/mark/lunar-new-year-greeting.svg" width="28" height="28" alt=""> | [Celebrations of every culture](gallery/celebrations-documents.md) | 90 | Festivals, rites of passage and milestones from many cultures, written so anyone can send them to anyone. |
| <img src="svg/mark/dentist-appointment-request.svg" width="28" height="28" alt=""> | [Health appointments and care](gallery/health-appointments.md) | 90 | Letters and messages to doctors, dentists, hospitals and clinics: booking, results, records, bills, access needs, thanks and complaints. |
| <img src="svg/mark/tell-friend-struggling.svg" width="28" height="28" alt=""> | [Mental health and support](gallery/mental-health-support.md) | 90 | Gentle words for asking for help, checking in on others, therapy and work logistics, boundaries and recovery, without diagnosing anyone. |
| <img src="svg/mark/nanny-trial-day-brief.svg" width="28" height="28" alt=""> | [Parenting babies and kids](gallery/parenting-babies-kids.md) | 90 | Notes for sitters, nurseries, teachers, doctors and other parents about the small children in your care, plus house rules and handover logistics. |
| <img src="svg/mark/curfew-agreement.svg" width="28" height="28" alt=""> | [Parenting and teenagers](gallery/parenting-teens.md) | 90 | Notes to and about teens: house rules, school, driving, jobs, hard talks, apologies, trust and consequences. |
| <img src="svg/mark/report-bullying-to-school.svg" width="28" height="28" alt=""> | [School and parents](gallery/school-parents.md) | 90 | Notes between families and schools: bullying, support, meetings, trips, uniforms, appeals, moves and class parent messages. |
| <img src="svg/mark/resit-request.svg" width="28" height="28" alt=""> | [Student life](gallery/student-life.md) | 90 | Everyday letters and messages for students: exams, grades, housing, roommates, internships, money, thesis work and clubs. |
| <img src="svg/mark/home-offer-letter.svg" width="28" height="28" alt=""> | [Buying and selling a home](gallery/home-buying-selling.md) | 90 | Offers, viewings, agents, surveys, mortgages, moving dates, closing day and the welcome to the next owner. |
| <img src="svg/mark/meter-reading-submission.svg" width="28" height="28" alt=""> | [Home repairs and utilities](gallery/home-repairs-utilities.md) | 90 | Utility accounts, outages, bills, contractors, warranty and planning matters for the home. |
| <img src="svg/mark/mould-damp-report.svg" width="28" height="28" alt=""> | [Renting as a tenant](gallery/renting-tenants.md) | 90 | Letters and messages for renters: problems at home, rent and deposits, moving in and out, flatmates and the building. |
| <img src="svg/mark/claim-status-chaser.svg" width="28" height="28" alt=""> | [Insurance and claims](gallery/insurance-claims.md) | 90 | Claims, disputes, policy questions, renewals and cancelling, for car, home, travel, health and life cover. |
| <img src="svg/mark/pregnancy-news-to-family.svg" width="28" height="28" alt=""> | [Pregnancy and birth](gallery/pregnancy-birth.md) | 90 | Announcements, midwife and hospital notes, birth plans, leave, showers, thank-yous, visitors, sensitive loss and fertility notes, and adoption and surrogacy logistics. |
| <img src="svg/mark/applicant-approval.svg" width="28" height="28" alt=""> | [Being a landlord or property manager](gallery/landlords-property.md) | 90 | Letters and messages for landlords and property managers, from applicants and rent to repairs, notices, renewals and goodbyes. |
| <img src="svg/mark/unknown-transaction-query.svg" width="28" height="28" alt=""> | [Banking, debt and credit](gallery/banking-debt.md) | 90 | Letters and messages for your bank, for people you owe, for people who owe you, and for credit records. |
| <img src="svg/mark/financial-support-letter-visitor.svg" width="28" height="28" alt=""> | [Immigration and visas](gallery/immigration-visas.md) | 90 | Letters and messages for visa and residency applications, supporting documents, delays, appeals and settling into a new country. |
| <img src="svg/mark/trip-cost-split-message.svg" width="28" height="28" alt=""> | [Travel and trips](gallery/travel-trips.md) | 90 | Planning trips with others, writing to hosts and hotels, sorting out problems on the road, travelling with extra needs, and sharing the trip afterwards. |
| <img src="svg/mark/flight-delay-expenses-claim.svg" width="28" height="28" alt=""> | [Airlines, hotels and holiday complaints](gallery/holiday-complaints.md) | 90 | Letters and messages to put right flight, hotel, package holiday, rental car and cruise problems, and to thank staff who helped. |
| <img src="svg/mark/faulty-item-complaint.svg" width="28" height="28" alt=""> | [Consumer rights and refunds](gallery/consumer-refunds.md) | 90 | Letters and messages for getting your money or a fix when goods, deliveries, adverts or subscriptions go wrong, plus answers for small sellers. |
| <img src="svg/mark/item-still-available.svg" width="28" height="28" alt=""> | [Online shopping and marketplaces](gallery/online-marketplaces.md) | 90 | Messages for buying and selling on marketplaces: questions, offers, pickups, problems, feedback and scam reports. |
| <img src="svg/mark/roaming-charge-complaint.svg" width="28" height="28" alt=""> | [Phone, internet and subscriptions](gallery/telecoms-subscriptions.md) | 90 | Plans, roaming, bills, outages, number porting, streaming and gym memberships, free trials, price rises, data privacy and moving home services. |
| <img src="svg/mark/tax-deadline-extension-request.svg" width="28" height="28" alt=""> | [Taxes and benefits](gallery/taxes-benefits.md) | 90 | Letters and messages for tax offices, accountants, self-employed records, benefits, pensions and child support. |
| <img src="svg/mark/court-office-question.svg" width="28" height="28" alt=""> | [Small claims and everyday legal](gallery/small-claims-legal.md) | 90 | Plain letters and notes for everyday disputes: getting ready for small claims, settling, mediation, contracts and talking to a lawyer, with no legal advice. |
| <img src="svg/mark/sick-leave-extension.svg" width="28" height="28" alt=""> | [Workplace for employees](gallery/workplace-employees.md) | 90 | Time off, pay problems, concerns and complaints, redundancy, and everyday notes to your boss and your colleagues. |
| <img src="svg/mark/praise-team-member-email.svg" width="28" height="28" alt=""> | [Managers and leaders](gallery/managers-leadership.md) | 90 | Feedback, warnings, hiring decisions, team news, one-to-ones and speeches for people who lead a team. |
| <img src="svg/mark/job-advert-listing.svg" width="28" height="28" alt=""> | [Hiring and recruiting](gallery/hiring-recruiting.md) | 90 | Notes for both sides of a hire: job ads, outreach, interviews, offers, references, starting a job and moving inside a company. |
| <img src="svg/mark/freelance-discovery-questions.svg" width="28" height="28" alt=""> | [Freelancers and clients](gallery/freelancers-clients.md) | 90 | Everything a freelancer writes to clients, from first enquiry and kickoff to scope, money, boundaries, handover and referrals. |
| <img src="svg/mark/async-status-update.svg" width="28" height="28" alt=""> | [Remote work and team coordination](gallery/remote-teams.md) | 90 | Clear updates, handoffs, meeting notes and team habits for people who work apart from each other. |
| <img src="svg/mark/support-apology-reply.svg" width="28" height="28" alt=""> | [Customer support replies](gallery/customer-support-replies.md) | 90 | Clear, kind replies to customers: apologies, delays, refunds, outages, tough moments, help and goodbyes. |
| <img src="svg/mark/book-club-pick-suggestion.svg" width="28" height="28" alt=""> | [Hobbies and clubs](gallery/hobbies-clubs.md) | 90 | Notes, posts and papers for book clubs, choirs, running groups, meetups, swaps, workshops and competitions. |
| <img src="svg/mark/food-bank-rota-message.svg" width="28" height="28" alt=""> | [Volunteering and community](gallery/volunteering-community.md) | 90 | Recruiting and thanking volunteers, shift notes, food banks, mutual aid, charity runs, faith group logistics, clean-ups, neighbour help and committee papers. |
| <img src="svg/mark/cold-intro-email.svg" width="28" height="28" alt=""> | [Sales and marketing outreach](gallery/sales-outreach.md) | 90 | Cold and warm outreach, follow-ups, demos, proposals, price talks, renewals, partner pitches, events and customer proof. |
| <img src="svg/mark/councillor-ward-letter.svg" width="28" height="28" alt=""> | [Civic and local government](gallery/civic-local-government.md) | 90 | Letters, speeches and requests to councillors, councils, libraries, school boards and election helpers, so ordinary people can be heard where they live. |
| <img src="svg/mark/guild-recruitment-post.svg" width="28" height="28" alt=""> | [Gaming and online communities](gallery/gaming-online-communities.md) | 90 | Guild and clan notes, moderator messages, ban appeals, tournaments, streamer and fan posts, game refunds and parent questions about games. |
| <img src="svg/mark/land-access-request.svg" width="28" height="28" alt=""> | [Rural, farming and outdoors](gallery/rural-farming-outdoors.md) | 90 | Notes for land, farm sales, animals, seasonal workers, permits, camping, trails, bad weather and country neighbours. |
| <img src="svg/mark/apology-for-missing-event.svg" width="28" height="28" alt=""> | [Apologies and difficult conversations](gallery/difficult-conversations.md) | 90 | Saying sorry, setting limits, giving bad news and mending things with the people who matter. |
| <img src="svg/mark/storm-check-in-message.svg" width="28" height="28" alt=""> | [Emergencies and disasters](gallery/emergencies-disasters.md) | 90 | Words for the worst days: checking on people, leaving home, claims, missing persons, asking for help, thanking those who came and rebuilding afterwards. |
| <img src="svg/mark/make-plans-message.svg" width="28" height="28" alt=""> | [Friendship and social life](gallery/friendship-social-life.md) | 90 | Making and changing plans, saying sorry, staying close from far away, hosting, and looking after friendships. |
| <img src="svg/mark/wedding-rsvp-with-food-needs.svg" width="28" height="28" alt=""> | [Wedding guests and bridal party](gallery/wedding-guests.md) | 90 | Notes from the guest side of a wedding: replies, travel and stay questions, gifts, party planning, toasts and thank-yous. |
| <img src="svg/mark/tell-utilities-of-death.svg" width="28" height="28" alt=""> | [Estates, wills and executors](gallery/estates-probate.md) | 90 | Notes and letters for the practical, legal and family tasks that follow a death, from telling providers to clearing a house. |
| <img src="svg/mark/tell-parents-separating.svg" width="28" height="28" alt=""> | [Separation and divorce admin](gallery/divorce-separation.md) | 90 | The practical words for a separation: telling people, sharing money and homes, child schedules, professionals, records and calm messages to an ex. |
| <img src="svg/mark/letter-to-deployed-partner.svg" width="28" height="28" alt=""> | [Military and veterans](gallery/military-veterans.md) | 90 | Letters and notes for deployed service members, their families and veterans, plus benefits, records, housing and remembrance. |
| <img src="svg/mark/residence-registration-request.svg" width="28" height="28" alt=""> | [Living abroad and expats](gallery/expats-abroad.md) | 90 | Papers, banks, schools, doctors, homes and people when you have moved to another country. |
| <img src="svg/mark/language-partner-first-message.svg" width="28" height="28" alt=""> | [Languages and cultural exchange](gallery/language-exchange.md) | 90 | Notes for language partners, tutors, penpals, host families, study abroad, translators, cultural events and learning groups. |
| <img src="svg/mark/offer-to-share-data.svg" width="28" height="28" alt=""> | [Research and science collaboration](gallery/research-science.md) | 90 | Notes between researchers: sharing data and code, answering reviewers, grants, abstracts, ethics questions, credit and field work. |
| <img src="svg/mark/class-newsletter-teacher.svg" width="28" height="28" alt=""> | [Teachers and educators](gallery/teachers-educators.md) | 90 | Notes to parents, newsletters, praise and concern notes, report comments, trip letters and the everyday writing of a classroom. |
| <img src="svg/mark/clinic-appointment-reminder.svg" width="28" height="28" alt=""> | [Healthcare professionals](gallery/healthcare-professionals.md) | 90 | Notes from clinicians and care staff: reminders, referrals, handovers, results, rotas, student placements, thanks and replies to complaints. |
| <img src="svg/mark/window-sale-sign.svg" width="28" height="28" alt=""> | [Shops and market stalls](gallery/retail-markets.md) | 90 | Notes for shop owners and stallholders: sales, loyalty, apologies, suppliers, returns, fair applications and shop-local campaigns. |
| <img src="svg/mark/homeowner-selling-outreach.svg" width="28" height="28" alt=""> | [Real estate agents and brokers](gallery/real-estate-agents.md) | 90 | Messages an agent sends to owners, buyers and tenants, from first contact and viewings to offers, hard news and closing day. |
| <img src="svg/mark/supplier-order-email.svg" width="28" height="28" alt=""> | [Restaurants, cafes and food business](gallery/food-business.md) | 90 | Orders, quotes, bookings, allergy information, staff messages, reviews and market stalls for people who feed others for a living. |
| <img src="svg/mark/ep-client-brief-questions.svg" width="28" height="28" alt=""> | [Event planning professionals](gallery/event-pros.md) | 90 | Messages an event planner sends to clients, venues and vendors, from the first proposal to the post-event report. |
| <img src="svg/mark/team-list-announcement.svg" width="28" height="28" alt=""> | [Coaches and sports organisers](gallery/coaches-sports.md) | 90 | Team lists, parent letters, travel and tournament plans, injuries, money, praise and hard talks for people who run a team or club. |
| <img src="svg/mark/gig-confirmation-note.svg" width="28" height="28" alt=""> | [Musicians and performers](gallery/musicians-performers.md) | 90 | Gigs, riders, band life, lessons, recitals, releases and the money side of making music. |
| <img src="svg/mark/oss-bug-report.svg" width="28" height="28" alt=""> | [Open source and developers](gallery/open-source-dev.md) | 90 | Kind, clear notes for issues, pull requests, releases, security reports, community rules, funding and handovers in shared software projects. |
| <img src="svg/mark/gift-tag-note.svg" width="28" height="28" alt=""> | [Gifts and giving](gallery/gifts-giving.md) | 90 | Notes to go with gifts, thank-yous, kind ways to say no or return a gift, group collections, work gifts and gifts to charity. |
| <img src="svg/mark/ask-neighbour-tech-help.svg" width="28" height="28" alt=""> | [Tech help for family and seniors](gallery/tech-help-seniors.md) | 90 | Notes for asking for tech help, warning relatives about scams, explaining steps simply, reassuring nervous beginners and thanking the people who help. |
| <img src="svg/mark/shoot-brief-questions.svg" width="28" height="28" alt=""> | [Photographers, filmmakers and clients](gallery/photo-film-clients.md) | 90 | Briefs, quotes, shoot plans, permissions, delivery, revisions and festival entries for people who make photos and films and the people who hire them. |
| <img src="svg/mark/at-kuendigung-mietvertrag.svg" width="28" height="28" alt=""> | [Official letters, Austria](gallery/official-at.md) | 90 | The official letters people in Austria most often need: tenancy, work, tax and banks, insurance, consumer rights, authorities, family and neighbours, written in correct Austrian German. |
| <img src="svg/mark/au-end-lease-notice.svg" width="28" height="28" alt=""> | [Official letters, Australia](gallery/official-au.md) | 90 | The official letters people in Australia most often need: tenancy, work, tax and banks, insurance and benefits, consumer rights, authorities, school and neighbours, written in Australian English under state and federal law. |
| <img src="svg/mark/be-resiliation-bail-residence.svg" width="28" height="28" alt=""> | [Official letters, Belgium](gallery/official-be.md) | 90 | The official letters people in Belgium most often need: tenancy, work, tax and banks, insurance, consumer rights, authorities, family and neighbours, written in French as used in Wallonia and Brussels. |
| <img src="svg/mark/br-rescisao-locacao.svg" width="28" height="28" alt=""> | [Official letters, Brazil](gallery/official-br.md) | 90 | The official letters people in Brazil most often need: tenancy, work, money and tax, health plans and INSS, consumer rights, authorities, school and neighbours, written in correct Brazilian Portuguese. |
| <img src="svg/mark/ca-end-tenancy.svg" width="28" height="28" alt=""> | [Official letters, Canada](gallery/official-ca.md) | 90 | The official letters people in Canada most often need: tenancy, work, tax and banks, benefits and privacy, consumer rights, insurance, school and neighbours, written in Canadian English and noting where provinces differ. |
| <img src="svg/mark/ch-kuendigung-mietvertrag.svg" width="28" height="28" alt=""> | [Official letters, Switzerland](gallery/official-ch.md) | 90 | The official letters people in Switzerland most often need: tenancy, work, debt collection and tax, insurance, consumer rights, authorities, family and neighbours, written in correct Swiss standard German. |
| <img src="svg/mark/de-kuendigung-mietvertrag.svg" width="28" height="28" alt=""> | [Official letters, Germany](gallery/official-de.md) | 90 | The official letters people in Germany most often need: tenancy, work, tax and banks, insurance, consumer rights, authorities, family and neighbours, written in correct German. |
| <img src="svg/mark/es-desistimiento-alquiler.svg" width="28" height="28" alt=""> | [Official letters, Spain](gallery/official-es.md) | 90 | The official letters people in Spain most often need: tenancy, work, tax and banks, insurance, consumer rights, authorities, family and neighbours, written in correct Castilian Spanish. |
| <img src="svg/mark/fr-resiliation-bail-locataire.svg" width="28" height="28" alt=""> | [Official letters, France](gallery/official-fr.md) | 90 | The official letters people in France most often need: tenancy, work, tax and banks, insurance, consumer rights, authorities and data rights, family and neighbours, written in correct French. |
| <img src="svg/mark/ie-tenant-notice-termination.svg" width="28" height="28" alt=""> | [Official letters, Ireland](gallery/official-ie.md) | 90 | The official letters people in Ireland most often need: tenancy and the RTB, work and the WRC, tax and banks, insurance and health, consumer rights, FOI and data requests, school, family and neighbours, written in Irish English. |
| <img src="svg/mark/in-vacate-notice-tenant.svg" width="28" height="28" alt=""> | [Official letters, India](gallery/official-in.md) | 90 | The official letters people in India most often need: tenancy, work and provident fund, tax and banks, insurance, consumer complaints, RTI and government records, school and family, and neighbours, in correct Indian English. |
| <img src="svg/mark/it-disdetta-locazione.svg" width="28" height="28" alt=""> | [Official letters, Italy](gallery/official-it.md) | 90 | The official letters people in Italy most often need: tenancy, work, tax and banks, insurance and health, consumer rights, public offices, school and family, and neighbours, written in correct Italian. |
| <img src="svg/mark/mx-terminacion-arrendamiento.svg" width="28" height="28" alt=""> | [Official letters, Mexico](gallery/official-mx.md) | 90 | The official letters people in Mexico most often need: tenancy, work, tax and banks, insurance and social security, consumer rights, authorities, family and neighbours, written in correct Mexican Spanish. |
| <img src="svg/mark/nl-huur-opzeggen.svg" width="28" height="28" alt=""> | [Official letters, Netherlands](gallery/official-nl.md) | 90 | The official letters people in the Netherlands most often need: tenancy, work, tax and banks, insurance, consumer rights, authorities, school and neighbours, written in correct Dutch. |
| <img src="svg/mark/nz-tenant-notice-end.svg" width="28" height="28" alt=""> | [Official letters, New Zealand](gallery/official-nz.md) | 90 | The official letters people in New Zealand most often need: tenancy, work, tax and banks, insurance and ACC, consumer rights, authorities, family and neighbours, written in New Zealand English. |
| <img src="svg/mark/pl-wypowiedzenie-najmu.svg" width="28" height="28" alt=""> | [Official letters, Poland](gallery/official-pl.md) | 90 | The official letters people in Poland most often need: tenancy, work, tax and banks, insurance and ZUS, consumer rights, authorities and data rights, school and family, neighbours, written in correct Polish. |
| <img src="svg/mark/pt-denuncia-arrendamento.svg" width="28" height="28" alt=""> | [Official letters, Portugal](gallery/official-pt.md) | 90 | The official letters people in Portugal most often need: tenancy, work, tax and banks, insurance, consumer rights, authorities, school and neighbours, written in correct European Portuguese. |
| <img src="svg/mark/se-uppsagning-hyresavtal.svg" width="28" height="28" alt=""> | [Official letters, Sweden](gallery/official-se.md) | 90 | The official letters people in Sweden most often need: tenancy, work, tax and debts, insurance and health, consumer rights, authorities, school and neighbours, written in correct Swedish. |
| <img src="svg/mark/uk-tenancy-end-notice.svg" width="28" height="28" alt=""> | [Official letters, United Kingdom](gallery/official-uk.md) | 90 | The official letters people in the United Kingdom most often need: tenancy, work, money and tax, insurance and health, consumer rights, authorities and benefits, school and neighbours, written in British English. |
| <img src="svg/mark/us-lease-termination-notice.svg" width="28" height="28" alt=""> | [Official letters, United States](gallery/official-us.md) | 90 | The official letters people in the United States most often need: tenancy, work, credit and debt, insurance and health, consumer rights, tax and government, school and neighbours, written in American English with state variation noted. |

### Interface

Arrows, controls, files, media, code and the symbols of every app. 1,957 icons.

| | Category | Icons | What it covers |
|:-:|---|--:|---|
| <img src="svg/mark/arrow-up.svg" width="28" height="28" alt=""> | [Arrows & directions](gallery/arrows.md) | 189 | Arrows, chevrons, turns, swaps and every way to point. |
| <img src="svg/mark/square-plus.svg" width="28" height="28" alt=""> | [Interface & controls](gallery/interface.md) | 292 | Menus, views, toggles, states, alerts and window chrome. |
| <img src="svg/mark/bold.svg" width="28" height="28" alt=""> | [Text & editing](gallery/text.md) | 104 | Formatting, alignment, lists, headings and writing tools. |
| <img src="svg/mark/letter-a.svg" width="28" height="28" alt=""> | [Letters, numbers & punctuation](gallery/alphabet.md) | 110 | A to Z, 0 to 9 and the marks between them. |
| <img src="svg/mark/file.svg" width="28" height="28" alt=""> | [Files & folders](gallery/files.md) | 186 | Files, folders, archives and storage. |
| <img src="svg/mark/chat-bubble.svg" width="28" height="28" alt=""> | [Communication](gallery/communication.md) | 108 | Chat, mail, calls, contacts and announcements. |
| <img src="svg/mark/desktop.svg" width="28" height="28" alt=""> | [Devices & hardware](gallery/devices.md) | 105 | Computers, phones, peripherals, parts and power. |
| <img src="svg/mark/cloud.svg" width="28" height="28" alt=""> | [Network & cloud](gallery/connectivity.md) | 82 | Wi-Fi, signal, cloud, servers, databases and links. |
| <img src="svg/mark/play.svg" width="28" height="28" alt=""> | [Media & playback](gallery/media.md) | 191 | Playback, audio, music, photo, video and film. |
| <img src="svg/mark/pen-tool.svg" width="28" height="28" alt=""> | [Design & creative](gallery/design.md) | 106 | Drawing tools, layers, alignment, colour and shapes tools. |
| <img src="svg/mark/code.svg" width="28" height="28" alt=""> | [Code & development](gallery/code.md) | 104 | Code, terminals, version control, builds and bots. |
| <img src="svg/mark/chart-bar.svg" width="28" height="28" alt=""> | [Charts & data](gallery/charts.md) | 99 | Charts, dashboards, diagrams and analytics. |
| <img src="svg/mark/shield.svg" width="28" height="28" alt=""> | [Security & privacy](gallery/security.md) | 94 | Shields, locks, keys, identity and protection. |
| <img src="svg/mark/clock.svg" width="28" height="28" alt=""> | [Time & calendar](gallery/time.md) | 79 | Clocks, timers, calendars and schedules. |
| <img src="svg/mark/circle.svg" width="28" height="28" alt=""> | [Shapes & symbols](gallery/shapes.md) | 54 | Geometric shapes, solids, badges and common symbols. |
| <img src="svg/mark/multiply.svg" width="28" height="28" alt=""> | [Math](gallery/math.md) | 54 | Operators, functions, geometry and set notation. |

### Business & money

Offices, shops, payments, shipping and property. 405 icons.

| | Category | Icons | What it covers |
|:-:|---|--:|---|
| <img src="svg/mark/briefcase.svg" width="28" height="28" alt=""> | [Office & business](gallery/office.md) | 101 | Work, meetings, desks, goals, hiring and support. |
| <img src="svg/mark/cart.svg" width="28" height="28" alt=""> | [Shopping & commerce](gallery/commerce.md) | 107 | Carts, bags, stores, tags, coupons and orders. |
| <img src="svg/mark/coin.svg" width="28" height="28" alt=""> | [Money & finance](gallery/finance.md) | 106 | Coins, cards, banks, currencies, savings and taxes. |
| <img src="svg/mark/box.svg" width="28" height="28" alt=""> | [Logistics & moving](gallery/logistics.md) | 66 | Boxes, pallets, warehouses, delivery and moving. |
| <img src="svg/mark/for-sale-sign.svg" width="28" height="28" alt=""> | [Property & legal](gallery/property.md) | 25 | Homes for sale or rent, plans, contracts and courts. |

### People & society

People, hands, feelings, access, faith and celebrations. 485 icons.

| | Category | Icons | What it covers |
|:-:|---|--:|---|
| <img src="svg/mark/user.svg" width="28" height="28" alt=""> | [People & users](gallery/people.md) | 112 | Users, groups, roles, figures and actions. |
| <img src="svg/mark/hand.svg" width="28" height="28" alt=""> | [Hands & gestures](gallery/hands.md) | 61 | Hands, signs and gestures. |
| <img src="svg/mark/accessible-person.svg" width="28" height="28" alt=""> | [Accessibility](gallery/accessibility.md) | 47 | Access, mobility, vision, hearing and assistance. |
| <img src="svg/mark/face-smile.svg" width="28" height="28" alt=""> | [Emoji & feelings](gallery/emoji.md) | 89 | Faces, moods and reactions. |
| <img src="svg/mark/party-popper.svg" width="28" height="28" alt=""> | [Holidays & celebrations](gallery/celebrations.md) | 67 | Parties, gifts, seasons and festivities. |
| <img src="svg/mark/latin-cross.svg" width="28" height="28" alt=""> | [Faith & spirituality](gallery/faith.md) | 34 | Symbols and places of faith, drawn with respect. |
| <img src="svg/mark/charity-box.svg" width="28" height="28" alt=""> | [Society & causes](gallery/society.md) | 75 | Charity, civic life, voting, rights and relief. |

### Everyday life & health

Health, home, kitchen, food, clothing, care and school. 868 icons.

| | Category | Icons | What it covers |
|:-:|---|--:|---|
| <img src="svg/mark/stethoscope.svg" width="28" height="28" alt=""> | [Medical & health](gallery/medical.md) | 176 | Care, medicine, the body, tests and specialties. |
| <img src="svg/mark/tooth.svg" width="28" height="28" alt=""> | [Dental care](gallery/dental.md) | 34 | Teeth, treatments and the dentist's tools. |
| <img src="svg/mark/vet-clinic.svg" width="28" height="28" alt=""> | [Veterinary care](gallery/veterinary.md) | 23 | Care for pets and farm animals. |
| <img src="svg/mark/salon-chair.svg" width="28" height="28" alt=""> | [Beauty & wellness](gallery/beauty.md) | 31 | Salon, skin care, make-up and spa. |
| <img src="svg/mark/baby-bottle.svg" width="28" height="28" alt=""> | [Baby & kids care](gallery/baby.md) | 25 | Bottles, cribs, prams and everything for little ones. |
| <img src="svg/mark/sofa.svg" width="28" height="28" alt=""> | [Home & household](gallery/household.md) | 110 | Furniture, rooms, appliances and cleaning. |
| <img src="svg/mark/refrigerator.svg" width="28" height="28" alt=""> | [Kitchen & cooking](gallery/kitchen.md) | 80 | Appliances, pans, utensils and baking. |
| <img src="svg/mark/coffee-cup.svg" width="28" height="28" alt=""> | [Food & drink](gallery/food.md) | 200 | Meals, drinks, fruit, vegetables and ingredients. |
| <img src="svg/mark/t-shirt.svg" width="28" height="28" alt=""> | [Clothing & fashion](gallery/clothing.md) | 90 | Clothes, shoes, accessories and care labels. |
| <img src="svg/mark/graduation-cap.svg" width="28" height="28" alt=""> | [Education & learning](gallery/education.md) | 99 | School, books, classes and graduation. |

### Science, sport & play

Labs, space, sport, games, music and the studio. 497 icons.

| | Category | Icons | What it covers |
|:-:|---|--:|---|
| <img src="svg/mark/flask.svg" width="28" height="28" alt=""> | [Science & space](gallery/science.md) | 107 | Physics, chemistry, biology, earth and the stars. |
| <img src="svg/mark/bunsen-burner.svg" width="28" height="28" alt=""> | [Laboratory equipment](gallery/lab.md) | 63 | Glassware, instruments and lab safety. |
| <img src="svg/mark/soccer-ball.svg" width="28" height="28" alt=""> | [Sports & fitness](gallery/sports.md) | 166 | Balls, gear, gyms and athletes. |
| <img src="svg/mark/game-controller-retro.svg" width="28" height="28" alt=""> | [Games & toys](gallery/games.md) | 99 | Consoles, cards, chess, toys and fantasy. |
| <img src="svg/mark/acoustic-guitar.svg" width="28" height="28" alt=""> | [Musical instruments](gallery/instruments.md) | 38 | Strings, keys, drums, brass, wind and notation. |
| <img src="svg/mark/camera-dslr.svg" width="28" height="28" alt=""> | [Photo & studio gear](gallery/photo-gear.md) | 24 | Cameras, lenses, lights and studio kit. |

### World & nature

Animals, plants, weather, energy, travel and places. 934 icons.

| | Category | Icons | What it covers |
|:-:|---|--:|---|
| <img src="svg/mark/cat.svg" width="28" height="28" alt=""> | [Animals](gallery/animals.md) | 110 | Pets, farm animals, wildlife, birds, fish and insects. |
| <img src="svg/mark/tree-deciduous.svg" width="28" height="28" alt=""> | [Nature](gallery/nature.md) | 62 | Trees, flowers, plants, landscapes and water. |
| <img src="svg/mark/tent.svg" width="28" height="28" alt=""> | [Camping & outdoors](gallery/outdoors.md) | 38 | Tents, campfires, trails and gear. |
| <img src="svg/mark/watering-can.svg" width="28" height="28" alt=""> | [Gardening](gallery/garden.md) | 31 | Garden tools, pots, beds and lawns. |
| <img src="svg/mark/farm-tractor.svg" width="28" height="28" alt=""> | [Farming & agriculture](gallery/farming.md) | 53 | Fields, machines, livestock and harvest. |
| <img src="svg/mark/sun.svg" width="28" height="28" alt=""> | [Weather & seasons](gallery/weather.md) | 98 | Sun, clouds, rain, wind, temperature and seasons. |
| <img src="svg/mark/energy-bolt.svg" width="28" height="28" alt=""> | [Energy & environment](gallery/energy.md) | 90 | Power, renewables, fuel, emissions and plants. |
| <img src="svg/mark/car.svg" width="28" height="28" alt=""> | [Transport & vehicles](gallery/transport.md) | 194 | Cars, bikes, buses, trains, planes and boats. |
| <img src="svg/mark/cockpit-yoke.svg" width="28" height="28" alt=""> | [Aviation & airports](gallery/aviation.md) | 29 | Flight decks, airports and air travel. |
| <img src="svg/mark/sextant.svg" width="28" height="28" alt=""> | [Maritime & rail](gallery/maritime.md) | 26 | Ships, harbours, navigation and the railway. |
| <img src="svg/mark/map-pin.svg" width="28" height="28" alt=""> | [Maps & travel](gallery/maps.md) | 102 | Maps, pins, navigation, luggage and hotels. |
| <img src="svg/mark/house.svg" width="28" height="28" alt=""> | [Buildings & places](gallery/buildings.md) | 101 | Homes, towers, public buildings and city parts. |

### Tools & trades

Tools, building, the trades, electronics, industry and crafts. 294 icons.

| | Category | Icons | What it covers |
|:-:|---|--:|---|
| <img src="svg/mark/hammer.svg" width="28" height="28" alt=""> | [Tools & construction](gallery/tools.md) | 110 | Hand tools, power tools, safety and building sites. |
| <img src="svg/mark/faucet.svg" width="28" height="28" alt=""> | [Plumbing, electrical & HVAC](gallery/trades.md) | 62 | Pipes, valves, wiring, breakers and climate. |
| <img src="svg/mark/resistor.svg" width="28" height="28" alt=""> | [Electronic components](gallery/electronics.md) | 62 | Parts, circuits, sensors, motors and logic. |
| <img src="svg/mark/cnc-machine.svg" width="28" height="28" alt=""> | [Manufacturing & safety](gallery/industry.md) | 29 | Machines, production and workplace safety. |
| <img src="svg/mark/sewing-machine.svg" width="28" height="28" alt=""> | [Sewing & crafts](gallery/crafts.md) | 31 | Sewing, knitting, paper, clay and handiwork. |

**All: 15,887 icons in 177 categories.**
<!-- categories:end -->

## Gallery

<!-- gallery:start -->
Every icon with its name, one page per category. The same set is on [taddicons.com](https://taddicons.com) with search,
and on one page in [`gallery/index.html`](gallery/index.html).

- **Documents & messages:** [Everyday messages](gallery/messages.md) · [Cards and greetings](gallery/cards.md) · [Invitations and events](gallery/invitations.md) · [Social posts](gallery/social.md) · [Life events and speeches](gallery/life.md) · [Family and home](gallery/family.md) · [Letters to companies](gallery/consumer.md) · [Money and bills](gallery/money.md) · [Home and renting](gallery/housing.md) · [Work and jobs](gallery/work.md) · [Small business and side hustle](gallery/business.md) · [Buy and sell](gallery/selling.md) · [School and learning](gallery/school.md) · [Health and care](gallery/health.md) · [Government and official](gallery/government.md) · [Agreements and legal](gallery/legal.md) · [Community and clubs](gallery/community.md) · [Travel](gallery/travel.md) · [Social media](gallery/social-media.md) · [Jobs and careers](gallery/jobs-careers.md) · [Academia and research](gallery/academia.md) · [Creators and makers](gallery/creators.md) · [Events and tickets](gallery/events-tickets.md) · [Faith and ceremonies](gallery/faith-ceremonies.md) · [Sports and clubs](gallery/sports-clubs.md) · [Weddings](gallery/weddings.md) · [Pets](gallery/pets.md) · [Neighbourhood and environment](gallery/neighbourhood.md) · [Cars and transport](gallery/cars-transport.md) · [Accounts and tech](gallery/accounts-tech.md) · [Disability and access](gallery/disability-access.md) · [Small business](gallery/small-business.md) · [Elder care and carers](gallery/elder-care.md) · [Press and public voice](gallery/press.md) · [Hospitality and stays](gallery/hospitality.md) · [Nonprofits and volunteering](gallery/nonprofits.md) · [Arts and publishing](gallery/arts-publishing.md) · [Dating and relationships](gallery/dating-relationships.md) · [Grief and memorial](gallery/grief-memorial.md) · [Trades and home repairs](gallery/trades-documents.md) · [Celebrations of every culture](gallery/celebrations-documents.md) · [Health appointments and care](gallery/health-appointments.md) · [Mental health and support](gallery/mental-health-support.md) · [Parenting babies and kids](gallery/parenting-babies-kids.md) · [Parenting and teenagers](gallery/parenting-teens.md) · [School and parents](gallery/school-parents.md) · [Student life](gallery/student-life.md) · [Buying and selling a home](gallery/home-buying-selling.md) · [Home repairs and utilities](gallery/home-repairs-utilities.md) · [Renting as a tenant](gallery/renting-tenants.md) · [Insurance and claims](gallery/insurance-claims.md) · [Pregnancy and birth](gallery/pregnancy-birth.md) · [Being a landlord or property manager](gallery/landlords-property.md) · [Banking, debt and credit](gallery/banking-debt.md) · [Immigration and visas](gallery/immigration-visas.md) · [Travel and trips](gallery/travel-trips.md) · [Airlines, hotels and holiday complaints](gallery/holiday-complaints.md) · [Consumer rights and refunds](gallery/consumer-refunds.md) · [Online shopping and marketplaces](gallery/online-marketplaces.md) · [Phone, internet and subscriptions](gallery/telecoms-subscriptions.md) · [Taxes and benefits](gallery/taxes-benefits.md) · [Small claims and everyday legal](gallery/small-claims-legal.md) · [Workplace for employees](gallery/workplace-employees.md) · [Managers and leaders](gallery/managers-leadership.md) · [Hiring and recruiting](gallery/hiring-recruiting.md) · [Freelancers and clients](gallery/freelancers-clients.md) · [Remote work and team coordination](gallery/remote-teams.md) · [Customer support replies](gallery/customer-support-replies.md) · [Hobbies and clubs](gallery/hobbies-clubs.md) · [Volunteering and community](gallery/volunteering-community.md) · [Sales and marketing outreach](gallery/sales-outreach.md) · [Civic and local government](gallery/civic-local-government.md) · [Gaming and online communities](gallery/gaming-online-communities.md) · [Rural, farming and outdoors](gallery/rural-farming-outdoors.md) · [Apologies and difficult conversations](gallery/difficult-conversations.md) · [Emergencies and disasters](gallery/emergencies-disasters.md) · [Friendship and social life](gallery/friendship-social-life.md) · [Wedding guests and bridal party](gallery/wedding-guests.md) · [Estates, wills and executors](gallery/estates-probate.md) · [Separation and divorce admin](gallery/divorce-separation.md) · [Military and veterans](gallery/military-veterans.md) · [Living abroad and expats](gallery/expats-abroad.md) · [Languages and cultural exchange](gallery/language-exchange.md) · [Research and science collaboration](gallery/research-science.md) · [Teachers and educators](gallery/teachers-educators.md) · [Healthcare professionals](gallery/healthcare-professionals.md) · [Shops and market stalls](gallery/retail-markets.md) · [Real estate agents and brokers](gallery/real-estate-agents.md) · [Restaurants, cafes and food business](gallery/food-business.md) · [Event planning professionals](gallery/event-pros.md) · [Coaches and sports organisers](gallery/coaches-sports.md) · [Musicians and performers](gallery/musicians-performers.md) · [Open source and developers](gallery/open-source-dev.md) · [Gifts and giving](gallery/gifts-giving.md) · [Tech help for family and seniors](gallery/tech-help-seniors.md) · [Photographers, filmmakers and clients](gallery/photo-film-clients.md) · [Official letters, Austria](gallery/official-at.md) · [Official letters, Australia](gallery/official-au.md) · [Official letters, Belgium](gallery/official-be.md) · [Official letters, Brazil](gallery/official-br.md) · [Official letters, Canada](gallery/official-ca.md) · [Official letters, Switzerland](gallery/official-ch.md) · [Official letters, Germany](gallery/official-de.md) · [Official letters, Spain](gallery/official-es.md) · [Official letters, France](gallery/official-fr.md) · [Official letters, Ireland](gallery/official-ie.md) · [Official letters, India](gallery/official-in.md) · [Official letters, Italy](gallery/official-it.md) · [Official letters, Mexico](gallery/official-mx.md) · [Official letters, Netherlands](gallery/official-nl.md) · [Official letters, New Zealand](gallery/official-nz.md) · [Official letters, Poland](gallery/official-pl.md) · [Official letters, Portugal](gallery/official-pt.md) · [Official letters, Sweden](gallery/official-se.md) · [Official letters, United Kingdom](gallery/official-uk.md) · [Official letters, United States](gallery/official-us.md)
- **Interface:** [Arrows & directions](gallery/arrows.md) · [Interface & controls](gallery/interface.md) · [Text & editing](gallery/text.md) · [Letters, numbers & punctuation](gallery/alphabet.md) · [Files & folders](gallery/files.md) · [Communication](gallery/communication.md) · [Devices & hardware](gallery/devices.md) · [Network & cloud](gallery/connectivity.md) · [Media & playback](gallery/media.md) · [Design & creative](gallery/design.md) · [Code & development](gallery/code.md) · [Charts & data](gallery/charts.md) · [Security & privacy](gallery/security.md) · [Time & calendar](gallery/time.md) · [Shapes & symbols](gallery/shapes.md) · [Math](gallery/math.md)
- **Business & money:** [Office & business](gallery/office.md) · [Shopping & commerce](gallery/commerce.md) · [Money & finance](gallery/finance.md) · [Logistics & moving](gallery/logistics.md) · [Property & legal](gallery/property.md)
- **People & society:** [People & users](gallery/people.md) · [Hands & gestures](gallery/hands.md) · [Accessibility](gallery/accessibility.md) · [Emoji & feelings](gallery/emoji.md) · [Holidays & celebrations](gallery/celebrations.md) · [Faith & spirituality](gallery/faith.md) · [Society & causes](gallery/society.md)
- **Everyday life & health:** [Medical & health](gallery/medical.md) · [Dental care](gallery/dental.md) · [Veterinary care](gallery/veterinary.md) · [Beauty & wellness](gallery/beauty.md) · [Baby & kids care](gallery/baby.md) · [Home & household](gallery/household.md) · [Kitchen & cooking](gallery/kitchen.md) · [Food & drink](gallery/food.md) · [Clothing & fashion](gallery/clothing.md) · [Education & learning](gallery/education.md)
- **Science, sport & play:** [Science & space](gallery/science.md) · [Laboratory equipment](gallery/lab.md) · [Sports & fitness](gallery/sports.md) · [Games & toys](gallery/games.md) · [Musical instruments](gallery/instruments.md) · [Photo & studio gear](gallery/photo-gear.md)
- **World & nature:** [Animals](gallery/animals.md) · [Nature](gallery/nature.md) · [Camping & outdoors](gallery/outdoors.md) · [Gardening](gallery/garden.md) · [Farming & agriculture](gallery/farming.md) · [Weather & seasons](gallery/weather.md) · [Energy & environment](gallery/energy.md) · [Transport & vehicles](gallery/transport.md) · [Aviation & airports](gallery/aviation.md) · [Maritime & rail](gallery/maritime.md) · [Maps & travel](gallery/maps.md) · [Buildings & places](gallery/buildings.md)
- **Tools & trades:** [Tools & construction](gallery/tools.md) · [Plumbing, electrical & HVAC](gallery/trades.md) · [Electronic components](gallery/electronics.md) · [Manufacturing & safety](gallery/industry.md) · [Sewing & crafts](gallery/crafts.md)
<!-- gallery:end -->

## Metadata

[`icons.json`](icons.json) describes the set: `sections` (each with its `categories`), `categories` (each with its
`section`) and `icons`. Every icon has these fields:

```json
{
  "name": "test-tube",
  "title": "Test tube",
  "category": "lab",
  "categoryTitle": "Laboratory",
  "tags": ["sample", "experiment", "chemistry", "lab", "liquid"],
  "unicode": "e9a1"
}
```

| Field | Meaning |
|---|---|
| `name` | The icon's name: file name, sprite id, CSS class (`ti-<name>`) and ligature |
| `title` | A short English title |
| `category` | The category id (`categories` at the top of the file says which section it belongs to) |
| `tags` | Search keywords |
| `unicode` | The webfont code point (hex) |

The document icons (the first section, from Taddicons 1) also say what kind of document they are and how it travels:

| Field | Meaning |
|---|---|
| `tier` | How often people need this document: `essential`, `daily`, `special` or `rare` |
| `kind` | The kind of document: `letter`, `email`, `message`, `document`, `card`, `post`, `invitation`, `speech`, … |
| `channels` | How it is usually sent: `email`, `sms`, `whatsapp`, `pdf`, `print`, `post`, `link`, … |

## Names and versions

Icon names are lowercase kebab-case (`arrow-up-right`, `notice-to-vacate`); the document icons use the document type
keys Taddi uses. Names and code points never change within a major version, and new icons are added at the end. Version
2 keeps every name and code point of version 1 (`U+E001` to `U+E190`). Version history is in
[CHANGELOG.md](CHANGELOG.md).

## Build from source

The SVG files in `svg/outline` and the metadata in `icons.json` are the source; everything else is generated.

```sh
npm install                                  # sharp, for PNG, WebP, AVIF and ICO
python3 -m pip install -r scripts/requirements.txt   # fontTools, skia-pathops, picosvg, for the webfont
npm run build                                # font, images, then the README tables, gallery pages and banner
npm run release                              # the PNG, WebP, AVIF and ICO ZIPs for the GitHub release (release/)
```

| Script | Makes |
|---|---|
| [`scripts/build-font.py`](scripts/build-font.py) | Turns every line into a filled outline, merges it into one glyph, and writes WOFF2, WOFF, TTF, the CSS, the SCSS map and the code point JSON |
| [`scripts/build-images.mjs`](scripts/build-images.mjs) | The sprites, the gradient, mark and emoji SVGs, all PNG, WebP and AVIF sizes and the ICO files |
| [`scripts/build-emoji.mjs`](scripts/build-emoji.mjs) | `emoji.json`: the picker groups and each emoji's title, keywords and standard emoji (matches in `scripts/emoji-unicode.json`) |
| [`scripts/build-docs.mjs`](scripts/build-docs.mjs) | The README banner and category tables, the gallery pages and `gallery/index.html`, and `font/demo.html` |
| [`scripts/package-release.mjs`](scripts/package-release.mjs) | One ZIP per raster format for the GitHub release |

## Contributing

Found an icon that could read more clearly, or an icon that is missing? Open an
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
