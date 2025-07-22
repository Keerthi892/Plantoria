import { Sprout } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PlaceholderPageProps {
  title: string
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
        <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center">
          <Sprout className="w-8 h-8 text-forest-600" />
        </div>
        <h1 className="text-3xl font-bold text-forest-700">{title}</h1>
        <p className="text-muted-foreground max-w-md">
          This page is currently being cultivated! 🌱 
          <br />
          Our gardeners are working hard to bring you amazing content for {title.toLowerCase()}.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Want us to prioritize this page? Let us know!
          </p>
          <Button className="bg-forest-500 hover:bg-forest-600">
            Request Priority
          </Button>
        </div>
      </div>
    </div>
  )
}
