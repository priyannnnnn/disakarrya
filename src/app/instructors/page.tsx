import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { instructors } from "@/lib/data"
import InstructorProfile from "@/components/instructor-profile"

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#4597A7] to-[#5ba3b3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-6">TIM INSTRUKTUR</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Bertemu dengan <span className="text-[#B8E6E6]">Mentor</span> Berpengalaman
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Instruktur profesional dengan CV lengkap, portofolio nyata, dan komitmen terhadap pendidikan inklusif.
            Setiap mentor memiliki pengalaman mendalam dalam bidangnya dan dedikasi untuk membimbing peserta mencapai
            kesuksesan.
          </p>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-6">
                    <AvatarImage src={instructor.photo || "/placeholder.svg"} alt={instructor.name} />
                    <AvatarFallback className="text-lg">
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                  <p className="text-[#4597A7] font-medium mb-2">{instructor.position}</p>
                  <p className="text-sm text-gray-600 mb-4">{instructor.experience} pengalaman</p>
                  <div className="space-y-2 mb-6">
                    {instructor.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-[#4597A7] hover:bg-[#4597A7]/90">Lihat CV Lengkap</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Profil Instruktur</DialogTitle>
                        <DialogDescription>CV lengkap dan pengalaman profesional</DialogDescription>
                      </DialogHeader>
                      <InstructorProfile instructor={instructor} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Instructors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-[#4597A7]">Instruktur</span> Kami?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap instruktur dipilih berdasarkan keahlian, pengalaman, dan komitmen terhadap pendidikan inklusif
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="w-8 h-8 bg-[#4597A7] text-white rounded-full flex items-center justify-center">
                  ✓
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bersertifikat Profesional</h3>
              <p className="text-gray-600 text-sm">Memiliki sertifikasi industri dan pengalaman praktis di bidangnya</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="w-8 h-8 bg-[#4597A7] text-white rounded-full flex items-center justify-center">
                  ★
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pengalaman Inklusif</h3>
              <p className="text-gray-600 text-sm">
                Berpengalaman dalam pendidikan dan pelatihan untuk penyandang disabilitas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="w-8 h-8 bg-[#4597A7] text-white rounded-full flex items-center justify-center">
                  ♥
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pendekatan Personal</h3>
              <p className="text-gray-600 text-sm">
                Memberikan perhatian individual dan menyesuaikan metode pembelajaran
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="w-8 h-8 bg-[#4597A7] text-white rounded-full flex items-center justify-center">
                  →
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hasil Terukur</h3>
              <p className="text-gray-600 text-sm">Track record yang terbukti dalam menghasilkan lulusan yang sukses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4597A7] to-[#5ba3b3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Belajar dari Para Ahli?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan peserta yang telah merasakan pengalaman belajar berkualitas dengan instruktur
            terbaik kami
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4597A7] hover:bg-gray-100">
              Mulai Belajar Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4597A7] bg-transparent"
            >
              Konsultasi dengan Mentor
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
