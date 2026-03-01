export default function SobrePage() {
  return (
    <main className="page-shell mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Sobre</h1>
        <p>Conheça mais sobre a proposta do Feokuma Blog.</p>
      </header>

      <section className="post-card space-y-4">
        <p>
          Este blog foi criado para compartilhar artigos sobre desenvolvimento web, com foco em
          conteúdo prático e direto ao ponto.
        </p>
        <p>
          Os textos são escritos em Markdown e publicados com Next.js, permitindo uma experiência
          leve, rápida e fácil de manter.
        </p>
        <p>
          A ideia é reunir aprendizados, experimentos e boas práticas que possam ajudar outras
          pessoas na jornada de tecnologia.
        </p>
      </section>
    </main>
  );
}