# Convenções de marca Supporte para o agente de design

Este projeto contém **fundações de marca**: tokens, fontes, logos, grafismos e manual. Não há biblioteca de componentes. Construa a UI com HTML/CSS próprios, usando exclusivamente os tokens abaixo.

## Setup

Não há provider nem wrapper: basta o CSS. `styles.css` já importa `tokens/supporte.css` (variáveis) e `fonts/fonts.css` (@font-face de Titillium Web, Fira Sans e Fira Code), e aplica a base no `body`. Não redeclare fontes nem hexadecimais. Use sempre `var(--supporte-*)`.

## Tokens (CSS custom properties)

A marca define **cor e tipografia**. Espaçamento, raio de canto e receitas de componente são decisão do produto: escolha valores coerentes e mantenha-os consistentes.

Cores de marca (só três): `--supporte-chumbo` (#58595B), `--supporte-laranja` (#F37021), `--supporte-branco`.
Derivados UI (não são cores de marca): `--supporte-chumbo-900|700|500|300|100|050`, `--supporte-laranja-600|500|100`.
Papéis semânticos: `--supporte-cor-texto`, `--supporte-cor-texto-secundario`, `--supporte-cor-fundo`, `--supporte-cor-destaque`, `--supporte-cor-destaque-hover`, `--supporte-cor-borda`.
Tipografia: `--supporte-fonte-titulo` (Titillium Web: títulos, SemiBold 600), `--supporte-fonte-texto` (Fira Sans: corpo, formulários), `--supporte-fonte-mono` (Fira Code: só código/logs, ligaduras ativas). Pesos: `--supporte-peso-extraleve|leve|regular|semibold` (200/300/400/600).

Preset Tailwind opcional em `tokens/tailwind.preset.js`. Formato W3C em `tokens/supporte.json`.

## Regras de marca (obrigatórias)

- Base neutra: branco e chumbo. **Laranja tem uso pontual**: conduz o olhar, nunca é o fundo dominante da página.
- Laranja sobre branco **reprova WCAG AA em texto pequeno**: use em texto grande, gráficos, ou fundo laranja com texto branco.
- Nunca comunicar estado só com cor. **Nunca usar emojis.** Ícones: família Lucide.
- Fira Code nunca em texto corrido ou títulos.
- Logos e grafismos: use os arquivos de `guidelines/assets/` como estão, sem redesenhar, recolorir, distorcer ou sombrear. Use `logo-supporte-fundo-claro.svg` em fundo claro e `logo-supporte-fundo-escuro.svg` em fundo escuro. O símbolo é `pp.svg`.

## Documentação de referência

Leia `styles.css` antes de estilizar. Ele aponta para `tokens/supporte.css` (nomes e valores dos tokens) e para `fonts/fonts.css`. As regras completas da marca estão em `guidelines/manual-de-marca.md`. As amostras visuais estão em `guidelines/foundations/*.card.html`.

## Exemplo de código

```html
<button style="background:var(--supporte-cor-destaque); color:var(--supporte-branco);
  font:var(--supporte-peso-semibold) 15px var(--supporte-fonte-texto);
  border:0; border-radius:12px; padding:12px 24px;">Rastrear pedido</button>

<div style="background:var(--supporte-branco); border:1px solid var(--supporte-cor-borda);
  border-radius:24px; padding:24px;">
  <h3 style="font-family:var(--supporte-fonte-titulo); margin:0 0 8px;">Entregas hoje</h3>
  <p style="color:var(--supporte-cor-texto-secundario); margin:0;">128 pedidos em rota</p>
</div>
```

No hover do botão primário, use `background: var(--supporte-cor-destaque-hover)`. O botão secundário é transparente, com borda `--supporte-cor-borda` e texto chumbo.
