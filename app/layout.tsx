import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

// Replace Inter with Montserrat and Poppins
import { Montserrat, Poppins } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sayle AI - V1 Teste",
  description:
    "Transforme visitantes em clientes com IA conversacional. Automatize seu atendimento e aumente suas vendas com a Sayle AI.",
  generator: "Sayle AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
