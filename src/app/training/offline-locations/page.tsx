import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Users, ChevronLeft, ArrowRight, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OfflineLocationsPage() {
  const locations = [
    {
      id: 1,
      city: "Yogyakarta",
      name: "Balai Latihan Kerja Yogyakarta",
      address: "Jl. Kaliurang KM 9, Sleman, Yogyakarta 55581",
      phone: "+62 274 555 0123",
      email: "blk.yogya@disakarya.com",
      image: "/placeholder.svg?height=200&width=300&text=BLK+Yogyakarta",
      facilities: ["Ramp aksesibel", "Lift", "Toilet disabilitas", "Parking khusus", "Audio system"],
      courses: [
        { title: "Desain Grafis dengan Canva", schedule: "Senin-Rabu, 09:00-12:00", quota: "12/15" },
        { title: "Microsoft Office untuk Tunanetra", schedule: "Selasa-Kamis, 13:00-16:00", quota: "8/10" },
        { title: "Digital Marketing UMKM", schedule: "Sabtu, 09:00-15:00", quota: "10/12" },
      ],
      coordinator: "Ibu Sari Wulandari, M.Pd",
      coordinatorPhone: "+62 812 3456 7890",
    },
    {
      id: 2,
      city: "Jakarta",
      name: "Gedung Pelatihan Tuna Netra Jakarta",
      address: "Jl. Sudirman No. 88, Jakarta Pusat 10220",
      phone: "+62 21 555 0456",
      email: "jakarta@disakarya.com",
      image: "/placeholder.svg?height=200&width=300&text=Jakarta+Center",
      facilities: ["Screen reader support", "Braille printer", "Audio guidance", "Tactile pathways", "Guide dog area"],
      courses: [
        { title: "Excel Advanced untuk Tunanetra", schedule: "Senin-Rabu, 10:00-13:00", quota: "6/8" },
        { title: "Komunikasi Bisnis Digital", schedule: "Kamis-Jumat, 14:00-17:00", quota: "9/12" },
        { title: "Entrepreneurship Inklusif", schedule: "Sabtu, 08:00-16:00", quota: "5/10" },
      ],
      coordinator: "Bapak Ahmad Fauzi, S.Kom",
      coordinatorPhone: "+62 813 4567 8901",
    },
    {
      id: 3,
      city: "Bandung",
      name: "Inklusi Center Bandung",
      address: "Jl. Asia Afrika No. 21, Bandung 40111",
      phone: "+62 22 555 0789",
      email: "bandung@disakarya.com",
      image: "/placeholder.svg?height=200&width=300&text=Bandung+Center",
      facilities: [
        "Interpreter bahasa isyarat",
        "Visual aids",
        "Flexible seating",
        "Recording equipment",
        "Sign language display",
      ],
      courses: [
        { title: "Content Creation untuk Tunarungu", schedule: "Selasa-Kamis, 09:00-12:00", quota: "7/10" },
        { title: "Social Media Marketing", schedule: "Jumat-Sabtu, 13:00-16:00", quota: "11/15" },
        { title: "Fotografi Produk UMKM", schedule: "Minggu, 09:00-15:00", quota: "4/8" },
      ],
      coordinator: "Ibu Maya Indira, S.Sos",
      coordinatorPhone: "+62 814 5678 9012",
    },
    {
      id: 4,
      city: "Surabaya",
      name: "Pusat Pelatihan Inklusif Surabaya",
      address: "Jl. Pemuda No. 15, Surabaya 60271",
      phone: "+62 31 555 0321",
      email: "surabaya@disakarya.com",
      image: "/placeholder.svg?height=200&width=300&text=Surabaya+Center",
      facilities: [
        "Mental health support",
        "Quiet rooms",
        "Flexible scheduling",
        "Counseling service",
        "Stress-free environment",
      ],
      courses: [
        { title: "Data Entry & Analysis", schedule: "Senin-Rabu, 08:00-11:00", quota: "8/12" },
        { title: "Customer Service Excellence", schedule: "Kamis-Jumat, 13:00-16:00", quota: "6/10" },
        { title: "Bisnis Online untuk Pemula", schedule: "Sabtu, 09:00-15:00", quota: "9/15" },
      ],
      coordinator: "Bapak Eko Prasetyo, M.M",
      coordinatorPhone: "+62 815 6789 0123",
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
            <Link href="/training/mode-selection" className="text-[#4597a7] hover:underline">
              Pilih Mode
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Lokasi Offline</span>
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
              <span className="ml-2 text-[#4597a7] font-medium">Pilih Lokasi</span>
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
            🟠 STEP 2: PILIH LOKASI OFFLINE
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Pilih Lokasi Pelatihan <span className="text-white/90">Terdekat</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Semua lokasi dilengkapi dengan fasilitas aksesibel lengkap dan mentor berpengalaman
          </p>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-64 bg-gradient-to-br from-[#4597a7]/10 to-[#4597a7]/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-[#4597a7] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Peta Interaktif Lokasi</h3>
                  <p className="text-gray-600">4 lokasi pelatihan tersebar di seluruh Indonesia</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {locations.map((location) => (
              <Card key={location.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative">
                      <Image
                        src={location.image || "/placeholder.svg"}
                        alt={location.name}
                        width={300}
                        height={250}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#4597a7] text-white text-lg px-3 py-1">{location.city}</Badge>
                      </div>
                    </div>

                    {/* Location Info */}
                    <div className="p-6 lg:col-span-2">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-start">
                                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{location.address}</span>
                              </div>
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span>{location.phone}</span>
                              </div>
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span>{location.email}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">🏢 Fasilitas Aksesibel:</h4>
                            <div className="flex flex-wrap gap-2">
                              {location.facilities.map((facility, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  {facility}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">👨‍🏫 Koordinator:</h4>
                            <p className="text-sm text-gray-600">{location.coordinator}</p>
                            <p className="text-sm text-gray-600">{location.coordinatorPhone}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">📚 Course Tersedia:</h4>
                            <div className="space-y-3">
                              {location.courses.map((course, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-lg p-3">
                                  <h5 className="font-medium text-gray-900 text-sm mb-1">{course.title}</h5>
                                  <div className="flex items-center justify-between text-xs text-gray-600">
                                    <div className="flex items-center">
                                      <Calendar className="h-3 w-3 mr-1" />
                                      {course.schedule}
                                    </div>
                                    <div className="flex items-center">
                                      <Users className="h-3 w-3 mr-1" />
                                      {course.quota}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-3">
                            <Button variant="outline" className="flex-1 border-[#4597a7] text-[#4597a7] bg-transparent">
                              <MapPin className="h-4 w-4 mr-2" />📍 Lihat Lokasi
                            </Button>
                            <Link href={`/training/offline-courses/${location.id}`} className="flex-1">
                              <Button className="w-full bg-[#4597a7] hover:bg-[#4597a7]/90">
                                <Calendar className="h-4 w-4 mr-2" />
                                Lihat Course
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Butuh Bantuan Memilih Lokasi?</h2>
          <p className="text-gray-600 mb-6">
            Tim kami siap membantu Anda menemukan lokasi pelatihan yang paling sesuai dengan kebutuhan aksesibilitas
            Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#4597a7] hover:bg-[#4597a7]/90">
              <Phone className="h-4 w-4 mr-2" />
              Hubungi Koordinator
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
            <Link href="/training/mode-selection">
              <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Kembali ke Pilih Mode
              </Button>
            </Link>
            <div className="text-sm text-gray-500">Langkah 2 dari 4 - Pilih Lokasi Offline</div>
          </div>
        </div>
      </section>
    </div>
  )
}
