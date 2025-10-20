"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { useState } from "react";
import Modal from "./Modal";
import { PricingPlanContent } from "./ModalContents";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const handlePlanClick = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="pricing"
        className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-navy-950 dark:to-slate-950"
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Choose the perfect plan for your team. All plans include a 14-day
              free trial.
            </p>
          </motion.div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group ${
                  plan.highlighted ? "md:scale-105 z-10" : ""
                }`}
              >
                {/* Highlighted badge */}
                {plan.highlighted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                  >
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-navy-500 to-purple-500 text-white text-sm font-semibold flex items-center gap-1 shadow-glow">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Card */}
                <div
                  className={`h-full p-8 rounded-2xl border transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-br from-navy-950 to-navy-900 border-purple-500 shadow-glow"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-navy-500 dark:hover:border-cyan-400 hover:shadow-lg"
                  }`}
                >
                  {/* Plan name */}
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.highlighted
                        ? "text-white"
                        : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mb-6 ${
                      plan.highlighted
                        ? "text-slate-300"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-5xl font-bold ${
                          plan.highlighted
                            ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-lg ${
                          plan.highlighted
                            ? "text-slate-400"
                            : "text-slate-700 dark:text-slate-400"
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* CTA button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePlanClick(plan.name)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-glow-cyan hover:shadow-glow"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>

                  {/* Features list */}
                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + i * 0.05,
                        }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.highlighted
                              ? "bg-gradient-to-br from-cyan-500 to-purple-500"
                              : "bg-gradient-to-br from-navy-500 to-purple-500"
                          }`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span
                          className={`text-sm ${
                            plan.highlighted
                              ? "text-slate-200"
                              : "text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Gradient background for highlighted card */}
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-500 to-purple-500 rounded-2xl blur-2xl opacity-20 -z-10" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              All plans include SSL encryption, 99.9% uptime SLA, and regular
              backups
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Need a custom plan?{" "}
              <button
                onClick={() => handlePlanClick("Enterprise")}
                className="text-navy-600 dark:text-cyan-400 hover:underline font-semibold"
              >
                Contact our sales team
              </button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plan Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="lg"
      >
        <PricingPlanContent planName={selectedPlan} />
      </Modal>
    </>
  );
}
