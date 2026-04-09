# ЛОНГРИД «GROW UP» — СТРУКТУРА ЛЕНДИНГА

> Mobile-first | 375–430px | Dark theme default
> Шрифты: Clash Display (H1–H3, 600/700) + Manrope (body, 400/500/600)
> Акцент: #E8651A | Палитра: см. COLOR_SYSTEM.md

---

## СЕКЦИЯ 1: HERO (FULL-SCREEN)

```
[BLOCK: hero]
  container: min-height: 100dvh
  padding: env(safe-area-inset-top) 20px env(safe-area-inset-bottom) 20px
  display: flex; flex-direction: column; justify-content: space-between
  background: var(--bg) #0D0C0B
  overflow: hidden (НЕ скроллится внутри)
```

### TOP ZONE (flex-start)

```
[ELEMENT: theme-toggle]
  position: fixed; top: 16px; right: 16px
  36x36px; border-radius: 50%
  dark: bg #2A2825, icon sun white
  light: bg #DDD4CC, icon moon dark
  z-index: 999
```

```
[TEXT: h1]
  font: Clash Display 700
  size: 28px / line-height: 1.15
  color: var(--text-primary)
  text-transform: uppercase
  margin-top: 48px

  "КАК ЯЗЫКОВОЙ ШКОЛЕ ВЫЙТИ
  НА СТАБИЛЬНЫЕ 5 000 000 ₸"
```

```
[TEXT: subtitle]
  font: Manrope 500
  size: 16px / line-height: 1.4
  color: var(--text-secondary)
  margin-top: 8px

  "и закрывать каждого второго после пробного урока
  с помощью системы «Grow Up»"
```

```
[TEXT: bullets]
  font: Manrope 500
  size: 15px / line-height: 1.5
  color: var(--text-primary)
  margin-top: 16px
  bullet-icon: checkmark color #E8651A

  • Без акций и скидок
  • Ежедневно от 5+ новых учеников на пробный
  • Каждый 2-й после пробного покупает абонемент
```

```
[TEXT: timeframe]
  font: Clash Display 700
  size: 22px
  color: #E8651A
  text-transform: uppercase
  text-align: center
  margin-top: 12px

  "ВСЕГО ЗА 30 ДНЕЙ"
```

### MIDDLE ZONE (flex-center)

```
[IMAGE: hero-visual]
  width: 100%; max-width: 320px
  margin: 0 auto
  aspect-ratio: 4/3
  border-radius: 12px
  placeholder: визуал системы / чемодан с достопримечательностями
  object-fit: cover
```

### BOTTOM ZONE (flex-end, thumb zone)

```
[CTA: primary]
  width: 100%
  padding: 16px 24px
  background: #E8651A
  border-radius: 12px
  font: Manrope 600, 16px, uppercase
  color: #FFFFFF
  text-align: center
  margin-bottom: 8px

  icon: WhatsApp (white, слева от текста)
  text: "ХОЧУ НА КОНСУЛЬТАЦИЮ"
  link: WhatsApp deep link
```

```
[TEXT: cta-note]
  font: Manrope 400, 12px
  color: var(--text-muted)
  text-align: center

  "*При нажатии откроется чат WhatsApp с Дамиром"
```

```
[ELEMENT: scroll-arrow]
  text-align: center
  margin-top: 8px
  margin-bottom: env(safe-area-inset-bottom, 8px)
  icon: ↓ chevron, color var(--text-muted)
  animation: bounce 2s infinite
```

---

## СЕКЦИЯ 2: ДО / ПОСЛЕ

```
[BLOCK: case-study]
  background: var(--bg-card) #171614
  border-radius: 16px
  padding: 32px 20px
  margin: 0 16px
```

### ПЕРСОНАЖ

```
[IMAGE: avatar]
  width: 80px; height: 80px
  border-radius: 50%
  float: left; margin-right: 16px
  placeholder: фото Айнуры
```

```
[TEXT: h2]
  font: Clash Display 600, 20px
  color: #E8651A
  text-transform: uppercase

  "ЗНАКОМЬТЕСЬ — ЭТО АЙНУРА,
  ВЛАДЕЛЕЦ ЯЗЫКОВОЙ ШКОЛЫ В КАРАГАНДЕ"
```

```
[TEXT: intro]
  font: Manrope 400, 15px
  color: var(--text-primary)
  margin-top: 12px

  "Вышла на стабильные 5 000 000 ₸ после того,
  как мы внедрили систему «Grow Up»"
```

### БЛОК «ДО»

```
[TEXT: label-before]
  font: Clash Display 700, 18px
  color: #C9530F
  text-transform: uppercase
  margin-top: 24px

  "ДО:"
```

```
[TEXT: pain-points]
  font: Manrope 400, 15px
  color: var(--text-primary)
  line-height: 1.6
  bullet-icon: ✕ color #C9530F

  ✕ Каждый 2-й не доходит до пробного
  ✕ Нет стабильного потока учеников, только по сарафану
  ✕ 7 из 10 после пробного уходили «подумать»
  ✕ Приходится использовать скидки и акции, теряя доход
```

```
[IMAGE: screenshot-before]
  width: 100%
  border-radius: 8px
  border: 1px solid var(--border)
  placeholder: скриншот переписки (боль клиента)
  margin-top: 12px
```

```
[IMAGE: bank-before]
  width: 60%; margin: 12px auto; display: block
  border-radius: 8px
  placeholder: скриншот банковской выписки ДО
```

### БЛОК «ПОСЛЕ»

```
[TEXT: label-after]
  font: Clash Display 700, 18px
  color: #E8651A
  text-transform: uppercase
  margin-top: 24px

  "ПОСЛЕ:"
```

```
[TEXT: results]
  font: Manrope 400, 15px
  color: var(--text-primary)
  line-height: 1.6
  bullet-icon: ✓ color #E8651A

  ✓ 5–6 записей на пробный ежедневно без скидок
  ✓ Каждый 2-й после пробного покупает абонемент
  ✓ Группы заполняются на 100%
  ✓ Привлекает учеников без скидок и акций
```

```
[IMAGE: screenshot-after]
  width: 100%
  border-radius: 8px
  border: 1px solid var(--border)
  placeholder: скриншот переписки (результат клиента)
  margin-top: 12px
```

```
[IMAGE: bank-after]
  width: 60%; margin: 12px auto; display: block
  border-radius: 8px
  placeholder: скриншот банковской выписки ПОСЛЕ (5 000 000 ₸)
```

---

## СЕКЦИЯ 3: ЭКСПЕРТ + ПРОБЛЕМЫ

```
[BLOCK: expert]
  background: var(--bg-card) #171614
  border-radius: 16px
  padding: 32px 20px
  margin: 24px 16px 0
```

### КТО ТЫ

```
[IMAGE: expert-photo]
  width: 100px; height: 100px
  border-radius: 50%
  float: left; margin-right: 16px
  placeholder: фото Дамира
```

```
[TEXT: h2]
  font: Clash Display 700, 22px
  color: #E8651A
  text-transform: uppercase

  "МЕНЯ ЗОВУТ ДАМИР"
```

```
[TEXT: subtitle]
  font: Manrope 500, 15px
  color: var(--text-secondary)
  margin-top: 4px

  "И за 2 года работы в продвижении
  языковых школ и образовательных центров"
```

### ПРОБЛЕМЫ РЫНКА

```
[TEXT: h3]
  font: Clash Display 600, 18px
  color: var(--text-primary)
  text-transform: uppercase
  text-align: center
  margin-top: 32px

  "ВЕЗДЕ Я ВИДЕЛ ОДНИ И ТЕ ЖЕ ПРОБЛЕМЫ
  которые жадно забирают деньги из карманов владельцев:"
```

```
[BLOCK: problem-card-1]
  background: var(--bg) #0D0C0B
  border: 1px solid var(--border)
  border-radius: 12px
  padding: 16px 20px
  margin-top: 16px

  [TEXT: label]
    font: Clash Display 600, 13px
    color: #E8651A
    text-transform: uppercase
    "ПРОБЛЕМА №1"

  [TEXT: description]
    font: Manrope 500, 16px
    color: var(--text-primary)
    margin-top: 4px
    "Зависимость от сарафана"
```

```
[BLOCK: problem-card-2]
  (аналогичная структура)

  label: "ПРОБЛЕМА №2"
  description: "Нет продаж после пробных"
```

```
[BLOCK: problem-card-3]
  (аналогичная структура)

  label: "ПРОБЛЕМА №3"
  description: "Привлечение учеников через акции и скидки"
```

```
[TEXT: transition]
  font: Clash Display 600, 16px
  color: var(--text-primary)
  text-align: center
  text-transform: uppercase
  margin-top: 24px

  "И если вам это знакомо, продолжайте читать.
  Я сейчас покажу как это исправить всего за "
  [SPAN: "3 шага" color: #E8651A]
```

```
[ELEMENT: arrow-down]
  text-align: center; margin-top: 16px
  icon: ↓ color var(--text-muted)
```

---

## СЕКЦИЯ 4: МЕХАНИЗМ РЕШЕНИЯ (3 ШАГА)

### ШАГ 1: АЛМАЗ СРЕДИ КАМНЕЙ

```
[BLOCK: step-1]
  background: var(--bg-card) #171614
  border-radius: 16px
  padding: 32px 20px
  margin: 24px 16px 0
```

```
[ELEMENT: step-badge]
  background: #E8651A
  border-radius: 8px
  padding: 8px 24px
  display: inline-block
  margin-bottom: 16px

  [TEXT]
    font: Clash Display 700, 14px
    color: #FFFFFF
    text-transform: uppercase
    "ШАГ 1: АЛМАЗ СРЕДИ КАМНЕЙ"
```

```
[TEXT: body]
  font: Manrope 400, 15px
  color: var(--text-primary)
  line-height: 1.6

  "Даже в небольшом городе Казахстана более 250 языковых школ.
  Что уж говорить о миллионниках..."
```

```
[TEXT: body-2]
  font: Manrope 400, 15px
  color: var(--text-primary)
  margin-top: 12px

  "И все говорят одно и то же:
  — «английский для всех»
  — «индивидуальный подход»
  — «опытные преподаватели»"
```

```
[TEXT: accent]
  font: Manrope 500, 15px
  color: var(--text-primary)
  margin-top: 16px

  "Поэтому клиент выбирает по цене.
  Чтобы выделиться — нужно создать "
  [SPAN: "«внеконкурентное предложение»" color: #E8651A font-weight: 600]
```

```
[IMAGE: 2gis-screenshot]
  width: 100%; border-radius: 8px
  margin-top: 16px
  placeholder: скриншот 2GIS с количеством школ
```

```
[TEXT: h3]
  font: Clash Display 600, 16px
  color: var(--text-primary)
  text-align: center
  margin-top: 24px
  text-transform: uppercase

  "РАССКАЖУ НА ПРИМЕРЕ"
```

```
[TEXT: example]
  font: Manrope 500, 15px
  color: var(--text-primary)
  margin-top: 12px

  "Человеку нужен английский для путешествий.
  Где он скорее выберет обучение?"
```

```
[TEXT: bad-option]
  font: Manrope 400, 15px
  color: var(--text-primary)
  margin-top: 12px
  icon: ✕ color: #C9530F

  "Школа, где снова предлагают учить правила и списки слов"
```

```
[TEXT: good-option]
  font: Manrope 500, 15px
  color: var(--text-primary)
  margin-top: 8px
  icon: ✓ color: #E8651A

  "Школа, которая говорит: «Заговорите в аэропорту, отеле,
  кафе, такси и ресторане за 5 занятий»"
```

```
[IMAGE: review-step1]
  width: 100%; border-radius: 8px
  margin-top: 16px
  placeholder: отзыв от владельца языковой школы
```

```
[IMAGE: crm-screenshot]
  width: 100%; border-radius: 8px
  margin-top: 12px
  placeholder: скриншот CRM / Google Календарь с записями
```

```
[TEXT: step1-result]
  font: Clash Display 600, 15px
  color: var(--text-primary)
  text-align: center
  text-transform: uppercase
  margin-top: 20px

  "ТОЛЬКО ВНЕДРЕНИЕ ЭТОГО ШАГА ПОЗВОЛИТ
  перестать конкурировать ценой,
  снизить цену заявки "
  [SPAN: "в 2 раза" color: #E8651A]
  " и записи на пробные "
  [SPAN: "14 дней вперёд" color: #E8651A]
```

---

### ШАГ 2: СИСТЕМА ПРИВЛЕЧЕНИЯ УЧЕНИКОВ (ТПУ)

```
[BLOCK: step-2]
  background: var(--bg-card) #171614
  border-radius: 16px
  padding: 32px 20px
  margin: 24px 16px 0
```

```
[ELEMENT: step-badge]
  background: #E8651A
  border-radius: 8px
  padding: 8px 24px

  [TEXT]
    font: Clash Display 700, 14px
    color: #FFFFFF
    text-transform: uppercase
    "ШАГ 2: СИСТЕМА ПРИВЛЕЧЕНИЯ УЧЕНИКОВ"
```

```
[TEXT: body]
  font: Manrope 400, 15px
  color: var(--text-primary)
  line-height: 1.6
  margin-top: 16px

  "Теперь, когда у вас есть сильное «внеконкурентное предложение»,
  его нужно донести до людей с острой болью"
```

```
[TEXT: body-2]
  font: Manrope 400, 15px
  color: var(--text-primary)
  margin-top: 12px

  "Мы выстраиваем точечное привлечение учеников (ТПУ):

  Не «всем английский»
  А:
  — английский для переезда
  — английский для работы
  — английский для школьников с конкретной проблемой"
```

```
[TEXT: highlight]
  font: Manrope 500, 15px
  color: #E8651A
  margin-top: 12px

  "Под каждую аудиторию — своё объявление и свой заход"
```

```
[TEXT: benefits]
  font: Manrope 400, 15px
  color: var(--text-primary)
  margin-top: 16px
  line-height: 1.6

  "За счёт этого:
  — приходят люди с уже сформированной потребностью
  — уменьшается количество «подумаю»
  — увеличивается доходимость до пробного"
```

```
[TEXT: step2-result]
  font: Clash Display 600, 15px
  color: var(--text-primary)
  text-align: center
  text-transform: uppercase
  margin-top: 20px
  padding: 16px
  border: 1px solid var(--border)
  border-radius: 12px

  "Благодаря этому шагу вы привлекаете одну целевую аудиторию
  с одной острой болью и обеспечиваете "
  [SPAN: "5+ пробных занятий ежедневно" color: #E8651A]
  " даже в несезон"
```

---

### ШАГ 3: СИСТЕМА ПРОДАЖ НА ПРОБНОМ УРОКЕ

```
[BLOCK: step-3]
  background: var(--bg-card) #171614
  border-radius: 16px
  padding: 32px 20px
  margin: 24px 16px 0
```

```
[ELEMENT: step-badge]
  background: #E8651A
  border-radius: 8px
  padding: 8px 24px

  [TEXT]
    font: Clash Display 700, 14px
    color: #FFFFFF
    text-transform: uppercase
    "ШАГ 3: СИСТЕМА ПРОДАЖ НА ПРОБНОМ УРОКЕ"
```

```
[TEXT: h3]
  font: Clash Display 600, 16px
  color: var(--text-primary)
  margin-top: 16px

  "Гость становится учеником"
```

```
[TEXT: body]
  font: Manrope 400, 15px
  color: var(--text-primary)
  line-height: 1.6
  margin-top: 12px

  "Вот где теряется больше всего денег.
  Потому что у большинства школ пробный урок — это:
  — знакомство
  — «немного позанимались»
  — «ну подумайте»"
```

```
[TEXT: stat]
  font: Manrope 600, 16px
  color: #C9530F
  margin-top: 12px

  "И 7 из 10 уходят."
```

```
[TEXT: solution]
  font: Manrope 400, 15px
  color: var(--text-primary)
  margin-top: 16px
  line-height: 1.6

  "Мы перестраиваем пробный урок в мини-результат + продажу через ценность.

  Ученик уже на первом занятии:
  — начинает говорить простые фразы
  — понимает, что «я реально смогу»
  — видит чёткий план: как за 2–3 месяца прийти к результату"
```

```
[TEXT: key-point]
  font: Manrope 600, 15px
  color: #E8651A
  margin-top: 12px

  "И самое главное: он понимает, почему ему нельзя откладывать"
```

```
[IMAGE: review-step3]
  width: 100%; border-radius: 8px
  margin-top: 16px
  placeholder: отзыв от владельца языковой школы + чек на 5 млн
```

```
[TEXT: step3-result]
  font: Clash Display 600, 15px
  color: var(--text-primary)
  text-align: center
  text-transform: uppercase
  margin-top: 20px
  padding: 16px
  border: 1px solid var(--border)
  border-radius: 12px

  "В результате: каждый 2-й после пробного оплачивает обучение
  пакетом на 3–6 месяцев. Средний чек растёт "
  [SPAN: "в 2–3 раза" color: #E8651A]
```

---

## СЕКЦИЯ 5: РЕЗУЛЬТАТ

```
[BLOCK: result-summary]
  background: var(--bg)
  padding: 40px 20px
  text-align: center
  margin: 0 16px
```

```
[TEXT: h2]
  font: Clash Display 700, 24px
  color: var(--text-primary)
  text-transform: uppercase

  "ТАКИМ ОБРАЗОМ"
```

```
[TEXT: body]
  font: Manrope 500, 16px
  color: var(--text-primary)
  margin-top: 16px
  line-height: 1.5

  "Всего за "
  [SPAN: "30 дней" color: #E8651A font-weight: 700]
  " вы выйдете на стабильные "
  [SPAN: "5 000 000 тенге" color: #E8651A font-weight: 700]
  ", закрывая каждого 2-го после пробного урока"
```

### ДО / ПОСЛЕ (иллюстрация)

```
[BLOCK: before-after-visual]
  display: flex; gap: 12px
  margin-top: 24px
  border: 2px dashed #E8651A
  border-radius: 12px
  padding: 16px
```

```
[BLOCK: before-side]
  flex: 1; text-align: center

  [TEXT: label] "ДО:" font: Clash Display 700, 16px, color: var(--text-primary)
  [IMAGE: illustration-before]
    placeholder: иллюстрация — уставший владелец школы
    border-radius: 8px
  [ELEMENT: icon] ✕ color: #C9530F
  [IMAGE: bank-small-before]
    placeholder: скриншот выписки (маленький доход)
```

```
[BLOCK: after-side]
  flex: 1; text-align: center

  [TEXT: label] "ПОСЛЕ:" font: Clash Display 700, 16px, color: var(--text-primary)
  [IMAGE: illustration-after]
    placeholder: иллюстрация — успешная школа, полные классы
    border-radius: 8px
  [ELEMENT: icon] ✓ color: #E8651A
  [IMAGE: bank-small-after]
    placeholder: скриншот выписки (5 000 000 ₸)
```

---

## СЕКЦИЯ 6: «КАЖЕТСЯ ПРОСТЫМ»

```
[BLOCK: seems-easy]
  background: var(--bg)
  padding: 40px 20px
  text-align: center
```

```
[TEXT: h2]
  font: Clash Display 700, 22px
  color: #E8651A
  text-transform: uppercase

  "НА ПЕРВЫЙ ВЗГЛЯД ВСЁ КАЖЕТСЯ ПРОСТЫМ..."
```

```
[TEXT: subtitle]
  font: Manrope 500, 15px
  color: var(--text-secondary)
  margin-top: 8px
  text-transform: uppercase

  "Но у меня ушло 2 года, чтобы разобраться, в том:"
```

```
[BLOCK: insight-list]
  background: var(--bg-card)
  border: 1px solid var(--border)
  border-radius: 16px
  padding: 24px 20px
  margin-top: 20px
  text-align: left
```

```
[TEXT: insight-1]
  font: Manrope 400, 15px
  color: var(--text-primary)
  line-height: 1.6
  margin-bottom: 20px

  [SPAN: "1" font: Clash Display 700, 32px, color: #E8651A, margin-right: 12px]
  "Как создать адресное предложение, которое обеспечит
  бесперебойную запись на пробный урок"
```

```
[TEXT: insight-2]
  (аналогичная структура)

  [SPAN: "2"]
  "Какие 20% клиентов приносят 80% прибыли"
```

```
[TEXT: insight-3]
  (аналогичная структура)

  [SPAN: "3"]
  "Как системно расти, вкладывая $1 и получать $10 выручки
  используя ТПУ"
```

```
[IMAGE: review-insight]
  width: 100%; border-radius: 8px
  margin-top: 20px
  placeholder: отзыв от владельца (подтверждение)
```

---

## СЕКЦИЯ 7: ЧТО БУДЕТ НА КОНСУЛЬТАЦИИ

```
[BLOCK: consultation-content]
  background: var(--bg)
  padding: 40px 20px
  text-align: center
```

```
[TEXT: h2]
  font: Clash Display 700, 22px
  color: #E8651A
  text-transform: uppercase

  "ВСЕ ОТВЕТЫ УЖЕ НАЙДЕНЫ"
```

```
[TEXT: subtitle]
  font: Clash Display 600, 17px
  color: var(--text-primary)
  text-transform: uppercase
  margin-top: 8px

  "Я ПРЕДЛАГАЮ ВАМ ЗАБРАТЬ ИХ
  НА 1-ЧАСОВОЙ СТРАТЕГИЧЕСКОЙ СЕССИИ,
  ГДЕ Я ПО ШАГАМ РАЗЛОЖУ:"
```

```
[BLOCK: consultation-list]
  background: var(--bg-card)
  border: 1px solid var(--border)
  border-radius: 16px
  padding: 24px 20px
  margin-top: 20px
  text-align: left
```

```
[TEXT: item-1]
  font: Manrope 400, 15px
  color: var(--text-primary)
  line-height: 1.5
  padding-bottom: 16px
  border-bottom: 1px solid var(--border)

  [SPAN: "1" font: Clash Display 700, 28px, color: #E8651A, margin-right: 12px]
  "Как создать "
  [SPAN: "«адресное предложение»" color: #E8651A font-weight: 600]
  " которое создаст бесперебойный поток клиентов"
```

```
[TEXT: item-2]
  (аналогичная структура, padding-top: 16px)

  [SPAN: "2"]
  "Как благодаря ТПУ привлекать от "
  [SPAN: "5 учеников в день" color: #E8651A]
  " на пробный, даже в мёртвый сезон"
```

```
[TEXT: item-3]
  [SPAN: "3"]
  "Как продавать абонемент "
  [SPAN: "каждому 2-му" color: #E8651A]
  " в день после пробного"
```

```
[TEXT: item-4]
  [SPAN: "4"]
  "Как выйти на стабильные "
  [SPAN: "5 млн тенге" color: #E8651A]
  " без разорительных акций и скидок"
```

```
[TEXT: item-5]
  [SPAN: "5"]
  "Как найти "
  [SPAN: "20% аудитории" color: #E8651A]
  " которая приносит 80% прибыли"
```

```
[TEXT: item-6]
  [SPAN: "6"]
  "Как увеличить средний чек с ученика "
  [SPAN: "x2" color: #E8651A]
  " благодаря пакетным продажам на 3–6 месяцев"
```

---

## СЕКЦИЯ 8: ЦЕНА

```
[BLOCK: pricing]
  background: var(--bg)
  padding: 40px 20px
  text-align: center
```

```
[TEXT: h2]
  font: Clash Display 700, 22px
  color: #E8651A
  text-transform: uppercase

  "СКОЛЬКО ЭТО СТОИТ?"
```

### ВОПРОСЫ-ТРИГГЕРЫ

```
[BLOCK: trigger-questions]
  background: var(--bg-card)
  border: 1px solid var(--border)
  border-radius: 16px
  padding: 24px 20px
  margin-top: 20px
  text-align: center
```

```
[TEXT: q1]
  font: Manrope 500, 15px
  color: var(--text-primary)
  line-height: 1.5
  margin-bottom: 16px

  "Сколько заявок вы уже оплатили... но они так и не дошли до пробного?"
```

```
[TEXT: q2]
  (аналогично)
  "Сколько людей пришли на пробный, сказали «я подумаю» и пропали навсегда?"
```

```
[TEXT: q3]
  (аналогично)
  "Сколько ещё нужно давать скидок, чтобы хоть кто-то записался?"
```

```
[TEXT: q4]
  (аналогично)
  "Если завтра убрать скидки — продажи останутся или всё встанет?"
```

### НЕДОЗАРАБОТОК

```
[TEXT: loss-question]
  font: Clash Display 600, 18px
  color: var(--text-primary)
  text-transform: uppercase
  text-align: center
  margin-top: 24px

  "Сколько вы недозарабатываете?"
```

```
[TEXT: loss-amounts]
  font: Clash Display 700, 22px
  color: #E8651A
  text-align: center
  margin-top: 8px

  "3 млн?   5 млн?"
```

### ЯКОРНЫЕ ЦЕНЫ

```
[TEXT: anchor-intro]
  font: Manrope 500, 15px
  color: var(--text-primary)
  text-align: center
  margin-top: 24px

  "Положа руку на сердце, решение таких проблем
  должно стоить от "
  [SPAN: "500 000 ₸" color: #E8651A font-weight: 700]
```

```
[BLOCK: price-card]
  background: var(--bg-card)
  border-radius: 16px
  padding: 32px 20px
  margin-top: 20px
  text-align: center
```

```
[TEXT: price-anchor-1]
  font: Clash Display 600, 18px
  color: var(--text-muted)
  text-decoration: line-through
  margin-bottom: 4px

  "499 990 ₸"
```

```
[TEXT: price-label-1]
  font: Manrope 400, 13px
  color: var(--text-secondary)
  text-transform: uppercase

  "(РЕАЛЬНАЯ ЦЕННОСТЬ ПРЕДЛОЖЕНИЯ)"
```

```
[TEXT: price-anchor-2]
  font: Clash Display 600, 18px
  color: var(--text-muted)
  text-decoration: line-through
  margin-top: 20px
  margin-bottom: 4px

  "49 990 ₸"
```

```
[TEXT: price-label-2]
  font: Manrope 400, 13px
  color: var(--text-secondary)
  text-transform: uppercase

  "(ЦЕНА МОЕЙ КОНСУЛЬТАЦИИ В ОБЫЧНОЕ ВРЕМЯ)"
```

### ИТОГОВАЯ ЦЕНА

```
[BLOCK: final-price]
  background: #E8651A
  border-radius: 12px
  padding: 24px 20px
  margin-top: 24px
  text-align: center
```

```
[TEXT: price]
  font: Clash Display 700, 40px
  color: #FFFFFF

  "4.990 ₸"
```

```
[TEXT: price-note]
  font: Manrope 600, 13px
  color: #FFFFFF
  text-transform: uppercase
  margin-top: 4px

  "ЦЕНА АКТУАЛЬНА ТОЛЬКО
  ДЛЯ 10 ВЛАДЕЛЬЦЕВ ЯЗЫКОВЫХ ШКОЛ"
```

### CTA

```
[CTA: primary]
  width: 100%
  padding: 16px 24px
  background: #E8651A
  border-radius: 12px
  font: Manrope 600, 16px, uppercase
  color: #FFFFFF
  margin-top: 20px

  icon: WhatsApp (white)
  text: "ХОЧУ НА КОНСУЛЬТАЦИЮ"
```

```
[TEXT: cta-note]
  font: Manrope 400, 12px
  color: var(--text-muted)
  text-align: center
  margin-top: 8px

  "*При нажатии откроется чат WhatsApp с Дамиром"
```

---

## СЕКЦИЯ 9: БОНУСЫ

```
[BLOCK: bonuses]
  background: var(--bg)
  padding: 40px 20px
  text-align: center
```

```
[TEXT: h2]
  font: Clash Display 700, 20px
  color: var(--text-primary)
  text-transform: uppercase

  "НО ЭТО ЕЩЁ НЕ ВСЁ!"
```

```
[TEXT: subtitle]
  font: Manrope 500, 15px
  color: var(--text-primary)
  margin-top: 8px

  "Прямо на консультации я подарю "
  [SPAN: "3 практических бонуса" color: #E8651A font-weight: 600]
  ", которые сразу применимы в работе"
```

### БОНУС 1

```
[BLOCK: bonus-card-1]
  background: var(--bg-card)
  border: 1px solid var(--border)
  border-radius: 12px
  padding: 20px
  margin-top: 20px
  text-align: left
```

```
[TEXT: bonus-label]
  font: Clash Display 600, 14px
  color: #E8651A
  text-transform: uppercase

  "БОНУС #1"
```

```
[TEXT: bonus-title]
  font: Manrope 600, 16px
  color: var(--text-primary)
  margin-top: 4px

  "PDF «Как ваш менеджер должен разговаривать с родителями»"
```

```
[TEXT: bonus-description]
  font: Manrope 400, 14px
  color: var(--text-secondary)
  margin-top: 8px
  line-height: 1.5

  "13 страниц: скрипты звонков, закрытие «дорого» и «подумаю»,
  система 6 касаний. Отправьте менеджеру — результат на этой неделе."
```

```
[TEXT: bonus-price]
  font: Manrope 600, 14px
  margin-top: 12px

  [SPAN: "ПОДАРОК" color: #E8651A]
  "   "
  [SPAN: "39 990 тг" color: var(--text-muted) text-decoration: line-through]
```

### БОНУС 2

```
[BLOCK: bonus-card-2]
  (аналогичная структура)
  margin-top: 12px

  label: "БОНУС #2"
  title: "PDF «Маркетинг языковой школы простым языком»"
  description: "10 страниц: все каналы с ценами по Казахстану,
  воронка от клика до оплаты, 5 цифр которые вы обязаны знать
  + чек-лист на 12 пунктов."
  price: "ПОДАРОК   19 990 тг (зачёркнуто)"
```

### БОНУС 3

```
[BLOCK: bonus-card-3]
  (аналогичная структура)
  margin-top: 12px

  label: "БОНУС #3"
  title: "Google-таблица «Сколько стоит один ученик»"
  description: "Подставляете свои цифры — через 5 минут видите:
  зарабатываете вы или кормите рекламный кабинет."
  price: "ПОДАРОК   15 990 тг (зачёркнуто)"
```

```
[TEXT: bonus-total]
  font: Manrope 600, 16px
  color: var(--text-primary)
  text-align: center
  margin-top: 20px

  "Итого бонусов: "
  [SPAN: "75 970 ₸" color: #E8651A text-decoration: line-through]
  " бесплатно"
```

---

## СЕКЦИЯ 10: ГАРАНТИЯ

```
[BLOCK: guarantee]
  background: var(--bg-card)
  border: 1px solid var(--border)
  border-radius: 16px
  padding: 32px 20px
  margin: 24px 16px
  text-align: center
```

```
[TEXT: h2]
  font: Clash Display 700, 22px
  color: var(--text-primary)
  text-transform: uppercase

  "ВЫ НИЧЕМ НЕ РИСКУЕТЕ!"
```

```
[TEXT: body]
  font: Manrope 400, 15px
  color: var(--text-primary)
  margin-top: 16px
  line-height: 1.6

  "Я уверен в своей технологии и её пользе, поэтому даю "
  [SPAN: "безусловную гарантию" color: #E8651A font-weight: 600]
  " возврата средств — если информация на консультации
  покажется банальной, и вы захотите возврат, то просто напишите мне."
```

```
[TEXT: refund-cta]
  font: Manrope 500, 15px
  color: var(--text-secondary)
  margin-top: 16px
  font-style: italic

  "Всё, что вам нужно сделать — просто написать мне:
  «Дамир, хочу возврат»."
```

```
[CTA: primary]
  (стандартная оранжевая кнопка)
  margin-top: 24px
  text: "ХОЧУ НА КОНСУЛЬТАЦИЮ"
```

```
[TEXT: cta-note]
  "*При нажатии откроется чат WhatsApp с Дамиром"
```

---

## СЕКЦИЯ 11: FAQ

```
[BLOCK: faq]
  background: var(--bg)
  padding: 40px 20px
```

```
[TEXT: h2]
  font: Clash Display 700, 20px
  color: var(--text-primary)
  text-align: center
  text-transform: uppercase

  "В ТВОЕЙ ГОЛОВЕ МОГЛИ ВОЗНИКНУТЬ ВОПРОСЫ:"
```

### FAQ 1

```
[BLOCK: faq-item-1]
  background: var(--bg-card)
  border-radius: 12px
  padding: 20px
  margin-top: 16px
```

```
[ELEMENT: faq-toggle]
  display: flex; justify-content: space-between; align-items: center
  cursor: pointer

  [TEXT: question]
    font: Manrope 600, 15px
    color: var(--text-primary)
    "Почему так дёшево, если это так ценно?"

  [ICON: chevron-down]
    color: var(--text-muted)
    transition: transform 0.3s
```

```
[BLOCK: faq-answer] (collapsed by default)
  margin-top: 12px
  padding-top: 12px
  border-top: 1px solid var(--border)

  [TEXT]
    font: Manrope 400, 14px
    color: var(--text-secondary)
    line-height: 1.6

    "Буду откровенен...
    Я уверен, когда вы увидите внутрянку консультации
    и получите тот объём пользы и инсайтов — вы захотите
    узнать о моих других продуктах.
    Но насильно предлагать я ничего не буду.
    Эта консультация — полностью самостоятельный
    и полноценный продукт!"
```

```
[CTA: primary]
  margin-top: 16px
  text: "ХОЧУ НА КОНСУЛЬТАЦИЮ"
```

```
[TEXT: cta-note]
```

### FAQ 2

```
[BLOCK: faq-item-2]
  (аналогичная структура)
  margin-top: 12px

  question: "Почему только 20 человек? Это дожим или уловка?"
  answer: "20 консультаций — это 20 часов моего времени.
  Именно столько времени я физически могу выделить
  в месяц без вреда для моей основной деятельности
  (я практикующий маркетолог)"
```

```
[CTA: primary]
  margin-top: 16px
  text: "ХОЧУ НА КОНСУЛЬТАЦИЮ"
```

```
[TEXT: cta-note]
```

### FAQ 3

```
[BLOCK: faq-item-3]
  (аналогичная структура)
  margin-top: 12px

  question: "Откуда ты взял эту систему?"
  answer: "Эта система была разработана мной за 2 года внутри
  языковой школы с оборотом 46 млн тенге в месяц.
  Затем протестирована в 30 языковых школах Казахстана.
  Она показала положительную динамику, со временем
  я довёл её до совершенства."
```

```
[CTA: primary]
  margin-top: 16px
  text: "ХОЧУ НА КОНСУЛЬТАЦИЮ"
```

```
[TEXT: cta-note]
```

---

## СЕКЦИЯ 12: ФИНАЛЬНЫЙ CTA

```
[BLOCK: final-cta]
  background: var(--bg)
  padding: 40px 20px 60px
  text-align: center
```

```
[TEXT: h2]
  font: Clash Display 700, 22px
  color: #E8651A
  text-transform: uppercase

  "ЗАПИСЫВАЙТЕСЬ ПРЯМО СЕЙЧАС"
```

```
[TEXT: urgency]
  font: Manrope 500, 15px
  color: var(--text-primary)
  margin-top: 12px

  "Осталось мест: "
  [SPAN: "10" color: #E8651A font-weight: 700 font-size: 24px]
  " из 10"
```

```
[TEXT: price-reminder]
  font: Clash Display 700, 32px
  color: #E8651A
  margin-top: 16px

  "4.990 ₸"
```

```
[CTA: primary]
  width: 100%
  padding: 18px 24px
  background: #E8651A
  border-radius: 12px
  font: Manrope 700, 18px, uppercase
  color: #FFFFFF
  margin-top: 20px

  icon: WhatsApp (white)
  text: "ХОЧУ НА КОНСУЛЬТАЦИЮ"
```

```
[TEXT: cta-note]
  font: Manrope 400, 12px
  color: var(--text-muted)
  text-align: center
  margin-top: 8px

  "*При нажатии откроется чат WhatsApp с Дамиром"
```

---

## ГЛОБАЛЬНЫЕ ЗАМЕТКИ ДЛЯ ВЕРСТКИ

### CSS Custom Properties

```css
:root {
  --accent: #E8651A;
  --accent-hover: #F07535;
  --accent-active: #C9530F;
}

[data-theme="dark"] {
  --bg: #0D0C0B;
  --bg-card: #171614;
  --border: #2A2825;
  --text-primary: #F2EDE8;
  --text-secondary: #9A9088;
  --text-muted: #5C5550;
}

[data-theme="light"] {
  --bg: #FAF7F4;
  --bg-card: #F0EAE3;
  --border: #DDD4CC;
  --text-primary: #1A1510;
  --text-secondary: #6B5F58;
  --text-muted: #A89E98;
}
```

### ШРИФТЫ

| Шрифт | Назначение | Начертание |
|---|---|---|
| Clash Display | H1, H2, H3, бейджи, цены | 600, 700 |
| Manrope | Body, буллиты, кнопки, подписи | 400, 500, 600 |

### КНОПКА CTA (глобальный компонент)

```
- width: 100%
- padding: 16px 24px
- background: var(--accent)
- border: none
- border-radius: 12px
- color: #FFFFFF
- font: Manrope 600, 16px
- text-transform: uppercase
- cursor: pointer
- transition: background 0.2s ease
- hover: var(--accent-hover)
- active: var(--accent-active)
- icon: WhatsApp SVG (white, 20x20, margin-right: 8px)
```

### ОБЩИЕ ОТСТУПЫ

```
- Секции: padding 40px 20px (vertical / horizontal)
- Карточки: margin 0 16px, padding 32px 20px, border-radius 16px
- Между секциями: margin-top 24px
- Текстовые блоки внутри секций: margin-top 12–16px
```

### АНИМАЦИИ

```
- Scroll arrow bounce: translateY(0→8px→0) 2s infinite
- FAQ accordion: max-height 0→auto, opacity 0→1, 0.3s ease
- Theme toggle: background transition 0.3s ease
- CTA hover: background transition 0.2s ease
```

### BREAKPOINTS

```
- 375px — базовая ширина (iPhone SE)
- 390px — iPhone 14
- 430px — iPhone 14 Pro Max
- max-width: 480px — контейнер для контента
```
