"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Modal from "./Modal";
import { FreeTrialContent } from "./ModalContents";

export default function ProductDemo() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <>
      <section
        id="product"
        className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-navy-950 dark:to-slate-950"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="px-4 py-2 rounded-full bg-navy-500/10 dark:bg-cyan-400/10 border border-navy-500/20 dark:border-cyan-400/20 text-navy-600 dark:text-cyan-400 text-sm font-medium">
                  Product Demo
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                AI-Powered Analytics{" "}
                <span className="gradient-text">Made Simple</span>
              </h2>

              <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
                Transform raw data into actionable insights with our intuitive
                dashboard. Real-time processing, predictive analytics, and
                intelligent recommendations—all in one place.
              </p>

              {/* Feature list */}
              <div className="space-y-4 mb-8">
                {[
                  "Real-time data processing and visualization",
                  "Predictive analytics with 95%+ accuracy",
                  "Custom AI model training in minutes",
                  "Seamless integration with 100+ tools",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-navy-500 to-purple-500 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setIsTrialModalOpen(true)}
                className="btn-primary group"
              >
                Try NovaMind Free
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Product screenshot mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-navy-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />

              {/* Main mockup container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                {/* Browser header */}
                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4 h-6 bg-slate-200 dark:bg-slate-700 rounded" />
                </div>

                {/* Dashboard mockup */}
                <div className="bg-white dark:bg-slate-900 p-6">
                  {/* Stats cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      {
                        label: "Total Users",
                        value: "45.2K",
                        change: "+12.5%",
                      },
                      { label: "Revenue", value: "$89.4K", change: "+23.1%" },
                      { label: "Conversion", value: "3.2%", change: "+5.4%" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                        className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600"
                      >
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                          {stat.label}
                        </div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-green-500 font-medium">
                          {stat.change}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart mockup */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="h-48 rounded-xl bg-gradient-to-br from-navy-500/10 to-purple-500/10 border border-navy-500/20 dark:border-cyan-400/20 flex items-end justify-around p-4"
                  >
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                        className="w-full mx-1 bg-gradient-to-t from-navy-500 to-purple-500 rounded-t"
                      />
                    ))}
                  </motion.div>

                  {/* Activity list */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-6 space-y-2"
                  >
                    {[
                      "AI Model deployed successfully",
                      "New data source integrated",
                      "Report generated",
                    ].map((activity, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div className="text-xs text-slate-700 dark:text-slate-300">
                          {activity}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-6 -right-6 px-6 py-3 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  99.9% Uptime
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-6 -left-6 px-6 py-3 rounded-full bg-gradient-to-r from-navy-500 to-purple-500 shadow-glow text-white"
              >
                <div className="text-sm font-semibold">AI-Powered</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Trial Modal */}
      <Modal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        size="lg"
      >
        <FreeTrialContent />
      </Modal>
    </>
  );
}
