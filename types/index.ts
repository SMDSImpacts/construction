import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title?: string;
    rightIcon?: any;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

  export interface SearchCityCenterProps {
    address: string;
    setAddress: (address: string) => void;
  }

  export interface FilterProps {
    title?: string;
    address?: string;
    bedrooms?:number;
    price?:number;
  }
  
  export interface HomeProps {
    searchParams: FilterProps
  }
  
  export interface CityCenterCardProps {
    address: string;
    title: string;
    price: number;
  }

  export interface CityCenterProps {
    location: string;
    center: string;
    bedroomurl: string;
    description: string;
    title: string;
    rent: number;
    kitchenurl: string;
    agent:string;
    toileturl: string;
    url: string;
    agentContact: string;
    agenturl: string;
  } 