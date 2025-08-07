import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Users, Heart, Share2, ThumbsUp, Calendar, MapPin, Video, Award, Lightbulb, HandHeart, Star, Filter, Plus, CheckCircle, Camera, Play } from 'lucide-react'
import Image from "next/image"

export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Forum Diskusi",
      description: "Ruang berbagi pengalaman dan saling mendukung",
      icon: MessageCircle,
      members: "2,500+ anggota aktif",
    },
    {
      title: "Peer Support",
      description: "Sistem pendampingan sesama penyandang disabilitas",
      icon: HandHeart,
      members: "500+ mentor peer",
    },
    {
      title: "Webinar & Workshop",
      description: "Acara pembelajaran dan pengembangan diri rutin",
      icon: Video,
      members: "50+ acara per bulan",
    },
    {
      title: "Success Stories",
      description: "Inspirasi dari kisah sukses anggota komunitas",
      icon: Award,
      members: "100+ cerita inspiratif",
    },
  ]

  const testimonials = [
    {
      id: 1,
      author: "Andi Pratama",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Fisik",
      course: "Digital Marketing",
      mentor: "Bu Sarah",
      time: "2 jam yang lalu",
      rating: 5,
      content: "Alhamdulillah, hari ini berhasil menyelesaikan pelatihan Digital Marketing! Terima kasih untuk semua dukungan teman-teman di komunitas ini. Next step: apply untuk posisi Social Media Specialist 💪",
      likes: 24,
      comments: 8,
      image: "/images/traini.jpeg?height=200&width=400&text=Certificate",
      verified: true,
      location: "Jakarta",
    },
    {
      id: 2,
      author: "Sari Dewi",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Sensorik",
      course: "Web Development",
      mentor: "Pak Budi",
      time: "5 jam yang lalu",
      rating: 4,
      content: "Sharing tips untuk teman-teman tunarungu yang mau ikut interview kerja online. Pastikan koneksi internet stabil dan siapkan interpreter jika diperlukan. Ada yang punya pengalaman serupa?",
      likes: 18,
      comments: 12,
      image: null,
      verified: true,
      location: "Bandung",
    },
    {
      id: 3,
      author: "Budi Santoso",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Mental",
      course: "Entrepreneurship",
      mentor: "Bu Lisa",
      time: "1 hari yang lalu",
      rating: 5,
      content: "Produk aromaterapi buatan saya sudah terjual 50 botol di marketplace DISAKARYA! Terima kasih untuk feedback dan dukungan dari komunitas. Kalian luar biasa! 🙏",
      likes: 35,
      comments: 15,
      image: "/placeholder.svg?height=200&width=400&text=Aromatherapy+Products",
      verified: true,
      location: "Surabaya",
    },
  ]

  const upcomingEvents = [
    {
      title: "Workshop: Personal Branding untuk Disabilitas",
      date: "15 Januari 2025",
      time: "19:00 - 21:00 WIB",
      type: "Online",
      participants: 45,
      maxParticipants: 50,
    },
    {
      title: "Webinar: Hak-hak Pekerja Disabilitas",
      date: "20 Januari 2025",
      time: "14:00 - 16:00 WIB",
      type: "Hybrid",
      participants: 120,
      maxParticipants: 200,
    },
    {
      title: "Meetup: Entrepreneur Disabilitas Jakarta",
      date: "25 Januari 2025",
      time: "10:00 - 15:00 WIB",
      type: "Offline",
      participants: 25,
      maxParticipants: 30,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#4597a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                💬 FITUR 4: KOMUNITAS INKLUSIF
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Bergabung dengan
                <span className="text-white/90"> Komunitas Inklusif</span>
                <br />
                untuk Saling Mendukung
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Ruang aman dan suportif untuk berbagi pengalaman, memberikan testimoni, dan tumbuh bersama sesama
                penyandang disabilitas dalam perjalanan pengembangan diri dan karier.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100">
                  <Users className="h-5 w-5 mr-2" />
                  Bergabung Komunitas
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#4597a7] bg-transparent"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Mulai Diskusi
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/comm.png?height=300&width=500&text=Community+Support"
                alt="Komunitas saling mendukung penyandang disabilitas"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fitur <span className="text-[#4597a7]">Komunitas</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai cara untuk terhubung, belajar, dan berkembang bersama komunitas inklusif
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-[#4597a7]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {feature.members}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters & Add Testimonial */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Jenis Disabilitas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fisik">Fisik</SelectItem>
                  <SelectItem value="sensorik">Sensorik</SelectItem>
                  <SelectItem value="mental">Mental</SelectItem>
                  <SelectItem value="intelektual">Intelektual</SelectItem>
                  <SelectItem value="ganda">Ganda</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Kursus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                  <SelectItem value="graphic-design">Graphic Design</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Lokasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jakarta">Jakarta</SelectItem>
                  <SelectItem value="bandung">Bandung</SelectItem>
                  <SelectItem value="surabaya">Surabaya</SelectItem>
                  <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <Button className="bg-[#4597a7] hover:bg-[#4597a7]/90">
              <Plus className="h-4 w-4 mr-2" />
              Tambah Testimoni
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials & Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Testimoni & <span className="text-[#4597a7]">Cerita Sukses</span>
            </h2>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{testimonial.author}</h3>
                        {testimonial.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                        <Badge variant="outline" className="text-xs">
                          {testimonial.category}
                        </Badge>
                        <span className="text-sm text-gray-500">• {testimonial.time}</span>
                      </div>
                      
                      {/* Course and Rating Info */}
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                        <span>Kursus: <strong>{testimonial.course}</strong></span>
                        <span>Mentor: <strong>{testimonial.mentor}</strong></span>
                        <span>📍 {testimonial.location}</span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating
                                  ? "text-yellow-500 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({testimonial.rating}/5)</span>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>
                      
                      {testimonial.image && (
                        <div className="mb-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt="Testimonial image"
                            width={400}
                            height={200}
                            className="rounded-lg max-w-md"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <button className="flex items-center space-x-1 hover:text-[#4597a7] transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{testimonial.likes} Suka</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-[#4597a7] transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span>{testimonial.comments} Komentar</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-[#4597a7] transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span>Bagikan</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add Testimonial Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Bagikan Testimoni & Pengalaman Anda
              </CardTitle>
              <p className="text-gray-600 text-center">
                Ceritakan pengalaman Anda mengikuti pelatihan dan inspirasi untuk teman-teman lainnya
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Pelatihan
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih pelatihan yang diikuti" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                      <SelectItem value="graphic-design">Graphic Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Mentor
                  </label>
                  <Input placeholder="Nama mentor pelatihan" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating Pelatihan
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button key={rating} className="p-1">
                      <Star className="h-6 w-6 text-gray-300 hover:text-yellow-500 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Testimoni & Pengalaman
                </label>
                <Textarea
                  placeholder="Ceritakan pengalaman Anda mengikuti pelatihan, manfaat yang didapat, dan pesan untuk teman-teman lainnya..."
                  rows={6}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Foto/Video Pendukung (Opsional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload foto sertifikat, hasil karya, atau video singkat</p>
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Pilih File
                  </Button>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline">Simpan Draft</Button>
                <Button className="bg-[#4597a7] hover:bg-[#4597a7]/90">
                  Kirim Testimoni
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Acara <span className="text-[#4597a7]">Mendatang</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jangan lewatkan webinar, workshop, dan meetup yang akan memperkaya pengetahuan dan jaringan Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Badge className="bg-[#4597a7] text-white mb-2">{event.type}</Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {event.participants}/{event.maxParticipants} peserta
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#4597a7] h-2 rounded-full"
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                    <Button className="w-full bg-[#4597a7] hover:bg-[#4597a7]/90">
                      Daftar Sekarang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pedoman <span className="text-[#4597a7]">Komunitas</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aturan sederhana untuk menjaga komunitas tetap aman, suportif, dan inklusif
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Saling Menghormati</h3>
              <p className="text-gray-600">Hormati perbedaan dan pengalaman unik setiap anggota komunitas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Saling Mendukung</h3>
              <p className="text-gray-600">Berikan dukungan positif dan konstruktif kepada sesama anggota</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Berbagi Pengetahuan</h3>
              <p className="text-gray-600">Bagikan pengalaman dan pengetahuan untuk saling belajar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4597a7] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Bergabung dengan Komunitas Kami?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Temukan dukungan, inspirasi, dan peluang baru bersama ribuan anggota komunitas inklusif DISAKARYA
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100">
              <Users className="h-5 w-5 mr-2" />
              Bergabung Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4597a7] bg-transparent"
            >
              <Video className="h-5 w-5 mr-2" />
              Lihat Acara
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
