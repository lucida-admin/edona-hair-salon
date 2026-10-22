# A2P 10DLC Compliance Changelog

- Date: 2026-10-22
- Backup branch: `a2p-compliance-backup-2026-10-22`
- Starting commit (main): `c08dda9fd5e061775dbb2859836e30c08a2c3000`
- To revert: `git checkout main && git reset --hard c08dda9fd5e061775dbb2859836e30c08a2c3000` (or restore from the backup branch)

## Changes

1. **Footer contact details** (`index.html`, `privacy-policy.html`, `terms-and-conditions.html`)
   - Replaced the "By Lúcida - admin@wearelucida.co - +1 972-632-1095" line with EDONAHAIR LLC, 1288 Ala Moana Blvd., Suite 100, Honolulu, HI 96814, contact@edonahair.com, +1 (808) 772-7285.
   - Kept "By Lúcida" (link to wearelucida.co) on its own separate line, with no email or phone.
2. **Privacy Policy Section 4** (`privacy-policy.html`)
   - Removed "We do not sell, rent, or trade your personal information."
   - Removed "EDONAHAIR LLC is not affiliated with any other company, and we".
   - Remaining sentence re-flowed to start with "We do not share your information with third parties or affiliates for their own marketing or promotional purposes." (only the leftover fragment was capitalized/re-wrapped).
   - Required non-sharing clause (callout) was already present in full, exact form; left untouched.
3. **Section 11 / Terms contact info** (`privacy-policy.html`, `terms-and-conditions.html`)
   - Already identical to the new footer (EDONAHAIR LLC, address, contact@edonahair.com, +1 (808) 772-7285). No change needed.
4. **Footer legal links**: `index.html`, `privacy-policy.html` and `terms-and-conditions.html` all have visible Privacy Policy and Terms & Conditions links in the footer (verified). No change needed.

## Removed by owner (outside this task)
- `book.html` and `home-1.html` were deleted by the owner as unused. The legal-link addition made to `book.html` and footer edit made to `home-1.html` are therefore moot. Nothing references either file.

## Chat widget isolation (added 2026-10-22)
- **New `contact.html`**: form-free page (same header, footer, styles as the legal pages) with address, phone, email and the GoHighLevel chat widget (id `6ac5a41cf71147f2c249a0ff`).
- **`index.html`**: chat widget script removed from `<head>` so the booking iframe (which collects phone numbers) is no longer on a page with the widget. To undo, re-add the same `<script src="https://widgets.leadconnectorhq.com/loader.js" ...>` tag.
- **Footer**: added a "Contact" link next to Privacy Policy and Terms & Conditions on `index.html`, `privacy-policy.html`, `terms-and-conditions.html` and `contact.html`.
- **`sitemap.xml`**: added `https://edonahair.com/contact.html`.
