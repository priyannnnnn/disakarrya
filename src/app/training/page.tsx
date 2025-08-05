import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Users, Play, CheckCircle, ArrowRight, Globe, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TrainingLandingPage() {
  const benefits = [
    {
      title: "Skill Digital Terdepan",
      description: "Kuasai teknologi terbaru yang dibutuhkan industri",
      icon: BookOpen,
    },
    {
      title: "Peningkatan Daya Saing Kerja",
      description: "Tingkatkan kompetitivitas di pasar kerja dengan sertifikasi resmi",
      icon: Award,
    },
    {
      title: "Pembelajaran Adaptif",
      description: "Metode pembelajaran yang disesuaikan dengan kebutuhan disabilitas",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#4597a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                🧩 PELATIHAN & SERTIFIKASI DISAKARYA
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Program Pelatihan & Sertifikasi
                <span className="text-white/90"> Ramah Disabilitas</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Dapatkan keterampilan digital dan sertifikasi resmi melalui program pelatihan yang dirancang khusus
                untuk penyandang disabilitas dengan metode pembelajaran yang adaptif dan inklusif.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link href="/training/mode-selection">
                  <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100 text-lg px-8 py-4">
                    <Play className="h-6 w-6 mr-3" />
                    Pilih Jenis Pelatihan
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/3.png??height=400&width=600&text=Training+Program"
                alt="Program pelatihan inklusif untuk penyandang disabilitas"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Pembelajaran Inklusif & Adaptif</h3>
                <p className="text-sm opacity-90">Dengan dukungan mentor berpengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Training Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Apa itu Program <span className="text-[#4597a7]">Pelatihan & Sertifikasi?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Program komprehensif yang menggabungkan pembelajaran keterampilan digital dengan sertifikasi resmi yang
              diakui industri. Dirancang khusus untuk penyandang disabilitas dengan pendekatan pembelajaran yang adaptif
              dan inklusif.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4597a7]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#4597a7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Pembelajaran Terstruktur</h4>
                    <p className="text-gray-600">
                      Kurikulum yang disusun sistematis dari dasar hingga mahir dengan modul yang mudah dipahami
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4597a7]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#4597a7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Sertifikasi Resmi</h4>
                    <p className="text-gray-600">
                      Dapatkan sertifikat yang diakui BNSP dan industri untuk meningkatkan kredibilitas profesional
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#4597a7]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#4597a7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Mentor Berpengalaman</h4>
                    <p className="text-gray-600">
                      Dibimbing oleh instruktur profesional dengan pengalaman mendalam di bidangnya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-[#4597A7] p-4 rounded-2xl">
            <Image
              src="/images/1.png?height=300&width=500&text=Structured+Learning"
              alt="Pembelajaran terstruktur dengan mentor"
              width={500}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Manfaat bagi <span className="text-[#4597a7]">Penyandang Disabilitas</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Program yang dirancang khusus untuk memberikan manfaat maksimal bagi pengembangan karier dan kemandirian
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-[#4597a7]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modes Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pilihan <span className="text-[#4597a7]">Mode Pelatihan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fleksibilitas belajar sesuai dengan kebutuhan dan preferensi Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#4597a7]/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-10 w-10 text-[#4597a7]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🟢 Pelatihan Online</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Belajar dari mana saja dengan akses 24/7 ke materi pembelajaran yang dapat disesuaikan dengan
                  kebutuhan aksesibilitas Anda
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2" />
                    Akses seumur hidup ke materi
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2" />
                    Subtitle dan audio deskripsi
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2" />
                    Jadwal fleksibel
                  </li>
                </ul>
                <Button className="w-full bg-[#4597a7] hover:bg-[#4597a7]/90">Lihat Course Online</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#4597a7]/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-[#4597a7]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🟠 Pelatihan Offline</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pembelajaran tatap muka di lokasi yang telah disiapkan dengan fasilitas aksesibel dan dukungan
                  langsung dari mentor
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2" />
                    Interaksi langsung dengan mentor
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2" />
                    Fasilitas aksesibel lengkap
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#4597a7] mr-2" />
                    Networking dengan peserta lain
                  </li>
                </ul>
                <Button className="w-full bg-[#4597a7] hover:bg-[#4597a7]/90">Lihat Lokasi Pelatihan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4597a7] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Memulai Perjalanan Pembelajaran Anda?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Pilih mode pelatihan yang sesuai dengan kebutuhan dan preferensi Anda. Tim kami siap membantu Anda mencapai
            tujuan karier impian.
          </p>
          <Link href="/training/mode-selection">
            <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100 text-lg px-8 py-4">
              <Play className="h-6 w-6 mr-3" />
              Pilih Jenis Pelatihan Sekarang
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
