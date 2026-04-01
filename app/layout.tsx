import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sai Saran Ravi — Data Analyst",
  description:
    "Data Analyst with 2 years of hands-on experience in SQL, Python, Power BI, and business analytics. Portfolio of data-driven projects and professional work.",
  keywords: ["Data Analyst", "SQL", "Power BI", "Python", "Business Analytics", "Sai Saran Ravi"],
  openGraph: {
    title: "Sai Saran Ravi — Data Analyst",
    description: "Data Analyst specializing in SQL, BI, and business analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
