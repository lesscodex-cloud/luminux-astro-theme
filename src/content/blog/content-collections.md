---
title: "Organizing content with Astro collections"
description: "A walkthrough of how we structure blog posts, tags, and pagination inside Luminux."
pubDate: 2024-09-18
author: "Casey Nguyen"
tags:
  - content
  - guides
  - astro
draft: false
---

Astro Content Collections keep metadata consistent across posts. Each entry validates required fields like title, description, and publication date so you avoid mismatched layouts.

When you add a new Markdown file under `src/content/blog`, the blog index automatically picks it up, sorts it by publication date, and slots it into pagination. Draft posts remain visible in development, but they are excluded from production builds and RSS feeds.

Tags help readers jump into related topics. In Luminux, tags show up as small badges next to each summary and at the top of every article page.
