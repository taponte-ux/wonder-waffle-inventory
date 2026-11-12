# Wonder Waffle Inventory Manager — local prototype v0.1

A mobile-friendly React + TypeScript + Vite prototype for Wonder Waffle.

## Run on your PC

Install Node.js 20.19+ or 22.12+ from https://nodejs.org/ if needed.

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually http://localhost:5173).

To verify production compilation: `npm run build`.

## What's included

- Approved purple/pink/blue branded layout with supplied Wonder Waffle logo and actual product photos.
- **Current Stock — What We Have:** ingredient/supply quantity tracking, category filtering, searching, add-item and quantity adjustments.
- **Menu Capacity — What We Can Make:** separate ingredient-based illustrative recipe calculations.
- Low-stock alerts, CSV export, responsive navigation, and large-text toggle.
- Local browser storage to retain entered inventory on the same browser/device.

## Important limitations

**Prototype only — not ready for live multi-user business operations.**

- Starter item quantities are intentionally **zero**, not verified counts. Enter real counts first.
- Sample recipe requirements are **illustrative and not validated**. Capacity estimates must not be used for business decisions until recipes are confirmed.
- Browser localStorage is device-specific, not backed up, and can be cleared. No Supabase, login, cloud synchronization, audit trail, or Square integration exists yet.
- This version is not an installable PWA yet. PWA support and authenticated syncing are planned later.
- No deployment or changes to GitHub were made by this package.

## Next approved milestone

Review and approve the dashboard running locally, then define validated inventory fields and recipes before connecting a secure backend.


## Release v0.4.2
- Increased Dashboard Current Stock category tile height and typography.
- Improved Dashboard description and item-count contrast.
- Added a persistent bottom-right app version indicator sourced from package.json.
- Versioned inner project folder for clarity.
- No changes to inventory logic or browser storage keys.

## Release v0.4.3
- Inventory table groups categories alphabetically A–Z, with item names A–Z inside each category.
- Group headings include the number of currently visible items in that category.
- Search, category filtering, and stock adjustment actions are unchanged.
- Dashboard layout and existing local browser storage keys remain unchanged.

## v0.4.5
- Inventory category headings toggle their item rows independently. Collapsed categories persist for the browser tab session; searching temporarily reveals matches.
- Large Text mode now scales the app’s explicitly sized labels, buttons, tables, cards, and dashboard content more noticeably.
- No changes to local inventory storage keys or existing records.

## v0.4.5
- Sidebar scrolls independently; text toggle stays accessible.
- Per-profile category defaults and overrides are saved locally.


## v0.5.0 — Google sign-in preview (not cloud sync)

1. Copy `.env.example` to `.env.local` and add the **public publishable** key from the Wonder Waffle Supabase project (never a secret/service-role key).
2. Run `npm.cmd install` then `npm.cmd run dev` on Windows.
3. With both environment variables present, the app requires Google login before displaying the **existing browser-local demo**. Without them it remains in the old local demo mode.
4. **Security limitation:** The existing profile selector is not tied to the signed-in Google identity. No inventory tables are read or written through Supabase. The app is **not** approved for production/shared use until server-enforced approved-user access, RLS policies, and sync are implemented and tested.
5. Do not rely on this as a cloud backup. Browser localStorage remains the sole inventory storage.
