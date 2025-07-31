"use client";
import Image from "next/image";
import { motion } from "framer-motion";



const GalleryPage = () => {
  return (
    <div className="relative w-full h-[820px] bg-gray-100 mt-[100px]">
      <motion.div
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
      
      <div className="flex flex-col items-center">
        
        <p
          className="
        font-gotham
        font-bold
        text-2xl
        leading-[20px]
        tracking-normal
        text-center
        uppercase mt-[60px]"
        >
          Gallery
        </p>
        <br />
        
        <p
          className="
        font-gotham
        font-black
        text-[70px]
        leading-[70px]
        tracking-normal
        text-center
        uppercase
        text-[#94A82F]
      "
        >
          Defined by Trust
        </p>
      </div>
      <div className="w-full h-[600px] flex flex-row items-start mt-[30px]">
        <div className="w-[130px] h-[560px] ">
          <Image
            src="/gallery/left.png"
            alt="left"
            width={120}
            height={50}
            className="mt-[56px]"
          ></Image>
          <div className="bg-[#94A82F] w-[120px] h-[200px] rounded-tr-[20px] rounded-br-[20px] mt-[17px]"></div>
        </div>

        <div className="w-[260px] h-[560px] ">
          <Image
            src="/gallery/image (1).png"
            alt="image1"
            width={210}
            height={100}
            className="ml-[15px]"
          ></Image>

          <Image
            src="/gallery/image (2).png"
            alt="image"
            width={210}
            height={10}
            className="ml-[15px] mt-[4px]"
          ></Image>
        </div>

        <div className="w-[260px] h-[560px] ">
          <Image
            src="/gallery/image (3).png"
            alt="image"
            width={215}
            height={10}
            className="ml-[16px] mt-[60px]"
          ></Image>
        </div>

        <div className="w-[260px] h-[560px] ">
          <Image
            src="/gallery/image (4).png"
            alt="image4"
            width={215}
            height={10}
            className="ml-[20px] mt-[90px]"
          ></Image>
        </div>

        <div className="w-[260px] h-[560px] ">
          <Image
            src="/gallery/image (5).png"
            alt="image5"
            width={215}
            height={10}
            className="mt-[50px] ml-[18px]"
          ></Image>
          <Image
            src="/gallery/image (10).png"
            alt="image10"
            width={215}
            height={10}
            className="mt-[28px] ml-[18px]"
          ></Image>
        </div>

        <div className="w-[260px] h-[560px] ">
          <div className="bg-[#94A82F] w-[230px] h-[100px] rounded-3xl ml-[10px] mt-[25px]"></div>
          <Image
            src="/gallery/image (6).png"
            alt="image6"
            width={230}
            height={10}
            className="mt-[28px] ml-[10px]"
          ></Image>
        </div>

        <div className="w-[130px] h-[560px] flex flex-col items-end">
          <Image
            src="/gallery/image (8).png"
            alt="image8"
            width={110}
            height={10}
            className=""
          ></Image>
          <Image
            src="/gallery/image (9).png"
            alt="image9"
            width={121}
            height={10}
            className=""
          ></Image>
        </div>
      </div>
      {/* Bottom gradient rectangle */}
<div
    className="absolute bottom-0 left-0 w-full h-[369px]"
    style={{
      background:
        "linear-gradient(180deg, rgba(243, 243, 243, 0) 0%, rgba(243, 243, 243, 0.887297) 69.06%, #F3F3F3 100%)",
    }}
  ></div>
  </motion.div>
    </div>
  );
};

export default GalleryPage;
