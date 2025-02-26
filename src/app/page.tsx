"use client"
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col w-full bg-hero bg-cover bg-center bg-no-repeat">
          <h2>SMARTER</h2>
          <h2>FASTER</h2>
          <h2>BETTER</h2>
          <h2>FUNDING</h2>
          <Typewriter
            options={{
              strings: ["WELCOME TO", "BRITE CAP"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </main>
    </div>
  );
}
