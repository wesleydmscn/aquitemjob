import "./globals.css";

import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubikFont = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqui tem job!",
  description: "A solução mais simples para recrutamento de desenvolvedores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${rubikFont.className} antialiased`}>{children}</body>
    </html>
  );
}
