"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

interface ContactFormVariant2Props {
  title?: string
  description?: string
  phone?: string
  email?: string
  address?: string
}

export default function ContactFormVariant2({
  title = "Get in Touch",
  description,
  phone,
  email,
  address,
}: ContactFormVariant2Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
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
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
