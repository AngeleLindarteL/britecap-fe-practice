"use client";
import Hero from "@/_app/components/home/hero/Hero";
import Reviews from "@/_app/components/home/reviews/Reviews";
import TriangleMask from "./components/common/TriangleMask";
import BriteCapInNumbers from "./components/home/BriteCapInNumbers/BriteCapInNumbers";

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <BriteCapInNumbers />
    </>
  );
}
