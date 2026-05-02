import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Back Injury Specialist Hawaii | Dr. Mankwan Wong MD | (808) 942-8727",
  description: "Back and spine injury specialist in Honolulu, Hawaii. Board-certified PM&R physician treating work injuries and auto accidents. Call (808) 942-8727.",
};

const conditions = [
  "Herniated and bulging discs",
  "Lumbar and cervical spine injuries",
  "Radiculopathy (pinched nerves)",
  "Sciatica and nerve pain",
  "Muscle strains and ligament sprains",
  "Compression fractures",
  "Thoracic spine injuries",
  "Facet joint syndrome",
];

const treatments = [
  "Comprehensive spine evaluation",
  "Electrodiagnostics (EMG / Nerve Conduction Studies)",
  "Trigger point injections",
  "Joint and epidural injections",
  "Physical therapy coordination",
  "Medication management",
  "Return-to-work assessments",
  "AMA Guides 6th Ed. impairment ratings",
];

const faqs = [
  {
    q: "What is a PM&R specialist and why see one for a back injury?",
    a: "Physical Medicine & Rehabilitation (PM&R) physicians specialize in diagnosing and treating musculoskeletal conditions — including spine injuries. Unlike a general practitioner, a PM&R specialist has deep expertise in the full spectrum of back and nerve injuries common in workers' comp and auto accident cases.",
  },
  {
    q: "Can my back injury treatment be covered by workers' comp or auto insurance?",
    a: "Yes. If your back injury occurred at work, workers' compensation covers your treatment at no cost to you. If it resulted from a car accident, your PIP/No-Fault auto insurance covers treatment. Dr. Wong bills both types of insurance directly.",
  },
  {
    q: "How long does treatment for a back injury typically take?",
    a: "It depends on the severity of the injury. Minor soft tissue injuries may resolve in weeks with proper care. More serious injuries like herniated discs or nerve damage may require months of treatment. Dr. Wong creates an individualized plan based on your specific diagnosis.",
  },
  {
    q: "Do I need an MRI before seeing Dr. Wong?",
    a: "No. Dr. Wong will perform a comprehensive clinical evaluation first. If imaging is needed, he will order it as part of your diagnostic workup. Bring any existing records, imaging, or reports to your first appointment.",
  },
  {
    q: "Can Dr. Wong provide documentation for my back injury claim?",
    a: "Yes. Dr. Wong provides thorough medical-legal documentation including causation opinions, disability ratings using the AMA Guides 6th Edition, and expert witness testimony — all critical to workers' comp and personal injury claims.",
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

export default function BackInjurySpecialistHawaii() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#0b1f3a] pt-36 pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#c9962a]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative grid lg:grid-cols-[1fr_320px] gap-12 items-end">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#c9962a]/15 text-[#e8b84b] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9962a] inline-block" />
              Honolulu · Kailua-Kona, Hawaii
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Back Injury Specialist<br />in Hawaii
            </h1>
            <p className="text-white/55 text-lg max-w-2xl mb-10 leading-relaxed">
              Dr. Mankwan Wong is a board-certified Physical Medicine & Rehabilitation specialist treating back and spine injuries caused by workplace accidents and auto crashes throughout Hawaii. Workers&apos; comp and PIP insurance accepted.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8089428727" className="inline-flex items-center gap-3 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-black px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 shadow-xl">
                <Phone size={18} /> Call (808) 942-8727
              </a>
              <Link href="/services" className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all text-base">
                Our Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img src="/dr-wong.png" alt="Dr. Mankwan Wong MD" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm">
            {[
              "✓ Board-Certified PM&R",
              "✓ Spine & Nerve Specialist",
              "✓ Workers' Comp Accepted",
              "✓ PIP / No-Fault Accepted",
              "✓ Honolulu & Kona",
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
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">Conditions We Treat</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-6 leading-tight">
              Back & Spine Injuries<br />We Diagnose & Treat
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {conditions.map((c) => (
                <div key={c} className="flex items-center gap-3 bg-[#f7f6f4] rounded-xl px-5 py-3.5 text-sm font-semibold text-[#0b1f3a]">
                  <span className="text-[#c9962a]">→</span> {c}
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">Our Approach</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-6 leading-tight">
              Evidence-Based Treatment<br />for Real Recovery
            </h2>
            <div className="flex flex-col gap-4 text-gray-500 leading-relaxed mb-8">
              <p>Back injuries are among the most common — and most mismanaged — injuries in workers&apos; compensation and auto accident cases. Dr. Wong takes a systematic, evidence-based approach: accurate diagnosis first, then targeted treatment.</p>
              <p>As a PM&R specialist, Dr. Wong focuses on restoring function, reducing pain, and documenting your condition thoroughly so your claim is fully supported.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {treatments.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#0b1f3a] text-sm font-medium">
                  <CheckCircle size={16} className="text-[#c9962a] shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="py-20 bg-[#0b1f3a]">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {[
            { icon: "🏗️", label: "Injured at Work?", sub: "Workers' compensation covers 100% of your treatment. We bill your employer's insurer directly under HRS Chapter 386." },
            { icon: "🚗", label: "Car Accident Injury?", sub: "Hawaii PIP/No-Fault insurance covers your medical care regardless of fault. We bill your auto insurer directly." },
            { icon: "📋", label: "Need Documentation?", sub: "We provide thorough reports for attorneys, insurers, and the DWC. Medical-legal documentation is a core part of our practice." },
          ].map((s) => (
            <div key={s.label} className="py-10 px-10">
              <div className="text-3xl mb-4">{s.icon}</div>
              <div className="text-white font-bold mb-3 text-lg">{s.label}</div>
              <div className="text-white/35 text-sm leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Find Us</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight">Two Locations Across Hawaii</h2>
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
          <h2 className="text-4xl font-black text-white tracking-tight mb-5">Back Pain After an Injury? Call Today.</h2>
          <p className="text-white/55 text-lg mb-10">Workers&apos; comp and auto insurance accepted. No out-of-pocket cost. Appointments within 48 hours.</p>
          <a href="tel:8089428727" className="inline-flex items-center gap-3 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-black px-10 py-5 rounded-2xl text-lg transition-all hover:-translate-y-1 shadow-xl">
            <Phone size={22} /> (808) 942-8727
          </a>
          <p className="text-white/25 text-xs mt-6 tracking-widest uppercase">Mon–Fri 8am–5pm · Honolulu & Kona</p>
        </div>
      </section>
    </>
  );
}
