"use client";

import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";

export function Presence() {
  const { copy } = useI18n();

  return (
    <section id="presence" className="bg-[#f3e6d6]">
      <div className="presence-layout mx-auto max-w-[90rem] px-6 py-16 sm:px-10 sm:py-24">
        <div className="presence-copy">
          <Eyebrow>{copy.presence.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-[2.65rem]">
            {copy.presence.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink sm:text-xl">{copy.presence.body}</p>
        </div>
        <figure className="presence-wrist">
          <Image
            src="/presence/wrist.png"
            alt={copy.presence.wristAlt}
            width={1536}
            height={1024}
            quality={90}
            sizes="(min-aspect-ratio: 5/4) 600px, 92vw"
            className="h-auto w-full"
          />
        </figure>
        <figure className="presence-product">
          <Image
            src="/presence/product.png"
            alt={copy.presence.productAlt}
            width={1536}
            height={1024}
            quality={90}
            sizes="(min-aspect-ratio: 5/4) 480px, 80vw"
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
