import type { Metadata } from "next";
import { Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Mankwan Wong MD | PM&R Specialist Hawaii",
  description: "Board-certified Physical Medicine & Rehabilitation physician specializing in Workers' Compensation and auto accident injuries in Hawaii.",
};

const expertise = [
  "Workers' Compensation Evaluations & Treatment (HRS Chapter 386)",
  "PIP/No-Fault Auto Accident Injury Treatment (HRS 431:10C)",
  "Causation & Apportionment Reports",
  "Expert Witness Testimony — Civil & Workers' Comp Courts",
  "Spine, Joint & Nerve Injury Management",
  "Electrodiagnostics (EMG/NCS)",
  "Chronic Pain Management",
];

const philosophy = [
  { icon: "🎯", title: "Accurate Diagnosis", desc: "Every patient receives a thorough evaluation. Dr. Wong takes the time to understand the full clinical picture before forming an opinion." },
  { icon: "📄", title: "Defensible Reports", desc: "Reports are written to withstand legal scrutiny. Clear, evidence-based, and grounded in the AMA Guides and Hawaii DWC standards." },
  { icon: "⏱️", title: "On-Time Delivery", desc: "Medical-legal reports are delivered within 14 business days — every time. Attorneys and insurers rely on our turnaround." },
  { icon: "🤝", title: "Patient Advocacy", desc: "Dr. Wong advocates for every patient's care needs and provides objective, evidence-based assessments grounded in clinical fact." },
];

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-[#0b1f3a] pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#c9962a]/15 text-[#e8b84b] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">About</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Meet Dr. Mankwan Wong, MD</h1>
          <p className="text-white/55 text-base">Board-Certified Physical Medicine & Rehabilitation · Honolulu & Kona, Hawaii</p>
        </div>
      </section>

      {/* BIO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[360px_1fr] gap-16 items-start">
          {/* Left col */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-7 h-[420px]">
              <img src="/dr-wong.png" alt="Dr. Mankwan Wong MD" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Right col */}
          <div>
            <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Biography</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-6">Hawaii&apos;s Trusted PM&R Expert for Over Two Decades</h2>
            <div className="flex flex-col gap-4 text-gray-500 leading-relaxed mb-8">
              <p>Dr. Mankwan Wong is a board-certified specialist in Physical Medicine & Rehabilitation (PM&R) with extensive experience treating injured workers, auto accident victims, and complex musculoskeletal conditions throughout the Hawaiian Islands.</p>
              <p>With clinics in both Honolulu and Kona, Dr. Wong provides comprehensive care that bridges clinical medicine and the legal-medical system — from acute injury treatment to expert witness testimony and disability ratings.</p>
              <p>Dr. Wong is recognized statewide by attorneys and employers as one of Hawaii&apos;s most thorough and credible PM&R physicians. His reports are precise, defensible, and delivered on time.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-100 mb-8">
              {[{ n: "20+", l: "Years Experience" }, { n: "2", l: "Clinic Locations" }, { n: "100%", l: "Injury Focus" }].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-black text-[#0b1f3a] leading-none mb-1">{s.n}</div>
                  <div className="text-xs text-gray-400">{s.l}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Areas of Expertise</h3>
            <ul className="grid sm:grid-cols-2 gap-2.5 mb-10">
              {expertise.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="text-[#c9962a] font-bold mt-0.5">•</span> {e}
                </li>
              ))}
            </ul>
            <a href="tel:8089428727" className="inline-flex items-center gap-2 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5">
              <Phone size={16} /> Schedule a Consultation — (808) 942-8727
            </a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Our Philosophy</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight">Medicine That Works for Patients and the System</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-3xl mb-5">{p.icon}</div>
                <h3 className="font-bold text-[#0b1f3a] mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#e05a1e] to-[#c44d18]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white tracking-tight mb-5">Ready to Work with Dr. Wong?</h2>
          <p className="text-white/80 text-lg mb-10">Workers&apos; Comp and auto accident patients welcome. Attorneys may refer directly.</p>
          <div className="flex flex-col items-center gap-4">
            <a href="tel:8089428727" className="flex items-center gap-3 bg-white hover:bg-gray-50 text-[#e05a1e] font-black px-10 py-5 rounded-2xl shadow-2xl text-lg transition-all hover:-translate-y-1">
              <Phone size={22} /> Call (808) 942-8727
            </a>
            <span className="text-white/60 text-sm">Mon–Fri 8am–5pm · Honolulu & Kona</span>
          </div>
        </div>
      </section>
    </>
  );
}
