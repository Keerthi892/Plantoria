import { Link } from 'react-router-dom'
import { Leaf, Heart, Shield, Truck, Users, Star, Award, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-forest-500" />,
      title: "Curated Plant Collection",
      description: "Hand-picked plants from trusted growers worldwide. Every plant meets our strict quality standards."
    },
    {
      icon: <Shield className="h-8 w-8 text-forest-500" />,
      title: "30-Day Health Guarantee",
      description: "If your plant doesn't thrive in the first 30 days, we'll replace it free of charge."
    },
    {
      icon: <Truck className="h-8 w-8 text-forest-500" />,
      title: "Safe Plant Delivery",
      description: "Special packaging ensures your plants arrive healthy and ready to thrive in their new home."
    },
    {
      icon: <Users className="h-8 w-8 text-forest-500" />,
      title: "Expert Plant Guides",
      description: "Access to certified horticulturists and plant care experts available for personalized advice."
    },
    {
      icon: <Star className="h-8 w-8 text-forest-500" />,
      title: "Premium Quality",
      description: "We partner with the best nurseries and growers to bring you healthy, vibrant plants."
    },
    {
      icon: <Globe className="h-8 w-8 text-forest-500" />,
      title: "Eco-Friendly Practices",
      description: "Sustainable packaging, carbon-neutral shipping, and support for reforestation projects."
    }
  ]

  const stats = [
    { number: "50,000+", label: "Happy Plant Parents" },
    { number: "2,000+", label: "Plant Varieties" },
    { number: "500+", label: "Expert Care Guides" },
    { number: "99%", label: "Customer Satisfaction" }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Head Horticulturist",
      expertise: "Indoor Plants & Air Purification",
      image: "/placeholder.svg"
    },
    {
      name: "Miguel Rodriguez",
      role: "Plant Care Specialist",
      expertise: "Tropical Plants & Orchids",
      image: "/placeholder.svg"
    },
    {
      name: "Emma Chen",
      role: "Succulent Expert",
      expertise: "Desert Plants & Propagation",
      image: "/placeholder.svg"
    },
    {
      name: "David Thompson",
      role: "Tree Specialist",
      expertise: "Indoor Trees & Bonsai",
      image: "/placeholder.svg"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-50 via-sage-50 to-moss-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-forest-500 rounded-full mr-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-forest-800">
                🌿 Plantoria
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-forest-700 mb-6">
              Your Friendly Plant Store
            </h2>
            
            <p className="text-xl text-forest-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Plantoria, we believe everyone deserves to live surrounded by the beauty and benefits of nature. 
              We make plant parenthood accessible, enjoyable, and successful for gardeners of all experience levels.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-forest-500 hover:bg-forest-600 text-white px-4 py-2">
                🌱 Founded in 2020
              </Badge>
              <Badge className="bg-forest-500 hover:bg-forest-600 text-white px-4 py-2">
                🏆 #1 Plant Store
              </Badge>
              <Badge className="bg-forest-500 hover:bg-forest-600 text-white px-4 py-2">
                🌍 Eco-Friendly
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 text-center mb-12">Our Mission</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-forest-700 mb-4">
                  Making Plant Shopping Simple
                </h3>
                <p className="text-forest-600 mb-6 leading-relaxed">
                  In real life, it's hard to find specific types of plants, seeds, and trees. Plantoria solves this 
                  problem by making the search, selection, and payment process easy through our modern online platform.
                </p>
                
                <h3 className="text-2xl font-semibold text-forest-700 mb-4">
                  Supporting Your Green Journey
                </h3>
                <p className="text-forest-600 leading-relaxed">
                  Whether you're a seasoned gardener or just starting your green journey, we provide the plants, 
                  tools, and knowledge you need to create your perfect indoor or outdoor oasis.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/9707245/pexels-photo-9707245.jpeg"
                  alt="Beautiful plant collection" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-forest-500" />
                    <div>
                      <p className="font-semibold text-forest-800">Plant Love</p>
                      <p className="text-sm text-forest-600">Guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-forest-25">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-forest-800 text-center mb-12">Why Choose Plantoria?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-forest-800 mb-3">{feature.title}</h3>
                  <p className="text-forest-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-forest-800 text-center mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-forest-600 mb-2">{stat.number}</div>
                <div className="text-forest-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-forest-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 text-center mb-12">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-forest-600">
              <p className="text-center mb-8 text-xl leading-relaxed">
                Plantoria was born from a simple observation: finding the right plants shouldn't be complicated.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-base">
                <div>
                  <h3 className="text-xl font-semibold text-forest-700 mb-4">The Problem We Saw</h3>
                  <p className="mb-4">
                    Many people wanted to bring nature into their homes but struggled to find reliable sources 
                    for quality plants. Local nurseries had limited selections, and online options were often 
                    confusing or unreliable.
                  </p>
                  <p>
                    We also noticed that new plant parents often felt overwhelmed without proper guidance, 
                    leading to plant casualties and discouragement.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-forest-700 mb-4">Our Solution</h3>
                  <p className="mb-4">
                    We created Plantoria as a comprehensive platform that not only provides access to a vast 
                    selection of healthy plants but also offers the education and support needed for success.
                  </p>
                  <p>
                    From our carefully curated plant collection to our expert care guides and responsive 
                    customer support, every aspect of Plantoria is designed to make your plant journey joyful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 text-center mb-12">Built With Modern Technology</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-forest-700 mb-4">Frontend Technology</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">React 18</Badge>
                  <Badge variant="outline" className="mr-2">TypeScript</Badge>
                  <Badge variant="outline" className="mr-2">TailwindCSS</Badge>
                  <Badge variant="outline" className="mr-2">Vite</Badge>
                </div>
                <p className="text-forest-600 mt-4 text-sm">
                  Modern, fast, and responsive user interface built with the latest web technologies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-forest-700 mb-4">Backend & Features</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Node.js</Badge>
                  <Badge variant="outline" className="mr-2">Express.js</Badge>
                  <Badge variant="outline" className="mr-2">MongoDB</Badge>
                  <Badge variant="outline" className="mr-2">Stripe API</Badge>
                </div>
                <p className="text-forest-600 mt-4 text-sm">
                  Robust backend infrastructure with secure payments and email OTP authentication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Preview */}
      <section className="py-16 bg-forest-25">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">Meet Our Plant Experts</h2>
            <p className="text-forest-600 max-w-2xl mx-auto">
              Our team of certified horticulturists and plant specialists are here to help you succeed with your plants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((expert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-forest-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-forest-600" />
                  </div>
                  <h3 className="font-semibold text-forest-800 mb-1">{expert.name}</h3>
                  <p className="text-sm text-forest-600 mb-2">{expert.role}</p>
                  <p className="text-xs text-forest-500">{expert.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-forest-500 hover:bg-forest-600">
              Get Expert Advice
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-forest-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Plant Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy plant parents who trust Plantoria for their green needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-forest-600 hover:bg-forest-50" asChild>
              <Link to="/plants">Shop Plants Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-forest-600" asChild>
              <Link to="/care-guide">Browse Care Guides</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
