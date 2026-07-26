import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "kuse-lab:visited-principles";

function readStoredSlugs(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
}

export function useVisitedPrinciples() {
  const [visited, setVisited] = useState<Set<string>>(() => new Set(readStoredSlugs()));

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setVisited(new Set(readStoredSlugs()));
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const markVisited = useCallback((slug: string) => {
    setVisited((prev) => {
      if (prev.has(slug)) return prev;
      const next = new Set(prev);
      next.add(slug);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const isVisited = useCallback((slug: string) => visited.has(slug), [visited]);

  return { visited, isVisited, markVisited };
}
