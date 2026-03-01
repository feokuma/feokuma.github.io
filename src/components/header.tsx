import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-foreground/10">
      <div className="flex w-full items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Feokuma Blog
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="underline">
            Início
          </Link>
          <Link href="/blog" className="underline">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
