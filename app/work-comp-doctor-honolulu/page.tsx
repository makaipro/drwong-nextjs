import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Workers' Comp Doctor Honolulu | Dr. Mankwan Wong MD | (808) 942-8727",
  description: "Board-certified workers' compensation doctor in Honolulu, Hawaii. DWC-approved PM&R specialist. Direct billing to your employer's insurer. Call (808) 942-8727.",
};

const conditions = [
  "Back and spine injuries",
  "Shoulder, knee, and joint injuries",
  "Repetitive stress and overuse injuries",
  "Nerve damage and radiculopathy",
  "Soft tissue injuries",
  "Traumatic brain injury (TBI)",
  "Fractures and orthopedic injuries",
  "Occupational illness",
];

const faqs = [
  {
    q: "Do I need to pay out of pocket for workers' comp treatment?",
    a: "No. Workers' compensation insurance covers 100% of your medical treatment costs. Dr. Wong bills your employer's insurance carrier directly — you pay nothing.",
  },
  {
    q: "How do I start workers' comp treatment with Dr. Wong?",
    a: "Call our office at (808) 942-8727. We'll verify your claim information and schedule your first appointment, usually within 48 hours.",
  },
  {
    q: "Is Dr. Wong approved by Hawaii's Division of Workers' Compensation?",
    a: "Yes. Dr. Wong is a DWC-approved physician and provides fully compliant reporting under HRS Chapter 386.",
  },
  {
    q: "What is a PM&R specialist and why does it matter for my claim?",
    a: "Physical Medicine & Rehabilitation (PM&R) specialists focus on diagnosing and treating musculoskeletal and neurological injuries — exactly the types of injuries most common in workers' compensation cases. A PM&R physician's documentation is thorough and carries weight with insurers and the DWC.",
  },
  {
    q: "Does Dr. Wong see patients on Maui or the Big Island?",
    a: "Dr. Wong sees patients at his Honolulu clinic (primary) and Kona clinic (select Fridays). Patients from neighbor islands often schedule around their Honolulu trips.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function WorkCompDoctorHonolulu() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#0b1f3a] pt-36 pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#c9962a]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 bg-[#c9962a]/15 text-[#e8b84b] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9962a] inline-block" />
            Honolulu, Hawaii
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Workers&apos; Comp Doctor<br />in Honolulu, Hawaii
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mb-10 leading-relaxed">
            Injured at work? Dr. Mankwan Wong is a board-certified PM&R physician and DWC-approved workers&apos; compensation doctor serving Honolulu and the entire state of Hawaii. No out-of-pocket cost — we bill your employer&apos;s insurer directly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:8089428727" className="inline-flex items-center gap-3 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-black px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 shadow-xl">
              <Phone size={18} /> Call (808) 942-8727
            </a>
            <Link href="/services#workers-comp" className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all text-base">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm">
            {[
              "✓ DWC-Approved Physician",
              "✓ Board-Certified PM&R",
              "✓ 20+ Years in Hawaii",
              "✓ Direct Insurance Billing",
              "✓ Honolulu & Kona Clinics",
            ].map((item) => (
              <span key={item} className="text-[#0b1f3a] font-semibold">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">What We Do</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-6 leading-tight">
              Full Workers&apos; Comp Care —<br />Start to Finish
            </h2>
            <div className="flex flex-col gap-4 text-gray-500 leading-relaxed mb-8">
              <p>From your initial injury evaluation through Maximum Medical Improvement (MMI) and return-to-work clearance, Dr. Wong handles every step of the Hawaii workers&apos; compensation process.</p>
              <p>All documentation is DWC-compliant and written to support your claim. We work directly with your employer&apos;s insurance carrier so you focus on getting better — not on paperwork.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "Initial injury evaluation & documentation",
                "DWC-compliant medical reporting",
                "Treatment planning & coordination",
                "Maximum Medical Improvement (MMI) determination",
                "Permanent Impairment ratings (AMA Guides 6th Ed.)",
                "Return-to-work assessments",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#0b1f3a] text-sm font-medium">
                  <CheckCircle size={16} className="text-[#c9962a] shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">Injuries We Treat</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-6 leading-tight">
              Work Injuries We<br />Evaluate & Treat
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {conditions.map((c) => (
                <div key={c} className="flex items-center gap-3 bg-[#f7f6f4] rounded-xl px-5 py-3.5 text-sm font-semibold text-[#0b1f3a]">
                  <span className="text-[#c9962a]">→</span> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY DR. WONG */}
      <section className="py-24 bg-[#f7f6f4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Why Choose Us</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight">The Workers&apos; Comp Doctor<br />Hawaii Trusts</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { n: "20+", label: "Years of Practice", sub: "Treating injured workers in Hawaii since the early 2000s" },
              { n: "DWC", label: "Approved Physician", sub: "Fully compliant with Hawaii Division of Workers' Compensation" },
              { n: "100%", label: "Injury Focused", sub: "Our practice is dedicated exclusively to Workers' Comp and auto injuries" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="text-5xl font-black text-[#c9962a] mb-3">{s.n}</div>
                <div className="font-black text-[#0b1f3a] mb-2">{s.label}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Clinic Locations</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight">Convenient Honolulu Location</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#0b1f3a] rounded-3xl p-10 text-white">
              <span className="inline-block bg-[#c9962a]/20 text-[#c9962a] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">Primary</span>
              <h3 className="text-2xl font-black mb-6">Honolulu Clinic</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={15} className="text-[#c9962a] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">1750 Kalakaua Ave, Suite 108</p>
                  <p className="text-white/50 text-sm">Honolulu, HI 96826</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-10">
                <Clock size={15} className="text-[#c9962a] shrink-0" />
                <p className="text-white/70 text-sm">Mon–Fri · 8am–5pm</p>
              </div>
              <a href="tel:8089428727" className="inline-flex items-center gap-2 bg-[#e05a1e] text-white font-bold px-6 py-3 rounded-xl text-sm">
                <Phone size={14} /> Call Now
              </a>
            </div>
            <div className="bg-[#f7f6f4] rounded-3xl p-10">
              <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">Big Island</span>
              <h3 className="text-2xl font-black text-[#0b1f3a] mb-6">Kona Clinic</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={15} className="text-[#c9962a] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-700">74-5620 A Palani Rd, Suite 102</p>
                  <p className="text-gray-400 text-sm">Kailua-Kona, HI 96740</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-10">
                <Clock size={15} className="text-[#c9962a] shrink-0" />
                <p className="text-gray-500 text-sm">Select Fridays · 8am–5pm</p>
              </div>
              <a href="tel:8089428727" className="inline-flex items-center gap-2 bg-[#0b1f3a] text-white font-bold px-6 py-3 rounded-xl text-sm">
                <Phone size={14} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#f7f6f4]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Common Questions</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-black text-[#0b1f3a] mb-3 text-base">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0b1f3a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white tracking-tight mb-5">Injured at Work? Call Today.</h2>
          <p className="text-white/55 text-lg mb-10">We accept workers&apos; compensation patients and bill your employer&apos;s insurer directly. Most appointments within 48 hours.</p>
          <a href="tel:8089428727" className="inline-flex items-center gap-3 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-black px-10 py-5 rounded-2xl text-lg transition-all hover:-translate-y-1 shadow-xl">
            <Phone size={22} /> (808) 942-8727
          </a>
          <p className="text-white/25 text-xs mt-6 tracking-widest uppercase">Mon–Fri 8am–5pm · Honolulu & Kona</p>
        </div>
      </section>
    </>
  );
}
