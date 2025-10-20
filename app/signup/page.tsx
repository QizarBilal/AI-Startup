"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  Check,
  ArrowRight,
  Github,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    "Free 14-day trial, no credit card required",
    "Access to all premium features",
    "24/7 customer support",
    "Cancel anytime",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-navy-950 dark:to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-navy-500/20 to-purple-500/20 dark:from-navy-500/30 dark:to-purple-500/30 rounded-full blur-3xl"
      />

      {/* Close button */}
      <Link
        href="/"
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-all hover:scale-110 shadow-lg group"
      >
        <X className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
      </Link>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Branding and benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block space-y-8"
          >
            {/* Logo and tagline */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3 mb-6 group"
              >
                <Logo
                  className="group-hover:scale-110 transition-transform"
                  size="lg"
                />
                <span className="text-3xl font-bold bg-gradient-to-r from-navy-700 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-purple-400 dark:to-navy-400 bg-clip-text text-transparent">
                  NovaMind AI
                </span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Start your AI journey today
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Join thousands of businesses transforming their operations with
                intelligent automation.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-navy-500 to-purple-500 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-600 dark:text-cyan-400">
                  10K+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-600 dark:text-cyan-400">
                  99.9%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Uptime
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-600 dark:text-cyan-400">
                  24/7
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Support
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Signup form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="glass-premium rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-white/10">
              {/* Mobile logo */}
              <div className="lg:hidden mb-6">
                <Link href="/" className="inline-flex items-center gap-2 mb-4">
                  <Logo size="md" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-navy-700 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-purple-400 dark:to-navy-400 bg-clip-text text-transparent">
                    NovaMind AI
                  </span>
                </Link>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Create your account
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Get started with your free trial today
                </p>
              </div>

              {/* Social signup options */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium">
                  <Github className="w-5 h-5" />
                  Continue with GitHub
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Signup form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-navy-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-navy-500/20 dark:focus:ring-cyan-400/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-navy-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-navy-500/20 dark:focus:ring-cyan-400/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-12 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-navy-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-navy-500/20 dark:focus:ring-cyan-400/20 outline-none transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Must be at least 8 characters with 1 uppercase, 1 lowercase,
                    and 1 number
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-navy-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-navy-500/20 dark:focus:ring-cyan-400/20 outline-none transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Terms and conditions */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-navy-600 focus:ring-navy-500 dark:focus:ring-cyan-400"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    I agree to the{" "}
                    <Link
                      href="#"
                      className="text-navy-600 dark:text-cyan-400 hover:underline font-medium"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      className="text-navy-600 dark:text-cyan-400 hover:underline font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary py-3 flex items-center justify-center gap-2"
                >
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>

              {/* Login link */}
              <div className="mt-6 text-center">
                <p className="text-slate-600 dark:text-slate-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-navy-600 dark:text-cyan-400 hover:underline font-semibold"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
