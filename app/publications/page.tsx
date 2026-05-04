"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { publications } from "@/lib/portfolio-data";

const filters = [
  "All",
  "Conference",
  "Book Chapter",
  "Deep Learning",
  "LLMs",
  "Healthcare AI",
  "Forecasting",
  "Cybersecurity",
];

export default function PublicationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPublications = useMemo(() => {
    if (activeFilter === "All") {
      return publications;
    }

    return publications.filter(
      (publication) =>
        publication.type === activeFilter ||
        publication.tags.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <div className="max-w-5xl w-full">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold">Publications</h2>
        <p className="text-slate-600 leading-relaxed mt-4 max-w-3xl">
          Seven research outputs spanning deep learning, multimodal AI,
          healthcare NLP, medical imaging, traffic risk prediction, forecasting,
          and cybersecurity.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-slate-950"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="relative space-y-8">
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-slate-200" />

        {filteredPublications.map((publication, index) => (
          <motion.div
            key={publication.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            <div
              className={`absolute left-0 top-2 h-6 w-6 rounded-full border-4 bg-white ${
                index === 0 ? "border-slate-950" : "border-slate-300"
              }`}
            />

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                  {publication.type}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {publication.year}
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-snug">
                {publication.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                {publication.venue} / {publication.publisher}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
