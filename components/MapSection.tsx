'use client'

import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'
import { MapPin, Phone } from 'lucide-react'

export default function MapSection() {
  const { language } = useApp()
  const trans = getTrans(language)

  return (
    <section className="py-16 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">{trans.home.mapTitle}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="h-80 bg-muted rounded-lg overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1439629626277!2d-7.589824!3d33.3734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sM%C3%B4hammed%20V%20International%20Airport!5e0!3m2!1sen!2sma!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Location"
            ></iframe>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {trans.home.mapLocation}
              </h3>
              <p className="text-muted-foreground mb-6">
                We are located at the Mohamed V International Airport in Casablanca, Morocco&apos;s main transportation hub. Easily accessible from anywhere in the city.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">{trans.footer.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a
                    href="tel:+212608652898"
                    className="text-primary hover:text-accent transition"
                  >
                    {trans.footer.phone}
                  </a>
                </div>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
