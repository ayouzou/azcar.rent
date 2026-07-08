'use client'

import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'
import { MapPin } from 'lucide-react'

const cities = [
  {
    name: 'Casablanca',
    type: 'Airport & City',
    description: 'Main hub - Mohamed V International Airport',
    icon: '🏙️',
  },
  {
    name: 'Marrakech',
    type: 'Airport & City',
    description: 'Menara Airport - Red City',
    icon: '🕌',
  },
  {
    name: 'Agadir',
    type: 'Airport & City',
    description: 'Beach resort - Al Massira Airport',
    icon: '🏖️',
  },
  {
    name: 'Tangier',
    type: 'Airport & City',
    description: 'Northern gateway - Ibn Battuta Airport',
    icon: '⛵',
  },
  {
    name: 'Fes',
    type: 'Airport & City',
    description: 'Historical center - Saïs Airport',
    icon: '🏛️',
  },
  {
    name: 'Essaouira',
    type: 'City',
    description: 'Coastal city with historic medina',
    icon: '🌊',
  },
]

export default function CitiesSection() {
  const { language } = useApp()
  const trans = getTrans(language)

  return (
    <section className="py-16 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">{trans.home.citiesTitle}</h2>
          <p className="text-muted-foreground">Available in all major Moroccan cities and airports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{city.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition">
                    {city.name}
                  </h3>
                  <p className="text-xs text-accent font-semibold mb-1">{city.type}</p>
                  <p className="text-sm text-muted-foreground">{city.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20 text-center">
          <p className="text-muted-foreground mb-4">Can&apos;t find your city?</p>
          <p className="text-lg font-semibold text-foreground mb-4">
            Contact us for custom pickup and drop-off locations
          </p>
          <button className="px-6 py-2 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-colors">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}
