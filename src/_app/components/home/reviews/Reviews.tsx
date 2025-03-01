import { motion } from "motion/react";
import ReviewCard from "./ReviewCard";
import { useTranslations } from "next-globe-gen";

const Reviews = () => {
  const t = useTranslations();

  return (
    <motion.div className="w-full flex flex-col justify-center items-center pt-5 pb-5 ">
      <motion.h2 className="text-titles font-bold text-3xl mb-6">
        {t("home.reviews.title")}
      </motion.h2>
      <div className="flex w-full justify-center gap-5">
        <ReviewCard
          daysAgo="2 days ago"
          rating={4}
          name="John Doe"
          description="nice company"
          review="I liked this company"
          key={1}
        />
        <ReviewCard
          daysAgo="2 days ago"
          rating={4}
          name="John Doe"
          description="nice company"
          review="I liked this company"
          key={2}
        />
      </div>
    </motion.div>
  );
};

export default Reviews;
