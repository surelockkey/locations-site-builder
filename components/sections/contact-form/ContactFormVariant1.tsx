"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import { useContactForm } from "@/hooks/useContactForm"
import { SiteConfig } from "@/types/config.types"

interface ContactFormVariant1Props {
  title?: string
  description?: string
  phone?: string
  email?: string
  address?: string
  siteConfig?: SiteConfig
}

export default function ContactFormVariant1({
  title = "Get In Touch",
  description,
  phone,
  email,
  address,
  siteConfig,
}: ContactFormVariant1Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
        service: "",
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
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>}
        {description && (
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">{description}</p>
        )}

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <Input
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="e.g., Car lockout, Lock installation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your locksmith needs..."
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
                className="w-full"
                size="lg"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is available 24/7 to answer your questions and help you schedule an appointment.
              </p>
            </div>

            {phone && (
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-primary hover:underline">
                    {phone}
                  </a>
                </div>
              </div>
            )}

            {email && (
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href={`mailto:${email}`} className="text-primary hover:underline">
                    {email}
                  </a>
                </div>
              </div>
            )}

            {address && (
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
