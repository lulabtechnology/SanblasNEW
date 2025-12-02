import "./globals.css";

export const metadata = {
  title: "Entre Almas Abiertas | Acompañamiento humano y espiritual",
  description:
    "Entre Almas Abiertas es un espacio íntimo, seguro y sagrado donde el ser humano y el ser espiritual se abrazan. Acompañamiento humano y espiritual guiado por Aureya."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-space text-main font-sans">
        {children}
      </body>
    </html>
  );
}
