import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Briefcase,
  MapPin,
  Clock,
  Building2,
  Search,
  Filter,
  CheckCircle,
  Users,
  Heart,
  Accessibility,
  MessageCircle,
  Award,
  HandHeart,
} from "lucide-react"
import Image from "next/image"

export default function JobsPage() {
  const accessibilityLabels = [
    { icon: Accessibility, label: "Tempat kerja ramah kursi roda", color: "bg-blue-100 text-blue-700" },
    { icon: Clock, label: "Jam kerja fleksibel", color: "bg-green-100 text-green-700" },
    { icon: MessageCircle, label: "Dukungan juru bahasa isyarat", color: "bg-purple-100 text-purple-700" },
    { icon: Heart, label: "Mental health-friendly workplace", color: "bg-pink-100 text-pink-700" },
  ]

  const jobListings = [
    {
      id: 1,
      title: "Customer Service Representative",
      company: "PT Inklusi Digital",
      location: "Jakarta",
      type: "Full-time",
      salary: "Rp 4.500.000 - 6.000.000",
      accessibility: ["Jam kerja fleksibel", "Mental health-friendly"],
      description:
        "Mencari customer service yang ramah dan komunikatif untuk melayani pelanggan dengan berbagai kebutuhan aksesibilitas.",
      logo: "/images/costumerservice.png?height=60&width=60&text=Logo",
    },
    {
      id: 2,
      title: "Graphic Designer",
      company: "Creative Inclusive Studio",
      location: "Bandung",
      type: "Remote",
      salary: "Rp 5.000.000 - 7.500.000",
      accessibility: ["Tempat kerja ramah kursi roda", "Jam kerja fleksibel"],
      description:
        "Desainer grafis untuk membuat konten visual yang inklusif dan accessible untuk berbagai platform digital.",
      logo: "/images/graphic.png??height=60&width=60&text=Logo",
    },
    {
      id: 3,
      title: "Data Entry Specialist",
      company: "Accessible Tech Solutions",
      location: "Surabaya",
      type: "Part-time",
      salary: "Rp 3.000.000 - 4.000.000",
      accessibility: ["Dukungan juru bahasa isyarat", "Jam kerja fleksibel"],
      description: "Spesialis entry data dengan dukungan teknologi assistive dan lingkungan kerja yang mendukung.",
      logo: "/images/data.png?height=60&width=60&text=Logo",
    },
  ]

  const partnerCompanies = [
    "PT Bank Mandiri (Persero) Tbk",
    "PT Telkom Indonesia",
    "PT Unilever Indonesia",
    "PT Astra International",
    "PT Gojek Indonesia",
    "PT Tokopedia",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#4597a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                💼 FITUR 2: LOWONGAN KERJA INKLUSIF
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Halaman Lowongan Kerja Inklusif untuk
                <span className="text-white/90"> 5 Kategori Disabilitas</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Akses penyandang disabilitas terhadap pekerjaan yang layak melalui platform rekrutmen berbasis inklusi
                dengan perusahaan yang telah mengikuti audit & pelatihan HR inklusif.
              </p>

              {/* Job Search */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-lg mb-4">🔍 Cari Pekerjaan Inklusif</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Posisi / Keyword" className="bg-white text-gray-900" />
                  <Select>
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Kategori Disabilitas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sensorik">Sensorik</SelectItem>
                      <SelectItem value="fisik">Fisik</SelectItem>
                      <SelectItem value="intelektual">Intelektual</SelectItem>
                      <SelectItem value="mental">Mental</SelectItem>
                      <SelectItem value="ganda">Ganda</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Lokasi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jakarta">Jakarta</SelectItem>
                      <SelectItem value="bandung">Bandung</SelectItem>
                      <SelectItem value="surabaya">Surabaya</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-white text-[#4597a7] hover:bg-gray-100">
                    <Search className="h-4 w-4 mr-2" />
                    Cari
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Lihat Semua Lowongan
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#4597a7] bg-transparent"
                >
                  <HandHeart className="h-5 w-5 mr-2" />
                  Bantu Lamar
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pencarian-kerja.png??height=400&width=600&text=Inclusive+Workplace"
                alt="Tempat kerja inklusif dengan penyandang disabilitas"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Labels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Label <span className="text-[#4597a7]">Aksesibilitas</span> Kerja
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap lowongan dilengkapi dengan label aksesibilitas untuk memudahkan pencarian pekerjaan yang sesuai
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityLabels.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Lowongan <span className="text-[#4597a7]">Terbaru</span>
            </h2>
            <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          <div className="space-y-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                    <div className="lg:col-span-3">
                      <div className="flex items-start space-x-4">
                        <Image
                          src={job.logo || "/placeholder.svg"}
                          alt={`${job.company} logo`}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-[#4597a7] font-medium mb-2">{job.company}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <Building2 className="h-4 w-4 mr-1" />
                              {job.salary}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.accessibility.map((label, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                {label}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button className="bg-[#4597a7] hover:bg-[#4597a7]/90">Lamar Sekarang</Button>
                      <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
                        <HandHeart className="h-4 w-4 mr-2" />
                        Bantu Lamar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perusahaan <span className="text-[#4597a7]">Mitra</span> Inklusif
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perusahaan yang telah mengikuti audit & pelatihan HR inklusif dan berkomitmen pada kesetaraan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCompanies.map((company, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-[#4597a7]" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{company}</h3>
                  <Badge className="mt-2 bg-green-100 text-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    HR Inklusif Certified
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Manfaat <span className="text-[#4597a7]">Platform</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Akses Adil bagi Penyandang Disabilitas</h3>
              <p className="text-gray-600">
                Memberikan kesempatan yang sama untuk mendapatkan pekerjaan yang layak dan sesuai dengan kemampuan
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tanggung Jawab Sosial Perusahaan</h3>
              <p className="text-gray-600">
                Membantu perusahaan menjalankan tanggung jawab sosial dan mencapai target ESG (Environmental, Social,
                and Governance)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4597a7] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Memulai Karier Impian Anda?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Temukan pekerjaan yang sesuai dengan kemampuan dan kebutuhan aksesibilitas Anda di perusahaan-perusahaan
            terpercaya
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100">
              <Briefcase className="h-5 w-5 mr-2" />
              Cari Pekerjaan Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4597a7] bg-transparent"
            >
              <HandHeart className="h-5 w-5 mr-2" />
              Butuh Bantuan Melamar?
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
