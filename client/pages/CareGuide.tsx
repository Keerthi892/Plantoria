import { useState } from 'react'
import { Leaf, Droplets, Sun, Scissors, Bug, MessageCircle, Phone, Mail, Calendar, Star, ChevronRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'

export default function CareGuide() {
  const [selectedCategory, setSelectedCategory] = useState('plants')
  const [searchQuery, setSearchQuery] = useState('')

  const careCategories = [
    {
      id: 'plants',
      name: 'House Plants',
      icon: <Leaf className="h-5 w-5" />,
      description: 'Indoor plant care essentials'
    },
    {
      id: 'trees',
      name: 'Indoor Trees',
      icon: <Leaf className="h-5 w-5" />,
      description: 'Large plant and tree care'
    },
    {
      id: 'flowers',
      name: 'Flowering Plants',
      icon: <Leaf className="h-5 w-5" />,
      description: 'Blooming plant maintenance'
    },
    {
      id: 'seeds',
      name: 'Seeds & Seedlings',
      icon: <Leaf className="h-5 w-5" />,
      description: 'Growing from seed to plant'
    }
  ]

  const plantCareGuides = [
    {
      title: "Watering Your House Plants",
      category: "Watering",
      difficulty: "Beginner",
      readTime: "5 min read",
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      summary: "Learn the golden rules of watering indoor plants without overwatering or underwatering.",
      tips: [
        "Check soil moisture 1-2 inches deep before watering",
        "Water thoroughly until water drains from bottom holes",
        "Most plants prefer to dry out slightly between waterings",
        "Water less frequently in winter when growth slows",
        "Use room temperature water to avoid shocking roots"
      ]
    },
    {
      title: "Understanding Light Requirements",
      category: "Lighting",
      difficulty: "Beginner",
      readTime: "7 min read",
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
      summary: "Master the art of providing the right amount of light for different plant species.",
      tips: [
        "South-facing windows provide bright, direct light",
        "East/West windows offer moderate, indirect light",
        "North-facing windows give low, indirect light",
        "Rotate plants weekly for even growth",
        "Use grow lights if natural light is insufficient"
      ]
    },
    {
      title: "Pruning and Maintenance",
      category: "Maintenance",
      difficulty: "Intermediate",
      readTime: "10 min read",
      icon: <Scissors className="h-6 w-6 text-forest-500" />,
      summary: "Keep your plants healthy and attractive with proper pruning techniques.",
      tips: [
        "Remove dead, yellowing, or damaged leaves immediately",
        "Pinch growing tips to encourage bushier growth",
        "Use clean, sharp scissors or pruning shears",
        "Prune during active growing season (spring/summer)",
        "Cut just above a node or leaf joint"
      ]
    },
    {
      title: "Common Pest Prevention",
      category: "Pest Control",
      difficulty: "Intermediate",
      readTime: "8 min read",
      icon: <Bug className="h-6 w-6 text-red-500" />,
      summary: "Identify, prevent, and treat common indoor plant pests naturally.",
      tips: [
        "Inspect plants weekly for early pest detection",
        "Quarantine new plants for 2 weeks before integrating",
        "Use neem oil spray for aphids and spider mites",
        "Increase humidity to deter spider mites",
        "Remove affected leaves immediately to prevent spread"
      ]
    }
  ]

  const treeCareGuides = [
    {
      title: "Indoor Tree Placement",
      category: "Placement",
      difficulty: "Beginner",
      readTime: "6 min read",
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
      summary: "Position your indoor trees for optimal growth and room aesthetics.",
      tips: [
        "Place near large windows for maximum light",
        "Ensure adequate ceiling height for growth",
        "Keep away from heating/cooling vents",
        "Rotate monthly for even light exposure",
        "Consider mature size when choosing location"
      ]
    },
    {
      title: "Large Plant Watering",
      category: "Watering",
      difficulty: "Intermediate",
      readTime: "8 min read",
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      summary: "Proper watering techniques for large plants and trees.",
      tips: [
        "Water slowly and deeply to reach all roots",
        "Check multiple spots in soil for moisture",
        "Use a moisture meter for large pots",
        "Consider bottom watering for very large plants",
        "Allow excess water to drain completely"
      ]
    }
  ]

  const flowerCareGuides = [
    {
      title: "Encouraging Blooms",
      category: "Flowering",
      difficulty: "Intermediate",
      readTime: "9 min read",
      icon: <Leaf className="h-6 w-6 text-pink-500" />,
      summary: "Tips to maximize flowering and extend bloom periods.",
      tips: [
        "Provide adequate light for flower production",
        "Use phosphorus-rich fertilizer during blooming",
        "Deadhead spent flowers to encourage new blooms",
        "Maintain consistent watering during flowering",
        "Reduce nitrogen to promote flowers over foliage"
      ]
    },
    {
      title: "Orchid Care Basics",
      category: "Specialty",
      difficulty: "Advanced",
      readTime: "12 min read",
      icon: <Leaf className="h-6 w-6 text-purple-500" />,
      summary: "Specialized care for orchids and exotic flowering plants.",
      tips: [
        "Use orchid-specific potting medium",
        "Water with ice cubes for slow, gentle watering",
        "Provide high humidity (50-70%)",
        "Use specialized orchid fertilizer",
        "Repot every 2-3 years or when medium breaks down"
      ]
    }
  ]

  const seedCareGuides = [
    {
      title: "Starting Seeds Indoors",
      category: "Germination",
      difficulty: "Beginner",
      readTime: "10 min read",
      icon: <Leaf className="h-6 w-6 text-green-500" />,
      summary: "Successfully germinate seeds and care for seedlings.",
      tips: [
        "Use seed-starting mix, not regular potting soil",
        "Maintain consistent moisture without overwatering",
        "Provide bottom heat for faster germination",
        "Cover seeds according to package directions",
        "Provide adequate light once seeds sprout"
      ]
    },
    {
      title: "Transplanting Seedlings",
      category: "Transplanting",
      difficulty: "Intermediate",
      readTime: "8 min read",
      icon: <Leaf className="h-6 w-6 text-forest-500" />,
      summary: "When and how to transplant seedlings successfully.",
      tips: [
        "Wait until seedlings have 2-3 sets of true leaves",
        "Harden off gradually before transplanting outdoors",
        "Handle seedlings by leaves, not stems",
        "Water well after transplanting",
        "Provide shade for first few days after transplanting"
      ]
    }
  ]

  const experts = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Indoor Plant Specialist",
      experience: "15 years",
      rating: 4.9,
      reviews: 1247,
      image: "/placeholder.svg",
      expertise: ["House Plants", "Air Purifying Plants", "Low Light Plants"],
      bio: "Certified horticulturist specializing in indoor plant health and tropical species."
    },
    {
      name: "Miguel Rodriguez",
      specialty: "Tree & Large Plant Expert",
      experience: "12 years",
      rating: 4.8,
      reviews: 892,
      image: "/placeholder.svg",
      expertise: ["Indoor Trees", "Fiddle Leaf Figs", "Large Plant Care"],
      bio: "Expert in large plant care with focus on indoor trees and statement plants."
    },
    {
      name: "Emma Chen",
      specialty: "Flowering Plant Guru",
      experience: "10 years",
      rating: 4.9,
      reviews: 1156,
      image: "/placeholder.svg",
      expertise: ["Orchids", "Flowering Plants", "Seasonal Blooms"],
      bio: "Orchid specialist and flowering plant expert with advanced certification."
    },
    {
      name: "James Wilson",
      specialty: "Seed & Propagation Master",
      experience: "8 years",
      rating: 4.7,
      reviews: 634,
      image: "/placeholder.svg",
      expertise: ["Seed Starting", "Propagation", "Herb Gardens"],
      bio: "Specializes in growing plants from seeds and propagation techniques."
    }
  ]

  const getCareGuides = () => {
    switch (selectedCategory) {
      case 'trees': return treeCareGuides
      case 'flowers': return flowerCareGuides
      case 'seeds': return seedCareGuides
      default: return plantCareGuides
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700'
      case 'Advanced': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-forest-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-forest-500 to-forest-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🌿 Plant Care Guide
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Expert advice to help your plants thrive. From beginner basics to advanced techniques.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-forest-300" />
                <Input
                  type="search"
                  placeholder="Search care guides..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-forest-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              {careCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Care Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-forest-800 mb-8">
                {careCategories.find(cat => cat.id === selectedCategory)?.name} Care Guides
              </h2>
              
              <div className="space-y-6">
                {getCareGuides().map((guide, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          {guide.icon}
                          <div>
                            <CardTitle className="text-forest-800">{guide.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className={getDifficultyColor(guide.difficulty)}>
                                {guide.difficulty}
                              </Badge>
                              <span className="text-sm text-forest-500">{guide.readTime}</span>
                              <Badge variant="outline">{guide.category}</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-forest-600 mb-4">{guide.summary}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-forest-700">Key Tips:</h4>
                        <ul className="space-y-1">
                          {guide.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2 text-sm text-forest-600">
                              <ChevronRight className="h-4 w-4 text-forest-400 mt-0.5 flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-forest-800">Quick Care Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Droplets className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-forest-700">Watering Rule</p>
                      <p className="text-sm text-forest-600">When in doubt, wait it out</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Sun className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium text-forest-700">Light Check</p>
                      <p className="text-sm text-forest-600">Most plants love bright, indirect light</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Leaf className="h-5 w-5 text-forest-500" />
                    <div>
                      <p className="font-medium text-forest-700">Healthy Signs</p>
                      <p className="text-sm text-forest-600">New growth means happy plant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Care */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-700">Emergency Plant Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-600 mb-4">
                    Plant in distress? Get immediate help from our experts.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Emergency Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Consultation */}
      <section className="py-16 bg-forest-25">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">Connect with Plant Experts</h2>
            <p className="text-forest-600 max-w-2xl mx-auto">
              Get personalized advice from certified horticulturists and plant specialists. 
              Book a consultation or ask questions in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {experts.map((expert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-forest-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Leaf className="h-10 w-10 text-forest-600" />
                  </div>
                  
                  <h3 className="font-semibold text-forest-800 mb-1">{expert.name}</h3>
                  <p className="text-sm text-forest-600 mb-2">{expert.specialty}</p>
                  
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{expert.rating}</span>
                    <span className="text-xs text-forest-500">({expert.reviews})</span>
                  </div>
                  
                  <p className="text-xs text-forest-500 mb-3">{expert.experience} experience</p>
                  
                  <div className="space-y-1 mb-4">
                    {expert.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs mr-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button size="sm" className="w-full bg-forest-500 hover:bg-forest-600">
                    <Calendar className="h-3 w-3 mr-1" />
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <MessageCircle className="h-12 w-12 text-forest-500 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-800 mb-2">Live Chat</h3>
                <p className="text-sm text-forest-600 mb-4">
                  Get instant answers from our plant experts
                </p>
                <Button className="bg-forest-500 hover:bg-forest-600">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-forest-500 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-800 mb-2">Phone Consultation</h3>
                <p className="text-sm text-forest-600 mb-4">
                  Schedule a call with a plant specialist
                </p>
                <Button className="bg-forest-500 hover:bg-forest-600">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-forest-500 mx-auto mb-4" />
                <h3 className="font-semibold text-forest-800 mb-2">Email Support</h3>
                <p className="text-sm text-forest-600 mb-4">
                  Send photos and get detailed advice
                </p>
                <Button className="bg-forest-500 hover:bg-forest-600">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-forest-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Weekly Plant Care Tips</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert plant care advice delivered to your inbox every week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-forest-200"
            />
            <Button className="bg-white text-forest-600 hover:bg-forest-50">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
