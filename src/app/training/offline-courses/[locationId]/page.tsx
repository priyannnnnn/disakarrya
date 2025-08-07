import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Clock, ChevronLeft, Search, Filter, CheckCircle, Phone, Mail, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Updated interface for Next.js 15
interface PageProps {
  params: Promise<{ locationId: string }>
}

export default async function OfflineCoursesPage({ params }: PageProps) {
  // Await the params promise in Next.js 15
  const resolvedParams = await params
  
  // Mock data based on locationId
  const locationData = {
    "1": {
      city: "Yogyakarta",
      name: "Balai Latihan Kerja Yogyakarta",
      address: "Jl. Kaliurang KM 9, Sleman, Yogyakarta 55581",
      coordinator: "Ibu Sari Wulandari, M.Pd",
      coordinatorPhone: "+62 812 3456 7890",
    },
    "2": {
      city: "Jakarta",
      name: "Gedung Pelatihan Tuna Netra Jakarta",
      address: "Jl. Sudirman No. 88, Jakarta Pusat 10220",
      coordinator: "Bapak Ahmad Fauzi, S.Kom",
      coordinatorPhone: "+62 813 4567 8901",
    },
    "3": {
      city: "Bandung",
      name: "Inklusi Center Bandung",
      address: "Jl. Asia Afrika No. 21, Bandung 40111",
      coordinator: "Ibu Maya Indira, S.Sos",
      coordinatorPhone: "+62 814 5678 9012",
    },
    "4": {
      city: "Surabaya",
      name: "Pusat Pelatihan Inklusif Surabaya",
      address: "Jl. Pemuda No. 15, Surabaya 60271",
      coordinator: "Bapak Eko Prasetyo, M.M",
      coordinatorPhone: "+62 815 6789 0123",
    },
  }

  const location = locationData[resolvedParams.locationId as keyof typeof locationData]

  const offlineCourses = [
    // 🧠 Disabilitas Intelektual
    {
      id: 1,
      title: "Dasar Microsoft Office (Word, Excel, PowerPoint)",
      category: "Intelektual",
      level: "Dasar",
      duration: "8 minggu",
      schedule: "Senin-Rabu, 09:00-12:00",
      quota: "12/15",
      price: "Rp 650.000",
      mentor: "Ahmad Rizki Pratama, S.Kom.",
      image: "/images/ms.png?height=200&width=300&text=MS+Office+Offline",
      startDate: "15 Februari 2025",
      endDate: "10 April 2025",
      targetDisability: "🧠 Disabilitas Intelektual",
      learningGoal: "Menguasai alat kerja dasar di dunia perkantoran",
      output: "Bisa membuat dokumen, laporan sederhana, dan presentasi",
      facilities: ["Komputer dengan software lengkap", "Modul cetak", "Pendampingan 1-on-1", "Ruang tenang"],
      rating: 4.8,
    },
    {
      id: 2,
      title: "Keterampilan Wirausaha UMKM (Produksi & Pemasaran)",
      category: "Intelektual",
      level: "Dasar",
      duration: "6 minggu",
      schedule: "Kamis-Jumat, 13:00-16:00",
      quota: "8/12",
      price: "Rp 550.000",
      mentor: "Maya Sari Dewi, S.Psi.",
      image: "/images/wirausaha.png?height=200&width=300&text=UMKM+Workshop",
      startDate: "20 Februari 2025",
      endDate: "3 April 2025",
      targetDisability: "🧠 Disabilitas Intelektual",
      learningGoal: "Mendorong kewirausahaan mandiri",
      output: "Membuat produk sederhana dan menjual via WhatsApp/Instagram",
      facilities: ["Workshop area", "Bahan praktek", "Smartphone untuk praktek", "Mentoring bisnis"],
      rating: 4.7,
    },
    {
      id: 3,
      title: "Pelatihan Karyawan Toko (Frontliner & Etika)",
      category: "Intelektual",
      level: "Dasar",
      duration: "4 minggu",
      schedule: "Sabtu, 09:00-15:00",
      quota: "10/15",
      price: "Rp 450.000",
      mentor: "Sari Indah Permata, M.Pd.",
      image: "/images/karyawan.png?height=200&width=300&text=Store+Training",
      startDate: "22 Februari 2025",
      endDate: "15 Maret 2025",
      targetDisability: "🧠 Disabilitas Intelektual",
      learningGoal: "Siap kerja sebagai staf toko atau swalayan",
      output: "Simulasi pelayanan, tata krama, dan mengenal produk",
      facilities: ["Mock store setup", "Kasir simulator", "Role play area", "Product samples"],
      rating: 4.6,
    },

    // 👂 Disabilitas Rungu
    {
      id: 4,
      title: "Desain Grafis Dasar (Canva & Figma)",
      category: "Rungu",
      level: "Dasar",
      duration: "6 minggu",
      schedule: "Selasa-Kamis, 09:00-12:00",
      quota: "7/10",
      price: "Rp 750.000",
      mentor: "Dian Ayu Rahayu, S.Sn.",
      image: "/images/grafis.png?height=200&width=300&text=Design+Workshop",
      startDate: "18 Februari 2025",
      endDate: "1 April 2025",
      targetDisability: "👂 Disabilitas Rungu",
      learningGoal: "Mengembangkan kreativitas visual",
      output: "Poster, feed Instagram, branding sederhana",
      facilities: ["Interpreter bahasa isyarat", "Visual display", "Design software", "Printing facility"],
      rating: 4.9,
    },
    {
      id: 5,
      title: "Video Editing Dasar (CapCut & VN App)",
      category: "Rungu",
      level: "Dasar",
      duration: "5 minggu",
      schedule: "Jumat-Sabtu, 13:00-16:00",
      quota: "11/15",
      price: "Rp 650.000",
      mentor: "Budi Santoso, M.T.",
      image: "/images/vidio-editing.png?height=200&width=300&text=Video+Lab",
      startDate: "21 Februari 2025",
      endDate: "28 Maret 2025",
      targetDisability: "👂 Disabilitas Rungu",
      learningGoal: "Membuat konten visual untuk media sosial",
      output: "Video promosi produk atau kampanye sosial",
      facilities: ["Video editing lab", "High-spec computers", "Recording equipment", "Visual tutorials"],
      rating: 4.8,
    },

    // 🧍‍♂️ Disabilitas Fisik
    {
      id: 6,
      title: "Digital Marketing Dasar (SEO, Sosial Media, Ads)",
      category: "Fisik",
      level: "Menengah",
      duration: "10 minggu",
      schedule: "Senin-Rabu, 14:00-17:00",
      quota: "6/12",
      price: "Rp 850.000",
      mentor: "Maya Sari Dewi, S.Psi.",
      image: "/images/digital-marketing.png?height=200&width=300&text=Digital+Marketing+Lab",
      startDate: "17 Februari 2025",
      endDate: "28 April 2025",
      targetDisability: "🧍‍♂️ Disabilitas Fisik",
      learningGoal: "Menjadi spesialis pemasaran daring",
      output: "Mengelola kampanye Instagram/Facebook",
      facilities: ["Ergonomic workstations", "Voice recognition", "Adjustable desks", "Marketing tools"],
      rating: 4.8,
    },

    // 👁 Disabilitas Netra
    {
      id: 7,
      title: "Pelatihan JAWS & NVDA (Screen Reader Skill)",
      category: "Netra",
      level: "Dasar",
      duration: "8 minggu",
      schedule: "Selasa-Kamis, 10:00-13:00",
      quota: "5/8",
      price: "Rp 750.000",
      mentor: "Budi Santoso, M.T.",
      image: "/placeholder.svg?height=200&width=300&text=Screen+Reader+Lab",
      startDate: "18 Februari 2025",
      endDate: "15 April 2025",
      targetDisability: "👁 Disabilitas Netra",
      learningGoal: "Navigasi komputer dengan screen reader",
      output: "Mengakses email, mengetik, browsing mandiri",
      facilities: ["JAWS licensed computers", "NVDA setup", "Braille display", "Audio guidance"],
      rating: 4.9,
    },

    // 🗣 Disabilitas Wicara
    {
      id: 8,
      title: "Pemrograman Dasar (HTML, CSS, JavaScript)",
      category: "Wicara",
      level: "Dasar",
      duration: "12 minggu",
      schedule: "Sabtu-Minggu, 09:00-15:00",
      quota: "4/10",
      price: "Rp 1.200.000",
      mentor: "Ahmad Rizki Pratama, S.Kom.",
      image: "/images/pemrograman.png?height=200&width=300&text=Programming+Lab",
      startDate: "22 Februari 2025",
      endDate: "17 Mei 2025",
      targetDisability: "🗣 Disabilitas Wicara",
      learningGoal: "Menjadi web developer pemula",
      output: "Website portofolio pribadi",
      facilities: ["Coding lab", "Multiple monitors", "Text-based communication", "Code review tools"],
      rating: 4.9,
    },
  ]

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
            <Link href="/training/offline-locations" className="text-[#4597a7] hover:underline">
              Lokasi Offline
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{location?.city}</span>
          </nav>
        </div>
      </section>

      {/* Step Indicator */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Pilih Mode</span>
            </div>
            <div className="w-12 h-0.5 bg-green-500"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#4597a7] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-[#4597a7] font-medium">Pilih Course</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-4">
              🟠 STEP 2: PILIH COURSE OFFLINE - {location?.city.toUpperCase()}
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Course Offline di <span className="text-white/90">{location?.name}</span>
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {location?.address}
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {location?.coordinatorPhone}
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Cari course..." className="bg-white text-gray-900 pl-10" />
              </div>
              <Select>
                <SelectTrigger className="bg-white text-gray-900">
                  <SelectValue placeholder="Kategori Disabilitas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="intelektual">🧠 Intelektual</SelectItem>
                  <SelectItem value="rungu">👂 Rungu</SelectItem>
                  <SelectItem value="fisik">🧍‍♂️ Fisik</SelectItem>
                  <SelectItem value="netra">👁 Netra</SelectItem>
                  <SelectItem value="wicara">🗣 Wicara</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white text-gray-900">
                  <SelectValue placeholder="Jadwal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pagi">Pagi (09:00-12:00)</SelectItem>
                  <SelectItem value="siang">Siang (13:00-16:00)</SelectItem>
                  <SelectItem value="weekend">Weekend</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white text-gray-900">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dasar">Dasar</SelectItem>
                  <SelectItem value="menengah">Menengah</SelectItem>
                  <SelectItem value="lanjut">Lanjut</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Course Offline Tersedia</h2>
              <p className="text-gray-600">
                Menampilkan {offlineCourses.length} course di {location?.city}
              </p>
            </div>
            <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filter Lanjutan
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offlineCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4597a7] text-white">{course.level}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">{course.quota}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-black/70 text-white">
                      <MapPin className="h-3 w-3 mr-1" />
                      Offline
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-[#4597a7]/10 text-[#4597a7] text-xs">{course.targetDisability}</Badge>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                          <span className="text-xs text-gray-600">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="space-y-2">
                        <div className="text-xs text-gray-600">
                          <strong>🎯 Tujuan:</strong> {course.learningGoal}
                        </div>
                        <div className="text-xs text-gray-600">
                          <strong>📋 Output:</strong> {course.output}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <div>
                          <div className="font-medium">{course.schedule}</div>
                          <div className="text-xs">{course.startDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <div>
                          <div className="font-medium">{course.duration}</div>
                          <div className="text-xs">Durasi total</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Mentor: {course.mentor}</p>
                      <div className="flex flex-wrap gap-1">
                        {course.facilities.slice(0, 2).map((facility, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {facility}
                          </Badge>
                        ))}
                        {course.facilities.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.facilities.length - 2} fasilitas
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-xl font-bold text-[#4597a7]">{course.price}</div>
                      <div className="flex space-x-2">
                        <Link href={`/training/course-detail/${course.id}`}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#4597a7] text-[#4597a7] bg-transparent"
                          >
                            Detail
                          </Button>
                        </Link>
                        <Link href={`/training/detail/3}`}>
                          <Button size="sm" className="bg-[#4597a7] hover:bg-[#4597a7]/90">
                            <Calendar className="h-4 w-4 mr-1" />
                            Pilih
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Coordinator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Butuh Informasi Lebih Lanjut?</h2>
          <p className="text-gray-600 mb-6">
            Hubungi koordinator lokasi untuk konsultasi jadwal dan kebutuhan aksesibilitas khusus
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#4597a7] hover:bg-[#4597a7]/90">
              <Phone className="h-4 w-4 mr-2" />
              Hubungi {location?.coordinator}
            </Button>
            <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
              <Mail className="h-4 w-4 mr-2" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/training/offline-locations">
              <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Kembali ke Pilih Lokasi
              </Button>
            </Link>
            <div className="text-sm text-gray-500">Langkah 2 dari 4 - Pilih Course Offline</div>
          </div>
        </div>
      </section>
    </div>
  )
}