import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  Users,
  Briefcase,
  ShoppingBag,
  MessageCircle,
  Search,
  Play,
  Award,
  Accessibility,
  Eye,
  Ear,
  Brain,
  Heart,
  UserCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const disabilityCategories = [
    { icon: Ear, name: "Sensorik (Tuli & Netra)", color: "bg-blue-100 text-blue-700" },
    { icon: Accessibility, name: "Fisik", color: "bg-green-100 text-green-700" },
    { icon: Brain, name: "Intelektual", color: "bg-purple-100 text-purple-700" },
    { icon: Heart, name: "Mental/Psikososial", color: "bg-pink-100 text-pink-700" },
    { icon: UserCheck, name: "Ganda", color: "bg-orange-100 text-orange-700" },
  ]

  const popularTraining = [
    "Digital Marketing",
    "Content Creation",
    "Office Skills",
    "Customer Service",
    "Desain Grafis",
    "Wirausaha Online",
  ]

  const stats = [
    { number: "5", label: "Kategori Disabilitas", icon: Users },
    { number: "150+", label: "Program Pelatihan", icon: BookOpen },
    { number: "500+", label: "Lowongan Inklusif", icon: Briefcase },
    { number: "1000+", label: "Produk UMKM", icon: ShoppingBag },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#4597a7] text-white py-20 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  Digital Inklusif untuk Karya & Karier Disabilitas
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Cara Termudah & Inklusif untuk
                  <span className="text-white/90"> Berkembang dan Bekerja</span>
                  <br />
                  Sesuai Potensi Anda
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  Platform digital yang memberdayakan penyandang disabilitas melalui pelatihan keterampilan, sertifikasi
                  kompetensi, akses pekerjaan, dan promosi karya UMKM.
                </p>
              </div>

              {/* Smart Search */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-lg mb-4">🔍 Pencarian Cerdas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Kategori Disabilitas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sensorik">Sensorik (Tuli & Netra)</SelectItem>
                      <SelectItem value="fisik">Fisik</SelectItem>
                      <SelectItem value="intelektual">Intelektual</SelectItem>
                      <SelectItem value="mental">Mental/Psikososial</SelectItem>
                      <SelectItem value="ganda">Ganda</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Lokasi" className="bg-white text-gray-900" />
                  <Input placeholder="Minat/Keyword" className="bg-white text-gray-900" />
                </div>
                <Button className="w-full mt-4 bg-white text-[#4597a7] hover:bg-gray-100">
                  <Search className="h-4 w-4 mr-2" />
                  Cari Sekarang
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/training">
                  <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100">
                    <Play className="h-5 w-5 mr-2" />
                    Mulai Pelatihan
                  </Button>
                </Link>
                <Link href="/jobs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#4597a7] bg-transparent"
                  >
                    <Briefcase className="h-5 w-5 mr-2" />
                    Cari Kerja
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side with image */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/disabilitas-tuli.jpg?height=400&width=600&text=Penyandang+disabilitas+belajar+bersama+dalam+pelatihan+daring"
                  alt="Penyandang disabilitas belajar bersama dalam pelatihan daring"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Pembelajaran Digital Inklusif</h3>
                  <p className="text-sm opacity-90">Berdiskusi dalam ruang kerja inklusif & kolaboratif</p>
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
                <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-[#4597a7]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disability Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#4597a7]/10 text-[#4597a7] mb-4">5 KATEGORI DISABILITAS</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dirancang untuk <span className="text-[#4597a7]">Semua Jenis</span> Disabilitas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sistem kami beradaptasi dengan kebutuhan khusus setiap kategori disabilitas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {disabilityCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Training */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pelatihan <span className="text-[#4597a7]">Populer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Akses cepat ke program pelatihan yang paling diminati</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularTraining.map((training, index) => (
              <Link key={index} href="/training">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="h-6 w-6 text-[#4597a7]" />
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm">{training}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fitur <span className="text-[#4597a7]">Utama</span> DISAKARYA
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform lengkap untuk pemberdayaan penyandang disabilitas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/training">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4597a7] transition-colors">
                    <BookOpen className="h-8 w-8 text-[#4597a7] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pelatihan & Sertifikasi</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Platform pelatihan adaptif untuk 5 kategori disabilitas dengan sertifikasi BNSP
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/jobs">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4597a7] transition-colors">
                    <Briefcase className="h-8 w-8 text-[#4597a7] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lowongan Kerja Inklusif</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Akses pekerjaan layak dengan perusahaan yang ramah disabilitas
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/marketplace">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4597a7] transition-colors">
                    <ShoppingBag className="h-8 w-8 text-[#4597a7] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Marketplace Disabilitas</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jual beli produk dan jasa karya penyandang disabilitas
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/community">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4597a7] transition-colors">
                    <MessageCircle className="h-8 w-8 text-[#4597a7] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Komunitas</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bergabung dengan komunitas inklusif untuk saling mendukung
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fitur <span className="text-[#4597a7]">Aksesibilitas</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Teknologi adaptif untuk kenyamanan semua pengguna</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mode High Contrast</h3>
              <p className="text-gray-600">Kontras tinggi dan text-to-speech untuk kemudahan akses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Accessibility className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Navigasi Keyboard</h3>
              <p className="text-gray-600">Dapat digunakan tanpa mouse dengan navigasi keyboard</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Font Adjustable</h3>
              <p className="text-gray-600">Ukuran font dapat disesuaikan dengan kebutuhan pengguna</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4597a7] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Memulai Perjalanan Inklusif Anda?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan penyandang disabilitas lainnya yang telah mengembangkan potensi mereka melalui
            DISAKARYA
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/training">
              <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100">
                <Play className="h-5 w-5 mr-2" />
                Mulai Belajar Gratis
              </Button>
            </Link>
            <Link href="/jobs">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#4597a7] bg-transparent"
              >
                <Briefcase className="h-5 w-5 mr-2" />
                Cari Pekerjaan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
