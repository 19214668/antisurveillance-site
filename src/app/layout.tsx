import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anti-Surveillance App",
  description:
    "Take back your privacy. Detect hidden cameras, secure your data, and protect your space.",
  keywords: ["privacy", "anti-surveillance", "hidden cameras", "security app"],
  authors: [{ name: "Luke Passey" }],
  openGraph: {
    title: "Anti-Surveillance App",
    description:
      "Protect your privacy with Wi-Fi, Bluetooth, and IR scanning.",
    url: "https://antisurveillancesite.vercel.app",
    siteName: "Anti-Surveillance",
    images: [
      {
        url: "/og-image.png", // add your own preview image later
        width: 1200,
        height: 630,
        alt: "Anti-Surveillance App Preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti-Surveillance App",
    description:
      "Take back your privacy. Detect hidden cameras, secure your data, and protect your space.",
    images: ["/og-image.png"],
    creator: "@yourhandle", // optional, replace if you have Twitter
  },
  metadataBase: new URL("https://antisurveillancesite.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
