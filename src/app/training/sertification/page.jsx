import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, ExternalLink } from 'lucide-react'
import Image from "next/image"

export default function CertificationSection() {
  const certificationInfo = {
    provider: "BNSP (Badan Nasional Sertifikasi Profesi)",
    scheme: "Desain Grafis Percetakan",
    code: "BNSP-DGP-2024",
    validityPeriod: "3 tahun",
    examFormat: "Praktik + Teori",
    examDuration: "4 jam",
    passingScore: "70%",
    examFee: "Rp 350.000",
    examSchedule: [
      { date: "5 April 2025", time: "09:00-13:00", location: "Lab Yogyakarta", quota: "8/12" },
      { date: "12 April 2025", time: "09:00-13:00", location: "Lab Jakarta", quota: "6/12" },
      { date: "19 April 2025", time: "09:00-13:00", location: "Lab Bandung", quota: "10/12" },
    ],
    benefits: [
      "Diakui oleh industri kreatif nasional",
      "Meningkatkan kredibilitas profesional",
      "Syarat untuk tender proyek pemerintah",
      "Standar kompetensi internasional",
    ],
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🏆 Sertifikasi Kompetensi Berbasis BNSP/LSP
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dapatkan pengakuan resmi atas keterampilan Anda dengan sertifikasi kompetensi yang diakui secara nasional.
          </p>
        </div>

        <Card className="p-6 shadow-lg">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Detail Sertifikasi Kompetensi</h3>
            
            {/* Added Image Section */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/sertifi.png?height=300&width=800&text=BNSP+Certification+Process"
                alt="Proses Sertifikasi BNSP - Badan Nasional Sertifikasi Profesi"
                width={400}
                height={300}
                className="w-full h-80 object-cover"
              />
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Sertifikasi Resmi BNSP</h4>
                    <p className="text-blue-100 text-sm">
                      Standar kompetensi nasional yang diakui industri dan pemerintah
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-white/20 text-white border-white/30">
                      Terakreditasi
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-8 w-8 text-blue-600" />
                <div>
                  <h4 className="text-lg font-bold text-blue-900">{certificationInfo.scheme}</h4>
                  <p className="text-sm text-blue-700">{certificationInfo.provider}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-blue-700">Kode Skema:</span>
                  <span className="font-medium text-blue-900 ml-2">{certificationInfo.code}</span>
                </div>
                <div>
                  <span className="text-blue-700">Masa Berlaku:</span>
                  <span className="font-medium text-blue-900 ml-2">{certificationInfo.validityPeriod}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-3">📋 Detail Uji Kompetensi:</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{certificationInfo.examFormat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durasi:</span>
                    <span className="font-medium">{certificationInfo.examDuration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nilai Lulus:</span>
                    <span className="font-medium">{certificationInfo.passingScore}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Biaya Uji:</span>
                    <span className="font-medium text-[#4597a7]">{certificationInfo.examFee}</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3">✨ Manfaat Sertifikasi:</h5>
                <div className="space-y-2">
                  {certificationInfo.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#4597a7] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-4">🏆 Preview Sertifikat:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* BNSP Certificate Preview */}
                <div className="border rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=BNSP+Certificate"
                      alt="Preview Sertifikat BNSP - Desain Grafis Percetakan"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white text-xs">
                      <div className="font-semibold">Sertifikat Kompetensi BNSP</div>
                      <div>Desain Grafis Percetakan</div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-blue-600 text-white text-xs">Resmi</Badge>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50">
                    <div className="text-sm font-medium text-blue-900">Sertifikat Resmi BNSP</div>
                    <div className="text-xs text-blue-700">Diakui secara nasional & internasional</div>
                  </div>
                </div>

                {/* Course Completion Certificate */}
                <div className="border rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <Image
                      src="/images/logo.png?height=200&width=300&text=Course+Completion+Certificate"
                      alt="Preview Sertifikat Penyelesaian Kursus DISAKARYA"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white text-xs">
                      <div className="font-semibold">Sertifikat Penyelesaian</div>
                      <div>DISAKARYA Training Program</div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-600 text-white text-xs">Verified</Badge>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50">
                    <div className="text-sm font-medium text-green-900">Sertifikat Kursus</div>
                    <div className="text-xs text-green-700">Bukti penyelesaian pelatihan</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h6 className="font-medium text-amber-900 mb-1">Dual Certification System</h6>
                    <p className="text-sm text-amber-800">
                      Setiap peserta akan mendapatkan <strong>2 sertifikat</strong>:
                    </p>
                    <ul className="text-sm text-amber-800 mt-2 space-y-1">
                      <li>• <strong>Sertifikat Penyelesaian Kursus</strong> - Diberikan setelah menyelesaikan semua modul pelatihan</li>
                      <li>• <strong>Sertifikat Kompetensi BNSP</strong> - Diberikan setelah lulus uji kompetensi resmi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h6 className="font-medium text-gray-900 mb-3">📋 Contoh Sertifikat Lainnya:</h6>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="relative group cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=120&width=160&text=Adobe+Certified"
                    alt="Adobe Certified Professional"
                    width={160}
                    height={120}
                    className="w-full h-20 object-cover rounded border group-hover:shadow-md transition-shadow"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded"></div>
                  <div className="text-xs text-center mt-1 text-gray-600">Adobe Certified</div>
                </div>
                <div className="relative group cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=120&width=160&text=LSP+Digital+Marketing"
                    alt="LSP Digital Marketing"
                    width={160}
                    height={120}
                    className="w-full h-20 object-cover rounded border group-hover:shadow-md transition-shadow"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded"></div>
                  <div className="text-xs text-center mt-1 text-gray-600">LSP Digital Marketing</div>
                </div>
                <div className="relative group cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=120&width=160&text=Microsoft+Certified"
                    alt="Microsoft Certified"
                    width={160}
                    height={120}
                    className="w-full h-20 object-cover rounded border group-hover:shadow-md transition-shadow"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded"></div>
                  <div className="text-xs text-center mt-1 text-gray-600">Microsoft Certified</div>
                </div>
                <div className="relative group cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=120&width=160&text=Google+Certified"
                    alt="Google Certified"
                    width={160}
                    height={120}
                    className="w-full h-20 object-cover rounded border group-hover:shadow-md transition-shadow"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded"></div>
                  <div className="text-xs text-center mt-1 text-gray-600">Google Certified</div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <Button variant="outline" size="sm" className="text-[#4597a7] border-[#4597a7] bg-transparent">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Lihat Semua Sertifikat
                </Button>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4">📅 Jadwal Uji Kompetensi:</h5>
              <div className="space-y-3">
                {certificationInfo.examSchedule.map((schedule, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-900">{schedule.date}</div>
                          <div className="text-xs text-gray-600">{schedule.time}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{schedule.location}</div>
                          <div className="text-xs text-gray-600">Kuota: {schedule.quota}</div>
                        </div>
                      </div>
                      <Button size="sm" className="bg-[#4597a7] hover:bg-[#4597a7]/90">
                        Daftar Uji
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
