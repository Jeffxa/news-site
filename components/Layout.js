import { FaCode } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <div>
      <div className="px-2 md:px-24 bg-black text-light flex justify-between h-16 opacity-90 fixed w-full">
        <Link href="/" legacyBehavior>
          <a className="text-white uppercase  text-2xl flex align-baseline px-10 my-auto">
            <FaCode className="inline text-4xl mr-4" /> Code 911
          </a>
        </Link>
        <div className="flex items-center w-1/3 text-lg">
          <input
            type="text"
            className="bg-black text-white border-b w-full border-white outline-none hover:text-red-600"
          />
          <FiSearch className="-ml-8 text-2xl text-white cursor-pointer hover:text-red-600" />
        </div>
        <div className="flex items-center text-2xl">
          <AiOutlineBell className="mr-2 cursor-pointer text-white hover:text-red-600" />
          <AiOutlineUser className="mr-2 cursor-pointer text-white hover:text-red-600" />
        </div>
      </div>
      <div className="px-2 md:px-24 pt-20 flex border-b border-black">
        <Link
          href="/"
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent">
          Home
        </Link>
        <Link
          href="/politics"
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent">
          Politics
        </Link>
        <Link
          href="/business"
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent">
          Business
        </Link>
        <Link
          href="/sport"
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent">
          Sport
        </Link>
      </div>
      {children}
      <div className="bg-black text-white text-xl py-10 px-24 flex flex-col">
        <div>
          <Link href="/" legacyBehavior>
            <a className="text-white uppercase  text-2xl flex align-baseline px-10 my-auto">
              <FaCode className="inline text-4xl mr-4" /> Code 911
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-10 max-w-3xl">
          <spam>Careers</spam>
          <spam>About Us</spam>
          <spam>API</spam>
          <spam>Media</spam>
          <spam>Contact Us</spam>
          <spam>Privacy Policy</spam>
          <spam>Partners</spam>
          <spam>Vision</spam>
          <spam>Project VisQ</spam>
        </div>
        <div className="my-10 text-sm max-w-2xl">
          Code 911 is a open-media intiative by Xmedia Gcorp, NIC © and is
          registered as
        </div>
      </div>
    </div>
  );
}
