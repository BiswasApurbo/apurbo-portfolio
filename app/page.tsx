"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Github,
  ExternalLink,
  FileText,
  ChevronDown,
  Linkedin,
  Facebook,
  Instagram,
  Menu
} from "lucide-react";

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
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };

    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setResumeOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">

      {/* 🔦 spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.08), transparent 40%)`,
        }}
      />

      {/* 🔥 progress bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60]">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

{/* ================= NAVBAR ================= */}
<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">
  <div className="px-6 md:px-12 lg:px-24 h-14 flex items-center justify-between">
    
    {/* left brand */}
    <span className="font-semibold tracking-tight">
      Apurbo Biswas
    </span>

    {/* right side */}
    <div className="flex items-center gap-3 flex-shrink-0">
      
      {/* nav links (desktop only) */}
      <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-600">
        <a href="#projects" className="hover:text-slate-900 transition">
          Projects
        </a>
        <a href="#publications" className="hover:text-slate-900 transition">
          Publications
        </a>
        <a href="#reviewer" className="hover:text-slate-900 transition">
          Reviewer
        </a>
        <a href="#awards" className="hover:text-slate-900 transition">
          Awards
        </a>
        <a href="#certifications" className="hover:text-slate-900 transition">
          Certifications
        </a>
        <a href="#skills" className="hover:text-slate-900 transition">
          Skills
        </a>
      </nav>

      {/* Resume dropdown */}
      <div className="relative" ref={dropdownRef}>
        <Button
          size="sm"
          className="rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition whitespace-nowrap"
          onClick={() => setResumeOpen(!resumeOpen)}
        >
          <FileText className="h-4 w-4" />
          Resume
          <ChevronDown
            className={`h-3 w-3 transition ${
              resumeOpen ? "rotate-180" : ""
            }`}
          />
        </Button>

        {resumeOpen && (
          <div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            
            <a
              href="https://drive.google.com/file/d/19UeG1Pl9L-W7gNhmYOgRRAr9cJWMNPEh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start rounded-lg"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=19UeG1Pl9L-W7gNhmYOgRRAr9cJWMNPEh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start rounded-lg"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
        )}
      </div>

      {/* ✅ Mobile hamburger — RIGHTMOST */}
      <button
  className="lg:hidden order-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
        <Menu className="h-5 w-5" />
      </button>

    </div>
  </div>
</header>

{/* ================= MOBILE MENU ================= */}
{mobileMenuOpen && (
  <div className="lg:hidden px-6 md:px-12 pb-4 border-b border-slate-200 bg-white relative z-40">
    <div className="flex flex-col gap-3 text-sm text-slate-600">
      <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
      <a href="#publications" onClick={() => setMobileMenuOpen(false)}>Publications</a>
      <a href="#reviewer" onClick={() => setMobileMenuOpen(false)}>Reviewer</a>
      <a href="#awards" onClick={() => setMobileMenuOpen(false)}>Awards</a>
      <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
      <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
    </div>
  </div>
)}      {/* ================= HERO (PROFILE RESTORED) ================= */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div className="space-y-4">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              APURBO BISWAS
            </h1>

            <p className="text-lg text-slate-600 font-medium">
              Machine Learning & Deep Learning Researcher
            </p>

         {/* Social Icons */}
<div className="flex items-center gap-3 pt-2">

  {/* GitHub */}
  <a
    href="https://github.com/BiswasApurbo"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 transition"
  >
    <Github className="h-5 w-5" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/apurbo-biswas23/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 transition"
  >
    <Linkedin className="h-5 w-5" />
  </a>

</div>
          </div>

          {/* RIGHT — PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/profile.jpeg"
              alt="Apurbo Biswas"
              className="w-44 h-44 rounded-2xl object-cover shadow-lg hover:shadow-xl transition"
            />
          </div>
        </div>
      </section>
        {/* ================= OBJECTIVE ================= */}
<section className="px-6 md:px-12 lg:px-24 py-8 relative z-10">
  <div className="max-w-3xl">
    <h2 className="text-xl font-semibold mb-3">Objective</h2>

    <p className="text-sm text-slate-600 leading-relaxed">
      Undergraduate CSE student at AIUB focusing in trustworthy and
      efficient AI systems. Author of three research publications and active
      reviewer for IEEE Access, PLOS ONE, and IGI Global. Focused on building
      real-time machine learning and deep learning solutions across computer
      vision, NLP, and intelligent systems.
    </p>
  </div>
</section>
      {/* ================= PUBLICATIONS ================= */}
      <section id="publications" className="px-6 md:px-12 lg:px-24 py-8 bg-slate-50 relative z-10">
        <h2 className="text-xl font-semibold mb-4">
          Research & Publications
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="rounded-xl shadow-sm">
            <CardContent className="p-4 text-sm">
              Domain-Specific NLP for Personalized Radiation Treatment Pathways with LLM
              <div className="text-xs text-slate-500 mt-1">
                IEEE WIECON-ECE 2025
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-sm">
            <CardContent className="p-4 text-sm">
              A Hybrid Deep Learning Framework for Real-Time Traffic Risk Prediction
              <div className="text-xs text-slate-500 mt-1">
                IEEE QPAIN 2026
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-sm">
            <CardContent className="p-4 text-sm">
              Securing the Future: Enhancing Cybersecurity in Supply Chains
              <div className="text-xs text-slate-500 mt-1">
                IGI Global Book Chapter
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
{/* ================= AWARDS ================= */}
<section id="awards" className="px-6 md:px-12 lg:px-24 py-10 bg-slate-50 relative z-10">
  <h2 className="text-xl font-semibold mb-6">Awards & Honors</h2>

  {/* ✅ THIS GRID CONTROLS THE ROW LAYOUT */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* ===== Dean Award Fall ===== */}
    <Card className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-5 flex flex-col h-[150px]">
        <div className="flex-1 space-y-1">
          <div className="text-[10px] font-semibold tracking-wide text-emerald-600 uppercase">
            Academic Award
          </div>

          <h3 className="font-semibold text-sm leading-snug">
            Dean’s Award — Fall 2024–2025
          </h3>

          <p className="text-xs text-slate-500">
            American International University-Bangladesh
          </p>
        </div>

        <a
          href="https://drive.google.com/file/d/1rCv-QWznqhDWortHeoRY4YOJuqmkFl3y/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3"
        >
          <Button size="sm" variant="outline" className="w-full h-8 text-xs rounded-lg">
            <ExternalLink className="mr-1 h-3 w-3" />
            View Certificate
          </Button>
        </a>
      </CardContent>
    </Card>

    {/* ===== Dean Award Spring ===== */}
    <Card className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-5 flex flex-col h-[150px]">
        <div className="flex-1 space-y-1">
          <div className="text-[10px] font-semibold tracking-wide text-emerald-600 uppercase">
            Academic Award
          </div>

          <h3 className="font-semibold text-sm leading-snug">
            Dean’s Award — Spring 2023–2024
          </h3>

          <p className="text-xs text-slate-500">
            American International University-Bangladesh
          </p>
        </div>

        <a
          href="https://drive.google.com/file/d/1shpxc-CPff3v11nfTIBKDmH2ncLcc923/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3"
        >
          <Button size="sm" variant="outline" className="w-full h-8 text-xs rounded-lg">
            <ExternalLink className="mr-1 h-3 w-3" />
            View Certificate
          </Button>
        </a>
      </CardContent>
    </Card>

  </div>
</section>
{/* ================= CERTIFICATIONS ================= */}
<section id="certifications" className="px-6 md:px-12 lg:px-24 py-10 relative z-10">
  <h2 className="text-xl font-semibold mb-6">
    Professional Certifications
  </h2>

  <div className="space-y-8">

    {/* ===== Internships ===== */}
    <div>
      <h3 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">
        Internships
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* DataKothon */}
        <Card className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <CardContent className="p-5 flex flex-col h-[160px]">
            <div className="flex-1">
              <h4 className="font-semibold text-sm">
                Research Internship — DataKothon Lab
              </h4>
              <p className="text-xs text-slate-500">
                Applied AI research collaboration
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/10I3hft6jBbCQ4j82mjmm2h0bivgGoNW6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              <Button size="sm" variant="outline" className="w-full h-8 text-xs rounded-lg">
                <ExternalLink className="mr-1 h-3 w-3" />
                View Certificate
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Future Interns */}
        <Card className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <CardContent className="p-5 flex flex-col h-[160px]">
            <div className="flex-1">
              <h4 className="font-semibold text-sm">
                Machine Learning Internship — Future Interns
              </h4>
              <p className="text-xs text-slate-500">
                ML, NLP, TensorFlow, Scikit-learn
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/1cPk6MJlpV70SxXM3amUA0WyN7QhNllN0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              <Button size="sm" variant="outline" className="w-full h-8 text-xs rounded-lg">
                <ExternalLink className="mr-1 h-3 w-3" />
                View Certificate
              </Button>
            </a>
          </CardContent>
        </Card>

      </div>
    </div>

    {/* ===== AI & ML (SIDE BY SIDE) ===== */}
    <div>
      <h3 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">
        AI / ML
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* UniAthena */}
        <Card className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <CardContent className="p-5 flex flex-col h-[160px]">
            <div className="flex-1">
              <h4 className="font-semibold text-sm">
                Basics of Machine Learning Algorithms
              </h4>
              <p className="text-xs text-slate-500">UniAthena</p>
            </div>

            <a
              href="https://drive.google.com/file/d/17WOdbz9TvDfd0-NEj71nFkCmdOEiUzuq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              <Button size="sm" variant="outline" className="w-full h-8 text-xs rounded-lg">
                <ExternalLink className="mr-1 h-3 w-3" />
                View Certificate
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* IEEE */}
        <Card className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <CardContent className="p-5 flex flex-col h-[160px]">
            <div className="flex-1">
              <h4 className="font-semibold text-sm">
                ICRCS-2025 Participation
              </h4>
              <p className="text-xs text-slate-500">
                IEEE Computer Society Bangladesh
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/1erM5Vs43-6NLckrARewKoeXDarDoCgv7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              <Button size="sm" variant="outline" className="w-full h-8 text-xs rounded-lg">
                <ExternalLink className="mr-1 h-3 w-3" />
                View Certificate
              </Button>
            </a>
          </CardContent>
        </Card>

      </div>
    </div>

    {/* ===== Professional ===== */}
    <div>
      <h3 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">
        Professional
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* LinkedIn */}
        <Card className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <CardContent className="p-5 flex flex-col h-[160px]">
            <div className="flex-1">
              <h4 className="font-semibold text-sm">
                Project Management Foundations: Requirements
              </h4>
              <p className="text-xs text-slate-500">LinkedIn Learning</p>
            </div>

            <a
              href="https://drive.google.com/file/d/1sB-MCTjfAD6nB0mpoXcf04GIQ3KZqvrm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              <Button size="sm" variant="outline" className="w-full h-8 text-xs rounded-lg">
                <ExternalLink className="mr-1 h-3 w-3" />
                View Certificate
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Coursera */}
        <Card className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <CardContent className="p-5 flex flex-col h-[160px]">
            <div className="flex-1">
              <h4 className="font-semibold text-sm">
                Build a Free Website with WordPress
              </h4>
              <p className="text-xs text-slate-500">Coursera</p>
            </div>

            <a
              href="https://drive.google.com/file/d/1sqEFNbaweNLbqV4pA5u8gEkL8lFTjvJt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              <Button size="sm" variant="outline" className="w-full h-8 text-xs rounded-lg">
                <ExternalLink className="mr-1 h-3 w-3" />
                View Certificate
              </Button>
            </a>
          </CardContent>
        </Card>

      </div>
    </div>

  </div>
</section>

{/* ================= REVIEWER ================= */}
<section id="reviewer" className="px-6 md:px-12 lg:px-24 py-10 relative z-10">
  <h2 className="text-xl font-semibold mb-6">
    Academic Reviewer
  </h2>

  {/* ✅ ONE ROW — 3 CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* ===== IEEE Access ===== */}
    <Card className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-5 flex flex-col h-[170px]">
        <div className="flex-1 space-y-1">
          <div className="text-[10px] font-semibold tracking-wide text-blue-600 uppercase">
            Journal Reviewer
          </div>

          <h3 className="font-semibold text-sm">
            IEEE Access Reviewer
          </h3>

          <p className="text-xs text-slate-500">
            Peer review contributions to the journal
          </p>
        </div>

        <a
          href="https://drive.google.com/drive/folders/16DryrTHQdm_0CUdq2gAPynleDBPF6XUF?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3"
        >
          <Button
            size="sm"
            variant="outline"
            className="w-full h-8 text-xs rounded-lg"
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            View Certificates
          </Button>
        </a>
      </CardContent>
    </Card>

    {/* ===== PLOS ONE ===== */}
    <Card className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-5 flex flex-col h-[170px]">
        <div className="flex-1 space-y-1">
          <div className="text-[10px] font-semibold tracking-wide text-emerald-600 uppercase">
            Journal Reviewer
          </div>

          <h3 className="font-semibold text-sm">
            PLOS ONE Reviewer
          </h3>

          <p className="text-xs text-slate-500">
            Verified peer review contribution
          </p>
        </div>

        <a
          href="https://drive.google.com/drive/folders/1BpxekP8Clpt-GF_u3GVDfhFnCbXdIkub?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3"
        >
          <Button
            size="sm"
            variant="outline"
            className="w-full h-8 text-xs rounded-lg"
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            View Certificate
          </Button>
        </a>
      </CardContent>
    </Card>

    {/* ===== IGI Global ===== */}
    <Card className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-5 flex flex-col h-[170px]">
        <div className="flex-1 space-y-1">
          <div className="text-[10px] font-semibold tracking-wide text-purple-600 uppercase">
            Book Chapter Reviewer
          </div>

          <h3 className="font-semibold text-sm">
            IGI Global — Acknowledged Reviewer
          </h3>

          <p className="text-xs text-slate-500">
            Editorial review completed 
          </p>
        </div>

        {/* disabled-style button */}
        <div className="mt-3">
          <Button
            size="sm"
            variant="outline"
            disabled
            className="w-full h-8 text-xs rounded-lg opacity-70 cursor-not-allowed"
          >
            Acknowledged
          </Button>
        </div>
      </CardContent>
    </Card>

  </div>
</section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 md:px-12 lg:px-24 py-10 relative z-10">
        <h2 className="text-xl font-semibold mb-6">Projects</h2>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 gap-3 min-w-[1050px]">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-3">
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
      {/* ================= CONTACT ================= */}
<section className="px-6 md:px-12 lg:px-24 py-12 text-center relative z-10">
  <h2 className="text-xl font-semibold mb-4">Contact</h2>

  <div className="flex items-center justify-center gap-4">

    {/* Email */}
    <a href="mailto:apurbobiswas.aiub@gmail.com">
      <div className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 hover:-translate-y-[2px] transition">
        <Mail className="h-5 w-5" />
      </div>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/apurbobiswas.apurbo1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 hover:-translate-y-[2px] transition">
        <Facebook className="h-5 w-5" />
      </div>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/biswas._.apurbo/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 hover:-translate-y-[2px] transition">
        <Instagram className="h-5 w-5" />
      </div>
    </a>

  </div>
</section>

      <footer className="text-center text-xs text-slate-500 pb-8 relative z-10">
        © {new Date().getFullYear()} Apurbo Biswas
      </footer>
    </main>
  );
}