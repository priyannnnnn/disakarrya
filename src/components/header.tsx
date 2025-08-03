"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accessibility } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Accessibility className="h-8 w-8 text-[#4597A7]" />
              <h1 className="text-2xl font-bold text-gray-900">DISAKARYA</h1>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#4597A7] font-medium">
              Beranda
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#4597A7] font-medium">
              Tentang
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-[#4597A7] font-medium">
              Kursus
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#4597A7] font-medium">
              Layanan
            </Link>
            <Link href="/instructors" className="text-gray-700 hover:text-[#4597A7] font-medium">
              Instruktur
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#4597A7] font-medium">
              Kontak
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-[#4597A7]">
              Masuk
            </Button>
            <Button className="bg-[#4597A7] hover:bg-[#4597A7]/90 text-white">Daftar Gratis</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
