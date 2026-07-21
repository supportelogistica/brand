# Supporte Brand — convenções para o agente de design

Este projeto contém **fundações de marca** (tokens, fontes, logos, grafismos, manual) — **não há biblioteca de componentes**. Construa a UI com HTML/CSS próprios usando exclusivamente os tokens abaixo.

## Setup

Nenhum provider/wrapper. Basta o CSS: `styles.css` já importa `tokens/supporte.css` (variáveis) e `fonts/fonts.css` (@font-face de Titillium Web, Fira Sans e Fira Code) e aplica a base no `body`. Não redeclare fontes nem hexadecimais — use sempre `var(--supporte-*)`.

## Vocabulário de tokens (o idioma é CSS custom properties)

Cores de marca (só três): `--supporte-chumbo` (#58595B), `--supporte-laranja` (#F37021), `--supporte-branco`.
Derivados UI (não são cores de marca): `--supporte-chumbo-900|700|500|300|100|050`, `--supporte-laranja-600|500|100`.
Papéis semânticos: `--supporte-cor-texto`, `--supporte-cor-texto-secundario`, `--supporte-cor-fundo`, `--supporte-cor-destaque`, `--supporte-cor-destaque-hover`, `--supporte-cor-borda`.
Tipografia: `--supporte-fonte-titulo` (Titillium Web — títulos, SemiBold 600), `--supporte-fonte-texto` (Fira Sans — corpo, formulários), `--supporte-fonte-mono` (Fira Code — só código/logs, ligaduras ativas); pesos `--supporte-peso-extraleve|leve|regular|semibold` (200/300/400/600).
Raios: `--supporte-raio-sm|md|lg|cheio` (6/12/24px/pill) — sm controles pequenos, md botões/inputs, lg cards.
Espaçamento (base 4px): `--supporte-espaco-1|2|3|4|6|8|12|16` (4→64px).

Preset Tailwind opcional em `tokens/tailwind.preset.js`; formato W3C em `tokens/supporte.json`.

## Regras de marca (obrigatórias)

- Base neutra branco + chumbo; **laranja com intenção** — conduz o olhar, nunca fundo dominante de página.
- Laranja sobre branco **reprova WCAG AA em texto pequeno**: use em texto grande, gráficos, ou fundo laranja com texto branco.
- Nunca comunicar estado só com cor. **Nunca usar emojis.** Ícones: família Lucide.
- Fira Code nunca em texto corrido ou títulos.
- Logos/grafismos: usar arquivos de `guidelines/assets/` como estão — sem redesenhar, recolorir, distorcer ou sombrear. Logo `logo-supporte-fundo-claro.svg` em fundo claro, `logo-supporte-fundo-escuro.svg` em fundo escuro; símbolo `pp.svg`.
- Elevação por espaço, superfície (`--supporte-chumbo-050`) e borda (`--supporte-cor-borda`), não por sombra pesada.

## Onde está a verdade

Leia antes de estilizar: `styles.css` → `tokens/supporte.css` (nomes e valores) e `fonts/fonts.css`. Regras completas da marca: `guidelines/manual-de-marca.md`. Amostras visuais: `guidelines/foundations/*.card.html`.

## Snippet idiomático

```html
<button style="background:var(--supporte-cor-destaque); color:var(--supporte-branco);
  font:var(--supporte-peso-semibold) 15px var(--supporte-fonte-texto);
  border:0; border-radius:var(--supporte-raio-md);
  padding:var(--supporte-espaco-3) var(--supporte-espaco-6);">Rastrear pedido</button>

<div style="background:var(--supporte-branco); border:1px solid var(--supporte-cor-borda);
  border-radius:var(--supporte-raio-lg); padding:var(--supporte-espaco-6);">
  <h3 style="font-family:var(--supporte-fonte-titulo); margin:0 0 var(--supporte-espaco-2);">Entregas hoje</h3>
  <p style="color:var(--supporte-cor-texto-secundario); margin:0;">128 pedidos em rota</p>
</div>
```

Hover do botão primário: `background: var(--supporte-cor-destaque-hover)`. Botão secundário: transparente, borda `--supporte-cor-borda`, texto chumbo.
