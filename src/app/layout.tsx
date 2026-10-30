import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://proteinadda.in"),
  title: "PROTEIN ADDA — Real Food. Real Nutrition. Real You. | Guwahati, Assam",
  description:
    "Healthy, nutritious, and high-protein morning meals in Zoo Road, Guwahati. Fresh high-protein oats bowls and healthy sandwiches starting at ₹59. Open daily 7 AM to 11 AM.",
  keywords: [
    "Protein Adda",
    "Healthy food Guwahati",
    "High protein oats bowl",
    "Zoo Road breakfast",
    "Fitness food Guwahati",
    "Vishal Protein Adda",
    "Healthy breakfast Assam",
    "Protein Adda 2026"
  ],
  authors: [{ name: "Vishal", url: "https://www.instagram.com/proteinadda2026/" }],
  creator: "Protein Adda",
  openGraph: {
    title: "PROTEIN ADDA — Real Food. Real Nutrition. Real You.",
    description: "Start your morning with fresh high-protein oats bowls & healthy bites in Zoo Road, Guwahati. Open 7 AM – 11 AM.",
    url: "https://proteinadda.in",
    siteName: "Protein Adda",
    images: [
      {
        url: "/brand/protein-adda-logo.jpg",
        width: 1024,
        height: 1024,
        alt: "PROTEIN ADDA Brand Logo",
      },
      {
        url: "/brand/menu-poster.jpg",
        width: 682,
        height: 1024,
        alt: "Protein Adda Menu Poster",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROTEIN ADDA — Real Food. Real Nutrition. Real You.",
    description: "Healthy morning food startup in Guwahati by Vishal. Delicious oats bowls starting at ₹79.",
    images: ["/brand/menu-poster.jpg"],
  },
  icons: {
    icon: "/brand/protein-adda-logo.jpg",
    apple: "/brand/protein-adda-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#080808] text-[#F5F2E9] antialiased font-[family-name:var(--font-inter)] selection:bg-[#A6D63C] selection:text-black">
        {children}
      </body>
    </html>
  );
}
