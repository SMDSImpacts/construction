"use client"

import Image from "next/image";
import { CustomBtn } from "@components";

const Hero = () => {
  return(
    <div className="hero border-y-2">
        <div className="flex-1 pt-15 padding-x">
          <h1 className="hero__title">
            Find and Rent your choice Residences, Shops and Offices at the city center
          </h1>

        <p className="hero__subtitle">
          Streamline your home, office and shop rental experiences with our already searched out choices for your comfort.
        </p>
        <CustomBtn
        title="Explore our Catalog"
        containerStyles="text-white rounded-full bg-primary-blue mt-3 "
        />
        </div>
        <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/Operator3.png" alt="hero" width={400} height={350} className="object-contain image2" />
          <Image src="/house3.jpg" alt="house 3" width={400} height={350} className="object-contain image1" />          
        </div>        
      </div>            
    </div>
  )
};

export default Hero;
