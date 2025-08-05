import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ShoppingBag,
  Search,
  Star,
  Heart,
  Share2,
  Filter,
  Ear,
  Accessibility,
  Brain,
  Users,
  Award,
  TrendingUp,
  DollarSign,
} from "lucide-react"
import Image from "next/image"

export default function MarketplacePage() {
  const disabilityCategories = [
    {
      type: "Sensorik",
      icon: Ear,
      examples: ["Kerajinan tangan", "Jasa terapis pijat", "Kuliner"],
      color: "bg-blue-100 text-blue-700",
    },
    {
      type: "Fisik",
      icon: Accessibility,
      examples: ["Produk rajutan", "Lukisan", "Desain digital"],
      color: "bg-green-100 text-green-700",
    },
    {
      type: "Intelektual",
      icon: Brain,
      examples: ["Mainan edukatif", "Hasil karya seni kolaboratif"],
      color: "bg-purple-100 text-purple-700",
    },
    {
      type: "Mental",
      icon: Heart,
      examples: ["Produk dari terapi seni", "Aromaterapi", "Kerajinan"],
      color: "bg-pink-100 text-pink-700",
    },
    {
      type: "Ganda",
      icon: Users,
      examples: ["Produk kolektif dari komunitas pelatihan"],
      color: "bg-orange-100 text-orange-700",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Tas Rajut Handmade",
      seller: "Sari Kreatif",
      category: "Fisik",
      price: "Rp 125.000",
      rating: 4.8,
      reviews: 24,
      image: "/images/tas.png?height=200&width=200&text=Tas+Rajut",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Aromaterapi Essential Oil",
      seller: "Healing Touch",
      category: "Mental",
      price: "Rp 85.000",
      rating: 4.9,
      reviews: 18,
      image: "/images/oil.png?height=200&width=200&text=Essential+Oil",
      badge: "Premium",
    },
    {
      id: 3,
      name: "Mainan Edukatif Kayu",
      seller: "Cerdas Bermain",
      category: "Intelektual",
      price: "Rp 95.000",
      rating: 4.7,
      reviews: 31,
      image: "/images/kayu.png?height=200&width=200&text=Mainan+Kayu",
      badge: "Eco-Friendly",
    },
    {
      id: 4,
      name: "Kue Kering Tradisional",
      seller: "Dapur Nusantara",
      category: "Sensorik",
      price: "Rp 45.000",
      rating: 4.6,
      reviews: 42,
      image: "/images/kue.png?height=200&width=200&text=Kue+Kering",
      badge: "Fresh",
    },
  ]

  const monetizationModels = [
    {
      title: "Komisi Penjualan",
      description: "5-10% dari setiap transaksi berhasil",
      icon: DollarSign,
    },
    {
      title: "Listing Fee Produk",
      description: "Biaya tayang produk mulai Rp 5.000/bulan",
      icon: ShoppingBag,
    },
    {
      title: "Toko Premium",
      description: "Fitur unggulan untuk kreator disabilitas",
      icon: Award,
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
                🛒 FITUR 3: MARKETPLACE DISABILITAS
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Marketplace Produk & Jasa
                <span className="text-white/90"> Karya Disabilitas</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Platform jual beli yang memfasilitasi penjualan produk UMKM dan jasa karya disabilitas melalui
                marketplace yang inklusif dan mendukung ekonomi mandiri.
              </p>

              {/* Product Search */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-lg mb-4">🔍 Cari Produk & Jasa</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Nama produk / jasa" className="bg-white text-gray-900" />
                  <Select>
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Kategori Disabilitas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sensorik">Sensorik</SelectItem>
                      <SelectItem value="fisik">Fisik</SelectItem>
                      <SelectItem value="intelektual">Intelektual</SelectItem>
                      <SelectItem value="mental">Mental</SelectItem>
                      <SelectItem value="ganda">Ganda</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Rentang Harga" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50000">Rp 0 - 50.000</SelectItem>
                      <SelectItem value="50000-100000">Rp 50.000 - 100.000</SelectItem>
                      <SelectItem value="100000-200000">Rp 100.000 - 200.000</SelectItem>
                      <SelectItem value="200000+">Rp 200.000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-white text-[#4597a7] hover:bg-gray-100">
                    <Search className="h-4 w-4 mr-2" />
                    Cari
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Jelajahi Produk
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#4597a7] bg-transparent"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Jadi Penjual
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/5.png?height=400&width=600&text=UMKM+Disabilitas+Products"
                alt="Produk UMKM karya penyandang disabilitas"
                width={600}
                height={400}
                className="w-full h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disability Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kategori Produk & <span className="text-[#4597a7]">Jasa</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beragam produk dan jasa berkualitas dari penyandang disabilitas berdasarkan jenis disabilitas
            </p>
          </div>
          <div className="space-y-8">
            {disabilityCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div
                        className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4`}
                      >
                        <category.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.type}</h3>
                    </div>
                    <div className="lg:col-span-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {category.examples.map((example, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                            <span className="text-gray-700 font-medium">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Produk <span className="text-[#4597a7]">Unggulan</span>
            </h2>
            <Button variant="outline" className="border-[#4597a7] text-[#4597a7] bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4597a7] text-white">{product.badge}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600">oleh {product.seller}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {product.category}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} ulasan)</span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xl font-bold text-[#4597a7]">{product.price}</div>
                      <Button size="sm" className="bg-[#4597a7] hover:bg-[#4597a7]/90">
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Beli
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Model <span className="text-[#4597a7]">Monetisasi</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan untuk memaksimalkan pendapatan dari karya dan jasa Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monetizationModels.map((model, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <model.icon className="h-8 w-8 text-[#4597a7]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{model.title}</h3>
                  <p className="text-gray-600">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dampak <span className="text-[#4597a7]">Positif</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ekonomi Mandiri Penyandang Disabilitas</h3>
              <p className="text-gray-600">
                Mendukung kemandirian ekonomi melalui platform yang memudahkan penjualan produk dan jasa
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4597a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#4597a7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visibilitas Karya Kreatif Nasional</h3>
              <p className="text-gray-600">
                Meningkatkan visibilitas dan apresiasi terhadap karya kreatif penyandang disabilitas di tingkat nasional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4597a7] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Memulai Bisnis Online Anda?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan penjual lainnya dan wujudkan kemandirian ekonomi melalui marketplace inklusif
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4597a7] hover:bg-gray-100">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Mulai Jual Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4597a7] bg-transparent"
            >
              <Users className="h-5 w-5 mr-2" />
              Bergabung Komunitas
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
