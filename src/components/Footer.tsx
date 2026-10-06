export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Kacper Piechowski. Wszelkie prawa zastrzeżone.</p>
        <a href="#" className="transition-colors hover:text-accent">
          Do góry ↑
        </a>
      </div>
    </footer>
  );
}
