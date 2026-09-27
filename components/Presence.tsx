"use client";

import { Eyebrow } from "./Eyebrow";
import { FilmFrame } from "./FilmFrame";
import { useI18n } from "@/lib/i18n/provider";

export function Presence() {
  const { copy } = useI18n();

  return (
    <section id="presence" className="bg-[#f3e6d6]">
      <div className="presence-grid mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <div className="presence-copy max-w-xl">
          <Eyebrow>{copy.presence.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            {copy.presence.title}
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-ink sm:text-2xl">
            {copy.presence.body}
          </p>
        </div>
        <div className="presence-media w-full">
          <FilmFrame
            clip="portrait"
            showOn="wide"
            label={copy.presence.videoAlt}
            fit="contain"
            className="relative mx-auto aspect-[728/1280] w-full max-w-[22rem]"
          />
          <FilmFrame
            clip="landscape"
            showOn="narrow"
            label={copy.presence.videoAlt}
            fit="contain"
            className="relative aspect-[1280/728] w-full"
          />
        </div>
      </div>
    </section>
  );
}
