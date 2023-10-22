'use client'

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as Realm from "realm-web"
import { CustomFilter, SearchBar, CityCenterCards } from "@components";

const Agents = () => {
  const [items, setItems] = useState([]);  
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    (async () => {    
            const url = `${pathname}?${searchParams}`
            console.log(url)    
            const app = new Realm.App({ id: "citycenter-ossdi"});
            const credentials = Realm.Credentials.anonymous();
            try {
            const user = await app.logIn(credentials);
            const searchAppartments = await user.functions.searchAppartments(url);
            setItems(() => searchAppartments);            
            } catch (error) {
            console.error("failed to log in", error);
      
        }
      
    })();
   
  },[pathname, searchParams])  

  const isDataEmpty = !Array.isArray(items) || items.length < 1 || !items;

  return(
    <main className="flex flex-col justify-between mt-7">
             
      <div className=" mt-5 padding-x padding-y max-width" id='discover'>
        <div
        className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Check it out</h1>
          <p>Explore from our choiced collections</p>
        </div>
        
        <div className="home__filters">          
          <SearchBar />         
          <div className="home__filter-container">            
          </div>
        </div>
  
        {!isDataEmpty ? (
                  <section>
                  <div className="home__agents-wrapper">
                    
                    {items.map((house:any) => (
                      <CityCenterCards key={house._id} house={house} />
                    ))}
                  </div>
                  
                </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Loading...</h2>
            <p>{items}</p>
          </div>
        )}
 
      </div>
    </main>
  )
};

export default Agents;
