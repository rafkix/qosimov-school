import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNav } from "@/components/layout/bottom-nav"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["cyrillic"], display: "swap", variable: "--font-montserrat" })
const openSans = Open_Sans({ subsets: ["cyrillic"], display: "swap", variable: "--font-open-sans" })

export const metadata: Metadata = {
  title: "Biologiya va Kimyo Akademiyasi - Ixtisoslashgan Maktab",
  description: "Kelajak olimlarini amaliy ta'lim orqali rivojlantirish. Biologiya va kimyo fanlariga ixtisoslashgan xususiy maktab.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header /> {/* faqat sm+ */}
          <main className="pt-16 pb-16 sm:pb-0">{children}</main>
          <Footer />
          <BottomNav /> {/* faqat mobile (sm-) */}
        </ThemeProvider>
      </body>
    </html>
  )
}
