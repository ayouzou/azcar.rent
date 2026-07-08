'use client'

import Link from 'next/link'
import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'
import { MapPin, Phone, Mail, Share2, Heart, ExternalLink } from 'lucide-react'

export default function Footer() {
  const { language } = useApp()
  const trans = getTrans(language)

  return (
    <footer className="bg-secondary/10 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                AZ
              </div>
              <span className="font-bold text-lg text-foreground">AZ Rent Car</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {trans.footer.companyDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{trans.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition">
                  {trans.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition">
                  {trans.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-muted-foreground hover:text-primary transition">
                  {trans.nav.cars}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition">
                  {trans.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{trans.footer.policies}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  {trans.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  {trans.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{trans.footer.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{trans.footer.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+212608652898" className="text-muted-foreground hover:text-primary transition">
                  {trans.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@azrentcar.ma" className="text-muted-foreground hover:text-primary transition">
                  {trans.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 flex justify-center gap-4 mb-8">
          <a href="#" className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition">
            <Share2 className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition">
            <Heart className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <p>{trans.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
