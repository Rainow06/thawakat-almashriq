import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import localFont from "next/font/local"
import { Suspense } from "react"

// استيراد الخطوط العربية المخصصة
const almarai = localFont({
  src: [
    {
      path: "../fonts/Almarai-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Almarai-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Almarai-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Almarai-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-almarai",
})

export const metadata: Metadata = {
  title: "ذواقة المشرق | نكهات حلب الأصيلة",
  description: "منتجات غذائية سورية أصيلة - سمن بلدي، عسل طبيعي، زيت زيتون، وجبنة سورية فاخرة",
  keywords: ["منتجات سورية", "سمن بلدي", "عسل طبيعي", "زيت زيتون", "جبنة سورية", "أطعمة شرقية", "حلب"],
  authors: [{ name: "ذواقة المشرق" }],
  creator: "ذواقة المشرق",
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://thawakat-almashriq.com",
    title: "ذواقة المشرق | نكهات حلب الأصيلة",
    description: "منتجات غذائية سورية أصيلة - سمن بلدي، عسل طبيعي، زيت زيتون، وجبنة سورية فاخرة",
    siteName: "ذواقة المشرق",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${almarai.variable}`}>
      <body className="min-h-screen bg-background font-almarai antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense>{children}</Suspense>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
