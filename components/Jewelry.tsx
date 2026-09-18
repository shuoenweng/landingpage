"use client";

import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/lib/i18n/provider";
import { PRODUCT_IMAGE } from "@/lib/site";

export function Jewelry() {
  const { copy } = useI18n();

  return (
    <section id="jewelry" className="bg-ivory">
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="relative min-h-[26rem] bg-cream sm:min-h-[34rem] lg:min-h-[min(88vh,52rem)]">
          <Image
            src={PRODUCT_IMAGE}
            alt={copy.jewelry.imageAlt}
            fill
            className="object-cover object-[center_40%]"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
        <div className="flex items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-xl">
            <Eyebrow>{copy.jewelry.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {copy.jewelry.title}
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-stone">
              {copy.jewelry.body}
            </p>
            <ul className="mt-10 grid gap-6">
              {copy.jewelry.details.map((item) => (
                <li key={item.name} className="border-t border-sand pt-5">
                  <h3 className="font-serif text-2xl font-semibold text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-stone">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
