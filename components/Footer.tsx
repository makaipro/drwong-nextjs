import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-xl font-extrabold mb-3 tracking-tight">Dr. Mankwan Wong, MD</div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Board-Certified Physical Medicine & Rehabilitation. Hawaii&apos;s specialist for Workers&apos; Compensation and auto accident injuries.
            </p>
            <a href="tel:8089428727" className="flex items-center gap-2 text-gold font-bold text-lg hover:text-gold-light transition-colors">
              <Phone size={18} /> (808) 942-8727
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Dr. Wong" },
                { href: "/services", label: "Services" },
                { href: "/for-attorneys", label: "For Attorneys" },
                { href: "/locations", label: "Locations" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Locations</h4>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-start gap-2 text-white/80 font-semibold text-sm mb-1">
                  <MapPin size={14} className="mt-0.5 text-gold shrink-0" /> Honolulu
                </div>
                <p className="text-white/50 text-xs leading-relaxed pl-5">
                  1750 Kalakaua Ave, Ste 108<br />Honolulu, HI 96826<br />Mon–Fri 8am–5pm
                </p>
              </div>
              <div>
                <div className="flex items-start gap-2 text-white/80 font-semibold text-sm mb-1">
                  <MapPin size={14} className="mt-0.5 text-gold shrink-0" /> Kona
                </div>
                <p className="text-white/50 text-xs leading-relaxed pl-5">
                  74-5620 A Palani Rd, Suite 102<br />Kailua-Kona, HI 96740<br />Select Fridays
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:8089428727" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                <Phone size={14} className="text-gold" /> (808) 942-8727
              </a>
              <a href="mailto:info@drmankwanwong.com" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                <Mail size={14} className="text-gold" /> info@drmankwanwong.com
              </a>
              <p className="text-white/40 text-xs mt-2">Mon–Fri: 8:00am – 5:00pm<br />Hawaii Standard Time</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 text-center">
          <p className="text-white/25 text-xs">
            © 2025 Mankwan Wong, MD LLC · All Rights Reserved · Hawaii Workers&apos; Comp & Auto Accident Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}
