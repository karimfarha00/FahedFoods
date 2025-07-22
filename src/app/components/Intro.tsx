"use client";
import Navbar from "./header/Navbar";

import { motion } from "framer-motion";

import Image from "next/image";

export default function Intro() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Black background dropping down from top */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 h-[720px] bg-black z-0 rounded-b-[40px]"
      />

      {/* 2. Navbar fade-in */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-0 left-0 w-full p-4 z-10 text-white text-center text-lg font-bold"
      >
        <Navbar />
      </motion.div>

      {/* 3. Welcome Text */}
      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-[1300px] h-[180px]  absolute top-[290px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center ">
          <p className="font-gotham font-black text-[165px] leading-[214px] tracking-[0] uppercase text-[#94A82F] whitespace-nowrap">
            <span className="mr-[120px] ml-[40px]">F</span>HEDFOODS
          </p>
        </div>
         <p className="font-gotham font-normal text-[23px] text-[#FFFFFF]  absolute top-[390px] left-[237px] capitalize">
      Your trusted partner in premium food
    </p>
    <p className="font-gotham font-normal text-[23px] text-[#FFFFFF]  absolute top-[390px] right-[100px] capitalize">
      And beverage distribution across the region
    </p>
      </motion.h3>

<div className="flex flex-row justify-between items-end-safe">
      {/* 4. Bottle Images */}
      <div className="relative w-[550px] h-screen">
  {/* Wrapped and Positioned Image */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 3.2, duration: 1 }}
    className="absolute left-0 bottom-0 w-[550px] h-[400px] flex justify-start items-end  mb-3"
  >
    <Image
      src="/cheese-left.png"
      alt="cheese"
      width={550}
      height={300}
      className="scale-x-[-1] rounded-br-[32px]"
    />
  </motion.div>
</div>

<div className="relative w-[600px] h-screen">
  {/* Wrapped and Positioned Image */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 3.2, duration: 1 }}
    className="absolute right-0 left-0 w-[500px] h-[400px] flex justify-center items-center mt-72 ml-10"
  >
    <Image
      src="/meat-center.png"
      alt="meat"
      width={500}
      height={300}
      
    />
  </motion.div>
</div>

<div className="relative w-[480px] h-screen">
  {/* Wrapped and Positioned Image */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 3.2, duration: 1 }}
    className="absolute right-0 bottom-0 w-[360px] h-[320px] flex justify-end items-end ml-50 mb-3"
  >
    <Image
      src="/perrier-right.png"
      alt="perrier"
      width={380}
      height={100}
      className="rounded-br-[32px]"
    />
  </motion.div>
</div>
      </div>
    </div>
  );
}
