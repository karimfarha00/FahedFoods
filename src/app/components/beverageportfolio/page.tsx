"use client";
import styles from "./beverage.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const BeveragePortfolioPage = () => {
  return (
   <section id="beverageportfolio">
    <div
      className="relative h-[800px] w-full overflow-x-hidden rounded-t-4xl flex flex-col justify-end items-center mt-15"
      style={{ background: "rgba(27, 27, 27, 1)" }}
    >
      {/* Top Content Section */}
      <div className="flex flex-col items-center w-[400px] h-[230px] px-6 py-3 rounded-md mt-25">
        <motion.div
          initial={{ opacity: 0, y: -90, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.1, duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="font-gotham font-black text-[55px] leading-[30px] tracking-[0] text-center uppercase text-[#94A82F]  w-[900px]">
            Beverage Portfolio
          </p>
          <br />
          <p className="font-gotham font-normal text-[13px] leading-[26px] tracking-[0] text-center text-[#FFFFFF]">
            Explore our diverse range of beverages — from sparkling water to
            gourmet juices crafted
            <br />
            to satisfy every taste and elevate any dining experience.
          </p>
        </motion.div>
      </div>

      {/* Shape (if visual background element) */}
      <div className={styles.shape1}></div>

      <div className="w-[1150px] h-[800px] flex justify-center items-center px-[30px] pb-[150px]">
        {/* Left Side (existing content) */}
        <div className="flex flex-col gap-x-2">
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2.1, duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex gap-[20px] mt-[25px]">
              <section id="eira">
              {/* First Card with image on the right */}
              <div
                className="relative w-[250px] h-[170px] rounded-[20px] overflow-hidden"
                style={{
                  background: `linear-gradient(304deg, rgba(10, 10, 12, 0) 74.57%, #0A0A0C 78.97%), 
                 linear-gradient(180deg, rgba(0, 0, 0, 0) 25.5%, rgba(0, 0, 0, 0.893667) 81.38%, rgba(0, 0, 0, 0.9) 100%)`,
                }}
              >
                <div className="relative w-[250px] h-[170px]">
                  {/* Fixed Text - EIRA */}
                  <h2 className="absolute bottom-[30px] left-[20px] text-white text-[22px] font-semibold drop-shadow-md z-20">
                    EIRA
                  </h2>
                  <div className="absolute  bg-white rounded-full p-1 z-10 ml-50 mt-3">
                    <GoArrowUpRight
                      className="text-black hover:scale-110 transition-transform duration-200"
                      size={30}
                    />
                  </div>

                  {/* Animated full-size Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 3.2, duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src="/beverageportfolio/eira-left.png"
                      alt="EIRA"
                      fill
                      className="object-cover rounded-[20px]" // You can use object-contain if needed
                    />
                  </motion.div>
                </div>
              </div>
              </section>


              {/* Second card for spacing/demo */}
              <div
                className="w-[250px] h-[170px] rounded-[20px] overflow-hidden"
                style={{
                  background: `linear-gradient(304deg, rgba(10, 10, 12, 0) 74.57%, #0A0A0C 78.97%), 
                 linear-gradient(180deg, rgba(0, 0, 0, 0) 25.5%, rgba(0, 0, 0, 0.893667) 81.38%, rgba(0, 0, 0, 0.9) 100%)`,
                }}
              >
                <div className="relative w-[250px] h-[170px]">
                  {/* Fixed Text - PERRIER */}
                  <h2 className="absolute bottom-[30px] left-[20px] text-white text-[22px] font-semibold drop-shadow-md z-20">
                    PERRIER
                  </h2>
                  <div className="absolute  bg-white rounded-full p-1 z-10 ml-50 mt-3">
                    <GoArrowUpRight
                      className="text-black hover:scale-110 transition-transform duration-200"
                      size={30}
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 3.2, duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative w-[250px] h-[170px]" // Make sure the container has space
                  >
                    <div className="absolute  bg-white rounded-full p-1 z-10 ml-50 mt-3">
                      <GoArrowUpRight
                        className="text-black hover:scale-110 transition-transform duration-200"
                        size={30}
                      />
                    </div>
                    <Image
                      src="/beverageportfolio/perrier-right.png"
                      alt="perrier-right"
                      width={250}
                      height={110}
                      className="absolute right-[1px] top-[55%] translate-y-[-50%] object-contain"
                    />
                  </motion.div>
                </div>
              </div>
              
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -200, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 2.1, duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          ><section id="timhortons">
            <div className="flex gap-[20px] mt-[20px]">
              <div
                className="w-[520px] h-[200px] rounded-[20px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0) 9%, rgba(0, 0, 0, 0.893667) 95.45%, rgba(0, 0, 0, 0.9) 100%)",
                }}
              >
                <div className="absolute  bg-white rounded-full p-1 z-10 ml-118 mt-3">
                  <GoArrowUpRight
                    className="text-black hover:scale-110 transition-transform duration-200"
                    size={30}
                  />
                </div>

                <div className="flex justify-between items-center">
                  {/* FIXED TEXT - OUTSIDE motion.div */}
                  <h2 className="text-white text-[22px] font-semibold drop-shadow-md ml-8 mt-25">
                    TIM HORTONS
                  </h2>

                  {/* ANIMATED IMAGES */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 3.2, duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative w-[250px] h-[170px] "
                  >
                    <Image
                      src="/beverageportfolio/tim-left.png"
                      alt="tim-left"
                      width={155}
                      height={110}
                      className="absolute left-[-12px] top-[56%] translate-y-[-50%] object-contain"
                    />

                    <Image
                      src="/beverageportfolio/tim-right.png"
                      alt="tim-right"
                      width={200}
                      height={110}
                      className="absolute left-[-4px] top-[59%] translate-y-[-50%] object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
         </section> </motion.div>
         
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 200, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 2.1, duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        ><section id="maisonperrier">
         
          <div className="absolute  bg-white rounded-full p-1 z-10 ml-93 mt-10">
            <GoArrowUpRight
              className="text-black hover:scale-110 transition-transform duration-200"
              size={30}
            />
          </div>
          <div
            className="w-[400px] h-[390px] flex justify-center items-end rounded-[20px] overflow-hidden ml-5 mt-8 relative"
            style={{
              background: `
      linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 9%,
        rgba(0, 0, 0, 0.893667) 95.45%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      rgba(14, 14, 14, 1)
    `,
            }}
          >
            {/* Absolute positioning for all three inside relative parent */}

            <div className="relative w-[420px] h-[320px] rounded-[20px] overflow-hidden bg-black">
              {/* LEFT IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 3.2, duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="absolute left-1/2 top-1/2 translate-x-[-155px] translate-y-[-127%] w-[190px] h-[110px] z-10"
              >
                <Image
                  src="/beverageportfolio/left.png"
                  alt="left"
                  width={190}
                  height={110}
                  className="object-contain brightness-90"
                />
              </motion.div>

              {/* CENTER IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 3.2, duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-93%] w-[300px] h-[200px] z-20"
              >
                <Image
                  src="/beverageportfolio/center.png"
                  alt="center"
                  width={300}
                  height={200}
                  className="object-contain brightness-95"
                />
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 3.2, duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="absolute right-1/2 top-1/2 translate-x-[190px] translate-y-[-127%] w-[180px] h-[110px] z-10"
              >
                <Image
                  src="/beverageportfolio/right.png"
                  alt="right"
                  width={180}
                  height={110}
                  className="object-contain brightness-90"
                />
              </motion.div>

              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-30" />

              {/* TEXT BOTTOM LEFT */}
              <div className="absolute bottom-4 left-4 z-40 text-white mb-3">
                <h2 className="text-[25px] leading-[8px] font-black uppercase font-gotham text-[#FBFBFB] px-2 py-1 rounded">
                  MAISON PERRIER
                </h2>
                <p className="text-[11px] leading-[15px] font-normal font-gotham  text-[#C1C1C1] px-3 py-2 rounded w-[400px] mt-2">
                  We supply the finest selection of still and sparkling water
                  from around the world, choosing the top brands.
                </p>
              </div>
              {/* The centered button at the bottom */}
            </div>
          </div>
     </section>
   </motion.div>

      </div>
       <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
 {/* The centered button at the bottom */}
   <button className="group mx-auto w-[271px] h-[72px] border border-[#4b5563] rounded-[38px] py-[4px] gap-[10px] backdrop-blur-[64px] transition-all duration-1000 ease-in-out hover:bg-white flex items-center justify-between -mt-25">
  <span className="text-white group-hover:text-black font-gotham font-extrabold text-[16px] px-[13px]">
    View All Categories
  </span>
  <BsArrowUpRightCircleFill className="text-[#94A82F] text-[55px] mr-[5px]" />
</button>

      </motion.div>   
    </div>
    </section>
  );
};

export default BeveragePortfolioPage;
