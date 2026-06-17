"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { LoadingSpinner } from "./loading-spinner";

interface ProjectsRevealProps {
  children: ReactNode;
}

export function ProjectsReveal({ children }: ProjectsRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEnteredView) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsReady(true);
    }, 450);

    return () => window.clearTimeout(timeoutId);
  }, [hasEnteredView]);

  return (
    <div ref={containerRef} aria-busy={!isReady}>
      {!isReady && (
        <div className="flex min-h-32 items-center justify-center">
          <LoadingSpinner label="Loading projects" />
        </div>
      )}
      {isReady && <div className="projects-enter">{children}</div>}
    </div>
  );
}
