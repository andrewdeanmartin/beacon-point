function env(name: string, fallback: string) {
  return (process.env[name] ?? fallback).toString();
}

export const BP = {
  phoneE164: env("NEXT_PUBLIC_PHONE", "+19413855872"),
  phoneDisplay: env("NEXT_PUBLIC_PHONE_DISPLAY", "(941) 385-5872"),
  email: env("NEXT_PUBLIC_EMAIL", "megan@beaconpointcare.com"),
  city: "Sarasota",
  region: "FL",
  postalCode: "34240",
  siteUrl: env("NEXT_PUBLIC_SITE_URL", "https://beaconpointcare.com"),
  businessName: "Beacon Point",
  tagline: "The calm in the storm.",
} as const;

