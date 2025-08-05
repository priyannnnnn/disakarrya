import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin, ArrowRight, CheckCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function ModeSelectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/training" className="text-[#4597a7] hover:underline">
              Pelatihan & Sertifikasi
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Pilih Mode Pelatihan</span>
          </nav>
        </div>
      </section>

      {/* Step Indicator */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#4597a7] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-[#4597a7] font-medium">Pilih Mode</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-gray-500">Pilih Course</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-gray-500">Detail & Mentor</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <span className="ml-2 text-gray-500">Pendaftaran</span>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 bg-[#4597a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-4">
            🟪 STEP 1: PILIH MODE PELATIHAN
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Pilih Mode Pelatihan yang <span className="text-white/90">Sesuai untuk Anda</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Kami menyediakan dua pilihan mode pelatihan yang dapat disesuaikan dengan kebutuhan dan preferensi Anda
          </p>
        </div>
      </section>

      {/* Mode Selection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Online Training */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#4597a7]/30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-100 text-green-700">🟢 Tersedia</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4597a7] transition-colors">
                    <Globe className="h-12 w-12 text-[#4597a7] group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pelatihan Online</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Akses pembelajaran dari mana saja dengan materi yang dapat disesuaikan dengan kebutuhan
                    aksesibilitas Anda
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">✨ Fitur Unggulan:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        Akses 24/7 ke semua materi pembelajaran
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        Subtitle dan audio deskripsi lengkap
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        Screen reader support dan navigasi keyboard
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        Jadwal belajar fleksibel sesuai kecepatan Anda
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        Forum diskusi dan peer support online
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-[#4597a7]">150+</div>
                        <div className="text-xs text-gray-600">Course Tersedia</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#4597a7]">24/7</div>
                        <div className="text-xs text-gray-600">Akses Materi</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#4597a7]">95%</div>
                        <div className="text-xs text-gray-600">Tingkat Kepuasan</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/training/online-courses">
                  <Button className="w-full bg-[#4597a7] hover:bg-[#4597a7]/90 text-lg py-3">
                    <Globe className="h-5 w-5 mr-2" />
                    Lihat Course Online
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Offline Training */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#4597a7]/30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-orange-100 text-orange-700">🟠 Terbatas</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4597a7] transition-colors">
                    <MapPin className="h-12 w-12 text-[#4597a7] group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pelatihan Offline</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Pembelajaran tatap muka di lokasi yang telah disiapkan dengan fasilitas aksesibel dan dukungan
                    langsung
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">🏢 Lokasi Tersedia:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        <strong>Yogyakarta:</strong> Jl. Kaliurang KM 9, Balai Latihan Kerja
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        <strong>Jakarta:</strong> Jl. Sudirman No. 88, Gedung Pelatihan Tuna Netra
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        <strong>Bandung:</strong> Jl. Asia Afrika No. 21, Inklusi Center
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        <strong>Surabaya:</strong> Jl. Pemuda No. 15, Pusat Pelatihan Inklusif
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">🎯 Keunggulan:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        Interaksi langsung dengan mentor berpengalaman
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        Fasilitas aksesibel lengkap (ramp, lift, dll)
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        Networking langsung dengan peserta lain
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2 flex-shrink-0" />
                        Praktik hands-on dengan peralatan profesional
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-[#4597a7]">4</div>
                        <div className="text-xs text-gray-600">Kota Tersedia</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#4597a7]">15</div>
                        <div className="text-xs text-gray-600">Peserta/Kelas</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#4597a7]">98%</div>
                        <div className="text-xs text-gray-600">Tingkat Kelulusan</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/training/offline-locations">
                  <Button className="w-full bg-[#4597a7] hover:bg-[#4597a7]/90 text-lg py-3">
                    <MapPin className="h-5 w-5 mr-2" />
                    Lihat Lokasi Pelatihan
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/training">
              <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Kembali ke Halaman Utama
              </Button>
            </Link>
            <div className="text-sm text-gray-500">Langkah 1 dari 4 - Pilih Mode Pelatihan</div>
          </div>
        </div>
      </section>
    </div>
  )
}
