"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // true po hydracji, false przy renderze serwerowym — ikona zależy od motywu,
  // którego serwer nie zna, więc renderujemy ją dopiero na kliencie.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <button
      type="button"
      aria-label="Przełącz motyw"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {mounted && (resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
    </button>
  );
}
