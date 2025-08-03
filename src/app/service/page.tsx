import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Globe, MessageCircle, Zap, BarChart3, Building2 } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Pelatihan Digital Marketing",
      description: "Kuasai strategi pemasaran digital yang inklusif dan efektif untuk semua target audience",
      icon: Target,
      features: ["Social Media Strategy", "Content Creation", "Analytics & Reporting", "Inclusive Marketing"],
    },
    {
      title: "Pengembangan Web Aksesibel",
      description: "Belajar membangun website dan aplikasi yang dapat diakses oleh semua pengguna",
      icon: Globe,
      features: ["HTML Semantik", "CSS Accessibility", "JavaScript Inclusive", "Testing Tools"],
    },
    {
      title: "Customer Service Inklusif",
      description: "Tingkatkan kemampuan pelayanan pelanggan dengan pendekatan yang ramah disabilitas",
      icon: MessageCircle,
      features: ["Communication Skills", "Conflict Resolution", "Multi-channel Support", "Empathy Training"],
    },
    {
      title: "Desain Grafis Inklusif",
      description: "Ciptakan desain yang menarik dan dapat diakses oleh semua pengguna",
      icon: Zap,
      features: ["Color Accessibility", "Typography", "Visual Hierarchy", "Brand Identity"],
    },
    {
      title: "Data Analysis & Reporting",
      description: "Analisis data untuk mengoptimalkan strategi bisnis dan pemasaran",
      icon: BarChart3,
      features: ["Excel Advanced", "Data Visualization", "Statistical Analysis", "Report Writing"],
    },
    {
      title: "Entrepreneurship Inklusif",
      description: "Bangun bisnis yang berkelanjutan dengan prinsip-prinsip inklusivitas",
      icon: Building2,
      features: ["Business Planning", "Financial Management", "Market Research", "Inclusive Leadership"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#4597A7] to-[#5ba3b3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-6">LAYANAN PELATIHAN</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Program Pelatihan <span className="text-[#B8E6E6]">Unggulan</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Berbagai program pelatihan yang dirancang khusus untuk mengembangkan kompetensi digital penyandang
            disabilitas dengan pendekatan yang personal dan inklusif.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#4597A7] transition-colors">
                    <service.icon className="h-8 w-8 text-[#4597A7] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4597A7] mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[#4597A7] text-[#4597A7] hover:bg-[#4597A7] hover:text-white bg-transparent"
                  >
                    Mulai Belajar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-[#4597A7]">Tambahan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dukungan komprehensif untuk memastikan kesuksesan pembelajaran dan karier Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[#4597A7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Konsultasi Karier</h3>
              <p className="text-gray-600">
                Bimbingan personal untuk merencanakan jalur karier yang sesuai dengan kemampuan dan minat Anda
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-[#4597A7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Job Placement</h3>
              <p className="text-gray-600">
                Bantuan penempatan kerja dengan jaringan perusahaan partner yang mendukung inklusi disabilitas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-[#4597A7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mentoring 1-on-1</h3>
              <p className="text-gray-600">
                Sesi mentoring personal dengan instruktur berpengalaman untuk pembelajaran yang lebih intensif
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#4597A7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Komunitas Online</h3>
              <p className="text-gray-600">
                Akses ke komunitas online untuk networking, sharing pengalaman, dan dukungan sesama peserta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4597A7] to-[#5ba3b3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Mengembangkan Keterampilan Digital Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Pilih program pelatihan yang sesuai dengan kebutuhan dan tujuan karier Anda. Tim kami siap membantu Anda
            menemukan jalur pembelajaran yang tepat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4597A7] hover:bg-gray-100">
              Konsultasi Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4597A7] bg-transparent"
            >
              Lihat Semua Kursus
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
