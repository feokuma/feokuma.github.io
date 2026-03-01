import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="site-header border-b border-foreground/10">
      <div className="flex w-full items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
          <Image
            src="/logo.png"
            alt="Logo Feokuma Blog"
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-md"
          />
          <span>Feokuma Blog</span>
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="/" className="underline">
            Inicio
          </Link>
          <Link href="/blog" className="underline">
            Blog
          </Link>
          <Link href="/sobre" className="underline">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
