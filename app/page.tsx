"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Layers3, ShieldCheck } from "lucide-react";
import { projects, publications } from "@/lib/portfolio-data";

const sections = [
  {
    title: "Research Focus",
    content:
      "I am an undergraduate researcher working at the intersection of Machine Learning, Deep Learning, and applied Artificial Intelligence. My core interest lies in building systems that are high-performing in experiments while remaining stable and adaptable in real-world environments.",
  },
  {
    title: "Engineering Approach",
    content:
      "My work emphasizes robustness, generalization, and deployability. I approach projects from an end-to-end systems perspective, from data preprocessing and architecture design to evaluation, optimization, and practical implementation.",
  },
  {
    title: "Academic Contribution",
    content:
      "I have authored peer-reviewed research publications and contribute to the academic community as a reviewer for international journals and publishers. My research experience spans computer vision, sequential modeling, NLP, and domain-specific AI frameworks.",
  },
  {
    title: "Long-Term Vision",
    content:
      "My long-term objective is to contribute to advanced intelligent systems research while bridging the gap between theoretical AI development and high-impact industrial applications.",
  },
];

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
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold"
      >
        About
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.12, duration: 0.6 }}
              className="relative pl-6"
            >
              <div className="absolute left-0 top-1 w-[3px] h-6 bg-slate-800 rounded-full" />

              <h3 className="text-lg font-semibold mb-3">{section.title}</h3>

              <p className="text-slate-600 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-sm border border-slate-200 bg-white"
        >
          <img
            src="/about/presentation.webp"
            alt="Apurbo presenting research"
            className="w-full object-cover"
          />
        </motion.div>
      </div>

      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Portfolio Pathways</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">
            The site is organized around evidence: research output, applied
            systems, and academic service.
          </p>
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
