import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Montserrat va Open Sans fontlarini cyrillic subset bilan chaqirish
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
  description:
    "Kelajak olimlarini amaliy ta'lim orqali rivojlantirish. Biologiya va kimyo fanlariga ixtisoslashgan xususiy maktab.",
  generator: "v0.app",
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "evening", "dark"]}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
