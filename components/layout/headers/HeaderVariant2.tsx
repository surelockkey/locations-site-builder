"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
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

export function HeaderVariant2({ branding, contact, navigation, services = [] }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {branding.logo ? (
              <img
                src={branding.logo || "/placeholder.svg"}
                alt={branding.logoAlt || branding.companyName}
                className="h-12 w-auto"
              />
            ) : (
              <div>
                <div className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
                  {branding.shortName}
                </div>
                <div className="text-xs" style={{ color: "var(--color-neutral)" }}>
                  24/7 Emergency Service
                </div>
              </div>
            )}
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
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
            <div className="text-right">
              <div className="text-xs" style={{ color: "var(--color-neutral)" }}>
                Call Us Now
              </div>
              <a
                href={`tel:${contact.phone}`}
                className="text-lg font-bold hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                {contact.phoneDisplay}
              </a>
            </div>
            <Button size="lg" style={{ backgroundColor: "var(--color-secondary)", color: "white" }}>
              Get Quote
            </Button>
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
