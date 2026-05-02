import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Car Accident Doctor Honolulu | Dr. Mankwan Wong MD | (808) 942-8727",
  description: "Car accident doctor in Honolulu, Hawaii. PIP/No-Fault billing — we bill your auto insurance directly. Board-certified PM&R. Call (808) 942-8727.",
};

const injuries = [
  "Whiplash and neck injuries",
  "Lower back and lumbar spine injuries",
  "Herniated and bulging discs",
  "Nerve damage and radiculopathy",
  "Traumatic brain injury (TBI) and concussion",
  "Shoulder and rotator cuff injuries",
  "Knee and joint trauma",
  "Soft tissue injuries and contusions",
];

const faqs = [
  {
    q: "Who pays for my medical treatment after a car accident in Hawaii?",
    a: "Hawaii is a no-fault state. Your Personal Injury Protection (PIP) insurance pays for your medical treatment regardless of who caused the accident. Dr. Wong bills your auto insurance directly — you pay nothing out of pocket.",
  },
  {
    q: "How soon after my accident should I see a doctor?",
    a: "As soon as possible — ideally within 72 hours. Prompt evaluation creates a documented medical record that is critical to your insurance claim and any future legal proceedings. Delays in treatment can be used by insurers to dispute your injuries.",
  },
  {
    q: "What is PIP insurance and does my policy cover Dr. Wong's treatment?",
    a: "PIP (Personal Injury Protection) is required auto insurance in Hawaii under HRS 431:10C. It covers medical expenses after a car accident. Dr. Wong is an experienced PIP/No-Fault provider and bills your insurer directly.",
  },
  {
    q: "Can Dr. Wong provide documentation for my personal injury attorney?",
    a: "Yes. Dr. Wong provides thorough medical-legal documentation including causation reports, disability ratings, and expert witness testimony — all of which are useful to personal injury attorneys handling auto accident cases.",
  },
  {
    q: "Do I need a referral to see Dr. Wong after a car accident?",
    a: "No referral is needed. Call our office directly at (808) 942-8727. We will verify your PIP coverage and schedule your evaluation, typically within 48 hours.",
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

export default function CarAccidentDoctorHonolulu() {
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
              PIP · No-Fault · Honolulu, Hawaii
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Car Accident Doctor<br />in Honolulu, Hawaii
            </h1>
            <p className="text-white/55 text-lg max-w-2xl mb-10 leading-relaxed">
              Injured in a car accident? Dr. Mankwan Wong is a board-certified PM&R physician specializing in auto accident injuries in Honolulu. We bill your PIP/No-Fault auto insurance directly — no out-of-pocket cost.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8089428727" className="inline-flex items-center gap-3 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-black px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 shadow-xl">
                <Phone size={18} /> Call (808) 942-8727
              </a>
              <Link href="/services#auto-accident" className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all text-base">
                Learn More <ArrowRight size={16} />
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
              "✓ PIP / No-Fault Billing",
              "✓ Board-Certified PM&R",
              "✓ No Out-of-Pocket Cost",
              "✓ Appointments Within 48 Hrs",
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
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">How It Works</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-6 leading-tight">
              We Handle Your Insurance.<br />You Focus on Healing.
            </h2>
            <div className="flex flex-col gap-4 text-gray-500 leading-relaxed mb-8">
              <p>Hawaii&apos;s No-Fault law (HRS 431:10C) requires all auto insurance policies to include PIP coverage — which means your medical treatment after a car accident is covered, regardless of who was at fault.</p>
              <p>Dr. Wong&apos;s office verifies your coverage and bills your insurer directly. From your first visit through your final report, we handle the documentation your insurer and attorney need.</p>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "Comprehensive injury evaluation",
                "Causation documentation for your claim",
                "Direct billing to your auto insurer (PIP)",
                "Whiplash, spine, and nerve injury treatment",
                "Concussion and TBI evaluation",
                "Medical-legal reports for attorneys",
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
              Auto Accident Injuries<br />We Specialize In
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {injuries.map((c) => (
                <div key={c} className="flex items-center gap-3 bg-[#f7f6f4] rounded-xl px-5 py-3.5 text-sm font-semibold text-[#0b1f3a]">
                  <span className="text-[#c9962a]">→</span> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ACT FAST */}
      <section className="py-20 bg-[#0b1f3a]">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {[
            { n: "72h", label: "See a doctor within 72 hours", sub: "Delays weaken your claim. Call us the same day if possible." },
            { n: "PIP", label: "No out-of-pocket cost", sub: "Hawaii No-Fault law covers your treatment. We bill directly." },
            { n: "48h", label: "Appointment turnaround", sub: "Most new patients are seen within 48 hours of calling." },
          ].map((s) => (
            <div key={s.label} className="py-10 px-10 text-center">
              <div className="text-5xl font-black text-[#c9962a] mb-3">{s.n}</div>
              <div className="text-white font-bold mb-2">{s.label}</div>
              <div className="text-white/30 text-xs leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Clinic Locations</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight">Serving Honolulu & the Big Island</h2>
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
          <h2 className="text-4xl font-black text-white tracking-tight mb-5">In a Car Accident? Call Today.</h2>
          <p className="text-white/55 text-lg mb-10">We bill your PIP insurance directly. No referral needed. Appointments typically within 48 hours.</p>
          <a href="tel:8089428727" className="inline-flex items-center gap-3 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-black px-10 py-5 rounded-2xl text-lg transition-all hover:-translate-y-1 shadow-xl">
            <Phone size={22} /> (808) 942-8727
          </a>
          <p className="text-white/25 text-xs mt-6 tracking-widest uppercase">Mon–Fri 8am–5pm · Honolulu & Kona</p>
        </div>
      </section>
    </>
  );
}
