"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { impactStats } from "@/lib/portfolio-data";

export default function ResumePage() {
  return (
    <div className="max-w-5xl w-full">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold">Resume</h2>
        <p className="text-slate-600 leading-relaxed mt-4 max-w-3xl">
          A compact view of my academic background, research output, reviewer
          service, technical strengths, and applied AI project experience.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 mb-10"
      >
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 inline-flex rounded-lg bg-slate-950 p-2 text-white">
            <FileText size={18} />
          </div>

          <h3 className="text-lg font-semibold">Current CV Snapshot</h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-3">
            Updated with seven publications, reviewer experience, academic
            record, project experience, and technical skills.
          </p>

          <motion.a
            href="/Apurbo_Biswas_Resume.pdf"
            download
            whileHover={{ y: -2 }}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            <Download size={16} />
            Download PDF
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-sm font-semibold mt-2">{stat.label}</div>
              <p className="text-sm text-slate-500 mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-[950px] border border-slate-200 rounded-lg overflow-hidden shadow-sm bg-white"
      >
        <iframe
          src="/Apurbo_Biswas_Resume.pdf"
          className="w-full h-full"
          title="Apurbo Biswas Resume"
        />
      </motion.div>
    </div>
  );
}
