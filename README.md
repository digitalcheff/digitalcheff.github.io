# digitalcheff.com

DigitalCheff portfolio site — served via GitHub Pages at [digitalcheff.com](https://digitalcheff.com).

## Local preview

```bash
cd ~/Projects/digitalcheff.github.io
python3 -m http.server 8080
# http://localhost:8080
```

## Languages

- Default: **English**
- Turkish: header language toggle (saved in `localStorage`)
- Auto-detects Turkish browser locale on first visit

## Content updates

| File | What to edit |
|------|----------------|
| `assets/js/products.js` | Apps, games, statuses, store links |
| `assets/js/i18n.js` | UI copy (EN / TR) |
| `assets/js/i18n.js` → `CONTACT_EMAIL` | General contact (`hello@`) |
| `assets/js/i18n.js` → `PRIVACY_EMAIL` | Privacy requests (`privacy@`) |

## Email

Active aliases (Cloudflare Email Routing):

- `hello@digitalcheff.com` — general contact & support
- `privacy@digitalcheff.com` — privacy requests (AXIS 6 policy)

Do not put personal email addresses on the public site.

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Main page |
| `assets/css/style.css` | Styles |
| `assets/js/` | i18n, products, interactions |
| `CNAME` | Custom domain |
| `app-ads.txt` | AdMob verification (AXIS 6) |
| `axis6-privacy/` | AXIS 6 privacy policy |
