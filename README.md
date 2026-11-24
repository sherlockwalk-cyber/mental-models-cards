# Customer Service Cards

Flash cards for the 59 customer service tools and techniques (from notes on
*Perfect Phrases for Customer Service*), grouped into 10 groups, plus 14 frameworks and
principles (HEARD, LAST, service recovery, customer effort and more) and 6 playbooks.
Installable as an app (PWA) and works offline.

## Publish on GitHub Pages

1. Create a new **public** repository on GitHub, e.g. `customer-service-cards`.
2. Upload every file in this folder to the repo root: on the repo page use
   **Add file → Upload files**, drag in the folder's contents (include the `icons` folder
   and the hidden `.nojekyll` file), then **Commit changes**.
   On a Mac, press **Cmd + Shift + .** in Finder to show hidden files such as `.nojekyll`.
3. Go to **Settings → Pages**. Under *Build and deployment* choose
   **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/customer-service-cards/`.
5. Open it in Chrome and click the install icon in the address bar (or the **Install** button
   in the app header). On Android: Chrome menu → Install app. On iPhone: Safari → Share → Add to Home Screen.

All paths are relative, so the app works under any repo name.

## Using the app

- Tap a card to flip it. Swipe or use ← → to move, Space to flip, Esc to close.
- **Study** shuffles the cards you haven't mastered. Mark each one *Got it* or *Again*.
- Filter by group with the chips, or search by keyword (press `/` to jump to search).
- **I need to…** matches a situation to the right technique. **Playbooks** combine three techniques.

## Editing cards

All content lives in `cards.js`. After changing it, bump `CACHE` in `sw.js`
(e.g. `cs-cards-v2`) and commit, so installed copies pick up the update on next launch.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell and styles |
| `app.js` | Card viewer, flip/swipe, study mode, search, install button |
| `cards.js` | Deck settings, groups and all card content |
| `manifest.webmanifest` | Makes the app installable (name, icons, colours) |
| `sw.js` | Service worker for offline use |
| `icons/` | App icons (any + maskable) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
