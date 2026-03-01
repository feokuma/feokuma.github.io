# Feokuma Blog

Projeto base de blog com Next.js (App Router) e artigos em arquivos Markdown.

## Tecnologias utilizadas

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Markdown com `gray-matter`, `remark` e `rehype`
- Syntax highlight com `rehype-highlight`
- Deploy estático no GitHub Pages

## Rodando localmente

```bash
npm install
npm run dev
```

Aplicação disponível em `http://localhost:3000`.

## Estrutura principal

- `content/posts/<slug>/index.md`: conteúdo do artigo
- `content/posts/<slug>/header.*`: imagem de capa do mesmo artigo
- `public/post-assets/<slug>/*`: assets estáticos copiados automaticamente dos posts
- `src/lib/posts.ts`: leitura de frontmatter e conversão Markdown -> HTML
- `src/app/blog/page.tsx`: listagem de posts
- `src/app/blog/[slug]/page.tsx`: página de post individual
- `scripts/sync-post-assets.mjs`: sincronização dos assets dos posts para `public/`
- `.github/workflows/deploy-pages.yml`: workflow de build e deploy para GitHub Pages

## Build e saída do bundle

- Em desenvolvimento, o Next usa `.next/`.
- Em build para deploy (`npm run build`), o projeto está configurado com `output: "export"` e gera o site estático em `out/`.

## Deploy no GitHub Pages

1. No GitHub, vá em **Settings > Pages**.
1. Em **Source**, selecione **GitHub Actions**.
1. Faça push para a branch `main`.
1. O workflow `.github/workflows/deploy-pages.yml` fará build e publicará a pasta `out/` automaticamente.

O `basePath` é configurado automaticamente em CI usando o nome do repositório. Para testar localmente com base path, você pode usar:

```bash
NEXT_PUBLIC_BASE_PATH=/feokuma-blog npm run build
```

Observação: se o repositório de publicação for do tipo `usuario.github.io` (ou `org.github.io`), o `basePath` automático fica vazio para publicar na raiz do domínio.

## Debug

- Rodar em modo de desenvolvimento:

```bash
npm run dev
```

- Validar lint:

```bash
npm run lint
```

- Gerar build de produção estático:

```bash
npm run build
```

- Erros comuns:
	- Imagem de post não aparece: confirme que o arquivo está em `content/posts/<slug>/` e rode `npm run sync:post-assets`.
	- Links quebrados no Pages: confirme se o repositório está com Pages via **GitHub Actions** e se o deploy mais recente concluiu com sucesso.

## Como criar um novo post

1. Crie a pasta do post em `content/posts/meu-novo-post/`.
1. Dentro da pasta, crie o arquivo `index.md`.
1. Use este frontmatter:

```md
---
title: "Título do post"
date: "2026-03-01"
excerpt: "Resumo curto do artigo"
coverImage: "./header.jpg"
---
```

1. Escreva o conteúdo abaixo do frontmatter usando Markdown.
1. Salve a imagem de capa ao lado do markdown: `content/posts/meu-novo-post/header.jpg`.

Durante `npm run dev` e `npm run build`, os assets do post (exceto `index.md`) são copiados automaticamente para `public/post-assets/meu-novo-post/`.

O slug da URL será o nome da pasta. Exemplo: `content/posts/meu-novo-post/` vira `/blog/meu-novo-post`.

## Convenção para capas

- Pasta por artigo: `content/posts/<slug>/`
- Nome padrão recomendado: `header.jpg` (aceita também `.png`, `.webp`, `.avif`, `.svg`)
- O valor de `coverImage` no frontmatter pode ser relativo à pasta do post, por exemplo:

```md
coverImage: "./header.jpg"
```

Essa mesma imagem é usada tanto na listagem quanto no cabeçalho da página do artigo.
