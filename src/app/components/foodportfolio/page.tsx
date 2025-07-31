"use client";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const FoodPortfoliopage = () => {
  return (
    // Outer wrapper for full viewport height and vertical flex column
    <div className="flex flex-col min-h-screen justify-between bg-gray-100 px-6 mt-25">
      
      {/* Your original container unchanged */}
      <div className="flex w-full justify-center h-230">
        <div className="flex flex-col items-center justify-items-start w-400 h-230 px-6 py-3 rounded-md">
          <motion.div
            initial={{ opacity: 0, y: -90, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="font-gotham font-black text-[90px] leading-[90px] tracking-[0] text-center uppercase text-[#94A82F] mt-13">
              FOOD PORTFOLIO
            </p>
            <br />
            <p className="font-gotham font-normal text-[18px] leading-[26px] tracking-[0] text-center text-[#1B1B1B]">
              From fine cheeses to premium deli meats and fresh seafood, our
              curated food portfolio <br /> delivers quality and flavor trusted by
              industry-leading brands and chefs alike.
            </p>
          </motion.div>

          <div className="relative flex justify-start items-center  w-full h-[500px] ">
            <motion.div
              initial={{ opacity: 0, x: -90, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Image Wrapper with Positioned Icon */}
              <div className="relative w-[480px] h-[400px] rounded-[50px]  ml-20">
                <div className="absolute top-4 right-4 bg-white rounded-full p-1 z-10">
                  <GoArrowUpRight
                    className="text-black hover:scale-110 transition-transform duration-200"
                    size={30}
                  />
                </div>

                {/* Optional Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-start justify-center z-10 mt-50 ml-8">
                  <p className="font-gotham font-black text-[35px] leading-[58px] tracking-[0] uppercase text-[#FFFFFF]">
                    Cheese & More
                  </p>
                  <p className="font-gotham font-normal text-[18px] leading-[26px] tracking-[0] text-[#A0A0A0] mt-2 mb-10">
                    Indulge in the finest selection of cheeses and butter from
                    Europe’s most renowned dairy regions.
                  </p>
                </div>

                <div className="flex flex-row justify-start gap-13 absolute  bottom-1 left-4 w-[400px] h-[45px] opacity-50 rotate-0  rounded-md z-10 ml-4  ">
                  <Image
                    src="/foodportfolio/iconcarrfour.png"
                    alt="Small icon"
                    width={50}
                    height={50}
                    className="mix-blend-multiply"
                  />
                  <Image
                    src="/foodportfolio/iconelegnace.png"
                    alt="Small icon"
                    width={50}
                    height={50}
                    className=" mix-blend-multiply"
                  />
                  <Image
                    src="/foodportfolio/iconhilton.png"
                    alt="Small icon"
                    width={50}
                    height={50}
                    className="mix-blend-multiply"
                  />
                  <Image
                    src="/foodportfolio/iconyemek.png"
                    alt="Small icon"
                    width={50}
                    height={50}
                    className="mix-blend-multiply"
                  />
                </div>
                {/* Image itself */}
                <Link href="/somepage">
                  <Image
                    src="/foodportfolio/cheeseportfolio.jpg"
                    alt="cheese-picture"
                    width={550}
                    height={500}
                    className="rounded-4xl brightness-70"
                  />
                </Link>
              </div>
            </motion.div>

            <div className="flex flex-col justify-center items-center">
              <div className="w-[420px] h-[180px] mt-10 mr-5">
                <motion.div
                  initial={{ opacity: 0, y: -90, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="absolute bg-white rounded-full p-1 z-10 ml-34 mt-3">
                    <GoArrowUpRight
                      className="text-black hover:scale-110 transition-transform duration-200"
                      size={30}
                    />
                  </div>

                  <div className="flex gap-[10px] flex-row flex-nowrap justify-center items-start mr-12">
                    {/* SEAFOOD CARD */}
                    <div className="relative w-[250px] h-[210px] ml-4">
                      <div className="font-gotham font-black text-[25px] leading-[58px] tracking-[0] absolute uppercase text-white z-10 mt-17 ml-5">
                        SEAFOOD
                      </div>

                      <div className="flex flex-row justify-start gap-8 absolute bottom-4 left-4 w-[400px] h-[45px] opacity-50 rotate-0 rounded-md z-10 mb-6 ml-2">
                        <Image
                          src="/foodportfolio/iconcarrfour.png"
                          alt="Small icon"
                          width={50}
                          height={50}
                          className="mix-blend-multiply"
                        />
                        <Image
                          src="/foodportfolio/iconhilton.png"
                          alt="Small icon"
                          width={50}
                          height={50}
                          className="mix-blend-multiply"
                        />
                      </div>

                      <Link href="/somepage">
                        <Image
                          src="/foodportfolio/seafoodportfolio.jpg"
                          alt="seafood-picture"
                          width={220}
                          height={140}
                          className="rounded-4xl brightness-70 mr-5"
                        />
                      </Link>
                    </div>

                    {/* OILS CARD */}
                    <div className="w-[260px] h-[100px]">
                      <div className="font-gotham font-black text-[25px] leading-[58px] tracking-[0] absolute uppercase text-white z-10 mt-18 ml-17">
                        oils
                      </div>

                      <div className="absolute bg-white rounded-full p-1 z-10 ml-44 mt-3">
                        <GoArrowUpRight
                          className="text-black hover:scale-110 transition-transform duration-200"
                          size={30}
                        />
                      </div>

                      <div className="flex flex-row justify-start gap-8 absolute w-[400px] h-[45px] opacity-50 rotate-0 rounded-md z-10 ml-18 mt-30">
                        <Image
                          src="/foodportfolio/iconcarrfour.png"
                          alt="Small icon"
                          width={50}
                          height={50}
                          className="mix-blend-multiply"
                        />
                        <Image
                          src="/foodportfolio/iconhilton.png"
                          alt="Small icon"
                          width={50}
                          height={50}
                          className="mix-blend-multiply"
                        />
                      </div>

                      <Link href="/somepage">
                        <Image
                          src="/foodportfolio/oilsportfolio.jpg"
                          alt="oil-picture"
                          width={208}
                          height={160}
                          className="rounded-4xl ml-12 brightness-70"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="w-[430px] h-[220px] ml-2 mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 90, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="absolute  bg-white rounded-full p-1 z-10 ml-94 mt-3">
                    <GoArrowUpRight
                      className="text-black hover:scale-110 transition-transform duration-200"
                      size={30}
                    />
                  </div>
                  <div className="font-gotham font-black text-[25px] leading-[58px] tracking-[0]  absolute uppercase text-white z-10 mt-22 ml-12   ">
                    deli
                  </div>
                  <div className="flex flex-row justify-start gap-13 absolute w-[400px] h-[45px] opacity-50 rotate-0  rounded-md z-10 ml-12 mt-35">
                    <Image
                      src="/foodportfolio/iconcarrfour.png"
                      alt="Small icon"
                      width={50}
                      height={50}
                      className="mix-blend-multiply"
                    />
                    <Image
                      src="/foodportfolio/iconelegnace.png"
                      alt="Small icon"
                      width={50}
                      height={50}
                      className=" mix-blend-multiply"
                    />
                    <Image
                      src="/foodportfolio/iconhilton.png"
                      alt="Small icon"
                      width={50}
                      height={50}
                      className="mix-blend-multiply"
                    />
                    <Image
                      src="/foodportfolio/iconyemek.png"
                      alt="Small icon"
                      width={50}
                      height={50}
                      className="mix-blend-multiply"
                    />
                  </div>
                  <div className="">
                    <Link href="/somepage">
                      <Image
                        src="/foodportfolio/deliportfolio.jpg"
                        alt="deli-picture"
                        width={425}
                        height={100}
                        className="rounded-4xl   brightness-70"
                      />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-row justify-end ">
              <motion.div
                initial={{ opacity: 0, x: 90, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 1.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="w-[300px] h-[300px] mt-[60px]  flex items-center justify-center ">
                  <div className="h-111 mb-5 ">
                    <div className="font-gotham font-black text-[25px] leading-[58px] tracking-[0]  absolute uppercase text-white z-10 mt-75 ml-13   ">
                      meat
                    </div>
                    <div className="absolute  bg-white rounded-full p-1 z-10 ml-62 mt-3">
                      <GoArrowUpRight
                        className="text-black hover:scale-110 transition-transform duration-200"
                        size={30}
                      />
                    </div>
                    <div className="flex flex-row justify-start gap-8 absolute   w-[400px] h-[45px] opacity-50 rotate-0  rounded-md z-10 ml-13 mt-90 ">
                      <Image
                        src="/foodportfolio/iconcarrfour.png"
                        alt="Small icon"
                        width={50}
                        height={50}
                        className="mix-blend-multiply"
                      />

                      <Image
                        src="/foodportfolio/iconhilton.png"
                        alt="Small icon"
                        width={50}
                        height={50}
                        className="mix-blend-multiply"
                      />
                    </div>
                    <Link href="/somepage">
                      <Image
                        src="/foodportfolio/meatportfolio.png"
                        alt="meat-picture"
                        width={100}
                        height={100}
                        style={{
                          height: "100%",
                          width: "390px",
                          objectFit: "cover",
                        }}
                        className="rounded-4xl brightness-70"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* The centered button at the bottom */}
   <button className="group mx-auto w-[271px] h-[72px] border border-[#0000001A] rounded-[38px] py-[4px] gap-[10px] backdrop-blur-[64px] transition-all duration-1000 ease-in-out hover:bg-black flex items-center justify-between -mt-35">
  <span className="text-black group-hover:text-white font-gotham font-extrabold text-[16px] px-[13px]">
    View All Categories
  </span>
  <BsArrowUpRightCircleFill className="text-[#94A82F] text-[55px] mr-[5px]" />
</button>



    </div>
  );
};

export default FoodPortfoliopage;
