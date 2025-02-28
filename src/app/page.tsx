"use client"
import CsvLinedText from "@/components/home/hero/CsvLinedText";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full flex flex-col bg-blue-300 h-screen relative">
          <article className="flex flex-col w-full h-full z-10 p-10">
            <CsvLinedText text="SMARTER" />
            <CsvLinedText text="FASTER" />
            <CsvLinedText text="BETTER" />
            <CsvLinedText text="FUNDING" filled />

            <Typewriter
              options={{
                strings: [
                  "Faster Funding",
                  "Smarter Funding",
                  "Better Funding",
                  "Brite Capital",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </article>
          <figure className="w-full h-full bg-hero bg-cover bg-center bg-no-repeat fixed top-0 left-0 z-0"/> 
        </div>
      </main>
    </div>
  );
}
