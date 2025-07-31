"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const Trustpage = () => {
  const counterRef = useRef(null); // Counter box

  // In-view animation for image section
  const { ref: imageSectionRef, inView: isImageInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [years, setYears] = useState(0);
  const [locations, setLocations] = useState(0);
  const [industries, setIndustries] = useState(0);
  const [clients, setClients] = useState(0);

  // Observe when counters are visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate counters
  useEffect(() => {
  if (!isVisible) return;

  const duration = 2000; // Total animation time
  const steps = 850;     // Total steps for all counters
  const intervalTime = duration / steps;

  const animateCounter = (end: number, setter: (val: number) => void) => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const value = Math.round(end * progress);
      setter(value);

      if (step >= steps) {
        setter(end); // Ensure it's exact at the end
        clearInterval(interval);
      }
    }, intervalTime);
  };

  animateCounter(24, setYears);
  animateCounter(3, setLocations);
  animateCounter(14, setIndustries);
  animateCounter(1000, setClients);
}, [isVisible]);


  return (
    
      <div className="flex flex-row w-full h-screen">
        <motion.div
      ref={imageSectionRef}
      initial={{ opacity: 0, y: -100 }}
      animate={isImageInView ? { opacity: 1, y: 0 } : {}}
      transition={{delay:1.3, duration: 1 }}
      className="flex flex-col ml-30 mt-25 items-center w-[600px] h-160 py-5"
    >
      <div className="mt-10  ">
        <p className="font-gotham font-bold text-[25px] leading-[10px] tracking-normal uppercase">
          Driven by Quality,
        </p>
        <p className="font-gotham font-black text-[50px] mt-10 leading-[10px] tracking-normal uppercase text-[#94A82F]">
          defined
        </p>
        <p className="font-gotham font-black text-[50px] leading-[90px] tracking-normal uppercase text-[#94A82F]">
          by trust
        </p>
        <p className="font-gotham font-normal text-[15px] leading-[20px] tracking-normal text-[#848484] mt-2">
          With decades of experience, Fahed Foods is a leading <br />
          distributor of globally recognized brands, bringing quality <br />
          and consistency to every table.
        </p>
      </div>

      <div ref={counterRef} className="w-[300px] h-auto mt-[10px] p-4 rounded-xl ">
        <div className="flex flex-row gap-10 p-4">
          {/* Years */}
          <div className="flex flex-col items-center justify-center bg-white text-center rounded p-2 w-[80px] h-[80px]">
            <span className="font-gotham font-black text-[40px] leading-[50px] mr-7 tracking-normal uppercase ">{years}</span>
            <span className="font-gotham font-normal text-[18px] leading-[18px] mr-8 tracking-normal">Years</span>
          </div>

          {/* Locations */}
          <div className="flex flex-col items-center justify-center bg-white text-center rounded p-2 w-[80px] h-[80px]">
            <span className="font-gotham font-black text-[40px] leading-[50px] mr-13 tracking-normal uppercase">{locations}</span>
            <span className="font-gotham font-normal text-[18px] leading-[18px] mr-2 tracking-normal">Locations</span>
          </div>
        </div>

        <div className="flex flex-row  gap-10 p-4  ">
          {/* Industries */}
          <div className="flex flex-col items-center justify-center bg-white text-center rounded p-2 w-[80px] h-[80px]">
            <span className="font-gotham font-black text-[40px] leading-[50px] mr-8 tracking-normal uppercase ">{industries}</span>
            <span className="font-gotham font-normal text-[18px] leading-[18px] mr-1.5 tracking-normal">Industries</span>
          </div>

          {/* Clients */}
          <div className="flex flex-col items-center justify-center bg-white text-center rounded p- w-[80px] h-[80px]">
            <span className="font-gotham font-black text-[40px] leading-[50px] -mr-10 tracking-normal uppercase ">{clients}+</span>
            <span className="font-gotham font-normal text-[18px] leading-[18px] mr-6 tracking-normal">Clients</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
  <Link href="/">
  <button className="group flex items-center justify-between w-[200px] h-[72px] border border-[#0000001A] rounded-[38px] py-[4px] px-[13px] gap-[10px] backdrop-blur-[64px] bg-white hover:bg-black transition-all duration-1000 ease-in-out mr-[20px]">
    <span className="font-gotham font-extrabold text-[16px] text-black group-hover:text-white transition duration-300">
      Learn More
    </span>
    <BsArrowUpRightCircleFill className="text-[#94A82F] text-[55px]" />
  </button>
</Link>


</div>
    </motion.div>
<div className="overflow-hidden w-full">
        <motion.div
  ref={imageSectionRef}
  initial={{ opacity: 0, x: 200 }}
  animate={isImageInView ? { opacity: 1.5, x: 0 } : {}}
  transition={{ delay: 1.3, duration: 2, ease: "easeOut" }}
  className="flex flex-row justify-between items-start mt-[80px]  w-full"
>
  {/* Left Box with Images */}
  <div className="w-[450px] h-140  ml-40 mt-15 ">
    <Link href="/some-page">
      <Image
        src="/trustpic/one.png"
        alt="Trust Image 1"
        width={500}
        height={200}
        className="rounded-[32px]"
      />
    </Link>
    <Link href="/some-page">
      <Image
        src="/trustpic/two.png"
        alt="Trust Image 2"
        width={500}
        height={200}
        className="mt-10 rounded-[32px]"
      />
    </Link>
  </div>

  {/* Right Box with Third Image */}
  <div className="w-[320px] h-140 flex items-center justify-center-safe rounded-[32px]  mt-15">
    <Link href="/some-page">
      <Image
        src="/trustpic/three.png"
        alt="Trust Image 3"
        width={320}
        height={100}
        className=" rounded-[32px]"
      />
    </Link>
  </div>
</motion.div></div>



      </div>
    
  );
};

export default Trustpage;
