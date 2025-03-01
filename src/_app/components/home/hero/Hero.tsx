"use client";
import React, { useMemo } from "react";
import CsvLinedText from "./CsvLinedText";
import Typewriter from "typewriter-effect";

import { useTranslations } from "next-globe-gen";

const Hero = () => {
  const t = useTranslations();
  const typewriterOptions = useMemo(() => {
    const texts = t("home.hero.texts.typewriter").split("|");

    return texts.map((text) => text.trim());
  }, [t]);
  return (
    <div className="w-full flex flex-col bg-blue-300 h-screen relative pt-28">
      <article className="flex flex-col w-full h-full z-10 p-10">
        <CsvLinedText text={t("home.hero.texts.smarter")} />
        <CsvLinedText text={t("home.hero.texts.faster")} />
        <CsvLinedText text={t("home.hero.texts.better")} />
        <CsvLinedText text={t("home.hero.texts.funding")} filled />

        <Typewriter
          options={{
            strings: typewriterOptions,
            autoStart: true,
            loop: true,
            deleteSpeed: 1,
            wrapperClassName: "font-bold text-4xl text-white",
          }}
        />
      </article>
      <figure className="w-full h-full bg-hero bg-cover bg-center bg-fixed bg-no-repeat absolute top-0 left-0 z-0" />
    </div>
  );
};

export default Hero;
