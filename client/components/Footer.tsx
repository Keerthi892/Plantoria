import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-forest-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-forest-500 rounded-full">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-forest-700">🌿 Plantoria</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your friendly plant store bringing nature to your doorstep. Discover beautiful plants, trees, flowers, and seeds for your garden.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-forest-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-forest-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-forest-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-forest-700">Shop</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/plants" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                All Plants
              </Link>
              <Link to="/trees" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                Trees
              </Link>
              <Link to="/flowers" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                Flowers
              </Link>
              <Link to="/seeds" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                Seeds
              </Link>
              <Link to="/care-guide" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                Care Guide
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-forest-700">Customer Service</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                Contact
              </Link>
              <Link to="/shipping" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                Returns & Exchanges
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-forest-700">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@plantoria.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-PLANT</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Garden Street, Green City, GC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Plantoria. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
