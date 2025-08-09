"use client";
import { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import UpdatesPage from "./Updates"; // Make sure path is correct

const BlogsPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const cards = [
    {
      id: 1,
      image: "/blogs/image1.png",
      date: "10 May 2025",
      title: "Serving the Region: Fahed Foods’ Role in Qatar’s HORECA Growth",
      description: "An in-depth article exploring the sourcing process behind Fahed Foods’ selection of gourmet items—from selecting producers during international trade fairs to ensuring supply chain quality. Highlights could include sustainability criteria, partnerships with artisanal producers, and product vetting standards.Why it matters: Showcases Fahed’s commitment to quality, builds trust with chefs and restaurant partners, and supports corporate positioning as a thoughtful and reliable gourmet importer.",
    },
    {
      id: 2,
      image: "/blogs/image2.png",
      date: "11 May 2025",
      title: "Sourcing Responsibly: How Fahed Foods Curates its Gourmet Portfolio",
      description: "An in-depth article exploring the sourcing process behind Fahed Foods’ selection of gourmet items—from selecting producers during international trade fairs to ensuring supply chain quality. Highlights could include sustainability criteria, partnerships with artisanal producers, and product vetting standards.Why it matters: Showcases Fahed’s commitment to quality, builds trust with chefs and restaurant partners, and supports corporate positioning as a thoughtful and reliable gourmet importer.",
    },
     {
      id: 3,
      image: "/blogs/image1.png",
      date: "10 May 2025",
      title: "Serving the Region: Fahed Foods’ Role in Qatar’s HORECA Growth",
      description: "An in-depth article exploring the sourcing process behind Fahed Foods’ selection of gourmet items—from selecting producers during international trade fairs to ensuring supply chain quality. Highlights could include sustainability criteria, partnerships with artisanal producers, and product vetting standards.Why it matters: Showcases Fahed’s commitment to quality, builds trust with chefs and restaurant partners, and supports corporate positioning as a thoughtful and reliable gourmet importer.",
    },
    {
      id: 4,
      image: "/blogs/image2.png",
      date: "11 May 2025",
      title: "Sourcing Responsibly: How Fahed Foods Curates its Gourmet Portfolio",
      description: "An in-depth article exploring the sourcing process behind Fahed Foods’ selection of gourmet items—from selecting producers during international trade fairs to ensuring supply chain quality. Highlights could include sustainability criteria, partnerships with artisanal producers, and product vetting standards.Why it matters: Showcases Fahed’s commitment to quality, builds trust with chefs and restaurant partners, and supports corporate positioning as a thoughtful and reliable gourmet importer.",
    },
    {
      id: 5,
      image: "/blogs/image1.png",
      date: "10 May 2025",
      title: "Serving the Region: Fahed Foods’ Role in Qatar’s HORECA Growth",
      description: "An in-depth article exploring the sourcing process behind Fahed Foods’ selection of gourmet items—from selecting producers during international trade fairs to ensuring supply chain quality. Highlights could include sustainability criteria, partnerships with artisanal producers, and product vetting standards.Why it matters: Showcases Fahed’s commitment to quality, builds trust with chefs and restaurant partners, and supports corporate positioning as a thoughtful and reliable gourmet importer.",
    },
    {
      id: 6,
      image: "/blogs/image2.png",
      date: "11 May 2025",
      title: "Sourcing Responsibly: How Fahed Foods Curates its Gourmet Portfolio",
      description: "An in-depth article exploring the sourcing process behind Fahed Foods’ selection of gourmet items—from selecting producers during international trade fairs to ensuring supply chain quality. Highlights could include sustainability criteria, partnerships with artisanal producers, and product vetting standards.Why it matters: Showcases Fahed’s commitment to quality, builds trust with chefs and restaurant partners, and supports corporate positioning as a thoughtful and reliable gourmet importer.",
    },
     {
      id: 7,
      image: "/blogs/image1.png",
      date: "10 May 2025",
      title: "Serving the Region: Fahed Foods’ Role in Qatar’s HORECA Growth",
      description: "An in-depth article exploring the sourcing process behind Fahed Foods’ selection of gourmet items—from selecting producers during international trade fairs to ensuring supply chain quality. Highlights could include sustainability criteria, partnerships with artisanal producers, and product vetting standards.Why it matters: Showcases Fahed’s commitment to quality, builds trust with chefs and restaurant partners, and supports corporate positioning as a thoughtful and reliable gourmet importer.",
    },
    {
      id: 8,
      image: "/blogs/image2.png",
      date: "11 May 2025",
      title: "Sourcing Responsibly: How Fahed Foods Curates its Gourmet Portfolio",
      description: "An in-depth article exploring the sourcing process behind Fahed Foods’ selection of gourmet items—from selecting producers during international trade fairs to ensuring supply chain quality. Highlights could include sustainability criteria, partnerships with artisanal producers, and product vetting standards.Why it matters: Showcases Fahed’s commitment to quality, builds trust with chefs and restaurant partners, and supports corporate positioning as a thoughtful and reliable gourmet importer.",
    },
    
  ];

  return (
    <section id="blogs">
    <div className="w-full h-auto overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 mt-[100px]">
         <p className="font-gotham font-bold text-[30px] leading-[30px] tracking-[0] uppercase">Blogs</p>
         <div className="flex flex-row justify-between items-center">
         
          <p className="font-gotham font-black text-[48px] leading-[60px] uppercase text-[#94A82F]">
            LATEST UPDATES
          </p>
          <div className="flex flex-row space-x-2">
            <button onClick={scrollLeft} className="bg-white p-1 rounded-full">
              <FaArrowLeft size={36} color="rgba(27, 27, 27, 0.3)" />
            </button>
            <button onClick={scrollRight} className="bg-white p-1 rounded-full">
              <FaCircleArrowRight size={36} />
            </button>
          </div>
        </div>
      </div>

      <UpdatesPage ref={scrollRef} cards={cards} />
    
    </div>
    </section>
  );
};

export default BlogsPage;
