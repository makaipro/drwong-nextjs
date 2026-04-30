"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Workers' Compensation", href: "/services#workers-comp" },
  { label: "Auto Accident Injuries", href: "/services#auto-accident" },
  { label: "IME / FCE", href: "/services#ime" },
  { label: "Pain Management", href: "/services#pain" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "text-white/80 hover:text-white hover:bg-white/8"
    : "text-[#0b1f3a]/80 hover:text-[#0b1f3a] hover:bg-[#0b1f3a]/8";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#0b1f3a] shadow-2xl" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center h-[72px] gap-8">

          {/* Logo */}
          <Link href="/" className="flex flex-col gap-0.5 shrink-0">
            <span className={`font-extrabold text-[0.95rem] tracking-tight leading-none transition-colors duration-500 ${scrolled ? "text-white" : "text-[#0b1f3a]"}`}>
              Dr. Mankwan Wong, MD
            </span>
            <span className="text-[#c9962a] text-[0.6rem] font-semibold tracking-widest uppercase leading-none">
              Physical Medicine & Rehabilitation
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 ml-auto">
            <li>
              <Link href="/" className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${linkClass}`}>
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link href="/services" className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all ${linkClass}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </Link>
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 ${
                servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-4 py-3 text-sm text-gray-700 font-medium hover:bg-gray-50 hover:text-[#0b1f3a] transition-colors">
                    {s.label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link href="/about" className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${linkClass}`}>
                About Dr. Wong
              </Link>
            </li>
            <li>
              <Link href="/for-attorneys" className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${linkClass}`}>
                For Attorneys
              </Link>
            </li>
            <li>
              <Link href="/locations" className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${linkClass}`}>
                Locations
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <a href="tel:8089428727" className={`hidden lg:flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 shrink-0 ${
            scrolled
              ? "bg-[#e05a1e] hover:bg-[#c44d18] text-white shadow-lg"
              : "bg-[#0b1f3a] hover:bg-[#163056] text-white shadow-lg"
          }`}>
            <Phone size={15} />
            (808) 942-8727
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden ml-auto p-2 transition-colors ${scrolled ? "text-white" : "text-[#0b1f3a]"}`}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0b1f3a] border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About Dr. Wong" },
            { href: "/for-attorneys", label: "For Attorneys" },
            { href: "/locations", label: "Locations" },
          ].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white font-medium py-3 border-b border-white/10 transition-colors">
              {item.label}
            </Link>
          ))}
          <a href="tel:8089428727" className="mt-4 flex items-center justify-center gap-2 bg-[#e05a1e] text-white font-bold py-4 rounded-xl">
            <Phone size={16} /> Call (808) 942-8727
          </a>
        </div>
      </div>
    </nav>
  );
}
