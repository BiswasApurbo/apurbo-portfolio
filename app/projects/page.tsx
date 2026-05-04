"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl w-full">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold">Applied AI Project Lab</h2>
        <p className="text-slate-600 leading-relaxed mt-4 max-w-3xl">
          A collection of working systems across computer vision, forecasting,
          transport navigation, predictive modeling, and database-backed
          application design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group grid sm:grid-cols-[180px_1fr] h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="relative min-h-48 sm:min-h-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="text-xs font-medium text-slate-500">
                  {project.domain}
                </div>

                <h3 className="text-lg font-semibold mt-2">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.pipeline.map((step) => (
                    <span
                      key={step}
                      className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600"
                    >
                      {step}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-medium mt-6 text-slate-700 group-hover:text-black">
                  View case study
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
