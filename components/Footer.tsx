"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
  Check,
  Shield,
  FileText,
  Clock,
  Book,
  Users,
  Briefcase,
  Newspaper,
  Code,
  HelpCircle,
  Activity,
} from "lucide-react";
import { navLinks, footerLinks, socialLinks } from "@/lib/data";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import Logo from "./Logo";

const iconMap: Record<string, any> = {
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
};

// Modal content data for each footer link
const modalContentData: Record<
  string,
  {
    title: string;
    description: string;
    features?: string[];
    content?: string;
    action?: string;
    showContactForm?: boolean; // Only show form when user needs to contact us
  }
> = {
  // Product links
  Features: {
    title: "Explore NovaMind AI Features",
    description:
      "Discover powerful AI capabilities designed to transform your business operations.",
    features: [
      "Advanced Machine Learning Models",
      "Real-time Data Processing",
      "Predictive Analytics Engine",
      "Natural Language Processing",
      "Computer Vision Integration",
      "Automated Workflow Management",
      "Custom Model Training",
      "Enterprise-grade Security",
    ],
    action: "Start Free Trial",
    showContactForm: true, // User wants to try features
  },
  Pricing: {
    title: "Choose Your Perfect Plan",
    description:
      "Flexible pricing options designed to scale with your business needs.",
    content:
      "Our pricing is transparent and designed to provide maximum value. Whether you're a startup or an enterprise, we have a plan that fits your requirements. Contact us for a personalized quote.",
    action: "Request Custom Quote",
    showContactForm: true, // User needs pricing info
  },
  API: {
    title: "NovaMind AI API Documentation",
    description:
      "Integrate cutting-edge AI capabilities directly into your applications.",
    features: [
      "RESTful API with 99.9% uptime",
      "Comprehensive SDK for major languages",
      "Detailed documentation and examples",
      "Real-time webhooks and streaming",
      "Rate limiting and usage analytics",
      "Sandbox environment for testing",
    ],
    action: "Get API Key",
  },
  Integrations: {
    title: "Seamless Integrations",
    description: "Connect NovaMind AI with your favorite tools and platforms.",
    features: [
      "Slack, Microsoft Teams, Discord",
      "Salesforce, HubSpot, Zendesk",
      "AWS, Azure, Google Cloud",
      "GitHub, GitLab, Bitbucket",
      "Zapier, Make, n8n",
      "Custom webhook integrations",
    ],
    action: "View All Integrations",
    showContactForm: false,
  },
  Roadmap: {
    title: "Product Roadmap",
    description:
      "See what we're building next and share your feedback on upcoming features.",
    content:
      "Our roadmap is driven by customer feedback and industry trends. We're continuously innovating to bring you the most advanced AI solutions. Vote on features you'd like to see next!",
    action: "View Full Roadmap",
    showContactForm: false,
  },

  // Company links
  About: {
    title: "About NovaMind AI",
    description:
      "We're on a mission to democratize AI and make it accessible to businesses of all sizes.",
    content:
      "Founded in 2024, NovaMind AI brings together world-class AI researchers, engineers, and business experts. Our team has worked at leading tech companies and research institutions, bringing decades of combined experience in artificial intelligence, machine learning, and enterprise software.",
    action: "Meet Our Team",
    showContactForm: false,
  },
  Blog: {
    title: "NovaMind AI Blog",
    description: "Latest insights, tutorials, and updates from our AI experts.",
    content:
      "Stay updated with the latest trends in AI, machine learning best practices, customer success stories, and product announcements. Our blog features technical deep-dives, industry analysis, and practical guides.",
    action: "Read Latest Posts",
    showContactForm: false,
  },
  Careers: {
    title: "Join Our Team",
    description:
      "Help us build the future of AI. We're always looking for talented individuals.",
    features: [
      "Competitive salary and equity",
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Unlimited PTO policy",
      "Learning and development budget",
      "Latest tech and equipment",
      "Collaborative work environment",
    ],
    action: "View Open Positions",
    showContactForm: true,
  },
  Press: {
    title: "Press & Media",
    description: "Latest news, press releases, and media resources.",
    content:
      "For press inquiries, interviews, or media resources including logos, screenshots, and executive bios, please contact our press team. We're always happy to discuss our technology, vision, and impact.",
    action: "Contact Press Team",
    showContactForm: true,
  },
  Partners: {
    title: "Partnership Opportunities",
    description:
      "Collaborate with NovaMind AI to deliver exceptional value to customers.",
    content:
      "We work with technology partners, resellers, and system integrators worldwide. Our partnership program offers training, co-marketing opportunities, and dedicated support to help you succeed.",
    action: "Become a Partner",
    showContactForm: true,
  },

  // Resources links
  Documentation: {
    title: "Developer Documentation",
    description: "Comprehensive guides, API references, and code examples.",
    features: [
      "Getting Started Guide",
      "API Reference Documentation",
      "SDK Documentation (Python, Node.js, Java)",
      "Integration Tutorials",
      "Best Practices & Security",
      "Sample Code & Use Cases",
    ],
    action: "Access Documentation",
    showContactForm: false,
  },
  "Help Center": {
    title: "Help Center",
    description:
      "Find answers to common questions and get support when you need it.",
    content:
      "Browse our knowledge base, video tutorials, and FAQs. Can't find what you're looking for? Our support team is available 24/7 to help you succeed.",
    action: "Visit Help Center",
    showContactForm: true,
  },
  Community: {
    title: "Join Our Community",
    description:
      "Connect with other NovaMind AI users, share knowledge, and get inspired.",
    features: [
      "Active Discord server with 10,000+ members",
      "Monthly virtual meetups and webinars",
      "Community-contributed templates and tools",
      "Expert Q&A sessions",
      "Beta program access",
      "Recognition and rewards program",
    ],
    action: "Join Community",
    showContactForm: false,
  },
  Tutorials: {
    title: "Video Tutorials & Guides",
    description: "Step-by-step tutorials to help you master NovaMind AI.",
    content:
      "From basic setup to advanced use cases, our video library covers everything you need to know. New tutorials are added weekly based on community requests.",
    action: "Watch Tutorials",
    showContactForm: false,
  },
  Status: {
    title: "System Status",
    description:
      "Real-time status and uptime information for all NovaMind AI services.",
    features: [
      "API Services: Operational ✓",
      "Dashboard: Operational ✓",
      "Authentication: Operational ✓",
      "Data Processing: Operational ✓",
      "Current Uptime: 99.98%",
      "Last Incident: 47 days ago",
    ],
    action: "Subscribe to Updates",
    showContactForm: false,
  },

  // Legal links
  Privacy: {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your data.",
    content:
      "Your privacy is our top priority. We're committed to transparency about our data practices and give you full control over your information. This policy explains what data we collect, how we use it, and your rights regarding your personal information.",
    action: "Read Full Policy",
    showContactForm: false,
  },
  Terms: {
    title: "Terms of Service",
    description: "Legal terms and conditions for using NovaMind AI services.",
    content:
      "These terms govern your use of NovaMind AI services. By using our platform, you agree to these terms. We've written them in plain language to make them as clear as possible.",
    action: "Read Full Terms",
    showContactForm: false,
  },
  Security: {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security to protect your data and operations.",
    features: [
      "SOC 2 Type II Certified",
      "GDPR & CCPA Compliant",
      "ISO 27001 Certified",
      "End-to-end encryption",
      "Regular security audits",
      "24/7 security monitoring",
      "Data residency options",
      "Bug bounty program",
    ],
    action: "View Security Details",
    showContactForm: false,
  },
  Compliance: {
    title: "Compliance & Certifications",
    description: "Industry standards and certifications we maintain.",
    content:
      "NovaMind AI maintains the highest standards of compliance across multiple frameworks. Our commitment to compliance ensures your data is handled with the utmost care and meets regulatory requirements.",
    features: [
      "SOC 2 Type II",
      "ISO 27001:2013",
      "GDPR Compliant",
      "HIPAA Ready",
      "CCPA Compliant",
      "PCI DSS Level 1",
    ],
    action: "Request Compliance Docs",
    showContactForm: true,
  },
  "Privacy Policy": {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your data.",
    content:
      "Your privacy is our top priority. We're committed to transparency about our data practices and give you full control over your information. This policy explains what data we collect, how we use it, and your rights regarding your personal information.",
    action: "Read Full Policy",
    showContactForm: false,
  },
  "Terms of Service": {
    title: "Terms of Service",
    description: "Legal terms and conditions for using NovaMind AI services.",
    content:
      "These terms govern your use of NovaMind AI services. By using our platform, you agree to these terms. We've written them in plain language to make them as clear as possible.",
    action: "Read Full Terms",
    showContactForm: false,
  },

  // Additional footer links
  Contact: {
    title: "Contact NovaMind AI",
    description: "Get in touch with our team. We're here to help you succeed.",
    features: [
      "24/7 Customer Support",
      "Sales Inquiries",
      "Technical Support",
      "Partnership Opportunities",
      "Media & Press Relations",
      "General Questions",
    ],
    content:
      "Whether you have questions about our products, need technical assistance, or want to explore partnership opportunities, our team is ready to assist you. We typically respond within 2 hours during business hours.",
    action: "Send Message",
    showContactForm: false, // Info-only, no form needed
  },
  Resources: {
    title: "Learning Resources",
    description: "Everything you need to master NovaMind AI.",
    features: [
      "Comprehensive documentation library",
      "Video tutorials and webinars",
      "API reference and code examples",
      "Community forum discussions",
      "Best practices guides",
      "Case studies and success stories",
      "Developer blog and updates",
      "Interactive demos and sandboxes",
    ],
    content:
      "Access our extensive resource library designed to help you get the most out of NovaMind AI. From beginner tutorials to advanced implementation guides, we've got you covered.",
    action: "Explore Resources",
    showContactForm: false,
  },
  "API Reference": {
    title: "API Reference Documentation",
    description: "Complete API documentation for developers.",
    features: [
      "RESTful API endpoints with detailed descriptions",
      "Authentication and authorization guides",
      "Request/response examples in multiple languages",
      "Error codes and troubleshooting",
      "Rate limits and best practices",
      "Webhook configuration and events",
      "SDK downloads (Python, Node.js, Java, Go)",
      "Interactive API explorer",
    ],
    content:
      "Our API is designed to be intuitive and powerful. Whether you're building a simple integration or a complex application, our comprehensive documentation will guide you every step of the way.",
    action: "View API Docs",
    showContactForm: false,
  },
  Support: {
    title: "Customer Support",
    description: "World-class support when you need it most.",
    features: [
      "24/7 live chat support",
      "Email support with <2 hour response time",
      "Phone support for enterprise customers",
      "Dedicated account managers (Enterprise)",
      "Priority support queue",
      "Screen sharing and remote assistance",
      "Comprehensive knowledge base",
      "Community-driven support forums",
    ],
    content:
      "Our support team is passionate about your success. We offer multiple support channels to ensure you get the help you need, when you need it. Enterprise customers receive dedicated support with guaranteed response times.",
    action: "Get Support",
    showContactForm: false,
  },
  Legal: {
    title: "Legal Information",
    description: "Legal documents and company policies.",
    features: [
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
      "Acceptable Use Policy",
      "Data Processing Agreement",
      "Service Level Agreement (SLA)",
      "Licenses and Attributions",
      "Copyright and Trademark Policy",
    ],
    content:
      "Transparency is core to our values. All legal documents are written in clear, accessible language. We regularly update our policies to reflect the latest regulations and best practices.",
    action: "View Legal Documents",
    showContactForm: false,
  },
  "Cookie Policy": {
    title: "Cookie Policy",
    description: "How we use cookies and similar technologies.",
    content:
      "We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. This policy explains what cookies are, how we use them, and how you can manage your cookie preferences.\n\nYou can control cookies through your browser settings and opt out of non-essential cookies at any time. Essential cookies required for the platform to function cannot be disabled.",
    features: [
      "Essential cookies for authentication and security",
      "Performance cookies to analyze site usage",
      "Functional cookies to remember your preferences",
      "Marketing cookies for personalized advertising",
      "Full control over cookie preferences",
      "Compliant with GDPR and CCPA",
    ],
    action: "Manage Cookie Preferences",
    showContactForm: false,
  },
  Licenses: {
    title: "Software Licenses & Attributions",
    description: "Open source software and licenses we use.",
    content:
      "NovaMind AI is built with the help of amazing open source projects. We're grateful to the developer community and committed to giving back. This page lists all third-party software, libraries, and their respective licenses used in our platform.",
    features: [
      "React (MIT License)",
      "Next.js (MIT License)",
      "TensorFlow (Apache 2.0)",
      "PyTorch (BSD License)",
      "OpenAI API (Proprietary)",
      "And 200+ other open source libraries",
      "Full attribution and license texts available",
      "Open source contributions by our team",
    ],
    action: "View Full License List",
    showContactForm: false,
  },
};

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string>("");

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string
  ) => {
    // Only prevent default for # links (modals)
    if (href === "#") {
      e.preventDefault();
      setSelectedLink(label);
      setIsModalOpen(true);
    }
  };

  const currentModalData = modalContentData[selectedLink] || {
    title: selectedLink,
    description: "Get in touch with us to learn more.",
    action: "Contact Us",
  };

  return (
    <>
      <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-300 dark:border-slate-700">
        <div className="container-custom py-16">
          {/* Main footer content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center gap-2 mb-4">
                  <Logo size="md" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-navy-700 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-purple-400 dark:to-navy-400 bg-clip-text text-transparent">
                    NovaMind AI
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-400 mb-6 max-w-sm">
                  Empowering businesses with next-generation AI intelligence.
                  Transform your data into actionable insights.
                </p>
                {/* Social links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-cyan-400 hover:border-navy-600 dark:hover:border-cyan-400 transition-all"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Product links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.label, link.href)}
                      className="inline-block min-h-[44px] py-2 text-slate-700 dark:text-slate-400 hover:text-navy-600 dark:hover:text-cyan-400 transition-colors cursor-pointer touch-manipulation"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.label, link.href)}
                      className="inline-block min-h-[44px] py-2 text-slate-700 dark:text-slate-400 hover:text-navy-600 dark:hover:text-cyan-400 transition-colors cursor-pointer touch-manipulation"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.label, link.href)}
                      className="inline-block min-h-[44px] py-2 text-slate-700 dark:text-slate-400 hover:text-navy-600 dark:hover:text-cyan-400 transition-colors cursor-pointer touch-manipulation"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.label, link.href)}
                      className="inline-block min-h-[44px] py-2 text-slate-700 dark:text-slate-400 hover:text-navy-600 dark:hover:text-cyan-400 transition-colors cursor-pointer touch-manipulation"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 border-t border-slate-300 dark:border-slate-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-700 dark:text-slate-400">
                © {new Date().getFullYear()} NovaMind AI. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-700 dark:text-slate-400">
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Status", "#")}
                  className="inline-block min-h-[44px] py-2 hover:text-navy-600 dark:hover:text-cyan-400 transition-colors cursor-pointer touch-manipulation"
                >
                  Status
                </a>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Privacy Policy", "#")}
                  className="inline-block min-h-[44px] py-2 hover:text-navy-600 dark:hover:text-cyan-400 transition-colors cursor-pointer touch-manipulation"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Terms of Service", "#")}
                  className="inline-block min-h-[44px] py-2 hover:text-navy-600 dark:hover:text-cyan-400 transition-colors cursor-pointer touch-manipulation"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Professional Modal with Custom Content for Each Link */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentModalData.title}
        size="lg"
      >
        <div className="space-y-6">
          {/* Description */}
          <p className="text-lg text-slate-700 dark:text-slate-300">
            {currentModalData.description}
          </p>

          {/* Features List (if available) */}
          {currentModalData.features &&
            currentModalData.features.length > 0 && (
              <div className="space-y-3">
                {currentModalData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-navy-500 to-purple-500 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

          {/* Additional Content (if available) */}
          {currentModalData.content && (
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentModalData.content}
              </p>
            </div>
          )}

          {/* Contact Form - Only show when necessary */}
          {currentModalData.showContactForm && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {currentModalData.action || "Get in Touch"}
              </h3>
              <ContactForm
                type={
                  selectedLink.toLowerCase().includes("pricing") ||
                  selectedLink.toLowerCase().includes("api") ||
                  selectedLink.toLowerCase().includes("career") ||
                  selectedLink.toLowerCase().includes("partner")
                    ? "demo"
                    : "contact"
                }
              />
            </div>
          )}

          {/* Call-to-Action Button - Show when no contact form */}
          {!currentModalData.showContactForm && currentModalData.action && (
            <div className="pt-2">
              <button className="btn-primary w-full">
                {currentModalData.action}
              </button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
