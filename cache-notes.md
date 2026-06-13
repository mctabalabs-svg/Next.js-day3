revalidate = 0 means the route is not cached by Next.js between requests, so each request fetches fresh data from Postgres.

Fresh data is not always necessary for content that changes rarely, such as a published blog post, documentation page, or marketing landing page.

ISR, or Incremental Static Regeneration, lets Next.js serve a static page while regenerating it in the background after a configured time interval.

ISR is the sweet spot when a page should be fast and cacheable but still update periodically, such as product category pages, blog archives, or dashboards that can tolerate a short delay.
