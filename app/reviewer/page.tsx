"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { reviewers } from "@/lib/portfolio-data";

export default function ReviewerPage() {
  return (
    <div className="max-w-5xl w-full">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold">Academic Service</h2>
        <p className="text-slate-600 leading-relaxed mt-4 max-w-3xl">
          I contribute to the research community through peer review, evaluating
          technical rigor, experimental design, reproducibility, novelty, and
          clarity in applied AI and interdisciplinary computational work.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-5 mb-14">
        {reviewers.map((reviewer, index) => (
          <motion.div
            key={reviewer.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-5 inline-flex rounded-lg bg-slate-950 p-2 text-white">
              <ShieldCheck size={18} />
            </div>

            <h3 className="text-lg font-semibold">{reviewer.name}</h3>
            <p className="text-sm text-slate-500 mt-1">{reviewer.role}</p>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              {reviewer.detail}
            </p>

            {reviewer.href ? (
              <motion.a
                href={reviewer.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-slate-700 hover:text-black transition"
              >
                View certification
                <ExternalLink size={14} />
              </motion.a>
            ) : (
              <div className="mt-5 text-sm font-medium text-emerald-700">
                Acknowledged reviewer
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h3 className="text-lg font-semibold">Review Lens</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          {[
            "Novelty",
            "Technical rigor",
            "Experimental validation",
            "Reproducibility",
          ].map((item) => (
            <div
              key={item}
              className="rounded-md border border-slate-200 px-3 py-3 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
