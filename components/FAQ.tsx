"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";
import { useState } from "react";
import Modal from "./Modal";
import { ScheduleDemoContent, ContactSupportContent } from "./ModalContents";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section id="faq" className="section-padding bg-white dark:bg-slate-950">
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to know about NovaMind AI. Can&apos;t find
              your answer?{" "}
              <a
                href="#"
                className="text-navy-600 dark:text-cyan-400 hover:underline"
              >
                Contact our support team
              </a>
              .
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                  {/* Question button */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span className="text-lg font-semibold text-slate-900 dark:text-white pr-8">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openId === faq.id
                          ? "bg-gradient-to-br from-navy-500 to-purple-500 rotate-180"
                          : "bg-slate-200 dark:bg-slate-700"
                      }`}
                    >
                      {openId === faq.id ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 dark:from-slate-900 dark:to-slate-800 border border-purple-500/20 dark:border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Our team is here to help you get the most out of NovaMind AI.
                Schedule a demo or reach out to our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="btn-primary"
                >
                  Schedule a Demo
                </button>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} size="lg">
        <ScheduleDemoContent />
      </Modal>

      <Modal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        size="lg"
      >
        <ContactSupportContent />
      </Modal>
    </>
  );
}
