"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { GoArrowUpRight } from "react-icons/go";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [currentLangLabel, setCurrentLangLabel] = useState("EN");
  
  const [isBeverageHovered, setIsBeverageHovered] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLang: string) => {
    setCurrentLangLabel(newLang.toUpperCase());
    setOpen(false);
  };
// const [toggle,setToggle] = useState(false);
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div>
        <Image src="/fahed-foods-logo.png" alt="Logo" width={200} height={200} />
      </div>

      {/* Navigation Links */}
      <div className={styles.links}>
        <Link className={styles.namelink} href="/">
          Home
        </Link>

        {/* FoodPortfolio Dropdown */}
        
        <div
  className="relative -mt-[4px]"
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
      
>
  <Link className={styles.namelink} href="#foodportfolio">
    FoodPortfolio
  </Link>

  <AnimatePresence>
    {isOpen && (
      <motion.div
  initial={{ opacity: 0, x: -30, scale: 0.8 }}
  animate={{ opacity: 2, x: 0, scale: 1 }}
  exit={{ opacity: 0, x: 0, scale: 0.8 }}
  transition={{ delay: 0.1, duration: 0.1, ease: "easeOut" }}
  className="absolute top-full left-[-60px] mt-5 w-[180px] text-white z-50 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-b from-white/10 via-white/10 to-black/20 backdrop-blur-md"
>
  {[
    { href: "#cheese-and-more", label: "Cheese & More" },
    { href: "#seafood", label: "SeaFood" },
    { href: "#oils", label: "Oils" },
    { href: "#deli", label: "Deli" },
    { href: "#meat", label: "Meats" },
  ].map(({ href, label }) => (
    <a
      key={href}
      href={href}
      className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors duration-200"
    >
      {label}
      <div className="mx-6 mt-2 h-px bg-gray-600 opacity-40"></div>
    </a>
  ))}
</motion.div>

    )}
  </AnimatePresence>
</div>
        

       {/* BeveragePortfolio Dropdown */}
<div
  className="relative -mt-[4px]"
  onMouseEnter={() => setIsBeverageHovered(true)}
  onMouseLeave={() => setIsBeverageHovered(false)}
>
  <Link className={styles.namelink} href="#beverageportfolio">
    BeveragePortfolio
  </Link>

  <AnimatePresence>
    {isBeverageHovered && (
      <motion.div
  initial={{ opacity: 0, x: -30, scale: 0.8 }}
  animate={{ opacity: 2, x: 0, scale: 1 }}
  exit={{ opacity: 0, x: 0, scale: 0.8 }}
  transition={{ delay: 0.1, duration: 0.1, ease: "easeOut" }}
  className="absolute top-full left-[-60px] mt-5 w-[180px] text-white z-50 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-b from-white/10 via-white/10 to-black/20 backdrop-blur-md"
>
  {[
    { href: "#eira", label: "Eira" },
    { href: "#perrier", label: "Perrier" },
    { href: "#maisonperrier", label: "Maison Perrier" },
    { href: "#timhortons", label: "Tim Hortons" },
    
  ].map(({ href, label }) => (
    <a
      key={href}
      href={href}
      className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors duration-200 "
      
    >
      {label}
      <div className="mx-6 mt-2 h-px bg-gray-600 opacity-40"></div>
    </a>
  ))}
</motion.div>
    )}
  </AnimatePresence>
</div>


        <Link className={styles.namelink} href="#about">
          About
        </Link>
        <Link className={styles.namelink} href="#blogs">
          Blogs
        </Link>
        <Link className={styles.namelink} href="#careers">
          Careers
        </Link>
        <div className={styles.menu}>
          <HiMenuAlt3 />
        </div>
      </div>

      {/* Language Switcher */}
      <div className="relative">
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

        {open && (
          <div className="absolute right-0 mt-2 rounded-2xl w-[95px] bg-white/10 backdrop-blur-[30px] shadow-md overflow-hidden">
            <button
              onClick={() => switchLanguage("EN")}
              className="block w-full text-left px-4 py-2 text-white"
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("AR")}
              className="block w-full text-left px-4 py-2 text-white"
            >
              AR
            </button>
          </div>
        )}
      </div>

      {/* Contact Us Button */}
      <div className={styles.rightdiv}>
        <Link className={`${styles.rightbutton} group`} href="/contact">
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
