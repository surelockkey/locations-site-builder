"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useContactForm } from "@/hooks/useContactForm"
import { SiteConfig } from "@/types/config.types"

interface ContactFormVariant2Props {
  title?: string
  description?: string
  phone?: string
  email?: string
  address?: string
  siteConfig?: SiteConfig
}

export default function ContactFormVariant2({
  title = "Get in Touch",
  description,
  phone,
  email,
  address,
  siteConfig,
}: ContactFormVariant2Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { submitForm, isSubmitting } = useContactForm({
    siteUrl: siteConfig?.domain ? `https://${siteConfig.domain}` : "",
    siteEmail: siteConfig?.contact?.email || email || "",
    onSuccess: () => {
      setSuccessMessage("Thank you! Your message has been sent successfully.")
      setErrorMessage(null)
      setFormData({
        name: "",
        email: "",
        phone: "",
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
    await submitForm(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>}
          {description && <p className="text-lg text-muted-foreground text-center mb-12">{description}</p>}

          <div className="bg-card border rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="flex flex-col items-center p-4 rounded-lg border transition-all"
                  style={{ borderColor: "var(--color-neutral)", backgroundColor: "var(--color-background)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-primary)"
                    e.currentTarget.style.backgroundColor = "var(--color-primary-light)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-neutral)"
                    e.currentTarget.style.backgroundColor = "var(--color-background)"
                  }}
                >
                  <Phone className="w-8 h-8 mb-2" style={{ color: "var(--color-primary)" }} />
                  <span className="text-sm mb-1" style={{ color: "var(--color-neutral)" }}>
                    Call Us
                  </span>
                  <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                    {phone}
                  </span>
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex flex-col items-center p-4 rounded-lg border transition-all"
                  style={{ borderColor: "var(--color-neutral)", backgroundColor: "var(--color-background)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-primary)"
                    e.currentTarget.style.backgroundColor = "var(--color-primary-light)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-neutral)"
                    e.currentTarget.style.backgroundColor = "var(--color-background)"
                  }}
                >
                  <Mail className="w-8 h-8 mb-2" style={{ color: "var(--color-primary)" }} />
                  <span className="text-sm mb-1" style={{ color: "var(--color-neutral)" }}>
                    Email
                  </span>
                  <span className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>
                    {email}
                  </span>
                </a>
              )}
              {address && (
                <div className="flex flex-col items-center p-4 rounded-lg border">
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground mb-1">Location</span>
                  <span className="font-semibold text-center">{address}</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={4}
                required
              />

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

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
