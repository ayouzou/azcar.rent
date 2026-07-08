'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  title?: string
  description?: string
}

export default function Accordion({ items, title, description }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null)

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        )}

        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openId === item.id && (
                <div className="px-6 py-4 border-t border-border bg-muted/30 text-muted-foreground animate-in fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
