import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ChevronLeft,
  User,
  Mail,
  Phone,
  CreditCard,
  CheckCircle,
  Heart,
  Shield,
  Clock,
  Users,
  Star,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Updated interface for Next.js 15
interface PageProps {
  params: Promise<{ courseId: string }>
}

export default async function RegistrationPage({ params }: PageProps) {
  // Await the params promise in Next.js 15
  const resolvedParams = await params
  
  const course = {
    id: resolvedParams.courseId,
    title: "Dasar Microsoft Office (Word, Excel, PowerPoint)",
    category: "Intelektual",
    level: "Dasar",
    duration: "8 minggu",
    price: "Rp 650.000",
    mentor: "Ahmad Rizki Pratama, S.Kom.",
    image: "/placeholder.svg?height=200&width=300&text=MS+Office",
    targetDisability: "🧠 Disabilitas Intelektual",
    mode: "Online", // or "Offline"
    schedule: "Senin-Rabu, 09:00-12:00",
    startDate: "15 Februari 2025",
    location: "Online Platform", // or specific location for offline
    rating: 4.8,
    students: 189,
  }

  const disabilityTypes = [
    {
      value: "intelektual",
      label: "🧠 Disabilitas Intelektual",
      description: "Keterbatasan dalam fungsi intelektual dan perilaku adaptif",
      accommodations: [
        "Materi pembelajaran sederhana dan berulang",
        "Pendampingan intensif dari mentor",
        "Modul visual dan audio",
        "Waktu belajar fleksibel",
      ],
    },
    {
      value: "rungu",
      label: "👂 Disabilitas Rungu",
      description: "Gangguan pendengaran sebagian atau total",
      accommodations: [
        "Interpreter bahasa isyarat",
        "Subtitle lengkap pada video",
        "Materi berbasis visual",
        "Chat support real-time",
      ],
    },
    {
      value: "fisik",
      label: "🧍‍♂️ Disabilitas Fisik",
      description: "Keterbatasan dalam fungsi gerak tubuh",
      accommodations: [
        "Akses keyboard dan voice commands",
        "Jadwal belajar fleksibel",
        "Ergonomic setup guidance",
        "Remote learning support",
      ],
    },
    {
      value: "netra",
      label: "👁 Disabilitas Netra",
      description: "Gangguan penglihatan sebagian atau total",
      accommodations: [
        "Screen reader compatibility",
        "Audio-based learning materials",
        "Braille support (offline)",
        "Voice navigation guidance",
      ],
    },
    {
      value: "wicara",
      label: "🗣 Disabilitas Wicara",
      description: "Gangguan dalam berbicara atau berkomunikasi verbal",
      accommodations: [
        "Text-based communication",
        "Written assignments priority",
        "Visual presentation tools",
        "Non-verbal interaction methods",
      ],
    },
  ]

  const paymentMethods = [
    {
      value: "bank_transfer",
      label: "Transfer Bank",
      description: "BCA, Mandiri, BNI, BRI",
      fee: "Gratis",
    },
    {
      value: "e_wallet",
      label: "E-Wallet",
      description: "GoPay, OVO, DANA, ShopeePay",
      fee: "Gratis",
    },
    {
      value: "credit_card",
      label: "Kartu Kredit",
      description: "Visa, Mastercard",
      fee: "2.9%",
    },
    {
      value: "installment",
      label: "Cicilan 0%",
      description: "3, 6, 12 bulan",
      fee: "Gratis",
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
            <Link href={`/training/course-detail/${course.id}`} className="text-[#4597a7] hover:underline">
              Detail Course
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Pendaftaran</span>
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
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Pilih Course</span>
            </div>
            <div className="w-12 h-0.5 bg-green-500"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Detail & Mentor</span>
            </div>
            <div className="w-12 h-0.5 bg-green-500"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#4597a7] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <span className="ml-2 text-[#4597a7] font-medium">Pendaftaran</span>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 bg-[#4597a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-4">🟦 STEP 4: PENDAFTARAN COURSE</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Daftar Course <span className="text-white/90">{course.title}</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Lengkapi data diri dan informasi disabilitas untuk mendapatkan akomodasi pembelajaran yang sesuai
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form className="space-y-8">
                {/* Personal Information */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-[#4597a7]/10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-[#4597a7]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Data Pribadi</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Nama Lengkap *</Label>
                        <Input id="fullName" placeholder="Masukkan nama lengkap" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="nama@email.com" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Nomor Telepon *</Label>
                        <Input id="phone" placeholder="+62 812 3456 7890" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="birthDate">Tanggal Lahir *</Label>
                        <Input id="birthDate" type="date" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="gender">Jenis Kelamin *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih jenis kelamin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Laki-laki</SelectItem>
                            <SelectItem value="female">Perempuan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="education">Pendidikan Terakhir *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih pendidikan terakhir" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sd">SD/Sederajat</SelectItem>
                            <SelectItem value="smp">SMP/Sederajat</SelectItem>
                            <SelectItem value="sma">SMA/SMK/Sederajat</SelectItem>
                            <SelectItem value="d3">Diploma 3</SelectItem>
                            <SelectItem value="s1">Sarjana (S1)</SelectItem>
                            <SelectItem value="s2">Magister (S2)</SelectItem>
                            <SelectItem value="s3">Doktor (S3)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Label htmlFor="address">Alamat Lengkap *</Label>
                      <Textarea
                        id="address"
                        placeholder="Masukkan alamat lengkap termasuk kota dan kode pos"
                        className="mt-1"
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Disability Information */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-[#4597a7]/10 rounded-full flex items-center justify-center">
                        <Heart className="h-5 w-5 text-[#4597a7]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Informasi Disabilitas</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label className="text-base font-medium">Jenis Disabilitas *</Label>
                        <p className="text-sm text-gray-600 mb-4">
                          Pilih jenis disabilitas untuk mendapatkan akomodasi pembelajaran yang sesuai
                        </p>
                        <RadioGroup className="space-y-4">
                          {disabilityTypes.map((type) => (
                            <div key={type.value} className="border rounded-lg p-4 hover:bg-gray-50">
                              <div className="flex items-start space-x-3">
                                <RadioGroupItem value={type.value} id={type.value} className="mt-1" />
                                <div className="flex-1">
                                  <Label htmlFor={type.value} className="font-medium cursor-pointer">
                                    {type.label}
                                  </Label>
                                  <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                                  <div className="mt-3">
                                    <p className="text-sm font-medium text-gray-700 mb-2">
                                      Akomodasi yang akan diberikan:
                                    </p>
                                    <div className="space-y-1">
                                      {type.accommodations.map((accommodation, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-600">
                                          <CheckCircle className="h-3 w-3 text-[#4597a7] mr-2 flex-shrink-0" />
                                          {accommodation}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div>
                        <Label htmlFor="disabilityLevel">Tingkat Disabilitas *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih tingkat disabilitas" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ringan">Ringan</SelectItem>
                            <SelectItem value="sedang">Sedang</SelectItem>
                            <SelectItem value="berat">Berat</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="assistiveTools">Alat Bantu yang Digunakan</Label>
                        <Input
                          id="assistiveTools"
                          placeholder="Contoh: Kursi roda, tongkat putih, hearing aid, dll"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="specialNeeds">Kebutuhan Khusus Lainnya</Label>
                        <Textarea
                          id="specialNeeds"
                          placeholder="Jelaskan kebutuhan khusus atau akomodasi tambahan yang diperlukan"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-[#4597a7]/10 rounded-full flex items-center justify-center">
                        <Shield className="h-5 w-5 text-[#4597a7]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Kontak Darurat</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="emergencyName">Nama Kontak Darurat *</Label>
                        <Input id="emergencyName" placeholder="Nama keluarga/wali" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="emergencyRelation">Hubungan *</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Pilih hubungan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="parent">Orang Tua</SelectItem>
                            <SelectItem value="sibling">Saudara</SelectItem>
                            <SelectItem value="spouse">Pasangan</SelectItem>
                            <SelectItem value="guardian">Wali</SelectItem>
                            <SelectItem value="friend">Teman</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="emergencyPhone">Nomor Telepon *</Label>
                        <Input id="emergencyPhone" placeholder="+62 812 3456 7890" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="emergencyEmail">Email</Label>
                        <Input id="emergencyEmail" type="email" placeholder="email@example.com" className="mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-[#4597a7]/10 rounded-full flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-[#4597a7]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Metode Pembayaran</h3>
                    </div>
                    <RadioGroup className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div key={method.value} className="border rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value={method.value} id={method.value} />
                            <div className="flex-1">
                              <Label htmlFor={method.value} className="font-medium cursor-pointer">
                                {method.label}
                              </Label>
                              <p className="text-sm text-gray-600">{method.description}</p>
                              <p className="text-sm text-[#4597a7] font-medium">Biaya admin: {method.fee}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Terms and Conditions */}
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="terms" className="mt-1" />
                        <div>
                          <Label htmlFor="terms" className="cursor-pointer">
                            Saya menyetujui{" "}
                            <Link href="/terms" className="text-[#4597a7] hover:underline">
                              Syarat dan Ketentuan
                            </Link>{" "}
                            serta{" "}
                            <Link href="/privacy" className="text-[#4597a7] hover:underline">
                              Kebijakan Privasi
                            </Link>{" "}
                            DISAKARYA *
                          </Label>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="newsletter" className="mt-1" />
                        <Label htmlFor="newsletter" className="cursor-pointer">
                          Saya ingin menerima informasi terbaru tentang program pelatihan dan beasiswa dari DISAKARYA
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="dataConsent" className="mt-1" />
                        <Label htmlFor="dataConsent" className="cursor-pointer">
                          Saya memberikan persetujuan untuk penggunaan data pribadi dan informasi disabilitas untuk
                          keperluan akomodasi pembelajaran *
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button size="lg" className="bg-[#4597a7] hover:bg-[#4597a7]/90 px-12 py-4 text-lg">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Daftar & Bayar Sekarang
                  </Button>
                </div>
              </form>
            </div>

            {/* Sidebar - Course Summary */}
            <div className="space-y-6">
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ringkasan Pendaftaran</h3>

                  <div className="relative mb-6">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={300}
                      height={150}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-[#4597a7] text-white">{course.mode}</Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Badge className="bg-[#4597a7]/10 text-[#4597a7] mb-2">{course.targetDisability}</Badge>
                      <h4 className="font-bold text-gray-900">{course.title}</h4>
                      <p className="text-sm text-gray-600">Level: {course.level}</p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Mentor:</span>
                        <span className="font-medium">{course.mentor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Durasi:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Jadwal:</span>
                        <span className="font-medium">{course.schedule}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Mulai:</span>
                        <span className="font-medium">{course.startDate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Lokasi:</span>
                        <span className="font-medium">{course.location}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span>Total Biaya:</span>
                        <span className="text-[#4597a7]">{course.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">*Sudah termasuk sertifikat dan materi</p>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{course.students} siswa</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Info */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Butuh Bantuan?</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-[#4597a7]" />
                      <span>+62 123 456 7890</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-[#4597a7]" />
                      <span>support@disakarya.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-[#4597a7]" />
                      <span>Senin-Jumat, 09:00-17:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <h4 className="font-bold text-gray-900">Keamanan Data</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Data pribadi dan informasi disabilitas Anda dilindungi dengan enkripsi SSL 256-bit dan hanya
                    digunakan untuk keperluan akomodasi pembelajaran.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href={`/training/course-detail/${course.id}`}>
              <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Kembali ke Detail Course
              </Button>
            </Link>
            <div className="text-sm text-gray-500">Langkah 4 dari 4 - Pendaftaran Course</div>
          </div>
        </div>
      </section>
    </div>
  )
}