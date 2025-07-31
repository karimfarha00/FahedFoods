"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { GoArrowUpRight } from "react-icons/go";
import { useParams, usePathname, useRouter } from "next/navigation";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const params = useParams();
  const locale =
    typeof params.locale === "string"
      ? params.locale
      : Array.isArray(params.locale)
      ? params.locale[0]
      : "en";
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    if (!locale || !pathname) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setOpen(false); // Close the menu after switch
  };

  const currentLangLabel = locale === "en" ? "EN" : "العربية";

  return (
    <nav className={styles.navbar}>
      <div>
        <Image
          src="/fahed-foods-logo.png"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.links}>
        <Link className={styles.namelink} href={`/${locale}/`}>
          Home
        </Link>
        <Link className={styles.namelink} href={`/${locale}/food-portfolio`}>
          FoodPortfolio
        </Link>
        <Link
          className={styles.namelink}
          href={`/${locale}/beverage-portfolio`}
        >
          BeveragePortfolio
        </Link>
        <Link className={styles.namelink} href={`/${locale}/about`}>
          About
        </Link>
        <Link className={styles.namelink} href={`/${locale}/blogs`}>
          Blogs
        </Link>
        <Link className={styles.namelink} href={`/${locale}/careers`}>
          Careers
        </Link>
      </div>
      
      
      <div className="relative">
        {/* Button to toggle menu */}
        <div className="flex flex-row items-center justify-center">
    <button
      onClick={() => setOpen(!open)}
      className={`${styles.lanbutton} flex items-center justify-center`}
    >
      <span className="text-sm font-medium">{currentLangLabel}</span>
      {open ? (
        <MdKeyboardArrowUp className="ml-2" size={28} />
      ) : (
        <MdKeyboardArrowDown className="ml-2" size={28} />
      )}
    </button>
  </div>


        {/* Dropdown menu */}
        {open && (
          <div className="absolute right-0 mt-2 rounded-2xl w-[95px] bg-white/10 backdrop-blur-[30px] shadow-md overflow-hidden ">
            <button
              onClick={() => switchLanguage("en")}
              className="block w-full text-left px-4 py-2 text-white"
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("ar")}
              className="block w-full text-left px-4 py-2 text-white"
            >
             AR
            </button>
          </div>
        )}
      </div>
      <div className={styles.rightdiv}>
  <Link
    className={`${styles.rightbutton} group`}
    href={`/${locale}/contact`}
  >
    <span>Contact Us</span>
    <span>
      <GoArrowUpRight
        className="arrow text-white bg-black rounded-full p-2 transition-all duration-300 group-hover:bg-white group-hover:text-black"
        size={50}
      />
    </span>
  </Link>
</div>

      
    </nav>
   
  );
};

export default Navbar;
