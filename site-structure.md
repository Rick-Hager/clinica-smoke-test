# Site Structure — Clínica Smoke Test

> **Versão:** 1.0 | **Gerado por:** Consolidation Agent v0.2
> **(decisão do consolidation)** Arquitetura definida com base no modelo de clínica médica privada multidisciplinar com 5 especialidades placeholder. Ajustar URLs de especialidades conforme as especialidades reais da clínica.

---

## 1. Hierarquia de URLs

```
/                               ← Home
├── /sobre                      ← Sobre a clínica
├── /servicos                   ← Página mãe de serviços (grid de especialidades)
│   ├── /servicos/clinica-geral
│   ├── /servicos/cardiologia
│   ├── /servicos/dermatologia
│   ├── /servicos/ginecologia
│   └── /servicos/ortopedia
├── /convenios                  ← Planos aceitos e formas de pagamento
├── /blog                       ← Blog educativo (SEO / autoridade de conteúdo)
│   └── /blog/[slug]            ← Artigo individual
├── /contato                    ← Formulário + WhatsApp + mapa + horários
└── /politica-de-privacidade    ← Obrigatório LGPD
```

### Páginas de Suporte (sem menu, acessadas por link interno)

```
/404                            ← Página de erro "não encontrado"
/obrigado                       ← Agradecimento pós-envio de formulário
/sitemap.xml                    ← Sitemap para Google Search Console
/robots.txt                     ← Controle de indexação
```

### Regras de URL

- Todas as URLs em **letras minúsculas**, sem acentos, sem espaços (usar hifens)
- Slugs de especialidades derivados do nome em português (ex.: `clinica-geral`, `ginecologia`)
- Slugs de artigos de blog: `[palavra-chave-principal]-[complemento]` (ex.: `check-up-anual-quando-fazer`, `hipertensao-sintomas-prevencao`)
- Trailing slash: **sem barra final** em todos os URLs (`/servicos`, não `/servicos/`)
- Canonical tags: obrigatório em todas as páginas para evitar conteúdo duplicado
- `/obrigado` e `/politica-de-privacidade`: `<meta name="robots" content="noindex">`

---

## 2. Menu Principal (Header)

### Versão Desktop

```
[Logo Clínica Smoke Test]    Início | Sobre | Especialidades ▾ | Blog | Contato    [Agendar pelo WhatsApp ▶]
```

**Dropdown "Especialidades":**

```
┌─────────────────────────────────────┐
│ Ver todas as especialidades         │  → /servicos
│ ─────────────────────────────────── │
│ Clínica Geral                       │  → /servicos/clinica-geral
│ Cardiologia                         │  → /servicos/cardiologia
│ Dermatologia                        │  → /servicos/dermatologia
│ Ginecologia                         │  → /servicos/ginecologia
│ Ortopedia                           │  → /servicos/ortopedia
└─────────────────────────────────────┘
```

### Versão Mobile (Hamburger Menu)

```
[Logo]                                              [≡]

Quando aberto (drawer lateral ou overlay):
├── Início                           → /
├── Sobre                            → /sobre
├── Especialidades                   ► (expansível)
│   ├── Ver todas                    → /servicos
│   ├── Clínica Geral               → /servicos/clinica-geral
│   ├── Cardiologia                  → /servicos/cardiologia
│   ├── Dermatologia                 → /servicos/dermatologia
│   ├── Ginecologia                  → /servicos/ginecologia
│   └── Ortopedia                    → /servicos/ortopedia
├── Blog                             → /blog
└── Contato                          → /contato

[Agendar pelo WhatsApp]  ← botão fixo no rodapé do drawer mobile
```

### Regras do Header

| Propriedade | Especificação |
|---|---|
| Comportamento | Sticky (fixo no topo) — segue o scroll |
| Altura desktop | 72px |
| Altura mobile | 64px |
| Background inicial | `#FFFFFF` transparente sobre hero (se hero tiver fundo) |
| Background ao scroll | `#FFFFFF` opaco com `box-shadow: 0 1px 8px rgba(0,0,0,0.06)` |
| Logo | Versão horizontal principal; link para `/` |
| Botão CTA no header | Sempre visível; texto "Agendar pelo WhatsApp"; cor Verde Floresta `#2D6A4F` |
| CTA mobile (menu fechado) | Apenas ícone WhatsApp verde no canto direito, ao lado do hamburger |
| `aria-label` do hamburger | `"Abrir menu de navegação"` |
| `aria-label` do botão fechar | `"Fechar menu de navegação"` |

---

## 3. Footer

### Estrutura

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [Logo invertido — branco sobre Verde Floresta]                          │
│  "Cuidado com propósito."                                                │
│                                                                          │
│  ESPECIALIDADES          CLÍNICA                CONTATO                  │
│  Clínica Geral           Sobre nós              (DDD) XXXX-XXXX          │
│  Cardiologia             Blog                   WhatsApp                 │
│  Dermatologia            Convênios              contato@...              │
│  Ginecologia             Política de            [Endereço linha 1]       │
│  Ortopedia               Privacidade            [Cidade, Estado]         │
│                                                                          │
│  ────────────────────────────────────────────────────────────────────    │
│  © 2025 Clínica Smoke Test. Todos os direitos reservados.               │
│  Responsável técnico: [Nome do médico RT], CRM [número/UF]              │
│  [Política de Privacidade]  ·  [Termos de Uso]                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Regras do Footer

| Propriedade | Especificação |
|---|---|
| Fundo | Verde Floresta `#2D6A4F` |
| Texto | Branco Puro `#FFFFFF` |
| Links | Branco com opacidade 75%; hover: Branco Puro sem opacidade |
| Logo | Versão invertida (branco) |
| Tagline | "Cuidado com propósito." — Inter Regular 14px |
| Responsável técnico | **Obrigatório** para conformidade CFM — nome completo + CRM/UF |
| Copyright | Ano atualizado automaticamente com JS ou variável Astro |
| Mobile | Colunas empilhadas verticalmente; logo e tagline no topo |

---

## 4. CTAs Fixas (Floating / Persistentes)

### Botão Flutuante WhatsApp

| Propriedade | Especificação |
|---|---|
| Posição | Canto inferior direito da tela; `position: fixed` |
| Desktop | Ícone WhatsApp (24px) + texto "Agendar pelo WhatsApp" |
| Mobile | Apenas ícone WhatsApp (40px × 40px); formato circular |
| Cor de fundo | `#25D366` (verde WhatsApp oficial) |
| Texto/ícone | `#FFFFFF` |
| Sombra | `0 4px 16px rgba(37, 211, 102, 0.40)` |
| `z-index` | 9999 |
| Visibilidade | Sempre visível em todas as páginas, exceto `/obrigado` |
| Link | `https://wa.me/55[DDD][NÚMERO]?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta` |
| `aria-label` | `"Agendar consulta pelo WhatsApp"` |

### Banner de Cookies (LGPD)

| Propriedade | Especificação |
|---|---|
| Posição | Barra inferior fixa; `position: fixed; bottom: 0` |
| `z-index` | 9998 |
| Gatilho | Primeira visita do usuário; desaparece após aceite ou recusa |
| Texto | "Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa [Política de Privacidade]." |
| Botão primário | [Aceitar] — Verde Floresta `#2D6A4F` |
| Botão secundário | [Recusar] — outline cinza |
| Persistência | Cookie de consentimento por 365 dias |

---

## 5. Fluxo de Jornada do Visitante

### Jornada 1 — Novo Paciente via Google (Busca de Especialidade)

```
Google Search
"dermatologista em [cidade]" / "clínica cardiologia perto de mim"
         ↓
SERP — Resultado orgânico ou Google Ads
         ↓
Página de Especialidade: /servicos/[especialidade]
  • Lê descrição da especialidade
  • Vê "O que fazemos" e "Quando consultar"
  • Encontra CTA inline de agendamento
         ↓
CONVERSÃO (escolhe um canal):
  ├── [Agendar pelo WhatsApp] → WhatsApp Business → conversa → agendamento
  └── [Formulário no /contato] → preenche → /obrigado
```

### Jornada 2 — Descoberta via Instagram

```
Instagram (post educativo / Reels / Stories)
         ↓
Clique em "Link na bio" ou CTA de Stories
         ↓
Home (/)
  • Scroll: hero → diferenciais → especialidades → depoimentos → CTA
         ↓
Card de especialidade de interesse
         ↓
/servicos/[especialidade]
         ↓
CONVERSÃO — WhatsApp ou formulário
```

### Jornada 3 — Paciente Fidelizado em Retorno

```
Busca direta (URL) ou Google Meu Negócio
         ↓
Home (/) ou /contato
  • Busca horários ou informações de agendamento
         ↓
CONVERSÃO — WhatsApp (canal preferencial para recorrência)
```

### Jornada 4 — Conteúdo Educativo (SEO de Autoridade)

```
Google Search
"como saber se tenho hipertensão" / "quando ir ao dermatologista"
         ↓
/blog/[slug do artigo relevante]
  • Lê artigo educativo completo
  • Vê CTA inline ou lateral: "Agende sua consulta de [especialidade]"
         ↓
/servicos/[especialidade]
         ↓
CONVERSÃO — WhatsApp ou formulário
```

---

## 6. Mapa de Rastreamento (Analytics Events — GA4)

| Evento | Trigger | Parâmetros |
|---|---|---|
| `whatsapp_click` | Clique em qualquer botão WhatsApp | `{location: 'header' \| 'hero' \| 'floating' \| 'service_page' \| 'footer' \| 'contact_page'}` |
| `form_submit` | Envio do formulário de contato com sucesso | `{page: '/contato', specialty: '[valor do dropdown]'}` |
| `service_view` | Pageview de página de especialidade | `{service_name: 'cardiologia' \| 'dermatologia' \| ...}` |
| `blog_read` | Scroll ≥ 60% em artigo de blog | `{article_slug: '[slug]', article_title: '[título]'}` |
| `cta_hero_click` | Clique no CTA primário do hero da Home | `{destination: 'whatsapp' \| '/servicos'}` |
| `specialty_card_click` | Clique em card de especialidade na Home | `{specialty: '[nome]'}` |
| `cookie_accept` | Aceite do banner LGPD | — |
| `cookie_reject` | Recusa do banner LGPD | — |

---

## 7. Regras de SEO Técnico

| Item | Especificação |
|---|---|
| Meta title | Padrão: `[Página] — Clínica Smoke Test \| [Cidade]`; máximo 60 caracteres |
| Meta description | 140–160 caracteres; incluir palavras-chave locais + benefício implícito |
| H1 | Exatamente 1 por página; contém palavra-chave principal |
| Schema markup | `MedicalClinic` na Home e /contato; `Physician` nas páginas de médicos; `BlogPosting` em artigos; `BreadcrumbList` em páginas de nível 2+ |
| Open Graph | `og:title`, `og:description`, `og:image` (1200×630px) obrigatórios em todas as páginas |
| Twitter Card | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` |
| Sitemap | `/sitemap.xml` gerado automaticamente pelo Astro (`@astrojs/sitemap`); submit no Search Console |
| Robots | `/robots.txt`: allow all; disallow `/obrigado`, `/politica-de-privacidade` |
| Canonical | Auto-referencial em todas as páginas |
| Alt text | Obrigatório em todas as imagens com conteúdo; descritivo + palavra-chave quando pertinente; imagens decorativas: `alt=""` |
| Breadcrumbs | Exibir em `/servicos/[especialidade]` e `/blog/[slug]`; implementar com schema `BreadcrumbList` |
| `lang` | `<html lang="pt-BR">` obrigatório |
| Core Web Vitals | LCP ≤ 2,5s; CLS < 0,1; INP ≤ 200ms — monitorar via PageSpeed Insights e CrUX |

---

*Clínica Smoke Test — Site Structure v1.0 | Renovo Pipeline V0.2*
*Gerado pelo Consolidation Agent — elementos marcados "(decisão do consolidation)" aguardam validação do cliente real.*
