---
colors:
  primary: "#F37021"
  on-primary: "#FFFFFF"
  neutral: "#58595B"
  on-neutral: "#FFFFFF"
  background: "#FFFFFF"
  on-background: "#58595B"
  surface: "#F7F7F8"
  surface-dark: "#3F4041"
  border: "#B9BABB"
  text-secondary: "#77787A"
  primary-hover: "#D95E12"
  primary-tint: "#FDE3D2"
typography:
  display:
    family: "Titillium Web"
    weight: 600
    fallback: '"Segoe UI", sans-serif'
  heading:
    family: "Titillium Web"
    weight: 400
    fallback: '"Segoe UI", sans-serif'
  body:
    family: "Fira Sans"
    weight: 400
    fallback: '"Segoe UI", sans-serif'
  label:
    family: "Fira Sans"
    weight: 600
    fallback: '"Segoe UI", sans-serif'
  code:
    family: "Fira Code"
    weight: 400
    fallback: '"Cascadia Code", monospace'
    features: "calt, common-ligatures"
rounded:
  sm: 6px
  md: 12px
  lg: 24px
  full: 9999px
spacing:
  unit: 4px
  scale: [4, 8, 12, 16, 24, 32, 48, 64]
components:
  button-primary:
    background: "{colors.primary}"
    color: "{colors.on-primary}"
    hover-background: "{colors.primary-hover}"
    radius: "{rounded.md}"
  button-secondary:
    background: transparent
    color: "{colors.neutral}"
    border: "1px solid {colors.border}"
    radius: "{rounded.md}"
  card:
    background: "{colors.background}"
    border: "1px solid {colors.border}"
    radius: "{rounded.lg}"
---

# Diretrizes de design da Supporte

## Overview

A Supporte é uma integradora logística brasileira. A marca deve transmitir tecnologia com humanização: confiável, técnica, contemporânea, próxima, sem ostentação. As interfaces são limpas e leves, com respiro amplo e base neutra em branco e chumbo. O laranja é usado com intenção, para destacar elementos, não para decorar a interface.

Personalidade em quatro papéis: atleta (energia, resultado), inovador (novas soluções), mentor (orienta e ensina), curador (cuidado com detalhes).

Fonte completa das regras: manual de marca interno da Supporte (não incluído neste repositório público). Regras de uso de assets (logos, favicons, grafismos): [AGENTS.md](AGENTS.md).

## Colors

Somente três cores de marca: **Chumbo Supporte** `#58595B`, **Laranja Supporte** `#F37021` e **branco**. Os demais valores do frontmatter são derivados utilitários de UI.

- Chumbo e branco são as bases visuais. Laranja é reservado para destaque, chamadas e direção visual.
- Nunca preencha a interface inteira de laranja. Isso faz o laranja perder a função de destaque.
- Texto corrido: chumbo sobre branco.
- Laranja `#F37021` sobre branco não passa em contraste WCAG AA para texto pequeno. Use-o em texto grande, elementos gráficos ou fundos com texto branco por cima. Teste sempre.
- Nunca comunique estado (erro, sucesso, prioridade) apenas com cor.

## Typography

- **Titillium Web** para títulos, chamadas e números de destaque. SemiBold (600) em títulos principais. Regular ou Light em subtítulos.
- **Fira Sans** para parágrafos, legendas, tabelas, formulários e qualquer texto funcional. SemiBold para rótulos e ênfase.
- **Fira Code** exclusivamente para código, comandos, logs e dados monoespaçados, sempre com ligaduras ativadas (`font-variant-ligatures: common-ligatures contextual`). Nunca em texto corrido ou títulos.
- Evite pesos muito leves (200/300) em tamanhos pequenos ou fundos complexos.
- Itálico apenas para ênfase pontual, termos e citações.

Arquivos e `@font-face` prontos em [fontes/fontes.css](fontes/fontes.css).

## Layout

- Escala de espaçamento com base 4px (4, 8, 12, 16, 24, 32, 48, 64).
- Layouts limpos, com hierarquia clara e áreas generosas de respiro.
- Equilibre áreas brancas, blocos em chumbo e acentos laranja.
- Prefira mensagens curtas com evidência visual (números, telas, fluxos) a parágrafos longos.

## Elevation & depth

- Prefira separação por espaço, cor de superfície (`#F7F7F8`) e bordas (`#B9BABB`) a sombras pesadas.
- Se usar sombra, mantenha sutil e nunca aplique ao logotipo.

## Shapes

- Os cantos arredondados seguem as curvas do "P" da marca: 6px em controles pequenos, 12px em botões e inputs, 24px em cards e painéis.
- Grafismos de fundo derivam do "P" (curvas e linhas). Use os arquivos prontos de `grafismos/`, conforme as regras do AGENTS.md. Não desenhe curvas novas.
- Ícones: família [Lucide](https://lucide.dev/) como padrão. Logos de terceiros via Iconify/Simple Icons. **Nunca use emojis** em nenhuma interface ou documento da marca.

## Components

- Botão primário: fundo laranja, texto branco, hover `#D95E12`, raio 12px.
- Botão secundário: transparente com borda `#B9BABB` e texto chumbo.
- Cards: fundo branco, borda sutil, raio 24px, sem sombra pesada.
- Favicon de aplicações: use os arquivos de `favicon/` conforme regras do AGENTS.md (kit por ambiente em apps grandes).

## Do's and don'ts

**Faça:**

- Use apenas os arquivos oficiais de `logo/`, `simbolo/`, `favicon/` e `grafismos/`.
- Respeite a área de proteção do logotipo (5x a largura da base do "P") e o tamanho mínimo (100px digital).
- Use `logo-supporte-fundo-claro` sobre fundos claros e `logo-supporte-fundo-escuro` sobre fundos escuros. Use monocromáticas quando só houver uma cor disponível.
- Valide contraste WCAG em qualquer texto sobre laranja ou chumbo.

**Não faça:**

- Não redesenhe, recorte, distorça, rotacione ou recolora o logotipo. Não aplique sombras, contornos ou degradês.
- Não use emojis em nada da marca.
- Não use Fira Code fora de contexto de código.
- Não use laranja como cor de fundo dominante de páginas inteiras.
- Não crie submarcas ou novos símbolos a partir do "P" sem aprovação.
- Não dependa só de cor para comunicar estado.
