import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Honolulu & Kona Locations | Dr. Mankwan Wong MD",
  description: "Two locations serving all of Hawaii — 1750 Kalakaua Ave Honolulu and 74-5620 Palani Rd Kailua-Kona. Workers' Comp and auto accident specialist.",
};

const locations = [
  {
    name: "Honolulu Clinic",
    tag: "Primary Location",
    street: "1750 Kalakaua Ave, Suite 108",
    city: "Honolulu, HI 96826",
    hours: [
      { day: "Monday", time: "8:00am – 5:00pm" },
      { day: "Tuesday", time: "8:00am – 5:00pm" },
      { day: "Wednesday", time: "8:00am – 5:00pm" },
      { day: "Thursday", time: "8:00am – 5:00pm" },
      { day: "Friday", time: "8:00am – 5:00pm" },
      { day: "Saturday", time: "Closed" },
      { day: "Sunday", time: "Closed" },
    ],
    note: "Located in the heart of Honolulu near Waikiki. Ample street parking available. Accessible by TheBus routes 2 and 13.",
    maps: "https://maps.google.com/?q=1750+Kalakaua+Ave+Ste+108+Honolulu+HI+96826",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.9!2d-157.8355621!3d21.2912049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8!2s1750+Kalakaua+Ave+Ste+108+Honolulu+HI!5e0!3m2!1sen!2sus",
  },
  {
    name: "Kona Clinic",
    tag: "Big Island",
    street: "74-5620 A Palani Rd, Suite 102",
    city: "Kailua-Kona, HI 96740",
    hours: [
      { day: "Monday – Thursday", time: "Closed" },
      { day: "Friday", time: "8:00am – 5:00pm (Select)" },
      { day: "Saturday – Sunday", time: "Closed" },
    ],
    note: "Serving Workers' Comp and auto accident patients on the Big Island. Call to confirm Friday availability before your visit.",
    maps: "https://maps.google.com/?q=74-5620+Palani+Rd+Suite+102+Kailua+Kona+HI+96740",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.9!2d-155.9969!3d19.6400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8!2s74-5620+Palani+Rd+Kailua-Kona+HI!5e0!3m2!1sen!2sus",
  },
];

export default function Locations() {
  return (
    <>
      <section className="bg-[#0b1f3a] pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#c9962a]/15 text-[#e8b84b] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">Find Us</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Two Locations Serving All of Hawaii</h1>
          <p className="text-white/55">Honolulu · Kailua-Kona · Call (808) 942-8727</p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {locations.map((loc, i) => (
            <div key={loc.name} className={`grid lg:grid-cols-2 gap-12 items-start py-20 ${i < locations.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div>
                <span className="inline-block bg-[#c9962a]/10 text-[#c9962a] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">{loc.tag}</span>
                <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-5">{loc.name}</h2>

                <div className="flex items-start gap-3 mb-6">
                  <MapPin size={18} className="text-[#c9962a] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">{loc.street}</p>
                    <p className="text-gray-500">{loc.city}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                  <div className="flex items-center gap-2 text-[#0b1f3a] font-bold text-sm mb-4">
                    <Clock size={15} className="text-[#c9962a]" /> Hours
                  </div>
                  <div className="flex flex-col gap-2">
                    {loc.hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                        <span className="text-gray-500 font-medium">{h.day}</span>
                        <span className={`font-semibold ${h.time === "Closed" ? "text-gray-300" : "text-[#0b1f3a]"}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">{loc.note}</p>

                <div className="flex flex-wrap gap-3">
                  <a href="tel:8089428727" className="flex items-center gap-2 bg-[#e05a1e] hover:bg-[#c44d18] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5">
                    <Phone size={15} /> Call (808) 942-8727
                  </a>
                  <a href={loc.maps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-[#0b1f3a] text-[#0b1f3a] hover:bg-[#0b1f3a] hover:text-white font-bold px-6 py-3.5 rounded-xl transition-all">
                    Get Directions ↗
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100" style={{ height: "420px" }}>
                <iframe src={loc.embed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${loc.name} Map`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#e05a1e] to-[#c44d18]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white tracking-tight mb-5">Call to Confirm Your Location & Schedule</h2>
          <p className="text-white/80 text-lg mb-10">Our team will verify your insurance and get you scheduled — usually within 48 hours.</p>
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
