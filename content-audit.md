# Content Audit — old iscj.org (Webflow) vs. new site

Audited 2026-08-11 by crawling every page of the old site and diffing rendered text
against the new site's static export. The old site is Webflow; **all its documents
live on `cdn.prod.website-files.com` and will go dead when the Webflow subscription
is cancelled** — rescue them into `public/documents/` before retiring the old site.

## Page parity

| Old URL | New route | Status | Notes |
|---|---|---|---|
| `/` | `/` | ✅ Matched | New homepage is a superset (adds prayer times, events, services grid). |
| `/about/who-are-we` | same | ⚠️ Differs | Mission statement abridged (drops "…interacting with the neighbors… The fundamental objective… Glory to Allah… Quran, Sunnah and the Sharia shall always be the guiding light"). Missing downloads: **Bylaws PDF, Family + Single Membership Form PDFs**. |
| `/about/contact` | same | ✅ Matched | Missing the **Constant Contact mailing-list signup link** (see Functional gaps). |
| `/about/board-of-trustees` | same | ❌ Outdated | Old site now shows the **2026–2027 board**: Chair Arif Khan · President Arif Patel · Secretary Omayma Mansour · Treasurer Habib Ahson · Exec. Secretary Mohammed Farooqui · Members Arifa Zaheer, Quratulain Annie Hassan, Aysha Khalid, Issam Koleilat · NUI Liaison Mohamed Asker. New site still shows 2025–2026 roster and an Overseers section the old site has dropped. |
| `/about/expansion` | same | ✅ Matched | Rewritten with stats/timeline; facts intact. |
| `/about/imams-corner` | same | ✅ Matched | Missing the **2006 Star-Ledger profile link** (blog.nj.com — verify it still resolves before porting) and the fax number. |
| `/about/resident-scholar` | same | ✅ Matched | |
| `/about/history` | same | ✅ Matched | Rewritten as a timeline; facts intact. |
| `/services/endowment-fund` | same | ✅ Matched | Mentions Mohid but no link (see donate). |
| `/services/funeral` | same | ✅ Matched | New version is better structured; imam's home number dropped (kept cell/office). |
| `/services/business-directory` | same | ⚠️ Differs | Missing the **ISCJ Business Package 2024 PDF** ("see what packages are available"). New site lists featured businesses as plain text; old site links some partners (goptny.com, insureshelter.com, mrcpapllc.com). |
| `/services/zakat` | same | ⚠️ Differs | Google Form (online application) link ✅ present. Missing: **Zakat FAQs PDF, Zakat Application (paper) PDF, Resource Packet PDF**, and external **Zakat calculator links** (hidaya.org/zakat-calculator, tinyurl.com/iscjzakat). |
| `/services/sadaqah` | same | ⚠️ Differs | Same missing PDFs as zakat, plus the **online Zakat application (Google Docs form)** link. |
| `/services/senior-housing` | same | ❓ Blocked | Old page is **password-protected (HTTP 401)** — new page is a "Coming Soon" stub. Get the intended content from the board. |
| `/services/friday-halaqa` | same | ✅ Matched | |
| `/services/food-pantry` | same | ✅ Matched | iVolunteer signup link ✅ present. |
| `/services/wedding` | same | ⚠️ Differs | Missing: **Reservation Form (MPR form PDF), Marriage Application 2025 PDF**, and the **3 Google Drive setup-photo folders** (Upstairs MPR / Downstairs MPR / Musala Area). |
| `/services/library` | same | ✅ Matched | |
| `/learn-about-islam` | same | ✅ Matched | Missing one resource: **upf.tv** (Unity Productions Foundation). |
| `/committees` | same | ⚠️ Differs | Old "Bylaws Committee" renamed "Constitution Committee" on new site (**confirm intended**) and its **ISCJ Bylaws PDF link** is missing. Membership committee: missing **membership form download links**; contact email differs (old: volunteers@iscj.org, new: admin@iscj.org). Old page also links a dead 2018 WordPress membership form — do not port. |
| `/donate` | same | ⚠️ Differs | Text matches but **no payment method is actually linked**. Old site links: Mohid portal (`us.mohid.co/nj/njrgn/iscj/masjid/online/donation` and `/donation/4`), Venmo (`venmo.com/code?user_id=2995353091571712717`), PayPal (`paypal.com/paypalme/iscjnj`), Zelle QR (`enroll.zellepay.com/qr-codes?...`). Old site also shows QR codes (images). |
| `/hff` | — | 🚫 Dropped on purpose | Halal Food Fest is over (2026-08-11 decision). Add redirect at launch. |

## Nav-level items (old site menus)

| Item | Status on new site |
|---|---|
| Noor-Ul-Iman School (nuischool.org) | ✅ footer |
| LIT (lit.iscj.org) | ✅ |
| Sanad (sanad.iscj.org) | ✅ |
| Weekend School (iscjwes.org) | ✅ |
| Quran Academy (qa.iscj.org) | ✅ |
| YouTube / Facebook | ✅ (new adds Instagram) |
| **Maun Credit Union (maunfcu.org)** | ❌ missing — was in old Services menu |
| **"History of Women at ISCJ" PDF** | ❌ missing — was in old About menu |

## Document inventory (rescue from Webflow CDN → `public/documents/`)

| # | Document | Appears on | Suggested path |
|---|---|---|---|
| 1 | History of Women at ISCJ | About nav menu (site-wide) | `public/documents/history-of-women-at-iscj.pdf` |
| 2 | ISCJ FINAL Bylaws 07.15.26 | who-are-we, committees | `public/documents/iscj-bylaws.pdf` |
| 3 | 2026 Membership Form (Family) rev. 2026-07-21 | committees (newest rev), who-are-we (older v2026.01) | `public/documents/membership-form-family.pdf` |
| 4 | 2026 Membership Form (Single) rev. 2026-07-21 | committees (newest rev), who-are-we (older v2026.01) | `public/documents/membership-form-single.pdf` |
| 5 | Zakat FAQs | zakat, sadaqah | `public/documents/zakat-faqs.pdf` |
| 6 | Zakat Application Form (02-14-2022) | zakat, sadaqah | `public/documents/zakat-application.pdf` |
| 7 | Helpful Resources List 2016 ("Resource Packet") | zakat, sadaqah | `public/documents/zakat-resource-packet.pdf` |
| 8 | ISCJ Marriage Application 2025 | wedding | `public/documents/marriage-application.pdf` |
| 9 | MPR / Space Reservation Form (Final_MPRForm) | wedding | `public/documents/mpr-reservation-form.pdf` |
| 10 | ISCJ Business Package 2024 | business-directory | `public/documents/business-package.pdf` |

Notes: #3/#4 exist in two revisions on the CDN — take the 2026-07-21 revisions
(the ones linked from /committees). Source URLs for all files are in the
scratchpad crawl and re-derivable from the live old site.

**Status 2026-08-11:** ✅ all 10 files uploaded to `public/documents/` and verified
against every link in the built output.

Filename convention: most files use stable, year-less names, so a refreshed
version is a drop-in replacement. The two membership forms keep the year in the
name (`membership-form-family-2026.pdf`, `membership-form-single-2026.pdf`).
**When the 2027 forms arrive, the href must be updated in two places:**
`src/app/about/who-are-we/page.tsx` and the `committees` array in
`src/app/committees/page.tsx`.

All document links open in a new tab (`target="_blank"` + `rel="noopener noreferrer"`).

"History of Women at ISCJ" is now a full page at `/about/history-of-women`
(adapted from the PDF, which remains downloadable from that page); the About menu
links to the page instead of the PDF.

Non-PDF links to port (no download needed):
- Zakat/Sadaqah online application: `https://forms.gle/G8ga2JvBF7zNponx7` (zakat page has it; add to sadaqah) and the Google Docs viewform on the sadaqah page
- Wedding setup photos: 3 Google Drive folders (Upstairs MPR, Downstairs MPR, Musala Area)
- Donate payment links: Mohid ×2, Venmo, PayPal, Zelle QR (listed in parity table)
- Mailing list: Constant Contact signup (`visitor.r20.constantcontact.com/manage/optin?v=001Jzhx...`)

## Functional gaps found on the new site

1. **Footer "Subscribe" is a no-op** — `Footer.tsx` fakes success without sending
   anything. Link the Constant Contact signup URL (or wire a real integration) so
   users aren't silently dropped.
2. **Donate page has zero payment links** — names the methods but links none of them.
3. **Board of Trustees roster is outdated** (2025–2026 vs. current 2026–2027).

## Suggested fix order

1. ~~Update Board of Trustees roster~~ ✅ done 2026-08-11 (2026–2027 roster live).
2. Links wired ✅ 2026-08-11 — all document links now point to `/documents/*`
   placeholder paths (they 404 until the files are uploaded). **Still to do:
   download the 10 PDFs into `public/documents/` using the exact filenames in the
   inventory table above.**
3. Add donate payment links + QR codes. *(deferred by user — revisit later)*
4. Wire the footer Subscribe to Constant Contact. *(deferred by user)*
5. ~~Small ports~~ ✅ done 2026-08-11: upf.tv, Maun Credit Union nav link, full
   mission statement, sadaqah online application, Star-Ledger link, imam fax,
   business package + partner links, homepage stats/text corrected.
6. ~~Senior housing~~ ✅ resolved 2026-08-11: page removed entirely (no longer
   exists on old site); nav link removed.
