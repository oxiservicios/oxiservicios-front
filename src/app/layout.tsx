import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oxiservicios",
  description:
    "Ofrecemos las mejores condiciones técnico económicas en materia de Sistemas Centralizados de Gases Medicinales, Accesorios de Monitoreo de Signos Vitales, Accesorios de Vacío y Oxigenoterapia, Equipos y Accesorios Médicos.",
  keywords:
    "gases medicinales, monitoreo de signos vitales, vacío y oxigenoterapia, equipos médicos, Ecuador, hospitales, medicina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
