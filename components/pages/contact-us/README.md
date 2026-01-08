# Contact Us Page Variants

Цей каталог містить 4 варіанти UI для сторінки Contact Us.

## Варіанти

### Variant 1 - Класичний макет (за замовчуванням)
- **Файл:** [ContactUsPageVariant1.tsx](ContactUsPageVariant1.tsx)
- **Макет:** Стандартна двоколонкова сітка (ContactInfo | ContactFormSection)
- **Hero:** Проста секція з заголовком та описом
- **Особливості:**
  - Рівномірне розташування (50/50)
  - FAQ внизу на всю ширину
  - Мінімалістичний дизайн

### Variant 2 - Центрований дизайн
- **Файл:** [ContactUsPageVariant2.tsx](ContactUsPageVariant2.tsx)
- **Макет:** Вертикальне стекування з центруванням
- **Hero:** Великий центрований заголовок з акцентною лінією
- **Особливості:**
  - Форма виділена білою карткою з тінню
  - Максимальна ширина контенту 5xl
  - Ідеально для фокусування на формі

### Variant 3 - Градієнтний Hero
- **Файл:** [ContactUsPageVariant3.tsx](ContactUsPageVariant3.tsx)
- **Макет:** Асиметрична сітка (1/3 ContactInfo | 2/3 Форма+FAQ)
- **Hero:** Яскравий градієнтний фон від primary до secondary
- **Особливості:**
  - ContactInfo sticky (залишається при скролі)
  - Форма та FAQ у великій секції
  - -mt-20 для перекриття hero секції
  - Сучасний дизайн з білим текстом на градієнті

### Variant 4 - Sidebar Layout
- **Файл:** [ContactUsPageVariant4.tsx](ContactUsPageVariant4.tsx)
- **Макет:** Sidebar сітка (1/4 ContactInfo | 3/4 Контент)
- **Hero:** Компактна секція з бордером
- **Особливості:**
  - Вузький sidebar зліва
  - ContactInfo sticky
  - Максимум простору для форми та FAQ
  - Професійний вигляд

## Використання

### Через URL параметр (рекомендовано)

```
/contact-us?variant=1  # Класичний
/contact-us?variant=2  # Центрований
/contact-us?variant=3  # Градієнтний
/contact-us?variant=4  # Sidebar
```

### Через змінну оточення

Додайте в `.env.local`:

```bash
NEXT_PUBLIC_CONTACT_VARIANT=3
```

### Програмно

```tsx
import ContactUsPage from "@/components/pages/contact-us"

<ContactUsPage
  siteConfig={siteConfig}
  contactConfig={contactConfig}
  variant="3"
/>
```

## Конфігурація

Всі варіанти використовують один JSON конфіг:
- [contact-us.json](../../../config/sites/utah-surelockkey/pages/contact-us.json)

Структура sections у JSON визначає:
- Які компоненти відображати (contactInfo, contactFormSection, faq)
- Варіанти кожного компонента (1-4)
- Дані для форми (cities, serviceTypes)

## Виправлення контрастності

У всіх варіантах виправлено контрастність текстів:

### ContactInfo
- "Available 7 days a week" → `var(--color-text)`
- "We respond within 24 hours" → `var(--color-text)`

### ContactFormSection
- Description тексти → `var(--color-text)`

Замість `var(--color-muted)` тепер використовується `var(--color-text)` для кращої читабельності.
