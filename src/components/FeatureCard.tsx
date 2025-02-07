interface FeatureCardProps {
  title: string;
  caption: string;
  children?: React.ReactNode;
  index: number;
}

export const FeatureCard = ({
  title,
  caption,
  children,
  index,
}: FeatureCardProps) => {
  const isEven = index % 2 === 0;
  return (
    <div className="w-[300px] lg:max-w-screen-2xl mx-auto lg:w-full rounded-3xl bg-[#EBEBEB] lg:bg-white max-h-[480px] lg:max-h-fit">
      {/* Mobile Screens */}
      <div className="flex flex-col max-w-xs w-full lg:hidden h-fit">
        {/* Description Container */}
        <div className="flex flex-col justify-center items-center gap-3 self-stretch p-6">
          <h3 className="self-stretch text-[#191919] font-[Helvetica_Neue] text-[22px] leading-[28px] tracking-[-0.55px]">
            {title}
          </h3>
          <p
            className="self-stretch text-[#7E7E7E] font-[Helvetica_Neue] text-[17px] leading-[22px] tracking-[-0.408px]"
            style={{ fontFeatureSettings: "'case' on" }}
          >
            {caption}
          </p>
        </div>

        {/* Video Container */}
        <div className="flex items-center gap-2.5 self-stretch px-[51px] rounded-3xl border-[0.704px] border-gray-200 border-solid bg-white">
          <div className="flex items-center justify-center w-full">
            {children || (
              <div className="h-40 w-full bg-gray-200 rounded-2xl" />
            )}
          </div>
        </div>
      </div>

      {/* Desktop Screens */}
      <div className="invisible lg:visible w-full relative">
        {/* Video Container */}
        <div className="flex items-center justify-center max-w-xs mx-auto w-full">
          {children || <div className="h-40 w-full bg-gray-200 rounded-2xl" />}
        </div>

        {/* Description Container */}
        <div
          className={`flex flex-col justify-center items-center gap-3 absolute top-1/2 transform -translate-y-1/2 ${
            isEven ? "left-[5%]" : "right-[5%]"
          }`}
        >
          <h3 className="self-stretch text-[#191919] font-[Helvetica_Neue] text-[22px] leading-[28px] tracking-[-0.55px]">
            {title}
          </h3>
          <p
            className="self-stretch text-[#7E7E7E] font-[Helvetica_Neue] text-[17px] leading-[22px] tracking-[-0.408px]"
            style={{ fontFeatureSettings: "'case' on" }}
          >
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};
