import { Heart, Star, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'

export interface Product {
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
  careLevel: 'Easy' | 'Medium' | 'Hard'
  lightRequirement: 'Low' | 'Medium' | 'High'
  size: string
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
  onToggleWishlist?: (product: Product) => void
}

export function ProductCard({ product, onAddToCart, onToggleWishlist }: ProductCardProps) {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required to purchase",
        description: "You need an account to add items to cart and make purchases. Continue browsing or sign in now.",
        action: (
          <Button onClick={() => navigate('/auth')} size="sm">
            Sign In
          </Button>
        ),
      })
      return
    }
    onAddToCart?.(product)
  }

  const handleToggleWishlist = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in to save favorites",
        description: "Create an account to save plants to your wishlist for later. You can continue browsing without an account.",
        action: (
          <Button onClick={() => navigate('/auth')} size="sm">
            Sign In
          </Button>
        ),
      })
      return
    }
    onToggleWishlist?.(product)
  }

  const getCareColor = (level: string) => {
    switch (level) {
      case 'Easy': return 'bg-forest-100 text-forest-700'
      case 'Medium': return 'bg-earth-100 text-earth-700'
      case 'Hard': return 'bg-red-100 text-red-700'
      default: return 'bg-forest-100 text-forest-700'
    }
  }

  const getLightColor = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-slate-100 text-slate-700'
      case 'Medium': return 'bg-yellow-100 text-yellow-700'
      case 'High': return 'bg-orange-100 text-orange-700'
      default: return 'bg-slate-100 text-slate-700'
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isPopular && (
              <Badge className="bg-forest-500 hover:bg-forest-600 text-white">
                Popular
              </Badge>
            )}
            {product.isSale && (
              <Badge className="bg-red-500 hover:bg-red-600 text-white">
                Sale
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button 
            size="icon" 
            variant="ghost" 
            className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-sm"
            onClick={handleToggleWishlist}
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              className="w-full bg-forest-500 hover:bg-forest-600 text-white"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="p-5">
          {/* Category and Care Info */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-forest-500 font-medium">{product.category}</span>
            <div className="flex gap-1">
              <Badge variant="outline" className={`text-xs ${getCareColor(product.careLevel)}`}>
                {product.careLevel}
              </Badge>
              <Badge variant="outline" className={`text-xs ${getLightColor(product.lightRequirement)}`}>
                {product.lightRequirement} Light
              </Badge>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-forest-800 mb-2 group-hover:text-forest-600 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Size */}
          <p className="text-sm text-forest-500 mb-3">{product.size}</p>
          
          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-forest-600 ml-1 font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-forest-500 ml-2">({product.reviews} reviews)</span>
          </div>
          
          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-forest-800">{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-forest-500 line-through">{product.originalPrice}</span>
              )}
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-sm text-forest-600 mt-3 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
