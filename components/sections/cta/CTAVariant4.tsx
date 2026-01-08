// Floating sticky bottom bar
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"
import { useState } from "react"

interface CTAVariant4Props {
  data: {
    title: string
    description?: string
    ctaPrimary: { text: string; link: string }
  }
}

export default function CTAVariant4({ data }: CTAVariant4Props) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 shadow-2xl border-t-4 border-blue-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{data.title}</h3>
            {data.description && <p className="text-sm text-blue-100 hidden sm:block">{data.description}</p>}
          </div>
          <Button asChild size="lg" variant="secondary">
            <Link href={data.ctaPrimary.link}>{data.ctaPrimary.text}</Link>
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-blue-200 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
