import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic"],
  weight: ["200", "400", "500", "600", "700"],
});
const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["cyrillic"],
  weight: ["400", "500", "700"],
});
const benPioneer = localFont({
  src: "./fonts/pioneer.woff2",
  variable: "--font-ben-pioneer",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Almats auto",
  description: "Сайт для продажи автомобилей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${benPioneer.variable} ${montserrat.variable} ${montserratAlternates.variable} antialiased pt-5`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
