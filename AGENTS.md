# AGENTS.md — Marca Supporte para agentes de IA

Este repositório é a fonte oficial da marca **Supporte** (integradora logística brasileira). Se você é um agente construindo qualquer coisa com a marca — telas, documentos, apresentações, e-mails, textos — as regras abaixo são obrigatórias.

**Hierarquia de fontes:** este arquivo (regras de uso de assets) → [DESIGN.md](DESIGN.md) (tokens e diretrizes de UI) → manual de marca interno (referência completa: voz, tom, públicos, valores — documento interno da Supporte, não faz parte deste repositório público; se você é um agente sem acesso a ele, siga o que está aqui e no DESIGN.md).

## Mapa do repositório

| Pasta | Conteúdo |
| --- | --- |
| `logo/` | Logotipo completo em 4 versões (svg + png) |
| `simbolo/` | Símbolo "PP" isolado (svg + png) |
| `favicon/` | Favicons: padrão, alt e kit por ambiente (svg + png + ico) |
| `grafismos/` | Linhas de fundo decorativas derivadas do "P" (svg + png) |
| `fontes/` | Titillium Web, Fira Sans, Fira Code (ttf + woff2) + `fontes.css` |
| `tokens/` | `supporte.css`, `supporte.json` (W3C), `tailwind.preset.js` |

Sempre use SVG quando o meio permitir; PNG é fallback para ferramentas que não aceitam vetor (PowerPoint antigo, e-mail). **Nunca redesenhe, recorte, recolora ou reconstrua qualquer asset.**

## Logotipo — qual arquivo usar

| Situação | Arquivo |
| --- | --- |
| Fundo claro/branco | `logo/logo-supporte-fundo-claro.svg` |
| Fundo escuro (chumbo, preto, foto escura) | `logo/logo-supporte-fundo-escuro.svg` |
| Impressão 1 cor ou fundo colorido claro | `logo/logo-monocromatica-preta.svg` |
| Impressão 1 cor ou fundo colorido escuro | `logo/logo-monocromatica-branca.svg` |

Regras fixas:

- Área de proteção: 5x ao redor (x = largura da base do "P"). Nada invade.
- Tamanho mínimo: 100 px de largura no digital, 1,2 cm no impresso.
- Ordem de preferência: principal → monocromática → positiva/negativa.
- Proibido: distorcer, rotacionar, sombrear, contornar, aplicar degradê, mudar cores ou tipografia, usar sobre fundo com pouco contraste.

## Símbolo PP (`simbolo/pp.svg`)

O "PP" é a forma simplificada da logo. Permitido, **com parcimônia**:

- Avatar, ícone de app, crachá — contextos onde a marca já é conhecida.
- Elemento gráfico: separador de footer, detalhe de cabeçalho, marca d'água discreta.

Nunca como substituto do logotipo em peças de comunicação, e nunca para criar submarca sem aprovação.

## Favicons — regra de escolha

**Aplicação comum (site, ferramenta pequena):** escolha livremente um entre `favicon` (PP nu — o principal), `favicon-alt` (squircle laranja) ou `favicon-producao` (squircle chumbo). A variação é proposital: nem tudo precisa usar o mesmo ícone.

**Aplicação grande com desenvolvimento e sustentação ativos:** use o kit completo por ambiente — a forma e a cor diferentes evitam confundir abas:

| Ambiente | Arquivo | Visual |
| --- | --- | --- |
| Produção | `favicon/favicon-producao.svg` | squircle chumbo, PP laranja |
| Homologação | `favicon/favicon-homolog.svg` | hexágono azul, PP branco |
| Localhost | `favicon/favicon-localhost.svg` | círculo verde com grade, PP branco |

## Grafismos (`grafismos/`) — regra de uso

Três famílias, papéis distintos. Escolha a variante `fundo-claro`/`fundo-escuro` conforme o fundo da peça, e ancore no canto que o nome do arquivo indica (não rotacione para outro canto).

**`detalhe-1` — o principal.** São DOIS arquivos usados JUNTOS: o do canto superior direito + o do canto inferior esquerdo, na mesma peça. Uso: capas, splash screens e slides de título. Cansa se usado demais — em uma apresentação, aplique somente na capa e nos slides de título de seção, nunca em todos os slides.

**`detalhe-2` — raro e exigente.** Curva laranja grossa e chapada. Serve como faixa de título de páginas não principais, sempre com texto branco dentro dela. Se não souber aplicar bem ou o layout dificultar, simplesmente não use.

**`detalhe-3` — marca d'água.** Malha de curvas para dar vida a páginas chapadas (brancas ou escuras) sem pesar. Pode ser usado sozinho ou combinado com o `detalhe-2`.

Nunca use grafismo como logotipo alternativo, nunca crie padrões decorativos novos a partir deles.

## Construindo interfaces (web/app)

1. Leia [DESIGN.md](DESIGN.md) — tokens YAML + regras de UI.
2. Importe `tokens/supporte.css` (variáveis) e `fontes/fontes.css` (@font-face). Tailwind: `tokens/tailwind.preset.js` (v3) ou `@theme` (v4, instruções no próprio preset).
3. Favicon conforme a regra acima.
4. Contraste: laranja sobre branco falha WCAG AA em texto pequeno. Teste antes de usar laranja em texto ou controles.
5. Ícones: [Lucide](https://lucide.dev/) é a família padrão. Logos de terceiros: Iconify/Simple Icons (`https://api.iconify.design/simple-icons/{marca}.svg?color=%23F37021` para monocromático). Não misture famílias de ícones.
6. **Emojis são proibidos** em qualquer interface, documento, commit visível ao público, apresentação ou comunicação da marca. Sem exceção.

## Documentos, apresentações e e-mail

- **Slides:** grafismo `detalhe-1` (o par) só em capa e títulos de seção. Corpo dos slides limpo: branco, chumbo, acento laranja. Titillium Web em títulos, Fira Sans no corpo. PNG dos assets se a ferramenta não aceitar SVG.
- **Documentos:** mesma tipografia; logo no cabeçalho respeitando área de proteção; `detalhe-3` como marca d'água opcional em capas.
- **E-mail/assinatura:** logo em PNG sobre fundo claro (`logo-supporte-fundo-claro.png` redimensionado, nunca abaixo de 100 px de largura).

## Escrevendo textos com a marca

Tom por contexto (detalhes no manual de marca interno):

| Contexto | Tom |
| --- | --- |
| Institucional | Visionário, seguro e humano |
| Comercial | Direto, consultivo, orientado a benefícios |
| Técnico | Preciso, didático, sem jargão desnecessário |
| Atendimento | Próximo, prestativo, resolutivo |
| Incidentes | Transparente, calmo, responsável |

Sempre: claro, benefício antes do processo, demonstre com números/casos, humano, confiante sem superlativos. Nunca: promessas absolutas, clichês logísticos ("excelência incomparável"), linguagem burocrática, siglas sem contexto.

## Checklist antes de entregar qualquer peça

- [ ] Asset veio de arquivo oficial deste repo (nada redesenhado)
- [ ] Logo com área de proteção e tamanho mínimo respeitados
- [ ] Versão de logo correta para o fundo
- [ ] Laranja como destaque, não como base
- [ ] Contraste validado (WCAG em digital)
- [ ] Zero emojis
- [ ] Tipografia: Titillium (títulos) / Fira Sans (texto) / Fira Code (só código)
- [ ] Grafismos dentro das regras (detalhe-1 em par e só em capas; detalhe-2 com texto branco; detalhe-3 como marca d'água)
