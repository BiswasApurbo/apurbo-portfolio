"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FlaskConical, Layers3, ShieldCheck } from "lucide-react";
import { focusAreas, impactStats, projects, publications } from "@/lib/portfolio-data";

const pathways = [
  {
    title: "Research Output",
    href: "/publications",
    icon: <BookOpen size={18} />,
    copy: "A publication timeline across deep learning, NLP, healthcare AI, cybersecurity, and forecasting.",
  },
  {
    title: "Applied AI Lab",
    href: "/projects",
    icon: <Layers3 size={18} />,
    copy: "Project case studies that connect data, model logic, system design, and usable outcomes.",
  },
  {
    title: "Academic Service",
    href: "/reviewer",
    icon: <ShieldCheck size={18} />,
    copy: "Peer-review work for international journals and publishers in applied AI research.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl w-full space-y-20">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start"
      >
        <div>
          <p className="text-sm font-medium text-slate-500 mb-4">
            Researcher-in-training / Applied AI Builder
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Apurbo Biswas builds applied AI systems across vision, language,
            forecasting, healthcare, and trustworthy automation.
          </h1>

          <p className="text-slate-600 leading-relaxed mt-6 max-w-2xl">
            Computer Science and Engineering undergraduate at AIUB with a
            research-led portfolio: seven publications, international reviewer
            experience, and practical systems built with Python, OpenCV,
            machine learning, and database-backed application design.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
            >
              Explore Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:border-slate-950 transition"
            >
              View Resume
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="border border-slate-200 bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-slate-950 text-white p-2">
              <FlaskConical size={18} />
            </div>
            <div>
              <h2 className="font-semibold">Research + Engineering Map</h2>
              <p className="text-sm text-slate-500">Current portfolio shape</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-md border border-slate-200 px-3 py-3 text-sm font-medium text-slate-700"
              >
                {area}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {impactStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-3xl font-semibold tracking-tight">
              {stat.value}
            </div>
            <div className="text-sm font-semibold mt-2">{stat.label}</div>
            <p className="text-sm text-slate-500 mt-1">{stat.detail}</p>
          </motion.div>
        ))}
      </section>

      <section>
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Portfolio Pathways</h2>
            <p className="text-slate-600 mt-2 max-w-2xl">
              The site is organized around evidence: research output, applied
              systems, and academic service.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pathways.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href={item.href}
                className="group block h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-5 inline-flex rounded-lg border border-slate-200 p-2 text-slate-700">
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  {item.copy}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium mt-5 text-slate-700 group-hover:text-black">
                  Open section
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Recent Research</h2>
          <div className="space-y-5">
            {publications.slice(0, 4).map((publication) => (
              <div
                key={publication.title}
                className="border-l-2 border-slate-300 pl-5"
              >
                <h3 className="font-semibold leading-snug">
                  {publication.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  {publication.venue} / {publication.publisher} / {publication.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Applied Work</h2>
          <div className="space-y-4">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-20 w-24 rounded-md object-cover"
                />
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {project.domain}
                  </p>
                  <h3 className="font-semibold group-hover:text-black">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
