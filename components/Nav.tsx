'use client'

import Image from "next/image";
import Link from "next/link";

const Nav: React.FC = () => {   
    
    
  return (
    <nav className="flex mt-20 pt-1 border border-sky-200 p-4">
      <div className="flex flex-1 justify-between">
        <Link href="/" className=" hover:cursor-pointer mt-2">
          <Image src="/Impacts_Logo.jpg" alt="logo" width={150} height={150} />
        </Link>
        <div className="flex gap-3 logo_text ">
          
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
    </nav>
  );
};

export default Nav;
