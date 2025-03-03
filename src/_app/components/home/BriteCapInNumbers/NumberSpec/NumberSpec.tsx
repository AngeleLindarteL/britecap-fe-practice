const NumberSpec = ({
  value,
  subtext,
  itsLast,
}: {
  value: string;
  subtext: string;
  itsLast?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col items-center ${itsLast || "border-r-2"} pr-10`}
    >
      <h2 className="text-white text-5xl font-extrabold">{value}</h2>
      <p className="text-white text-lg font-extralight">{subtext}</p>
    </div>
  );
};

export default NumberSpec;
