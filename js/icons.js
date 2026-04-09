/**
 * ICON SYSTEM CONFIG
 * Iconify + Lucide (outline only)
 *
 * Подключение CDN в <head>:
 * <script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>
 */

// Маппинг иконок проекта — все из набора Lucide
const ICONS = {
  // --- Hero ---
  check:          'lucide:check',
  whatsapp:       'lucide:message-circle',    // WhatsApp CTA (Lucide, не бренд)
  scrollDown:     'lucide:chevron-down',

  // --- Theme Toggle ---
  sun:            'lucide:sun',
  moon:           'lucide:moon',

  // --- Bullet Points ---
  bulletSuccess:  'lucide:check',
  bulletFail:     'lucide:x',

  // --- Шаги / Steps ---
  diamond:        'lucide:diamond',           // Шаг 1: Алмаз среди камней
  target:         'lucide:target',            // Шаг 2: Привлечение
  handshake:      'lucide:handshake',         // Шаг 3: Продажи

  // --- Проблемы ---
  alertTriangle:  'lucide:alert-triangle',
  trendingDown:   'lucide:trending-down',
  dollarSign:     'lucide:dollar-sign',

  // --- Результаты ---
  trendingUp:     'lucide:trending-up',
  users:          'lucide:users',
  calendarCheck:  'lucide:calendar-check',
  barChart:       'lucide:bar-chart-3',

  // --- CTA / Navigation ---
  arrowRight:     'lucide:arrow-right',
  arrowDown:      'lucide:arrow-down',
  phone:          'lucide:phone',
  messageCircle:  'lucide:message-circle',
  externalLink:   'lucide:external-link',

  // --- Misc ---
  clock:          'lucide:clock',
  shield:         'lucide:shield-check',
  star:           'lucide:star',
  zap:            'lucide:zap',
  gift:           'lucide:gift',
};

/**
 * Создать HTML-строку иконки
 * @param {string} name — ключ из ICONS
 * @param {string} [cls] — дополнительный CSS-класс
 * @returns {string} HTML
 */
function icon(name, cls = '') {
  const id = ICONS[name];
  if (!id) {
    console.warn(`[icons] Unknown icon: "${name}"`);
    return '';
  }
  const classAttr = cls ? ` class="${cls}"` : '';
  return `<iconify-icon icon="${id}"${classAttr}></iconify-icon>`;
}

/**
 * Автоматическая инициализация иконок по data-атрибутам
 * <span data-icon="check" data-icon-class="icon-accent"></span>
 */
function initIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.dataset.icon;
    const cls = el.dataset.iconClass || '';
    el.innerHTML = icon(name, cls);
  });
}

// Инициализация при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIcons);
} else {
  initIcons();
}
