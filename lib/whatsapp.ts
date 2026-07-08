import { getTrans, type Language } from '@/lib/i18n'

export const WHATSAPP_NUMBER = '+212608652898'
export const WHATSAPP_NUMBER_FORMATTED = '212608652898' // For wa.me link (without +)

export interface BookingDetails {
  name: string
  email: string
  phone: string
  carName: string
  pickupLocation: string
  pickupDate: string
  dropoffDate: string
  duration: string
  pricePerDay: number
  totalPrice: number
}

export const generateBookingMessage = (booking: BookingDetails, language: Language = 'en'): string => {
  const trans = getTrans(language)
  const whatsapp = trans.whatsapp

  return `
${whatsapp.bookingIntro}

*${whatsapp.bookingHeader}:*
${trans.booking.name}: ${booking.name}
${trans.booking.email}: ${booking.email}
${trans.booking.phone}: ${booking.phone}

*${whatsapp.carHeader}:*
${whatsapp.vehicle}: ${booking.carName}
${whatsapp.pricePerDay}: ${booking.pricePerDay} MAD
${whatsapp.totalPrice}: ${booking.totalPrice} MAD

*${whatsapp.rentalHeader}:*
${trans.booking.pickupLocation}: ${booking.pickupLocation}
${trans.booking.pickupDate}: ${booking.pickupDate}
${trans.booking.dropoffDate}: ${booking.dropoffDate}
${whatsapp.duration}: ${booking.duration} ${language === 'ar' ? 'أيام' : 'days'}

${whatsapp.thankYou}
  `.trim()
}

export const sendWhatsAppMessage = (details: BookingDetails | null = null, customMessage: string = '', language: Language = 'en') => {
  if (typeof window === 'undefined') return

  const message = details ? generateBookingMessage(details, language) : customMessage
  const encodedMessage = encodeURIComponent(message)
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER_FORMATTED}?text=${encodedMessage}`

  window.open(whatsappLink, '_blank', 'noopener,noreferrer')
}
