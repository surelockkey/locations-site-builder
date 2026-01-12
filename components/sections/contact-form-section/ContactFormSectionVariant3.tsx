"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send } from "lucide-react"
import { useContactForm } from "@/hooks/useContactForm"
import { SiteConfig } from "@/types/config.types"

interface ContactFormSectionVariant3Props {
  data?: {
    title?: string
    description?: string
    cities?: string[]
    serviceTypes?: string[]
  }
  siteConfig?: SiteConfig
}

export default function ContactFormSectionVariant3({ data, siteConfig }: ContactFormSectionVariant3Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceType: "",
    message: "",
  })

  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { submitForm, isSubmitting } = useContactForm({
    siteUrl: siteConfig?.domain ? `https://${siteConfig.domain}` : "",
    siteEmail: siteConfig?.contact?.email || "",
    onSuccess: () => {
      setSuccessMessage("Thank you! Your message has been sent successfully.")
      setErrorMessage(null)
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        serviceType: "",
        message: "",
      })
    },
    onError: (error) => {
      setErrorMessage("Sorry, something went wrong. Please try again or call us directly.")
      setSuccessMessage(null)
      console.error("Form submission error:", error)
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage(null)
    setErrorMessage(null)
    await submitForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: `${formData.city} - ${formData.serviceType}`,
      message: formData.message,
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
          {data?.title || "Get A Quote"}
        </h2>
        {data?.description && <p style={{ color: "var(--color-text)" }}>{data.description}</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input
            placeholder="Your Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-12"
          />
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="h-12"
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-12"
          />
        </div>

        <div>
          <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select Your City *" />
            </SelectTrigger>
            <SelectContent>
              {data?.cities?.map((city) => (
                <SelectItem key={city} value={city.toLowerCase()}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select
            value={formData.serviceType}
            onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="What Do You Need? *" />
            </SelectTrigger>
            <SelectContent>
              {data?.serviceTypes?.map((service) => (
                <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Textarea
            placeholder="Additional details (optional)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
          />
        </div>

        {successMessage && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 text-white font-semibold flex items-center justify-center gap-2"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>
      </form>
    </div>
  )
}
