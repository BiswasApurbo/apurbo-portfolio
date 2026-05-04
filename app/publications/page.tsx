"use client";

import { motion } from "framer-motion";

const publications = [
  {
    title:
      "Industry 5.0-Driven Deep Learning Framework for Long-Term Global CO2 Emission Forecasting",
    meta: "ECCT 2026 • ACSR (Springer Nature) • 2026",
  },
  {
    title:
      "Few-Shot Multimodal Instruction Tuning for Vision-Language Models",
    meta: "ECCT 2026 • Taylor & Francis • 2026",
  },
  {
    title:
      "Biomedical LLM Hallucination Detection via Classifier-Conditioned Factuality Classification",
    meta: "ECCT 2026 • Taylor & Francis • 2026",
  },
  {
    title:
      "End-to-End Deep Learning Framework for Kidney MRI Segmentation and Explainable CKD Detection Using Transfer Learning",
    meta: "ECCT 2026 • ACSR (Springer Nature) • 2026",
  },
  {
    title:
      "A Hybrid Deep Learning Framework for Real-Time Traffic Risk Prediction",
    meta: "IEEE QPAIN 2026 • Chittagong, Bangladesh",
  },
  {
    title:
      "Domain-Specific NLP for Personalized Radiation Treatment Pathways with LLM Fine-Tuning",
    meta: "IEEE WIECON-ECE 2025 • Cox's Bazar, Bangladesh",
  },
  {
    title: "Securing the Future: Enhancing Cybersecurity in Supply Chains",
    meta: "Book Chapter • IGI Global • 2025",
  },
];

export default function PublicationsPage() {
  return (
    <div className="max-w-4xl w-full">

      {/* ===== PAGE TITLE (STANDARDIZED) ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-12"
      >
        Publications
      </motion.h2>

      <div className="space-y-12">
        {publications.map((publication, index) => (
          <motion.div
            key={publication.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            viewport={{ once: true }}
            className={`border-l-2 pl-5 ${
              index === 0 ? "border-black" : "border-slate-300"
            }`}
          >
            <h3 className="text-lg font-semibold leading-snug">
              {publication.title}
            </h3>

            <p className="text-sm text-slate-500 mt-2">{publication.meta}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
