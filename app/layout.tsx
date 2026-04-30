import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hawaii Workers' Comp Doctor | Dr. Mankwan Wong MD | Honolulu & Kona",
  description: "Board-certified PM&R physician specializing in Workers' Compensation and auto accident injuries in Hawaii. Serving Honolulu and Kona. Call (808) 942-8727.",
  keywords: "workers comp doctor Hawaii, auto accident doctor Honolulu, PM&R specialist Hawaii, work injury doctor Kona, pain management Hawaii",
  openGraph: {
    title: "Dr. Mankwan Wong MD | Hawaii Workers' Comp Specialist",
    description: "Board-certified PM&R physician. Workers' Comp & auto accident injuries. Honolulu & Kona. Call (808) 942-8727.",
    url: "https://www.drmankwanwong.com",
    siteName: "Dr. Mankwan Wong MD",
    locale: "en_US",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://www.drmankwanwong.com/#physician",
      "name": "Mankwan Wong, MD",
      "alternateName": "Dr. Mankwan Wong",
      "description": "Board-certified Physical Medicine & Rehabilitation physician specializing in Workers' Compensation and auto accident injuries in Hawaii.",
      "url": "https://www.drmankwanwong.com",
      "telephone": "+18089428727",
      "image": "https://static.wixstatic.com/media/b4cf65_14e3e1c5ee1848868419ec3aa6bec97b~mv2.png",
      "medicalSpecialty": "PhysicalTherapy",
      "knowsAbout": [
        "Workers' Compensation",
        "Auto Accident Injuries",
        "Physical Medicine and Rehabilitation",
        "Pain Management",
        "Electrodiagnostics",
        "AMA Guides 6th Edition"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Board Certification",
          "recognizedBy": { "@type": "Organization", "name": "American Board of Physical Medicine & Rehabilitation" }
        }
      ],
      "worksFor": { "@id": "https://www.drmankwanwong.com/#organization" }
    },
    {
      "@type": ["MedicalOrganization", "LocalBusiness"],
      "@id": "https://www.drmankwanwong.com/#organization",
      "name": "Mankwan Wong, MD LLC",
      "url": "https://www.drmankwanwong.com",
      "telephone": "+18089428727",
      "email": "info@drmankwanwong.com",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Workers Compensation Insurance, Auto Insurance PIP",
      "image": "https://static.wixstatic.com/media/b4cf65_14e3e1c5ee1848868419ec3aa6bec97b~mv2.png",
      "logo": "https://www.drmankwanwong.com/favicon.ico",
      "sameAs": ["https://www.drmankwanwong.com"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1750 Kalakaua Ave, Suite 108",
        "addressLocality": "Honolulu",
        "addressRegion": "HI",
        "postalCode": "96826",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Honolulu" },
        { "@type": "City", "name": "Kailua-Kona" },
        { "@type": "State", "name": "Hawaii" }
      ]
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.drmankwanwong.com/#honolulu",
      "name": "Dr. Mankwan Wong MD — Honolulu",
      "url": "https://www.drmankwanwong.com/locations",
      "telephone": "+18089428727",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1750 Kalakaua Ave, Suite 108",
        "addressLocality": "Honolulu",
        "addressRegion": "HI",
        "postalCode": "96826",
        "addressCountry": "US"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 21.2839, "longitude": -157.8387 },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "medicalSpecialty": "PhysicalTherapy"
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.drmankwanwong.com/#kona",
      "name": "Dr. Mankwan Wong MD — Kona",
      "url": "https://www.drmankwanwong.com/locations",
      "telephone": "+18089428727",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "74-5620 A Palani Rd, Suite 102",
        "addressLocality": "Kailua-Kona",
        "addressRegion": "HI",
        "postalCode": "96740",
        "addressCountry": "US"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 19.6383, "longitude": -155.9969 },
      "medicalSpecialty": "PhysicalTherapy"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
