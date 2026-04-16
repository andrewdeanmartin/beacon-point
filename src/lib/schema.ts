import { BP } from "./tokens";

export type JsonLd = Record<string, unknown>;

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: BP.businessName,
    description:
      "Beacon Point is a private, non-clinical care navigation service in Sarasota, Florida. We provide a 14-day Hospital-to-Home Transition Package that coordinates post-discharge logistics for older adults and their families.",
    url: BP.siteUrl,
    telephone: BP.phoneE164,
    email: BP.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BP.city,
      addressRegion: BP.region,
      postalCode: BP.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.3364",
      longitude: "-82.5307",
    },
    areaServed: [
      { "@type": "City", name: "Sarasota" },
      { "@type": "City", name: "Bradenton" },
      { "@type": "City", name: "Lakewood Ranch" },
      { "@type": "City", name: "Venice" },
      { "@type": "City", name: "Longboat Key" },
    ],
    founder: {
      "@type": "Person",
      name: "Megan [Last Name]",
      jobTitle: "Founder and Lead Navigator",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: "Master's degree",
        name: "Master of Public Health (MPH)",
      },
    },
    priceRange: "$2,750 per engagement",
    paymentAccepted: "Private pay",
    currenciesAccepted: "USD",
    knowsAbout: [
      "hospital discharge coordination",
      "care transitions",
      "medication reconciliation",
      "post-discharge follow-up",
      "caregiver coordination",
      "elder care navigation",
    ],
    slogan: BP.tagline,
  };
}

export function serviceSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "14-Day Hospital-to-Home Transition Package",
    description:
      "A fixed-price, 14-day coordination engagement that begins at hospital discharge. Includes medication list organization, appointment scheduling, cross-party coordination, daily written updates, and a closeout summary.",
    provider: { "@type": "ProfessionalService", name: BP.businessName },
    areaServed: { "@type": "City", name: BP.city, addressRegion: BP.region },
    offers: {
      "@type": "Offer",
      price: "2750",
      priceCurrency: "USD",
      description: "Fixed price. 50% deposit on engagement, 50% at day 7 or closeout.",
    },
    serviceType: "Care Navigation",
  };
}

export function faqSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a care navigator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A care navigator is a non-clinical professional who coordinates the logistics of care transitions — scheduling follow-ups, organizing medication lists, aligning caregivers, and keeping families informed. Beacon Point provides this service as a fixed-price, 14-day package for families in the Sarasota, Florida area.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Beacon Point cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Beacon Point's 14-Day Hospital-to-Home Transition Package is $2,750 fixed price. This includes daily written updates, medication list organization, appointment scheduling, cross-party coordination, and a closeout summary. Payment terms are 50% on engagement, 50% at day 7 or closeout. This is a private-pay service not covered by insurance.",
        },
      },
      {
        "@type": "Question",
        name: "Is Beacon Point a medical service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Beacon Point is a non-clinical coordination service. We do not provide medical advice, diagnose conditions, recommend treatments, or perform hands-on care. We organize the non-clinical logistics so families don't have to manage every task themselves. All medical questions are directed to licensed providers.",
        },
      },
      {
        "@type": "Question",
        name: "What area does Beacon Point serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Beacon Point serves families in Sarasota County, Florida, including Sarasota, Lakewood Ranch, Bradenton, Venice, and Longboat Key.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with Beacon Point?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call (941) 555-0142 or email megan@beaconpointcare.com. We schedule a 15-minute triage call to confirm fit, urgency, and scope. If we're a good match, we can start the same day the engagement letter is signed. We respond to all inquiries within 4 hours.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after the 14 days?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On day 14, you receive a closeout summary documenting everything that was completed, what items remain unresolved with named owners, and whether ongoing coordination support is recommended. Most families do not need ongoing support.",
        },
      },
      {
        "@type": "Question",
        name: "How is Beacon Point different from a home care agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Home care agencies provide caregivers who assist with daily living tasks. Beacon Point does not provide caregivers. We coordinate across the family, home care agency, medical providers, and other parties to make sure everyone has the same information and nothing falls through the cracks. We complement home care, not compete with it.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help if my parent lives in Sarasota but I live out of state?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — remote adult children are our most common client. We serve as your local point person in Sarasota, coordinating everything on the ground and sending you daily written updates so you always know what's done, what's open, and who owns each task.",
        },
      },
    ],
  };
}

