# Site Structure Documentation

This document explains the complete structure and architecture of the multi-site locksmith platform.

## Project Architecture

```
locksmith-site-builder/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home page (dynamic)
│   ├── layout.tsx               # Root layout
│   ├── services/
│   │   ├── page.tsx            # Services listing
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic service pages
│   ├── locations/
│   │   ├── page.tsx            # Locations listing
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic location pages
│   ├── gallery/
│   │   └── page.tsx            # Photo gallery page
│   ├── contact-us/
│   │   └── page.tsx            # Contact page
│   └── terms-and-conditions/
│       └── page.tsx            # Terms page
│
├── components/
│   ├── layout/
│   │   ├── headers/            # Header variants
│   │   ├── footers/            # Footer variants
│   │   ├── Header.tsx          # Header wrapper
│   │   ├── Footer.tsx          # Footer wrapper
│   │   └── SiteLayout.tsx      # Main layout component
│   ├── sections/               # All section components (see below)
│   ├── pages/                  # Page-level components
│   │   ├── DynamicPage.tsx    # Home page renderer
│   │   ├── DynamicServicePage.tsx
│   │   ├── DynamicLocationPage.tsx
│   │   └── ContactPage.tsx
│   ├── common/                 # Shared components
│   │   ├── CallUs.tsx
│   │   └── ContactUs.tsx
│   └── ui/                     # shadcn/ui components
│
├── config/
│   ├── sites/                  # Site-specific configs
│   │   └── {site-id}/
│   │       ├── index.json      # Site metadata
│   │       ├── branding.json   # Branding config
│   │       ├── contact.json    # Contact info
│   │       ├── theme.json      # Theme colors/fonts
│   │       ├── variants.json   # Component variants
│   │       ├── navigation.json # Menu structure
│   │       ├── pages/
│   │       │   ├── home.json
│   │       │   ├── gallery.json
│   │       │   ├── contact-us.json
│   │       │   ├── locations.json
│   │       │   └── terms.json
│   │       ├── services/       # Service page configs
│   │       │   ├── automotive-locksmith.json
│   │       │   ├── car-key-programming.json
│   │       │   ├── emergency-locksmith.json
│   │       │   └── ...
│   │       └── locations/      # Location page configs
│   │           ├── salt-lake-city.json
│   │           └── ...
│   └── templates/
│       └── default/            # Template for new sites
│
├── lib/
│   ├── config-loader.ts        # Config loading utilities
│   └── theme-provider.tsx      # Theme context provider
│
├── scripts/
│   └── create-site.js          # Site generator script
│
├── docs/
│   ├── COMPONENTS_AND_VARIANTS.md  # Component reference
│   ├── SITE_STRUCTURE.md           # This file
│   └── CREATE_NEW_SITE.md          # Site creation guide
│
└── public/                     # Static assets
```

## Section Components Structure

Each section type follows this pattern:

```
components/sections/{section-name}/
├── {SectionName}Variant1.tsx
├── {SectionName}Variant2.tsx
├── {SectionName}Variant3.tsx
├── {SectionName}Variant4.tsx
└── index.tsx                   # Variant selector
```

### Available Sections

1. **areas-and-hours**: Service areas + working hours combined
2. **brands**: Generic brands showcase
3. **brands-we-serve**: Car brands specifically
4. **contact-form**: Contact form components
5. **contact-form-section**: Full section with form
6. **contact-info**: Contact information display
7. **content-block**: Generic content sections
8. **cta**: Call-to-action blocks
9. **faq**: FAQ accordions
10. **heroes**: Hero/banner sections
11. **location-list**: Location listings
12. **photo-gallery**: Image galleries
13. **service-areas**: Service area listings
14. **service-info**: Service detail checklists
15. **service-list**: Service listings
16. **terms-content**: Legal terms content
17. **why-choose**: Feature highlights
18. **working-hours**: Business hours display

## Configuration File Structure

### Site Root Config (`index.json`)

```json
{
  "id": "utah-surelockkey",
  "domain": "utah.surelockkey.com",
  "name": "Sure Lock & Key Utah LLC",
  "description": "Professional locksmith services in Utah"
}
```

### Branding Config (`branding.json`)

```json
{
  "companyName": "Sure Lock & Key Utah LLC",
  "shortName": "SLK Utah",
  "tagline": "Your Trusted Locksmith Partner",
  "logo": "https://...",
  "favicon": "https://..."
}
```

### Contact Config (`contact.json`)

```json
{
  "phone": "(801) 923-4567",
  "email": "info@surelockkey-utah.com",
  "address": "Draper, UT 84020",
  "hours": {
    "monday": "24 Hours",
    "tuesday": "24 Hours",
    ...
  },
  "social": {
    "facebook": "https://facebook.com/...",
    "instagram": "https://instagram.com/..."
  }
}
```

### Theme Config (`theme.json`)

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

### Variants Config (`variants.json`)

```json
{
  "header": "variant1",
  "footer": "variant1",
  "hero": "variant2",
  "serviceList": "variant1",
  ...
}
```

### Navigation Config (`navigation.json`)

```json
{
  "main": [
    {
      "label": "Home",
      "href": "/"
    },
    {
      "label": "Services",
      "href": "#",
      "submenu": [
        {
          "label": "Automotive Locksmith",
          "subtitle": "Car key services",
          "href": "/services/automotive-locksmith"
        }
      ]
    },
    {
      "label": "Gallery",
      "href": "/gallery"
    },
    {
      "label": "Contact",
      "href": "/contact-us"
    }
  ]
}
```

### Page Config (`pages/home.json`)

```json
{
  "seo": {
    "title": "Professional Locksmith Services",
    "description": "...",
    "h1": "Utah's Trusted Locksmith Service",
    "keywords": ["locksmith", "utah", "emergency"]
  },
  "sections": [
    {
      "type": "hero",
      "variant": "2",
      "data": {
        "title": "Professional Locksmith Services",
        "subtitle": "24/7 Emergency Service",
        "image": "https://...",
        "cta": {
          "text": "Call Now",
          "phone": "(801) 923-4567"
        }
      }
    },
    {
      "type": "serviceList",
      "variant": "1",
      "data": {
        "title": "Our Services",
        "services": [...]
      }
    }
  ]
}
```

### Service Config (`services/{slug}.json`)

```json
{
  "slug": "automotive-locksmith",
  "title": "Automotive Locksmith Services",
  "subtitle": "Professional car key services",
  "seo": {
    "title": "Automotive Locksmith | Utah",
    "description": "...",
    "h1": "Expert Automotive Locksmith Services",
    "keywords": ["automotive locksmith", "car keys"]
  },
  "hero": {
    "title": "Automotive Locksmith Services",
    "subtitle": "Fast, reliable car key solutions",
    "image": "https://...",
    "cta": {
      "text": "Call Now",
      "phone": "(801) 923-4567"
    }
  },
  "sections": [
    {
      "type": "serviceInfo",
      "variant": "1",
      "data": { ... }
    },
    {
      "type": "brandsWeServe",
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

### Location Config (`locations/{slug}.json`)

```json
{
  "slug": "salt-lake-city",
  "name": "Salt Lake City",
  "state": "Utah",
  "seo": {
    "title": "Salt Lake City Locksmith | 24/7 Service",
    "description": "...",
    "h1": "Professional Locksmith in Salt Lake City, UT"
  },
  "hero": {
    "title": "Salt Lake City Locksmith",
    "subtitle": "Serving SLC and surrounding areas",
    "image": "https://..."
  },
  "sections": [
    {
      "type": "serviceList",
      "variant": "1",
      "data": { ... }
    },
    {
      "type": "contactFormSection",
      "variant": "1",
      "data": { ... }
    }
  ]
}
```

## Data Flow

1. **Environment Variable**: `NEXT_PUBLIC_SITE_ID` determines active site
2. **Config Loader**: `lib/config-loader.ts` loads config for active site
3. **Theme Provider**: Injects CSS variables from theme.json
4. **Page Components**: Read page config and render sections
5. **Section Components**: Use variants.json to select correct variant
6. **Variant Components**: Render using data from section config

## Route Structure

```
/                           → Home page (dynamic from home.json)
/services                   → Services listing (from navigation)
/services/[slug]            → Individual service pages
/locations                  → Locations listing
/locations/[slug]           → Individual location pages
/gallery                    → Photo gallery
/contact-us                 → Contact page
/terms-and-conditions       → Terms page
```

## Multi-Site Support

### Environment-Based Routing

Each site is identified by `NEXT_PUBLIC_SITE_ID`:

```bash
# Development
NEXT_PUBLIC_SITE_ID=utah-surelockkey

# Production (Vercel)
# Set per deployment in Vercel dashboard
```

### Deployment Strategy

**Option 1: Multiple Vercel Projects**
- Create separate Vercel project for each site
- Set unique `NEXT_PUBLIC_SITE_ID` per project
- Deploy same codebase to different domains

**Option 2: Single Deployment with Domain Routing**
- Deploy once to Vercel
- Use domain to determine site (requires custom middleware)
- Map domains to site IDs

**Option 3: Subdomain Strategy**
- Deploy to vercel.app
- Use subdomains: utah.locksmith.vercel.app
- Map subdomain to site ID

## Adding New Component Types

1. Create component folder:
   ```bash
   mkdir components/sections/new-component
   ```

2. Create 4 variants:
   ```bash
   touch components/sections/new-component/NewComponentVariant1.tsx
   touch components/sections/new-component/NewComponentVariant2.tsx
   touch components/sections/new-component/NewComponentVariant3.tsx
   touch components/sections/new-component/NewComponentVariant4.tsx
   touch components/sections/new-component/index.tsx
   ```

3. Register in page renderer:
   ```typescript
   // components/pages/DynamicPage.tsx
   case 'newComponent':
     return <NewComponent key={index} variant={getVariant('newComponent')} data={sectionData} />
   ```

4. Add to variants.json:
   ```json
   {
     "newComponent": "variant1"
   }
   ```

5. Update template:
   ```bash
   # Add default to config/templates/default/variants.json
   ```

## Performance Considerations

- **Static Generation**: All pages are statically generated at build time
- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Each variant is a separate component
- **CSS-in-JS**: Theme variables injected once at layout level
- **Lazy Loading**: Images use lazy loading by default

## Security

- **Environment Variables**: Never commit `.env.local`
- **API Keys**: Store in Vercel environment variables
- **CORS**: Configure if using external APIs
- **Input Validation**: All form inputs are validated
- **XSS Protection**: React escapes all content by default

## Testing Strategy

1. **Component Testing**: Test each variant individually
2. **Integration Testing**: Test page rendering with different configs
3. **Multi-Site Testing**: Test with different SITE_IDs
4. **Mobile Testing**: Test responsive behavior
5. **Accessibility Testing**: Use axe-core or similar tools

## Maintenance

### Updating Templates

When adding new features, update template files:

```bash
config/templates/default/
```

This ensures new sites get the latest structure.

### Version Control

Commit strategy:
- Core code changes: Main branch
- Site-specific configs: Can be in separate branches
- Templates: Always in main branch

### Backup Strategy

- Git for version control
- Export site configs regularly
- Keep production configs separate from dev

---

This structure enables:
- ✅ Multiple independent sites from one codebase
- ✅ Easy customization per site
- ✅ Consistent component library
- ✅ Rapid site creation with generator
- ✅ Flexible design with 4 variants per component
- ✅ SEO optimization per page
- ✅ Theme customization per site
