import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CFA & Associates | Chartered Accountants in Ghana",
  description: "Professional audit, tax, bookkeeping and business advisory services in Ghana. Our professional roots date back to 1967.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
