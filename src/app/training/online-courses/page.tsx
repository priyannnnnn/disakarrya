import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, Search, Filter, Clock, Users, Star, ChevronLeft, Play, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OnlineCoursesPage() {
  const courses = [
    // 🧠 Disabilitas Intelektual
    {
      id: 1,
      title: "Dasar Microsoft Office (Word, Excel, PowerPoint)",
      category: "Intelektual",
      level: "Dasar",
      duration: "8 minggu",
      students: 189,
      rating: 4.8,
      price: "Rp 650.000",
      mentor: "Ahmad Rizki Pratama, S.Kom.",
      image: "/images/ms.png?height=200&width=300&text=MS+Office",
      accessibility: ["Pembelajaran berulang", "Modul sederhana", "Audio panduan", "Visual aids"],
      description: "Menguasai alat kerja dasar di dunia perkantoran dengan pendekatan yang mudah dipahami dan praktis",
      modules: [
        "Pengenalan Interface",
        "Microsoft Word Dasar",
        "Excel untuk Pemula",
        "PowerPoint Sederhana",
        "Praktik Dokumen Kerja",
      ],
      targetDisability: "🧠 Disabilitas Intelektual",
      learningGoal: "Menguasai alat kerja dasar di dunia perkantoran",
      output: "Bisa membuat dokumen, laporan sederhana, dan presentasi",
    },
    {
      id: 2,
      title: "Keterampilan Wirausaha UMKM (Produksi & Pemasaran Sederhana)",
      category: "Intelektual",
      level: "Dasar",
      duration: "6 minggu",
      students: 156,
      rating: 4.7,
      price: "Rp 550.000",
      mentor: "Maya Sari Dewi, S.Psi.",
      image: "/images/wirausaha.png?height=200&width=300&text=UMKM+Entrepreneurship",
      accessibility: ["Pembelajaran praktis", "Step-by-step guide", "Contoh nyata", "Pendampingan intensif"],
      description: "Mendorong kewirausahaan mandiri dengan fokus pada produksi dan pemasaran sederhana",
      modules: [
        "Ide Produk Sederhana",
        "Proses Produksi",
        "Pemasaran WhatsApp",
        "Instagram untuk Bisnis",
        "Manajemen Keuangan Dasar",
      ],
      targetDisability: "🧠 Disabilitas Intelektual",
      learningGoal: "Mendorong kewirausahaan mandiri",
      output: "Membuat produk sederhana dan menjual via WhatsApp/Instagram",
    },
    {
      id: 3,
      title: "Pelatihan Karyawan Toko (Frontliner & Etika Pelayanan)",
      category: "Intelektual",
      level: "Dasar",
      duration: "4 minggu",
      students: 98,
      rating: 4.6,
      price: "Rp 450.000",
      mentor: "Sari Indah Permata, M.Pd.",
      image: "/images/karyawan.png?height=200&width=300&text=Store+Employee",
      accessibility: ["Simulasi praktik", "Role playing", "Panduan visual", "Repetisi materi"],
      description: "Siap kerja sebagai staf toko atau swalayan dengan etika pelayanan yang baik",
      modules: ["Etika Pelayanan", "Pengenalan Produk", "Kasir Sederhana", "Komunikasi Pelanggan", "Simulasi Kerja"],
      targetDisability: "🧠 Disabilitas Intelektual",
      learningGoal: "Siap kerja sebagai staf toko atau swalayan",
      output: "Simulasi pelayanan, tata krama, dan mengenal produk",
    },

    // 👂 Disabilitas Rungu
    {
      id: 4,
      title: "Desain Grafis Dasar (Canva & Figma)",
      category: "Rungu",
      level: "Dasar",
      duration: "6 minggu",
      students: 245,
      rating: 4.9,
      price: "Rp 750.000",
      mentor: "Dian Ayu Rahayu, S.Sn.",
      image: "/images/grafis.png?height=200&width=300&text=Graphic+Design",
      accessibility: ["Bahasa isyarat", "Subtitle lengkap", "Visual tutorial", "Text-based learning"],
      description: "Mengembangkan kreativitas visual dengan tools desain modern",
      modules: ["Pengenalan Canva", "Prinsip Desain Visual", "Figma Basics", "Branding Sederhana", "Portfolio Desain"],
      targetDisability: "👂 Disabilitas Rungu",
      learningGoal: "Mengembangkan kreativitas visual",
      output: "Poster, feed Instagram, branding sederhana",
    },
    {
      id: 5,
      title: "Video Editing Dasar (CapCut & VN App)",
      category: "Rungu",
      level: "Dasar",
      duration: "5 minggu",
      students: 167,
      rating: 4.8,
      price: "Rp 650.000",
      mentor: "Budi Santoso, M.T.",
      image: "/images/vidio-editing.png?height=200&width=300&text=Video+Editing",
      accessibility: ["Visual learning", "Bahasa isyarat", "Step-by-step demo", "Template provided"],
      description: "Membuat konten visual untuk media sosial dengan aplikasi mobile",
      modules: ["Pengenalan CapCut", "Basic Editing", "VN App Advanced", "Motion Graphics", "Export & Sharing"],
      targetDisability: "👂 Disabilitas Rungu",
      learningGoal: "Membuat konten visual untuk media sosial",
      output: "Video promosi produk atau kampanye sosial",
    },
    {
      id: 6,
      title: "Pengenalan UI/UX Design",
      category: "Rungu",
      level: "Menengah",
      duration: "8 minggu",
      students: 89,
      rating: 4.7,
      price: "Rp 950.000",
      mentor: "Dr. Andi Wijaya, M.Psi.",
      image: "/images/ui-ux.png?height=200&width=300&text=UI+UX+Design",
      accessibility: ["Visual communication", "Interactive demos", "Bahasa isyarat", "Design thinking"],
      description: "Mengasah logika desain antarmuka dengan pendekatan user-centered",
      modules: ["Design Thinking", "User Research", "Wireframing", "Prototyping", "Usability Testing"],
      targetDisability: "👂 Disabilitas Rungu",
      learningGoal: "Mengasah logika desain antarmuka",
      output: "Mockup aplikasi sederhana untuk portofolio",
    },

    // 🧍‍♂️ Disabilitas Fisik
    {
      id: 7,
      title: "Digital Marketing Dasar (SEO, Sosial Media, Ads)",
      category: "Fisik",
      level: "Menengah",
      duration: "10 minggu",
      students: 312,
      rating: 4.8,
      price: "Rp 850.000",
      mentor: "Maya Sari Dewi, S.Psi.",
      image: "/images/digital-marketing.png?height=200&width=300&text=Digital+Marketing",
      accessibility: ["Keyboard navigation", "Voice commands", "Screen reader support", "Flexible timing"],
      description: "Menjadi spesialis pemasaran daring dengan fokus pada strategi digital",
      modules: [
        "SEO Fundamentals",
        "Social Media Strategy",
        "Facebook Ads",
        "Instagram Marketing",
        "Analytics & Reporting",
      ],
      targetDisability: "🧍‍♂️ Disabilitas Fisik",
      learningGoal: "Menjadi spesialis pemasaran daring",
      output: "Mengelola kampanye Instagram/Facebook",
    },
    {
      id: 8,
      title: "Penulisan Konten (Copywriting & Blogging)",
      category: "Fisik",
      level: "Dasar",
      duration: "6 minggu",
      students: 198,
      rating: 4.9,
      price: "Rp 650.000",
      mentor: "Ahmad Rizki Pratama, S.Kom.",
      image: "/images/copywriting.png?height=200&width=300&text=Content+Writing",
      accessibility: ["Voice typing", "Ergonomic setup", "Flexible schedule", "Remote learning"],
      description: "Bekerja sebagai penulis freelance dengan keterampilan copywriting profesional",
      modules: ["Copywriting Basics", "Blog Writing", "SEO Writing", "Social Media Copy", "Client Communication"],
      targetDisability: "🧍‍♂️ Disabilitas Fisik",
      learningGoal: "Bekerja sebagai penulis freelance",
      output: "Artikel untuk blog, caption produk, dan konten promosi",
    },
    {
      id: 9,
      title: "Administrasi Virtual (Google Workspace, Notion)",
      category: "Fisik",
      level: "Dasar",
      duration: "5 minggu",
      students: 134,
      rating: 4.7,
      price: "Rp 550.000",
      mentor: "Sari Indah Permata, M.Pd.",
      image: "/images/administrasi.png?height=200&width=300&text=Virtual+Admin",
      accessibility: ["Cloud-based tools", "Keyboard shortcuts", "Voice commands", "Remote collaboration"],
      description: "Menjadi admin virtual untuk UMKM/startup dengan tools modern",
      modules: [
        "Google Workspace",
        "Notion Basics",
        "Email Management",
        "Calendar Scheduling",
        "Document Organization",
      ],
      targetDisability: "🧍‍♂️ Disabilitas Fisik",
      learningGoal: "Menjadi admin virtual untuk UMKM/startup",
      output: "Mengelola email, jadwal, dan dokumen daring",
    },

    // 👁 Disabilitas Netra
    {
      id: 10,
      title: "Pelatihan JAWS & NVDA (Screen Reader Skill)",
      category: "Netra",
      level: "Dasar",
      duration: "8 minggu",
      students: 156,
      rating: 4.9,
      price: "Rp 750.000",
      mentor: "Budi Santoso, M.T.",
      image: "/placeholder.svg?height=200&width=300&text=Screen+Reader",
      accessibility: ["Audio-based learning", "JAWS compatible", "NVDA support", "Keyboard navigation"],
      description: "Navigasi komputer dengan screen reader untuk kemandirian digital",
      modules: ["JAWS Installation", "NVDA Basics", "Web Navigation", "Email Management", "Document Reading"],
      targetDisability: "👁 Disabilitas Netra",
      learningGoal: "Navigasi komputer dengan screen reader",
      output: "Mengakses email, mengetik, browsing mandiri",
    },
    {
      id: 11,
      title: "Pelatihan Call Center & Customer Service",
      category: "Netra",
      level: "Menengah",
      duration: "6 minggu",
      students: 89,
      rating: 4.8,
      price: "Rp 650.000",
      mentor: "Dr. Andi Wijaya, M.Psi.",
      image: "/placeholder.svg?height=200&width=300&text=Call+Center",
      accessibility: ["Audio training", "Voice simulation", "Headset optimization", "Call software"],
      description: "Bekerja sebagai agen CS berbasis suara dengan teknik komunikasi profesional",
      modules: ["Voice Training", "Call Handling", "Customer Psychology", "Complaint Resolution", "System Navigation"],
      targetDisability: "👁 Disabilitas Netra",
      learningGoal: "Bekerja sebagai agen CS berbasis suara",
      output: "Simulasi percakapan, manajemen panggilan masuk",
    },
    {
      id: 12,
      title: "Podcasting & Audio Editing",
      category: "Netra",
      level: "Menengah",
      duration: "7 minggu",
      students: 67,
      rating: 4.7,
      price: "Rp 750.000",
      mentor: "Maya Sari Dewi, S.Psi.",
      image: "/placeholder.svg?height=200&width=300&text=Podcasting",
      accessibility: ["Audio-focused", "Screen reader compatible", "Voice recording", "Sound editing"],
      description: "Membuat konten audio untuk edukasi atau hiburan dengan kualitas profesional",
      modules: ["Recording Techniques", "Audacity Basics", "Script Writing", "Audio Editing", "Publishing Platforms"],
      targetDisability: "👁 Disabilitas Netra",
      learningGoal: "Membuat konten audio untuk edukasi atau hiburan",
      output: "Merekam dan mengedit podcast pribadi",
    },

    // 🗣 Disabilitas Wicara
    {
      id: 13,
      title: "Animasi Sederhana & Motion Graphic",
      category: "Wicara",
      level: "Menengah",
      duration: "8 minggu",
      students: 78,
      rating: 4.8,
      price: "Rp 950.000",
      mentor: "Dian Ayu Rahayu, S.Sn.",
      image: "/images/animasi.png?height=200&width=300&text=Animation",
      accessibility: ["Visual expression", "Text-based communication", "Template library", "Non-verbal tutorials"],
      description: "Ekspresi ide tanpa komunikasi verbal melalui animasi dan motion graphics",
      modules: [
        "Animation Principles",
        "After Effects Basics",
        "Motion Graphics",
        "Character Animation",
        "Video Export",
      ],
      targetDisability: "🗣 Disabilitas Wicara",
      learningGoal: "Ekspresi ide tanpa komunikasi verbal",
      output: "Video animasi pendek untuk iklan atau edukasi",
    },
    {
      id: 14,
      title: "Pemrograman Dasar (HTML, CSS, JavaScript)",
      category: "Wicara",
      level: "Dasar",
      duration: "12 minggu",
      students: 145,
      rating: 4.9,
      price: "Rp 1.200.000",
      mentor: "Ahmad Rizki Pratama, S.Kom.",
      image: "/images/pemrograman.png?height=200&width=300&text=Programming",
      accessibility: ["Code-based learning", "Text communication", "Visual debugging", "Written documentation"],
      description: "Menjadi web developer pemula dengan fokus pada front-end development",
      modules: ["HTML Fundamentals", "CSS Styling", "JavaScript Basics", "Responsive Design", "Portfolio Website"],
      targetDisability: "🗣 Disabilitas Wicara",
      learningGoal: "Menjadi web developer pemula",
      output: "Website portofolio pribadi",
    },
    {
      id: 15,
      title: "Pembuatan Infografis & Presentasi Visual",
      category: "Wicara",
      level: "Dasar",
      duration: "5 minggu",
      students: 112,
      rating: 4.7,
      price: "Rp 550.000",
      mentor: "Sari Indah Permata, M.Pd.",
      image: "/images/infografis.png?height=200&width=300&text=Infographic",
      accessibility: ["Visual storytelling", "Template-based", "Drag-and-drop tools", "Non-verbal presentation"],
      description: "Menyampaikan informasi dalam bentuk visual yang menarik dan informatif",
      modules: [
        "Design Principles",
        "Data Visualization",
        "Infographic Tools",
        "Presentation Design",
        "Visual Storytelling",
      ],
      targetDisability: "🗣 Disabilitas Wicara",
      learningGoal: "Menyampaikan informasi dalam bentuk visual",
      output: "Desain infografis data atau proposal produk",
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
            <span className="text-gray-600">Course Online</span>
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
              🟨 STEP 2: PILIH COURSE ONLINE
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Pilih Course Online yang <span className="text-white/90">Sesuai untuk Anda</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Semua course online dilengkapi dengan fitur aksesibilitas lengkap dan dapat diakses 24/7
            </p>
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
                  <SelectValue placeholder="Jenis Disabilitas" />
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
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desain">Desain</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="komunikasi">Komunikasi</SelectItem>
                  <SelectItem value="bisnis">Bisnis</SelectItem>
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
              <h2 className="text-2xl font-bold text-gray-900">Course Online Tersedia</h2>
              <p className="text-gray-600">Menampilkan {courses.length} course yang sesuai</p>
            </div>
            <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filter Lanjutan
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={course.image || "/images/com.png"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4597a7] text-white">{course.level}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">{course.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-black/70 text-white">
                      <Globe className="h-3 w-3 mr-1" />
                      Online
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-[#4597a7]/10 text-[#4597a7] text-xs">{course.targetDisability}</Badge>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{course.description}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600">
                          <strong>🎯 Tujuan:</strong> {course.learningGoal}
                        </div>
                        <div className="text-xs text-gray-600">
                          <strong>📋 Output:</strong> {course.output}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Mentor: {course.mentor}</p>
                      <div className="flex flex-wrap gap-1">
                        {course.accessibility.slice(0, 2).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {feature}
                          </Badge>
                        ))}
                        {course.accessibility.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.accessibility.length - 2} lainnya
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
                        <Link href={`/training/detail/3`}>
                          <Button size="sm" className="bg-[#4597a7] hover:bg-[#4597a7]/90">
                            <Play className="h-4 w-4 mr-1" />
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

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/training/mode-selection">
              <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Kembali ke Pilih Mode
              </Button>
            </Link>
            <div className="text-sm text-gray-500">Langkah 2 dari 4 - Pilih Course Online</div>
          </div>
        </div>
      </section>
    </div>
  )
}
