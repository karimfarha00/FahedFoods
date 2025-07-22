import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import UpdatesPage from "./Updates";

const BlogsPage = () => {
  return (
    <div className="w-full h-[1020px] overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 mt-[100px]">
        <p className="font-gotham font-bold text-[30px] leading-[30px] tracking-[0] uppercase">
          BLOGS
        </p>

        <div className="flex flex-row justify-between items-center mt-4">
          <p className="font-gotham font-black text-[48px] leading-[60px] tracking-[0] uppercase text-[#94A82F]">
            LATEST UPDATES
          </p>

          {/* Right-side icons */}
          <div className="flex flex-row space-x-2">
            <div className="bg-white">
              <FaArrowLeft size={36} color="rgba(27, 27, 27, 0.3)" />
            </div>

            <FaCircleArrowRight size={36} />
          </div>
        </div>
      </div>
      <UpdatesPage />
    </div>
  );

  
}

export default BlogsPage;