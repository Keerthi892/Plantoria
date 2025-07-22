import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, User, Menu, X, Leaf, LogOut, Settings } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useAuth } from '@/contexts/AuthContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/about" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-forest-500 rounded-full">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-forest-700">🌿 Plantoria</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/plants" className="text-sm font-medium hover:text-forest-600 transition-colors">
              Plants
            </Link>
            <Link to="/trees" className="text-sm font-medium hover:text-forest-600 transition-colors">
              Trees
            </Link>
            <Link to="/flowers" className="text-sm font-medium hover:text-forest-600 transition-colors">
              Flowers
            </Link>
            <Link to="/seeds" className="text-sm font-medium hover:text-forest-600 transition-colors">
              Seeds
            </Link>
            <Link to="/care-guide" className="text-sm font-medium hover:text-forest-600 transition-colors">
              Care Guide
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm ml-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search plants, seeds, trees..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Search - Mobile */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-forest-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* User Account */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders" className="flex items-center">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      <span>My Orders</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/auth')}
                className="text-forest-700 hover:text-forest-600"
              >
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/plants"
                className="text-sm font-medium hover:text-forest-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plants
              </Link>
              <Link
                to="/trees"
                className="text-sm font-medium hover:text-forest-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Trees
              </Link>
              <Link
                to="/flowers"
                className="text-sm font-medium hover:text-forest-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Flowers
              </Link>
              <Link
                to="/seeds"
                className="text-sm font-medium hover:text-forest-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Seeds
              </Link>
              <Link
                to="/care-guide"
                className="text-sm font-medium hover:text-forest-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Care Guide
              </Link>
              {/* Mobile Search */}
              <div className="pt-4 border-t">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search plants, seeds, trees..."
                    className="pl-10"
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
