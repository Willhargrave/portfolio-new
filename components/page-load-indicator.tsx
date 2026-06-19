"use client";

import { useEffect, useState, type ReactNode } from "react";
import { LoadingSpinner } from "./loading-spinner";

let hasShownInitialLoad = false;

interface PageLoadIndicatorProps {
  children: ReactNode;
}

export function PageLoadIndicator({ children }: PageLoadIndicatorProps) {
  const [isLoaded, setIsLoaded] = useState(hasShownInitialLoad);

  useEffect(() => {
    if (isLoaded) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      hasShownInitialLoad = true;
      setIsLoaded(true);
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--background)]">
          <div className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] p-3 shadow-sm">
            <LoadingSpinner label="Loading portfolio" className="h-6 w-6" />
          </div>
        </div>
      )}

      {isLoaded && <div className="app-shell-enter">{children}</div>}
    </>
  );
}
