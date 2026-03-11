import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Open_Sans } from "next/font/google"

import { ThemeProvider } from "@/components/layout/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNav } from "@/components/layout/bottom-nav"

import "./globals.css"

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-open-sans",
})

const siteName = "Biologiya va Kimyo Akademiyasi"
const siteUrl = "https://qosimov-school.enwis.uz"
const siteDescription =
  "Kelajak olimlarini amaliy ta'lim orqali rivojlantiruvchi ixtisoslashgan xususiy maktab."
const ogImage = `${siteUrl}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} - Ixtisoslashgan Maktab`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,
  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "biologiya",
    "kimyo",
    "xususiy maktab",
    "ixtisoslashgan maktab",
    "akademiya",
    "laboratoriya",
    "ta'lim",
    "o'qituvchilar",
    "sertifikat",
    "qosimov school",
    "biologiya maktabi",
    "kimyo maktabi",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "wGYArnpBT7pxJOMDG8shb9BfJoo4BCKiJYg_4pwNRGc",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} - Ixtisoslashgan Maktab`,
    description: siteDescription,
    locale: "uz_UZ",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Ixtisoslashgan Maktab`,
    description: siteDescription,
    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "education",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
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
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "evening", "dark"]}
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-0">{children}</main>
          <Footer />
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  )
}