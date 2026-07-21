# Notas de sync — Supporte Brand

- Repo e so marca: sem package.json, sem componentes, sem Storybook. Sync off-script (layout gerado a mao em `ds-bundle/`), sem `_ds_bundle.js` e sem `_ds_sync.json` — proximo sync re-verifica e re-envia tudo (barato, ~46 arquivos).
- Existe OUTRO projeto no claude.ai/design: "Supporte Design System" (392d2146-8c6d-4c06-88d9-44389e606b09), construido dentro do proprio app, com componentes proprios. Usuario escolheu NAO sincronizar por cima — nunca apontar o sync pra ele.
- Bundle: so woff2 (ttf excluidos), grafismos so SVG, logos SVG+PNG, manual .md incluido como `guidelines/manual-de-marca.md`.
- Verificacao dos cards: screenshot do Browser pane travava (timeout em todas as abas); validado via DOM + getComputedStyle (tokens resolvem, cores corretas) + document.fonts (todas carregam) + naturalWidth das imagens (11/11 ok).
- Rebuild manual: recopiar tokens/fontes/assets pra `ds-bundle/` (comandos simples de cp), README = conventions.md + indice.
