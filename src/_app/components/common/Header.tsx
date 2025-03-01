"use client";
import { PhoneIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";
import Typewriter from "typewriter-effect";
import { useContext, useEffect, useMemo, useState } from "react";
import { ScrollingContext } from "@/_app/context/ScrollingContext";
import { useLocale, useTranslations, useRoute } from "next-globe-gen";
import { useRouter } from "next/navigation";

const Header = () => {
  const { scrollTop } = useContext(ScrollingContext);
  const t = useTranslations();
  const locale = useLocale();
  const route = useRoute();
  const { push } = useRouter();

  const changeLocale = (e: any) => {
    const newLocale = e.target.value;

    if (newLocale !== locale) {
      const path = route.split("/").filter((e) => !["en", "es"].includes(e));
      console.log("redirecting to", newLocale, path);
      push(`/${newLocale}/${route}`);
    }
  };

  const headerBlur = useMemo<string | null>(() => {
    if (scrollTop > 50) {
      return "backdrop-blur-md";
    }
    return null;
  }, [scrollTop]);

  return (
    <header
      className={`transition duration-150 flex p-2 z-40 fixed top-0 w-full text-col text-background items-center ${headerBlur}`}
    >
      <div className="w-3/12">
        <Link href="/">
          <Image
            aria-hidden
            src="/logo.png"
            alt="Brite cap icon"
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="w-4/5 flex flex-col items-end">
        <div className="m-1 flex gap-5 text-xs pb-2">
          <Link
            href="tel:8666234900"
            className="font-bold bg-sky-700 p-1 pl-4 pr-4 text-white bold flex gap-1 hover:bg-sky-500 justify-center items-center duration-150"
          >
            <PhoneIcon className="h-5 w-5" />
            {t("header.buttons.call")}
          </Link>
          <HeaderLink href="/apply" text={t("header.buttons.apply")} />
          <HeaderLink href="/activate" text={t("header.buttons.activate")} />
          <HeaderLink href="/signin" text={t("header.buttons.signIn")} />
        </div>
        <hr className="border-background w-[98%] border-white" />
        <div className="pt-5 flex">
          <select
            name="select"
            defaultValue={locale}
            className="border-2 border-gray-200 rounded-md text-black"
            onChange={changeLocale}
          >
            <option value="es">es</option>
            <option value="en" selected>
              en
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
