
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinusha Madushan | Software Developer Portfolio",

  description:
    "Explore the personal portfolio of Dinusha Madushan, an HNDIT graduate interested in software development, web technologies and digital experiences.",

  keywords: [
    "Dinusha Madushan",
    "Software Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "HNDIT",
    "SLIATE",
    "Personal Portfolio",
  ],

  authors: [
    {
      name: "Dinusha Madushan",
    },
  ],

  openGraph: {
    title: "Dinusha Madushan | Portfolio",
    description:
      "Explore my skills, projects, educational background and development journey.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
