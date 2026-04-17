import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { BP } from "@/lib/tokens";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beacon Point — Hospital-to-Home Transition Navigation | Sarasota, FL",
  description:
    "Beacon Point provides a 14-day post-discharge coordination package ($2,750) for Sarasota families. We organize follow-ups, reconcile medications, coordinate caregivers, and send daily updates so nothing gets dropped when your loved one comes home from the hospital.",
  metadataBase: new URL(BP.siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Beacon Point — The calm in the storm",
    description:
      "14-day hospital-to-home transition coordination for Sarasota families. $2,750 fixed price. Daily updates. Nothing dropped.",
    url: BP.siteUrl,
    siteName: "Beacon Point",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beacon Point — Patient Advocate, Sarasota Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beacon Point — Hospital-to-Home Transition Navigation",
    description:
      "14-day coordination package for Sarasota families. $2,750. Daily updates. Nothing dropped.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-bp-ivory text-[#2A3B32] font-body antialiased min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-bp-ivory focus:px-4 focus:py-3 focus:shadow-bp-md"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
