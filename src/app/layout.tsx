import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Prathamesh Satardekar | Portfolio",
  description: "Certified Project Manager (PMP)® | Engineering & Technology Projects",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white text-gray-900 dark:bg-brand dark:text-gray-100`}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
