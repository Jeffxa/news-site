import {FaCode} from "react-icons/fa"
import {FiSearch} from "react-icons/fi"
import Link from "next/link"
export default function Layout ({children})
{
 return(
    <div>
        <div className="px-2 md:px-24 bg-dark text-light flex justify-between h-16 sticky top-0">
            <Link href="/" legacyBehavior>
                <a className="text-white uppercase bg-black text-2xl flex align-baseline px-10 my-auto">
                    <FaCode className="inline text-4xl mr-4"/> Code 911
                </a>
            </Link>
            <div className="flex items-center w-1/3 text-lg">
                <input
                type="text"
                className="bg-dark border-b w-full border-white outline-none hover:text-red"
                />
                <FiSearch className="-ml-8 text-2xl cursor-pointer hover:text-red"/>
            </div>
        </div>
        {children}
        <div className="h-16 bg-white sticky bottom-0">Footer</div>
    </div>
 )   
}