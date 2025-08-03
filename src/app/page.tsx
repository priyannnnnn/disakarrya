import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, MessageCircle, Award, Play, Accessibility, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const stats = [
    { number: "1200+", label: "Peserta Aktif", icon: Users },
    { number: "150+", label: "Kursus Tersedia", icon: BookOpen },
    { number: "85%", label: "Tingkat Kelulusan", icon: Award },
    { number: "95%", label: "Kepuasan Peserta", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4597A7] to-[#5ba3b3] text-white py-20 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  Platform Sertifikasi Digital Inklusif
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Pelatihan Sertifikasi
                  <br />
                  <span className="text-[#B8E6E6]">Kompetensi Inklusif</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Sistem Sertifikasi dengan metode terstruktur dan inklusif yang disesuaikan dengan minat, kategori disabilitas, dan
                  tujuan karier masing-masing peserta.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/courses">
                  <Button size="lg" className="bg-white text-[#4597A7] hover:bg-gray-100">
                    <Play className="h-5 w-5 mr-2" />
                    Mulai Belajar
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#4597A7] bg-transparent"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    Jelajahi Kursus
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side with features and image */}
            <div className="space-y-6">
              {/* Feature Cards */}
              {/* <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Accessibility className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Pembelajaran Inklusif</h3>
                      <p className="text-sm text-blue-100">Disesuaikan dengan kebutuhan disabilitas</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Sertifikasi Resmi</h3>
                      <p className="text-sm text-blue-100">Diakui industri dan BNSP</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Mentor Berpengalaman</h3>
                      <p className="text-sm text-blue-100">Instruktur ahli dengan CV lengkap</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                   src="/images/disabilitas-tuli.jpg"
                  alt="Penyandang disabilitas tuli belajar menggunakan bahasa isyarat dengan laptop"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Pembelajaran Digital Inklusif</h3>
                  <p className="text-sm opacity-90">Bahasa isyarat & teknologi digital untuk semua</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-[#4597A7]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[#4597A7]/10 text-[#4597A7] mb-4">TENTANG KAMI</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Platform Pelatihan <span className="text-[#4597A7]">Terpercaya</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              DISAKARYA adalah platform pelatihan digital inklusif yang dirancang khusus untuk penyandang disabilitas
              dengan sistem pembelajaran terstruktur dan mentor berpengalaman.
            </p>
          </div>
          <div className="text-center">
            <Link href="/about">
              <Button className="bg-[#4597A7] hover:bg-[#4597A7]/90">
                Pelajari Lebih Lanjut
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4597A7] to-[#5ba3b3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Memulai Perjalanan Pembelajaran Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan penyandang disabilitas lainnya yang telah mengembangkan karier mereka melalui
            DISAKARYA
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="bg-white text-[#4597A7] hover:bg-gray-100">
                <Play className="h-5 w-5 mr-2" />
                Mulai Belajar Gratis
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#4597A7] bg-transparent"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
