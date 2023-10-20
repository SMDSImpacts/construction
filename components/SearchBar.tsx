"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {AiOutlineCloseCircle} from "react-icons/ai"
import { BsSearch } from "react-icons/bs";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search/${searchTerm}`)

    setSearchTerm("")
  };



  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`ml-2 z-10 ${otherClasses}`}>
      <BsSearch className="object-contain" />
    </button>
  );

  return (
    <form className="home__filter-container" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <input
          className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm} 
          type="text" 
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
