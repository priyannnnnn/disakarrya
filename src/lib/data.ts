export interface InstructorType {
  id: number
  name: string
  position: string
  photo: string
  certifications: string[]
  experience: string
  specialties: string[]
  education: string
  additionalCerts: string[]
  projects: string[]
  portfolio: string
  linkedin: string
  workHistory: string[]
}

export const instructors: InstructorType[] = [
  {
    id: 1,
    name: "Dian Ayu Rahayu, S.Sn.",
    position: "Lead Designer – Inklusiv.ID Studio",
    photo: "/placeholder.svg?height=120&width=120",
    certifications: ["Certified Adobe Graphic Designer", "Mentor Desain Inklusif"],
    experience: "5+ tahun",
    specialties: [
      "Desain Grafis (Adobe Photoshop, Illustrator, Canva)",
      "Branding UMKM & Sosial",
      "Aksesibilitas Visual",
      "Mentoring Desain untuk Tunarungu",
    ],
    education: "S.Sn. – Desain Komunikasi Visual, ISI Yogyakarta",
    additionalCerts: [
      "Adobe Certified Professional – Graphic Design & Illustration",
      "Sertifikat Pelatih Inklusif, Kementerian Sosial",
    ],
    projects: [
      'Kampanye visual "KerjaBisa" untuk Hari Disabilitas Internasional',
      'Modul visual "Desain Inklusif untuk Semua" (2022)',
      "Speaker & Trainer di 12+ workshop nasional",
    ],
    portfolio: "www.dianayuportfolio.com",
    linkedin: "linkedin.com/in/dianayurahayu",
    workHistory: [
      "2020–sekarang: Lead Designer di Inklusiv.ID, menangani desain kampanye inklusi nasional",
      "2017–2020: Freelance Designer untuk UMKM dan komunitas disabilitas",
      "2015–2017: Instruktur Desain di Sekolah Luar Biasa YPAB",
    ],
  },
  {
    id: 2,
    name: "Ahmad Rizki Pratama, S.Kom.",
    position: "Senior Frontend Developer – TechForAll",
    photo: "/placeholder.svg?height=120&width=120",
    certifications: ["Google Developer Expert", "Accessibility Specialist"],
    experience: "7+ tahun",
    specialties: ["React.js", "Accessible Web Design", "Progressive Web Apps", "Inclusive UX"],
    education: "S.Kom. – Teknik Informatika, ITB",
    additionalCerts: ["Google Certified Professional Cloud Architect", "W3C Web Accessibility Specialist"],
    projects: [
      "Platform e-learning aksesibel untuk 10,000+ pengguna",
      "Aplikasi mobile banking inklusif",
      "Kontributor open-source accessibility tools",
    ],
    portfolio: "github.com/ahmadrizki",
    linkedin: "linkedin.com/in/ahmadrizkipratama",
    workHistory: [
      "2019–sekarang: Senior Frontend Developer di TechForAll",
      "2017–2019: Full Stack Developer di StartupInklusif",
      "2015–2017: Junior Developer di WebAccessible Co.",
    ],
  },
  {
    id: 3,
    name: "Maya Sari Dewi, S.Psi.",
    position: "Customer Experience Manager – InklusifCorp",
    photo: "/placeholder.svg?height=120&width=120",
    certifications: ["Certified Customer Service Professional", "Sign Language Interpreter"],
    experience: "6+ tahun",
    specialties: ["Customer Psychology", "Inclusive Communication", "Conflict Resolution", "Multi-channel Support"],
    education: "S.Psi. – Psikologi, Universitas Indonesia",
    additionalCerts: ["Certified Professional in Customer Experience", "Bahasa Isyarat Indonesia Level Advanced"],
    projects: [
      "Program pelatihan customer service inklusif nasional",
      "Panduan komunikasi dengan pelanggan disabilitas",
      "Trainer di 15+ perusahaan multinasional",
    ],
    portfolio: "mayasari-consulting.com",
    linkedin: "linkedin.com/in/mayasaridewi",
    workHistory: [
      "2020–sekarang: Customer Experience Manager di InklusifCorp",
      "2018–2020: Senior Customer Relations di ServiceExcellence",
      "2016–2018: Customer Service Trainer di TrainingHub",
    ],
  },
]

export const stats = [
  { number: "1200+", label: "Peserta Aktif", icon: "Users" },
  { number: "150+", label: "Kursus Tersedia", icon: "BookOpen" },
  { number: "85%", label: "Tingkat Kelulusan", icon: "Award" },
  { number: "95%", label: "Kepuasan Peserta", icon: "Star" },
]

export const services = [
  {
    title: "Pelatihan Digital Marketing",
    description: "Kuasai strategi pemasaran digital yang inklusif dan efektif untuk semua target audience",
    icon: "Target",
    features: ["Social Media Strategy", "Content Creation", "Analytics & Reporting", "Inclusive Marketing"],
  },
  {
    title: "Pengembangan Web Aksesibel",
    description: "Belajar membangun website dan aplikasi yang dapat diakses oleh semua pengguna",
    icon: "Globe",
    features: ["HTML Semantik", "CSS Accessibility", "JavaScript Inclusive", "Testing Tools"],
  },
  {
    title: "Customer Service Inklusif",
    description: "Tingkatkan kemampuan pelayanan pelanggan dengan pendekatan yang ramah disabilitas",
    icon: "MessageCircle",
    features: ["Communication Skills", "Conflict Resolution", "Multi-channel Support", "Empathy Training"],
  },
  {
    title: "Desain Grafis Inklusif",
    description: "Ciptakan desain yang menarik dan dapat diakses oleh semua pengguna",
    icon: "Zap",
    features: ["Color Accessibility", "Typography", "Visual Hierarchy", "Brand Identity"],
  },
  {
    title: "Data Analysis & Reporting",
    description: "Analisis data untuk mengoptimalkan strategi bisnis dan pemasaran",
    icon: "BarChart3",
    features: ["Excel Advanced", "Data Visualization", "Statistical Analysis", "Report Writing"],
  },
  {
    title: "Entrepreneurship Inklusif",
    description: "Bangun bisnis yang berkelanjutan dengan prinsip-prinsip inklusivitas",
    icon: "Building2",
    features: ["Business Planning", "Financial Management", "Market Research", "Inclusive Leadership"],
  },
]

export const courses = [
  {
    id: 1,
    title: "Digital Marketing untuk Pemula",
    description: "Pelajari dasar-dasar pemasaran digital dengan pendekatan inklusif",
    duration: "8 minggu",
    level: "Pemula",
    price: "Rp 750.000",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Dian Ayu Rahayu",
    rating: 4.8,
    students: 245,
    modules: ["Pengenalan Digital Marketing", "Social Media Strategy", "Content Creation", "Analytics & Reporting"],
  },
  {
    id: 2,
    title: "Web Development Aksesibel",
    description: "Bangun website yang dapat diakses oleh semua pengguna termasuk penyandang disabilitas",
    duration: "12 minggu",
    level: "Menengah",
    price: "Rp 1.200.000",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Ahmad Rizki Pratama",
    rating: 4.9,
    students: 189,
    modules: ["HTML Semantik", "CSS Accessibility", "JavaScript Inclusive", "Testing & Validation"],
  },
  {
    id: 3,
    title: "Customer Service Excellence",
    description: "Tingkatkan kemampuan pelayanan pelanggan dengan pendekatan inklusif",
    duration: "6 minggu",
    level: "Pemula",
    price: "Rp 650.000",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Maya Sari Dewi",
    rating: 4.7,
    students: 312,
    modules: ["Communication Skills", "Conflict Resolution", "Multi-channel Support", "Empathy Training"],
  },
  {
    id: 4,
    title: "Desain Grafis Inklusif",
    description: "Ciptakan desain yang menarik dan dapat diakses oleh semua pengguna",
    duration: "10 minggu",
    level: "Pemula",
    price: "Rp 900.000",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Dian Ayu Rahayu",
    rating: 4.8,
    students: 156,
    modules: ["Color Accessibility", "Typography", "Visual Hierarchy", "Brand Identity"],
  },
  {
    id: 5,
    title: "Data Analysis & Visualization",
    description: "Analisis data untuk mengoptimalkan strategi bisnis dan pemasaran",
    duration: "8 minggu",
    level: "Menengah",
    price: "Rp 850.000",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Ahmad Rizki Pratama",
    rating: 4.6,
    students: 98,
    modules: ["Excel Advanced", "Data Visualization", "Statistical Analysis", "Report Writing"],
  },
  {
    id: 6,
    title: "Entrepreneurship Inklusif",
    description: "Bangun bisnis yang berkelanjutan dengan prinsip-prinsip inklusivitas",
    duration: "14 minggu",
    level: "Lanjutan",
    price: "Rp 1.500.000",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Maya Sari Dewi",
    rating: 4.9,
    students: 67,
    modules: ["Business Planning", "Financial Management", "Market Research", "Inclusive Leadership"],
  },
]
