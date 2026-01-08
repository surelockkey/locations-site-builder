"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Phone, ChevronDown } from "lucide-react"
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

export function HeaderVariant4({ branding, contact, navigation, services = [] }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full" style={{ backgroundColor: "var(--color-background)" }}>
      <div style={{ backgroundColor: "var(--color-secondary)", color: "white" }}>
        <div className="container mx-auto px-4">
          <div className="flex h-8 items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <span>Professional Locksmith Services</span>
            </div>
            <div className="flex items-center gap-4">
              <a href={`tel:${contact.phone}`} className="hover:underline flex items-center gap-1">
                <Phone className="h-3 w-3" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 border-b">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {branding.logo ? (
              <img
                src={branding.logo || "/placeholder.svg"}
                alt={branding.logoAlt || branding.companyName}
                className="h-12 w-auto"
              />
            ) : (
              <span className="text-xl font-bold" style={{ color: "var(--color-primary)" }}>
                {branding.shortName}
              </span>
            )}
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              if (item.label === "Services" && services.length > 0) {
                return (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger
                      className="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-colors"
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
                  className="text-sm font-medium hover:opacity-70 transition-colors"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}>
              Get Quote
            </Button>
            <Button style={{ backgroundColor: "var(--color-accent)", color: "white" }}>Emergency Call</Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
