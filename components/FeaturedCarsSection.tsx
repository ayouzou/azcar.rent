'use client'

import Link from 'next/link'
import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'
import CarCard from './CarCard'
import cars from '@/data/cars.json'

export default function FeaturedCarsSection() {
  const { language } = useApp()
  const trans = getTrans(language)

  // Show only first 6 cars
  const featuredCars = cars.cars.slice(0, 6)

  return (
    <section className="py-16 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">{trans.home.carsTitle}</h2>
          <p className="text-muted-foreground">{trans.home.featuredCarsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredCars.map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              name={car.name}
              image={car.images[0]}
              seats={car.seats}
              transmission={car.transmission}
              fuelType={car.fuelType}
              pricePerDay={car.pricePerDay}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/cars"
            className="px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-colors active:scale-95"
          >
            {trans.home.viewAllCars}
          </Link>
        </div>
      </div>
    </section>
  )
}
