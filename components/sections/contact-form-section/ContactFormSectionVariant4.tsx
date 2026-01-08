"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContactFormSectionVariant4Props {
  data?: {
    title?: string
    description?: string
    cities?: string[]
    serviceTypes?: string[]
  }
}

export default function ContactFormSectionVariant4({ data }: ContactFormSectionVariant4Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
        {data?.title || "Request Service"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email (Optional)
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-medium">
            City
          </Label>
          <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
            <SelectTrigger id="city" className="h-11">
              <SelectValue placeholder="Choose city" />
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

        <div className="space-y-2">
          <Label htmlFor="serviceType" className="text-sm font-medium">
            Service Needed
          </Label>
          <Select
            value={formData.serviceType}
            onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
          >
            <SelectTrigger id="serviceType" className="h-11">
              <SelectValue placeholder="Choose service" />
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

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Details
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
          />
        </div>

        <Button
          type="submit"
          className="w-full h-11 text-white font-medium"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Send
        </Button>
      </form>
    </div>
  )
}
