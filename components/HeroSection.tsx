'use client'

import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import ImageCarousel from './ImageCarousel'

const heroImages = [
  'images/images-cars/image-slide/bmw-1.png',
  'images/images-cars/image-slide/bmw-3.png',
  'images/images-cars/image-slide/mercedes-1.png',
  'images/images-cars/image-slide/hyundai-1.png',
]

export default function HeroSection() {
  const { language } = useApp()
  const trans = getTrans(language)

  return (
    <section className="py-0 mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="py-8 lg:py-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
              {trans.home.heroTitle}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              {trans.home.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cars"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-colors active:scale-95"
              >
                {trans.home.bookNow}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors active:scale-95"
              >
                {trans.home.learnMore}
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground">{trans.home.happyCustomers}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">1000+</p>
                <p className="text-muted-foreground">{trans.home.bookings}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-muted-foreground">{trans.home.support}</p>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="lg:sticky lg:top-32">
            <ImageCarousel images={heroImages} title={trans.home.featuredVehicles} autoPlay interval={4000} />
          </div>
        </div>
      </div>
    </section>
  )
}
