'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImageCarousel from '@/components/ImageCarousel'
import cars from '@/data/cars.json'
import locations from '@/data/locations.json'
import { useApp } from '@/app/context/AppContext'
import { formatPrice } from '@/lib/i18n'
import { sendWhatsAppMessage } from '@/lib/whatsapp'
import { Users, Fuel, Zap, MapPin } from 'lucide-react'

export default function CarDetailsPage() {
  const params = useParams()
  const { currency } = useApp()
  const carId = parseInt(params.id as string)

  const car = cars.cars.find((c) => c.id === carId)

  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    pickupDate: '',
    dropoffDate: '',
  })

  if (!car) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Car Not Found</h1>
            <p className="text-muted-foreground mb-6">The car you&apos;re looking for doesn&apos;t exist.</p>
            <a href="/cars" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition">
              Back to Cars
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const calculateDuration = () => {
    if (!bookingData.pickupDate || !bookingData.dropoffDate) return 0
    const pickup = new Date(bookingData.pickupDate)
    const dropoff = new Date(bookingData.dropoffDate)
    const duration = Math.ceil((dropoff.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24))
    return Math.max(1, duration)
  }

  const duration = calculateDuration()
  const totalPrice = car.pricePerDay * duration

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hello! I would like to book a car.

*Car Details:*
Vehicle: ${car.name}
Price per Day: ${formatPrice(car.pricePerDay, currency)}
Total (${duration} days): ${formatPrice(totalPrice, currency)}

*Booking Information:*
Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
Pickup Location: ${bookingData.pickupLocation}
Pickup Date: ${bookingData.pickupDate}
Drop-off Date: ${bookingData.dropoffDate}
Duration: ${duration} days

Thank you!`

    sendWhatsAppMessage(null, message)
    setBookingData({
      name: '',
      email: '',
      phone: '',
      pickupLocation: '',
      pickupDate: '',
      dropoffDate: '',
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pb-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a href="/cars" className="text-primary hover:text-accent mb-6 inline-block">
            ← Back to Cars
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Carousel & Details */}
            <div className="lg:col-span-2">
              <ImageCarousel images={car.images} title={car.name} autoPlay={false} />

              <div className="mt-8 space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{car.name}</h1>
                  <p className="text-muted-foreground mb-4">{car.description}</p>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Users className="w-5 h-5" />
                      <p className="text-sm text-muted-foreground">Seats</p>
                    </div>
                    <p className="font-bold text-foreground">{car.seats}</p>
                  </div>

                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Zap className="w-5 h-5" />
                      <p className="text-sm text-muted-foreground">Transmission</p>
                    </div>
                    <p className="font-bold text-foreground">{car.transmission}</p>
                  </div>

                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Fuel className="w-5 h-5" />
                      <p className="text-sm text-muted-foreground">Fuel</p>
                    </div>
                    <p className="font-bold text-foreground">{car.fuelType}</p>
                  </div>

                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Model Year</p>
                    <p className="font-bold text-foreground">{car.year}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <span className="text-primary">✓</span>
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-card rounded-lg border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Book Now</h2>

                {/* Price Display */}
                <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Price per Day</p>
                  <p className="text-3xl font-bold text-primary">{formatPrice(car.pricePerDay, currency)}</p>
                </div>

                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Pickup Location</label>
                    <select
                      required
                      value={bookingData.pickupLocation}
                      onChange={(e) => setBookingData({ ...bookingData, pickupLocation: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Location</option>
                      {locations.locations.map((loc) => (
                        <option key={loc.id} value={loc.name}>
                          {loc.name} - {loc.city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Pickup Date</label>
                    <input
                      type="date"
                      required
                      value={bookingData.pickupDate}
                      onChange={(e) => setBookingData({ ...bookingData, pickupDate: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Drop-off Date</label>
                    <input
                      type="date"
                      required
                      value={bookingData.dropoffDate}
                      onChange={(e) => setBookingData({ ...bookingData, dropoffDate: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Duration & Total */}
                  {duration > 0 && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold text-foreground">{duration} day(s)</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-border">
                        <span className="font-semibold text-foreground">Total:</span>
                        <span className="font-bold text-lg text-primary">{formatPrice(totalPrice, currency)}</span>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!bookingData.name || !bookingData.pickupDate || !bookingData.dropoffDate}
                    className="w-full px-4 py-3 bg-primary hover:bg-accent disabled:bg-muted disabled:text-muted-foreground text-primary-foreground font-bold rounded-lg transition-colors active:scale-95"
                  >
                    Book via WhatsApp
                  </button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  We&apos;ll confirm your booking via WhatsApp within 15 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
