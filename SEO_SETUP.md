# SEO Setup Documentation

## Overview
This project includes comprehensive SEO optimization with dynamic sitemap generation and keywords display.

## Features Implemented

### 1. Keywords System
- **Visual Display**: Keywords are displayed on every page (except terms and policy pages)
- **SEO Meta Tags**: Keywords are included in HTML meta tags for search engines
- **Component**: `/components/sections/keywords/` - reusable keyword display component

### 2. Dynamic Sitemap
- **Location**: `/app/sitemap.ts`
- **Auto-generation**: Automatically generates sitemap.xml from:
  - Static pages (home, gallery, contact, locations, terms)
  - All service pages (dynamically discovered)
  - All location pages (dynamically discovered)
- **URL**: `https://yourdomain.com/sitemap.xml`

### 3. Robots.txt
- **Location**: `/app/robots.ts`
- **Features**:
  - Allows all search engines to crawl the site
  - Blocks API routes and Next.js internal routes
  - Points to sitemap location
- **URL**: `https://yourdomain.com/robots.txt`

## How It Works

### Keywords Display
Keywords are automatically displayed on pages if they exist in the config JSON:

```json
{
  "seo": {
    "title": "Page Title",
    "description": "Page description",
    "keywords": "keyword1, keyword2, keyword3"
  }
}
```

Or as array:
```json
{
  "seo": {
    "keywords": ["keyword1", "keyword2", "keyword3"]
  }
}
```

### Pages with Keywords
- ✅ Home page
- ✅ Service pages (all)
- ✅ Location pages (all)
- ✅ Gallery page
- ✅ Contact page
- ✅ Locations listing page
- ❌ Terms & Conditions (excluded by design)
- ❌ Privacy Policy (excluded by design)

### Sitemap Configuration
The sitemap includes priority and change frequency settings:

| Page Type | Priority | Change Frequency |
|-----------|----------|------------------|
| Home | 1.0 | Weekly |
| Services | 0.9 | Weekly |
| Locations | 0.9 | Weekly |
| Locations List | 0.9 | Weekly |
| Contact | 0.8 | Monthly |
| Gallery | 0.7 | Monthly |
| Terms | 0.3 | Yearly |

## Adding New Pages

### For Service Pages
1. Create a new JSON file in `/config/sites/[site-id]/services/[service-slug].json`
2. Include `seo.keywords` field
3. The sitemap will automatically pick it up

### For Location Pages
1. Create a new JSON file in `/config/sites/[site-id]/locations/[location-slug].json`
2. Include `seo.keywords` field
3. The sitemap will automatically pick it up

### For Static Pages
Edit `/app/sitemap.ts` and add to the `staticPages` array:
```typescript
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: 0.8,
}
```

## Testing

### View Sitemap
```bash
npm run dev
# Visit: http://localhost:3000/sitemap.xml
```

### View Robots.txt
```bash
npm run dev
# Visit: http://localhost:3000/robots.txt
```

### Validate Keywords Display
1. Start dev server: `npm run dev`
2. Navigate to any page
3. Scroll to bottom - keywords should appear in a styled section
4. View page source - keywords should appear in `<meta name="keywords">` tag

## Files Modified/Created

### Created Files
- `/app/sitemap.ts` - Dynamic sitemap generator
- `/app/robots.ts` - Robots.txt generator
- `/components/sections/keywords/index.tsx` - Keywords component wrapper
- `/components/sections/keywords/KeywordsVariant1.tsx` - Keywords display component

### Modified Files
- `/app/gallery/page.tsx` - Added keywords display
- `/app/locations/page.tsx` - Added keywords display
- `/app/contact-us/page.tsx` - Added keywords to metadata
- `/components/pages/DynamicPage.tsx` - Added keywords display
- `/components/pages/DynamicServicePage.tsx` - Added keywords display
- `/components/pages/DynamicLocationPage.tsx` - Added keywords display
- `/components/pages/contact-us/ContactUsPageVariant1.tsx` - Added keywords display
- `/config/sites/utah-surelockkey/pages/contact-us.json` - Added SEO section with keywords

## Maintenance

### Updating Keywords
Edit the respective JSON config file and update the `seo.keywords` field:
```json
{
  "seo": {
    "keywords": "new keyword, another keyword, more keywords"
  }
}
```

### Changing Sitemap Priority
Edit `/app/sitemap.ts` and modify the priority values for different page types.

### Modifying Keywords Display Style
Edit `/components/sections/keywords/KeywordsVariant1.tsx` to change the visual appearance.

## SEO Best Practices

1. **Keywords**:
   - Use 3-7 relevant keywords per page
   - Include location-based keywords for local SEO
   - Don't repeat keywords excessively

2. **Sitemap**:
   - Update `lastModified` when content changes (currently auto-set to current date)
   - Set appropriate priorities (important pages = higher priority)
   - Set realistic change frequencies

3. **Robots.txt**:
   - Keep it simple
   - Don't block important pages
   - Always include sitemap location

## Support

For questions or issues, refer to:
- Next.js Metadata API: https://nextjs.org/docs/app/api-reference/file-conventions/metadata
- Google Search Central: https://developers.google.com/search
