import { useState } from 'react'
import { Filter, Grid, List, Clock, Sprout } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { BrowsingInfo } from '@/components/BrowsingInfo'

interface Seed {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  category: string
  rating: number
  reviews: number
  isPopular?: boolean
  isSale?: boolean
  description?: string
  germinationTime: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  season: string
  plantType: 'Annual' | 'Perennial' | 'Biennial'
  spacing: string
  seedCount: string
}

const sampleSeeds: Seed[] = [
  {
    id: 1,
    name: "Marigold Seeds (Genda)",
    price: "₹99",
    originalPrice: "₹149",
    image: "https://images.pexels.com/photos/16745027/pexels-photo-16745027.jpeg",
    category: "Flower Seeds",
    rating: 4.8,
    reviews: 378,
    isPopular: true,
    isSale: true,
    difficulty: "Easy",
    germinationTime: "5-7 days",
    season: "All Year",
    plantType: "Annual",
    spacing: "6-8 inches apart",
    seedCount: "50 seeds",
    description: "Sacred Indian flowers perfect for festivals and daily prayers. Blooms continuously in Indian climate."
  },
  {
    id: 2,
    name: "Tulsi Seeds (Holy Basil)",
    price: "₹79",
    image: "https://images.pexels.com/photos/32112349/pexels-photo-32112349.jpeg",
    category: "Sacred Herb Seeds",
    rating: 4.9,
    reviews: 456,
    isPopular: true,
    difficulty: "Easy",
    germinationTime: "7-10 days",
    season: "Spring/Monsoon",
    plantType: "Perennial",
    spacing: "8-10 inches apart",
    seedCount: "100+ seeds",
    description: "Sacred plant for Hindu homes. Medicinal properties and purifies the air. Essential for every household."
  },
  {
    id: 3,
    name: "Tomato Seeds (Cherry)",
    price: "$5.99",
    image: "/placeholder.svg",
    category: "Vegetable Seeds",
    rating: 4.7,
    reviews: 189,
    isPopular: true,
    difficulty: "Medium",
    germinationTime: "7-14 days",
    season: "Spring",
    plantType: "Annual",
    spacing: "18-24 inches apart",
    seedCount: "30 seeds",
    description: "Sweet cherry tomatoes perfect for snacking and salads. Prolific producer all season long."
  },
  {
    id: 4,
    name: "Wildflower Mix Seeds",
    price: "$8.99",
    originalPrice: "$12.99",
    image: "/placeholder.svg",
    category: "Flower Seeds",
    rating: 4.6,
    reviews: 234,
    isSale: true,
    difficulty: "Easy",
    germinationTime: "10-21 days",
    season: "Spring/Fall",
    plantType: "Annual",
    spacing: "Broadcast sowing",
    seedCount: "1000+ seeds",
    description: "Beautiful mix of native wildflowers that bloom all season. Great for meadows, borders, and butterfly gardens."
  },
  {
    id: 5,
    name: "Lettuce Seeds (Buttercrunch)",
    price: "$2.99",
    image: "/placeholder.svg",
    category: "Vegetable Seeds",
    rating: 4.8,
    reviews: 156,
    difficulty: "Easy",
    germinationTime: "4-7 days",
    season: "Spring/Fall",
    plantType: "Annual",
    spacing: "6-8 inches apart",
    seedCount: "200+ seeds",
    description: "Tender, buttery lettuce that's perfect for salads. Cool-season crop that's easy to grow."
  },
  {
    id: 6,
    name: "Lavender Seeds (English)",
    price: "$6.49",
    image: "/placeholder.svg",
    category: "Herb Seeds",
    rating: 4.4,
    reviews: 98,
    difficulty: "Medium",
    germinationTime: "14-21 days",
    season: "Spring",
    plantType: "Perennial",
    spacing: "12-18 inches apart",
    seedCount: "50 seeds",
    description: "Fragrant perennial herb with beautiful purple flowers. Perfect for aromatherapy and cooking."
  },
  {
    id: 7,
    name: "Marigold Seeds (French)",
    price: "$3.99",
    image: "/placeholder.svg",
    category: "Flower Seeds",
    rating: 4.7,
    reviews: 178,
    isPopular: true,
    difficulty: "Easy",
    germinationTime: "5-7 days",
    season: "Spring/Summer",
    plantType: "Annual",
    spacing: "6-12 inches apart",
    seedCount: "75 seeds",
    description: "Bright orange and yellow flowers that bloom all season. Natural pest deterrent for vegetable gardens."
  },
  {
    id: 8,
    name: "Carrot Seeds (Rainbow Mix)",
    price: "$4.49",
    image: "/placeholder.svg",
    category: "Vegetable Seeds",
    rating: 4.6,
    reviews: 145,
    difficulty: "Medium",
    germinationTime: "14-21 days",
    season: "Spring/Fall",
    plantType: "Annual",
    spacing: "2-3 inches apart",
    seedCount: "300+ seeds",
    description: "Colorful mix of purple, orange, white, and yellow carrots. Fun variety for kids and unique salads."
  },
  {
    id: 9,
    name: "Cosmos Seeds (Sensation Mix)",
    price: "$3.79",
    image: "/placeholder.svg",
    category: "Flower Seeds",
    rating: 4.8,
    reviews: 203,
    difficulty: "Easy",
    germinationTime: "7-10 days",
    season: "Spring/Summer",
    plantType: "Annual",
    spacing: "12-18 inches apart",
    seedCount: "100 seeds",
    description: "Delicate, daisy-like flowers in pink, white, and crimson. Drought-tolerant and attracts butterflies."
  },
  {
    id: 10,
    name: "Cilantro Seeds",
    price: "$2.79",
    image: "/placeholder.svg",
    category: "Herb Seeds",
    rating: 4.5,
    reviews: 167,
    difficulty: "Easy",
    germinationTime: "7-10 days",
    season: "Spring/Fall",
    plantType: "Annual",
    spacing: "4-6 inches apart",
    seedCount: "150+ seeds",
    description: "Fresh herb essential for Mexican and Asian cuisine. Fast-growing and successive plantings recommended."
  },
  {
    id: 11,
    name: "Pumpkin Seeds (Jack O'Lantern)",
    price: "$5.49",
    image: "/placeholder.svg",
    category: "Vegetable Seeds",
    rating: 4.7,
    reviews: 123,
    difficulty: "Medium",
    germinationTime: "7-14 days",
    season: "Spring",
    plantType: "Annual",
    spacing: "6-8 feet apart",
    seedCount: "15 seeds",
    description: "Classic Halloween pumpkins perfect for carving. Large vines need plenty of space to grow."
  },
  {
    id: 12,
    name: "Morning Glory Seeds",
    price: "$4.29",
    image: "/placeholder.svg",
    category: "Flower Seeds",
    rating: 4.6,
    reviews: 189,
    difficulty: "Easy",
    germinationTime: "5-21 days",
    season: "Spring/Summer",
    plantType: "Annual",
    spacing: "6 inches apart",
    seedCount: "25 seeds",
    description: "Fast-growing climbing vine with beautiful trumpet-shaped flowers. Perfect for fences and trellises."
  }
]

function SeedCard({ seed }: { seed: Seed }) {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Easy': return 'bg-forest-100 text-forest-700'
      case 'Medium': return 'bg-earth-100 text-earth-700'
      case 'Hard': return 'bg-red-100 text-red-700'
      default: return 'bg-forest-100 text-forest-700'
    }
  }

  const getPlantTypeColor = (type: string) => {
    switch (type) {
      case 'Annual': return 'bg-blue-100 text-blue-700'
      case 'Perennial': return 'bg-forest-100 text-forest-700'
      case 'Biennial': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={seed.image} 
            alt={seed.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {seed.isPopular && (
              <Badge className="bg-forest-500 hover:bg-forest-600 text-white">
                Popular
              </Badge>
            )}
            {seed.isSale && (
              <Badge className="bg-red-500 hover:bg-red-600 text-white">
                Sale
              </Badge>
            )}
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button className="w-full bg-forest-500 hover:bg-forest-600 text-white">
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="p-5">
          {/* Category and Type */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-forest-500 font-medium">{seed.category}</span>
            <Badge variant="outline" className={`text-xs ${getPlantTypeColor(seed.plantType)}`}>
              {seed.plantType}
            </Badge>
          </div>

          {/* Seed Name */}
          <h3 className="font-semibold text-forest-800 mb-2 group-hover:text-forest-600 transition-colors line-clamp-2">
            {seed.name}
          </h3>

          {/* Seed Count */}
          <p className="text-sm text-forest-500 mb-3">{seed.seedCount}</p>
          
          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Sprout className="h-4 w-4 text-forest-500" />
              <span className="text-sm text-forest-600 ml-1 font-medium">{seed.rating}</span>
            </div>
            <span className="text-sm text-forest-500 ml-2">({seed.reviews} reviews)</span>
          </div>

          {/* Key Info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-forest-500">Difficulty:</span>
              <Badge variant="outline" className={getDifficultyColor(seed.difficulty)}>
                {seed.difficulty}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-forest-500">Germination:</span>
              <span className="text-forest-700 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {seed.germinationTime}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-forest-500">Season:</span>
              <span className="text-forest-700">{seed.season}</span>
            </div>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-forest-800">{seed.price}</span>
              {seed.originalPrice && (
                <span className="text-sm text-forest-500 line-through">{seed.originalPrice}</span>
              )}
            </div>
          </div>

          {/* Description */}
          {seed.description && (
            <p className="text-sm text-forest-600 mt-3 line-clamp-2">
              {seed.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function Seeds() {
  const [sortBy, setSortBy] = useState("popular")
  const [filterBy, setFilterBy] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  const getFilteredAndSortedSeeds = () => {
    let filtered = sampleSeeds

    // Apply filters
    if (filterBy !== "all") {
      filtered = filtered.filter(seed => 
        seed.difficulty.toLowerCase() === filterBy ||
        seed.category.toLowerCase().includes(filterBy) ||
        seed.plantType.toLowerCase() === filterBy
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

  const filteredSeeds = getFilteredAndSortedSeeds()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-forest-800 mb-2">Seeds & Bulbs</h1>
        <p className="text-forest-600">
          Start your garden from seed! Discover our collection of flower, vegetable, and herb seeds for every growing season.
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
                <SelectItem value="all">All Seeds</SelectItem>
                <SelectItem value="easy">Easy to Grow</SelectItem>
                <SelectItem value="medium">Medium Difficulty</SelectItem>
                <SelectItem value="hard">Expert Level</SelectItem>
                <SelectItem value="flower">Flower Seeds</SelectItem>
                <SelectItem value="vegetable">Vegetable Seeds</SelectItem>
                <SelectItem value="herb">Herb Seeds</SelectItem>
                <SelectItem value="annual">Annual</SelectItem>
                <SelectItem value="perennial">Perennial</SelectItem>
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
          Showing {filteredSeeds.length} of {sampleSeeds.length} seed varieties
        </p>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-6 ${
        viewMode === "grid" 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
          : "grid-cols-1"
      }`}>
        {filteredSeeds.map((seed) => (
          <SeedCard key={seed.id} seed={seed} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="border-forest-200 text-forest-700 hover:bg-forest-50">
          Load More Seeds
        </Button>
      </div>
    </div>
  )
}
