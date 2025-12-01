import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "San Blas Wave | Tours, Expediciones y Cultura Guna",
  description:
    "Experiencias auténticas en San Blas (Guna Yala): tours, expediciones Panamá ↔ Colombia y hospedajes frente al mar con una agencia local.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#FFF6E9] text-slate-900 antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
