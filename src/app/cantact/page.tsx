import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Award, ChevronRight, Users, BookOpen, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#4597A7] to-[#5ba3b3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-6">TENTANG DISAKARYA</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Membangun Masa Depan <span className="text-[#B8E6E6]">Inklusif</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Kami berkomitmen untuk menciptakan ekosistem pembelajaran digital yang dapat diakses oleh semua orang,
            termasuk penyandang disabilitas, dengan kualitas terbaik dan pendekatan yang personal.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute top-0 left-0 w-20 h-20 bg-[#4597A7]/10 rounded-full"></div>
              <div className="relative bg-gradient-to-br from-[#4597A7]/5 to-[#5ba3b3]/5 rounded-2xl p-8">
                <div className="text-6xl font-bold text-[#4597A7] mb-4">5+</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Tahun Pengalaman</div>
                <div className="text-gray-600">Melayani komunitas disabilitas Indonesia dengan komitmen penuh</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Kami Menyediakan Pelatihan<span className="text-[#4597A7]"> Berkualitas</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  DISAKARYA adalah platform pelatihan digital inklusif yang dirancang khusus untuk penyandang
                  disabilitas. Kami menyediakan sistem pembelajaran terstruktur yang disesuaikan dengan minat, kategori
                  disabilitas, dan tujuan karier masing-masing peserta.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4597A7]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#4597A7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pembelajaran Personal & Terarah</h4>
                    <p className="text-gray-600">
                      Disesuaikan dengan minat dan kebutuhan aksesibilitas individual setiap peserta
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4597A7]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-[#4597A7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mentor Terpercaya & Berpengalaman</h4>
                    <p className="text-gray-600">
                      Instruktur profesional dengan CV lengkap, portofolio nyata, dan pengalaman dalam pendidikan
                      inklusif
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4597A7]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-5 w-5 text-[#4597A7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sertifikasi Resmi & Diakui Industri</h4>
                    <p className="text-gray-600">
                      Sertifikat yang diakui BNSP dan industri, siap digunakan untuk melamar kerja
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visi & <span className="text-[#4597A7]">Misi</span> Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-[#4597A7]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi platform pelatihan digital inklusif terdepan di Indonesia yang memberdayakan penyandang
                disabilitas untuk mencapai potensi penuh mereka dalam dunia kerja dan kewirausahaan.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-[#4597A7]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menyediakan akses pendidikan digital berkualitas tinggi yang inklusif, dengan kurikulum yang disesuaikan
                kebutuhan industri dan didukung oleh mentor berpengalaman untuk menciptakan peluang karier yang setara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai <span className="text-[#4597A7]">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap program dan layanan yang kami berikan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[#4597A7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inklusivitas</h3>
              <p className="text-gray-600">
                Memastikan setiap program dapat diakses dan dipahami oleh semua peserta dengan berbagai jenis
                disabilitas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#4597A7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kualitas</h3>
              <p className="text-gray-600">
                Menyediakan materi pembelajaran dan instruktur terbaik dengan standar industri yang tinggi
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#4597A7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pemberdayaan</h3>
              <p className="text-gray-600">
                Memberikan keterampilan dan kepercayaan diri untuk mencapai kemandirian ekonomi dan karier yang sukses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4597A7] to-[#5ba3b3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Bergabunglah dengan Komunitas Kami</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Jadilah bagian dari gerakan inklusivitas digital dan kembangkan potensi Anda bersama ribuan peserta lainnya
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="bg-white text-[#4597A7] hover:bg-gray-100">
                <BookOpen className="h-5 w-5 mr-2" />
                Lihat Kursus
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#4597A7] bg-transparent"
              >
                Hubungi Kami
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
