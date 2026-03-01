# copilot-instructions.md

## Objetivo do projeto
Você (Copilot) está contribuindo em um projeto **Next.js** para um **blog de tecnologia**. Gere código e sugestões seguindo **boas práticas modernas do ecossistema Next.js**, com atenção especial à **UX**, **acessibilidade (a11y)** e **manutenibilidade**.  

**Princípios inegociáveis:**
- Qualidade > velocidade: prefira soluções simples, consistentes e fáceis de manter.
- Acessibilidade e UX são requisitos funcionais, não “extras”.
- Tudo que for adicionado/alterado deve manter o projeto **executável** e **coeso**.
- Ao introduzir uma nova tecnologia, ajuste documentação e exemplos (README).

---

## Stack e convenções gerais
- **Next.js (App Router)**: usar a pasta `app/`, layouts, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`.
- **TypeScript** sempre.
- Componentização: separar `components/`, `features/`, `lib/`, `styles/`, `content/` (ou estrutura equivalente definida no projeto).
- Preferir **Server Components** por padrão e usar **Client Components** apenas quando necessário (`"use client"`).
- Evitar dependências desnecessárias; justificar quando adicionar novas libs.

---

## Boas práticas modernas de Next.js (App Router)
Ao gerar ou alterar código:
1. **Data fetching** preferencialmente em Server Components:
   - Buscar dados no servidor quando possível.
   - Evitar `useEffect` para carregar dados essenciais de páginas.
2. **Caching e revalidação**:
   - Use `fetch` do Next com as opções adequadas (`cache`, `next: { revalidate }`) conforme a necessidade do conteúdo.
   - Conteúdo de blog costuma se beneficiar de **SSG/ISR** (quando aplicável).
3. **Metadata e SEO**:
   - Use `export const metadata` ou `generateMetadata` para título, descrição, Open Graph, Twitter cards.
   - URLs amigáveis, slug consistente, canonical quando necessário.
4. **Performance**:
   - Use `next/image` para imagens.
   - Carregamento progressivo e otimização de fontes.
   - Evite renderizações desnecessárias e grandes bundles no client.
5. **Tratamento de estados e erros**:
   - Utilize `error.tsx` e `not-found.tsx` adequadamente.
   - Mensagens de erro claras e acessíveis.
6. **Rotas e navegação**:
   - Use `<Link />` do Next.
   - Evite navegação imperativa quando não necessário.

---

## UX: como pensar como uma pessoa especialista
Ao implementar páginas e componentes, sempre considerar:
- **Hierarquia visual**: títulos claros, espaçamento consistente, layout legível.
- **Feedback de estado**:
  - `loading` states com skeletons ou placeholders.
  - Mensagens claras para vazio (“Nenhum artigo encontrado”) e erro.
- **Leitura confortável** (blog):
  - Largura máxima do conteúdo (ex.: 65–75 caracteres por linha).
  - Tipografia e espaçamento de linha adequados.
  - Sumário (TOC) quando útil e navegação por headings.
- **Consistência**:
  - Componentes reutilizáveis para botões, links, cards de artigo, badges de tag, etc.
  - Tokens de design (cores, espaçamentos) centralizados.

---

## Acessibilidade (a11y): requisitos obrigatórios
O código gerado deve:
- Ser **navegável por teclado** (tab order lógico, foco visível).
- Usar **HTML semântico** (main, nav, header, footer, article, section).
- Garantir **contraste adequado** (texto e elementos interativos).
- Ter **labels** e nomes acessíveis:
  - `aria-label` somente quando não houver texto visível apropriado.
  - Inputs sempre com `<label>`.
- Imagens com `alt` significativo (ou `alt=""` se decorativa).
- Respeitar preferências do usuário:
  - `prefers-reduced-motion` para animações.
- Evitar armadilhas comuns:
  - Não remover outline sem substituto.
  - Não depender apenas de cor para transmitir informação.
- Para componentes complexos (menus, dialogs):
  - Preferir bibliotecas/headless acessíveis ou implementar seguindo padrões WAI-ARIA.
  - Garantir foco inicial e retorno de foco ao fechar modais.

---

## Conteúdo do blog (artigos, slugs e MDX/Markdown)
Ao criar o sistema de artigos:
- Preferir **Markdown/MDX** com frontmatter (ex.: `title`, `description`, `date`, `tags`, `published`, `coverImage`, `readingTime`).
- Slug derivado do nome do arquivo ou campo `slug`, consistente.
- Garantir que:
  - Artigos tenham página individual (`/blog/[slug]`).
  - Lista de artigos (`/blog`) com paginação ou carga incremental se necessário.
  - Tags/categorias sejam navegáveis (ex.: `/tags/[tag]`).
- Validar frontmatter e falhar com erro amigável quando faltar campo obrigatório.

---

## Qualidade de código (padrões)
Sempre:
- Tipos explícitos onde melhora legibilidade.
- Funções pequenas e com responsabilidade clara.
- Evitar “magic strings”: centralizar constantes.
- Reutilizar componentes ao invés de duplicar.
- Comentários apenas quando agregam (por que, não o que).
- Usar `eslint`/`prettier` e respeitar as regras do projeto.

---

## Testes (quando aplicável)
Se houver testes configurados:
- Criar/atualizar testes ao introduzir lógica importante.
- Priorizar testes de:
  - parsing de artigos (frontmatter),
  - geração de rotas/paths,
  - componentes críticos (cards, navegação),
  - acessibilidade básica (quando tooling permitir).

---

## Logging, Debug e DX (Developer Experience)
- Evitar `console.log` em produção. Para debug local:
  - Use logs pontuais e remova ao final ou condicione por ambiente.
- Mensagens de erro devem ser claras e ajudar a diagnosticar o problema.
- Scripts úteis (dev, build, start, lint, test) devem estar documentados.

---

## Atualização obrigatória do README.md
Sempre que você:
- adicionar uma tecnologia (ex.: MDX, Tailwind, CMS, search),
- criar um novo fluxo (ex.: adicionar artigos, gerar thumbnails),
- alterar comandos de execução/debug,
- mudar estrutura de pastas relevante,

**você deve atualizar o `README.md`** com:
1. **Tecnologias utilizadas** (lista curta e objetiva).
2. **Como rodar o projeto** (passo a passo).
3. **Como fazer debug**:
   - como executar em modo dev,
   - como debugar no VS Code (se aplicável),
   - como inspecionar erros comuns.
4. **Como adicionar novos artigos**:
   - onde criar o arquivo,
   - formato do frontmatter,
   - convenção de slug e imagens,
   - como validar localmente.

Se houver mudanças relevantes, inclua exemplos de comandos e trechos de frontmatter.

---

## Checklist antes de finalizar uma alteração
Antes de propor/gerar o resultado final, verifique:
- [ ] O componente/página usa a abordagem correta (Server vs Client).
- [ ] A experiência de leitura do blog está boa (tipografia, layout, navegação).
- [ ] Acessibilidade ok (semântica, teclado, foco, labels, alt).
- [ ] SEO/metadata adequados (título, descrição, OG quando aplicável).
- [ ] Sem regressões óbvias de performance (evitar JS no client sem necessidade).
- [ ] README atualizado quando necessário.
- [ ] Código consistente com as convenções do projeto.