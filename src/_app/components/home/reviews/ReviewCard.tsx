import { CheckBadgeIcon, StarIcon, TvIcon } from "@heroicons/react/16/solid";
import { motion } from "motion/react";
import { useTranslations } from "next-globe-gen";

const ReviewCard = ({
  review,
  description,
  daysAgo,
  rating,
  name,
}: {
  review: string;
  description: string;
  daysAgo: string;
  rating: number;
  name: string;
}) => {
  const t = useTranslations();

  return (
    <motion.div className="w-[250px] flex flex-col items-center justify-start bg-gray-100 h-[150px] p-2 bg-background border-b-2 border-b-gray-200">
      <div className="flex w-full justify-between">
        <figure className="flex ">
          {Array.from(Array(rating).keys()).map(() => (
            <span className="text-white p-1 border-2 border-gray-200 bg-green-500">
              <StarIcon className="w-3 h-3" />
            </span>
          ))}
        </figure>
        <p className="flex gap-2 font-bold text-gray-500 text-sm pt-1">
          <CheckBadgeIcon className="w-4 h-4" />
          {t("verified")}
        </p>
      </div>
      <article className="flex w-full flex-col items-start mt-2">
        <p className="text-gray-900 text-sm">{review}</p>
        <p className="text-gray-500 text-sm">{description}</p>
      </article>
      <div className="mt-auto flex w-full gap-2">
        <p className="text-gray-500 text-sm font-bold">{name}</p>
        <p className="text-gray-500 text-sm">{daysAgo}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
