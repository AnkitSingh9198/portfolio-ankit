export const profile = {
  name: "Ankit Singh",
  firstName: "Ankit",
  lastName: "Singh",
  title: "Full Stack Developer",
  tagline: "React.js · TypeScript · Node.js · Express.js · MongoDB",
  location: "Noida, Uttar Pradesh, India",
  phone: "+91 8586846184",
  phoneHref: "tel:+918586846184",
  email: "ankitsingh110198@gmail.com",
  linkedin: "https://linkedin.com/in/ankit-singh-32371a167",
  linkedinLabel: "linkedin.com/in/ankit-singh-32371a167",
  availability: "Available for opportunities",
  heroHeadline: ["I BUILD", "DIGITAL", "EXPERIENCES", "THAT MOVE", "PEOPLE."],
  heroSub: "Full Stack Developer crafting performant, scalable, and beautifully engineered web experiences.",
  summary:
    "Full Stack Developer with ~2 years of professional experience building and deploying production web and mobile applications with React.js, React Native, TypeScript, Node.js, Express.js and MongoDB. I ship platforms across healthcare, insurance, e-commerce and hospitality — from a WebRTC consultation portal to multi-insurer API integrations — with a focus on clean REST design, secure auth, and cloud deployment.",
  summaryLong: [
    "I work across the full stack — from pixel-accurate React interfaces translated out of Figma, to Express APIs with JWT auth and role-based access, to MongoDB schemas and aggregation pipelines that stay fast in production.",
    "At LYB Technology and Aeron Digital Solution I have owned end-to-end features: schema design to deployment on Vercel, Render and Hostinger, with Git-based release workflows, lazy loading, code splitting and query optimization.",
    "I care about readable, maintainable code, responsive interfaces that feel instant, and systems that recover gracefully when networks fail.",
  ],
  stats: [
    { value: "~2", label: "Years shipping production apps" },
    { value: "10+", label: "Platforms & client products delivered" },
    { value: "04", label: "Insurer APIs integrated live" },
    { value: "03", label: "Domains — health, insurance, commerce" },
  ],
};

export const skillGroups = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend",
    caption: "Interfaces people touch",
    stack: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "React Native"],
    details: [
      {
        name: "React.js + Hooks",
        desc: "Reusable components, hooks, Context & Redux Toolkit state. Pixel-accurate Figma-to-code builds.",
      },
      {
        name: "Next.js",
        desc: "App Router, SSR/SSG, routing & code-splitting for fast, SEO-friendly production sites.",
      },
      {
        name: "TypeScript",
        desc: "Typed props, API contracts and domain models that catch bugs before runtime.",
      },
      {
        name: "React Native",
        desc: "Companion clinic & user apps sharing the same REST APIs and auth layer as web.",
      },
      {
        name: "Styling & UX",
        desc: "Responsive design, Bootstrap, modern CSS — interfaces that hold up on any viewport.",
      },
    ],
  },
  {
    id: "backend",
    index: "02",
    title: "Backend",
    caption: "Systems that stay up",
    stack: ["Node.js", "Express.js", "REST API Design", "JWT Auth", "WebRTC", "Socket.IO"],
    details: [
      {
        name: "Node.js + Express.js",
        desc: "Structured REST APIs with validation, error handling and role-based access control.",
      },
      {
        name: "JWT Authentication",
        desc: "Separate B2C / B2B auth flows with role-based routing for patients, doctors, clinics & partners.",
      },
      {
        name: "WebRTC + Socket.IO",
        desc: "Signalling layer, offer/answer negotiation, ICE exchange, ringing → accept → mute → reconnect.",
      },
      {
        name: "Integrations",
        desc: "Third-party & payment gateway integrations with retries, logging and failure recovery.",
      },
    ],
  },
  {
    id: "data",
    index: "03",
    title: "Data & Infra",
    caption: "Data that stays correct",
    stack: ["MongoDB", "Mongoose", "Aggregation Pipelines", "Git & GitHub", "Vercel", "Render", "Hostinger"],
    details: [
      {
        name: "MongoDB + Mongoose",
        desc: "Schema design for consultations, chat history, call logs, appointments, policies & orders.",
      },
      {
        name: "Aggregation Pipelines",
        desc: "Query optimization for dashboards, search, filters and status tracking at scale.",
      },
      {
        name: "Deployment",
        desc: "Vercel, Render & Hostinger with env config and Git-based release workflows.",
      },
      {
        name: "Practices",
        desc: "Agile delivery, code review, Postman-tested APIs, Cursor / VS Code, performance optimization.",
      },
    ],
  },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  category: string;
  url?: string;
  urlLabel?: string;
  year: string;
  description: string;
  contributions: string[];
  stack: string[];
  role: string;
  accent: string;
  pattern: "pulse" | "ledger" | "atlas";
};

export const projects: Project[] = [
  {
    id: "drdermat",
    index: "01",
    name: "Dr Dermat",
    category: "Healthcare · Real-Time Consultation Platform",
    url: "https://drdermat.com",
    urlLabel: "drdermat.com",
    year: "2024 — Present",
    description:
      "A healthcare platform combining e-commerce, doctor/clinic portals and a WebRTC one-to-one chat, audio & video consultation portal — with companion Clinic and User apps in React Native.",
    contributions: [
      "Built WebRTC signalling: peer lifecycle, offer/answer negotiation, ICE exchange, media-stream handling",
      "Full call-state machine — ringing, accept, reject, end, mute, camera toggle — with reconnection & network-failure recovery",
      "E-commerce module: catalogue, search/filters, cart, checkout, payments, order tracking",
      "Doctor/clinic portal: onboarding, appointments, patient records, prescriptions",
      "Multi-profile accounts — family/patient profiles under one login; B2C + B2B auth with role-based routing",
      "Role-based admin panel + MongoDB models for consultations, chat history and call logs",
    ],
    stack: ["React.js", "React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.IO", "JWT"],
    role: "Full Stack Developer — end-to-end features, API design, real-time layer, deployment",
    accent: "#D7FF3E",
    pattern: "pulse",
  },
  {
    id: "zanifest",
    index: "02",
    name: "Zanifest",
    category: "Insurance Aggregator Portal",
    url: "https://zanifestinsurance.com",
    urlLabel: "zanifestinsurance.com",
    year: "2024 — Present",
    description:
      "An insurance aggregator normalizing quotes from Zuno, SBI General, ICICI Lombard and GoDigit into one consistent compare-and-buy journey — quote to proposal to KYC to payment to policy.",
    contributions: [
      "Integrated 4 insurer APIs: quote generation, proposal submission, KYC, payment, policy issuance",
      "Unified data layer normalizing varied insurer request/response formats into one comparison UI",
      "Auth tokens, retries, validation, failure handling & logging for a stable quote-to-policy journey",
      "Policy dashboards: search, filters, status tracking, renewals, downloadable documents",
      "Bulk policy upload with file validation, error reporting & batch processing",
    ],
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    role: "Full Stack Developer — insurer integrations, unified data layer, dashboards",
    accent: "#7DD3FC",
    pattern: "ledger",
  },
  {
    id: "rsgalaxy",
    index: "03",
    name: "RS Galaxy",
    category: "Hotel Website & Booking System",
    year: "2024",
    description:
      "Full-stack hotel site delivered end to end: responsive SEO-friendly pages, booking & enquiry flow with availability and date selection, plus a secure admin dashboard for rooms, rates, bookings and enquiries.",
    contributions: [
      "Responsive SEO-friendly pages with booking & enquiry flow",
      "Availability handling & date selection logic",
      "Secure admin dashboard — rooms, rates, bookings, enquiries",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    role: "Full Stack Developer — design to deployment",
    accent: "#FBBF24",
    pattern: "atlas",
  },
];

export const additionalProjects = [
  {
    name: "Facebook Leadflow",
    desc: "Lead capture, assignment, status tracking & admin panel.",
  },
  {
    name: "Jewellery E-Commerce",
    desc: "Catalogue, cart, checkout & order management.",
  },
  {
    name: "Tadoba · Minisafar · Seven Safar",
    desc: "Travel listing, package & enquiry flows.",
  },
];

export const experience = [
  {
    company: "LYB Technology, Noida",
    role: "Full Stack Developer",
    period: "Feb 2026 — Present",
    current: true,
    points: [
      "Own end-to-end features across React.js, TypeScript, Node.js, Express.js and MongoDB — schema design to production deployment.",
      "Lead ongoing development of Dr Dermat and Zanifest — WebRTC real-time communication & insurer API integrations.",
      "Design REST APIs with JWT auth, role-based access & structured error handling; performance via lazy loading, code splitting, query optimization.",
      "Manage deployments & env config on Vercel, Render and Hostinger with Git-based release workflows.",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "WebRTC", "Vercel", "Render"],
  },
  {
    company: "Aeron Digital Solution, Noida",
    role: "Full Stack Developer",
    period: "Oct 2024 — Jan 2026",
    current: false,
    points: [
      "Built Dr Dermat and Zanifest from the ground up, plus client products across healthcare, insurance, e-commerce and travel.",
      "Translated Figma designs into pixel-accurate responsive interfaces wired to REST APIs and third-party services.",
      "Agile collaboration with designers, backend engineers & QA; AI-assisted tooling to accelerate delivery and review.",
    ],
    tech: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Figma"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "RD Engineering College",
    year: "2022",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Hierank Business School",
    year: "2019",
  },
  {
    degree: "Front End Developer — Ducat, Noida",
    school: "Professional certification",
    year: "2023 — 24",
  },
  {
    degree: "React and Redux Certification",
    school: "Professional certification",
    year: "2024",
  },
];

export const labLayers = [
  {
    id: "ui",
    step: "LAYER 01",
    title: "User Interface",
    tech: "React · Next.js · TypeScript",
    desc: "What people see and touch. Component-driven UI, typed props, responsive layouts, optimistic updates and loading states that keep every interaction under ~100ms of perceived latency.",
    meta: ["Components", "Hooks", "Router", "SSR / SSG"],
  },
  {
    id: "api",
    step: "LAYER 02",
    title: "API Layer",
    tech: "REST · JWT · Validation",
    desc: "The contract between worlds. Versioned REST endpoints with JWT auth, role-based guards, request validation and structured errors — so the frontend never has to guess.",
    meta: ["REST", "RBAC", "Zod-style validation", "Error envelopes"],
  },
  {
    id: "server",
    step: "LAYER 03",
    title: "Application Server",
    tech: "Node.js · Express.js · Socket.IO",
    desc: "Where business logic lives. Express services plus a Socket.IO / WebRTC signalling layer handling offer-answer negotiation, ICE candidates and reconnection with backoff.",
    meta: ["Express", "WebRTC signalling", "Retries", "Logging"],
  },
  {
    id: "data",
    step: "LAYER 04",
    title: "Database",
    tech: "MongoDB · Mongoose",
    desc: "Truth that persists. Mongoose schemas for consultations, policies and orders, indexed queries and aggregation pipelines powering dashboards, search and status tracking.",
    meta: ["Schemas", "Indexes", "Aggregations", "Backups"],
  },
];

export const principles = [
  {
    n: "01",
    title: "Reusable components, boring in the best way",
    body: "Small, typed, composable React components with clear props. The same building blocks power Dr Dermat web, its admin panel and the React Native apps.",
  },
  {
    n: "02",
    title: "APIs that don't surprise you",
    body: "Predictable REST shapes, JWT + role guards, validation at the edge and errors a client can actually handle — retries included.",
  },
  {
    n: "03",
    title: "Readable code scales further than clever code",
    body: "Explicit names, narrow functions, schema-first thinking. The next developer (often future-me) should understand a module in one read.",
  },
  {
    n: "04",
    title: "Performance is a feature",
    body: "Lazy loading, code splitting, memoized lists, indexed queries.Measured with Lighthouse and Mongo explain plans, not vibes.",
  },
  {
    n: "05",
    title: "Accessibility & responsiveness are non-negotiable",
    body: "Keyboard paths, focus states, contrast-checked type, layouts that hold from 320px to ultrawide. Tested on real mid-range devices.",
  },
];

export const navLinks = [
  { href: "#profile", label: "Profile", index: "01" },
  { href: "#expertise", label: "Stack", index: "02" },
  { href: "#work", label: "Work", index: "03" },
  { href: "#journey", label: "Journey", index: "04" },
  { href: "#lab", label: "Lab", index: "05" },
  { href: "#contact", label: "Contact", index: "06" },
];
