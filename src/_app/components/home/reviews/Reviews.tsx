import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import ReviewCard from "./ReviewCard";
import { useTranslations } from "next-globe-gen";
import { useEffect, useRef, useState } from "react";

const Reviews = () => {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const titleTranslateY = useMotionValue(50);
  const cardsTranslateY = useMotionValue(100);

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    const scrollVal = 50 - curr * 100;
    const cardsVal = 100 - curr * 1.5 * 100;

    if (scrollVal > 0) {
      titleTranslateY.set(scrollVal);
    }
    if (cardsVal > 0) {
      cardsTranslateY.set(cardsVal);
    }
  });

  return (
    <motion.div
      className="w-full flex flex-col justify-center items-center pt-5 pb-5 overflow-hidden"
      ref={ref}
    >
      <motion.h2
        className="text-titles font-bold text-3xl mb-1"
        style={{
          y: titleTranslateY,
        }}
      >
        {t("home.reviews.title")}
      </motion.h2>
      <motion.p
        className="text-l margin-auto pl-[10%] pr-[10%] text-center mb-10"
        style={{
          opacity: scrollYProgress,
        }}
      >
        {t("home.reviews.subtitle")}
      </motion.p>
      <div className="flex w-full justify-center gap-5">
        <ReviewCard
          daysAgo="2 days ago"
          rating={5}
          name="John Doe"
          description="nice company"
          review="I liked this company"
          key={1}
          translateY={cardsTranslateY}
        />
        <ReviewCard
          daysAgo="2 days ago"
          rating={5}
          name="John Doe"
          description="nice company"
          review="I liked this company"
          key={2}
          translateY={cardsTranslateY}
        />
        <ReviewCard
          daysAgo="2 days ago"
          rating={5}
          name="John Doe"
          description="nice company"
          review="I liked this company"
          key={3}
          translateY={cardsTranslateY}
        />
      </div>
    </motion.div>
  );
};

export default Reviews;
