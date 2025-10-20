import {
  Feature,
  Testimonial,
  PricingPlan,
  FAQ,
  NavLink,
  SocialLink,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const features: Feature[] = [
  {
    id: 1,
    title: "Real-Time Data Insights",
    description:
      "Process and analyze data streams in milliseconds with our advanced AI algorithms, giving you instant actionable insights.",
    icon: "BarChart3",
  },
  {
    id: 2,
    title: "Adaptive AI Models",
    description:
      "Self-learning models that evolve with your business needs, continuously improving accuracy and performance.",
    icon: "Brain",
  },
  {
    id: 3,
    title: "Seamless Integration",
    description:
      "Connect with your existing tools and workflows through our robust API and pre-built integrations.",
    icon: "Zap",
  },
  {
    id: 4,
    title: "Scalable Cloud Performance",
    description:
      "Enterprise-grade infrastructure that scales effortlessly from startup to global enterprise.",
    icon: "Cloud",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVision Inc.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
    content:
      "NovaMind AI transformed how we handle data analytics. The real-time insights have reduced our decision-making time by 70%.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Head of Operations",
    company: "DataFlow Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
    content:
      "The adaptive AI models are incredible. They learn from our patterns and have dramatically improved our forecasting accuracy.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Product Manager",
    company: "CloudScale Ventures",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5,
    content:
      "Integration was seamless. We had NovaMind up and running with our existing stack in less than a week. Outstanding support!",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO",
    company: "InnovateLabs",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 5,
    content:
      "Best AI platform we've used. The scalability is unmatched - it grew with us from 10 to 10,000 users without a hitch.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started with AI",
    features: [
      "Up to 10,000 API calls/month",
      "Basic AI models",
      "5 team members",
      "Email support",
      "Standard analytics",
      "Community access",
    ],
    cta: "Start Free Trial",
  },
  {
    id: 2,
    name: "Pro",
    price: "$199",
    period: "/month",
    description: "For growing businesses scaling their AI operations",
    features: [
      "Up to 100,000 API calls/month",
      "Advanced AI models",
      "Unlimited team members",
      "Priority support (24/7)",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale operations",
    features: [
      "Unlimited API calls",
      "Custom AI model training",
      "White-label options",
      "Enterprise support",
      "Custom analytics dashboards",
      "On-premise deployment",
      "Dedicated infrastructure",
      "Compliance & security audit",
    ],
    cta: "Contact Sales",
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is NovaMind AI?",
    answer:
      "NovaMind AI is an advanced artificial intelligence platform that helps businesses automate decision-making processes, analyze real-time data, and scale operations with adaptive AI models. Our platform combines cutting-edge machine learning with intuitive interfaces to deliver actionable insights.",
  },
  {
    id: 2,
    question: "How does the free trial work?",
    answer:
      "Our free trial gives you full access to the Starter plan features for 14 days. No credit card required. You can upgrade, downgrade, or cancel at any time. After the trial, you can choose to continue with a paid plan or stay on our limited free tier.",
  },
  {
    id: 3,
    question: "Can I integrate NovaMind with my existing tools?",
    answer:
      "Absolutely! NovaMind AI offers robust REST APIs and pre-built integrations with popular platforms like Salesforce, Slack, Microsoft Teams, Google Workspace, and more. Our Pro and Enterprise plans include custom integration support.",
  },
  {
    id: 4,
    question: "Is my data secure?",
    answer:
      "Yes. We take security very seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We're SOC 2 Type II certified, GDPR compliant, and undergo regular third-party security audits. Enterprise customers can opt for on-premise deployment for additional control.",
  },
  {
    id: 5,
    question: "What kind of support do you offer?",
    answer:
      "Starter plans include email support with 24-hour response time. Pro plans get priority 24/7 support via email, chat, and phone, plus a dedicated account manager. Enterprise customers receive white-glove support with custom SLAs and dedicated infrastructure monitoring.",
  },
  {
    id: 6,
    question: "Can I switch plans later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle, and you keep your current features until then.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    href: "https://x.com/QizarBilal",
    icon: "Twitter",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammed-qizar-bilal",
    icon: "Linkedin",
  },
  { name: "GitHub", href: "https://github.com/QizarBilal", icon: "Github" },
  {
    name: "Portfolio",
    href: "https://mohammed-qizar-bilal.netlify.app",
    icon: "MessageCircle",
  },
];

export const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Support", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Licenses", href: "#" },
  ],
};
