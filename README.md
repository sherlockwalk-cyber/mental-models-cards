# Mental Models Cards

Flash cards for ~100 mental models (paraphrased from Farnam Street's guide
*Mental Models: The Best Way to Make Intelligent Decisions*), installable as a Chrome app (PWA).

## Publish on GitHub Pages

1. Create a new **public** repository on GitHub, e.g. `mental-models-cards`.
2. Upload every file in this folder to the repo root: on the repo page use
   **Add file → Upload files**, drag in the folder's contents (include the `icons` folder
   and the hidden `.nojekyll` file), then **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment* choose
   **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/mental-models-cards/`.
5. Open it in Chrome and click the install icon in the address bar (or the **Install** button
   in the app header). On Android: Chrome menu → Install app. On iPhone: Safari → Share → Add to Home Screen.

All paths are relative, so the app works under any repo name.

## Editing cards

All content lives in `cards.js`. After changing it, bump `CACHE` in `sw.js`
(e.g. `mental-models-v2`) and commit, so installed copies pick up the update on next launch.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell and styles |
| `app.js` | Card viewer, flip/swipe, study mode, search, install button |
| `cards.js` | Deck settings, categories and all card content |
| `manifest.webmanifest` | Makes the app installable (name, icons, colours) |
| `sw.js` | Service worker for offline use |
| `icons/` | App icons (any + maskable) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
