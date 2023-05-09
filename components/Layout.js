import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <div>
      <div className="px-2 md:px-24 bg-black text-light flex justify-between h-16 fixed top-0 w-full">
        <Link href="/" legacyBehavior>
          <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
            <FaCode className="inline text-4xl mr-4" /> Code 911
          </a>
        </Link>
        <div className="flex items-center w-1/3 text-lg">
          <input
            type="text"
            className="bg-black border-b w-full border-white outline-none"
          />
          <FiSearch className="text-white -ml-8 text-2xl cursor-pointer" />
        </div>
        <div className="flex items-center text-2xl">
          <AiOutlineBell className="mr-2 cursor-pointer text-white hover:text-red-600" />
          <AiOutlineUser className="mr-2 cursor-pointer text-white hover:text-red-600" />
        </div>
      </div>
      {/* Children div content */}
      <div className="max-w-[1000px] mx-auto">{children}</div>
      {/* Children div content */}
      <div
        className="
      bg-black
      text-white 
      px-2 
      md:px-24 
      justify-between 
      block
      bottom-0 
      h-16 
      w-full
      ">
        Footer
      </div>
    </div>
  );
}
