import React from 'react'
import { MdOutlineSearch } from "react-icons/md";

type FormProps = {
  theme: string;
  elementTheme: string;
  searchCountryInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

export const Form: React.FC<FormProps> = ({theme, elementTheme, searchCountryInput, searchQuery}) => {
  return (
    <form action="" className='pt-10'>
      <label  htmlFor="search" className='relative flex items-center text-DarkGray'>
  
        <MdOutlineSearch className={`size-7 absolute left-6 ${theme === "light" ? "text-DarkGray" : "text-White"}`}/>
        <input 
          onChange={searchCountryInput}
          value={searchQuery}
          id='search' 
          title='search for a country' 
          type="search"
          placeholder='Search for a country...'
          className={`${elementTheme} capitalize pl-[75px] pr-4 py-[18px] w-full text-base shadow-[0px_0px_10px_1px]
          rounded-lg outline-none
          `} 
        />
      </label>
    </form>
  )
}
