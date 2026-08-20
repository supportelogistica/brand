# Notas de sync: Supporte Brand

- Repo é só marca: sem package.json, sem componentes, sem Storybook. Sync off-script (layout gerado à mão em `ds-bundle/`), sem `_ds_bundle.js` e sem `_ds_sync.json`. O próximo sync reverifica e reenvia tudo (barato, ~46 arquivos).
- Existe outro projeto no claude.ai/design: "Supporte Design System" (392d2146-8c6d-4c06-88d9-44389e606b09), construído dentro do próprio app, com componentes próprios. O usuário escolheu não sincronizar por cima. Nunca apontar o sync para ele.
- Bundle: só woff2 (ttf excluídos), grafismos só em SVG, logos em SVG e PNG. O manual .md está incluído como `guidelines/manual-de-marca.md`.
- Verificação dos cards: o screenshot do Browser pane travava, com timeout em todas as abas. A validação foi feita via DOM e getComputedStyle (tokens resolvem, cores corretas), document.fonts (todas as fontes carregam) e naturalWidth das imagens (11/11 OK).
- Rebuild manual: recopiar tokens, fontes e assets para `ds-bundle/` (comandos simples de cp). O README é o conventions.md mais o índice.
