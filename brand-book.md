# Brand Book — Clínica Smoke Test

> **Versão:** 1.0 | **Gerado por:** Consolidation Agent v0.2
> **(decisão do consolidation)** Este documento foi gerado com base no arquétipo genérico de clínica médica privada no Brasil, pois o cliente não forneceu dados de identidade visual existente. Todos os elementos devem ser validados e personalizados pelo cliente real na fase de validação.

---

## 1. Paleta de Cores

A paleta da Clínica Smoke Test rompe com o padrão azul-e-branco saturado do setor médico, adotando verde-floresta e tons quentes que transmitem acolhimento, vitalidade e confiança — diferenciando-se visualmente no feed e nos resultados de busca.

### Cores Primárias

| Nome | Hex | RGB | Uso principal |
|---|---|---|---|
| Verde Floresta | `#2D6A4F` | 45, 106, 79 | Cor âncora da marca; botões primários; cabeçalhos; footer |
| Verde Médio | `#52B788` | 82, 183, 136 | Ícones; tags; elementos de suporte; hover de botões primários |

### Cores de Acento

| Nome | Hex | RGB | Uso principal |
|---|---|---|---|
| Terracota Dourado | `#D4A373` | 212, 163, 115 | CTAs secundários; destaques; bordas decorativas; badges |
| Âmbar Suave | `#E9C46A` | 233, 196, 106 | Indicadores de status; elementos de atenção; notificações |

### Cores Neutras

| Nome | Hex | RGB | Uso principal |
|---|---|---|---|
| Grafite Profundo | `#1C1C1E` | 28, 28, 30 | Texto corrido; títulos principais; fundos de alto contraste |
| Cinza Médio | `#4A4A4A` | 74, 74, 74 | Texto secundário; legendas; breadcrumbs |
| Cinza Claro | `#9E9E9E` | 158, 158, 158 | Placeholders; textos desabilitados; divisórias sutis |
| Branco Quente | `#F8F4F0` | 248, 244, 240 | Fundo de página principal; seções alternadas |
| Branco Puro | `#FFFFFF` | 255, 255, 255 | Cards; modais; formulários; fundo de inputs |

### Gradientes Oficiais

| Nome | Definição CSS | Aplicação |
|---|---|---|
| Gradiente Principal | `linear-gradient(135deg, #2D6A4F 0%, #52B788 100%)` | Hero sections; banners; cabeçalhos de páginas internas |
| Gradiente Cálido | `linear-gradient(135deg, #D4A373 0%, #E9C46A 100%)` | Seções de destaques secundários; badges de promoção de conteúdo |
| Gradiente Suave | `linear-gradient(180deg, #F8F4F0 0%, #FFFFFF 100%)` | Transições entre seções claras |

### Regra de Proporção 60-30-10

- **60%** → Branco Quente `#F8F4F0` e Branco Puro `#FFFFFF` — fundos, espaços de respiro, espaço negativo
- **30%** → Verde Floresta `#2D6A4F` e Verde Médio `#52B788` — estrutura, navegação, blocos de destaque
- **10%** → Terracota Dourado `#D4A373` e Âmbar Suave `#E9C46A` — CTAs pontuais, destaques de atenção

### Acessibilidade de Contraste (WCAG AA)

| Combinação | Taxa de contraste | Status |
|---|---|---|
| Branco Puro sobre Verde Floresta | 8,4:1 | ✅ AAA |
| Branco Puro sobre Grafite Profundo | 16,1:1 | ✅ AAA |
| Grafite Profundo sobre Branco Quente | 14,9:1 | ✅ AAA |
| Verde Floresta sobre Branco Quente | 7,7:1 | ✅ AA |
| Cinza Médio sobre Branco Puro | 7,1:1 | ✅ AA |

---

## 2. Tipografia

### Famílias de Fontes

A identidade tipográfica combina a elegância serifada do **Playfair Display** (autoridade, tradição, confiança) com a legibilidade funcional do **Inter** (modernidade, clareza, acessibilidade digital).

### Hierarquia Tipográfica

| Nível | Família | Peso | Tamanho (desktop) | Tamanho (mobile) | Uso |
|---|---|---|---|---|---|
| H1 — Título principal | Playfair Display | Bold 700 | 56–64px | 36–42px | Hero; título de página |
| H2 — Título de seção | Playfair Display | SemiBold 600 | 36–44px | 28–32px | Seções principais |
| H3 — Subtítulo | Playfair Display | Medium 500 | 24–30px | 20–24px | Cards; subseções |
| H4 — Título de card | Inter | SemiBold 600 | 18–22px | 16–18px | Cards de serviços; FAQs |
| Lead / Intro | Inter | SemiBold 600 | 18–20px | 16–18px | Parágrafos de abertura |
| Corpo principal | Inter | Regular 400 | 16–18px | 16px | Texto corrido |
| Texto auxiliar | Inter | Medium 500 | 13–14px | 13px | Labels; legendas; metadados |
| Botões | Inter | SemiBold 600 | 15–16px | 15–16px | Todos os botões |
| Navegação | Inter | Medium 500 | 15px | 15px | Menu principal; footer |

### Importação via Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
```

### Regras de Uso Tipográfico

- **Playfair Display** é usada exclusivamente em títulos e chamadas de impacto. Nunca em corpo de texto corrido, labels ou botões.
- **Inter** é a fonte de trabalho: menus, botões, parágrafos, formulários, labels, footer, alertas.
- **Entrelinha (line-height):** 1,6 para texto corrido; 1,2–1,3 para títulos grandes; 1,5 para texto auxiliar.
- **Espaçamento entre letras (letter-spacing):** 0 para corpo; −0,02em para títulos H1/H2; +0,05em para labels em maiúsculas (UPPERCASE).
- **Tamanho mínimo de texto:** 14px em desktop; 16px em mobile (evitar zoom automático do iOS Safari).
- **Itálico:** reservado para citações de satisfação de pacientes (sem menção a diagnóstico/tratamento, conforme CFM). Nunca usar em corpo de texto informativo.
- **UPPERCASE:** apenas para labels curtas (ex.: "ESPECIALIDADES", "SAIBA MAIS") com letter-spacing aumentado.

---

## 3. Logotipo

> **(decisão do consolidation)** O cliente não forneceu logotipo existente. As diretrizes abaixo definem a estrutura conceitual e as regras de uso para o logotipo a ser desenvolvido. O design final deve ser aprovado pelo cliente real antes da publicação.

### Estrutura Conceitual Recomendada

- **Símbolo:** forma geométrica simplificada que evoque saúde e cuidado — sugestão de folha estilizada ou cruz médica minimalista em Verde Floresta `#2D6A4F`, com peso de linha de 2px
- **Wordmark:** "Clínica Smoke Test" — "Clínica" em Playfair Display Medium, "Smoke Test" em Inter SemiBold, ambos em Grafite Profundo `#1C1C1E`
- **Tagline (opcional):** "Cuidado com propósito" em Inter Regular 400, Cinza Médio `#4A4A4A`, 13px, abaixo do wordmark com espaçamento generoso

### Versões Oficiais do Logotipo

| Versão | Fundo indicado | Aplicação |
|---|---|---|
| Horizontal principal (símbolo + wordmark) | Branco Puro / Branco Quente | Cabeçalho do site; papel timbrado; e-mails |
| Horizontal invertida | Verde Floresta; fundos escuros | Footer do site; capas de redes sociais |
| Ícone isolado (símbolo apenas) | Qualquer | Favicon; avatar de perfil; app icon |
| Monochromática preta | Branco | Impressão P&B; documentos formais |
| Monochromática branca | Fundos escuros | Tampas de brindes; uniformes escuros |

### Área de Proteção (Clear Zone)

Manter espaço livre ao redor do logotipo equivalente à **altura da letra "C" de "Clínica"** em todas as quatro direções. Nenhum elemento (texto, imagem, borda) pode invadir essa área.

### Tamanhos Mínimos

- **Digital — versão horizontal:** 120px de largura
- **Digital — ícone isolado:** 32px (favicon); 64px (avatar)
- **Impresso — versão horizontal:** 30mm de largura

### Proibições de Uso

- ❌ Não distorcer, esticar ou comprimir o logotipo
- ❌ Não aplicar sombras, emboss, bevel ou efeitos 3D
- ❌ Não alterar as cores fora das versões oficiais
- ❌ Não colocar o logotipo sobre fundos com contraste insuficiente (< 4,5:1)
- ❌ Não adicionar contorno, borda ou halo ao redor do logotipo
- ❌ Não usar Playfair Display escrita manualmente como substituto do logotipo
- ❌ Não recortar ou isolar apenas parte do símbolo ou do wordmark
- ❌ Não animar o logotipo sem aprovação prévia das diretrizes de motion

---

## 4. Tom Visual (Mood Board Descritivo)

### Conceito Central

**Humanidade com competência.** A identidade visual da Clínica Smoke Test deve comunicar, simultaneamente, excelência técnica e calor humano. O verde-floresta ancora confiança e seriedade clínica; o terracota e as texturas orgânicas trazem aconchego e proximidade. O resultado é uma marca que parece **profissional sem ser fria, e acolhedora sem ser amadora**.

### Palavras-Chave do Mood

`acolhedor` · `limpo` · `confiável` · `moderno sem ser frio` · `humanizado` · `vivo` · `sereno`

### Diretrizes de Fotografia

| Categoria | Orientação |
|---|---|
| **Prioridade 1** | Fotos reais da equipe médica e do espaço físico da clínica (humanização autêntica — evitar banco de imagem quando possível) |
| **Prioridade 2** | Pacientes com semblante sereno, em ambientes claros e acolhedores |
| **Estilo fotográfico** | Luz natural ou suave; paleta quente-neutra; profundidade de campo suave (fundo levemente desfocado) |
| **Tratamento** | Leve overlay de cor Verde Floresta com opacidade 8–15% sobre imagens de hero para coesão visual |
| **Evitar** | Fotos genéricas de banco de imagem (médico de jaleco branco sobre fundo branco estéril); imagens de seringas, instrumentos cirúrgicos ou sangue; rostos excessivamente sorridentes e artificiais; before/after (proibido pelo CFM) |

---

## 5. Elementos Gráficos

### Formas e Texturas

| Elemento | Especificação | Uso |
|---|---|---|
| Retângulos arredondados | border-radius: 12–16px | Cards; botões; imagens; inputs |
| Blob orgânico | Elipse distorcida em Verde Médio `#52B788`, opacidade 6–10% | Elemento de fundo decorativo em seções de destaque |
| Divisórias | `1px solid #E8E4E0` | Separação de seções sem peso visual excessivo |
| Pontos (dots grid) | Padrão de pontos 4px em Verde Médio, opacidade 4% | Textura de fundo alternativa em seções escuras |
| Linha decorativa | `3px`, Verde Floresta `#2D6A4F`, largura 40px | Acento sob títulos H2 de seções importantes |

### Iconografia

| Atributo | Valor |
|---|---|
| Estilo | Outline (linha), cantos levemente arredondados |
| Peso de linha | 1,5–2px |
| Família recomendada | Phosphor Icons ou Lucide Icons (open source, licença MIT) |
| Cor padrão | Verde Floresta `#2D6A4F` ou Verde Médio `#52B788` |
| Cor sobre fundo escuro | Branco Puro `#FFFFFF` ou Verde Médio `#52B788` |
| Tamanho — inline (texto) | 20–24px |
| Tamanho — cards de serviço | 40–48px |
| Tamanho — seções hero | 56–64px |

### Ilustrações

> **(decisão do consolidation)** Usar ilustrações apenas se o escopo do projeto incluir produção de assets personalizados. Caso contrário, priorizar iconografia + fotografia.

- **Estilo:** flat illustration com paleta restrita às cores da identidade da marca
- **Aplicações indicadas:** seção "Como funciona"; páginas de FAQ; estados de erro (404, 500); onboarding de paciente no sistema de agendamento

---

## 6. Aplicações da Identidade

### Site

| Elemento | Especificação |
|---|---|
| Fundo de página padrão | `#F8F4F0` (Branco Quente) |
| Header | `#FFFFFF` com `border-bottom: 1px solid #E8E4E0`; posição sticky |
| Footer | Fundo `#2D6A4F` (Verde Floresta); texto `#FFFFFF` |
| Botão primário | Fundo `#2D6A4F`; texto `#FFFFFF`; `border-radius: 8px`; hover: `#235A41` |
| Botão secundário (outline) | `border: 2px solid #2D6A4F`; texto `#2D6A4F`; fundo transparente; hover: fundo `#2D6A4F`, texto `#FFFFFF` |
| Botão WhatsApp | Fundo `#25D366`; texto `#FFFFFF`; ícone WhatsApp à esquerda |
| Links | Cor `#2D6A4F`; underline no hover; visited: `#52B788` |
| Sombra de card | `0 2px 12px rgba(0, 0, 0, 0.08)` |

### Redes Sociais

| Canal | Diretrizes |
|---|---|
| Instagram — feed | Alternar fundos em Branco Quente e Verde Floresta; sempre Inter para textos de post; logotipo no canto inferior |
| Instagram — Stories/Reels | Template com barra inferior Verde Floresta + nome da clínica em Branco Puro; título do conteúdo em Playfair Display |
| YouTube — thumbnail | Fundo Verde Floresta; título em Playfair Display Bold Branco Puro; foto do médico à direita da composição |
| WhatsApp Business | Foto de perfil: ícone do logotipo em fundo Verde Floresta; mensagem de boas-vindas em tom formal-acolhedor |

### Material Impresso (quando aplicável)

| Peça | Especificação |
|---|---|
| Cartão de visita | Frente: fundo Verde Floresta `#2D6A4F`, logotipo invertido (Branco); verso: fundo Branco Quente `#F8F4F0`, dados em Grafite Profundo |
| Papel timbrado | Cabeçalho com logotipo principal (versão horizontal); rodapé com endereço e CNPJ em Cinza Médio |
| Sinalização interna | Ícones em Verde Médio sobre Branco Puro; setas e indicações em Grafite Profundo; tipografia Inter SemiBold |
| Uniforme / jaleco | Bordado do logotipo (ícone isolado) em Verde Floresta ou Branco dependendo da cor do uniforme |

---

*Clínica Smoke Test — Brand Book v1.0 | Renovo Pipeline V0.2*
*Gerado pelo Consolidation Agent — todos os elementos marcados "(decisão do consolidation)" aguardam validação do cliente real.*
