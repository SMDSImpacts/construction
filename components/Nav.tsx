'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi"


const Nav: React.FC = () => { 
  const [mobileMenu, setMobileMenu] = useState(false);    
    
  return (
    <nav className="flex mt-20 pt-1 border border-sky-200 p-4">
      <div className="flex flex-1 justify-between">
        <Link href="/" className=" hover:cursor-pointer mt-2">
          <Image src="/Impacts_Logo.jpg" alt="logo" width={150} height={150} />
        </Link>
        {/* Desktop menu */}
        <div className="flex gap-3 logo_text sm:hidden">
          <Link className="mt-6" href="/Constructions">
            Constructions
          </Link>
          <Link className="mt-6" href="/Realtors">
            Realtors
          </Link>
          <Link className="mt-6" href="/Agents">
            Agents
          </Link>
        </div>
        <div className=" sm:hidden flex relative">
          <Link className="mt-6" href="/Login">
            <Image
              src="/Impacts_Logo.jpg"
              alt="grop menu"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      {/* mobile devices */}
      <div className=" flex sm:hidden">
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          type="button"
          className="text-gray-600 hover:text-gray-500 focus:text-gray-500"
          aria-label="toggle menu"
        >
          <HiOutlineMenu className="h-5 w-5" />
        </button>
      </div>
      <nav
            className={`${
              mobileMenu ? "" : "hidden"
            } sm:flex sm:justify-center sm:items-center mt-4`}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                <Link href="/Constructions">Constructions</Link>
              </div>
              <div className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                <Link href="/Realtors">Realtors</Link>
              </div>
              <a
                className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                href="Agents"
              >
                Agents
              </a>              
            </div>
          </nav>
    </nav>
  );
};

export default Nav;
