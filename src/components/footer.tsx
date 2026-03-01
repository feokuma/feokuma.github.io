export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto w-full max-w-3xl px-6 py-6">
        <p>© {new Date().getFullYear()} Feokuma Blog</p>
      </div>
    </footer>
  );
}
