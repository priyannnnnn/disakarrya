import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { courses } from "@/lib/data"
import { Star, Users, Clock, Play } from "lucide-react"
import Image from "next/image"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#4597A7] to-[#5ba3b3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-6">KURSUS PELATIHAN</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Kursus <span className="text-[#B8E6E6]">Digital</span> Terbaik
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Pilih dari berbagai kursus yang dirancang khusus untuk mengembangkan keterampilan digital Anda dengan
            pendekatan inklusif dan mentor berpengalaman.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4597A7] text-white">{course.level}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">{course.duration}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students} siswa</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Instruktur: {course.instructor}</p>
                      <div className="space-y-1">
                        {course.modules.slice(0, 3).map((module, idx) => (
                          <div key={idx} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-[#4597A7] rounded-full mr-2"></div>
                            {module}
                          </div>
                        ))}
                        {course.modules.length > 3 && (
                          <div className="text-xs text-gray-500">+{course.modules.length - 3} modul lainnya</div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-2xl font-bold text-[#4597A7]">{course.price}</div>
                      <Button className="bg-[#4597A7] hover:bg-[#4597A7]/90">
                        <Play className="h-4 w-4 mr-2" />
                        Mulai Belajar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Tidak Menemukan Kursus yang Sesuai?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Hubungi tim kami untuk konsultasi gratis dan rekomendasi kursus yang paling sesuai dengan kebutuhan dan
            tujuan karier Anda.
          </p>
          <Button size="lg" className="bg-[#4597A7] hover:bg-[#4597A7]/90">
            Konsultasi Gratis
          </Button>
        </div>
      </section>
    </div>
  )
}
