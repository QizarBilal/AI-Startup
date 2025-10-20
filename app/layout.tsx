import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NovaMind AI - Advanced Neural Network Solutions",
  description:
    "Empower your business with next-gen AI intelligence. NovaMind AI helps teams automate decisions and scale with real-time insights.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "AI Platform",
    "Business Intelligence",
  ],
  authors: [{ name: "NovaMind AI" }],
  openGraph: {
    title: "NovaMind AI - Advanced Neural Network Solutions",
    description:
      "Empower your business with next-gen AI intelligence. Transform your data into actionable insights.",
    url: "https://novamind-ai.com",
    siteName: "NovaMind AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMind AI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaMind AI - Advanced Neural Network Solutions",
    description: "Empower your business with next-gen AI intelligence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
