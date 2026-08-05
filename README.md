# 1688 Global

A standalone wholesale marketplace homepage inspired by 1688.

## Run

Open `index.html` directly in a browser.

For a local server:

```bash
npx serve .
```

## Edit

Product data is in the `products` array near the bottom of `index.html`. The page includes category filtering, search, quote request prefilling, a cart drawer, and a form where users can add new 1688 products by pasting a product link plus image URL.

User-added products and cart items are saved in browser `localStorage`, so they remain after a page refresh on the same device.
