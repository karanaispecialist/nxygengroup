import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import CustomCursor from "@/components/animations/CustomCursor";
import ScrollProgress from "@/components/animations/ScrollProgress";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090D",
};

export const metadata: Metadata = {
  title: "NXGEN PEOPLE | Pioneers of Fashion, Entertainment, Food & Education",
  description: "NXGEN PEOPLE (NPG / NPS) is a diversified Indian business group established in 1987. Flagship in Haute Couture, Miss India Pageants, Cinema & Entertainment, alongside Food & Hospitality and Value-Driven Education.",
  keywords: [
    "NXGEN PEOPLE",
    "NXGEN PEOPLE GROUP",
    "NPS Bhopal",
    "Vicky Da",
    "Fashion and Entertainment Bhopal",
    "Miss India 2026",
    "Khadi Beauty Pageant",
    "Threads of Freedom and Elegance",
    "NXGEN Public School",
    "Chilliflakes Cafe",
    "Central India Fashion"
  ],
  authors: [{ name: "NXGEN PEOPLE GROUP" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-nxgen-dark text-white min-h-screen flex flex-col antialiased selection:bg-nxgen-gold selection:text-black">
        <SmoothScrollProvider>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow pb-24 lg:pb-0">{children}</main>
          <Footer />
          <MobileStickyFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
