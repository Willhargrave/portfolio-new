"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { ProjectScreenshot } from "@/lib/projects";

interface ProjectVideoPreviewProps {
  className: string;
  locale: Locale;
  media: ProjectScreenshot;
  priority?: boolean;
  sizes?: string;
}

export function ProjectVideoPreview({
  className,
  locale,
  media,
  priority = false,
  sizes,
}: ProjectVideoPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const posterSrc = media.posterSrc ?? media.src;

  useEffect(() => {
    const container = containerRef.current;

    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextIsInView = entry?.isIntersecting ?? false;

        setIsInView(nextIsInView);

        if (nextIsInView) {
          setHasEnteredView(true);
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (!isInView) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      video.pause();
    });
  }, [isInView, hasEnteredView]);

  return (
    <div ref={containerRef} className="h-auto w-full">
      {hasEnteredView ? (
        <video
          ref={videoRef}
          aria-label={media.alt[locale]}
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
          width={media.width}
          height={media.height}
          className={className}
        >
          <source src={media.src} type={media.mimeType} />
        </video>
      ) : (
        <Image
          src={posterSrc}
          alt={media.alt[locale]}
          width={media.width}
          height={media.height}
          priority={priority}
          className={className}
          sizes={sizes}
        />
      )}
    </div>
  );
}
