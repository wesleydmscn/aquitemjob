import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import './globals.css'

export const metadata: Metadata = {
  title: 'Aqui tem job!',
  description: 'A forma mais fácil de conectar recrutadores e desenvolvedores',
}

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  )
}
