"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send } from "lucide-react"

interface ContactFormVariant3Props {
  title?: string
  description?: string
  phone?: string
  email?: string
  address?: string
}

export default function ContactFormVariant3({
  title = "Contact Us",
  description,
  phone,
  email,
  address,
}: ContactFormVariant3Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
              {description && <p className="text-lg text-muted-foreground mb-8">{description}</p>}

              <div className="space-y-6">
                {phone && (
                  <Card className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: "var(--color-primary-light)" }}>
                        <Phone className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                          Call Us Directly
                        </h3>
                        <a
                          href={`tel:${phone.replace(/\D/g, "")}`}
                          className="text-xl font-bold hover:underline"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {phone}
                        </a>
                        <p className="text-sm mt-1" style={{ color: "var(--color-neutral)" }}>
                          Available 24/7 for emergencies
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {email && (
                  <Card className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: "var(--color-primary-light)" }}>
                        <Mail className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                          Email Us
                        </h3>
                        <a
                          href={`mailto:${email}`}
                          className="hover:underline break-all"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {email}
                        </a>
                        <p className="text-sm mt-1" style={{ color: "var(--color-neutral)" }}>
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {address && (
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Our Location</h3>
                        <p className="text-muted-foreground">{address}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  required
                />
                <Input
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Service Type (Optional)"
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows={5}
                  required
                />
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
