import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const homeSuggestions = [
	{
		title: "Artigo em destaque",
		description: "Traga o post mais recente ou mais lido para aumentar o tempo de leitura já na entrada do site.",
	},
	{
		title: "Trilhas por tema",
		description: "Agrupe conteúdos por categorias como Front-end, Back-end e Carreira para facilitar a descoberta.",
	},
	{
		title: "Newsletter e comunidade",
		description: "Inclua uma chamada simples para inscrição e links para redes para manter a audiência próxima.",
	},
];

export default function HomePage() {
	const latestPosts = getAllPosts().slice(0, 3);

	return (
		<main className="page-shell mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-14 md:px-10">
			<section className="space-y-5">
				<p className="blog-tag">Boas vindas</p>
				<h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
					Tecnologia, aprendizado e experiências práticas.
				</h1>
				<p className="max-w-3xl text-lg text-[color:var(--ctp-subtext0)]">
					Sou o Fernando Okuma e aqui você vai encontrar registros de coisas que aprendi e de experiências práticas de uma pessoa que vive a tecnologia diariamente.
                    Seja para aprender algo novo, se inspirar ou só dar uma olhada, espero que encontre algo interessante por aqui.
				</p>
				<div className="flex flex-wrap gap-3">
					<Link href="/blog" className="rounded-full border border-[color:var(--ctp-lavender)] px-5 py-2 font-medium hover:opacity-85">
						Ver artigos
					</Link>
					<Link href="/sobre" className="rounded-full border border-[color:var(--ctp-surface0)] px-5 py-2 font-medium hover:border-[color:var(--ctp-lavender)]">
						Sobre o projeto
					</Link>
				</div>
			</section>

			<section aria-labelledby="ultimos-artigos" className="space-y-4">
				<h2 id="ultimos-artigos" className="text-3xl font-semibold">
					Últimos artigos
				</h2>
				<p className="text-[color:var(--ctp-subtext0)]">Uma seleção rápida para começar a leitura.</p>
				{latestPosts.length > 0 ? (
					<ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
						{latestPosts.map((post) => (
							<li key={post.slug} className="post-card space-y-3">
								<h3 className="text-xl font-semibold leading-snug">
									<Link href={`/blog/${post.slug}`} className="hover:opacity-85">
										{post.title}
									</Link>
								</h3>
								<p className="line-clamp-3 text-sm text-[color:var(--ctp-subtext0)]">{post.excerpt}</p>
								<Link href={`/blog/${post.slug}`} className="font-medium">
									Continuar leitura →
								</Link>
							</li>
						))}
					</ul>
				) : (
					<p className="text-[color:var(--ctp-subtext0)]">Nenhum artigo encontrado no momento.</p>
				)}
			</section>

			<section aria-labelledby="referencias-home" className="space-y-4">
				<h2 id="referencias-home" className="text-3xl font-semibold">
					Referência do que pode ser interessante na home
				</h2>
				<p className="max-w-3xl text-[color:var(--ctp-subtext0)]">
					Para evoluir esta página inicial, estas três áreas costumam trazer clareza, navegação melhor e mais engajamento.
				</p>
				<ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{homeSuggestions.map((suggestion) => (
						<li key={suggestion.title} className="post-card space-y-2">
							<h3 className="text-lg font-semibold">{suggestion.title}</h3>
							<p className="text-sm text-[color:var(--ctp-subtext0)]">{suggestion.description}</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
