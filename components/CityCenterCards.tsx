'use client'

import { CldImage } from "next-cloudinary"
import { FaBed, FaToilet } from "react-icons/fa6"
import { GiKitchenTap } from "react-icons/gi"
import { BsArrowRightCircle } from "react-icons/bs"
import CustomBtn from "./CustomBtn";
import { useState } from "react";
import CityCenterDetails from "./CityCenterDetails";
import { CityCenterProps } from "@types";


interface CityCenterCardProps {
  house: CityCenterProps;
}

const CityCenterCards = ({house}: CityCenterCardProps) => {
    const { title, url, bedrooms, address, center, price } = house;
    
    const [isOpen, setIsOpen] = useState(false);   
    
  return (
    <div className="cc-card group">
      <div className="cc-card__content">
        <h2 className="cc-card__content-title">
          {title}
        </h2>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
        <CldImage src={url} alt="houses" fill priority className="object-contain" />
      </div>
      <div className="relative flex w-full mt-2">
      <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='cc-card__icon'>
            <GiKitchenTap />
            <p className='cc-card__icon-text'>
              kitchen
            </p>
          </div>
          <div className="cc-card__icon">
            <FaBed />
            <p className="cc-card__icon-text">{bedrooms}</p>
          </div>
          <div className="cc-card__icon">
            <FaToilet />
            <p className="cc-card__icon-text">N{price}</p>
          </div>
        </div>

        <div className="cc-card__btn-container">
          <CustomBtn
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/arrow-right.png'
            handleClick={() => setIsOpen(true)}
          />
        </div>
        <CityCenterDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} house={house} />
      </div>
    </div>    
  )
};

export default CityCenterCards;
