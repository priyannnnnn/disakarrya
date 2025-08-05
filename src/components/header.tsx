"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-0">
            <img 
              src="/images/logo.png" 
              alt="DISAKARYA Logo" 
              className="h-15 w-15"
            />
            <h1 className="text-2xl font-bold text-gray-900">DISAKARYA</h1>
          </Link>
        </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#4597a7] font-medium">
              Beranda
            </Link>
            <Link href="/training" className="text-gray-700 hover:text-[#4597a7] font-medium">
              Pelatihan & Sertifikasi
            </Link>
            <Link href="/jobs" className="text-gray-700 hover:text-[#4597a7] font-medium">
              Lowongan Kerja 
            </Link>
            <Link href="/marketplace" className="text-gray-700 hover:text-[#4597a7] font-medium">
              Marketplace 
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-[#4597a7] font-medium">
              Komunitas
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-[#4597a7]">
              Masuk
            </Button>
            <Button className="bg-[#4597a7] hover:bg-[#4597a7]/90 text-white">Daftar Gratis</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
