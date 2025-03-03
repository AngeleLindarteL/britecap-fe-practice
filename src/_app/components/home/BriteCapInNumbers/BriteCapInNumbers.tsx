import TriangleMask from "@components/common/TriangleMask";
import NumberSpec from "./NumberSpec/NumberSpec";
import { useTranslations } from "next-globe-gen";

const BriteCapInNumbers = () => {
  const t = useTranslations();

  return (
    <TriangleMask className="flex items-center p-5 pt-10 flex-col">
      <h2 className="text-white text-3xl font-extralight">
        {t("home.inNumbers.title")}
      </h2>
      <div className="flex gap-5 mt-16">
        <NumberSpec value="20+" subtext={t("home.inNumbers.labels.years")} />
        <NumberSpec value="20K+" subtext={t("home.inNumbers.labels.loans")} />
        <NumberSpec
          value="700+ MM"
          subtext={t("home.inNumbers.labels.funding")}
          itsLast
        />
      </div>
    </TriangleMask>
  );
};

export default BriteCapInNumbers;
