import { useState } from 'react'
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { ProductCard, Product } from '@/components/ProductCard'
import { BrowsingInfo } from '@/components/BrowsingInfo'

const samplePlants: Product[] = [
  {
    id: 1,
    name: "Tulsi (Holy Basil)",
    price: "₹299",
    originalPrice: "₹399",
    image: "https://images.pexels.com/photos/32112349/pexels-photo-32112349.jpeg",
    category: "Sacred Plants",
    rating: 4.9,
    reviews: 246,
    isPopular: true,
    isSale: true,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "6-inch clay pot, 8-12 inches tall",
    description: "Sacred Hindu plant with medicinal properties. Known for purifying air and bringing positive energy."
  },
  {
    id: 2,
    name: "Snake Plant (Sansevieria)",
    price: "₹449",
    originalPrice: "₹599",
    image: "https://images.pexels.com/photos/8501685/pexels-photo-8501685.jpeg",
    category: "Air Purifying",
    rating: 4.8,
    reviews: 189,
    isPopular: true,
    careLevel: "Easy",
    lightRequirement: "Low",
    size: "5-inch pot, 12-18 inches tall",
    description: "Mother-in-law's tongue, perfect for Indian homes. Releases oxygen at night and requires minimal care."
  },
  {
    id: 3,
    name: "Curry Leaves Plant",
    price: "₹199",
    image: "https://images.pexels.com/photos/32112349/pexels-photo-32112349.jpeg",
    category: "Culinary Herbs",
    rating: 4.7,
    reviews: 167,
    isPopular: true,
    careLevel: "Medium",
    lightRequirement: "High",
    size: "6-inch pot, 1-2 feet tall",
    description: "Essential for South Indian cooking. Fresh curry leaves for authentic flavors in your kitchen."
  },
  {
    id: 4,
    name: "Money Plant (Golden Pothos)",
    price: "₹149",
    image: "https://images.pexels.com/photos/9707245/pexels-photo-9707245.jpeg",
    category: "Hanging Plants",
    rating: 4.6,
    reviews: 324,
    isPopular: true,
    careLevel: "Easy",
    lightRequirement: "Low",
    size: "4-inch hanging pot, trailing vines",
    description: "Brings good luck and prosperity. Easy to grow and propagate, perfect for Indian households."
  },
  {
    id: 5,
    name: "Rubber Plant (Indian Ficus)",
    price: "₹799",
    image: "https://images.pexels.com/photos/9569752/pexels-photo-9569752.jpeg",
    category: "Decorative Plants",
    rating: 4.5,
    reviews: 123,
    careLevel: "Medium",
    lightRequirement: "Medium",
    size: "8-inch pot, 2-3 feet tall",
    description: "Native Indian variety with glossy leaves. Symbol of wealth and abundance in Vastu."
  },
  {
    id: 6,
    name: "Bamboo Plant (Lucky Bamboo)",
    price: "₹399",
    image: "https://images.pexels.com/photos/8989497/pexels-photo-8989497.jpeg",
    category: "Feng Shui Plants",
    rating: 4.8,
    reviews: 298,
    careLevel: "Easy",
    lightRequirement: "Medium",
    size: "Glass vase, 6-8 stalks",
    description: "Brings good fortune and positive energy. Grows in water, perfect for office desks and homes."
  },
  {
    id: 7,
    name: "Aloe Vera (Ghritkumari)",
    price: "₹249",
    image: "https://images.pexels.com/photos/2660218/pexels-photo-2660218.jpeg",
    category: "Medicinal Plants",
    rating: 4.9,
    reviews: 456,
    isPopular: true,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "6-inch terracotta pot, 8-10 inches",
    description: "Ayurvedic medicinal plant for skin and health. Used in Indian households for centuries."
  },
  {
    id: 8,
    name: "Jade Plant (Crassula)",
    price: "₹349",
    image: "https://images.pexels.com/photos/18199788/pexels-photo-18199788.jpeg",
    category: "Succulents",
    rating: 4.4,
    reviews: 156,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "5-inch ceramic pot, compact",
    description: "Money tree succulent, symbol of financial growth. Low maintenance, perfect for Indian climate."
  },
  {
    id: 9,
    name: "Indian Fern (Nephrolepis)",
    price: "₹399",
    image: "https://images.pexels.com/photos/5506143/pexels-photo-5506143.jpeg",
    category: "Ferns",
    rating: 4.6,
    reviews: 134,
    careLevel: "Medium",
    lightRequirement: "Medium",
    size: "7-inch hanging pot, full fronds",
    description: "Native Indian fern variety. Excellent for humid areas and adds lush greenery to spaces."
  },
  {
    id: 10,
    name: "Mint Plant (Pudina)",
    price: "₹129",
    image: "https://images.pexels.com/photos/32112349/pexels-photo-32112349.jpeg",
    category: "Culinary Herbs",
    rating: 4.7,
    reviews: 289,
    careLevel: "Easy",
    lightRequirement: "Medium",
    size: "4-inch pot, 6-8 inches",
    description: "Fresh mint for chai, chutneys, and Indian cuisine. Fast-growing herb for kitchen gardens."
  },
  {
    id: 11,
    name: "Ashoka Tree Sapling",
    price: "₹599",
    image: "https://images.pexels.com/photos/5060587/pexels-photo-5060587.jpeg",
    category: "Sacred Trees",
    rating: 4.5,
    reviews: 78,
    careLevel: "Medium",
    lightRequirement: "High",
    size: "10-inch pot, 1-2 feet sapling",
    description: "Sacred tree mentioned in Hindu scriptures. Symbol of love and fertility, beautiful flowering tree."
  },
  {
    id: 12,
    name: "Coriander Plant (Dhania)",
    price: "₹99",
    image: "https://images.pexels.com/photos/32112349/pexels-photo-32112349.jpeg",
    category: "Culinary Herbs",
    rating: 4.8,
    reviews: 234,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "4-inch pot, seasonal herb",
    description: "Essential for Indian cooking. Fresh coriander leaves and seeds for authentic flavors."
  }
]

export default function Plants() {
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

  const getFilteredAndSortedPlants = () => {
    let filtered = samplePlants

    // Apply filters
    if (filterBy !== "all") {
      filtered = filtered.filter(plant => 
        plant.careLevel.toLowerCase() === filterBy ||
        plant.lightRequirement.toLowerCase() === filterBy ||
        plant.category.toLowerCase().includes(filterBy)
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

  const filteredPlants = getFilteredAndSortedPlants()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-forest-800 mb-2">House Plants</h1>
        <p className="text-forest-600">
          Discover our collection of beautiful house plants perfect for any home. From low-maintenance options to statement pieces.
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
                <SelectItem value="all">All Plants</SelectItem>
                <SelectItem value="easy">Easy Care</SelectItem>
                <SelectItem value="medium">Medium Care</SelectItem>
                <SelectItem value="hard">Expert Level</SelectItem>
                <SelectItem value="low">Low Light</SelectItem>
                <SelectItem value="high">Bright Light</SelectItem>
                <SelectItem value="hanging">Hanging Plants</SelectItem>
                <SelectItem value="succulents">Succulents</SelectItem>
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
          Showing {filteredPlants.length} of {samplePlants.length} plants
        </p>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-6 ${
        viewMode === "grid" 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
          : "grid-cols-1"
      }`}>
        {filteredPlants.map((plant) => (
          <ProductCard
            key={plant.id}
            product={plant}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="border-forest-200 text-forest-700 hover:bg-forest-50">
          Load More Plants
        </Button>
      </div>
    </div>
  )
}
