# 1688 Sourcing & Delivery Help

A standalone sourcing gateway for 1688. Users can browse 1688 search/category links, paste desired 1688 product URLs, add optional images and notes, build an order cart, and submit an order-help request.

## Run

Open `index.html` directly in a browser.

For a local server:

```bash
npx serve .
```

## Edit

The page includes:

- Header search that opens 1688 search results in a new tab.
- 1688 access cards for common categories.
- A real 1688 product example extracted from supplied page code.
- A smart extractor that can read a pasted 1688 URL or copied product-page HTML.
- A product URL submission form for customer-requested products, including quantity, variant, and notes.
- A cart drawer with links, images, quantities, and remove actions.
- An order request form for delivery and sourcing help.
- Telegram settings for sending order requests to a bot/chat.
- A browser-based order workflow board with statuses from submitted to delivered.

User-added products, cart items, and submitted order requests are saved in browser `localStorage`, so they remain after a page refresh on the same device.

## Note

This static site cannot access every product on 1688 as a live inventory feed by itself. The smart extractor works best when a user pastes copied 1688 page code or a product URL.

Telegram bot settings are stored in the browser for this static version. For production, send Telegram messages from a backend or serverless function so your bot token is private.
