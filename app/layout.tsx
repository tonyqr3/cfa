import type { Metadata } from "next";
import { Roboto, Raleway } from "next/font/google";
import "./globals.css";

const sans = Roboto({ variable: "--font-sans", subsets: ["latin"] });
const heading = Raleway({ variable: "--font-heading", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CFA & Associates | Chartered Accountants in Ghana",
  description: "Professional audit, tax, bookkeeping and business advisory services in Ghana since 1967.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${heading.variable}`}>{children}</body></html>;
}
