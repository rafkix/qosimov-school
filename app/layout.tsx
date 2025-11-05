import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"
import { BottomNav } from "@/components/layout/bottom-nav"

// Fontlar
const montserrat = Montserrat({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Biologiya va Kimyo Akademiyasi - Ixtisoslashgan Maktab",
  description: "Kelajak olimlarini amaliy ta'lim orqali rivojlantirish.",
  generator: "rafkix.uz",
  keywords: "biologiya, kimyo, xususiy maktab, laboratoriya, sertifikat, o'qituvchilar, akademiya",
  authors: [{ name: "Biologiya va Kimyo Akademiyasi" }],
  openGraph: {
    title: "Biologiya va Kimyo Akademiyasi",
    description: "Kelajak olimlarini amaliy ta'lim orqali rivojlantirish",
    type: "website",
    locale: "uz_UZ",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "evening", "dark"]}
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-0 bg-background text-foreground">
            {children}
          </main>
          <Footer />
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  )
}
