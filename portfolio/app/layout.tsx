import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepanshu Kesarwani — Portfolio", // Update with your name
  description:
    "Full Stack Developer portfolio showcasing projects and experience.",
  metadataBase: new URL("https://deepanshukesarwani.com"), // Update with your domain
  icons: {
    icon: "/profile.jpeg",
    shortcut: "/profile.jpeg",
    apple: "/profile.jpeg",
  },
  openGraph: {
    title: "Deepanshu Kesarwani — Portfolio",
    description:
      "Full Stack Developer portfolio showcasing projects and experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu Kesarwani — Portfolio",
    description:
      "Full Stack Developer portfolio showcasing projects and experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-white selection:bg-neutral-700`}
      >
        {children}
      </body>
    </html>
  );
}
