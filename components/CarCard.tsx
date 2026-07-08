'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useApp } from '@/app/context/AppContext'
import { formatPrice, getTrans } from '@/lib/i18n'
import { Users, Fuel, Zap } from 'lucide-react'

interface CarCardProps {
  id: number
  name: string
  image: string
  seats: number
  transmission: string
  fuelType: string
  pricePerDay: number
}

export default function CarCard({
  id,
  name,
  image,
  seats,
  transmission,
  fuelType,
  pricePerDay,
}: CarCardProps) {
  const { currency, language } = useApp()
  const trans = getTrans(language)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/cars/${id}`}>
      <div
        className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-lg text-foreground mb-2 text-balance">{name}</h3>

          {/* Features */}
          <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{seats} {trans.carDetailsPage.seats.toLowerCase()}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Zap className="w-4 h-4" />
              <span className="truncate">{transmission}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Fuel className="w-4 h-4" />
              <span className="truncate">{fuelType}</span>
            </div>
          </div>

          {/* Price and Button */}
          <div className="mt-auto flex items-center justify-between gap-2 pt-4 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground">{trans.carDetailsPage.pricePerDay}</p>
              <p className="font-bold text-lg text-primary">{formatPrice(pricePerDay, currency)}</p>
            </div>
            <button className="px-4 py-2 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-colors active:scale-95">
              {trans.carDetailsPage.bookNow}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
