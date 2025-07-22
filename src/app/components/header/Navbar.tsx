"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { useParams, usePathname, useRouter } from "next/navigation";

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
        <button
          onClick={() => setOpen(!open)}
          className="bg-gray-700 text-white text-sm font-thin px-5  py-1.5 rounded-xl"
        >
          {currentLangLabel} ⌄
        </button>

        {/* Dropdown menu */}
        {open && (
          <div className="absolute right-0 mt-2 rounded-sm  bg-white shadow-md overflow-hidden z-50">
            <button
              onClick={() => switchLanguage("en")}
              className="block w-full text-left px-4 py-2  hover:bg-gray-200 text-black"
            >
              English
            </button>
            <button
              onClick={() => switchLanguage("ar")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
            >
              العربية
            </button>
          </div>
        )}
      </div>
      <div className={styles.rightdiv}>
        <Link className={styles.rightbutton} href={`/${locale}/contact`}>
          Contact Us
          <BiSolidRightTopArrowCircle size={40} />
        </Link>
      </div>
      
    </nav>
   
  );
};

export default Navbar;
