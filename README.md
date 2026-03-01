# Feokuma Blog

Projeto base de blog com Next.js (App Router) e artigos em arquivos Markdown.

## Rodando localmente

```bash
npm install
npm run dev
```

Aplicação disponível em `http://localhost:3000`.

## Estrutura principal

- `content/posts/<slug>/index.md`: conteúdo do artigo
- `content/posts/<slug>/header.*`: imagem de capa do mesmo artigo
- `src/lib/posts.ts`: leitura de frontmatter e conversão Markdown -> HTML
- `src/app/blog/page.tsx`: listagem de posts
- `src/app/blog/[slug]/page.tsx`: página de post individual
- `src/app/post-assets/[slug]/[file]/route.ts`: rota para servir as imagens locais dos posts

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

O slug da URL será o nome da pasta. Exemplo: `content/posts/meu-novo-post/` vira `/blog/meu-novo-post`.

## Convenção para capas

- Pasta por artigo: `content/posts/<slug>/`
- Nome padrão recomendado: `header.jpg` (aceita também `.png`, `.webp`, `.avif`, `.svg`)
- O valor de `coverImage` no frontmatter pode ser relativo à pasta do post, por exemplo:

```md
coverImage: "./header.jpg"
```

Essa mesma imagem é usada tanto na listagem quanto no cabeçalho da página do artigo.
