'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CarCard from '@/components/CarCard'
import cars from '@/data/cars.json'
import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'

export default function CarsPage() {
  const { language } = useApp()
  const trans = getTrans(language)
  const [sortBy, setSortBy] = useState('featured')
  const [filterTransmission, setFilterTransmission] = useState('all')
  const [filterSeats, setFilterSeats] = useState('all')

  let filteredCars = [...cars.cars]

  // Apply filters
  if (filterTransmission !== 'all') {
    filteredCars = filteredCars.filter((car) => car.transmission === filterTransmission)
  }
  if (filterSeats !== 'all') {
    filteredCars = filteredCars.filter((car) => car.seats === parseInt(filterSeats))
  }

  // Apply sorting
  if (sortBy === 'price-asc') {
    filteredCars.sort((a, b) => a.pricePerDay - b.pricePerDay)
  } else if (sortBy === 'price-desc') {
    filteredCars.sort((a, b) => b.pricePerDay - a.pricePerDay)
  } else if (sortBy === 'name') {
    filteredCars.sort((a, b) => a.name.localeCompare(b.name))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 mb-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/cars-hero-bg.png)' }}>
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {trans.nav.cars}
            </h1>
            <p className="text-lg text-white/90">
              {trans.carsPage.heroSubtitle}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          {/* Filters */}
          <div className="mb-8 p-6 bg-card rounded-lg border border-border">
            <h2 className="font-bold text-foreground mb-4">{trans.carsPage.filterAndSort}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="sort" className="block text-sm font-semibold text-foreground mb-2">
                  {trans.carsPage.sortBy}
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
                >
                  <option value="featured">{trans.carsPage.featured}</option>
                  <option value="price-asc">{trans.carsPage.priceLowToHigh}</option>
                  <option value="price-desc">{trans.carsPage.priceHighToLow}</option>
                  <option value="name">{trans.carsPage.nameAZ}</option>
                </select>
              </div>

              <div>
                <label htmlFor="transmission" className="block text-sm font-semibold text-foreground mb-2">
                  {trans.carsPage.transmission}
                </label>
                <select
                  id="transmission"
                  value={filterTransmission}
                  onChange={(e) => setFilterTransmission(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
                >
                  <option value="all">{trans.carsPage.allTypes}</option>
                  <option value="Automatic">{trans.carsPage.automatic}</option>
                  <option value="Manual">{trans.carsPage.manual}</option>
                </select>
              </div>

              <div>
                <label htmlFor="seats" className="block text-sm font-semibold text-foreground mb-2">
                  {trans.carsPage.seats}
                </label>
                <select
                  id="seats"
                  value={filterSeats}
                  onChange={(e) => setFilterSeats(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
                >
                  <option value="all">{trans.carsPage.allSizes}</option>
                  <option value="5">5 {trans.carsPage.seats}</option>
                  <option value="7">7 {trans.carsPage.seats}</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSortBy('featured')
                    setFilterTransmission('all')
                    setFilterSeats('all')
                  }}
                  className="w-full px-3 py-2 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-lg transition-colors text-sm"
                >
                  {trans.carsPage.resetFilters}
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">{trans.carsPage.showingVehicles.replace('{count}', filteredCars.length.toString())}</p>

          {/* Cars Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">{trans.carsPage.noCarsMatch}</p>
              <button
                onClick={() => {
                  setSortBy('featured')
                  setFilterTransmission('all')
                  setFilterSeats('all')
                }}
                className="px-6 py-2 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
