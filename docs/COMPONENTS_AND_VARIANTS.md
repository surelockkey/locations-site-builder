# Components and Variants Documentation

This document provides a complete reference of all available components, their variants, and how to use them in your locksmith site builder.

## Overview

The locksmith site builder uses a **modular component system** where each section type has **4 design variants** that you can choose from. All content and styling is controlled through JSON configuration files.

---

## Available Components

### Layout Components

#### 1. Header
**Purpose**: Site navigation and branding  
**Variants**: 4  
**Config Key**: `header`

- **Variant 1**: Classic horizontal nav with logo left, menu right
- **Variant 2**: Centered logo with menu below
- **Variant 3**: Sticky header with dropdown services menu
- **Variant 4**: Hamburger menu for mobile-first design

**Usage**:
```json
{
  "header": "variant1"
}
```

#### 2. Footer
**Purpose**: Site footer with links, contact info, and legal  
**Variants**: 4  
**Config Key**: `footer`

- **Variant 1**: Three-column layout with dark background
- **Variant 2**: Centered content with social icons
- **Variant 3**: Minimalist single column
- **Variant 4**: Multi-row layout with service links

**Usage**:
```json
{
  "footer": "variant1"
}
```

---

### Content Components

#### 3. Hero
**Purpose**: Main banner/hero section for pages  
**Variants**: 4  
**Config Key**: `hero`

- **Variant 1**: Full-width image with centered text
- **Variant 2**: Split screen - text left, image right
- **Variant 3**: Video background with overlay
- **Variant 4**: Minimal text-only hero

**Data Structure**:
```json
{
  "type": "hero",
  "variant": "2",
  "data": {
    "title": "Professional Locksmith Services",
    "subtitle": "24/7 Emergency Service Available",
    "image": "https://...",
    "cta": {
      "text": "Call Now",
      "phone": "(801) 123-4567"
    }
  }
}
```

#### 4. ServiceList
**Purpose**: Display list of services offered  
**Variants**: 4  
**Config Key**: `serviceList`

- **Variant 1**: Card grid with icons
- **Variant 2**: List view with images
- **Variant 3**: Carousel slider
- **Variant 4**: Accordion expandable list

**Data Structure**:
```json
{
  "type": "serviceList",
  "variant": "1",
  "data": {
    "title": "Our Services",
    "services": [
      {
        "title": "Car Key Replacement",
        "description": "Fast and reliable key replacement",
        "icon": "key",
        "link": "/services/car-key-replacement"
      }
    ]
  }
}
```

#### 5. ServiceInfo
**Purpose**: Detailed service information with checklist  
**Variants**: 4  
**Config Key**: `serviceInfo`

- **Variant 1**: Two-column checklist with CTA
- **Variant 2**: Single column with bordered sections
- **Variant 3**: Cards with icons
- **Variant 4**: Accordion format

**Data Structure**:
```json
{
  "type": "serviceInfo",
  "variant": "1",
  "data": {
    "title": "What We Offer",
    "description": "Complete locksmith solutions",
    "items": [
      "Key duplication",
      "Lock repair",
      "Emergency lockout"
    ],
    "cta": {
      "text": "Call us now",
      "phone": "(801) 123-4567"
    }
  }
}
```

#### 6. WhyChoose
**Purpose**: Highlight reasons to choose your business  
**Variants**: 4  
**Config Key**: `whyChoose`

- **Variant 1**: Icon grid layout
- **Variant 2**: Timeline/steps format
- **Variant 3**: Feature cards with hover effects
- **Variant 4**: Comparison table style

**Data Structure**:
```json
{
  "type": "whyChoose",
  "variant": "3",
  "data": {
    "title": "Why Choose Us",
    "features": [
      {
        "title": "24/7 Availability",
        "description": "Always here when you need us",
        "icon": "clock"
      }
    ]
  }
}
```

#### 7. BrandsWeServe
**Purpose**: Display car brands or manufacturers served  
**Variants**: 4  
**Config Key**: `brandsWeServe`

- **Variant 1**: Logo grid with grayscale hover
- **Variant 2**: Carousel slider
- **Variant 3**: Category grouped layout
- **Variant 4**: Minimalist text list

**Data Structure**:
```json
{
  "type": "brandsWeServe",
  "variant": "1",
  "data": {
    "title": "Car Brands We Serve",
    "brands": [
      {
        "name": "Toyota",
        "logo": "https://..."
      }
    ]
  }
}
```

#### 8. FAQ
**Purpose**: Frequently asked questions  
**Variants**: 4  
**Config Key**: `faq`

- **Variant 1**: Accordion with borders
- **Variant 2**: Card-based Q&A
- **Variant 3**: Two-column layout
- **Variant 4**: Minimal list format

**Data Structure**:
```json
{
  "type": "faq",
  "variant": "1",
  "data": {
    "title": "Frequently Asked Questions",
    "questions": [
      {
        "question": "How fast can you arrive?",
        "answer": "We typically arrive within 20-30 minutes."
      }
    ]
  }
}
```

#### 9. ContactForm / ContactFormSection
**Purpose**: Contact form for inquiries  
**Variants**: 4  
**Config Key**: `contactFormSection`

- **Variant 1**: Full-width form
- **Variant 2**: Form with sidebar info
- **Variant 3**: Compact inline form
- **Variant 4**: Multi-step wizard

**Data Structure**:
```json
{
  "type": "contactFormSection",
  "variant": "1",
  "data": {
    "title": "Get a Quote",
    "subtitle": "Tell us about your needs"
  }
}
```

#### 10. ContactInfo
**Purpose**: Display contact information prominently  
**Variants**: 4  
**Config Key**: `contactInfo`

- **Variant 1**: Card layout with icons
- **Variant 2**: List view with phone/email
- **Variant 3**: Map integration
- **Variant 4**: Horizontal banner

**Data Structure**:
```json
{
  "type": "contactInfo",
  "variant": "1",
  "data": {
    "title": "Fastest Way to Reach Us",
    "phone": "(801) 123-4567",
    "email": "info@locksmith.com",
    "hours": "24/7"
  }
}
```

#### 11. LocationList
**Purpose**: Display list of service locations  
**Variants**: 4  
**Config Key**: `locationList`

- **Variant 1**: Grid of location cards
- **Variant 2**: Map with location pins
- **Variant 3**: List with filters
- **Variant 4**: Table format

**Data Structure**:
```json
{
  "type": "locationList",
  "variant": "1",
  "data": {
    "title": "Areas We Serve",
    "locations": [
      {
        "name": "Salt Lake City",
        "slug": "salt-lake-city",
        "image": "https://..."
      }
    ]
  }
}
```

#### 12. PhotoGallery
**Purpose**: Display photos of completed work  
**Variants**: 4  
**Config Key**: `photoGallery`

- **Variant 1**: Grid layout
- **Variant 2**: Masonry style
- **Variant 3**: Hero image with thumbnails
- **Variant 4**: Alternating rows

**Data Structure**:
```json
{
  "type": "photoGallery",
  "variant": "1",
  "data": {
    "title": "Our Work Gallery",
    "photos": [
      {
        "url": "https://...",
        "alt": "Lock installation",
        "caption": "Recent residential project"
      }
    ]
  }
}
```

#### 13. AreasAndHours
**Purpose**: Combined service areas and working hours  
**Variants**: 4  
**Config Key**: `areasAndHours`

- **Variant 1**: Side-by-side cards
- **Variant 2**: Tabbed interface
- **Variant 3**: Vertical stack
- **Variant 4**: Integrated map view

#### 14. TermsContent
**Purpose**: Legal terms and conditions page  
**Variants**: 4  
**Config Key**: `termsContent`

- **Variant 1**: Card-based sections
- **Variant 2**: Bordered document style
- **Variant 3**: Sticky sidebar navigation
- **Variant 4**: Accordion format

#### 15. CTA (Call to Action)
**Purpose**: Prominent action buttons  
**Variants**: 4  
**Config Key**: `cta`

- **Variant 1**: Full-width banner
- **Variant 2**: Card with icon
- **Variant 3**: Split design
- **Variant 4**: Minimal inline

---

## Configuration System

### Theme Configuration

Control colors and fonts globally:

**File**: `config/sites/{site-id}/theme.json`

```json
{
  "colors": {
    "primary": "#2563eb",
    "secondary": "#10b981",
    "accent": "#f59e0b",
    "background": "#ffffff",
    "text": "#1f2937",
    "footerBackground": "#1e293b"
  },
  "fonts": {
    "heading": "Inter",
    "body": "Inter"
  }
}
```

All components automatically use these theme colors via CSS variables.

### Variants Configuration

Select which variant to use for each component type:

**File**: `config/sites/{site-id}/variants.json`

```json
{
  "header": "variant1",
  "footer": "variant1",
  "hero": "variant2",
  "serviceList": "variant1",
  "serviceInfo": "1",
  "whyChoose": "variant3",
  "faq": "variant1",
  "contactFormSection": "1",
  "contactInfo": "1",
  "photoGallery": "1",
  "locationList": "1",
  "termsContent": "1",
  "brandsWeServe": "1",
  "areasAndHours": "1"
}
```

**Note**: Some variants use `"variant1"` format, others use `"1"`. Both work correctly.

### Page Configuration

Each page is defined by a JSON file that specifies which sections to display:

**File**: `config/sites/{site-id}/pages/home.json`

```json
{
  "seo": {
    "title": "Professional Locksmith Services | Your Company",
    "description": "24/7 emergency locksmith services...",
    "keywords": ["locksmith", "emergency", "24/7"]
  },
  "sections": [
    {
      "type": "hero",
      "variant": "2",
      "data": { ... }
    },
    {
      "type": "serviceList",
      "variant": "1",
      "data": { ... }
    },
    {
      "type": "whyChoose",
      "variant": "3",
      "data": { ... }
    }
  ]
}
```

---

## Creating New Sites

### Using the Generator Script

Run the site generator:

```bash
node scripts/create-site.js
```

This will:
1. Prompt for site details (ID, domain, company name, etc.)
2. Create a new folder in `config/sites/{site-id}/`
3. Generate all necessary config files from templates
4. Replace placeholders with your values

### Manual Creation

1. Copy the template folder:
   ```bash
   cp -r config/templates/default config/sites/new-site-id
   ```

2. Update all JSON files to replace placeholders:
   - `{{COMPANY_NAME}}`
   - `{{PHONE}}`
   - `{{EMAIL}}`
   - `{{SITE_DOMAIN}}`
   - etc.

3. Set environment variable:
   ```bash
   NEXT_PUBLIC_SITE_ID=new-site-id
   ```

4. Restart dev server:
   ```bash
   npm run dev
   ```

---

## Adding New Services

1. Create a new service file:
   ```bash
   config/sites/{site-id}/services/residential-locksmith.json
   ```

2. Define the service structure:
   ```json
   {
     "slug": "residential-locksmith",
     "title": "Residential Locksmith Services",
     "subtitle": "Home lock solutions",
     "seo": {
       "title": "Residential Locksmith | Your Company",
       "description": "Professional home locksmith services",
       "h1": "Expert Residential Locksmith Services",
       "keywords": ["residential locksmith", "home locks"]
     },
     "hero": {
       "title": "Residential Locksmith Services",
       "subtitle": "Secure your home with expert service",
       "image": "https://...",
       "cta": {
         "text": "Call Now",
         "phone": "(801) 123-4567"
       }
     },
     "sections": [
       {
         "type": "serviceInfo",
         "variant": "1",
         "data": { ... }
       },
       {
         "type": "whyChoose",
         "variant": "3",
         "data": { ... }
       },
       {
         "type": "faq",
         "variant": "1",
         "data": { ... }
       }
     ]
   }
   ```

3. Add to navigation:
   ```json
   {
     "label": "Services",
     "href": "#",
     "submenu": [
       {
         "label": "Residential Locksmith",
         "subtitle": "Home lock solutions",
         "href": "/services/residential-locksmith"
       }
     ]
   }
   ```

---

## Adding New Locations

1. Create location file:
   ```bash
   config/sites/{site-id}/locations/salt-lake-city.json
   ```

2. Define location structure:
   ```json
   {
     "slug": "salt-lake-city",
     "name": "Salt Lake City",
     "state": "Utah",
     "seo": {
       "title": "Salt Lake City Locksmith | 24/7 Service",
       "description": "Professional locksmith services in SLC",
       "h1": "Locksmith Services in Salt Lake City, UT"
     },
     "hero": {
       "title": "Salt Lake City Locksmith",
       "subtitle": "Serving SLC and surrounding areas",
       "image": "https://..."
     },
     "sections": [
       {
         "type": "serviceList",
         "data": { ... }
       },
       {
         "type": "contactFormSection",
         "data": { ... }
       }
     ]
   }
   ```

---

## Best Practices

### Component Selection

- **Hero**: Use Variant 2 for service pages (split screen), Variant 1 for home
- **ServiceList**: Use Variant 1 (grid) for overview, Variant 4 (accordion) for details
- **ContactForm**: Use Variant 1 for dedicated contact pages, Variant 3 inline
- **FAQ**: Use Variant 1 (accordion) for better UX

### Content Guidelines

- Keep titles under 60 characters for SEO
- Descriptions should be 150-160 characters
- Use descriptive alt text for all images
- Include phone numbers with tel: links
- Include email addresses with mailto: links

### Performance

- Optimize images (WebP format, lazy loading)
- Limit sections per page to 6-8 for fast load
- Use placeholder images during development
- Test on mobile devices

### Accessibility

- All components support keyboard navigation
- ARIA labels are included
- Color contrast meets WCAG AA standards
- Screen reader friendly

---

## Troubleshooting

### Component Not Rendering

1. Check variant name in variants.json matches exactly
2. Verify data structure matches expected format
3. Check browser console for errors
4. Ensure section type is registered in DynamicPage component

### Styles Not Applying

1. Verify theme.json colors are valid hex codes
2. Check if CSS variables are loading (inspect element)
3. Clear browser cache
4. Restart dev server

### Images Not Loading

1. Verify image URLs are accessible
2. Check for CORS issues
3. Use HTTPS URLs in production
4. Confirm image file exists

---

## Support

For questions or issues:
1. Check this documentation
2. Review example site configs in `config/sites/utah-surelockkey/`
3. Inspect component code in `components/sections/`
4. Test with template defaults

---

## Component Checklist

✅ **Layout**: Header (4), Footer (4)  
✅ **Hero**: Hero (4)  
✅ **Services**: ServiceList (4), ServiceInfo (4)  
✅ **Features**: WhyChoose (4), Brands (4), BrandsWeServe (4)  
✅ **Contact**: ContactInfo (4), ContactFormSection (4), ContactForm (4)  
✅ **Content**: FAQ (4), CTA (4), ContentBlock (1), AreasAndHours (4)  
✅ **Media**: PhotoGallery (4)  
✅ **Location**: LocationList (4)  
✅ **Legal**: TermsContent (4)  

**Total**: 19 component types, 73 variants
