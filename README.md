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
- A smart extractor that can read a pasted 1688 URL through Supabase or copied product-page HTML as fallback.
- An extraction preview so customers can review product details before adding the item to cart.
- A product URL submission form for customer-requested products, including quantity, variant, and notes.
- A cart drawer with links, images, quantities, and remove actions.
- An order request form for delivery and sourcing help.
- Telegram settings for sending order requests to a bot/chat.
- Supabase Edge Function support for saving orders and sending Telegram notifications securely.
- A browser-based order workflow board with statuses from submitted to delivered.

User-added products and cart items are saved in browser `localStorage`, so they remain after a page refresh on the same device. Order requests are sent to Supabase when configured, with local storage as a fallback/cache.

## Supabase Setup

1. Create a Supabase project.
2. Run the migration in `supabase/migrations`.
3. Deploy the Edge Functions:

```bash
supabase functions deploy order-workflow --project-ref YOUR_PROJECT_REF
supabase functions deploy extract-1688-product --project-ref YOUR_PROJECT_REF
```

4. Set Edge Function secrets:

```bash
supabase secrets set TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN TELEGRAM_CHAT_ID=YOUR_CHAT_ID ADMIN_PIN=YOUR_ADMIN_PIN --project-ref YOUR_PROJECT_REF
```

5. In the website admin panel, save:

- Supabase URL
- Supabase anon key
- Admin PIN

## Note

This static site cannot access every product on 1688 as a live inventory feed by itself. URL-only product extraction is handled by the `extract-1688-product` Supabase Edge Function, which fetches the 1688 page server-side and parses common fields. If 1688 blocks a request or changes its page structure, users can still paste copied page code for fallback extraction.

Telegram bot token and chat ID should stay only in Supabase secrets. Do not put them in `index.html`.
