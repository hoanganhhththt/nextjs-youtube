'use client'

import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LayoutLogin = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default LayoutLogin