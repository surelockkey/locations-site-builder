# Blog Setup Guide

## Overview
Blog functionality has been integrated with GraphQL API for utah-surelockkey site only.

## GraphQL API Integration

### API Details
- **Endpoint**: `https://dev-api-crm.tech-slk.com/graphql`
- **Query**: `getConstructedPagesPaginated`

### Configuration

1. **Set Company ID**

   Open `/lib/blog-api.ts` and update the company ID mapping:

   ```typescript
   const siteToCompanyMap: Record<string, string> = {
     'utah-surelockkey': 'YOUR_ACTUAL_COMPANY_ID', // Replace with real ID
   };
   ```

2. **Environment Variables**

   The GraphQL API URL is already configured in `.env.local`:
   ```
   GRAPHQL_API_URL=https://dev-api-crm.tech-slk.com/graphql
   ```

## GraphQL Query

The query used to fetch blog posts:

```graphql
query GetBlogPosts($companyId: ID!, $isPosted: Boolean, $pagination: FindPaginationDto, $type: ConstructedPageType) {
  getConstructedPagesPaginated(
    constructed_page_company_id: $companyId
    is_posted: $isPosted
    pagination: $pagination
    type: $type
  ) {
    id
    type
    is_posted
    post_date
    meta_info {
      name
      url
      categoric
    }
    preview {
      headline
      description
      photo {
        file {
          id
          format
        }
      }
    }
  }
}
```

### Query Variables

```json
{
  "companyId": "YOUR_COMPANY_ID",
  "isPosted": true,
  "pagination": {
    "skip": 0,
    "take": 50
  },
  "type": "BLOG"
}
```

## Data Mapping

The API response is transformed to match the BlogPost interface:

| API Field | BlogPost Field | Description |
|-----------|----------------|-------------|
| `id` | `id` | Unique identifier |
| `preview.headline` | `title` | Post title (fallback: `meta_info.name`) |
| `preview.description` | `excerpt` | Short description/excerpt |
| `preview.photo.file.id` | `image` | Featured image URL (constructed from file ID) |
| `post_date` | `date` | Publication date (Unix timestamp converted to ISO string) |
| `meta_info.url` | `slug` | URL-friendly identifier |
| `meta_info.categoric` | `category` | Post category |

## Files Structure

### Created Files

1. **`/lib/graphql-client.ts`** - GraphQL client utility
   - Handles API requests
   - Error handling
   - Response caching (1 hour)

2. **`/lib/blog-api.ts`** - Blog API functions
   - `getBlogPosts()` - Fetch blog posts
   - `getCompanyIdForSite()` - Map site to company ID
   - GraphQL query definition

3. **`/components/sections/blog/BlogVariant1.tsx`** - Blog listing component
4. **`/components/sections/blog/index.tsx`** - Blog component exports
5. **`/app/blog/page.tsx`** - Blog page (updated to use API)

### Modified Files

- `.env.local` - Added `GRAPHQL_API_URL`
- `app/blog/page.tsx` - Integrated API calls
- `app/sitemap.ts` - Added blog to sitemap (utah-surelockkey only)

## Fallback Behavior

If the API:
- Returns no data
- Has invalid company ID
- Fails to connect

The page will show **sample blog posts** instead of crashing.

## Testing

### 1. Test with Mock Data (Current State)
```bash
npm run dev
# Visit: http://localhost:3000/blog
# Should show 3 sample posts
```

### 2. Test with Real API

1. Get your company ID from the CRM system
2. Update `/lib/blog-api.ts`:
   ```typescript
   'utah-surelockkey': 'YOUR_REAL_COMPANY_ID',
   ```
3. Restart dev server:
   ```bash
   npm run dev
   ```
4. Visit: `http://localhost:3000/blog`
5. Check console for API responses

### 3. Test GraphQL Query Directly

Use GraphQL Playground, Postman, or curl:

**URL**: `https://dev-api-crm.tech-slk.com/graphql`

**Query**:
```graphql
query {
  getConstructedPagesPaginated(
    constructed_page_company_id: "YOUR_COMPANY_ID"
    is_posted: true
    pagination: { skip: 0, take: 10 }
    type: BLOG
  ) {
    id
    type
    is_posted
    post_date
    meta_info {
      name
      url
      categoric
    }
    preview {
      headline
      description
      photo {
        file {
          id
          format
        }
      }
    }
  }
}
```

**Example with curl**:
```bash
curl -X POST https://dev-api-crm.tech-slk.com/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query GetBlogPosts($companyId: ID!, $isPosted: Boolean, $pagination: FindPaginationDto, $type: ConstructedPageType) { getConstructedPagesPaginated(constructed_page_company_id: $companyId is_posted: $isPosted pagination: $pagination type: $type) { id type is_posted post_date meta_info { name url categoric } preview { headline description photo { file { id format } } } } }",
    "variables": {
      "companyId": "6883a696-5f7f-4a9d-a0fd-a3949ba45f1f",
      "isPosted": true,
      "pagination": {"skip": 0, "take": 5},
      "type": "BLOG"
    }
  }'
```

## Caching

- **Revalidation**: 1 hour (3600 seconds)
- **Strategy**: ISR (Incremental Static Regeneration)
- Posts are cached after first fetch
- Cache refreshes automatically every hour

To clear cache:
```bash
rm -rf .next
npm run build
```

## Troubleshooting

### Error: "GraphQL request failed: 400"
- Check company ID is correct
- Verify API endpoint is accessible
- Check GraphQL query syntax

### Error: "No data returned"
- Company ID might not have any blog posts
- Check `is_posted: true` filter
- Verify `type: "BLOG"` parameter

### Posts Not Showing
1. Check browser console for errors
2. Check server logs: `console.log` statements in blog-api.ts
3. Verify company ID mapping
4. Test API directly with GraphQL playground

## SEO Configuration

Blog page includes:
- ✅ Meta title and description
- ✅ Keywords
- ✅ Robots tags (INDEX, FOLLOW)
- ✅ Canonical URL
- ✅ OpenGraph tags
- ✅ Sitemap entry (utah-surelockkey only)

## Future Enhancements

Possible improvements:
1. Add pagination for blog listing
2. Add individual blog post pages (`/blog/[slug]`)
3. Add categories filter
4. Add search functionality
5. Add date filtering
6. Add featured posts section
7. Add related posts
8. Add sharing buttons

## Security Notes

- API calls are server-side only (secure)
- No API keys exposed to client
- Company ID stored in server-side code
- Consider adding authentication if needed

## Support

For API questions, contact the CRM team at tech-slk.com
