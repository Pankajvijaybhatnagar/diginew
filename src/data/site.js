// Central content for the whole website. Update company details here.

export const company = {
  name: "digi1Xprt",
  tagline: "Do Big...",
  description:
    "digi1Xprt is a technology, financial and share-market solutions company helping businesses and investors grow with smart software, sound financial planning and disciplined market expertise.",
  email: "Director@digi1xprt.com",
  careersEmail: "Director@digi1xprt.com",
  phone: "+91 98929 29551",
  whatsapp: "919892929551",
  offices: [
    {
      label: "Registered Office",
      lines: ["21/44 Basement, Old Rajender Nagar", "Delhi, India – 110060"],
      map: "21/44 Old Rajender Nagar, New Delhi, Delhi 110060",
      street: "21/44 Basement, Old Rajender Nagar",
      city: "New Delhi",
      region: "Delhi",
      postalCode: "110060",
    },
    {
      label: "Regional Office",
      lines: [
        "SCO 21 & 22, Ekta Complex, Adjoining Vishal Mega Mart",
        "Pipli Road, Kurukshetra, Haryana – 136118",
      ],
      map: "Ekta Complex, Pipli Road, Kurukshetra, Haryana 136118",
      street: "SCO 21 & 22, Ekta Complex, Adjoining Vishal Mega Mart, Pipli Road",
      city: "Kurukshetra",
      region: "Haryana",
      postalCode: "136118",
    },
  ],
  hours: [
    { days: "Mon – Fri", time: "9:30 AM – 6:30 PM" },
    { days: "Sat – Sun", time: "Closed (business enquiries only)" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "IT Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development", note: "Websites, portals & web apps" },
      { label: "Mobile App Development", href: "/services/mobile-app-development", note: "Android, iOS & cross-platform" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops", note: "AWS, Azure, GCP & CI/CD" },
      { label: "AI & Data Analytics", href: "/services/ai-data-analytics", note: "ML models, BI & automation" },
      { label: "Cyber Security", href: "/services/cyber-security", note: "Audits, VAPT & compliance" },
      { label: "Digital Marketing", href: "/services/digital-marketing", note: "SEO, ads & social growth" },
      { label: "FinTech Solutions", href: "/services/fintech-solutions", note: "Trading, payments & lending tech" },
      { label: "ERP & CRM", href: "/services/erp-crm", note: "Custom business software" },
    ],
  },
  { label: "Financial Services", href: "/financial-services" },
  { label: "Share Market", href: "/share-market" },
  {
    label: "Company",
    href: "/portfolio",
    children: [
      { label: "Portfolio", href: "/portfolio", note: "Case studies & results" },
      { label: "Careers", href: "/careers", note: "Join the digi1Xprt team" },
      { label: "Insights", href: "/blog", note: "Tech, finance & market articles" },
      { label: "Contact", href: "/contact", note: "Talk to our experts" },
    ],
  },
];

export const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "K+", label: "Investors Guided" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

export const pillars = [
  {
    key: "it",
    title: "IT Solutions",
    href: "/services",
    icon: "code",
    text: "Custom software, web & mobile apps, cloud, AI and cyber security engineered to scale your business.",
    points: ["Web & Mobile Apps", "Cloud & DevOps", "AI & Automation", "Cyber Security"],
  },
  {
    key: "finance",
    title: "Financial Services",
    href: "/financial-services",
    icon: "wallet",
    text: "Goal-based wealth planning, mutual funds, insurance, tax and loan advisory for individuals and businesses.",
    points: ["Wealth Management", "Mutual Funds & SIP", "Tax Planning", "Insurance"],
  },
  {
    key: "market",
    title: "Share Market",
    href: "/share-market",
    icon: "chart",
    text: "Research-backed equity, derivatives and IPO guidance, demat support and market education programs.",
    points: ["Equity Research", "Demat & Trading", "IPO Advisory", "Market Training"],
  },
];

export const itServices = [
  {
    slug: "web-development",
    keywords: ["website development company in Delhi", "web development company in Kurukshetra", "website designing company in Haryana", "Next.js development company India", "e-commerce website development Delhi"],
    title: "Web Development",
    icon: "globe",
    short: "High-performance websites, portals and SaaS platforms built on modern stacks like Next.js and Node.",
    intro:
      "From corporate websites to complex SaaS platforms, we build fast, secure and SEO-friendly web products that convert visitors into customers.",
    features: [
      "Corporate & business websites",
      "E-commerce stores & marketplaces",
      "Custom web applications & dashboards",
      "SaaS product engineering",
      "Progressive Web Apps (PWA)",
      "API development & third-party integrations",
    ],
    tech: ["Next.js", "React", "Node.js", "Laravel", "WordPress", "PostgreSQL"],
  },
  {
    slug: "mobile-app-development",
    keywords: ["mobile app development company in Delhi", "app development company in Kurukshetra", "Android app development Haryana", "iOS app developers India", "Flutter app development company"],
    title: "Mobile App Development",
    icon: "smartphone",
    short: "Native and cross-platform Android & iOS apps with beautiful UX and rock-solid performance.",
    intro:
      "We design and ship mobile apps that users love — from MVPs for startups to enterprise-grade apps used by thousands every day.",
    features: [
      "Android & iOS native apps",
      "Cross-platform apps with Flutter & React Native",
      "Trading & investment apps",
      "On-demand & delivery apps",
      "App store optimisation & launch",
      "Maintenance & feature upgrades",
    ],
    tech: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase", "GraphQL"],
  },
  {
    slug: "cloud-devops",
    keywords: ["cloud services company in Delhi", "AWS consulting partner India", "DevOps services company Haryana", "cloud migration services India", "Kubernetes consulting Delhi"],
    title: "Cloud & DevOps",
    icon: "cloud",
    short: "Cloud migration, architecture and CI/CD pipelines that cut cost and keep you always-on.",
    intro:
      "Move faster and spend less with cloud-native architecture, automated deployments and 24/7 monitoring managed by certified engineers.",
    features: [
      "Cloud migration & modernisation",
      "AWS, Azure & Google Cloud setup",
      "CI/CD pipeline automation",
      "Docker & Kubernetes orchestration",
      "Cost optimisation & FinOps",
      "Monitoring, backup & disaster recovery",
    ],
    tech: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
  },
  {
    slug: "ai-data-analytics",
    keywords: ["AI development company in Delhi", "machine learning company India", "AI chatbot development Haryana", "data analytics services Delhi", "Power BI dashboard services India"],
    title: "AI & Data Analytics",
    icon: "brain",
    short: "Machine learning, generative AI and BI dashboards that turn your data into decisions.",
    intro:
      "Unlock the value hidden in your data with AI assistants, predictive models and real-time dashboards tailored to your business.",
    features: [
      "Generative AI chatbots & assistants",
      "Predictive analytics & forecasting",
      "Business intelligence dashboards",
      "Document & process automation (RPA)",
      "Market data analytics & algo research",
      "Data engineering & warehousing",
    ],
    tech: ["Python", "TensorFlow", "OpenAI / LLMs", "Power BI", "Tableau", "Spark"],
  },
  {
    slug: "cyber-security",
    keywords: ["cyber security company in Delhi", "VAPT services India", "penetration testing company Haryana", "ISO 27001 consultants Delhi", "website security audit India"],
    title: "Cyber Security",
    icon: "shield",
    short: "Security audits, VAPT and compliance programmes that protect your data and reputation.",
    intro:
      "Stay ahead of threats with proactive security testing, hardening and compliance support — essential for financial and data-driven businesses.",
    features: [
      "Vulnerability assessment & penetration testing",
      "Web & mobile application security",
      "Network & cloud security audits",
      "ISO 27001 & data-protection readiness",
      "Security awareness training",
      "Incident response planning",
    ],
    tech: ["OWASP", "Burp Suite", "SIEM", "IAM", "WAF", "Zero Trust"],
  },
  {
    slug: "digital-marketing",
    keywords: ["digital marketing agency in Delhi", "SEO company in Kurukshetra", "digital marketing company Haryana", "Google Ads agency Delhi", "social media marketing agency India"],
    title: "Digital Marketing",
    icon: "megaphone",
    short: "SEO, performance ads and social media strategies that grow traffic, leads and revenue.",
    intro:
      "Data-driven marketing that brings measurable growth — more visibility, more qualified leads and a stronger brand.",
    features: [
      "Search engine optimisation (SEO)",
      "Google & Meta performance ads",
      "Social media management",
      "Content & video marketing",
      "Branding & creative design",
      "Analytics, tracking & CRO",
    ],
    tech: ["Google Ads", "Meta Ads", "GA4", "SEMrush", "HubSpot", "Canva"],
  },
  {
    slug: "fintech-solutions",
    keywords: ["fintech software development company India", "trading platform development Delhi", "payment gateway integration company", "loan management software India", "stock market app development"],
    title: "FinTech Solutions",
    icon: "candlestick",
    short: "Trading platforms, payment gateways and lending software built with deep financial domain knowledge.",
    intro:
      "Where our IT and finance expertise meet. We build secure, compliant fintech products — from trading terminals to loan management systems.",
    features: [
      "Stock trading & portfolio tracking platforms",
      "Payment gateway & UPI integration",
      "Loan origination & management systems",
      "Mutual fund & insurance distribution portals",
      "KYC / e-KYC & e-sign workflows",
      "Real-time market data dashboards",
    ],
    tech: ["Node.js", "Python", "WebSockets", "Razorpay", "Broker APIs", "PostgreSQL"],
  },
  {
    slug: "erp-crm",
    keywords: ["ERP software company in Delhi", "custom CRM development India", "ERP development company Haryana", "Odoo implementation partner Delhi", "HRMS software development India"],
    title: "ERP & CRM",
    icon: "layers",
    short: "Custom ERP, CRM and HRMS software that automates operations and gives you one source of truth.",
    intro:
      "Replace spreadsheets and disconnected tools with software built around how your business actually works.",
    features: [
      "Custom ERP development",
      "Sales CRM & lead management",
      "HRMS & payroll systems",
      "Inventory & billing software",
      "Odoo / Zoho implementation",
      "Data migration & staff training",
    ],
    tech: ["Odoo", "Zoho", "React", "Node.js", "MySQL", "REST APIs"],
  },
];

export const financialServices = [
  {
    title: "Wealth Management",
    icon: "gem",
    text: "Personalised, goal-based plans that balance growth, safety and liquidity across every stage of life.",
  },
  {
    title: "Mutual Funds & SIP",
    icon: "pie",
    text: "Curated fund selection, SIP planning and periodic portfolio reviews to keep your goals on track.",
  },
  {
    title: "Tax Planning",
    icon: "receipt",
    text: "Smart, compliant tax-saving strategies and ITR filing support for individuals, professionals and businesses.",
  },
  {
    title: "Insurance Advisory",
    icon: "umbrella",
    text: "Life, health and general insurance comparisons so your family and assets are properly protected.",
  },
  {
    title: "Retirement Planning",
    icon: "sunset",
    text: "Build a retirement corpus with the right mix of NPS, PPF, mutual funds and annuity options.",
  },
  {
    title: "Loans & Business Finance",
    icon: "landmark",
    text: "Home, business and working-capital loan assistance with the right lenders at competitive rates.",
  },
];

export const marketServices = [
  {
    title: "Demat & Trading Account",
    icon: "briefcase",
    text: "Quick, paperless account opening support with guidance on platforms, charges and order types.",
  },
  {
    title: "Equity Research",
    icon: "search",
    text: "Fundamental and technical research reports on stocks and sectors to support informed decisions.",
  },
  {
    title: "Derivatives (F&O)",
    icon: "activity",
    text: "Understand futures & options, hedging strategies and risk management before you trade.",
  },
  {
    title: "IPO Advisory",
    icon: "rocket",
    text: "Upcoming IPO analysis, application guidance and allotment tracking in one place.",
  },
  {
    title: "Portfolio Review",
    icon: "pie",
    text: "Detailed health-check of your existing holdings with diversification and rebalancing insights.",
  },
  {
    title: "Stock Market Training",
    icon: "graduation",
    text: "Beginner to advanced courses on investing, technical analysis, options and trading psychology.",
  },
];

export const courses = [
  {
    level: "Beginner",
    title: "Stock Market Foundations",
    duration: "4 Weeks",
    points: ["How markets work", "Demat, brokers & orders", "Reading financial statements", "Building your first portfolio"],
  },
  {
    level: "Intermediate",
    title: "Technical Analysis Mastery",
    duration: "6 Weeks",
    points: ["Candlestick patterns", "Support, resistance & trends", "Indicators: RSI, MACD, EMA", "Live chart practice"],
    featured: true,
  },
  {
    level: "Advanced",
    title: "Options & Risk Management",
    duration: "8 Weeks",
    points: ["Options Greeks", "Hedging & spreads", "Position sizing", "Trading psychology"],
  },
];

// Illustrative values only — not live market data.
export const tickerItems = [
  { symbol: "NIFTY 50", price: "25,148.30", change: 0.62 },
  { symbol: "SENSEX", price: "82,365.75", change: 0.54 },
  { symbol: "BANK NIFTY", price: "56,212.40", change: -0.21 },
  { symbol: "NIFTY IT", price: "36,845.10", change: 1.18 },
  { symbol: "RELIANCE", price: "2,947.85", change: 0.84 },
  { symbol: "TCS", price: "4,112.60", change: 1.32 },
  { symbol: "HDFCBANK", price: "1,742.15", change: -0.38 },
  { symbol: "INFY", price: "1,898.40", change: 0.97 },
  { symbol: "ICICIBANK", price: "1,286.70", change: 0.45 },
  { symbol: "GOLD", price: "73,420", change: -0.12 },
  { symbol: "USD/INR", price: "84.12", change: 0.05 },
];

export const whyUs = [
  { title: "One Partner, Three Strengths", icon: "layers", text: "Technology, finance and markets under one roof — perfect for businesses and investors who want integrated growth." },
  { title: "Certified Experts", icon: "award", text: "Engineers, financial planners and market analysts with years of hands-on industry experience." },
  { title: "Security First", icon: "shield", text: "Bank-grade security practices, data privacy and transparent processes in everything we build and advise." },
  { title: "Transparent Pricing", icon: "receipt", text: "Clear proposals, no hidden charges and milestone-based billing you can plan around." },
  { title: "Agile & On-Time", icon: "zap", text: "Sprint-based delivery with weekly demos so you always know exactly where your project stands." },
  { title: "24/7 Support", icon: "headset", text: "Dedicated account managers and round-the-clock support for critical systems." },
];

export const process = [
  { step: "01", title: "Discover", text: "We understand your business, goals, risk profile and challenges in a free consultation." },
  { step: "02", title: "Strategize", text: "Our experts craft a clear roadmap — technical architecture or financial plan — with timelines." },
  { step: "03", title: "Execute", text: "We build, deploy and invest with discipline, keeping you updated at every milestone." },
  { step: "04", title: "Grow", text: "Continuous monitoring, optimisation and support so your results keep compounding." },
];

export const techStack = [
  "Next.js", "React", "Node.js", "Python", "Flutter", "AWS", "Azure", "Google Cloud",
  "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "TensorFlow", "Power BI", "Laravel", "Firebase",
];

export const industries = [
  { title: "Banking & Finance", icon: "landmark" },
  { title: "Stock Broking", icon: "candlestick" },
  { title: "Healthcare", icon: "heart" },
  { title: "E-commerce & Retail", icon: "cart" },
  { title: "Education", icon: "graduation" },
  { title: "Real Estate", icon: "building" },
  { title: "Manufacturing", icon: "factory" },
  { title: "Logistics", icon: "truck" },
];

// SAMPLE CONTENT — replace with real client testimonials before going live.
export const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Founder, TradeNest",
    text: "digi1Xprt built our trading dashboard end-to-end. Their understanding of both technology and markets made them the perfect partner — the platform is fast, secure and our users love it.",
  },
  {
    name: "Priya Mehta",
    role: "Business Owner",
    text: "Their financial planning team restructured my investments and tax plan. For the first time I have a clear roadmap for my family's goals. Highly professional and transparent.",
  },
  {
    name: "Ankit Verma",
    role: "CTO, MediCore Labs",
    text: "We migrated our entire infrastructure to the cloud with zero downtime. Costs dropped by almost a third and our deployments are now fully automated.",
  },
  {
    name: "Sneha Kapoor",
    role: "Retail Investor",
    text: "The technical analysis course was practical and easy to follow. The mentors focus on risk management first, which is exactly what a beginner needs.",
  },
];

// SAMPLE CONTENT — replace with your real case studies.
export const projects = [
  {
    title: "TradeNest — Trading Dashboard",
    category: "FinTech",
    text: "Real-time trading and portfolio-tracking web platform with live charts, alerts and broker API integration.",
    tags: ["Next.js", "WebSockets", "Node.js"],
    result: "40K+ active users",
  },
  {
    title: "MediCore — Cloud Migration",
    category: "Cloud",
    text: "Migrated a healthcare SaaS from on-premise servers to AWS with Kubernetes and automated CI/CD.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    result: "32% lower infra cost",
  },
  {
    title: "LoanEase — Lending Platform",
    category: "FinTech",
    text: "End-to-end loan origination system with e-KYC, credit scoring and automated disbursal workflows.",
    tags: ["React", "Python", "PostgreSQL"],
    result: "3x faster approvals",
  },
  {
    title: "ShopKart — E-commerce App",
    category: "Mobile",
    text: "Cross-platform shopping app with UPI payments, real-time order tracking and loyalty rewards.",
    tags: ["Flutter", "Firebase", "Razorpay"],
    result: "4.7★ store rating",
  },
  {
    title: "EduSmart — Learning Portal",
    category: "Web",
    text: "Learning management system with live classes, quizzes and certificates for 50+ institutes.",
    tags: ["Next.js", "MongoDB", "WebRTC"],
    result: "1L+ learners",
  },
  {
    title: "InsightAI — Analytics Suite",
    category: "AI",
    text: "AI-powered BI dashboards and forecasting models for a retail chain across 120 stores.",
    tags: ["Python", "TensorFlow", "Power BI"],
    result: "18% less stock-outs",
  },
];

export const team = [
  { name: "Founder & CEO", role: "Leadership & Vision", initials: "CEO" },
  { name: "Head of Technology", role: "Engineering & Delivery", initials: "HT" },
  { name: "Head of Finance", role: "Wealth & Advisory", initials: "HF" },
  { name: "Head of Research", role: "Equity & Derivatives", initials: "HR" },
];

export const values = [
  { title: "Integrity", icon: "shield", text: "Honest advice and transparent work, even when it is not the easy answer." },
  { title: "Innovation", icon: "zap", text: "We adopt modern tools and ideas to give clients a real competitive edge." },
  { title: "Client First", icon: "heart", text: "Your goals define our roadmap. Long-term relationships over quick wins." },
  { title: "Excellence", icon: "award", text: "High standards in code quality, research depth and service delivery." },
];

export const milestones = [
  { year: "Start", title: "digi1Xprt is founded", text: "Started as a small team of developers with a vision to help businesses go digital." },
  { year: "Growth", title: "Financial services launched", text: "Added wealth management and mutual fund advisory to serve clients beyond technology." },
  { year: "Expansion", title: "Share market division", text: "Launched equity research, demat support and stock-market training programmes." },
  { year: "Today", title: "Integrated growth partner", text: "Serving clients across India and abroad with IT, finance and market expertise." },
];

export const jobs = [
  { title: "Full Stack Developer (Next.js / Node)", type: "Full-time", location: "Hybrid", exp: "2–5 yrs", dept: "Technology" },
  { title: "Flutter Mobile Developer", type: "Full-time", location: "On-site", exp: "1–4 yrs", dept: "Technology" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote", exp: "3–6 yrs", dept: "Technology" },
  { title: "Equity Research Analyst", type: "Full-time", location: "On-site", exp: "2–5 yrs", dept: "Share Market" },
  { title: "Relationship Manager — Wealth", type: "Full-time", location: "On-site", exp: "1–3 yrs", dept: "Finance" },
  { title: "Digital Marketing Executive", type: "Full-time", location: "Hybrid", exp: "1–3 yrs", dept: "Marketing" },
];

export const perks = [
  { title: "Learning Budget", icon: "graduation" },
  { title: "Health Insurance", icon: "heart" },
  { title: "Flexible Hours", icon: "clock" },
  { title: "Performance Bonus", icon: "trending" },
];

export const posts = [
  {
    slug: "sip-vs-lumpsum",
    title: "SIP vs Lump Sum: Which Investment Style Suits You?",
    category: "Finance",
    date: "2026-10-08",
    read: "6 min read",
    excerpt: "Understand rupee-cost averaging, market timing and how to choose the right mix for your financial goals.",
  },
  {
    slug: "nextjs-for-business",
    title: "Why Modern Businesses Are Moving to Next.js",
    category: "Technology",
    date: "2026-09-26",
    read: "5 min read",
    excerpt: "Speed, SEO and scalability — how a modern web stack directly improves conversions and lowers costs.",
  },
  {
    slug: "risk-management-trading",
    title: "5 Risk Management Rules Every Trader Must Follow",
    category: "Share Market",
    date: "2026-09-14",
    read: "7 min read",
    excerpt: "Position sizing, stop losses and the psychology that separates consistent traders from gamblers.",
  },
  {
    slug: "ai-in-finance",
    title: "How AI Is Changing Financial Services",
    category: "Technology",
    date: "2026-08-30",
    read: "6 min read",
    excerpt: "From fraud detection to robo-advisory — practical AI use cases transforming the finance industry.",
  },
  {
    slug: "tax-saving-guide",
    title: "Smart Tax-Saving Options for Salaried Professionals",
    category: "Finance",
    date: "2026-08-18",
    read: "8 min read",
    excerpt: "A practical walkthrough of popular deductions, ELSS, NPS and choosing between tax regimes.",
  },
  {
    slug: "ipo-checklist",
    title: "IPO Checklist: What to Read Before You Apply",
    category: "Share Market",
    date: "2026-08-02",
    read: "5 min read",
    excerpt: "How to read a DRHP, evaluate valuations, and avoid getting carried away by listing-day hype.",
  },
];

export const faqs = [
  {
    q: "What services does digi1Xprt offer?",
    a: "We offer three core verticals: IT solutions (web, mobile, cloud, AI, cyber security, digital marketing, fintech and ERP), financial services (wealth management, mutual funds, tax, insurance, loans) and share-market services (research, demat support, IPO guidance and training).",
  },
  {
    q: "How much does a website or app cost?",
    a: "Every project is different. After a free discovery call we share a fixed-scope proposal with transparent, milestone-based pricing so there are no surprises.",
  },
  {
    q: "Do you guarantee returns on investments?",
    a: "No. Investments in securities markets are subject to market risks and no one can guarantee returns. We focus on research, disciplined planning and risk management aligned to your goals and risk profile.",
  },
  {
    q: "Can beginners join your stock market courses?",
    a: "Absolutely. Our Foundations course starts from the basics. Advanced programmes are available once you are comfortable with core concepts.",
  },
  {
    q: "Do you provide support after project delivery?",
    a: "Yes. All projects include a free support window, and we offer annual maintenance plans with 24/7 monitoring for critical systems.",
  },
];

export const disclaimer =
  "Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Past performance is not indicative of future returns. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. Market data shown on this website is for illustration only.";
