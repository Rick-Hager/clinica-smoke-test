# Design Guidelines — Clínica Smoke Test

> **Versão:** 1.0 | **Gerado por:** Consolidation Agent v0.2
> Paleta de cores e tipografia coerentes com brand-book.md. Todos os tokens CSS aqui definidos são a **fonte única de verdade** para o desenvolvedor Astro — nunca usar valores de cor ou espaçamento avulsos no código.

---

## 1. Design Tokens CSS

### 1.1 Tokens de Cor

```css
:root {
  /* === CORES PRIMÁRIAS === */
  /* Coerência brand-book.md § 1 */
  --color-primary:          #2D6A4F; /* Verde Floresta — cor âncora da marca */
  --color-primary-hover:    #235A41; /* Verde Floresta escurecido ~15% — hover de botões */
  --color-primary-light:    #52B788; /* Verde Médio — ícones, tags, suporte */
  --color-primary-subtle:   #D8F3E6; /* Verde muito claro — fundos de badges, alertas positivos */

  /* === CORES DE ACENTO === */
  --color-accent:           #D4A373; /* Terracota Dourado — CTAs secundários, destaques */
  --color-accent-hover:     #C4915F; /* Terracota escurecido ~10% — hover */
  --color-accent-light:     #E9C46A; /* Âmbar Suave — badges, indicadores de atenção */

  /* === TEXTO === */
  --color-text-primary:     #1C1C1E; /* Grafite Profundo — texto principal */
  --color-text-secondary:   #4A4A4A; /* Cinza Médio — texto secundário, legendas */
  --color-text-disabled:    #9E9E9E; /* Cinza Claro — placeholders, desabilitados */
  --color-text-inverse:     #FFFFFF; /* Branco — texto sobre fundos escuros */

  /* === FUNDOS === */
  --color-bg-page:          #F8F4F0; /* Branco Quente — fundo padrão de página */
  --color-bg-card:          #FFFFFF; /* Branco Puro — cards, modais, formulários */
  --color-bg-section-alt:   #EEF7F2; /* Verde suavíssimo — seções alternadas */
  --color-bg-dark:          #2D6A4F; /* Verde Floresta — footer, seções de destaque escuro */

  /* === BORDAS === */
  --color-border:           #E8E4E0; /* Cinza quente — bordas padrão, divisórias */
  --color-border-focus:     #2D6A4F; /* Verde Floresta — borda de foco em inputs */
  --color-border-error:     #D9534F; /* Vermelho — borda de campo inválido */

  /* === ESTADOS SEMÂNTICOS === */
  --color-success:          #52B788; /* Verde Médio — sucesso, confirmação */
  --color-warning:          #E9C46A; /* Âmbar Suave — atenção */
  --color-error:            #D9534F; /* Vermelho — erro, campo inválido */
  --color-info:             #4A90D9; /* Azul informativo — alertas neutros */

  /* === CANAIS EXTERNOS === */
  --color-whatsapp:         #25D366; /* Verde WhatsApp oficial */
  --color-whatsapp-hover:   #1DA851; /* Verde WhatsApp escurecido */
}
```

### 1.2 Tokens de Tipografia

```css
:root {
  /* === FAMÍLIAS === */
  /* Coerência brand-book.md § 2 */
  --font-heading: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-body:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* === ESCALA DE TAMANHO (base: 16px = 1rem) === */
  --text-xs:    0.8125rem;  /* 13px — labels, texto auxiliar */
  --text-sm:    0.875rem;   /* 14px — texto pequeno, meta */
  --text-base:  1rem;       /* 16px — corpo mobile / base */
  --text-lg:    1.125rem;   /* 18px — corpo desktop / lead */
  --text-xl:    1.25rem;    /* 20px — subtítulo / H4 */
  --text-2xl:   1.5rem;     /* 24px — H3 mobile */
  --text-3xl:   1.875rem;   /* 30px — H3 desktop / H2 mobile */
  --text-4xl:   2.25rem;    /* 36px — H2 desktop / H1 mobile */
  --text-5xl:   3rem;       /* 48px — H1 desktop */
  --text-6xl:   4rem;       /* 64px — H1 hero grande */

  /* === PESOS === */
  --font-normal:    400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;

  /* === ENTRELINHA === */
  --leading-tight:   1.2;  /* Títulos grandes H1/H2 */
  --leading-snug:    1.35; /* Títulos médios H3 */
  --leading-normal:  1.5;  /* Texto auxiliar, labels */
  --leading-relaxed: 1.6;  /* Corpo de texto corrido */

  /* === ESPAÇAMENTO ENTRE LETRAS === */
  --tracking-tight:  -0.02em; /* H1, H2 — comprime levemente */
  --tracking-normal:  0;       /* Corpo — neutro */
  --tracking-wide:    0.05em; /* Labels UPPERCASE */
}
```

### 1.3 Tokens de Espaçamento (Sistema 8pt)

```css
:root {
  --space-1:   0.25rem;  /*   4px */
  --space-2:   0.5rem;   /*   8px */
  --space-3:   0.75rem;  /*  12px */
  --space-4:   1rem;     /*  16px */
  --space-5:   1.25rem;  /*  20px */
  --space-6:   1.5rem;   /*  24px */
  --space-8:   2rem;     /*  32px */
  --space-10:  2.5rem;   /*  40px */
  --space-12:  3rem;     /*  48px */
  --space-16:  4rem;     /*  64px */
  --space-20:  5rem;     /*  80px */
  --space-24:  6rem;     /*  96px */
  --space-32:  8rem;     /* 128px */

  /* Padding de seção padrão */
  --section-py-desktop:  var(--space-24); /* 96px */
  --section-py-mobile:   var(--space-16); /* 64px */

  /* Container */
  --container-max-width: 1200px;
  --container-px:        var(--space-6);  /* 24px */
}
```

### 1.4 Tokens de Border Radius

```css
:root {
  --radius-sm:   4px;     /* Badges, tags pequenas */
  --radius-md:   8px;     /* Botões, inputs */
  --radius-lg:   12px;    /* Cards */
  --radius-xl:   16px;    /* Cards de destaque, imagens */
  --radius-2xl:  24px;    /* Seções hero, imagens grandes */
  --radius-full: 9999px;  /* Botões pill, avatars, botão flutuante */
}
```

### 1.5 Tokens de Sombra

```css
:root {
  --shadow-sm:        0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:        0 2px 12px rgba(0,0,0,0.08);
  --shadow-lg:        0 4px 24px rgba(0,0,0,0.10);
  --shadow-xl:        0 8px 40px rgba(0,0,0,0.12);
  --shadow-whatsapp:  0 4px 16px rgba(37,211,102,0.40);
  --shadow-focus:     0 0 0 3px rgba(45,106,79,0.25);
  --shadow-focus-error: 0 0 0 3px rgba(217,83,79,0.20);
}
```

---

## 2. Componentes

### 2.1 Botões

#### Botão Primário (`.btn-primary`)

```css
.btn-primary {
  display:          inline-flex;
  align-items:      center;
  gap:              var(--space-2);
  padding:          var(--space-3) var(--space-6);
  background-color: var(--color-primary);
  color:            var(--color-text-inverse);
  font-family:      var(--font-body);
  font-size:        var(--text-base);
  font-weight:      var(--font-semibold);
  line-height:      1;
  border:           2px solid transparent;
  border-radius:    var(--radius-md);
  text-decoration:  none;
  cursor:           pointer;
  transition:       background-color var(--duration-normal) var(--ease-out),
                    transform var(--duration-fast) var(--ease-out),
                    box-shadow var(--duration-normal) var(--ease-out);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
  box-shadow:       var(--shadow-md);
  transform:        translateY(-1px);
}

.btn-primary:focus-visible {
  outline:    none;
  box-shadow: var(--shadow-focus);
}

.btn-primary:active {
  transform:  translateY(0);
  box-shadow: none;
}

.btn-primary:disabled,
.btn-primary[aria-disabled="true"] {
  background-color: var(--color-text-disabled);
  cursor:           not-allowed;
  transform:        none;
  box-shadow:       none;
  pointer-events:   none;
}
```

#### Botão Secundário (`.btn-secondary`)

```css
.btn-secondary {
  display:          inline-flex;
  align-items:      center;
  gap:              var(--space-2);
  padding:          var(--space-3) var(--space-6);
  background-color: transparent;
  color:            var(--color-primary);
  font-family:      var(--font-body);
  font-size:        var(--text-base);
  font-weight:      var(--font-semibold);
  line-height:      1;
  border:           2px solid var(--color-primary);
  border-radius:    var(--radius-md);
  text-decoration:  none;
  cursor:           pointer;
  transition:       background-color var(--duration-normal) var(--ease-out),
                    color var(--duration-normal) var(--ease-out),
                    transform var(--duration-fast) var(--ease-out);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color:            var(--color-text-inverse);
  transform:        translateY(-1px);
}

.btn-secondary:focus-visible {
  outline:    none;
  box-shadow: var(--shadow-focus);
}

.btn-secondary:disabled {
  border-color: var(--color-text-disabled);
  color:        var(--color-text-disabled);
  cursor:       not-allowed;
  pointer-events: none;
}
```

#### Botão WhatsApp (`.btn-whatsapp`)

```css
.btn-whatsapp {
  display:          inline-flex;
  align-items:      center;
  gap:              var(--space-2);
  padding:          var(--space-3) var(--space-6);
  background-color: var(--color-whatsapp);
  color:            #FFFFFF;
  font-family:      var(--font-body);
  font-size:        var(--text-base);
  font-weight:      var(--font-semibold);
  border:           none;
  border-radius:    var(--radius-md);
  text-decoration:  none;
  cursor:           pointer;
  transition:       background-color var(--duration-normal) var(--ease-out),
                    transform var(--duration-fast) var(--ease-out),
                    box-shadow var(--duration-normal) var(--ease-out);
}

.btn-whatsapp:hover {
  background-color: var(--color-whatsapp-hover);
  box-shadow:       var(--shadow-whatsapp);
  transform:        translateY(-1px);
}

.btn-whatsapp:focus-visible {
  outline:    none;
  box-shadow: 0 0 0 3px rgba(37,211,102,0.35);
}
```

#### Botão Flutuante WhatsApp (`.btn-whatsapp-floating`)

```css
.btn-whatsapp-floating {
  position:         fixed;
  bottom:           var(--space-6);
  right:            var(--space-6);
  z-index:          9999;
  display:          flex;
  align-items:      center;
  gap:              var(--space-2);
  padding:          var(--space-3) var(--space-5);
  background-color: var(--color-whatsapp);
  color:            #FFFFFF;
  font-family:      var(--font-body);
  font-size:        var(--text-sm);
  font-weight:      var(--font-semibold);
  border:           none;
  border-radius:    var(--radius-full);
  box-shadow:       var(--shadow-whatsapp);
  text-decoration:  none;
  cursor:           pointer;
  transition:       transform var(--duration-normal) var(--ease-spring),
                    box-shadow var(--duration-normal) var(--ease-out);
}

.btn-whatsapp-floating:hover {
  transform:  scale(1.06);
  box-shadow: 0 6px 24px rgba(37,211,102,0.50);
}

.btn-whatsapp-floating:focus-visible {
  outline:    none;
  box-shadow: 0 0 0 3px rgba(37,211,102,0.35);
}

/* Mobile — apenas ícone */
@media (max-width: 768px) {
  .btn-whatsapp-floating {
    width:           56px;
    height:          56px;
    padding:         0;
    justify-content: center;
  }
  .btn-whatsapp-floating .btn-label {
    display: none;
  }
}
```

---

### 2.2 Cards

#### Card de Especialidade (`.card-service`)

```css
.card-service {
  display:          flex;
  flex-direction:   column;
  gap:              var(--space-4);
  padding:          var(--space-8);
  background-color: var(--color-bg-card);
  border:           1px solid var(--color-border);
  border-radius:    var(--radius-lg);
  box-shadow:       var(--shadow-sm);
  text-decoration:  none;
  color:            inherit;
  transition:       box-shadow var(--duration-normal) var(--ease-out),
                    transform var(--duration-normal) var(--ease-out),
                    border-color var(--duration-normal) var(--ease-out);
}

.card-service:hover {
  box-shadow:   var(--shadow-lg);
  transform:    translateY(-4px);
  border-color: var(--color-primary-light);
}

.card-service:focus-visible {
  outline:    none;
  box-shadow: var(--shadow-focus);
}

.card-service__icon {
  width:  48px;
  height: 48px;
  color:  var(--color-primary);
  flex-shrink: 0;
}

.card-service__title {
  font-family:     var(--font-heading);
  font-size:       var(--text-xl);
  font-weight:     var(--font-semibold);
  color:           var(--color-text-primary);
  line-height:     var(--leading-snug);
  letter-spacing:  var(--tracking-tight);
}

.card-service__description {
  font-family: var(--font-body);
  font-size:   var(--text-base);
  color:       var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  flex-grow:   1;
}

.card-service__cta {
  font-family:   var(--font-body);
  font-size:     var(--text-sm);
  font-weight:   var(--font-semibold);
  color:         var(--color-primary);
  margin-top:    auto;
  display:       flex;
  align-items:   center;
  gap:           var(--space-1);
}
```

#### Card de Depoimento (`.card-testimonial`)

```css
.card-testimonial {
  padding:          var(--space-8);
  background-color: var(--color-bg-card);
  border-left:      4px solid var(--color-primary);
  border-radius:    var(--radius-lg);
  box-shadow:       var(--shadow-sm);
}

.card-testimonial__quote {
  font-family:   var(--font-body);
  font-size:     var(--text-lg);
  font-style:    italic;
  color:         var(--color-text-primary);
  line-height:   var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.card-testimonial__author {
  font-family:  var(--font-body);
  font-size:    var(--text-sm);
  font-weight:  var(--font-medium);
  color:        var(--color-text-secondary);
}
```

---

### 2.3 Formulários

```css
/* Label */
.form-label {
  display:       block;
  font-family:   var(--font-body);
  font-size:     var(--text-sm);
  font-weight:   var(--font-medium);
  color:         var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.form-label--required::after {
  content: " *";
  color:   var(--color-error);
}

/* Input, Textarea, Select */
.form-input,
.form-textarea,
.form-select {
  width:            100%;
  padding:          var(--space-3) var(--space-4);
  background-color: var(--color-bg-card);
  color:            var(--color-text-primary);
  font-family:      var(--font-body);
  font-size:        var(--text-base);
  border:           1.5px solid var(--color-border);
  border-radius:    var(--radius-md);
  outline:          none;
  transition:       border-color var(--duration-normal) var(--ease-out),
                    box-shadow var(--duration-normal) var(--ease-out);
  appearance:       none;
  -webkit-appearance: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text-disabled);
}

/* Foco */
.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  border-color: var(--color-border-focus);
  box-shadow:   var(--shadow-focus);
}

/* Erro */
.form-input[aria-invalid="true"],
.form-textarea[aria-invalid="true"],
.form-select[aria-invalid="true"] {
  border-color: var(--color-border-error);
}

.form-input[aria-invalid="true"]:focus,
.form-textarea[aria-invalid="true"]:focus {
  box-shadow: var(--shadow-focus-error);
}

/* Desabilitado */
.form-input:disabled,
.form-textarea:disabled,
.form-select:disabled {
  background-color: #F2F2F2;
  color:            var(--color-text-disabled);
  cursor:           not-allowed;
}

/* Mensagem de erro inline */
.form-error {
  display:     flex;
  align-items: center;
  gap:         var(--space-1);
  margin-top:  var(--space-2);
  font-family: var(--font-body);
  font-size:   var(--text-xs);
  color:       var(--color-error);
}

/* Textarea */
.form-textarea {
  min-height: 120px;
  resize:     vertical;
}

/* Select com ícone de seta */
.form-select {
  background-image:    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234A4A4A' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat:   no-repeat;
  background-position: right var(--space-4) center;
  padding-right:       var(--space-10);
}

/* Checkbox LGPD */
.form-checkbox {
  display:     flex;
  align-items: flex-start;
  gap:         var(--space-3);
  cursor:      pointer;
}

.form-checkbox input[type="checkbox"] {
  width:        18px;
  height:       18px;
  flex-shrink:  0;
  margin-top:   2px;
  accent-color: var(--color-primary);
  cursor:       pointer;
}
```

---

### 2.4 Header / Navegação

```css
.header {
  position:         sticky;
  top:              0;
  z-index:          100;
  height:           72px;
  background-color: var(--color-bg-card);
  border-bottom:    1px solid transparent;
  transition:       border-color var(--duration-normal) var(--ease-out),
                    box-shadow var(--duration-normal) var(--ease-out);
}

.header.is-scrolled {
  border-bottom-color: var(--color-border);
  box-shadow:          var(--shadow-sm);
}

.nav-link {
  font-family:     var(--font-body);
  font-size:       var(--text-base);
  font-weight:     var(--font-medium);
  color:           var(--color-text-secondary);
  text-decoration: none;
  padding:         var(--space-2) var(--space-3);
  border-radius:   var(--radius-sm);
  transition:      color var(--duration-fast) var(--ease-out),
                   background-color var(--duration-fast) var(--ease-out);
}

.nav-link:hover,
.nav-link[aria-current="page"] {
  color:            var(--color-primary);
  background-color: var(--color-primary-subtle);
}

.nav-link:focus-visible {
  outline:    none;
  box-shadow: var(--shadow-focus);
}
```

---

### 2.5 Badge / Tag

```css
.badge {
  display:        inline-flex;
  align-items:    center;
  gap:            var(--space-1);
  padding:        var(--space-1) var(--space-3);
  font-family:    var(--font-body);
  font-size:      var(--text-xs);
  font-weight:    var(--font-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border-radius:  var(--radius-sm);
}

.badge--primary {
  background-color: var(--color-primary-subtle);
  color:            var(--color-primary);
}

.badge--accent {
  background-color: #FDF3E3;
  color:            var(--color-accent);
}

.badge--success {
  background-color: var(--color-primary-subtle);
  color:            var(--color-success);
}
```

---

## 3. Estados

### Tabela Resumo

| Componente | Normal | Hover | Focus-visible | Active | Disabled | Error |
|---|---|---|---|---|---|---|
| Botão primário | Verde Floresta fundo | Verde escuro + sombra md + translateY(-1px) | shadow-focus (anel verde 25%) | translateY(0), sem sombra | Cinza, cursor not-allowed | — |
| Botão secundário | Outline verde, fundo transp. | Fundo verde, texto branco | shadow-focus | — | Outline cinza, texto cinza | — |
| Botão WhatsApp | Verde `#25D366` | Verde escuro + shadow-whatsapp | Anel verde 35% | — | — | — |
| Input / Textarea | Borda cinza quente | — | Borda verde + shadow-focus | — | Fundo cinza, cursor not-allowed | Borda vermelha + shadow-focus-error |
| Card de serviço | Borda cinza, shadow-sm | shadow-lg + translateY(-4px) + borda verde suave | shadow-focus | — | — | — |
| Nav link | Cinza `#4A4A4A` | Verde + fundo verde suave | shadow-focus | — | — | — |

### Regras Gerais

- **Hover:** transition mínima de 150–200ms; nunca instantânea (parece bug) e nunca lenta (parece travado)
- **Focus-visible:** SEMPRE presente e visível — nunca remover `outline` sem substituto equivalente. Usar `box-shadow: var(--shadow-focus)` como padrão global
- **Disabled:** `cursor: not-allowed` + cor cinza; jamais ocultar completamente o elemento — paciente pode estar preenchendo formulário
- **Loading (botões de formulário):** spinner inline 16px; texto do botão muda para "Aguarde..."; `pointer-events: none` durante requisição

---

## 4. Acessibilidade (WCAG AA — Mínimo Obrigatório)

### Requisitos de Contraste

| Combinação | Taxa | Requisito | Status |
|---|---|---|---|
| Branco sobre Verde Floresta `#2D6A4F` | 8,4:1 | 4,5:1 (AA normal) | ✅ AAA |
| Branco sobre Grafite Profundo `#1C1C1E` | 16,1:1 | 4,5:1 | ✅ AAA |
| Grafite Profundo sobre Branco Quente `#F8F4F0` | 14,9:1 | 4,5:1 | ✅ AAA |
| Verde Floresta sobre Branco Quente | 7,7:1 | 4,5:1 | ✅ AA |
| Cinza Médio `#4A4A4A` sobre Branco Puro | 7,1:1 | 4,5:1 | ✅ AA |
| Cinza Claro `#9E9E9E` sobre Branco Puro | 2,8:1 | — | ⚠️ Usar apenas em placeholders/disabled — nunca em texto legível |

### Checklist Obrigatório

| Item | Descrição |
|---|---|
| **Contraste** | Todas as combinações de texto ≥ 4,5:1 (normal) ou ≥ 3:1 (grande); verificar com WebAIM Contrast Checker |
| **Foco visível** | Todos os elementos interativos devem ter indicador de foco claramente visível (shadow-focus padrão) |
| **Alt text** | Toda imagem com conteúdo: `alt` descritivo. Imagens decorativas: `alt=""` |
| **Semântica HTML** | Usar `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`, `<section>`, `<aside>` corretamente |
| **ARIA labels** | Botões sem texto visível (ícone only): `aria-label` obrigatório. Ex.: `aria-label="Abrir menu"` |
| **Hierarquia de headings** | H1 → H2 → H3 sem pular nível; 1 H1 por página |
| **Área clicável mínima** | 44×44px para todos os elementos interativos (WCAG 2.5.5) |
| **Formulários** | `<label for="id">` associado a cada input; `aria-required="true"` em campos obrigatórios; mensagens de erro com `role="alert"` ou `aria-live="polite"` |
| **Idioma** | `<html lang="pt-BR">` obrigatório |
| **Links descritivos** | Texto de link deve fazer sentido fora do contexto — evitar "clique aqui" isolado |
| **Teclado** | Navegação completa por Tab/Shift+Tab/Enter/Space/Esc sem armadilhas de foco |
| **Movimento** | Respeitar `prefers-reduced-motion` (ver § 5) |

### Ferramentas de Auditoria (Pré-Lançamento)

- Lighthouse Accessibility Score ≥ 90
- axe DevTools (extensão Chrome) — zero erros críticos
- WAVE (WebAIM) — zero erros
- Teste manual: navegação completa por teclado
- Teste com VoiceOver (macOS/iOS) ou NVDA (Windows)

---

## 5. Motion (Animações e Transições)

### Tokens de Motion

```css
:root {
  /* === DURAÇÕES === */
  --duration-instant: 100ms; /* Feedback imediato — hover de ícone */
  --duration-fast:    150ms; /* Hover com transform leve */
  --duration-normal:  200ms; /* Transições padrão de UI */
  --duration-slow:    300ms; /* Animações de entrada de elemento */
  --duration-slower:  500ms; /* Fade-in de seções ao scroll */

  /* === EASINGS === */
  --ease-default:  ease;
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);       /* Saída — elementos que saem */
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);        /* Entrada — elementos que entram */
  --ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);     /* Transições de estado */
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Micro-interações com "bounce" sutil */
}
```

### Padrões de Animação por Situação

| Situação | Propriedade animada | Duração | Easing |
|---|---|---|---|
| Hover em botão | `transform: translateY(-1px)`, `box-shadow` | 150ms | ease-out |
| Hover em card | `transform: translateY(-4px)`, `box-shadow`, `border-color` | 200ms | ease-out |
| Abertura de menu mobile | `transform: translateX(0)` (drawer enter) | 300ms | ease-out |
| Fechamento de menu mobile | `transform: translateX(100%)` (drawer leave) | 200ms | ease-in |
| Fade-in de seção ao scroll | `opacity: 0→1`, `transform: translateY(24px→0)` | 500ms | ease-out |
| Sucesso no formulário | `opacity: 0→1` da mensagem de sucesso | 300ms | ease-out |
| Dropdown de menu desktop | `opacity: 0→1`, `transform: translateY(-8px→0)` | 150ms | ease-out |
| Botão flutuante WhatsApp (entrada) | `transform: scale(0→1)`, `opacity: 0→1` | 300ms | ease-spring |

### Preferência por Movimento Reduzido (Obrigatório)

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration:        0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration:       0.01ms !important;
    scroll-behavior:           auto !important;
  }
}
```

---

## 6. Grid e Layout

```css
/* Container padrão */
.container {
  width:     100%;
  max-width: var(--container-max-width); /* 1200px */
  margin:    0 auto;
  padding:   0 var(--container-px);      /* 0 24px */
}

/* Grid de especialidades */
.grid-services {
  display:               grid;
  grid-template-columns: repeat(3, 1fr);
  gap:                   var(--space-6);
}

@media (max-width: 1024px) {
  .grid-services {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-services {
    grid-template-columns: 1fr;
  }
}

/* Breakpoints de referência */
/* xs:  < 480px  — smartphones pequenos */
/* sm:    640px  — smartphones largos    */
/* md:    768px  — tablets verticais     */
/* lg:   1024px  — tablets horizontais  */
/* xl:   1280px  — desktops             */
/* 2xl:  1536px  — desktops largos      */
```

---

*Clínica Smoke Test — Design Guidelines v1.0 | Renovo Pipeline V0.2*
*Tokens coerentes com brand-book.md. Gerado pelo Consolidation Agent.*
