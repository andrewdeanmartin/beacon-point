function env(name: string, fallback: string) {
  return (process.env[name] ?? fallback).toString();
}

export const BP = {
  phoneE164: env("NEXT_PUBLIC_PHONE", "+19415550142"),
  phoneDisplay: env("NEXT_PUBLIC_PHONE_DISPLAY", "(941) 555-0142"),
  email: env("NEXT_PUBLIC_EMAIL", "megan@beaconpointcare.com"),
  city: "Sarasota",
  region: "FL",
  postalCode: "34240",
  siteUrl: env("NEXT_PUBLIC_SITE_URL", "https://beaconpointcare.com"),
  businessName: "Beacon Point",
  tagline: "Your fixed point when everything is moving.",
} as const;

