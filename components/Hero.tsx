"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import { WatchDemoContent } from "./ModalContents";

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-purple-50/30 dark:from-slate-950 dark:via-navy-950 dark:to-slate-900">
          {/* Subtle animated gradient orb */}
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

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content - Left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-navy-200/50 dark:border-navy-500/30 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-medium text-navy-700 dark:text-cyan-300">
                  Powered by Advanced AI
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1]"
              >
                Next-Gen{" "}
                <span className="bg-gradient-to-r from-navy-600 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-purple-400 dark:to-navy-400 bg-clip-text text-transparent">
                  AI Intelligence
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl"
              >
                Automate workflows, gain real-time insights, and scale your
                operations with cutting-edge AI technology.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/signup" className="btn-primary group">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="btn-secondary group"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-8 pt-4"
              >
                {[
                  { value: "99.9%", label: "Uptime", icon: Zap },
                  { value: "10M+", label: "API Calls", icon: TrendingUp },
                  { value: "500+", label: "Clients", icon: Users },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-500/10 to-purple-500/10 dark:from-navy-500/20 dark:to-purple-500/20 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-navy-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual content - Right side - Redesigned Premium Circle Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[550px] flex items-center justify-center"
            >
              {/* Ambient glow layers - softer and more elegant */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-navy-400/25 via-purple-400/15 to-transparent blur-3xl"
              />

              {/* Secondary ambient layer */}
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute w-[420px] h-[420px] rounded-full bg-gradient-conic from-cyan-400/20 via-purple-400/25 to-navy-400/20 blur-2xl"
              />

              {/* Premium Central Design - Glass morphism circle with depth */}
              <div className="relative w-[320px] h-[320px]">
                {/* Background glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-500/40 via-purple-500/40 to-cyan-500/40 blur-2xl"
                />

                {/* Main circle with glass effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full h-full rounded-full glass-premium border-2 border-white/30 dark:border-white/20 shadow-2xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(30, 64, 175, 0.15) 0%, rgba(124, 58, 237, 0.15) 50%, rgba(6, 182, 212, 0.15) 100%)",
                  }}
                >
                  {/* Rotating gradient border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-[2px] rounded-full opacity-50"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0%, rgba(6, 182, 212, 0.8) 25%, transparent 50%, rgba(124, 58, 237, 0.8) 75%, transparent 100%)",
                    }}
                  />

                  {/* Inner content container */}
                  <div className="absolute inset-[2px] rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-50/50 via-purple-50/30 to-cyan-50/50 dark:from-navy-900/30 dark:via-purple-900/20 dark:to-cyan-900/30" />

                    {/* Animated mesh gradient background */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className="absolute inset-0 opacity-30"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 50%, rgba(30, 64, 175, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(124, 58, 237, 0.2) 0%, transparent 50%)",
                      }}
                    />

                    {/* Center content with productivity metrics */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                      {/* AI Brain Icon */}
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative"
                      >
                        <Sparkles className="w-16 h-16 text-navy-600 dark:text-cyan-400" />
                        {/* Pulsing glow */}
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                          className="absolute inset-0 bg-navy-500/30 dark:bg-cyan-400/30 rounded-full blur-xl"
                        />
                      </motion.div>

                      {/* Productivity Stats - Animated counters */}
                      <div className="grid grid-cols-3 gap-4 w-full">
                        {[
                          { value: "99%", label: "Accuracy", delay: 0 },
                          { value: "10x", label: "Faster", delay: 0.2 },
                          { value: "24/7", label: "Uptime", delay: 0.4 },
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 1 + stat.delay,
                              duration: 0.5,
                            }}
                            className="text-center"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: stat.delay,
                              }}
                              className="text-xl font-bold bg-gradient-to-r from-navy-600 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-purple-400 dark:to-navy-400 bg-clip-text text-transparent"
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-[10px] text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Activity indicator dots */}
                      <div className="flex items-center gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.2,
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-navy-500 to-purple-500"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Floating data particles */}
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 360) / 6;
                      const radius = 120;
                      return (
                        <motion.div
                          key={`data-${i}`}
                          animate={{
                            rotate: [angle, angle + 360],
                          }}
                          transition={{
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0"
                          style={{ transformOrigin: "center center" }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                              duration: 2 + i * 0.3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                            style={{
                              transform: `translate(-50%, -50%) translateY(-${radius}px)`,
                            }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Sleek Feature Cards - Modern minimal design */}
              {[
                {
                  name: "Analytics",
                  icon: TrendingUp,
                  delay: 0,
                  angle: 30,
                  distance: 220,
                  color: "from-cyan-500 to-blue-600",
                },
                {
                  name: "AI Models",
                  icon: Sparkles,
                  delay: 0.15,
                  angle: 90,
                  distance: 220,
                  color: "from-purple-500 to-pink-600",
                },
                {
                  name: "Automation",
                  icon: Zap,
                  delay: 0.3,
                  angle: 150,
                  distance: 220,
                  color: "from-amber-500 to-orange-600",
                },
                {
                  name: "Teams",
                  icon: Users,
                  delay: 0.45,
                  angle: 210,
                  distance: 220,
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  name: "Security",
                  icon: Zap,
                  delay: 0.6,
                  angle: 270,
                  distance: 220,
                  color: "from-indigo-500 to-violet-600",
                },
                {
                  name: "Insights",
                  icon: TrendingUp,
                  delay: 0.75,
                  angle: 330,
                  distance: 220,
                  color: "from-rose-500 to-red-600",
                },
              ].map((feature, index) => {
                const x =
                  Math.cos((feature.angle * Math.PI) / 180) * feature.distance;
                const y =
                  Math.sin((feature.angle * Math.PI) / 180) * feature.distance;

                return (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [y, y - 8, y],
                    }}
                    transition={{
                      opacity: { delay: 1 + feature.delay, duration: 0.6 },
                      scale: {
                        delay: 1 + feature.delay,
                        duration: 0.6,
                        type: "spring",
                      },
                      y: {
                        delay: 2 + feature.delay,
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute top-1/2 left-1/2 group cursor-pointer"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                  >
                    {/* Hover glow effect */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 0.6, scale: 1.4 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} blur-xl rounded-2xl`}
                    />

                    {/* Sleek card */}
                    <motion.div
                      whileHover={{ scale: 1.08, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative glass-premium px-4 py-3 rounded-2xl shadow-lg border border-white/40 dark:border-white/20 backdrop-blur-xl overflow-hidden min-w-[110px]"
                    >
                      {/* Gradient border on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 rounded-2xl`}
                      />

                      {/* Content */}
                      <div className="relative flex items-center gap-2.5 justify-center">
                        {/* Icon */}
                        <motion.div
                          animate={{
                            rotate: [0, 5, 0, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: feature.delay,
                          }}
                          className={`w-5 h-5 flex-shrink-0`}
                        >
                          <feature.icon
                            className={`w-full h-full bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                            style={{
                              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                            }}
                          />
                        </motion.div>

                        {/* Text */}
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
                          {feature.name}
                        </div>
                      </div>

                      {/* Bottom indicator line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color} origin-left`}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Elegant orbital rings - minimal and refined */}
              {/* Primary connection ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <svg className="w-[480px] h-[480px]" viewBox="0 0 480 480">
                  <motion.circle
                    cx="240"
                    cy="240"
                    r="238"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="1.5"
                    strokeDasharray="8 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                      <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
                      <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Secondary accent ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  className="w-[400px] h-[400px] rounded-full border border-slate-300/20 dark:border-slate-600/20"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, transparent 98%, rgba(168, 85, 247, 0.1) 100%)",
                  }}
                />
              </motion.div>

              {/* Subtle data flow particles */}
              {[...Array(4)].map((_, i) => {
                const startAngle = (i * 360) / 4;
                return (
                  <motion.div
                    key={`flow-${i}`}
                    animate={{
                      rotate: [startAngle, startAngle + 360],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 1.5,
                    }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <motion.div
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: i * 1.5,
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-navy-500 absolute"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) translateY(-240px)",
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Radial connection lines - subtle and elegant */}
              {[30, 90, 150, 210, 270, 330].map((angle, i) => (
                <motion.div
                  key={`line-${i}`}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: [0, 0.15, 0],
                    scaleX: [0, 1, 1],
                  }}
                  transition={{
                    opacity: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    },
                    scaleX: {
                      duration: 2,
                      delay: 1.5 + i * 0.15,
                    },
                  }}
                  className="absolute top-1/2 left-1/2 h-[1px] origin-left pointer-events-none"
                  style={{
                    width: "220px",
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    background:
                      "linear-gradient(90deg, rgba(168, 85, 247, 0.4) 0%, transparent 100%)",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal with Custom Content */}
      <Modal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        title=""
        size="xl"
      >
        <WatchDemoContent />
      </Modal>
    </>
  );
}
