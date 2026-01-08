"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Phone, MapPin, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface HeaderProps {
  branding: {
    companyName: string
    shortName: string
    logo?: string
    logoAlt?: string
  }
  contact: {
    phone: string
    phoneDisplay: string
    address: string
  }
  navigation: Array<{
    label: string
    href: string
  }>
  services?: Array<{
    slug: string
    title: string
    subtitle?: string
  }>
}

export function HeaderVariant1({ branding, contact, navigation, services = [] }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Top Bar */}
      <div style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{contact.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${contact.phone}`} className="font-semibold hover:underline">
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {branding.logo ? (
              <img
                src={branding.logo || "/placeholder.svg"}
                alt={branding.logoAlt || branding.companyName}
                className="h-10 w-auto"
              />
            ) : (
              <span className="text-xl font-bold" style={{ color: "var(--color-text)" }}>
                {branding.shortName}
              </span>
            )}
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => {
              if (item.label === "Services" && services.length > 0) {
                return (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger
                      className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {services.map((service) => (
                        <DropdownMenuItem key={service.slug} asChild>
                          <Link href={`/services/${service.slug}`} className="cursor-pointer">
                            <div>
                              <div className="font-medium">{service.title}</div>
                              {service.subtitle && (
                                <div className="text-xs text-muted-foreground">{service.subtitle}</div>
                              )}
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
              <a href={`tel:${contact.phone}`}>Call Now</a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium transition-colors hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
                  <a href={`tel:${contact.phone}`}>Call Now</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
