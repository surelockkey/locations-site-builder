"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContactForm } from "@/hooks/useContactForm";
import { SiteConfig } from "@/types/config.types";

interface ContactFormSectionVariant2Props {
  data?: {
    title?: string;
    description?: string;
    cities?: string[];
    serviceTypes?: string[];
  };
  siteConfig?: SiteConfig;
}

export default function ContactFormSectionVariant2({
  data,
  siteConfig,
}: ContactFormSectionVariant2Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceType: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { submitForm, isSubmitting } = useContactForm({
    siteUrl: siteConfig?.domain ? `https://${siteConfig.domain}` : "",
    siteEmail: siteConfig?.contact?.email || "",
    onSuccess: () => {
      setSuccessMessage("Thank you! Your message has been sent successfully.");
      setErrorMessage(null);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        serviceType: "",
        message: "",
      });
    },
    onError: (error) => {
      setErrorMessage("Sorry, something went wrong. Please try again or call us directly.");
      setSuccessMessage(null);
      console.error("Form submission error:", error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);
    await submitForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: `${formData.city} - ${formData.serviceType}`,
      message: formData.message,
    });
  };

  // Дефолтні дані, щоб селекти не були пустими, якщо пропси не прийшли
  const citiesList = data?.cities || ["New York", "London", "Kyiv"];
  const servicesList = data?.serviceTypes || [
    "Consultation",
    "Support",
    "Sales",
  ];

  return (
    <div
      className="w-full max-w-3xl mx-auto p-6 md:p-8 rounded-xl shadow-lg border"
      style={{
        backgroundColor: "var(--color-card)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mb-8">
        <h3
          className="text-2xl md:text-3xl font-bold"
          style={{ color: "var(--color-text)" }}
        >
          {data?.title || "Contact Form"}
        </h3>
        {data?.description && (
          <p className="text-muted-foreground mt-2">{data.description}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>
        </div>

        {/* Row 2: Email */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Row 3: City & Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="city">City *</Label>
            <Select
              value={formData.city}
              onValueChange={(value) =>
                setFormData({ ...formData, city: value })
              }
            >
              <SelectTrigger id="city">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {citiesList.map((city) => (
                  <SelectItem key={city} value={city.toLowerCase()}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="serviceType">Service *</Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) =>
                setFormData({ ...formData, serviceType: value })
              }
            >
              <SelectTrigger id="serviceType">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                {servicesList.map((service) => (
                  <SelectItem
                    key={service}
                    value={service.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            className="min-h-[120px]"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
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
          className="w-full text-white font-semibold mt-2 py-6 text-lg"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
