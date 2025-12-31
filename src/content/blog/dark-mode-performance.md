---
title: "Designing for dark mode and performance"
description: "Techniques we use to keep the Luminux theme legible and efficient."
pubDate: 2024-07-02
author: "Harper Lee"
tags:
  - design
  - performance
  - accessibility
draft: true
---

Dark interfaces can feel heavy without careful contrast, spacing, and motion. We keep components airy by leaning on glassmorphism-like surfaces paired with strong typography.

We also monitor bundle size closely. Astro's zero-JS-by-default approach helps, and we reserve islands for interactive areas only. When shipping, double-check your Lighthouse scores and trim any unused dependencies.
