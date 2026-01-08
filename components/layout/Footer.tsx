"use client"
import { Footer as FooterWithVariants } from "./footers"
import type { FooterConfig } from "@/types/config.types"

interface FooterProps {
  branding: {
    companyName: string
    shortName: string
  }
  contact: {
    phone: string
    phoneDisplay: string
    email: string
    address: string
  }
  services: Array<{
    title: string
    slug: string
  }>
  footerConfig: FooterConfig
  variant?: string
}

export function Footer({ branding, contact, services, footerConfig, variant }: FooterProps) {
  return <FooterWithVariants branding={branding} contact={contact} services={services} footerConfig={footerConfig} variant={variant} />
}
