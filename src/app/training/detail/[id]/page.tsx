import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ArrowRight, Star, Users, Clock, Award, CheckCircle, Play, BookOpen, Globe, Download, ExternalLink, Phone, Mail, Linkedin, Calendar, MapPin, CreditCard, FileText, Target, Briefcase } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default async function TrainingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params since it's now a Promise
  const { id } = await params;

  const training = {
    id: 1,
    title: "Desain Grafis dengan Adobe Creative Suite",
    category: "Desain",
    level: "Pemula",
    duration: "6 minggu",
    students: 245,
    rating: 4.9,
    reviews: 89,
    price: "Rp 850.000",
    thumbnail: "/images/grafis.png?height=400&width=600&text=Adobe+Design+Course",
    description: "Pelajari dasar-dasar desain grafis menggunakan Adobe Photoshop, Illustrator, dan InDesign dengan pendekatan inklusif yang disesuaikan untuk penyandang disabilitas. Course ini dirancang khusus dengan metode pembelajaran visual dan interaktif.",
    instructor: "Dian Ayu Rahayu, S.Sn.",
    instructorPhoto: "/images/grafis.png?height=120&width=120",
    status: "Tersedia",
    quota: "12/20",
    mode: "Hybrid",
    startDate: "15 Februari 2025",
    endDate: "28 Maret 2025",
    schedule: "Selasa & Kamis, 19:00-21:00 WIB",
    location: "Online + Lab Yogyakarta",
    certification: "BNSP - Desain Grafis Percetakan",
    certificationFee: "Rp 350.000",
    targetDisability: ["Rungu", "Fisik"],
    // Learning objectives
    objectives: [
      "Menguasai tools dasar Adobe Photoshop untuk editing foto",
      "Membuat logo dan identitas visual dengan Adobe Illustrator",
      "Mendesain layout publikasi dengan Adobe InDesign",
      "Memahami prinsip-prinsip desain grafis yang baik",
      "Membuat portfolio desain yang siap untuk industri",
    ],
    // Course modules
    modules: [
      {
        week: 1,
        title: "Pengenalan Adobe Creative Suite & Prinsip Desain",
        topics: ["Interface Adobe CC", "Color Theory", "Typography Basics", "Design Principles"],
        duration: "4 jam",
        type: "Online",
      },
      {
        week: 2,
        title: "Adobe Photoshop - Photo Editing & Manipulation",
        topics: ["Basic Tools", "Layers & Masks", "Color Correction", "Photo Retouching"],
        duration: "4 jam",
        type: "Hybrid",
      },
      {
        week: 3,
        title: "Adobe Illustrator - Vector Graphics",
        topics: ["Pen Tool", "Shapes & Paths", "Logo Design", "Icon Creation"],
        duration: "4 jam",
        type: "Hybrid",
      },
      {
        week: 4,
        title: "Adobe InDesign - Layout Design",
        topics: ["Page Layout", "Text Formatting", "Image Placement", "Print Preparation"],
        duration: "4 jam",
        type: "Offline",
      },
      {
        week: 5,
        title: "Project Work - Brand Identity Design",
        topics: ["Client Brief", "Concept Development", "Design Execution", "Presentation"],
        duration: "4 jam",
        type: "Offline",
      },
      {
        week: 6,
        title: "Portfolio Development & Industry Preparation",
        topics: ["Portfolio Curation", "File Organization", "Client Communication", "Career Guidance"],
        duration: "4 jam",
        type: "Hybrid",
      },
    ],
    // Accessibility features
    accessibility: [
      "Interpreter bahasa isyarat untuk peserta tunarungu",
      "Materi visual dengan kontras tinggi",
      "Subtitle lengkap pada semua video",
      "Keyboard shortcuts untuk navigasi",
      "Workstation ergonomis untuk peserta disabilitas fisik",
      "Modul pembelajaran dapat diulang",
    ],
    // Requirements
    requirements: [
      "Laptop/PC dengan spesifikasi minimum: RAM 8GB, Storage 50GB",
      "Adobe Creative Suite (akan dibantu instalasi)",
      "Koneksi internet stabil untuk sesi online",
      "Tidak ada pengalaman desain sebelumnya diperlukan",
      "Minat dan dedikasi untuk belajar desain grafis",
    ],
    // Career prospects
    careerProspects: [
      "Graphic Designer di agency atau perusahaan",
      "Freelance Designer untuk UMKM",
      "Social Media Content Creator",
      "Print Production Specialist",
      "Brand Identity Designer",
    ],
  }
  const instructor = {
    name: "Dian Ayu Rahayu, S.Sn.",
    position: "Lead Designer – Inklusiv.ID Studio",
    photo: "/placeholder.svg?height=120&width=120",
    experience: "5+ tahun",
    rating: 4.9,
    students: 1250,
    courses: 12,
    bio: "Dian adalah seorang desainer grafis berpengalaman dengan spesialisasi dalam desain inklusif dan pendidikan kreatif untuk penyandang disabilitas. Beliau telah membantu lebih dari 1000 peserta mengembangkan keterampilan desain mereka.",
    education: "S.Sn. – Desain Komunikasi Visual, ISI Yogyakarta",
    certifications: [
      "Adobe Certified Professional – Graphic Design & Illustration",
      "Certified Inclusive Design Educator",
      "BNSP Certified Graphic Design Assessor",
    ],
    specialties: [
      "Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Brand Identity & Logo Design",
      "Inclusive Design Methodology",
      "Visual Communication for Accessibility",
    ],
    projects: [
      'Kampanye visual "KerjaBisa" untuk Hari Disabilitas Internasional 2023',
      'Desain identitas visual untuk 50+ UMKM penyandang disabilitas',
      'Modul pembelajaran "Desain Inklusif untuk Semua" (2022)',
      "Lead Designer untuk aplikasi aksesibilitas TunaNetra Helper",
    ],
    workHistory: [
      "2020–sekarang: Lead Designer di Inklusiv.ID Studio",
      "2018–2020: Senior Graphic Designer di Creative Inclusion Agency",
      "2016–2018: Freelance Designer & Trainer untuk komunitas disabilitas",
    ],
    portfolio: "www.dianayuportfolio.com",
    linkedin: "linkedin.com/in/dianayurahayu",
    email: "dian.ayu@disakarya.com",
    phone: "+62 812 3456 7890",
  }
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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/training" className="text-[#4597a7] hover:underline">
              Pelatihan & Sertifikasi
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Detail Pelatihan</span>
          </nav>
        </div>
      </section>
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
      {/* Training Header */}
      <section className="py-12 bg-[#4597a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-white/20 text-white">{training.level}</Badge>
                  <Badge className="bg-white/20 text-white">{training.category}</Badge>
                  <Badge className={`${training.status === 'Tersedia' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {training.status}
                  </Badge>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight">{training.title}</h1>
                <p className="text-lg text-white/80 leading-relaxed">{training.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{training.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{training.quota}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{training.schedule}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{training.location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span>{training.rating} ({training.reviews} ulasan)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{training.students} siswa</span>
                </div>
              </div>
              <div className="text-3xl font-bold">{training.price}</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={training.thumbnail || "/placeholder.svg"}
                alt={training.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span className="text-sm">Preview Pelatihan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="modules">Modul</TabsTrigger>
                  <TabsTrigger value="instructor">Pemateri</TabsTrigger>
                  <TabsTrigger value="certification">Sertifikasi</TabsTrigger>
                  <TabsTrigger value="career">Karier</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6">
                  {/* Description */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">📖 Deskripsi Lengkap Pelatihan</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{training.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">📅 Jadwal Pelatihan:</h4>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex justify-between">
                              <span>Mulai:</span>
                              <span className="font-medium">{training.startDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Selesai:</span>
                              <span className="font-medium">{training.endDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Waktu:</span>
                              <span className="font-medium">{training.schedule}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Mode:</span>
                              <span className="font-medium">{training.mode}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">🎯 Cocok untuk:</h4>
                          <div className="flex flex-wrap gap-2">
                            {training.targetDisability.map((disability, idx) => (
                              <Badge key={idx} variant="outline" className="text-sm">
                                {disability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {/* Learning Objectives */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Tujuan Pembelajaran</h3>
                      <div className="space-y-3">
                        {training.objectives.map((objective, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-[#4597a7] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  {/* Accessibility Features */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">♿ Fitur Aksesibilitas</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {training.accessibility.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-[#4597a7] flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
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
                        {training.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#4597a7] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{req}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="modules" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Modul yang Dipelajari</h3>
                      <div className="space-y-4">
                        {training.modules.map((module, idx) => (
                          <div key={idx} className="border rounded-lg p-4 hover:bg-gray-50">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-[#4597a7]/10 rounded-full flex items-center justify-center">
                                  <span className="text-sm font-semibold text-[#4597a7]">{module.week}</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">{module.title}</h4>
                                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                    <span className="flex items-center">
                                      <Clock className="h-3 w-3 mr-1" />
                                      {module.duration}
                                    </span>
                                    <Badge variant="outline" className="text-xs">
                                      {module.type}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ml-13">
                              <p className="text-sm text-gray-600 mb-2">Topik yang dibahas:</p>
                              <div className="flex flex-wrap gap-2">
                                {module.topics.map((topic, topicIdx) => (
                                  <Badge key={topicIdx} variant="outline" className="text-xs">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="instructor" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">👨‍🏫 Profil Pemateri</h3>
                      <div className="flex items-start space-x-6 mb-6">
                        <Avatar className="w-24 h-24">
                          <AvatarImage src={instructor.photo || "/placeholder.svg"} alt={instructor.name} />
                          <AvatarFallback className="text-xl">{instructor.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">{instructor.name}</h4>
                          <p className="text-[#4597a7] font-semibold mb-2">{instructor.position}</p>
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-[#4597a7]">{instructor.rating}</div>
                              <div className="text-xs text-gray-600">Rating</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-[#4597a7]">{instructor.students}</div>
                              <div className="text-xs text-gray-600">Siswa</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-[#4597a7]">{instructor.courses}</div>
                              <div className="text-xs text-gray-600">Course</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">{instructor.bio}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">🎓 Pendidikan & Sertifikasi:</h5>
                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <Award className="h-4 w-4 text-[#4597a7] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{instructor.education}</span>
                            </div>
                            {instructor.certifications.map((cert, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <Award className="h-4 w-4 text-[#4597a7] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">🛠️ Keahlian:</h5>
                          <div className="space-y-2">
                            {instructor.specialties.map((specialty, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-[#4597a7]" />
                                <span className="text-sm text-gray-700">{specialty}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h5 className="font-semibold text-gray-900 mb-3">🏆 Proyek & Pengalaman:</h5>
                        <div className="space-y-2">
                          {instructor.projects.map((project, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t">
                        <div className="flex space-x-4">
                          <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Lihat Portfolio
                          </Button>
                          <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="certification" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">🏆 Sertifikasi Kompetensi</h3>
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
                                src="/images/logo.png"
                                alt="Preview Sertifikat BNSP - Desain Grafis Percetakan"
                                width={300}
                                height={100}
                                className="w-full h-58 object-cover"
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
                                src="/images/course-completion-certificate.png"
                                alt="Preview Sertifikat Penyelesaian Kursus DISAKARYA"
                                width={400}
                                height={300}
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
                </TabsContent>
                <TabsContent value="career" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">💼 Prospek Karier</h3>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-4">🚀 Peluang Karier Setelah Lulus:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {training.careerProspects.map((career, idx) => (
                            <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                              <Briefcase className="h-5 w-5 text-[#4597a7] mt-0.5 flex-shrink-0" />
                              <div>
                                <h5 className="font-medium text-gray-900">{career}</h5>
                                <p className="text-sm text-gray-600 mt-1">
                                  {career === "Graphic Designer di agency atau perusahaan" && "Gaji: Rp 4-8 juta/bulan"}
                                  {career === "Freelance Designer untuk UMKM" && "Penghasilan: Rp 2-10 juta/bulan"}
                                  {career === "Social Media Content Creator" && "Gaji: Rp 3-6 juta/bulan"}
                                  {career === "Print Production Specialist" && "Gaji: Rp 4-7 juta/bulan"}
                                  {career === "Brand Identity Designer" && "Gaji: Rp 5-12 juta/bulan"}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="font-semibold text-green-900 mb-3">📈 Statistik Alumni:</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-green-700">85%</div>
                            <div className="text-sm text-green-600">Mendapat kerja dalam 3 bulan</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-700">92%</div>
                            <div className="text-sm text-green-600">Puas dengan karier baru</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-700">78%</div>
                            <div className="text-sm text-green-600">Naik gaji setelah sertifikasi</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📝 Pendaftaran</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Harga Pelatihan:</span>
                      <span className="text-2xl font-bold text-[#4597a7]">{training.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Biaya Sertifikasi:</span>
                      <span className="font-medium text-gray-900">{training.certificationFee}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Total:</span>
                        <span className="text-xl font-bold text-[#4597a7]">
                          Rp {(parseInt(training.price.replace(/[^\d]/g, '')) + parseInt(training.certificationFee.replace(/[^\d]/g, ''))).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Kuota:</span>
                      <span className="font-medium">{training.quota}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Mulai:</span>
                      <span className="font-medium">{training.startDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">{training.mode}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Link href="/training/registration/3" className="block">
                    <Button
                      className="w-full bg-[#4597a7] hover:bg-[#4597a7]/90 text-lg py-3"
                      disabled={training.status === 'Penuh'}
                    >
                      <BookOpen className="h-5 w-5 mr-2" />
                      {training.status === 'Penuh' ? 'Pelatihan Penuh' : 'Mulai Pendaftaran'}
                    </Button>
                    </Link>
                    <Link href="/training/sertification" className="block">
                    <Button variant="outline" className="w-full border-[#4597a7] text-[#4597a7] bg-transparent">
                      <Award className="h-5 w-5 mr-2" />
                      Ajukan Sertifikasi
                    </Button>
                    </Link>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-xs text-yellow-800">
                      💡 <strong>Info:</strong> Biaya administrasi dan jadwal uji akan diinformasikan sebelum pelatihan selesai
                    </p>
                  </div>
                </CardContent>
              </Card>
              {/* Contact Support */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">💬 Butuh Bantuan?</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-[#4597a7]" />
                      <span>+62 123 456 7890</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-[#4597a7]" />
                      <span>training@disakarya.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-[#4597a7]" />
                      <span>Senin-Jumat, 09:00-17:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Share */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">📤 Bagikan</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      📱 WhatsApp
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      📧 Email
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      🔗 Link
                    </Button>
                  </div>
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
            <Link href="/training">
              <Button variant="outline" className="border-[#4597a7] text-[#4599a7] bg-transparent">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Kembali ke Daftar Pelatihan
              </Button>
            </Link>
            <div className="text-sm text-gray-500">Detail Pelatihan & Sertifikasi</div>
          </div>
        </div>
      </section>
    </div>
  )
}
