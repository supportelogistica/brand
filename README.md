<picture>
  <source media="(prefers-color-scheme: dark)" srcset="logo/logo-supporte-fundo-escuro.svg">
  <img src="logo/logo-supporte-fundo-claro.svg" alt="Supporte" width="320">
</picture>

# Marca Supporte

Repositório oficial da identidade visual da **Supporte** — integradora logística de alto valor agregado. Aqui estão todos os arquivos e regras de que humanos e agentes de IA precisam para aplicar a marca corretamente: logotipos, símbolo, favicons, grafismos, fontes, tokens de design e o manual de marca.

> **Regra número um:** use sempre os arquivos oficiais deste repositório. Nunca redesenhe, recorte, recolora ou reconstrua a marca.

## Comece por aqui

| Você é... | Vá para |
| --- | --- |
| Humano procurando um logo | [Logotipo](#logotipo) — baixe e siga as regras da tabela |
| Dev montando uma tela | [Tokens](#tokens-de-design) + [Fontes](#tipografia) + [DESIGN.md](DESIGN.md) |
| Agente de IA | [AGENTS.md](AGENTS.md) — regras completas de uso de cada asset |
| Quem quer entender a marca a fundo | [Manual de marca](manual/Manual-de-Marca-Supporte.md) |

## Logotipo

| Versão | Quando usar | Arquivos |
| --- | --- | --- |
| <img src="logo/logo-supporte-fundo-claro.svg" width="140" alt="Logo para fundo claro"> | Fundos claros e brancos (versão principal) | [svg](logo/logo-supporte-fundo-claro.svg) · [png](logo/logo-supporte-fundo-claro.png) |
| <img src="logo/logo-supporte-fundo-escuro.svg" width="140" alt="Logo para fundo escuro"> | Fundos escuros (chumbo, preto, fotos escuras) | [svg](logo/logo-supporte-fundo-escuro.svg) · [png](logo/logo-supporte-fundo-escuro.png) |
| <img src="logo/logo-monocromatica-preta.svg" width="140" alt="Logo monocromatica preta"> | Uma cor só, sobre fundo claro | [svg](logo/logo-monocromatica-preta.svg) · [png](logo/logo-monocromatica-preta.png) |
| <img src="logo/logo-monocromatica-branca.svg" width="140" alt="Logo monocromatica branca"> | Uma cor só, sobre fundo escuro | [svg](logo/logo-monocromatica-branca.svg) · [png](logo/logo-monocromatica-branca.png) |

**Regras essenciais:**

- Tamanho mínimo: **100 px** no digital, **1,2 cm** no impresso.
- Preferência: principal → monocromática → positiva/negativa. Sempre a de melhor contraste.
- Proibido distorcer, rotacionar, sombrear, contornar, mudar cores ou aplicar efeitos.

### Símbolo PP

<img src="simbolo/pp.svg" width="80" alt="Simbolo PP">

Forma simplificada da logo ([svg](simbolo/pp.svg) · [png](simbolo/pp.png)). Use com parcimônia: avatar, ícone de app, crachá, separador de footer, detalhe de cabeçalho. Nunca substitui o logotipo em peças de comunicação.

## Favicons

**Aplicação comum:** escolha livremente entre os três abaixo — a variação é proposital, nem todo produto precisa do mesmo ícone.

| | Arquivo | Visual | Formatos |
| --- | --- | --- | --- |
| <img src="favicon/favicon.svg" width="32" alt="Favicon principal"> | favicon | PP nu (o principal) | [svg](favicon/favicon.svg) · [png](favicon/favicon.png) · [ico](favicon/favicon.ico) |
| <img src="favicon/favicon-alt.svg" width="32" alt="Favicon alt"> | favicon-alt | Squircle laranja | [svg](favicon/favicon-alt.svg) · [png](favicon/favicon-alt.png) · [ico](favicon/favicon-alt.ico) |
| <img src="favicon/favicon-producao.svg" width="32" alt="Favicon producao"> | favicon-producao | Squircle chumbo | [svg](favicon/favicon-producao.svg) · [png](favicon/favicon-producao.png) · [ico](favicon/favicon-producao.ico) |

**Aplicação grande, com desenvolvimento e sustentação ativos:** use o kit completo por ambiente. Cada ambiente tem cor **e** forma próprias — impossível confundir a aba de produção com a de homologação:

| Ambiente | | Arquivo | Formatos |
| --- | --- | --- | --- |
| Produção | <img src="favicon/favicon-producao.svg" width="32" alt="Producao"> | favicon-producao | [svg](favicon/favicon-producao.svg) · [png](favicon/favicon-producao.png) · [ico](favicon/favicon-producao.ico) |
| Homologação | <img src="favicon/favicon-homolog.svg" width="32" alt="Homologacao"> | favicon-homolog | [svg](favicon/favicon-homolog.svg) · [png](favicon/favicon-homolog.png) |
| Localhost | <img src="favicon/favicon-localhost.svg" width="32" alt="Localhost"> | favicon-localhost | [svg](favicon/favicon-localhost.svg) · [png](favicon/favicon-localhost.png) · [ico](favicon/favicon-localhost.ico) |

## Grafismos

Linhas decorativas derivadas do "P" da marca, na pasta [grafismos/](grafismos/). Escolha a variante `fundo-claro`/`fundo-escuro` conforme o fundo, e ancore no canto que o nome do arquivo indica.

| Família | Papel | Regra de uso |
| --- | --- | --- |
| `detalhe-1` | O principal — capas, splash screens, slides de título | Sempre em **par**: canto superior direito + canto inferior esquerdo juntos. Cansa se usado demais: em apresentações, só na capa e nos títulos de seção. |
| `detalhe-2` | Faixa de título de páginas secundárias | Raro e exigente: sempre com **texto branco dentro** da curva laranja. Na dúvida, não use. |
| `detalhe-3` | Marca d'água de páginas chapadas | Dá vida a fundos brancos ou escuros sem pesar. Sozinho ou combinado com o `detalhe-2`. |

## Cores

| Cor | HEX | RGB | Uso |
| --- | --- | --- | --- |
| Chumbo Supporte | `#58595B` | `88, 89, 91` | Textos, fundos, estrutura |
| Laranja Supporte | `#F37021` | `243, 112, 33` | Destaques e direção do olhar |
| Branco | `#FFFFFF` | `255, 255, 255` | Base neutra |

Chumbo e branco são a base; o laranja é acento, nunca preenchimento dominante. Em digital, valide contraste WCAG — laranja sobre branco falha para texto pequeno.

## Tipografia

| Família | Papel | Pesos |
| --- | --- | --- |
| **Titillium Web** | Títulos, chamadas, números de destaque | 200 · 300 · 400 · 400i · 600 · 600i |
| **Fira Sans** | Texto corrido, interfaces, formulários | 200 · 200i · 400 · 400i · 600 · 600i |
| **Fira Code** | Código, logs, dados monoespaçados (ligaduras ativas) | 300 · 400 · 500 · 600 · 700 |

Tudo em [fontes/](fontes/) (ttf para instalar, woff2 para web) com [fontes.css](fontes/fontes.css) pronto:

```html
<link rel="stylesheet" href="fontes/fontes.css">
```

## Tokens de design

Na pasta [tokens/](tokens/):

- [supporte.css](tokens/supporte.css) — variáveis CSS (cores, tipografia, raios, espaçamento)
- [supporte.json](tokens/supporte.json) — formato W3C Design Tokens, para ferramentas e agentes
- [tailwind.preset.js](tokens/tailwind.preset.js) — preset Tailwind v3 (instruções para v4 no próprio arquivo)

```css
@import url("tokens/supporte.css");

.botao-primario {
  background: var(--supporte-laranja);
  color: var(--supporte-branco);
  border-radius: var(--supporte-raio-md);
  font-family: var(--supporte-fonte-texto);
}
```

## Para agentes de IA

Este repositório segue os padrões de mercado para consumo por agentes:

- [AGENTS.md](AGENTS.md) — regras de uso de cada asset, checklist de entrega (padrão AGENTS.md; o `CLAUDE.md` aponta para ele)
- [DESIGN.md](DESIGN.md) — tokens e diretrizes de UI no formato [design.md do Google Labs](https://github.com/google-labs-code/design.md)

Duas regras que valem para todos, humanos e máquinas: **nunca use emojis** em materiais da marca, e ícones são sempre da família [Lucide](https://lucide.dev/) (logos de terceiros via Iconify/Simple Icons).

## Estrutura do repositório

```text
brand/
├── AGENTS.md          regras para agentes de IA (CLAUDE.md aponta para cá)
├── DESIGN.md          tokens e diretrizes de UI (spec design.md)
├── LICENCA.md         licença de uso da marca (pt-BR)
├── LICENSE.md         brand license (en-US)
├── favicon/           favicons padrão, alt e por ambiente
├── fontes/            Titillium Web, Fira Sans, Fira Code + fontes.css
├── grafismos/         linhas de fundo decorativas (detalhe 1, 2 e 3)
├── logo/              logotipo em 4 versões (svg + png)
├── manual/            manual de marca (.md vigente + PDF histórico de 2017)
├── simbolo/           símbolo PP isolado
└── tokens/            supporte.css, supporte.json, tailwind.preset.js
```

## Licença

© Supporte. Todos os direitos reservados. Este repositório é público para facilitar o acesso de colaboradores, parceiros e imprensa aos arquivos oficiais — isso **não** o torna de uso livre.

- Termos completos: [LICENCA.md](LICENCA.md) (pt-BR) · [LICENSE.md](LICENSE.md) (en-US)
- Exceção: as fontes em `fontes/` são de terceiros, sob [SIL Open Font License 1.1](https://openfontlicense.org/).
