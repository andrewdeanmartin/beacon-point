import type { Metadata } from "next";
import { BP } from "./tokens";

export const siteMetadata: Metadata = {
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
    siteName: BP.businessName,
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
};

