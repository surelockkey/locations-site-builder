# Footer Configuration

This file explains the footer configuration structure for the Utah SureLock & Key site.

## Configuration File
`config/sites/utah-surelockkey/footer.json`

## Structure

### Basic Content
- `description`: Short description shown in footer variant 1 and 2
- `tagline`: Extended tagline for footer variant 4
- `availability`: Working hours text (e.g., "24/7 Available")
- `copyright`: Copyright text (e.g., "All rights reserved.")

### Emergency Section (Variant 3)
- `emergencyTitle`: Main emergency banner title
- `emergencySubtitle`: Emergency banner subtitle
- `emergencyButtonText`: Text for emergency service button

### Call to Action
- `callButtonText`: Text for call buttons (e.g., "Call")

### Social Media Links
All social media platforms with their respective URLs:
- `instagram`
- `pinterest`
- `twitter`
- `tiktok`
- `medium`
- `youtube`
- `facebook`
- `linkedin`
- `map` - Google Maps link

### Navigation Sections

#### Services Section
```json
"services": {
  "title": "Our Services",
  "limit": 6
}
```

#### Quick Links
```json
"quickLinks": {
  "title": "Quick Links",
  "links": [
    { "label": "Home", "href": "/" },
    ...
  ]
}
```

#### Company Links (Footer Variant 4)
```json
"company": {
  "title": "Company",
  "links": [
    { "label": "About Us", "href": "/about" },
    ...
  ]
}
```

#### Legal Links (Footer Variant 4)
```json
"legal": {
  "links": [
    { "label": "Privacy Policy", "href": "/privacy" },
    ...
  ]
}
```

## Footer Variants

### Variant 1 (Default)
- 4-column layout
- Shows: description, services, quick links, contact info
- Social icons displayed

### Variant 2
- 2-column layout with gradient background
- Shows: description with CTA button, services, contact
- No social icons by default

### Variant 3
- Emergency-focused design
- Large emergency banner at top
- Shows: services, quick links, contact info

### Variant 4
- 5-column premium layout
- Shows: tagline, social icons (rounded), services, company links, contact
- Legal links in footer bottom
- Emergency service button

## Social Icons Component
Located at: `components/common/SocialIcons.tsx`

Supports 3 variants:
- `default`: Simple hover effect
- `rounded`: Rounded boxes with background color
- `squared`: Small rounded boxes

## Updating Social Links
Edit `footer.json` and update the `socialMedia` object with your links.
All social platforms are optional - if a link is not provided, the icon won't be displayed.
