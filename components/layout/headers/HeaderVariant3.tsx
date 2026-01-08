"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Phone, Clock, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  branding: {
    companyName: string;
    shortName: string;
    logo?: string;
    logoAlt?: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    address: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  services?: Array<{
    slug: string;
    title: string;
    subtitle?: string;
  }>;
}

export function HeaderVariant3({
  branding,
  contact,
  navigation,
  services = [],
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="w-full"
      style={{ backgroundColor: "var(--color-primary)", color: "white" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {branding.logo ? (
              <img
                src={branding.logo || "/placeholder.svg"}
                alt={branding.logoAlt || branding.companyName}
                className="h-14 w-auto brightness-0 invert"
              />
            ) : (
              <span className="text-2xl font-bold text-white">
                {branding.shortName}
              </span>
            )}
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => {
              if (item.label === "Services" && services.length > 0) {
                return (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {services.map((service) => (
                        <DropdownMenuItem key={service.slug} asChild>
                          <Link
                            href={`/services/${service.slug}`}
                            className="cursor-pointer"
                          >
                            <div>
                              <div className="font-medium">{service.title}</div>
                              {service.subtitle && (
                                <div className="text-xs text-muted-foreground">
                                  {service.subtitle}
                                </div>
                              )}
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <div className="text-sm">
                <div className="font-semibold">24/7</div>
                <div className="text-xs opacity-90">Available</div>
              </div>
            </div>
            <Button
              size="lg"
              variant="secondary"
              style={{
                backgroundColor: "var(--color-secondary)",
                color: "white",
              }}
            >
              <Phone className="h-4 w-4 mr-2" />
              {contact.phoneDisplay}
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
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
  );
}
