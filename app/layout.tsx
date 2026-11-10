import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "./tailwind.css";

import { Providers } from "@/components/Providers";
import { AppShell } from "@/components/AppShell";
import { getSiteUrl } from "@/lib/siteUrl";

function metadataBaseUrl(): URL {
  try {
    return new URL(getSiteUrl());
  } catch {
    return new URL("https://fiveandsixtechnologies.com");
  }
}

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: {
    default: "Five and Six Technologies",
    template: "%s | Five and Six Technologies",
  },
  description:
    "Art & Design - Systems & Structure - Brilliance & Collaboration",
  icons: {
    icon: "/logofst.svg",
  },
  openGraph: {
    title: "Five and Six Technologies",
    description:
      "Art & Design - Systems & Structure - Brilliance & Collaboration",
    images: "/og-image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Five and Six Technologies",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap"
        />
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
        <Script
          src="https://js.paystack.co/v2/inline.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
