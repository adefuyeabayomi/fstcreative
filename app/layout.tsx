import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "../src/externals/bootstrap-grid.min.css";
import "../src/App.css";
import "./tailwind.css";

import { Providers } from "@/components/Providers";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
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
      <body className="font-sans antd-normal">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
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
