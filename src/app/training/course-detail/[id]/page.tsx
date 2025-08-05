import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  ChevronLeft,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award,
  CheckCircle,
  Play,
  BookOpen,
  Globe,
  Download,
  ExternalLink,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function CourseDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Await the params promise
  const { id } = await params
  const courseId = id // Now params is used

  const course = {
    id: parseInt(courseId) || 1,
    title: "Dasar Desain Grafis dengan Canva",
    category: "Desain",
    level: "Dasar",
    duration: "6 minggu",
    students: 245,
    rating: 4.8,
    reviews: 89,
    price: "Rp 750.000",
    image: "/placeholder.svg?height=300&width=500&text=Canva+Design+Course",
    description:
      "Pelajari dasar-dasar desain grafis menggunakan Canva dengan pendekatan yang ramah untuk semua jenis disabilitas. Course ini dirancang khusus untuk memberikan pemahaman mendalam tentang prinsip-prinsip desain yang dapat diaplikasikan dalam berbagai kebutuhan visual.",
    accessibility: [
      "Subtitle lengkap",
      "Audio deskripsi",
      "Screen reader support",
      "Navigasi keyboard",
      "High contrast mode",
    ],
    modules: [
      { title: "Pengenalan Canva dan Interface", duration: "2 jam", completed: false },
      { title: "Prinsip Dasar Desain Visual", duration: "3 jam", completed: false },
      { title: "Tipografi dan Pemilihan Font", duration: "2.5 jam", completed: false },
      { title: "Color Theory dan Psikologi Warna", duration: "3 jam", completed: false },
      { title: "Layout dan Komposisi", duration: "2.5 jam", completed: false },
      { title: "Project Portfolio dan Presentasi", duration: "4 jam", completed: false },
    ],
    learningOutcomes: [
      "Menguasai interface dan tools dasar Canva",
      "Memahami prinsip-prinsip desain visual yang baik",
      "Mampu memilih dan mengkombinasikan warna dengan tepat",
      "Dapat membuat desain yang accessible untuk semua pengguna",
      "Memiliki portfolio desain yang siap dipresentasikan",
    ],
    requirements: [
      "Komputer/laptop dengan koneksi internet stabil",
      "Akun Canva (gratis/berbayar)",
      "Tidak ada pengalaman desain sebelumnya diperlukan",
      "Software screen reader (untuk pengguna tunanetra)",
    ],
    certificate: "Sertifikat Kelulusan dari DISAKARYA dan Canva Certified Educator",
  }

  const mentor = {
    name: "Dian Ayu Rahayu, S.Sn.",
    position: "Lead Designer – Inklusiv.ID Studio",
    photo: "/placeholder.svg?height=120&width=120",
    experience: "5+ tahun",
    rating: 4.9,
    students: 1250,
    courses: 12,
    bio: "Dian adalah seorang desainer grafis berpengalaman dengan spesialisasi dalam desain inklusif. Beliau telah membantu lebih dari 1000 penyandang disabilitas mengembangkan keterampilan desain mereka.",
    education: "S.Sn. – Desain Komunikasi Visual, ISI Yogyakarta",
    certifications: [
      "Adobe Certified Professional – Graphic Design & Illustration",
      "Canva Certified Educator",
      "Sertifikat Pelatih Inklusif, Kementerian Sosial",
    ],
    specialties: [
      "Desain Grafis (Adobe Photoshop, Illustrator, Canva)",
      "Branding UMKM & Sosial",
      "Aksesibilitas Visual",
      "Mentoring Desain untuk Tunarungu",
    ],
    projects: [
      'Kampanye visual "KerjaBisa" untuk Hari Disabilitas Internasional',
      'Modul visual "Desain Inklusif untuk Semua" (2022)',
      "Speaker & Trainer di 12+ workshop nasional",
    ],
    workHistory: [
      "2020–sekarang: Lead Designer di Inklusiv.ID, menangani desain kampanye inklusi nasional",
      "2017–2020: Freelance Designer untuk UMKM dan komunitas disabilitas",
      "2015–2017: Instruktur Desain di Sekolah Luar Biasa YPAB",
    ],
    portfolio: "www.dianayuportfolio.com",
    linkedin: "linkedin.com/in/dianayurahayu",
    email: "dian.ayu@disakarya.com",
    phone: "+62 812 3456 7890",
  }

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
            <Link href="/training/online-courses" className="text-[#4597a7] hover:underline">
              Course Online
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Detail Course</span>
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
              <div className="w-8 h-8 bg-[#4597a7] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-[#4597a7] font-medium">Detail & Mentor</span>
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

      {/* Course Header */}
      <section className="py-12 bg-[#4597a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                🟩 STEP 3: DETAIL COURSE & MENTOR
              </Badge>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-white/20 text-white">{course.level}</Badge>
                  <Badge className="bg-white/20 text-white">{course.category}</Badge>
                  <Badge className="bg-white/20 text-white">
                    <Globe className="h-3 w-3 mr-1" />
                    Online
                  </Badge>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight">{course.title}</h1>
                <p className="text-lg text-white/80 leading-relaxed">{course.description}</p>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span>
                    {course.rating} ({course.reviews} ulasan)
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{course.students} siswa</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="text-3xl font-bold">{course.price}</div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span className="text-sm">Preview Course</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Accessibility Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Fitur Aksesibilitas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.accessibility.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#4597a7] flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Course Modules */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Materi Pembelajaran</h3>
                  <div className="space-y-3">
                    {course.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#4597a7]/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-[#4597a7]">{idx + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{module.title}</h4>
                            <p className="text-sm text-gray-600">{module.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            <Play className="h-3 w-3 mr-1" />
                            Video
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Outcomes */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Yang Akan Anda Pelajari</h3>
                  <div className="space-y-3">
                    {course.learningOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#4597a7] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Persyaratan</h3>
                  <div className="space-y-3">
                    {course.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#4597a7] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Mentor Profile */}
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍🏫 Profil Mentor</h3>

                  <div className="text-center mb-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={mentor.photo || "/placeholder.svg"} alt={mentor.name} />
                      <AvatarFallback className="text-lg">
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-bold text-gray-900">{mentor.name}</h4>
                    <p className="text-[#4597a7] text-sm font-medium">{mentor.position}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-[#4597a7]">{mentor.rating}</div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#4597a7]">{mentor.students}</div>
                      <div className="text-xs text-gray-600">Siswa</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#4597a7]">{mentor.courses}</div>
                      <div className="text-xs text-gray-600">Course</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{mentor.bio}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">🎓 Pendidikan:</h5>
                      <p className="text-gray-600 text-sm">{mentor.education}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">🏆 Sertifikasi:</h5>
                      <div className="space-y-1">
                        {mentor.certifications.slice(0, 2).map((cert, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <Award className="h-3 w-3 mr-1 flex-shrink-0" />
                            {cert}
                          </div>
                        ))}
                        {mentor.certifications.length > 2 && (
                          <p className="text-xs text-gray-500">
                            +{mentor.certifications.length - 2} sertifikasi lainnya
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button variant="outline" className="w-full text-sm border-[#4597a7] text-[#4597a7] bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Lihat CV Lengkap
                    </Button>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                        <Linkedin className="h-3 w-3 mr-1" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certificate Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📄 Sertifikat</h3>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-8 w-8 text-[#4597a7]" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{course.certificate}</p>
                  </div>
                  <Button variant="outline" className="w-full text-sm border-[#4597a7] text-[#4597a7] bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Preview Sertifikat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Siap Memulai Pembelajaran?</h2>
          <p className="text-gray-600 mb-8">
            Bergabunglah dengan {course.students} siswa lainnya dan mulai perjalanan pembelajaran Anda hari ini
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/training/registration/${course.id}`}>
              <Button size="lg" className="bg-[#4597a7] hover:bg-[#4597a7]/90 px-8">
                <BookOpen className="h-5 w-5 mr-2" />🎓 Daftar Sekarang
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
              <Phone className="h-5 w-5 mr-2" />💻 Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/training/online-courses">
              <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Kembali ke Daftar Course
              </Button>
            </Link>
            <div className="text-sm text-gray-500">Langkah 3 dari 4 - Detail Course & Mentor</div>
          </div>
        </div>
      </section>
    </div>
  )
}