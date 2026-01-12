"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"
import { useContactForm } from "@/hooks/useContactForm"
import { SiteConfig } from "@/types/config.types"

interface ContactFormVariant4Props {
  title?: string
  description?: string
  phone?: string
  email?: string
  address?: string
  siteConfig?: SiteConfig
}

export default function ContactFormVariant4({
  title = "Quick Contact",
  description,
  phone,
  email,
  siteConfig
}: ContactFormVariant4Props) {
  const [formData, setFormData] = useState({
    name: "",
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
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-lg text-primary-foreground/90 mb-8">{description}</p>}

          <div className="bg-background text-foreground rounded-xl p-8 mb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                />
              </div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Brief description of your needs..."
                rows={3}
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
                {isSubmitting ? "Sending..." : "Request Callback"}
              </Button>
            </form>
          </div>

          {phone && (
            <div>
              <p className="mb-3 text-lg" style={{ color: "white", opacity: 0.9 }}>
                Or call us directly:
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <a href={`tel:${phone.replace(/\D/g, "")}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {phone}
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
