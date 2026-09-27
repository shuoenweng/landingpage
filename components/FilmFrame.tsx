"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_LANDSCAPE, HERO_PORTRAIT, type HeroFilm } from "@/lib/site";

export type Stage = "narrow" | "wide";

/**
 * Wide means the viewport is landscape enough that the landscape film can
 * cover the screen without cutting into the bracelet. Narrow viewports use
 * the portrait film instead.
 */
export function useStage() {
  const [stage, setStage] = useState<Stage | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const wideQuery = window.matchMedia("(min-aspect-ratio: 5/4)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setStage(wideQuery.matches ? "wide" : "narrow");
      setReduceMotion(motionQuery.matches);
    };

    update();
    wideQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      wideQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return { stage, reduceMotion };
}

const films: Record<"landscape" | "portrait", HeroFilm> = {
  landscape: HERO_LANDSCAPE,
  portrait: HERO_PORTRAIT,
};

type FilmFrameProps = {
  clip: "landscape" | "portrait";
  /** Which viewport shape should show this clip. */
  showOn: Stage;
  label: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
  className?: string;
  priority?: boolean;
  /** Passed to the poster so a full-bleed hero is not fetched at the presence size. */
  sizes?: string;
};

export function FilmFrame({
  clip,
  showOn,
  label,
  fit = "cover",
  objectPosition = "center",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 28rem, 100vw",
}: FilmFrameProps) {
  const { stage, reduceMotion } = useStage();
  const film = films[clip];
  const playing = stage === showOn && !reduceMotion;
  const fitClass = fit === "cover" ? "object-cover" : "object-contain";
  const shell = showOn === "wide" ? "film-for-wide" : "film-for-narrow";

  return (
    <div className={`${shell} ${className}`}>
      <Image
        src={film.poster}
        alt={playing ? "" : label}
        fill
        priority={priority}
        sizes={sizes}
        className={fitClass}
        style={{ objectPosition }}
        aria-hidden={playing}
      />
      {playing ? (
        <video
          className={`absolute inset-0 h-full w-full ${fitClass}`}
          style={{ objectPosition }}
          autoPlay
          muted
          loop
          playsInline
          poster={film.poster}
          preload="auto"
          aria-label={label}
          ref={(node) => {
            if (node) {
              node.muted = true;
            }
          }}
        >
          <source src={film.webm} type="video/webm" />
          <source src={film.mp4} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
