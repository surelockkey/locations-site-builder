# Creating a New Locksmith Site

This guide explains how to create a new locksmith site configuration using the site generator.

## Quick Start

Run the site generator in interactive mode:

```bash
node scripts/create-site.js
```

Follow the prompts to enter:
- **Site ID**: Unique identifier (lowercase, hyphens allowed) - e.g., `miami-locksmith`
- **Domain**: Your site domain - e.g., `miami.surelockkey.com`
- **Company Name**: Full business name - e.g., `Sure Lock & Key Miami`
- **Short Name**: Abbreviated name - e.g., `SLK Miami`
- **Tagline**: Business tagline - e.g., `Trusted Locksmith Services`
- **Phone**: Contact phone - e.g., `(305) 123-4567`
- **Email**: Contact email - e.g., `info@miami.com`
- **Address**: Business address - e.g., `Miami, FL`

## What Gets Created

The generator creates a new folder in `config/sites/{site-id}/` with:

```
config/sites/{site-id}/
├── index.json           # Site metadata
├── branding.json        # Logo, company name, tagline
├── contact.json         # Phone, email, hours, social
├── theme.json           # Colors and fonts
├── variants.json        # Component variant selections
├── navigation.json      # Menu structure
├── pages/
│   └── home.json       # Homepage configuration
└── services/
    └── emergency-locksmith.json  # Example service page
```

## Using Your New Site

1. After creation, update your `.env.local`:
   ```
   NEXT_PUBLIC_SITE_ID=your-site-id
   ```

2. Restart your development server:
   ```bash
   npm run dev
   ```

3. Your new site will load at `http://localhost:3000`

## Customizing Your Site

### Update Branding

Edit `config/sites/{site-id}/branding.json`:
```json
{
  "logo": "https://your-cdn.com/logo.svg",
  "favicon": "https://your-cdn.com/favicon.ico"
}
```

### Change Colors

Edit `config/sites/{site-id}/theme.json`:
```json
{
  "colors": {
    "primary": "#1e40af",
    "secondary": "#f59e0b",
    "accent": "#10b981"
  }
}
```

### Select Component Variants

Edit `config/sites/{site-id}/variants.json`:
```json
{
  "header": "variant2",
  "footer": "variant3",
  "hero": "variant1"
}
```

Available variants: `variant1`, `variant2`, `variant3`, `variant4`

### Add Services

Create new service files in `config/sites/{site-id}/services/`:
```json
{
  "slug": "residential-locksmith",
  "title": "Residential Locksmith Services",
  "seo": { ... },
  "sections": [ ... ]
}
```

### Customize Homepage

Edit `config/sites/{site-id}/pages/home.json` to:
- Enable/disable sections
- Change section order
- Update content
- Modify CTAs

## Tips

- **Keep site-id lowercase**: Use hyphens instead of spaces
- **Test thoroughly**: Check all pages after creating a new site
- **Use templates**: Copy successful configurations from existing sites
- **Version control**: Commit your new site config to Git

## Multiple Sites

You can run multiple sites from one codebase by switching the `NEXT_PUBLIC_SITE_ID` environment variable.

For production, use Vercel environment variables to deploy each site separately.
