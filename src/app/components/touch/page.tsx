"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const TouchPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div
        className="w-[1100px] h-[600px] bg-white"
        style={{
          borderTopLeftRadius: "500px",
          borderBottomLeftRadius: "500px",
          borderBottomRightRadius: "500px",
          borderTopRightRadius: "9999px",
        }}
      >
        
        
        <div className="flex flex-row w-[1100px] h-[550px] mt-[10px]">
            <div className=" w-[500px] h-[450px]  mt-[50px]"> 
              <motion.div
          initial={{ opacity: 0, x: -200, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >

<div className="px-[20px]">
    <p className="
  font-gotham 
  font-bold 
  text-[30px] 
  leading-[35px] 
  tracking-[-0.02em] 
  uppercase 
  text-[#94A82F]
  px-[8px]
">GET STARTED</p>
    <p className="
  font-gotham 
  font-bold 
  text-[82px] 
  leading-[90px] 
  tracking-[-0.02em] 
  text-[#1B1B1B] 

">Get in touch</p>
  <p className="
  font-gotham 
  font-bold 
  text-[82px] 
  leading-[70px] 
  tracking-[-0.02em] 
  text-[#1B1B1B] 
  px-[12px]

">with us.</p>
</div>

<div className=" w-[500px] h-[284px] ">
<div className=" w-[500px] h-[220px] px-[35px] mt-[30px]">
<form className="flex flex-col gap-y-5">
  {/* Row 1: Full Name & Company */}
  <div className="flex gap-x-[19px]">
    <input
      type="text"
      placeholder="Full Name"
      required
      className="w-[240px] h-[40px] p-[17px] rounded-[12px] border border-[#EBEBEB] opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="text"
      placeholder="Company"
      required
      className="w-[240px] h-[40px] p-[17px] rounded-[12px] border border-[#EBEBEB] opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Row 2: Email & Subject */}
  <div className="flex gap-x-[19px]">
    <input
      type="email"
      placeholder="Email"
      required
      className="w-[240px] h-[40px] p-[17px] rounded-[12px] border border-[#EBEBEB] opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="text"
      placeholder="Subject"
      required
      className="w-[240px] h-[40px] p-[17px] rounded-[12px] border border-[#EBEBEB] opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Row 3: Message */}
  <div>
    <textarea
      placeholder="Message"
      rows={3}
      required
      className="w-[500px] h-[80px] max-w-[500px] max-h-[100px]  p-[17px] rounded-[12px] border border-[#EBEBEB] opacity-100 resize focus:outline-none focus:ring-2 focus:ring-blue-400"
    ></textarea>
  </div>
</form>



</div>
<div className="px-[35px]">
  <button
    className="w-[140px] h-[44px] bg-[#94A82F] text-white font-[700] text-[13px] leading-[20px] tracking-[-0.02em] text-center rounded-[80px] hover:bg-black hover:text-white transition duration-300"
  >
    Submit Message
  </button>
</div>

</div>



            </motion.div> </div>
           
            
            
            
            
            
            
            
            <div className="flex flex-col items-center w-[500px] h-[550px] mt-[10px]">
              <motion.div
          initial={{ opacity: 0, x: 200, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
                <Image
                src="/touch/image.png"
                alt="image"
                width={600}
                height={200}
>
                </Image>
                <div className="
    absolute
    opacity-[0.67]
    -mt-[10px]
    w-[478px]
    h-[91px]
    rotate-0
    bg-[radial-gradient(46.34%_46.34%_at_50%_50%,_#C9C9C9_0%,_rgba(201,201,201,0.4)_54.77%,_rgba(201,201,201,0)_100%)]
  "></div>
           </motion.div> </div>

        </div>
      </div>
    </div>
  );
};

export default TouchPage;
