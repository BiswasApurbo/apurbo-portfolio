"use client";

import { motion } from "framer-motion";
import { focusAreas, impactStats, publications } from "@/lib/portfolio-data";

export default function ResearchPage() {
  return (
    <div className="max-w-5xl w-full">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h1 className="text-2xl font-semibold">Research Dashboard</h1>
        <p className="text-slate-600 leading-relaxed mt-4 max-w-3xl">
          My research direction sits between applied machine learning and
          deployable AI systems: vision, language, forecasting, healthcare,
          risk prediction, and security-focused intelligence.
        </p>
      </motion.div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {impactStats.slice(0, 4).map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-3xl font-semibold">{stat.value}</div>
            <div className="text-sm font-semibold mt-2">{stat.label}</div>
            <p className="text-sm text-slate-500 mt-1">{stat.detail}</p>
          </motion.div>
        ))}
      </section>

      <section className="mb-14">
        <h2 className="text-lg font-semibold mb-5">Research Focus Map</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-lg border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
            >
              {area}
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Publication Coverage</h2>
        <div className="space-y-5">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                  {publication.type}
                </span>
                <span className="text-xs text-slate-500">
                  {publication.venue} / {publication.year}
                </span>
              </div>

              <h3 className="font-semibold leading-snug">
                {publication.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-4">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
