import { useState } from 'react'
import { Filter, Grid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { ProductCard, Product } from '@/components/ProductCard'
import { BrowsingInfo } from '@/components/BrowsingInfo'

const sampleFlowers: Product[] = [
  {
    id: 1,
    name: "Marigold (Genda Phool)",
    price: "₹149",
    originalPrice: "₹199",
    image: "https://images.pexels.com/photos/16745027/pexels-photo-16745027.jpeg",
    category: "Sacred Flowers",
    rating: 4.8,
    reviews: 342,
    isPopular: true,
    isSale: true,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "6-inch pot, 8-12 inches tall",
    description: "Auspicious orange-yellow flowers used in Indian festivals and prayers. Blooms continuously."
  },
  {
    id: 2,
    name: "Hibiscus (Japa Kushuma)",
    price: "₹299",
    image: "https://images.pexels.com/photos/13076099/pexels-photo-13076099.jpeg",
    category: "Sacred Flowers",
    rating: 4.7,
    reviews: 256,
    isPopular: true,
    careLevel: "Medium",
    lightRequirement: "High",
    size: "8-inch pot, 1-2 feet tall",
    description: "Sacred red flowers offered to Goddess Durga. Also used in Ayurvedic medicine for hair care."
  },
  {
    id: 3,
    name: "Bougainvillea",
    price: "₹449",
    image: "https://images.pexels.com/photos/11570297/pexels-photo-11570297.jpeg",
    category: "Ornamental Climbers",
    rating: 4.6,
    reviews: 189,
    careLevel: "Medium",
    lightRequirement: "High",
    size: "10-inch pot, climbing vine",
    description: "Vibrant magenta bracts that bloom year-round in Indian climate. Perfect for walls and gardens."
  },
  {
    id: 4,
    name: "Jasmine (Mogra)",
    price: "₹349",
    originalPrice: "₹449",
    image: "https://images.pexels.com/photos/4066851/pexels-photo-4066851.jpeg",
    category: "Fragrant Flowers",
    rating: 4.9,
    reviews: 298,
    isSale: true,
    careLevel: "Medium",
    lightRequirement: "High",
    size: "6-inch pot, 1-2 feet tall",
    description: "Intensely fragrant white flowers, India's national flower. Used in garlands and perfumes."
  },
  {
    id: 5,
    name: "Begonia (Wax Begonia)",
    price: "$16.99",
    image: "/placeholder.svg",
    category: "Flowering Plants",
    rating: 4.6,
    reviews: 89,
    careLevel: "Easy",
    lightRequirement: "Medium",
    size: "4-inch pot, 6-10 inches tall",
    description: "Continuous blooms in pink, red, or white. Perfect for beginners who want colorful flowers."
  },
  {
    id: 6,
    name: "Cyclamen",
    price: "$24.99",
    image: "/placeholder.svg",
    category: "Seasonal Flowers",
    rating: 4.3,
    reviews: 112,
    careLevel: "Medium",
    lightRequirement: "Medium",
    size: "4-inch pot, 8-10 inches tall",
    description: "Butterfly-like flowers in winter months. Available in pink, red, white, and purple varieties."
  },
  {
    id: 7,
    name: "Impatiens (Busy Lizzie)",
    price: "$14.99",
    image: "/placeholder.svg",
    category: "Flowering Plants",
    rating: 4.7,
    reviews: 156,
    isPopular: true,
    careLevel: "Easy",
    lightRequirement: "Low",
    size: "4-inch pot, 6-12 inches tall",
    description: "Non-stop bloomer in shade! Perfect for low-light areas where most flowers won't bloom."
  },
  {
    id: 8,
    name: "Kalanchoe",
    price: "$19.99",
    image: "/placeholder.svg",
    category: "Succulent Flowers",
    rating: 4.8,
    reviews: 203,
    isPopular: true,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "4-inch pot, 6-8 inches tall",
    description: "Clusters of tiny flowers in bright colors. Succulent that blooms for months with minimal care."
  },
  {
    id: 9,
    name: "Bromeliad (Guzmania)",
    price: "$32.99",
    image: "/placeholder.svg",
    category: "Tropical Flowers",
    rating: 4.5,
    reviews: 134,
    careLevel: "Medium",
    lightRequirement: "Medium",
    size: "6-inch pot, 10-14 inches tall",
    description: "Bright tropical blooms that last for months. Exotic appearance with colorful bracts."
  },
  {
    id: 10,
    name: "Geranium (Pelargonium)",
    price: "$22.99",
    image: "/placeholder.svg",
    category: "Flowering Plants",
    rating: 4.6,
    reviews: 178,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "4-inch pot, 8-12 inches tall",
    description: "Classic flowering plant with bright blooms and fragrant leaves. Perfect for sunny windows."
  },
  {
    id: 11,
    name: "Hibiscus (Indoor)",
    price: "$38.99",
    image: "/placeholder.svg",
    category: "Tropical Flowers",
    rating: 4.4,
    reviews: 98,
    careLevel: "Medium",
    lightRequirement: "High",
    size: "6-inch pot, 12-18 inches tall",
    description: "Large, showy tropical flowers in vibrant colors. Brings island paradise indoors."
  },
  {
    id: 12,
    name: "Crown of Thorns",
    price: "$26.99",
    image: "/placeholder.svg",
    category: "Succulent Flowers",
    rating: 4.7,
    reviews: 145,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "4-inch pot, 8-12 inches tall",
    description: "Tiny colorful flowers year-round on succulent stems. Extremely drought-tolerant bloomer."
  },
  {
    id: 13,
    name: "Christmas Cactus",
    price: "$28.99",
    image: "/placeholder.svg",
    category: "Holiday Flowers",
    rating: 4.8,
    reviews: 189,
    isPopular: true,
    careLevel: "Easy",
    lightRequirement: "Medium",
    size: "4-inch hanging pot, trailing stems",
    description: "Spectacular holiday bloomer with cascading flowers in winter. Easy-care succulent."
  },
  {
    id: 14,
    name: "Spathiphyllum (Mini Peace Lily)",
    price: "$21.99",
    image: "/placeholder.svg",
    category: "Flowering Plants",
    rating: 4.6,
    reviews: 156,
    careLevel: "Easy",
    lightRequirement: "Low",
    size: "4-inch pot, 8-10 inches tall",
    description: "Compact version of the classic peace lily. Perfect for desks and small spaces."
  },
  {
    id: 15,
    name: "Pentas",
    price: "$17.99",
    image: "/placeholder.svg",
    category: "Flowering Plants",
    rating: 4.5,
    reviews: 123,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "4-inch pot, 10-12 inches tall",
    description: "Star-shaped flowers in clusters. Continuous bloomer that attracts butterflies."
  }
]

export default function Flowers() {
  const [sortBy, setSortBy] = useState("popular")
  const [filterBy, setFilterBy] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  const handleAddToCart = (product: Product) => {
    console.log('Adding to cart:', product.name)
    // TODO: Implement cart functionality
  }

  const handleToggleWishlist = (product: Product) => {
    console.log('Toggle wishlist:', product.name)
    // TODO: Implement wishlist functionality
  }

  const getFilteredAndSortedFlowers = () => {
    let filtered = sampleFlowers

    // Apply filters
    if (filterBy !== "all") {
      filtered = filtered.filter(flower => 
        flower.careLevel.toLowerCase() === filterBy ||
        flower.lightRequirement.toLowerCase() === filterBy ||
        flower.category.toLowerCase().includes(filterBy)
      )
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')))
      case "price-high":
        return filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')))
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating)
      case "name":
        return filtered.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return filtered.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0))
    }
  }

  const filteredFlowers = getFilteredAndSortedFlowers()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-forest-800 mb-2">Flowering Plants</h1>
        <p className="text-forest-600">
          Brighten your home with our beautiful collection of flowering plants. From classic blooms to exotic tropical varieties.
        </p>
      </div>

      {/* Browsing Info */}
      <BrowsingInfo />

      {/* Filter and Sort Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8 p-4 bg-forest-50 rounded-lg">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-forest-700">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-forest-700">Filter by:</span>
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Flowers</SelectItem>
                <SelectItem value="easy">Easy Care</SelectItem>
                <SelectItem value="medium">Medium Care</SelectItem>
                <SelectItem value="hard">Expert Level</SelectItem>
                <SelectItem value="low">Low Light</SelectItem>
                <SelectItem value="high">Bright Light</SelectItem>
                <SelectItem value="flowering">Flowering Plants</SelectItem>
                <SelectItem value="tropical">Tropical</SelectItem>
                <SelectItem value="orchids">Orchids</SelectItem>
                <SelectItem value="succulent">Succulent Flowers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* View Mode */}
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="bg-forest-500 hover:bg-forest-600"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Active Filters */}
      {filterBy !== "all" && (
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-forest-600">Active filters:</span>
            <Badge variant="secondary" className="bg-forest-100 text-forest-700">
              {filterBy.charAt(0).toUpperCase() + filterBy.slice(1)}
              <button 
                onClick={() => setFilterBy("all")}
                className="ml-2 hover:text-forest-900"
              >
                ×
              </button>
            </Badge>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-forest-600">
          Showing {filteredFlowers.length} of {sampleFlowers.length} flowering plants
        </p>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-6 ${
        viewMode === "grid" 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
          : "grid-cols-1"
      }`}>
        {filteredFlowers.map((flower) => (
          <ProductCard
            key={flower.id}
            product={flower}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="border-forest-200 text-forest-700 hover:bg-forest-50">
          Load More Flowers
        </Button>
      </div>
    </div>
  )
}
