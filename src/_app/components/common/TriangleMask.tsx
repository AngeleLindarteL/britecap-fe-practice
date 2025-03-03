const TriangleMask = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-[#305998] h-96 relative ${className}`}>
      {children}
      <figure
        style={{
          background:
            "linear-gradient(to bottom left, rgba(255,255,255,0) 48.5%, rgba(255,255,255,0.1) 49.5%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,1) 0)",
        }}
        className="w-2/4 h-2/6 absolute bottom-0 left-0"
      ></figure>
      <figure
        style={{
          background:
            "linear-gradient(to bottom right, rgba(255,255,255,0) 48.5%, rgba(255,255,255,0.1) 49.5%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,1) 0)",
        }}
        className="w-2/4 h-2/6 absolute bottom-0 right-0"
      ></figure>
    </div>
  );
};

export default TriangleMask;
