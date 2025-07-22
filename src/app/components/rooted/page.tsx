"use client";
import Image from 'next/image';
import { motion } from "framer-motion";


const RootedPage = () => {
  return (
    
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-start w-full max-w-[500px] px-4 md:ml-[135px] mt-[80px]">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className="font-[Gotham] font-bold text-[30px] leading-[30px] uppercase text-[#1B1B1B]">
            SUSTAINABILITY
          </h2>
          <h1 className="font-[Gotham] font-black text-[90px] leading-[90px] uppercase text-[#94A82F] mt-2">
            ROOTED IN <br /> RESPONSIBILITY
          </h1>
        </motion.div>
      </div>

      {/* Root Section */}
      <div className="w-full flex justify-center items-start  px-4 md:px-0">
        <div className="w-full max-w-[1450px] h-auto flex flex-wrap justify-center items-end md:-mt-[40px]">
          
          {/* Left Images */}
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col justify-end items-end space-y-[-50px] pr-4 md:pr-0"
          >
            <Image
              src="/root/tree.png"
              alt="Tree"
              width={500}
              height={200}
              className="ml-[100px] max-w-full h-auto"
            />
            <Image
              src="/root/grass.png"
              alt="Grass"
              width={440}
              height={200}
              className="mr-[55px] mt-[10px] max-w-full h-auto"
            />
          </motion.div>

          {/* Right Content */}
          <div className="flex flex-col w-full max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
            >
              {/* First Row of Cards */}
              <div className="flex flex-wrap justify-end gap-x-[30px] md:gap-x-[60px] mr-[30px] ">
                {/* Card 1 */}
                <div className="w-[250px] min-w-[250px] h-[200px]">
                  <Image
                    src="/root/root-frames/frame1.png"
                    alt="Ethical Sourcing"
                    width={45}
                    height={45}
                    className="py-5"
                  />
                  <p className="font-[Gotham] font-bold text-[20px] leading-[24px] tracking-[-0.04em] mb-2">
                    Ethical Sourcing
                  </p>
                  <p className="font-[Gotham] font-normal text-[13px] leading-[18px] text-[#848484]">
                    We partner only with suppliers who meet rigorous environmental and labor standards—ensuring every product supports fair practices from farm to shelf.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="w-[250px] min-w-[250px] h-[200px]">
                  <Image
                    src="/root/root-frames/frame1.2.png"
                    alt="Waste Reduction"
                    width={45}
                    height={45}
                    className="py-5"
                  />
                  <p className="font-[Gotham] font-bold text-[20px] leading-[24px] tracking-[-0.04em] mb-2">
                    Waste Reduction Initiatives
                  </p>
                  <p className="font-[Gotham] font-normal text-[13px] leading-[18px] text-[#848484]">
                    From warehouse to delivery, we’re cutting down waste by optimizing packaging, minimizing food spoilage, and donating surplus to local charities.
                  </p>
                </div>
              </div>

              {/* Second Row of Cards */}
              <div className="flex flex-wrap justify-end gap-x-[30px] md:gap-x-[60px] mr-[30px] mb-[30px]">
                {/* Card 3 */}
                <div className="w-[250px] min-w-[250px] h-[200px]">
                  <Image
                    src="/root/root-frames/frame2.1.png"
                    alt="Energy Efficient"
                    width={45}
                    height={45}
                    className="py-6"
                  />
                  <p className="font-[Gotham] font-bold text-[20px] leading-[24px] tracking-[-0.04em] mb-2">
                    Energy-Efficient Operations
                  </p>
                  <p className="font-[Gotham] font-normal text-[13px] leading-[18px] text-[#848484]">
                    We’re upgrading to LED lighting, energy-efficient refrigeration, and automation systems in our facilities to reduce energy consumption.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="w-[250px] min-w-[250px] h-[200px]">
                  <Image
                    src="/root/root-frames/frame2.2.png"
                    alt="Sustainable Packaging"
                    width={45}
                    height={45}
                    className="py-6"
                  />
                  <p className="font-[Gotham] font-bold text-[20px] leading-[24px] tracking-[-0.04em] mb-2">
                    Sustainable Packaging
                  </p>
                  <p className="font-[Gotham] font-normal text-[13px] leading-[18px] text-[#848484]">
                    Wherever possible, we use recyclable and biodegradable materials—because sustainability doesn’t stop at delivery.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootedPage;
