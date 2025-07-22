"use client";
import Image from "next/image";

const UpdatesPage = () => {
  return (
   <div className="w-full h-[500px] mt-[20px] bg-amber-300 overflow-x-auto scrollbar-hide">
      <div className="flex flex-nowrap items-start px-[20px] space-x-[60px]">
        {/* CARD START */}
        <div className="min-w-[350px] h-[400px] rounded-[41px] bg-[rgba(243,243,243,1)] p-[20px] flex flex-col items-start">
          <Image
            src="/blogs/image1.png"
            alt="image1"
            width={350}
            height={200}
            className=" rounded-[20px]"
          />
          <div className="w-full mt-[10px]">
            <p className="font-gotham font-bold text-[18px] leading-[24px] tracking-[-0.02em] text-[#94A82F]">
              10 May 2025
            </p>
            <p className="font-gotham font-bold text-[14px] leading-[22px] tracking-[-0.02em] text-[rgba(27,27,27,1)] ">
              Serving the Region: Fahed Foods’ Role in Qatar’s HORECA Growth
            </p>
            <p className="line-clamp-4 text-[12px] text-gray-700 ">
              An in-depth article exploring the sourcing process...
            </p>
          </div>
        </div>
        {/* CARD END */}

        {/* Repeat your other cards below with same structure */}
        
      </div>
    </div>
  );
};

export default UpdatesPage;
