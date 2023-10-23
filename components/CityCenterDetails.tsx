'use client'

import { Fragment } from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"
import Image from "next/image";
import { useState, useEffect } from "react";
import * as Realm from "realm-web"
import { notFound } from "next/navigation";

import { Dialog, Transition } from "@headlessui/react";
import { CityCenterProps } from "@types";

interface CityCenterDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  house: CityCenterProps;  
}

const CityCenterDetails = ({ isOpen, closeModal, house }:CityCenterDetailsProps ) => {
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    (async () => {
      const app = new Realm.App({ id: "citycenter-ossdi"});
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allItems = await user.functions.getItems();
        setItems(() => allItems);        
      } catch (error) {
        console.error("failed to log in", error);
      }
    })();
   
  },[])

  return(

  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'        
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
              <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <AiOutlineCloseCircle className="object-contain" />
                  </button>
                  {items}
                  <div className='flex-1 flex flex-col gap-3'>
                  <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                    <Image
                      src={house.url}
                      alt="Houses"
                      fill 
                      priority
                      className="object-contain" 
                    />
                  </div>
                  <div className="flex gap-3">
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image
                      src={house.kitchenurl}
                      alt="house"
                      fill
                      priority
                      className="object-contain" 
                    />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image
                      src={house.bedroomurl}
                      alt="house"
                      fill
                      priority
                      className="object-contain" 
                    />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image
                      src={house.toileturl}
                      alt="house"
                      fill
                      priority
                      className="object-contain" 
                    />
                    </div>                  
                  </div>
                  <div>
                    <h5 className=".cc-card__icon-text">
                      {house.description}
                    </h5>
                  </div>
                  <div className="flex justify-between">
                    <div>
                    <Image
                      src={house.agenturl}
                      alt="agent"
                      height={70}
                      width={50}                      
                      className="object-contain" 
                    />
                    <h6 className=".cc-card__icon-text">
                      {house.agent}
                    </h6>
                    </div>                  
                  
                    <h6 className=".cc-card__icon-text">
                      {house.agentContact}
                    </h6>
                  </div>
                  </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog> 
    </Transition>
  </>
  )
}
  

export default CityCenterDetails;
