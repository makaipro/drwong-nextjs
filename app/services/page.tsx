import type { Metadata } from "next";
import { Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workers' Comp & Auto Accident Medical Services | Dr. Wong MD Hawaii",
  description: "Workers' Compensation and auto accident injury treatment and pain management in Hawaii. Dr. Mankwan Wong MD, PM&R specialist.",
};

const services = [
  {
    id: "workers-comp",
    tag: "HRS Chapter 386",
    title: "Workers' Compensation Evaluations & Treatment",
    img: "https://static.wixstatic.com/media/b4cf65_0044f1ba5d844a5d967e0440de05e8bb~mv2.png",
    desc: ["Dr. Wong provides comprehensive medical care for employees injured on the job in Hawaii. From the initial evaluation to return-to-work clearance, we handle every step of the Workers' Comp process.", "All billing is handled directly with the employer's insurance carrier — patients pay nothing out of pocket."],
    bullets: ["Initial injury evaluation and documentation", "DWC-compliant medical reporting", "Treatment planning and coordination", "Maximum Medical Improvement (MMI) determination", "Permanent Impairment ratings (AMA Guides 6th Ed.)", "Return-to-work assessments"],
  },
  {
    id: "auto-accident",
    tag: "HRS 431:10C · PIP / No-Fault",
    title: "Auto Accident Injury Treatment",
    img: "https://static.wixstatic.com/media/b4cf65_f7a3f711143442fe9f0ae5ef7af09ff8~mv2.png",
    desc: ["If you were injured in a car accident in Hawaii, your PIP (Personal Injury Protection) insurance covers your medical treatment — regardless of who was at fault.", "We bill your auto insurance directly. No upfront payment required."],
    bullets: ["Whiplash and cervical spine injuries", "Lumbar and thoracic spine trauma", "Soft tissue injuries", "Nerve damage and radiculopathy", "Concussion and traumatic brain injury (TBI)", "Comprehensive medical-legal documentation"],
  },
  {
    id: "pain",
    tag: "Chronic & Acute",
    title: "Pain Management",
    img: "https://static.wixstatic.com/media/b4cf65_2de4ff856721419eb6f0f43b4362a26a~mv2.jpg",
    desc: ["For patients with chronic or acute pain resulting from workplace injuries or auto accidents, Dr. Wong develops individualized pain management programs focused on functional recovery and quality of life."],
    bullets: ["Medication management", "Trigger point injections", "Joint injections", "Electrodiagnostics (EMG / Nerve Conduction Studies)", "Physical therapy coordination", "Interdisciplinary pain rehabilitation"],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-[#0b1f3a] pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#c9962a]/15 text-[#e8b84b] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">What We Treat</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Specialized Injury Medical Services</h1>
          <p className="text-white/55">Workers&apos; Compensation · Auto Accident · Pain Management</p>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-16 items-center py-20 ${i < services.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[380px]">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">{s.tag}</span>
                <h2 className="text-3xl font-black text-[#0b1f3a] tracking-tight mb-5">{s.title}</h2>
                {s.desc.map((d, di) => <p key={di} className="text-gray-500 leading-relaxed mb-4">{d}</p>)}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-[#c9962a] font-bold mt-0.5 shrink-0">✓</span> {b}
                    </li>
                  ))}
                </ul>
                <a href="tel:8089428727" className="inline-flex items-center gap-2 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5">
                  <Phone size={16} /> Call (808) 942-8727
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#e05a1e] to-[#c44d18]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white tracking-tight mb-5">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg mb-10">Call us to verify your insurance and schedule your first appointment — usually within 48 hours.</p>
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
