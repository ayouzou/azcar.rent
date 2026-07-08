'use client'

import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'
import { Check } from 'lucide-react'

export default function AboutSection() {
  const { language } = useApp()
  const trans = getTrans(language)

  const features = trans.home.aboutFeatures

  return (
    <section className="py-16 bg-secondary/5 rounded-lg mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">{trans.home.aboutTitle}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{trans.home.aboutDesc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-colors active:scale-95">
              {trans.home.learnMore}
            </button>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Since</p>
              <p className="text-4xl font-bold text-primary mb-2">2018</p>
              <p className="text-muted-foreground">Serving Morocco with excellence</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-accent mb-2">1000+</p>
                <p className="text-sm text-muted-foreground">Successful Rentals</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">150+</p>
                <p className="text-sm text-muted-foreground">Quality Vehicles</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-3xl font-bold text-accent mb-2">8</p>
                <p className="text-sm text-muted-foreground">Cities Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
