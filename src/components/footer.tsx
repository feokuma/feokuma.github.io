import Image from "next/image";

export function Footer() {
  return (
    <footer className="site-footer border-t border-foreground/10">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-6 py-6">
        <p className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo Feokuma Blog"
            width={20}
            height={20}
            className="h-5 w-5 rounded-sm"
          />
          <span>© {new Date().getFullYear()} Feokuma Blog</span>
        </p>
      </div>
    </footer>
  );
}
