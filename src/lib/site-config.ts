export const siteConfig = {
  name: "Luminux",
  tagline: "An elegant Astro theme for luminous product launches.",
  description:
    "Luminux helps SaaS teams launch faster with polished UI blocks, dark-mode aesthetics, and fully typed Astro components.",
  nav: [
    { label: "Features", href: "#features" },
    { label: "Showcase", href: "#showcase" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    primary: { label: "Launch with Luminux", href: "#pricing" },
    secondary: { label: "View components", href: "#features" },
  },
  highlights: [
    "TypeScript-first components",
    "Tailwind utility patterns",
    "Accessible, production-ready UI",
    "Responsive out of the box",
  ],
};

export const features = [
  {
    title: "Composable blocks",
    description: "Mix hero, pricing, testimonial, and CTA slices to launch in an afternoon.",
    icon: "🧩",
  },
  {
    title: "Performant by default",
    description: "Astro Islands ship minimal JavaScript for a blazing-fast experience.",
    icon: "⚡️",
  },
  {
    title: "Tailwind tuned",
    description: "Luminux layers a cohesive token set on Tailwind so you can stay on-brand.",
    icon: "🎨",
  },
  {
    title: "Production-ready",
    description: "ESLint, Prettier, and type safety keep your launch stable and maintainable.",
    icon: "🛡️",
  },
  {
    title: "Content-first",
    description: "Author pages in Markdown or Astro with zero boilerplate.",
    icon: "✍️",
  },
  {
    title: "Team friendly",
    description: "Consistent linting, formatting, and scripts so everyone ships quickly.",
    icon: "🤝",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$39",
    description: "Perfect for personal projects and quick landing pages.",
    features: ["All core blocks", "Email support", "One project license"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "For product teams that need more polish and guidance.",
    features: ["Everything in Starter", "Component variants", "Design tokens & themes"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Hands-on support to tailor Luminux to your stack.",
    features: ["Design review", "Integration pairing", "Priority support"],
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "Is Luminux compatible with React or Vue components?",
    answer:
      "Yes. Astro Islands let you drop in React, Vue, or Svelte components where you need interactivity.",
  },
  {
    question: "Does the theme support light mode?",
    answer:
      "The core styling ships in a premium dark theme. You can extend the Tailwind config to add a light palette.",
  },
  {
    question: "How do I deploy?",
    answer:
      "Run `npm run build` and deploy the `dist` folder to your favorite host—Netlify, Vercel, or static hosting.",
  },
  {
    question: "Is TypeScript required?",
    answer: "Yes. The project is set up with TypeScript strict mode to keep your codebase healthy.",
  },
];
