### app/(shop)/layout.js
- Classification: Server Component
- Reason: Provides shared server-rendered shop navigation and footer structure.
- Reason: Does not use React hooks, state, effects, or browser-only APIs.

### app/(shop)/page.js
- Classification: Server Component
- Reason: Fetches posts and renders static content with a client Counter child.
- Reason: Does not use React hooks or event handlers directly.

### app/(shop)/products/page.js
- Classification: Server Component
- Reason: Fetches products from Postgres and renders the product grid.
- Reason: Does not use React hooks or event handlers.

### app/(shop)/products/[slug]/page.js
- Classification: Server Component
- Reason: Fetches one product and generates metadata/server-rendered detail content.
- Reason: Does not use React hooks or event handlers.

### app/(shop)/products/[slug]/not-found.js
- Classification: Server Component
- Reason: Renders a static not-found message.
- Reason: Does not use React hooks or event handlers.

### app/(shop)/about/page.js
- Classification: Server Component
- Reason: Renders static content only.
- Reason: Does not use React hooks or event handlers.

### app/sitemap.js
- Classification: Server Route Handler
- Reason: Fetches products from Postgres and returns sitemap XML data.
- Reason: Does not render interactive UI.

### app/layout.js
- Classification: Server Component
- Reason: Provides root HTML/body structure and imports global CSS.
- Reason: Does not use React hooks, state, effects, or browser-only APIs.

### app/leads/page.js
- Classification: Server Component
- Reason: Renders static content only.
- Reason: Does not use React hooks or event handlers.

### app/leads/[id]/page.js
- Classification: Server Component
- Reason: Fetches a lead from Postgres and renders detail content.
- Reason: Does not use React hooks or event handlers.

### app/components/Counter.jsx
- Classification: Client Component
- Reason: Uses the `use client` directive.
- Reason: Uses `useState` and an `onClick` handler.
