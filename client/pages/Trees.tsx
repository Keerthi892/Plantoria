import { useState } from 'react'
import { Filter, Grid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { ProductCard, Product } from '@/components/ProductCard'
import { BrowsingInfo } from '@/components/BrowsingInfo'

const sampleTrees: Product[] = [
  {
    id: 1,
    name: "Neem Tree Sapling",
    price: "₹799",
    originalPrice: "₹999",
    image: "https://images.pexels.com/photos/5060587/pexels-photo-5060587.jpeg",
    category: "Medicinal Trees",
    rating: 4.8,
    reviews: 234,
    isPopular: true,
    isSale: true,
    careLevel: "Easy",
    lightRequirement: "High",
    size: "2-3 feet sapling, 12-inch pot",
    description: "Sacred medicinal tree, nature's pharmacy. Excellent air purifier and natural pesticide properties."
  },
  {
    id: 2,
    name: "Rubber Tree (Indian Ficus)",
    price: "₹1299",
    image: "https://images.pexels.com/photos/9569752/pexels-photo-9569752.jpeg",
    category: "Decorative Trees",
    rating: 4.7,
    reviews: 167,
    isPopular: true,
    careLevel: "Medium",
    lightRequirement: "Medium",
    size: "4-5 feet tall, 14-inch pot",
    description: "Native Indian variety with glossy leaves. Symbol of abundance and prosperity in Vastu Shastra."
  },
  {
    id: 3,
    name: "Ashoka Tree Sapling",
    price: "₹899",
    image: "https://images.pexels.com/photos/5060587/pexels-photo-5060587.jpeg",
    category: "Sacred Trees",
    rating: 4.6,
    reviews: 145,
    careLevel: "Medium",
    lightRequirement: "High",
    size: "2-3 feet sapling, 12-inch pot",
    description: "Sacred tree from Indian scriptures. Symbol of love and removes sorrow, beautiful orange flowers."
  },
  {
    id: 4,
    name: "Bamboo Plant Tree",
    price: "₹649",
    image: "https://images.pexels.com/photos/8989497/pexels-photo-8989497.jpeg",
    category: "Feng Shui Trees",
    rating: 4.8,
    reviews: 289,
    isPopular: true,
    careLevel: "Easy",
    lightRequirement: "Medium",
    size: "3-4 feet tall, decorative pot",
    description: "Symbol of good fortune and flexibility. Fast-growing and brings positive energy to homes."
  },
  {
    id: 5,
    name: "Weeping Fig (Ficus Benjamina)",
    price: "$72.99",
    image: "/placeholder.svg",
    category: "Indoor Trees",
    rating: 4.5,
    reviews: 98,
    careLevel: "Medium",
    lightRequirement: "Medium",
    size: "4-5 feet tall, 8-inch pot",
    description: "Classic office tree with small, glossy leaves. Can be shaped and trained into beautiful topiaries."
  },
  {
    id: 6,
    name: "Dragon Tree (Dracaena Marginata)",
    price: "$95.99",
    image: "/placeholder.svg",
    category: "Indoor Trees",
    rating: 4.6,
    reviews: 112,
    careLevel: "Easy",
    lightRequirement: "Low",
    size: "5-6 feet tall, 10-inch pot",
    description: "Architectural beauty with spiky leaves edged in red. Very low maintenance and air-purifying."
  },
  {
    id: 7,
    name: "Olive Tree (Indoor)",
    price: "$149.99",
    image: "/placeholder.svg",
    category: "Indoor Trees",
    rating: 4.3,
    reviews: 78,
    careLevel: "Hard",
    lightRequirement: "High",
    size: "4-5 feet tall, 12-inch pot",
    description: "Mediterranean elegance for your home. Silver-green leaves and authentic olive tree character."
  },
  {
    id: 8,
    name: "Umbrella Tree (Schefflera)",
    price: "$55.99",
    image: "/placeholder.svg",
    category: "Indoor Trees",
    rating: 4.7,
    reviews: 145,
    careLevel: "Easy",
    lightRequirement: "Medium",
    size: "3-4 feet tall, 8-inch pot",
    description: "Fast-growing tree with umbrella-like leaf clusters. Very forgiving and adaptable to different conditions."
  },
  {
    id: 9,
    name: "Lemon Tree (Meyer)",
    price: "$89.99",
    image: "/placeholder.svg",
    category: "Fruit Trees",
    rating: 4.5,
    reviews: 203,
    isPopular: true,
    careLevel: "Medium",
    lightRequirement: "High",
    size: "3-4 feet tall, 10-inch pot",
    description: "Fragrant flowers and actual lemons! Sweet Meyer variety perfect for indoor growing."
  },
  {
    id: 10,
    name: "Parlor Palm",
    price: "$39.99",
    image: "/placeholder.svg",
    category: "Palm Trees",
    rating: 4.8,
    reviews: 167,
    careLevel: "Easy",
    lightRequirement: "Low",
    size: "2-3 feet tall, 6-inch pot",
    description: "Elegant palm that tolerates low light and infrequent watering. Perfect for corners and offices."
  },
  {
    id: 11,
    name: "Majesty Palm",
    price: "$78.99",
    image: "/placeholder.svg",
    category: "Palm Trees",
    rating: 4.4,
    reviews: 123,
    careLevel: "Medium",
    lightRequirement: "Medium",
    size: "4-5 feet tall, 10-inch pot",
    description: "Tropical paradise vibes with feathery, arching fronds. Creates instant vacation atmosphere."
  },
  {
    id: 12,
    name: "Bird of Paradise",
    price: "$98.99",
    image: "/placeholder.svg",
    category: "Tropical Trees",
    rating: 4.6,
    reviews: 189,
    isPopular: true,
    careLevel: "Medium",
    lightRequirement: "High",
    size: "4-6 feet tall, 10-inch pot",
    description: "Dramatic paddle-shaped leaves that split naturally. Stunning architectural plant for bright spaces."
  }
]

export default function Trees() {
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

  const getFilteredAndSortedTrees = () => {
    let filtered = sampleTrees

    // Apply filters
    if (filterBy !== "all") {
      filtered = filtered.filter(tree => 
        tree.careLevel.toLowerCase() === filterBy ||
        tree.lightRequirement.toLowerCase() === filterBy ||
        tree.category.toLowerCase().includes(filterBy)
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

  const filteredTrees = getFilteredAndSortedTrees()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-forest-800 mb-2">Indoor Trees</h1>
        <p className="text-forest-600">
          Transform your space with beautiful indoor trees. From statement pieces to air-purifying varieties, find the perfect tree for your home.
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
                <SelectItem value="all">All Trees</SelectItem>
                <SelectItem value="easy">Easy Care</SelectItem>
                <SelectItem value="medium">Medium Care</SelectItem>
                <SelectItem value="hard">Expert Level</SelectItem>
                <SelectItem value="low">Low Light</SelectItem>
                <SelectItem value="high">Bright Light</SelectItem>
                <SelectItem value="indoor">Indoor Trees</SelectItem>
                <SelectItem value="palm">Palm Trees</SelectItem>
                <SelectItem value="fruit">Fruit Trees</SelectItem>
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
                ��
              </button>
            </Badge>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-forest-600">
          Showing {filteredTrees.length} of {sampleTrees.length} trees
        </p>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-6 ${
        viewMode === "grid" 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
          : "grid-cols-1"
      }`}>
        {filteredTrees.map((tree) => (
          <ProductCard
            key={tree.id}
            product={tree}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="border-forest-200 text-forest-700 hover:bg-forest-50">
          Load More Trees
        </Button>
      </div>
    </div>
  )
}
