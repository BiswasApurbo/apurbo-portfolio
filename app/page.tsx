"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, ExternalLink, FileText } from "lucide-react";

/* =========================
   PROJECT DATA
========================= */

const projects = [
  {
    title: "VirtualMouse-AI",
    description:
      "AI virtual mouse via hand gestures & voice using OpenCV and MediaPipe.",
    link: "https://github.com/BiswasApurbo/VirtualMouse-AI",
  },
  {
    title: "Real-Time Color Detection",
    description:
      "Real-time object color recognition using OpenCV + MediaPipe.",
    link: "https://github.com/BiswasApurbo/RealTime-Color-Detection",
  },
  {
    title: "Sales Forecasting (Prophet)",
    description:
      "Time-series retail sales forecasting using Facebook Prophet.",
    link: "https://github.com/BiswasApurbo/FUTURE_ML_01",
  },
  {
    title: "Stock Price Prediction (LSTM)",
    description: "LSTM-based deep learning model for stock forecasting.",
    link: "https://github.com/BiswasApurbo/FURURE_ML_02",
  },
  {
    title: "DhakaConnect",
    description: "C# desktop app for exploring Dhaka bus routes.",
    link: "https://github.com/BiswasApurbo/DhakaConnect",
  },
  {
    title: "Car Rental System",
    description:
      "Web-based car rental platform with booking and admin tools.",
    link: "https://github.com/BiswasApurbo/car_rental_system-wt_project",
  },
];

export default function ApurboPortfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  /* scroll progress */
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">

      {/* 🔦 premium spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.08), transparent 40%)`,
        }}
      />

      {/* 🔥 PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60]">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">
        <div className="px-6 md:px-12 lg:px-24 h-14 flex items-center justify-between">
          <span className="font-semibold tracking-tight">
            Apurbo Biswas
          </span>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#projects" className="hover:text-slate-900 transition">
              Projects
            </a>
            <a href="#publications" className="hover:text-slate-900 transition">
              Publications
            </a>
            <a href="#skills" className="hover:text-slate-900 transition">
              Skills
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              APURBO BISWAS
            </h1>

            <p className="text-lg text-slate-600 font-medium">
              Machine Learning & Deep Learning Researcher
            </p>

            {/* 🔥 research focus strip */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Trustworthy AI", "Medical AI", "Computer Vision", "NLP"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] rounded-full bg-blue-50 text-blue-700 border border-blue-200"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/BiswasApurbo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-[1px]">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>

              <Button size="sm" variant="outline" className="rounded-xl">
                <ExternalLink className="mr-2 h-4 w-4" />
                Scholar
              </Button>

              <Button size="sm" variant="secondary" className="rounded-xl">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/profile.jpeg"
              alt="Apurbo Biswas"
              className="w-44 h-44 rounded-2xl object-cover shadow-lg hover:shadow-xl transition"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="px-6 md:px-12 lg:px-24 py-8 relative z-10">
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Apurbo Biswas is a CSE undergraduate at AIUB and Dean’s Award
          recipient. He has authored scholarly publications and serves as
          an active reviewer for IEEE Access, PLOS ONE, and IGI Global.
          His research focuses on trustworthy and efficient AI systems.
        </p>

        {/* 🔥 credibility badges */}
        <div className="flex flex-wrap gap-2 pt-3">
          {[
            "IEEE Access Reviewer",
            "PLOS ONE Reviewer",
            "IGI Global Reviewer",
          ].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ================= PUBLICATIONS ================= */}
      <section id="publications" className="px-6 md:px-12 lg:px-24 py-8 bg-slate-50 relative z-10">
        <h2 className="text-xl font-semibold mb-4">
          Research & Publications
        </h2>

        <Card className="rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
          <CardContent className="p-5 space-y-2">
            <div className="text-[10px] uppercase tracking-wide text-blue-600 font-semibold">
              Conference Paper
            </div>

            <p className="font-semibold text-sm">
              Domain-Specific NLP for Personalized Radiation Treatment
              Pathways with LLM
            </p>

            <p className="text-xs text-slate-600">
              IEEE WIECON-ECE 2025, Cox’s Bazar, Bangladesh
            </p>

            <a
              href="https://drive.google.com/file/d/1Ut0qKM_fX2ybfBa5J_kC_gx4Mx36r03x/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 text-sm font-medium hover:underline"
            >
              🔗 View Certificate
            </a>
          </CardContent>
        </Card>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 md:px-12 lg:px-24 py-10 relative z-10">
        <h2 className="text-xl font-semibold mb-6">Projects</h2>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 gap-3 min-w-[1050px]">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group relative rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-4 flex flex-col h-[150px]">
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-sm">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3"
                  >
                    <Button size="sm" className="w-full h-8 text-xs rounded-lg">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="px-6 md:px-12 lg:px-24 py-8 bg-slate-50 relative z-10">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>

        <div className="flex flex-wrap gap-2">
          {[
            "Python",
            "PyTorch",
            "TensorFlow",
            "OpenCV",
            "Scikit-learn",
            "NLP",
            "Computer Vision",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-lg bg-white text-xs shadow-sm hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="px-6 md:px-12 lg:px-24 py-12 text-center relative z-10">
        <Button className="rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300">
          <Mail className="mr-2 h-4 w-4" />
          Email Me
        </Button>
      </section>

      <footer className="text-center text-xs text-slate-500 pb-8 relative z-10">
        © {new Date().getFullYear()} Apurbo Biswas
      </footer>
    </main>
  );
}