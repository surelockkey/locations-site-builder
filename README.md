# Locksmith Site Builder

Професійна система компонентів для швидкого створення локсмітських сайтів з повною можливістю зміни дизайну, контенту та структури через модульні JSON конфіги.

## 🏗️ Архітектура

### Модульні Конфіги

Замість одного великого файлу, конфігурація розбита на логічні підконфіги:

```
config/sites/utah-surelockkey/
├── index.json              # Основна інформація (siteId, domain, theme)
├── branding.json           # Брендинг (logo, назва, tagline)
├── contact.json            # Контакти та робочі години
├── theme.json              # Кольори та шрифти
├── variants.json           # Варіанти компонентів (variant1-4)
├── pages/
│   ├── home.json          # Конфіг головної сторінки
│   └── contact.json       # Конфіг сторінки контактів
└── services/
    ├── automotive-locksmith.json
    ├── emergency-locksmith.json
    └── lock-installation-replacement.json
```

### Динамічні Сторінки Сервісів

Сторінки сервісів будуються автоматично через `app/services/[slug]/page.tsx`:

- **URL**: `/services/automotive-locksmith`
- **Конфіг**: `config/sites/utah-surelockkey/services/automotive-locksmith.json`
- **Рендер**: Автоматично на основі секцій з конфігу

## 🚀 Швидкий Старт

### 1. Клонуйте та встановіть

```bash
npm install
```

### 2. Налаштуйте змінні оточення

```bash
cp .env.example .env.local
```

Відредагуйте `.env.local`:

```
VITE_SITE_ID=utah-surelockkey
```

### 3. Запустіть проект

```bash
npm run dev
```

## 📝 Як Створити Новий Сайт

### Крок 1: Створіть структуру конфігів

```bash
mkdir -p config/sites/texas-surelockkey/{pages,services}
```

### Крок 2: Скопіюйте та адаптуйте конфіги

```bash
# Основні конфіги
cp config/sites/utah-surelockkey/index.json config/sites/texas-surelockkey/
cp config/sites/utah-surelockkey/branding.json config/sites/texas-surelockkey/
cp config/sites/utah-surelockkey/contact.json config/sites/texas-surelockkey/
cp config/sites/utah-surelockkey/theme.json config/sites/texas-surelockkey/
cp config/sites/utah-surelockkey/variants.json config/sites/texas-surelockkey/

# Сторінки
cp -r config/sites/utah-surelockkey/pages/* config/sites/texas-surelockkey/pages/

# Сервіси
cp -r config/sites/utah-surelockkey/services/* config/sites/texas-surelockkey/services/
```

### Крок 3: Відредагуйте конфіги

**index.json**:
```json
{
  "siteId": "texas-surelockkey",
  "domain": "texas.surelockkey.com",
  "theme": "professional"
}
```

**branding.json**:
```json
{
  "companyName": "Sure Lock & Key Texas LLC",
  "shortName": "SLK Texas",
  "tagline": "Trusted Locksmith Services in Texas",
  ...
}
```

**contact.json**: Змініть телефон, адресу, години роботи

**theme.json**: Налаштуйте кольори під бренд

**variants.json**: Оберіть варіанти компонентів (variant1-4)

### Крок 4: Змініть змінну оточення

```
VITE_SITE_ID=texas-surelockkey
```

## 🎨 Варіанти Компонентів

Кожен компонент має 4 варіанти дизайну. Оберіть в `variants.json`:

```json
{
  "header": "variant1",      // variant1 | variant2 | variant3 | variant4
  "hero": "variant2",
  "services": "variant1",
  ...
}
```

### Доступні Компоненти

- **Header**: 4 варіанти навігації
- **Footer**: 4 варіанти підвалу
- **Hero**: 4 варіанти героя
- **Services**: Grid, Carousel, Tabs, Alternating
- **Why Choose**: Grid, Timeline, Cards, Accordion
- **Service List**: Bullets, Cards, Checklist, Accordion
- **Brands**: Grid, Marquee, Categories, Interactive
- **CTA**: Banner, Card, Split, Floating
- **FAQ**: Simple, Two-column, Tabs, Search
- **Contact**: Form+Map, Centered, Wizard, Inline

## 📄 Додавання Нового Сервісу

### Створіть файл: `config/sites/[siteId]/services/new-service.json`

```json
{
  "slug": "new-service",
  "title": "New Service Title",
  "subtitle": "Service Subtitle",
  "seo": {
    "title": "New Service | Company Name",
    "description": "Service description for SEO",
    "h1": "Main Heading",
    "keywords": ["keyword1", "keyword2"]
  },
  "hero": {
    "title": "Hero Title",
    "subtitle": "Hero Subtitle",
    "description": "Hero description",
    "image": "/sites/[siteId]/images/service-new.jpg",
    "ctaPrimary": {
      "text": "Call Now",
      "link": "tel:1234567890"
    }
  },
  "sections": [
    {
      "type": "contentBlock",
      "title": "Section Title",
      "content": "Section content...",
      "image": "/path/to/image.jpg"
    },
    {
      "type": "serviceList",
      "title": "Our Services",
      "services": [
        {
          "title": "Service 1",
          "description": "Description",
          "icon": "lock"
        }
      ]
    }
  ]
}
```

### Сторінка автоматично буде доступна за URL:
```
/services/new-service
```

## 🎯 Переваги Модульної Системи

✅ **Легка підтримка**: Кожен аспект в окремому файлі  
✅ **Масштабованість**: Додавайте нові сервіси без зміни коду  
✅ **Повторне використання**: Копіюйте конфіги для нових сайтів  
✅ **Гнучкість**: Змінюйте варіанти компонентів без перероблення  
✅ **SEO**: Окремі SEO налаштування для кожної сторінки  
✅ **Типобезпека**: TypeScript типи для всіх конфігів  

## 🛠️ Технології

- **Next.js 15** - React framework з App Router
- **TypeScript** - Типобезпека
- **Tailwind CSS** - Стилізація
- **shadcn/ui** - Компоненти UI
- **Lucide React** - Іконки
- **Framer Motion** - Анімації

## 📚 Структура Типів

Всі конфіги мають строгі TypeScript типи в `types/config.types.ts`:

- `SiteIndexConfig`
- `BrandingConfig`
- `ContactConfig`
- `ThemeConfig`
- `ComponentVariants`
- `ServicePageConfig`
- `PageConfig`

## 🔄 Завантаження Конфігів

Утиліти в `lib/config-loader.ts`:

```typescript
// Завантажити весь конфіг сайту
const siteConfig = await loadSiteConfig('utah-surelockkey');

// Завантажити конфіг сервісу
const serviceConfig = await loadServiceConfig('utah-surelockkey', 'automotive-locksmith');

// Завантажити всі сервіси
const services = await loadAllServices('utah-surelockkey');

// Завантажити конфіг сторінки
const pageConfig = await loadPageConfig('utah-surelockkey', 'home');
```

## 📈 Roadmap

- [ ] Admin панель для редагування конфігів
- [ ] Візуальний конструктор сторінок
- [ ] Інтеграція з CMS
- [ ] Multilingual підтримка
- [ ] A/B тестування варіантів
- [ ] Аналітика та трекінг

---

**Створено для швидкого деплою локсмітських сайтів 🔐**
