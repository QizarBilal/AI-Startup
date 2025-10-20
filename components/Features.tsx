"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Brain, Zap, Cloud, Sparkles } from "lucide-react";
import { features } from "@/lib/data";
import Modal from "./Modal";
import { DocumentationContent } from "./ModalContents";

const iconMap: Record<string, any> = {
  BarChart3,
  Brain,
  Zap,
  Cloud,
};

export default function Features() {
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);

  return (
    <>
      <section
        id="features"
        className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-navy-950 dark:to-slate-900"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-500/10 dark:bg-navy-500/20 border border-navy-500/20 dark:border-navy-400/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-navy-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-navy-700 dark:text-cyan-400">
                Powerful Features
              </span>
            </motion.div>

            <h2 className="heading-md gradient-text mb-6">
              Everything You Need for Modern AI Solutions
            </h2>
            <p className="subtitle max-w-3xl mx-auto">
              Built for teams who want to leverage cutting-edge AI without the
              complexity. Deploy, scale, and innovate with confidence.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  {/* Premium Card */}
                  <div className="card-premium h-full relative overflow-hidden">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-navy-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="icon-container group-hover:shadow-glow-purple">
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-navy-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:gradient-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-effect pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="glass-premium max-w-3xl mx-auto p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to explore all features?
              </h3>
              <p className="subtitle mb-8">
                Dive deep into our comprehensive documentation and discover how
                NovaMind AI can transform your workflow
              </p>
              <button
                onClick={() => setIsDocsModalOpen(true)}
                className="btn-primary group"
              >
                <span className="relative z-10">
                  Explore Full Documentation
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Modal */}
      <Modal
        isOpen={isDocsModalOpen}
        onClose={() => setIsDocsModalOpen(false)}
        size="lg"
      >
        <DocumentationContent />
      </Modal>
    </>
  );
}
