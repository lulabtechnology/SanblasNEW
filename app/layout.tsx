import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "San Blas Wave | Your Adventure, Your Story",
  description:
    "Tours y experiencias en San Blas Panamá, con enfoque cultural Guna y logística clara desde Panamá y Colombia.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-sky-100 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
