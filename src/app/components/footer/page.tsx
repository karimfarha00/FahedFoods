"use client";
import Image from "next/image";
import Link from "next/link";


const FooterPage = () => {
  return (
   
   
   <div className="w-full h-[600px]  bg-black rounded-tl-[70px] rounded-tr-[70px]">
      <div className="flex justify-center items-center w-[400px] h-[250px]  ml-[90px]">
        <Image
          src="/fahed-foods-logo.png"
          alt="LOGO"
          width={300}
          height={200}
          className="mt-[40px]"
        ></Image>
      </div>

      <div className="flex justify-evenly items-start w-full h-[200px]  ">
        <div className="flex flex-col gap-y-[20px]">
          <Link
            href={``}
            className="
    font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#94A82F]
  "
          >
            Home
          </Link>

          <Link
            className="font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#eaeaea]"
            href={``}
          >
            FoodPortfolio
          </Link>
          <Link
            className="font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#eaeaea]"
            href={``}
          >
            BeveragePortfolio
          </Link>
          <Link
            className="font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#eaeaea]"
            href={``}
          >
            About
          </Link>
         
          <Link
            className="font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#eaeaea]"
            href={``}
          >
            Careers
          </Link>
        </div>

        <div className="flex flex-col gap-y-[20px]">
            <Link
            href={``}
            className="
    font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#94A82F]
  "
          >
            Terms
          </Link>

          <Link
            className="font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#eaeaea]"
            href={``}
          >
            Privacy Policy
          </Link>
           <Link
            className="font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#eaeaea]"
            href={``}
          >
            Terms & Conditions
          </Link>
        </div>

         <div className="flex flex-col gap-y-[20px]">
            <Link
            href={``}
            className="
    font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#94A82F]
  "
          >
            Contact us
          </Link>

          <Link
            className="font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#eaeaea]"
            href={``}
          >
            +974 4405 2777
          </Link>
           <Link
  href={``}
  className="font-[Gotham] font-normal text-[18px] leading-[150%] tracking-[0%] text-[#eaeaea] w-[300px] block"
>
  Street 318, Bldg. No. 23, Zone 69 Manarat Lusail, Office 801, P.O. Box 5780
</Link>

           <Link
            className="font-[Gotham]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[0%]
    text-[#eaeaea]"
            href={``}
          > 
          info@fahedfoods.com
           
          </Link>
         
        </div>
        <div className="flex flex-col w-[400px] h-[200px] ">
           <p className="font-[Gotham] font-bold text-[28px] leading-[100%] tracking-[0%] text-[#eaeaea]">
  Stay Updated!
</p>
<form className="flex items-center bg-[#1B1B1B] rounded-full w-fit overflow-hidden mt-[10px]">
  <input
    type="email"
    placeholder="Enter your Email"
    className="bg-transparent text-white placeholder-gray-400 px-5 py-3 w-[250px] outline-none"
    required
  />
  <button
    type="submit"
    className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
  >
    Subscribe
  </button>
</form>

        </div>
      </div>
     <div className="flex justify-center my-8">
  <div className="h-[0.5px] w-[1300px] bg-[#eaeaea]"></div>
</div>
  <div className="flex flex-row justify-between items-start w-[1420px] h-[50px]  -mt-[15px]">
       <div className="">
       <p className="font-[Gotham] font-normal text-[18px] leading-[20px] tracking-[0%] text-[#eaeaea] px-[110px] ">
  Fahed Foods W.L.L © , all rights reserved, 2025
</p></div>


<div className=" flex flex-row gap-x-[12px] "> 
    <Link href="/your-target-url" >
  <Image
    src="/footer/Frame4.png"
    alt="FACEBOOK"
    width={40}
    height={10}
   
  />
</Link>
    <Link href="/your-target-url" >
  <Image
    src="/footer/Frame3.png"
    alt="INSTAGRAM"
    width={40}
    height={10}
   
  />
</Link>
 

      <Link href="/your-target-url">
  <Image
    src="/footer/Frame1.png"
    alt="LINKEDIN"
    width={40}
    height={10}
    
  />
</Link>
 <Link href="/your-target-url" >
  <Image
    src="/footer/Frame2.png"
    alt="X"
    width={40}
    height={10}
    className=""
  />
</Link>
 
       </div>
  </div>
    </div>
  );
};

export default FooterPage;
