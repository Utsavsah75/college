import "@/app/globals.css";
import { Header, Footer } from "@/components";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "Bayside Nursing College",
  description: "Providing high-quality vocational training in aged care, disability support, and community services.",
  icons: {
    icon: "/favicon.png"
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen overflow-x-hidden font-nunito">
        <Header />
        <main className="flex-grow relative">{children}</main>
        <Footer />
        <button
          className="fixed md:top-2/3 top-80 right-0 -translate-y-1/2 translate-x-8 -rotate-90 bg-primary-pink text-white py-3 px-5 rounded-t-lg shadow-lg hover:brightness-90 transition-all z-50 origin-center"
        >
          <Link href="/feedback">Feedback</Link>
        </button>
      </body>
    </html>
  );
}
