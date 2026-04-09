# ICON SYSTEM — Grow Up

## Setup (CDN)

```html
<head>
  <!-- Iconify Web Component -->
  <script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>

  <!-- Icon Styles -->
  <link rel="stylesheet" href="css/icons.css">

  <!-- Icon Config -->
  <script src="js/icons.js" defer></script>
</head>
```

---

## Используемые иконки

| Назначение             | Код                                                            | Контекст                      |
|------------------------|----------------------------------------------------------------|-------------------------------|
| Галочка (буллет)       | `<iconify-icon icon="lucide:check"></iconify-icon>`            | Пункты "после", преимущества  |
| Крест (буллет)         | `<iconify-icon icon="lucide:x"></iconify-icon>`                | Пункты "до", проблемы         |
| Солнце                 | `<iconify-icon icon="lucide:sun"></iconify-icon>`              | Тема: тёмная (показать)       |
| Луна                   | `<iconify-icon icon="lucide:moon"></iconify-icon>`             | Тема: светлая (показать)      |
| Стрелка вниз           | `<iconify-icon icon="lucide:chevron-down"></iconify-icon>`     | Scroll arrow (Hero)           |
| Сообщение              | `<iconify-icon icon="lucide:message-circle"></iconify-icon>`   | WhatsApp CTA                  |
| Алмаз                  | `<iconify-icon icon="lucide:diamond"></iconify-icon>`          | Шаг 1                        |
| Цель                   | `<iconify-icon icon="lucide:target"></iconify-icon>`           | Шаг 2                        |
| Рукопожатие            | `<iconify-icon icon="lucide:handshake"></iconify-icon>`        | Шаг 3                        |
| Внимание               | `<iconify-icon icon="lucide:alert-triangle"></iconify-icon>`   | Карточки проблем              |
| Тренд вниз             | `<iconify-icon icon="lucide:trending-down"></iconify-icon>`    | Проблема: потеря клиентов     |
| Доллар                 | `<iconify-icon icon="lucide:dollar-sign"></iconify-icon>`      | Проблема: потеря дохода       |
| Тренд вверх            | `<iconify-icon icon="lucide:trending-up"></iconify-icon>`      | Результаты / рост             |
| Пользователи           | `<iconify-icon icon="lucide:users"></iconify-icon>`            | Количество учеников           |
| Календарь              | `<iconify-icon icon="lucide:calendar-check"></iconify-icon>`   | Записи на пробные             |
| Диаграмма              | `<iconify-icon icon="lucide:bar-chart-3"></iconify-icon>`      | Статистика                    |
| Стрелка вправо         | `<iconify-icon icon="lucide:arrow-right"></iconify-icon>`      | Навигация / переход           |
| Телефон                | `<iconify-icon icon="lucide:phone"></iconify-icon>`            | Контакт                       |
| Часы                   | `<iconify-icon icon="lucide:clock"></iconify-icon>`            | Сроки / "за 30 дней"         |
| Щит                    | `<iconify-icon icon="lucide:shield-check"></iconify-icon>`     | Гарантия                      |
| Звезда                 | `<iconify-icon icon="lucide:star"></iconify-icon>`             | Отзывы                        |
| Молния                 | `<iconify-icon icon="lucide:zap"></iconify-icon>`              | Быстрый результат             |
| Подарок                | `<iconify-icon icon="lucide:gift"></iconify-icon>`             | Бонус                         |

---

## Примеры использования

### Буллет-лист "ДО" (проблемы)

```html
<div class="bullet-fail">
  <iconify-icon icon="lucide:x"></iconify-icon>
  <span>Каждый 2-й не доходит до пробного</span>
</div>
```

### Буллет-лист "ПОСЛЕ" (результаты)

```html
<div class="bullet-success">
  <iconify-icon icon="lucide:check"></iconify-icon>
  <span>5-6 записей на пробный ежедневно</span>
</div>
```

### CTA кнопка (иконка слева)

```html
<a href="#" class="cta-primary">
  <span class="cta-icon">
    <iconify-icon icon="lucide:message-circle" class="icon-white"></iconify-icon>
    <span>ХОЧУ НА КОНСУЛЬТАЦИЮ</span>
  </span>
</a>
```

### Theme Toggle

```html
<button class="theme-toggle" aria-label="Toggle theme">
  <iconify-icon icon="lucide:sun"></iconify-icon>   <!-- dark mode -->
  <iconify-icon icon="lucide:moon"></iconify-icon>  <!-- light mode -->
</button>
```

### Scroll Arrow (Hero)

```html
<div class="scroll-arrow">
  <iconify-icon icon="lucide:chevron-down"></iconify-icon>
</div>
```

### Карточка проблемы

```html
<div class="problem-card">
  <iconify-icon icon="lucide:alert-triangle" class="icon-accent"></iconify-icon>
  <span class="problem-label">ПРОБЛЕМА #1</span>
  <p>Зависимость от сарафана</p>
</div>
```

### Data-атрибуты (авто-рендер через JS)

```html
<span data-icon="check" data-icon-class="icon-accent"></span>
<span data-icon="trendingUp" data-icon-class="icon-accent"></span>
```

---

## Правила

1. **Только Lucide** — формат `lucide:icon-name`, без других наборов
2. **Только outline** — filled иконки запрещены
3. **Stroke: 2px** — стандарт Lucide, не менять
4. **Размер: 20-24px** — sm (16), md (20), lg (24), xl (32)
5. **Цвет** — `currentColor` по умолчанию, `#E8651A` для акцента
6. **1 иконка = 1 смысл** — не дублировать назначение
7. **Не более 3-4 одинаковых подряд** — чередовать или группировать
8. **CTA иконка слева** от текста, всегда
9. **Иконки усиливают текст** — не заменяют его
10. **Без emoji** — только Lucide иконки

---

## SVG Иллюстрации

Источник: [unDraw](https://undraw.co/)

Папка: `assets/svg/`

Правила:
- Только `.svg` формат (без PNG)
- Акцентный цвет в иллюстрациях: `#E8651A`
- Выбирать по смыслу блока (business, growth, marketing)
- Не перегружать экран — max 1 иллюстрация на секцию
- Именование: `undraw-{section}-{description}.svg`

Рекомендуемые иллюстрации (скачать с unDraw, цвет #E8651A):

| Секция        | Поиск на unDraw         | Файл                              |
|---------------|-------------------------|-----------------------------------|
| Hero          | `business growth`       | `undraw-hero-growth.svg`          |
| До/После      | `before after`          | `undraw-case-transform.svg`       |
| Эксперт       | `profile / expert`      | `undraw-expert-profile.svg`       |
| Шаг 1         | `diamond / standout`    | `undraw-step1-standout.svg`       |
| Шаг 2         | `target / marketing`    | `undraw-step2-target.svg`         |
| Шаг 3         | `deal / handshake`      | `undraw-step3-deal.svg`           |
| Результаты    | `analytics / stats`     | `undraw-results-analytics.svg`    |
| CTA финал     | `contact / chat`        | `undraw-cta-contact.svg`          |
