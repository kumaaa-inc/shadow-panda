---
'@shadow-panda/preset': minor
---

`Alert`, `Card`, `Table`, `Form` components now uses the normal config recipe instead of slot recipes. The main purpose of this is to avoid the `'use client'` directive (except for the `Form` which uses the context from `react-hook-form`, but the styles can be reused in forms like the [server-only forms from Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#server-only-forms)).
