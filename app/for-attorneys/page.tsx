import type { Metadata } from "next";
import { Phone, ArrowRight, Clock, MapPin, FileText, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Expert Medical Witness Hawaii | Dr. Mankwan Wong MD",
  description: "Causation reports, disability ratings, and expert witness testimony for Hawaii attorneys. AMA Guides 6th Edition. Call (808) 942-8727.",
};

const offered = [
  { icon: "📊", title: "Causation & Apportionment", desc: "Detailed medical-legal opinions on whether injuries are work-related, the degree of causation, and apportionment between pre-existing conditions and the claimed event." },
  { icon: "📉", title: "Disability Ratings", desc: "Permanent Impairment ratings using AMA Guides 6th Edition. Whole person impairment (WPI) calculations for settlement and adjudication purposes." },
  { icon: "📁", title: "Record & File Review", desc: "Comprehensive review of medical records, imaging, and prior reports. Written opinion without examination — useful for record-only review requests." },
  { icon: "⚖️", title: "Expert Witness Testimony", desc: "Deposition and trial testimony on Oahu and the Big Island. Dr. Wong communicates clearly, withstands cross-examination, and presents opinions credibly." },
];

const quickRef = [
  { label: "Report Turnaround", value: "14 Business Days" },
  { label: "Rating Standard", value: "AMA Guides 6th Ed." },
  { label: "Exam Locations", value: "Honolulu & Kona" },
  { label: "Testimony", value: "Statewide" },
  { label: "Cases Accepted", value: "Plaintiff & Defense" },
];

export default function ForAttorneys() {
  return (
    <>
      <section className="bg-[#0b1f3a] pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#c9962a]/15 text-[#e8b84b] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Attorney Referrals</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Hawaii&apos;s Trusted Medical Expert for Legal Cases</h1>
          <p className="text-white/55">Causation Reports · Disability Ratings · Expert Witness · AMA Guides 6th Edition</p>
        </div>
      </section>

      {/* WHY DR. WONG FOR ATTORNEYS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Why Dr. Wong</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-6">The Expert Attorneys Across Hawaii Rely On</h2>
            <div className="flex flex-col gap-4 text-gray-500 leading-relaxed mb-8">
              <p>Dr. Mankwan Wong has provided expert medical opinions in hundreds of Workers&apos; Compensation and personal injury cases throughout Hawaii. His reports are thorough, evidence-based, and written to withstand cross-examination.</p>
              <p>Whether you represent the plaintiff, defense, or an insurance carrier — Dr. Wong delivers objective, credible medical opinions grounded in the AMA Guides 6th Edition and Hawaii DWC standards.</p>
            </div>
            <ul className="flex flex-col gap-3 mb-10">
              {["Reports delivered within 14 business days", "AMA Guides 6th Edition certified", "Expert witness testimony on Oahu and Big Island", "Both plaintiff and defense referrals accepted", "Direct communication with referring attorneys"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                  <span className="text-[#c9962a] font-bold">✓</span> {b}
                </li>
              ))}
            </ul>
            <a href="tel:8089428727" className="inline-flex items-center gap-2 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5">
              <Phone size={16} /> Refer a Client — (808) 942-8727
            </a>
          </div>

          {/* Quick Reference Card */}
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-sm">
            <h3 className="font-black text-[#0b1f3a] text-xl mb-6">Quick Reference</h3>
            <div className="flex flex-col divide-y divide-gray-100">
              {quickRef.map((r) => (
                <div key={r.label} className="flex justify-between items-center py-4">
                  <span className="text-sm text-gray-400 font-semibold">{r.label}</span>
                  <span className="text-sm font-bold text-[#0b1f3a]">{r.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-4">
                <span className="text-sm text-gray-400 font-semibold">Phone</span>
                <a href="tel:8089428727" className="text-sm font-bold text-[#e05a1e] hover:text-[#c44d18]">(808) 942-8727</a>
              </div>
            </div>
            <div className="mt-8 bg-[#0b1f3a] rounded-2xl p-6 text-center">
              <div className="text-[#c9962a] font-black text-3xl mb-1">14</div>
              <div className="text-white font-bold text-sm">Business Day Turnaround</div>
              <div className="text-white/50 text-xs mt-1">On all medical-legal reports</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OFFERED */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Services for Attorneys</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight">What We Provide</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offered.map((o) => (
              <div key={o.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-3xl mb-5">{o.icon}</div>
                <h3 className="font-bold text-[#0b1f3a] mb-3">{o.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DARK */}
      <section className="py-24 bg-[#0b1f3a] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#c9962a]/5 blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <span className="inline-block bg-white/10 text-[#e8b84b] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">Refer Today</span>
          <h2 className="text-4xl font-black text-white tracking-tight mb-5">Send Your Client to Hawaii&apos;s Most Credible PM&R Expert</h2>
          <p className="text-white/60 text-lg mb-10">Call our office directly to discuss the case and schedule the examination. We work with your timeline.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:8089428727" className="flex items-center gap-2 bg-[#c9962a] hover:bg-[#e8b84b] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5">
              <Phone size={16} /> Call (808) 942-8727
            </a>
            <a href="mailto:info@drmankwanwong.com" className="flex items-center gap-2 border-2 border-white/20 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all">
              info@drmankwanwong.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
