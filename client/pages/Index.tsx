import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Shield, Truck, Heart, Star, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Index() {
  const featuredProducts = [
    {
      id: 1,
      name: "Tulsi (Holy Basil)",
      price: "₹299",
      originalPrice: "₹399",
      image: "https://images.pexels.com/photos/32112349/pexels-photo-32112349.jpeg",
      category: "Sacred Plants",
      rating: 4.9,
      reviews: 246,
      isPopular: true
    },
    {
      id: 2,
      name: "Neem Tree Sapling",
      price: "₹799",
      originalPrice: null,
      image: "https://images.pexels.com/photos/5060587/pexels-photo-5060587.jpeg",
      category: "Medicinal Trees",
      rating: 4.8,
      reviews: 234,
      isPopular: false
    },
    {
      id: 3,
      name: "Marigold (Genda)",
      price: "₹149",
      originalPrice: "₹199",
      image: "https://images.pexels.com/photos/16745027/pexels-photo-16745027.jpeg",
      category: "Sacred Flowers",
      rating: 4.8,
      reviews: 342,
      isPopular: true
    },
    {
      id: 4,
      name: "Jasmine (Mogra)",
      price: "₹349",
      originalPrice: null,
      image: "https://images.pexels.com/photos/4066851/pexels-photo-4066851.jpeg",
      category: "Fragrant Flowers",
      rating: 4.9,
      reviews: 298,
      isPopular: false
    }
  ]

  const categories = [
    { name: "Sacred Plants", count: "50+ varieties", image: "https://images.pexels.com/photos/32112349/pexels-photo-32112349.jpeg", color: "bg-forest-100" },
    { name: "Medicinal Trees", count: "30+ saplings", image: "https://images.pexels.com/photos/5060587/pexels-photo-5060587.jpeg", color: "bg-sage-100" },
    { name: "Indian Flowers", count: "80+ varieties", image: "https://images.pexels.com/photos/16745027/pexels-photo-16745027.jpeg", color: "bg-earth-100" },
    { name: "Herb Seeds", count: "60+ types", image: "https://images.pexels.com/photos/32112349/pexels-photo-32112349.jpeg", color: "bg-moss-100" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-50 via-sage-50 to-moss-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-forest-100 text-forest-700 hover:bg-forest-200">
                  🌿 Welcome to Plantoria India
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-forest-800 leading-tight">
                 Indian Plants
                  <span className="text-forest-600"> for Your Home</span>
                </h1>
                <p className="text-lg text-forest-600 max-w-lg">
                  Discover authentic Indian plants - from sacred Tulsi and medicinal Neem to fragrant Jasmine and colorful Marigolds.
                  Traditional plants perfect for Indian homes and climate.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-forest-500 hover:bg-forest-600 text-white" asChild>
                  <Link to="/plants">
                    Shop Plants
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-forest-200 text-forest-700 hover:bg-forest-50" asChild>
                  <Link to="/care-guide">
                    Care Guide
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="bg-forest-500 p-2 rounded-full">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-forest-600">Plant Health Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-forest-500 p-2 rounded-full">
                      <Truck className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-forest-600">Free Shipping Over ₹999</span>
                  </div>
                </div>

                <div className="bg-forest-50 border border-forest-200 rounded-lg p-4">
                  <p className="text-sm text-forest-700">
                    <strong>Browse freely!</strong> Explore traditional Indian plants, Ayurvedic herbs, and sacred varieties.
                    <span className="text-forest-600"> Account only needed when you're ready to purchase.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/9707245/pexels-photo-9707245.jpeg"
                  alt="Beautiful plants collection"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-forest-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  New Arrivals!
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-forest-100 p-3 rounded-xl">
                    <Heart className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-800">10,000+</p>
                    <p className="text-sm text-forest-600">Happy Plant Parents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">Shop by Category</h2>
            <p className="text-forest-600 max-w-2xl mx-auto">
              Whether you're looking for low-maintenance house plants or vibrant outdoor varieties, 
              we have the perfect green friends for every space and skill level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const getRouteForCategory = (name: string) => {
                if (name.includes('House Plants')) return '/plants';
                if (name.includes('Trees')) return '/trees';
                if (name.includes('Flowering')) return '/flowers';
                if (name.includes('Seeds')) return '/seeds';
                return '/plants';
              };

              return (
                <Link
                  key={index}
                  to={getRouteForCategory(category.name)}
                >
                  <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`${category.color} rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform`}>
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-32 object-cover rounded-xl"
                        />
                      </div>
                      <h3 className="font-semibold text-forest-800 mb-2">{category.name}</h3>
                      <p className="text-sm text-forest-600 mb-3">{category.count}</p>
                      <div className="flex items-center text-forest-500 group-hover:text-forest-700 transition-colors">
                        <span className="text-sm font-medium">Shop now</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-forest-25">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-forest-800 mb-2">Featured Plants</h2>
              <p className="text-forest-600">Hand-picked favorites from our collection</p>
            </div>
            <Button variant="outline" className="border-forest-200 text-forest-700 hover:bg-forest-50" asChild>
              <Link to="/plants">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.isPopular && (
                      <Badge className="absolute top-2 left-2 bg-forest-500 hover:bg-forest-600">
                        Popular
                      </Badge>
                    )}
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-xs text-forest-500 mb-1">{product.category}</p>
                    <h3 className="font-semibold text-forest-800 mb-2 group-hover:text-forest-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-forest-600 ml-1">{product.rating}</span>
                      </div>
                      <span className="text-xs text-forest-500 ml-2">({product.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-forest-800">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-forest-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="bg-forest-500 hover:bg-forest-600">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">Why Choose Plantoria?</h2>
            <p className="text-forest-600 max-w-2xl mx-auto">
              We're passionate about plants and committed to helping you create your perfect green space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-forest-600" />
              </div>
              <h3 className="font-semibold text-forest-800 mb-2">Plant Health Guarantee</h3>
              <p className="text-forest-600 text-sm">
                Every plant comes with our 30-day health guarantee. If your plant doesn't thrive, we'll replace it.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-forest-600" />
              </div>
              <h3 className="font-semibold text-forest-800 mb-2">Expert Care Guidance</h3>
              <p className="text-forest-600 text-sm">
                Get personalized care tips and support from our plant experts to help your green friends flourish.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-forest-600" />
              </div>
              <h3 className="font-semibold text-forest-800 mb-2">Safe Plant Delivery</h3>
              <p className="text-forest-600 text-sm">
                Our special packaging ensures your plants arrive healthy and ready to thrive in their new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-forest-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">Join the Plant Community</h2>
            <p className="text-forest-600 mb-8">
              Get plant care tips, exclusive offers, and new arrival updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500"
              />
              <Button className="bg-forest-500 hover:bg-forest-600 px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-forest-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
