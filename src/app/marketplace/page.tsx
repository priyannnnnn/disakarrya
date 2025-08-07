'use client'

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingBag, Search, Star, Heart, Share2, Filter, Ear, Accessibility, Brain, Users, Award, TrendingUp, DollarSign, Plus, ShoppingCart, MessageSquare, CheckCircle, Camera, Package, Truck, CreditCard, Eye, ArrowLeft, ArrowRight, MapPin, Phone, User, Home } from 'lucide-react'
import Image from "next/image"

type ViewType = 'marketplace' | 'cart' | 'add-product' | 'checkout' | 'shipping' | 'payment' | 'success'

export default function MarketplaceFlow() {
  const [currentView, setCurrentView] = useState<ViewType>('marketplace')
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tas Rajut Handmade",
      seller: "Sari Kreatif",
      price: 125000,
      quantity: 1,
      image: "/images/tas.png?height=80&width=80"
    }
  ])

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
      alumniCourse: "Keterampilan Menjahit",
      verified: true,
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
      alumniCourse: "Entrepreneurship",
      verified: true,
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
      alumniCourse: "Desain Produk",
      verified: false,
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
      alumniCourse: "Kuliner & Bisnis",
      verified: true,
    },
  ]

  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        name: product.name,
        seller: product.seller,
        price: parseInt(product.price.replace(/[^\d]/g, '')),
        quantity: 1,
        image: product.image
      }])
    }
    setCurrentView('cart')
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const renderHeader = () => (
    <div className="bg-[#4597a7] text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {currentView !== 'marketplace' && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20"
              onClick={() => setCurrentView('marketplace')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali
            </Button>
          )}
          <h1 className="text-xl font-bold">
            {currentView === 'marketplace' && 'Marketplace DISAKARYA'}
            {currentView === 'cart' && 'Keranjang Belanja'}
            {currentView === 'add-product' && 'Tambah Produk'}
            {currentView === 'checkout' && 'Checkout'}
            {currentView === 'shipping' && 'Alamat Pengiriman'}
            {currentView === 'payment' && 'Pembayaran'}
            {currentView === 'success' && 'Pesanan Berhasil'}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/20 relative"
            onClick={() => setCurrentView('cart')}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItems.length > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </div>
  )

  const renderMarketplace = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#4597a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              🛒 MARKETPLACE DISABILITAS
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Marketplace Produk & Jasa
              <span className="text-white/90"> Karya Disabilitas</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Platform jual beli yang memfasilitasi penjualan produk UMKM dan jasa karya disabilitas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#4597a7] hover:bg-gray-100"
                onClick={() => setCurrentView('add-product')}
              >
                <Plus className="h-5 w-5 mr-2" />
                Tambah Produk
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#4597a7] bg-transparent"
                onClick={() => setCurrentView('cart')}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Keranjang ({cartItems.reduce((total, item) => total + item.quantity, 0)})
              </Button>
            </div>
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
                  <div className="absolute top-4 left-4 space-y-2">
                    <Badge className="bg-[#4597a7] text-white">{product.badge}</Badge>
                    {product.verified && (
                      <Badge className="bg-green-500 text-white flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Alumni
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600">oleh {product.seller}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                        {product.alumniCourse && (
                          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                            {product.alumniCourse}
                          </Badge>
                        )}
                      </div>
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
                      <Button 
                        size="sm" 
                        className="bg-[#4597a7] hover:bg-[#4597a7]/90"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
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
    </div>
  )

  const renderCart = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingCart className="h-6 w-6 mr-2" />
              Keranjang Belanja ({cartItems.length} item)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Keranjang Kosong</h3>
                <p className="text-gray-600 mb-4">Belum ada produk di keranjang Anda</p>
                <Button 
                  className="bg-[#4597a7] hover:bg-[#4597a7]/90"
                  onClick={() => setCurrentView('marketplace')}
                >
                  Mulai Belanja
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">oleh {item.seller}</p>
                      <p className="text-lg font-bold text-[#4597a7]">
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="px-3 py-1 border rounded">{item.quantity}</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">
                        Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                      </p>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-red-500 hover:text-red-700"
                        onClick={() => updateQuantity(item.id, 0)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-[#4597a7]">
                      Rp {getTotalPrice().toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setCurrentView('marketplace')}
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Lanjut Belanja
                    </Button>
                    <Button 
                      className="w-full bg-[#4597a7] hover:bg-[#4597a7]/90"
                      onClick={() => setCurrentView('checkout')}
                    >
                      Checkout
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderAddProduct = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Tambah Produk Baru
            </CardTitle>
            <p className="text-gray-600 text-center">
              Jual produk atau jasa Anda di marketplace DISAKARYA
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Produk
                </label>
                <Input placeholder="Masukkan nama produk" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kategori produk" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kerajinan">Kerajinan Tangan</SelectItem>
                    <SelectItem value="kuliner">Kuliner</SelectItem>
                    <SelectItem value="jasa">Jasa</SelectItem>
                    <SelectItem value="digital">Produk Digital</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harga
                </label>
                <Input placeholder="Rp 0" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stok
                </label>
                <Input placeholder="Jumlah stok" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Status produk" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ready">Siap Jual</SelectItem>
                    <SelectItem value="preorder">Pre-order</SelectItem>
                    <SelectItem value="limited">Produksi Terbatas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi Produk
              </label>
              <Textarea
                placeholder="Jelaskan produk Anda secara detail..."
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foto Produk
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Upload foto produk dari berbagai sudut</p>
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Pilih Foto
                </Button>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button 
                variant="outline"
                onClick={() => setCurrentView('marketplace')}
              >
                Batal
              </Button>
              <Button 
                className="bg-[#4597a7] hover:bg-[#4597a7]/90"
                onClick={() => {
                  // Simulate product creation
                  alert('Produk berhasil ditambahkan!')
                  setCurrentView('marketplace')
                }}
              >
                Publikasi Produk
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderCheckout = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Ringkasan Pesanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-[#4597a7]">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </p>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold text-[#4597a7]">
                      Rp {getTotalPrice().toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checkout Form */}
          <Card>
            <CardHeader>
              <CardTitle>Informasi Pengiriman</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <Input placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <Input placeholder="08xxxxxxxxxx" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Lengkap
                </label>
                <Textarea placeholder="Masukkan alamat lengkap" rows={3} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kota
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kota" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jakarta">Jakarta</SelectItem>
                      <SelectItem value="bandung">Bandung</SelectItem>
                      <SelectItem value="surabaya">Surabaya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kode Pos
                  </label>
                  <Input placeholder="12345" />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentView('cart')}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Button>
                <Button 
                  className="bg-[#4597a7] hover:bg-[#4597a7]/90"
                  onClick={() => setCurrentView('payment')}
                >
                  Lanjut ke Pembayaran
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderPayment = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Metode Pembayaran</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 border-[#4597a7]">
                <CardContent className="p-4 text-center">
                  <CreditCard className="h-8 w-8 text-[#4597a7] mx-auto mb-2" />
                  <h3 className="font-semibold">Transfer Bank</h3>
                  <p className="text-sm text-gray-600">BCA, Mandiri, BNI</p>
                </CardContent>
              </Card>
              
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <Phone className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <h3 className="font-semibold">E-Wallet</h3>
                  <p className="text-sm text-gray-600">GoPay, OVO, DANA</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Transfer Bank BCA</h4>
              <p className="text-sm text-gray-600 mb-2">Nomor Rekening: 1234567890</p>
              <p className="text-sm text-gray-600 mb-2">Atas Nama: DISAKARYA MARKETPLACE</p>
              <p className="text-lg font-bold text-[#4597a7]">
                Total: Rp {getTotalPrice().toLocaleString('id-ID')}
              </p>
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline"
                onClick={() => setCurrentView('checkout')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
              <Button 
                className="bg-[#4597a7] hover:bg-[#4597a7]/90"
                onClick={() => setCurrentView('success')}
              >
                Konfirmasi Pembayaran
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pesanan Berhasil!</h2>
            <p className="text-gray-600 mb-6">
              Terima kasih telah berbelanja di DISAKARYA Marketplace. 
              Pesanan Anda sedang diproses dan akan segera dikirim.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Detail Pesanan</h3>
              <p className="text-sm text-gray-600">Order ID: #DSK-2025-001</p>
              <p className="text-sm text-gray-600">Total: Rp {getTotalPrice().toLocaleString('id-ID')}</p>
              <p className="text-sm text-gray-600">Status: Menunggu Konfirmasi Pembayaran</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                onClick={() => {
                  setCartItems([])
                  setCurrentView('marketplace')
                }}
              >
                <Home className="h-4 w-4 mr-2" />
                Kembali ke Beranda
              </Button>
              <Button className="bg-[#4597a7] hover:bg-[#4597a7]/90">
                <Package className="h-4 w-4 mr-2" />
                Lacak Pesanan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {renderHeader()}
      
      {currentView === 'marketplace' && renderMarketplace()}
      {currentView === 'cart' && renderCart()}
      {currentView === 'add-product' && renderAddProduct()}
      {currentView === 'checkout' && renderCheckout()}
      {currentView === 'payment' && renderPayment()}
      {currentView === 'success' && renderSuccess()}
    </div>
  )
}
