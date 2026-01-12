"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useContactForm } from "@/hooks/useContactForm"
import { SiteConfig } from "@/types/config.types"

interface ContactFormSectionVariant1Props {
  data?: {
    title?: string
    description?: string
    cities?: string[]
    serviceTypes?: string[]
  }
  siteConfig?: SiteConfig
}

export default function ContactFormSectionVariant1({ data, siteConfig }: ContactFormSectionVariant1Props) {
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
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--color-text)" }}>
          {data?.title || "Tell Us What's Going On"}
        </h2>
        {data?.description && (
          <p className="text-base mt-3 leading-relaxed" style={{ color: "var(--color-text)" }}>
            {data.description}
          </p>
        )}
        <div className="mt-3 h-1 w-20 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
      </div>
      {/* </CHANGE> */}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-base font-semibold mb-2 block" style={{ color: "var(--color-text)" }}>
              Full Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12 text-base"
              placeholder="John Doe"
            />
          </div>

          <div>
            <Label
              htmlFor="phone"
              className="text-base font-semibold mb-2 block"
              style={{ color: "var(--color-text)" }}
            >
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-12 text-base"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-base font-semibold mb-2 block" style={{ color: "var(--color-text)" }}>
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-12 text-base"
            placeholder="john@example.com"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="city" className="text-base font-semibold mb-2 block" style={{ color: "var(--color-text)" }}>
              Your City *
            </Label>
            <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
              <SelectTrigger id="city" className="h-12 text-base">
                <SelectValue placeholder="Select your city" />
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
            <Label
              htmlFor="serviceType"
              className="text-base font-semibold mb-2 block"
              style={{ color: "var(--color-text)" }}
            >
              Service Type *
            </Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
            >
              <SelectTrigger id="serviceType" className="h-12 text-base">
                <SelectValue placeholder="Select service type" />
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
        </div>

        <div>
          <Label
            htmlFor="message"
            className="text-base font-semibold mb-2 block"
            style={{ color: "var(--color-text)" }}
          >
            Tell Us More
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            placeholder="Describe your situation or question..."
            className="text-base resize-none"
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
          className="w-full h-14 text-lg text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
      {/* </CHANGE> */}
    </div>
  )
}
