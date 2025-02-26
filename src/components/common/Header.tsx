import { PhoneIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import Link from "next/link"
import HeaderLink from "./HeaderLink"
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header className="flex bg-header p-4 z-40 sticky top-0 w-full text-col text-background items-center">
      <div className="w-1/5">
        <Link href="/">
          <Image
            aria-hidden
            src="/logo.png"
            alt="Brite cap icon"
            width={250}
            height={250}
            className="dark:invert"
          />
        </Link>
      </div>
      <div className="w-4/5 flex flex-col items-end">
        <div className="m-1 flex gap-5 text-xs">
          <Link href="tel:8666234900" className="bg-transparent border-sky-700 border-2 p-1 pl-4 pr-4 text-sky-700 bold flex gap-1 hover:bg-sky-800 hover:text-white justify-center items-center duration-150">
            <PhoneIcon className="h-5 w-5" />
            CALL US
          </Link>
          <HeaderLink href="/apply" text="APPLY NOW"/>
          <HeaderLink href="/x" text="ACTIVATE"/>
          <HeaderLink href="/d" text="SIGN IN"/>
        </div>
        <hr className="border-background w-[98%]" />
        <li>
          <Link href="/">Home</Link>
        </li>
      </div>
    </header>
  )
}

export default Header