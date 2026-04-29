"use client";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin, ChevronRight } from "lucide-react";

const services = [
  { icon: "⚙️", title: "Workers' Compensation", desc: "Complete medical care for workplace injuries under Hawaii HRS Chapter 386. Evaluations, DWC reporting, and return-to-work assessments.", href: "/services#workers-comp" },
  { icon: "🚗", title: "Auto Accident Injuries", desc: "PIP/No-Fault injury treatment billed directly to your auto insurance. No out-of-pocket cost to patients.", href: "/services#auto-accident" },
  { icon: "📋", title: "IME & FCE", desc: "Independent Medical Examinations and Functional Capacity Evaluations. AMA Guides 6th Edition ratings. 14-day turnaround.", href: "/services#ime" },
  { icon: "🩺", title: "Pain Management", desc: "Comprehensive pain management for chronic and acute conditions resulting from workplace or auto accident injuries.", href: "/services#pain" },
];

const whyList = [
  { title: "Workers' Comp Expert", desc: "Deep expertise in Hawaii HRS Chapter 386, DWC billing, and occupational medicine protocols." },
  { title: "Trusted by Attorneys", desc: "Causation reports, apportionment opinions, and expert witness testimony accepted statewide." },
  { title: "Patient-First Approach", desc: "Every patient receives a personalized treatment plan focused on recovery and return to function." },
  { title: "No Upfront Cost", desc: "Workers' Comp and PIP/No-Fault patients pay nothing out of pocket. We handle all billing." },
];

const steps = [
  { n: "01", title: "Call Us", desc: "Call (808) 942-8727. Our team verifies your insurance and schedules your appointment — usually within 48 hours." },
  { n: "02", title: "Get Evaluated", desc: "Dr. Wong conducts a thorough exam, reviews your history, and creates a complete treatment and documentation plan." },
  { n: "03", title: "Start Recovery", desc: "Begin your personalized care plan. Dr. Wong coordinates with your employer, attorney, and insurer so you focus on healing." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-[#0b1f3a] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#c9962a]/5 blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#c9962a]/15 border border-[#c9962a]/30 text-[#e8b84b] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              Hawaii&apos;s #1 Workers&apos; Comp Specialist
            </div>
            <h1 className="text-5xl lg:text-[3.6rem] font-black text-white leading-[1.06] tracking-[-2px] mb-6">
              Injured at Work or in an Auto Accident?
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Dr. Mankwan Wong, MD is Hawaii&apos;s board-certified PM&R specialist for Workers&apos; Compensation and auto accident injuries. Honolulu & Kona. No upfront cost.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="tel:8089428727" className="flex items-center gap-2 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-bold px-7 py-4 rounded-xl shadow-xl transition-all hover:-translate-y-1 text-[0.95rem]">
                <Phone size={18} /> Call Now — (808) 942-8727
              </a>
              <Link href="/services" className="flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-7 py-4 rounded-xl transition-all hover:bg-white/8">
                Our Services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-5">
              {["Board-Certified PM&R", "Workers' Comp Accepted", "PIP / No-Fault Accepted", "Honolulu & Kona"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/65 text-sm font-medium">
                  <CheckCircle size={15} className="text-[#c9962a] shrink-0" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[560px]">
              <img src="https://static.wixstatic.com/media/b4cf65_14e3e1c5ee1848868419ec3aa6bec97b~mv2.png" alt="Dr. Mankwan Wong MD" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5">
              <div className="text-3xl font-black text-[#0b1f3a] leading-none">20+</div>
              <div className="text-xs text-gray-400 font-semibold mt-1">Years Experience</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#c9962a] rounded-2xl shadow-xl p-4">
              <div className="text-white font-bold text-sm">AMA Guides</div>
              <div className="text-white/80 text-xs">6th Edition</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#163056] border-y border-white/8">
        <div className="max-w-6xl mx-auto px-6 py-7">
          <div className="flex flex-wrap items-center justify-center divide-x divide-white/15">
            {[
              { stat: "Board-Certified", label: "American Board of PM&R" },
              { stat: "20+ Years", label: "Clinical Experience" },
              { stat: "AMA Guides", label: "6th Edition Certified" },
              { stat: "DWC Approved", label: "Hawaii Div. of Workers' Comp" },
              { stat: "2 Locations", label: "Honolulu & Kona" },
            ].map((b) => (
              <div key={b.stat} className="flex flex-col items-center px-8 py-2">
                <span className="text-[#c9962a] font-extrabold text-base">{b.stat}</span>
                <span className="text-white/50 text-xs mt-0.5">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">What We Treat</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-4">Specialized Care for Work & Auto Injuries</h2>
            <p className="text-gray-500 leading-relaxed">Dr. Wong focuses exclusively on occupational and accident-related injuries — expert care for people who need it most.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0b1f3a] to-[#c9962a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="font-bold text-[#0b1f3a] text-[1.05rem] mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="flex items-center gap-1 text-[#0b1f3a] font-bold text-sm group-hover:text-[#e05a1e] transition-colors">
                  Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DR. WONG */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[520px]">
              <img src="https://static.wixstatic.com/media/b4cf65_74cb388aac614f7793e672cd4fc608f9~mv2.png" alt="Dr. Wong" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute bottom-8 left-8 bg-[#0b1f3a] text-white rounded-2xl p-5 border-l-4 border-[#c9962a] shadow-2xl">
              <div className="text-3xl font-black text-[#c9962a] leading-none">1,000+</div>
              <div className="text-white/70 text-xs mt-1 font-medium">IMEs Completed</div>
            </div>
          </div>
          <div>
            <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Why Dr. Wong</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-5">Hawaii&apos;s Most Trusted PM&R Specialist</h2>
            <p className="text-gray-500 leading-relaxed mb-8">Dr. Mankwan Wong is board-certified in Physical Medicine & Rehabilitation with over two decades of experience treating injured workers and accident victims across Hawaii.</p>
            <ul className="flex flex-col gap-6 mb-10">
              {whyList.map((w) => (
                <li key={w.title} className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#c9962a]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-[#c9962a]" />
                  </div>
                  <div>
                    <strong className="block text-[#0b1f3a] font-bold mb-1">{w.title}</strong>
                    <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#0b1f3a] hover:bg-[#163056] text-white font-bold px-7 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg">
              Meet Dr. Wong <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Simple Process</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-4">Getting Started is Easy</h2>
            <p className="text-gray-500">From your first call to your first appointment — we make it simple.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="text-6xl font-black text-[#0b1f3a]/10 mb-4 leading-none">{s.n}</div>
                <h3 className="font-bold text-[#0b1f3a] text-xl mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                {i < 2 && <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#c9962a] text-2xl font-bold z-10">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTORNEYS */}
      <section className="py-24 bg-[#0b1f3a] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#c9962a]/5 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/10 text-[#e8b84b] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">For Attorneys</span>
            <h2 className="text-4xl font-black text-white tracking-tight mb-5">Hawaii&apos;s Go-To Expert Witness</h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">We work directly with plaintiff and defense attorneys handling Workers&apos; Comp and personal injury cases. Fast turnaround. Defensible reports. Court-ready testimony.</p>
            <ul className="flex flex-col gap-3 mb-10">
              {["Independent Medical Examinations (IME)", "Functional Capacity Evaluations (FCE)", "Causation & Apportionment Reports", "AMA Guides 6th Edition Disability Ratings", "Expert Witness Testimony — Statewide"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/75 font-medium">
                  <ArrowRight size={15} className="text-[#c9962a] shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:8089428727" className="flex items-center gap-2 bg-[#c9962a] hover:bg-[#e8b84b] text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5">
                <Phone size={16} /> Refer a Client — (808) 942-8727
              </a>
              <span className="text-white/40 text-sm">Reports within 14 business days</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Find Us</span>
            <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight">Two Locations Serving All of Hawaii</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Honolulu Clinic", tag: "Primary Location", addr: "1750 Kalakaua Ave, Ste 108\nHonolulu, HI 96826", hours: "Mon–Fri: 8:00am–5:00pm", maps: "https://maps.google.com/?q=1750+Kalakaua+Ave+Ste+108+Honolulu+HI+96826" },
              { name: "Kona Clinic", tag: "Big Island", addr: "74-5620 A Palani Rd, Suite 102\nKailua-Kona, HI 96740", hours: "Select Fridays: 8:00am–5:00pm", maps: "https://maps.google.com/?q=74-5620+Palani+Rd+Suite+102+Kailua+Kona+HI+96740" },
            ].map((loc) => (
              <div key={loc.name} className="bg-gray-50 rounded-2xl p-9 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">{loc.tag}</span>
                <h3 className="text-2xl font-black text-[#0b1f3a] mb-4">{loc.name}</h3>
                <div className="flex items-start gap-3 text-gray-500 mb-3">
                  <MapPin size={16} className="text-[#c9962a] mt-0.5 shrink-0" />
                  <p className="text-sm leading-relaxed whitespace-pre-line">{loc.addr}</p>
                </div>
                <p className="text-sm text-gray-400 mb-8 pl-7">{loc.hours}</p>
                <div className="flex gap-3">
                  <a href="tel:8089428727" className="flex items-center gap-2 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-md">
                    <Phone size={14} /> Call Now
                  </a>
                  <a href={loc.maps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-[#0b1f3a] text-[#0b1f3a] hover:bg-[#0b1f3a] hover:text-white font-bold px-5 py-3 rounded-xl text-sm transition-all">
                    Get Directions ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-[#e05a1e] to-[#c44d18] relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">Ready to Get the Care You Deserve?</h2>
          <p className="text-white/80 text-lg mb-10">Workers&apos; Comp and auto accident patients welcome. No referral needed. No upfront cost.</p>
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
