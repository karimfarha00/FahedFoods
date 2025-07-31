"use client";
import Image from "next/image";
import { forwardRef } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

type CardData = {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
};

interface UpdatesPageProps {
  cards: CardData[];
}

const UpdatesPage = forwardRef<HTMLDivElement, UpdatesPageProps>(({ cards }, ref) => {
  return (
    <div className="w-full h-[500px] mt-[20px] relative flex flex-col justify-between">
      {/* Scrollable Cards Row */}
      <div
        ref={ref}
        className="flex flex-nowrap overflow-x-auto scrollbar-hide scroll-smooth gap-[20px] px-[60px]"
        style={{ scrollBehavior: "smooth" }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[320px] h-[370px] flex-shrink-0 rounded-[41px] pt-[18px] pr-[20px] pb-[38px] pl-[20px] bg-[rgba(243,243,243,1)] flex flex-col gap-[20px]"
          >
            <Image
              src={card.image}
              alt="image"
              width={320}
              height={250}
              className="rounded-[20px]"
            />
            <div className="w-full">
              <p className="font-gotham font-bold text-[12px] leading-[24px] -mt-[15px] text-[#94A82F]">
                {card.date}
              </p>
              <p className="font-gotham font-bold text-[16px] leading-[22px] text-[rgba(27,27,27,1)]">
                {card.title}
              </p>
              <p className="line-clamp-4 text-[12px] text-gray-700">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT FADE GRADIENT */}
      <div
        className="absolute top-0 right-0 h-full w-[236px] pointer-events-none z-10"
        style={{
          background: "linear-gradient(270deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Centered Button at Bottom */}
      <div className="w-full flex justify-center mt-[20px]">
      <button className="group mx-auto w-[231px] h-[72px] border border-[#0000001A] rounded-[38px] py-[4px] gap-[10px] backdrop-blur-[64px] transition-all duration-1000 ease-in-out hover:bg-black flex items-center justify-between -mt-23">
  <span className="text-black group-hover:text-white font-gotham font-extrabold text-[16px] px-[15px]">
    View All Blogs
  </span>
  <BsArrowUpRightCircleFill className="text-[#94A82F] text-[55px] mr-[5px]" />
</button>
      </div>
    </div>
  );
});

UpdatesPage.displayName = "UpdatesPage";
export default UpdatesPage;
