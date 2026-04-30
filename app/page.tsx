import Link from "next/link";
import { Phone, ArrowRight, MapPin, Clock, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO — Full viewport, medera-style */}
      <section className="relative h-screen overflow-hidden bg-[#f0eeeb]">

        {/* Photo — full height, natural proportions, anchored right so face always shows */}
        <img
          src="https://static.wixstatic.com/media/b4cf65_14e3e1c5ee1848868419ec3aa6bec97b~mv2.png"
          alt="Dr. Mankwan Wong MD"
          className="absolute top-0 right-0 h-full w-auto"
        />
        {/* Gradient fade from left so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0eeeb]/95 via-[#f0eeeb]/60 to-transparent pointer-events-none" />
        {/* Very subtle top fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0eeeb]/30 via-transparent to-transparent pointer-events-none" />

        {/* Top-left corner tag */}
        <div className="absolute z-10 flex items-center gap-3" style={{ top: "104px", left: "32px" }}>
          <span className="text-[10px] tracking-[0.18em] text-gray-700 uppercase border border-gray-400/60 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm font-semibold">
            Physical Medicine &amp; Rehabilitation
          </span>
          <div className="w-7 h-7 border border-gray-400/60 rounded-lg flex items-center justify-center bg-white/40 backdrop-blur-sm">
            <span className="text-[10px] text-gray-600">↗</span>
          </div>
        </div>

        {/* Top-right corner tag */}
        <div className="absolute z-10 hidden lg:block" style={{ top: "104px", right: "32px" }}>
          <span className="text-[10px] tracking-[0.18em] text-gray-700 uppercase border border-gray-400/60 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm font-semibold">
            Honolulu · Kailua-Kona, Hawaii
          </span>
        </div>

        {/* HUGE background typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <h1
            className="font-black text-center leading-none tracking-tighter text-gray-900/[0.06]"
            style={{ fontSize: "17vw" }}
          >
            DR. WONG
          </h1>
        </div>

        {/* Bottom-left — clinic label + CTA */}
        <div className="absolute z-10" style={{ bottom: "52px", left: "32px" }}>
          <p className="text-[10px] tracking-[0.2em] text-gray-600 uppercase mb-2 flex items-center gap-2 font-semibold">
            Medical Practice
            <span className="inline-flex w-5 h-5 border border-gray-400/60 rounded items-center justify-center bg-white/40 text-[9px]">↗</span>
          </p>
          <p className="text-[11px] text-gray-500 mb-7">Workers&apos; Comp · Auto Accident · Pain Management</p>
          <a
            href="tel:8089428727"
            className="inline-flex items-center gap-2 bg-[#0b1f3a] hover:bg-[#163056] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-xl"
          >
            <Phone size={14} /> Call (808) 942-8727
          </a>
        </div>

        {/* Bottom-right — doctor name */}
        <div className="absolute z-10 text-right hidden lg:block" style={{ bottom: "52px", right: "32px" }}>
          <p className="text-[11px] tracking-[0.12em] text-gray-600 font-bold">Mankwan Wong, MD LLC</p>
          <p className="text-[10px] text-gray-400 mt-1.5">Board-Certified PM&amp;R · AMA Guides 6th Ed.</p>
        </div>

        {/* Decorative gold dot chain */}
        <svg
          className="absolute pointer-events-none select-none opacity-25"
          style={{ right: "14%", top: "50%", transform: "translateY(-50%)", width: "48px" }}
          viewBox="0 0 48 340"
          fill="none"
        >
          <circle cx="24" cy="16" r="9" stroke="#c9962a" strokeWidth="1.5" />
          <line x1="24" y1="25" x2="24" y2="58" stroke="#c9962a" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="24" cy="67" r="5.5" stroke="#c9962a" strokeWidth="1.5" />
          <line x1="24" y1="73" x2="24" y2="108" stroke="#c9962a" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="24" cy="117" r="7" stroke="#c9962a" strokeWidth="1.5" />
          <line x1="24" y1="124" x2="24" y2="158" stroke="#c9962a" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="24" cy="167" r="4" stroke="#c9962a" strokeWidth="1.5" />
          <line x1="24" y1="171" x2="24" y2="206" stroke="#c9962a" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="24" cy="215" r="9" stroke="#c9962a" strokeWidth="1.5" />
          <line x1="24" y1="224" x2="24" y2="258" stroke="#c9962a" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="24" cy="267" r="5.5" stroke="#c9962a" strokeWidth="1.5" />
          <line x1="24" y1="273" x2="24" y2="308" stroke="#c9962a" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="24" cy="317" r="7" stroke="#c9962a" strokeWidth="1.5" />
        </svg>

        {/* Scroll indicator */}
        <div className="absolute z-10 left-1/2 -translate-x-1/2" style={{ bottom: "28px" }}>
          <div className="flex flex-col items-center gap-1.5 animate-bounce">
            <span className="text-[9px] tracking-[0.2em] text-gray-500 uppercase">Scroll</span>
            <div className="w-px h-6 bg-gray-400/50" />
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-[#0b1f3a] py-4 overflow-hidden">
        <div className="flex items-center gap-16 whitespace-nowrap text-[11px] tracking-[0.15em] text-white/40 font-semibold uppercase px-8">
          {["Workers' Compensation", "·", "Auto Accident Injuries", "·", "Pain Management", "·", "Expert Witness Testimony", "·", "AMA Guides 6th Edition", "·", "Honolulu & Kona", "·", "Workers' Compensation", "·", "Auto Accident Injuries", "·", "Pain Management", "·", "Expert Witness Testimony", "·", "AMA Guides 6th Edition", "·"].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES — Editorial numbered */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">What We Treat</span>
              <h2 className="text-5xl font-black text-[#0b1f3a] tracking-tight">Specialized<br />Medical Services</h2>
            </div>
            <Link href="/services" className="hidden lg:flex items-center gap-2 text-sm text-[#0b1f3a] font-bold hover:text-[#c9962a] transition-colors">
              View All <ArrowRight size={15} />
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">
            {[
              { n: "01", title: "Workers' Compensation", desc: "Full evaluation, DWC-compliant reporting, MMI determination, and return-to-work clearance. Direct billing to employer's insurer.", tag: "HRS Chapter 386", href: "/services#workers-comp" },
              { n: "02", title: "Auto Accident Injuries", desc: "PIP/No-Fault coverage for whiplash, spine trauma, TBI, and nerve injuries. We bill your auto insurance directly.", tag: "HRS 431:10C", href: "/services#auto-accident" },
              { n: "03", title: "Pain Management", desc: "Trigger point injections, joint injections, EMG/NCS electrodiagnostics, and interdisciplinary rehab programs.", tag: "Chronic & Acute", href: "/services#pain" },
            ].map((s) => (
              <Link key={s.n} href={s.href} className="grid lg:grid-cols-[80px_1fr_24px] gap-8 items-center py-10 hover:bg-gray-50 px-6 -mx-6 rounded-2xl transition-all group">
                <span className="text-5xl font-black leading-none text-gray-100 group-hover:text-[#c9962a]/20 transition-colors">{s.n}</span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-black text-[#0b1f3a]">{s.title}</h3>
                    <span className="hidden sm:inline text-[#c9962a] text-[10px] font-bold bg-[#c9962a]/10 px-3 py-1 rounded-full tracking-wider uppercase">{s.tag}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <ChevronRight size={18} className="text-gray-200 group-hover:text-[#c9962a] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0b1f3a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3">
            {[
              { n: "20+", l: "Years of practice in Hawaii", sub: "PM&R specialty since the early 2000s" },
              { n: "1,000+", l: "Injury cases evaluated", sub: "Workers' Comp & auto accident" },
              { n: "100%", l: "Injury-focused practice", sub: "Workers' Comp & auto accident only" },
            ].map((s, i) => (
              <div key={s.l} className={`py-16 px-10 ${i < 2 ? "lg:border-r border-white/10" : ""} border-b lg:border-b-0 border-white/10`}>
                <div className="text-7xl lg:text-8xl font-black text-white leading-none mb-4">{s.n}</div>
                <div className="text-[#c9962a] font-bold text-base mb-2">{s.l}</div>
                <div className="text-white/30 text-xs tracking-wide">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-28 bg-[#f7f6f4]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ height: "580px" }}>
              <img
                src="https://static.wixstatic.com/media/b4cf65_14e3e1c5ee1848868419ec3aa6bec97b~mv2.png"
                alt="Dr. Mankwan Wong MD"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0b1f3a] flex items-center justify-center text-white text-sm font-black">✓</div>
                <div>
                  <div className="font-black text-[#0b1f3a] text-sm">DWC Approved</div>
                  <div className="text-gray-400 text-xs">Hawaii Division of Workers&apos; Comp</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">About Dr. Wong</span>
            <h2 className="text-5xl font-black text-[#0b1f3a] tracking-tight leading-tight mb-8">
              Board-Certified.<br />Evidence-Based.<br />On Time.
            </h2>
            <div className="flex flex-col gap-4 text-gray-500 leading-relaxed mb-10 text-[15px]">
              <p>Dr. Mankwan Wong is a board-certified PM&amp;R specialist with over two decades treating injured workers and auto accident victims throughout Hawaii.</p>
              <p>Recognized statewide by attorneys, insurance carriers, and employers as Hawaii&apos;s most credible PM&amp;R physician. Reports are precise, defensible, and delivered within 14 business days — every time.</p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#0b1f3a] hover:bg-[#163056] text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg text-sm">
              Full Biography <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ATTORNEYS */}
      <section className="py-28 bg-[#0b1f3a] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#c9962a]/5 blur-[130px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">For Attorneys</span>
            <h2 className="text-5xl font-black text-white tracking-tight leading-tight mb-8">The Expert Hawaii Attorneys Call First</h2>
            <p className="text-white/40 leading-relaxed text-base mb-10">Causation Reports · Disability Ratings · Expert Witness Testimony. Both plaintiff and defense referrals accepted.</p>
            <Link href="/for-attorneys" className="inline-flex items-center gap-2 bg-[#c9962a] hover:bg-[#e8b84b] text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg text-sm">
              Attorney Referral Info <ArrowRight size={15} />
            </Link>
          </div>

          <div className="bg-white/5 rounded-3xl p-10 border border-white/10">
            <div className="text-center mb-10">
              <div className="text-9xl font-black text-[#c9962a] leading-none">14</div>
              <div className="text-white font-bold text-lg mt-3">Business Day Turnaround</div>
              <div className="text-white/25 text-xs mt-2 tracking-wide">On all medical-legal reports — guaranteed</div>
            </div>
            <div className="flex flex-col gap-4">
              {["AMA Guides 6th Edition certified", "Plaintiff & defense referrals accepted", "Expert witness testimony statewide", "Direct attorney communication"].map((b) => (
                <div key={b} className="flex items-center gap-3 text-white/50 text-sm">
                  <span className="text-[#c9962a] font-black">✓</span> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Find Us</span>
            <h2 className="text-5xl font-black text-[#0b1f3a] tracking-tight">Two Locations.<br />One Standard of Care.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { name: "Honolulu Clinic", tag: "Primary", street: "1750 Kalakaua Ave, Suite 108", city: "Honolulu, HI 96826", hours: "Mon–Fri · 8am–5pm", maps: "https://maps.google.com/?q=1750+Kalakaua+Ave+Ste+108+Honolulu+HI+96826" },
              { name: "Kona Clinic", tag: "Big Island", street: "74-5620 A Palani Rd, Suite 102", city: "Kailua-Kona, HI 96740", hours: "Select Fridays · 8am–5pm", maps: "https://maps.google.com/?q=74-5620+Palani+Rd+Suite+102+Kailua+Kona+HI+96740" },
            ].map((loc) => (
              <div key={loc.name} className="bg-[#f7f6f4] rounded-3xl p-10 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-6">{loc.tag}</span>
                <h3 className="text-3xl font-black text-[#0b1f3a] mb-6">{loc.name}</h3>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={15} className="text-[#c9962a] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold text-sm">{loc.street}</p>
                    <p className="text-gray-400 text-sm">{loc.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-10">
                  <Clock size={15} className="text-[#c9962a] shrink-0" />
                  <p className="text-gray-500 text-sm font-medium">{loc.hours}</p>
                </div>
                <div className="flex gap-3">
                  <a href="tel:8089428727" className="flex items-center gap-2 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md">
                    <Phone size={13} /> Call Now
                  </a>
                  <a href={loc.maps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-[#0b1f3a] text-[#0b1f3a] hover:bg-[#0b1f3a] hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-all">
                    Directions ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="https://static.wixstatic.com/media/b4cf65_14e3e1c5ee1848868419ec3aa6bec97b~mv2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-[#0b1f3a]/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="text-[#c9962a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-6">Get Started Today</span>
          <h2 className="text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight">Ready?</h2>
          <p className="text-white/55 text-lg mb-14">Workers&apos; Comp and auto accident patients welcome. Call to verify insurance — we respond within 24 hours.</p>
          <a href="tel:8089428727" className="inline-flex items-center gap-4 bg-white hover:bg-gray-100 text-[#0b1f3a] font-black px-14 py-7 rounded-2xl shadow-2xl text-xl transition-all hover:-translate-y-1">
            <Phone size={24} /> (808) 942-8727
          </a>
          <p className="text-white/25 text-xs mt-8 tracking-widest uppercase">Mon–Fri 8am–5pm · Honolulu &amp; Kona</p>
        </div>
      </section>
    </>
  );
}
