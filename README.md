# Feokuma Blog

Projeto base de blog com Next.js (App Router) e artigos em arquivos Markdown.

## Rodando localmente

```bash
npm install
npm run dev
```

Aplicação disponível em `http://localhost:3000`.

## Estrutura principal

- `content/posts`: arquivos `.md` com os artigos
- `src/lib/posts.ts`: leitura de frontmatter e conversão Markdown -> HTML
- `src/app/blog/page.tsx`: listagem de posts
- `src/app/blog/[slug]/page.tsx`: página de post individual

## Como criar um novo post

1. Crie um arquivo em `content/posts`, por exemplo: `meu-novo-post.md`.
1. Use este frontmatter:

```md
---
title: "Título do post"
date: "2026-03-01"
excerpt: "Resumo curto do artigo"
---
```

1. Escreva o conteúdo abaixo do frontmatter usando Markdown.

O slug da URL será o nome do arquivo. Exemplo: `content/posts/meu-novo-post.md` vira `/blog/meu-novo-post`.
