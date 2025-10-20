"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useState } from "react";

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      className="section-padding bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            See what our customers have to say about transforming their
            businesses with NovaMind AI
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:border-navy-500 dark:hover:border-cyan-400 hover:shadow-glow hover:-translate-y-2">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.05,
                      }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-navy-500 to-purple-500 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-navy-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 overflow-hidden"
        >
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
            Trusted by 500+ companies worldwide
          </p>

          {/* Infinite Scrolling Carousel */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-16 animate-scroll">
              {/* First set of companies */}
              {[
                "TechVision",
                "DataFlow",
                "CloudScale",
                "InnovateLabs",
                "FutureAI",
                "QuantumTech",
                "NeuralWorks",
                "SmartData",
                "AICore",
                "CloudMind",
              ].map((company, i) => (
                <div
                  key={`first-${i}`}
                  className="flex-shrink-0 text-2xl font-bold text-slate-400 dark:text-slate-600 hover:text-navy-600 dark:hover:text-cyan-400 transition-colors cursor-default whitespace-nowrap"
                >
                  {company}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                "TechVision",
                "DataFlow",
                "CloudScale",
                "InnovateLabs",
                "FutureAI",
                "QuantumTech",
                "NeuralWorks",
                "SmartData",
                "AICore",
                "CloudMind",
              ].map((company, i) => (
                <div
                  key={`second-${i}`}
                  className="flex-shrink-0 text-2xl font-bold text-slate-400 dark:text-slate-600 hover:text-navy-600 dark:hover:text-cyan-400 transition-colors cursor-default whitespace-nowrap"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
