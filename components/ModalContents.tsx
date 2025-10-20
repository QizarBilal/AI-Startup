"use client";

import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Code,
  BookOpen,
  Video,
  Calendar,
  ArrowRight,
  Star,
  Award,
  Rocket,
} from "lucide-react";
import ContactForm from "./ContactForm";

// Get Started Modal Content
export function GetStartedContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-navy-500 to-purple-500 mb-4">
          <Rocket className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Start Your AI Journey Today
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Join thousands of businesses already using NovaMind AI
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { icon: Zap, label: "Instant Setup", desc: "Ready in 5 minutes" },
          {
            icon: Shield,
            label: "Secure & Safe",
            desc: "Enterprise-grade security",
          },
          { icon: Users, label: "Expert Support", desc: "24/7 assistance" },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
          >
            <feature.icon className="w-8 h-8 mx-auto mb-2 text-navy-600 dark:text-cyan-400" />
            <div className="font-semibold text-slate-900 dark:text-white text-sm">
              {feature.label}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              {feature.desc}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-navy-50 to-purple-50 dark:from-navy-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-6">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          What&apos;s Included in Your Free Trial
        </h4>
        <ul className="space-y-2">
          {[
            "Full access to all AI models for 14 days",
            "1,000 free API calls",
            "Premium support and onboarding",
            "Access to all integrations",
            "No credit card required",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
            >
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ContactForm type="getStarted" />
    </div>
  );
}

import Link from "next/link";

// Watch Demo Modal Content
export function WatchDemoContent() {
  return (
    <div className="space-y-6">
      {/* Video Player */}
      <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="NovaMind AI Product Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Video Info */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <Video className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          See NovaMind AI in Action
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Watch how our AI-powered platform helps businesses automate workflows,
          analyze data in real-time, and scale operations effortlessly.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { time: "0:30", topic: "Quick Setup Process" },
          { time: "2:15", topic: "AI Model Training" },
          { time: "4:20", topic: "Real-time Analytics" },
          { time: "6:10", topic: "Integration Examples" },
        ].map((highlight, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
              {highlight.time}
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {highlight.topic}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-4">
        <Link href="/signup" className="btn-primary w-full group block">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </div>
  );
}

// Documentation Access Modal Content
export function DocumentationContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Access Premium Documentation
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Get comprehensive guides, API references, and best practices
        </p>
      </div>

      {/* Documentation Categories */}
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            title: "Getting Started",
            icon: Rocket,
            items: ["Quick Start Guide", "Installation", "First API Call"],
          },
          {
            title: "API Reference",
            icon: Code,
            items: ["REST API", "GraphQL", "WebSockets"],
          },
          {
            title: "Tutorials",
            icon: Video,
            items: ["Video Courses", "Step-by-step Guides", "Use Cases"],
          },
          {
            title: "Best Practices",
            icon: Award,
            items: ["Security", "Performance", "Scalability"],
          },
        ].map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-500 to-purple-500 flex items-center justify-center">
                <category.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h4>
            </div>
            <ul className="space-y-2">
              {category.items.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 p-6 rounded-xl bg-gradient-to-r from-navy-50 to-purple-50 dark:from-navy-900/20 dark:to-purple-900/20">
        {[
          { value: "500+", label: "Articles" },
          { value: "100+", label: "Tutorials" },
          { value: "50+", label: "Videos" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-navy-600 dark:text-cyan-400">
              {stat.value}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
          Request Documentation Access
        </h4>
        <ContactForm type="demo" />
      </div>
    </div>
  );
}

// Pricing Plan Selection Modal Content
export function PricingPlanContent({ planName }: { planName: string }) {
  const planDetails: Record<
    string,
    {
      price: string;
      description: string;
      features: string[];
      highlight: string;
    }
  > = {
    Starter: {
      price: "$29/month",
      description:
        "Perfect for individuals and small teams getting started with AI",
      highlight: "Most Popular for Startups",
      features: [
        "10,000 API calls per month",
        "5 AI models access",
        "Email support",
        "Basic analytics",
        "Community access",
        "1 team member",
      ],
    },
    Professional: {
      price: "$99/month",
      description: "Ideal for growing businesses requiring advanced features",
      highlight: "Best Value",
      features: [
        "100,000 API calls per month",
        "All AI models access",
        "Priority support (24/7)",
        "Advanced analytics & insights",
        "Custom integrations",
        "Up to 10 team members",
        "SSO authentication",
        "Custom model training",
      ],
    },
    Enterprise: {
      price: "Custom",
      description:
        "Tailored solutions for large organizations with specific needs",
      highlight: "Maximum Power",
      features: [
        "Unlimited API calls",
        "All premium AI models",
        "Dedicated account manager",
        "Custom SLA",
        "On-premise deployment option",
        "Unlimited team members",
        "Advanced security features",
        "Custom development",
        "Training & consulting",
      ],
    },
  };

  const plan = planDetails[planName] || planDetails.Starter;

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-navy-500 to-purple-500 text-white text-sm font-semibold mb-4">
          {plan.highlight}
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {planName} Plan
        </h3>
        <div className="text-4xl font-bold bg-gradient-to-r from-navy-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
          {plan.price}
        </div>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          {plan.description}
        </p>
      </div>

      {/* Features */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          Everything Included
        </h4>
        <div className="grid md:grid-cols-2 gap-3">
          {plan.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-2"
            >
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-3 gap-4 py-4">
        {[
          { icon: Shield, label: "Secure" },
          { icon: Zap, label: "Fast Setup" },
          { icon: Award, label: "Guaranteed" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <item.icon className="w-8 h-8 mx-auto mb-2 text-navy-600 dark:text-cyan-400" />
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
          {planName === "Enterprise"
            ? "Contact Sales for Custom Pricing"
            : `Start with ${planName} Plan`}
        </h4>
        <ContactForm type="getStarted" />
      </div>
    </div>
  );
}

// Schedule Demo Modal Content
export function ScheduleDemoContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Schedule Your Personal Demo
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          See how NovaMind AI can transform your business in a 30-minute live
          demo
        </p>
      </div>

      {/* What to Expect */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
          What You&apos;ll Learn
        </h4>
        <div className="space-y-3">
          {[
            "Live walkthrough of NovaMind AI platform",
            "Custom use cases for your industry",
            "Integration options with your existing tools",
            "Pricing and implementation timeline",
            "Q&A with our AI experts",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-slate-700 dark:text-slate-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "30 min", label: "Demo Duration" },
          { value: "1-on-1", label: "Personal" },
          { value: "Free", label: "No Cost" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
          >
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
              {stat.value}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
          Book Your Demo Session
        </h4>
        <ContactForm type="demo" />
      </div>
    </div>
  );
}

// Contact Support Modal Content
export function ContactSupportContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mb-4">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Get Expert Support
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Our support team is here to help you succeed
        </p>
      </div>

      {/* Support Options */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {[
          {
            title: "Live Chat",
            desc: "Instant responses",
            time: "Available 24/7",
            icon: "💬",
          },
          {
            title: "Email Support",
            desc: "Detailed assistance",
            time: "Response in 2 hours",
            icon: "📧",
          },
          {
            title: "Phone Support",
            desc: "Direct conversation",
            time: "Mon-Fri, 9AM-6PM EST",
            icon: "📞",
          },
          {
            title: "Screen Share",
            desc: "Hands-on help",
            time: "Schedule anytime",
            icon: "🖥️",
          },
        ].map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-lg transition-all"
          >
            <div className="text-3xl mb-2">{option.icon}</div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
              {option.title}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              {option.desc}
            </p>
            <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
              {option.time}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Popular Topics */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
          Popular Support Topics
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "API Integration",
            "Billing Issues",
            "Model Training",
            "Performance",
            "Security",
            "Custom Solutions",
          ].map((topic, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm text-slate-700 dark:text-slate-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
          Send Us a Message
        </h4>
        <ContactForm type="contact" />
      </div>
    </div>
  );
}

// Free Trial Modal Content
export function FreeTrialContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4 animate-pulse">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Try NovaMind AI Free for 14 Days
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Experience the full power of AI with zero commitment
        </p>
      </div>

      {/* Trial Benefits */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {[
          {
            icon: "🚀",
            title: "Instant Access",
            desc: "Start using AI in minutes",
          },
          {
            icon: "💳",
            title: "No Credit Card",
            desc: "Sign up without payment info",
          },
          {
            icon: "🔓",
            title: "Full Features",
            desc: "Access all premium capabilities",
          },
          {
            icon: "🎯",
            title: "Real Data",
            desc: "Test with your actual use cases",
          },
          {
            icon: "👥",
            title: "Team Collaboration",
            desc: "Invite your whole team",
          },
          { icon: "🛡️", title: "Cancel Anytime", desc: "No strings attached" },
        ].map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50"
          >
            <div className="text-2xl">{benefit.icon}</div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-white text-sm">
                {benefit.title}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {benefit.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* What Happens Next */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
          What Happens After You Sign Up
        </h4>
        <div className="space-y-3">
          {[
            { step: "1", text: "Instant account activation", time: "0 min" },
            {
              step: "2",
              text: "Welcome email with quick start guide",
              time: "2 min",
            },
            { step: "3", text: "Onboarding call (optional)", time: "24 hrs" },
            { step: "4", text: "Full trial access", time: "14 days" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {item.step}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  {item.text}
                </div>
              </div>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                {item.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
          Start Your Free Trial Now
        </h4>
        <ContactForm type="getStarted" />
      </div>
    </div>
  );
}
