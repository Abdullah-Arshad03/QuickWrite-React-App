import React from "react";
import { MdSearch } from "react-icons/md";

function SearchNote({setSearchNote}) {
  return (
    <>
      <div className="search-note flex w-auto bg-slate-200 rounded-xl mb-6 pb-1">
        <MdSearch
          size="1.3em"
          className="ml-5 mt-1 flex justify-center flex-col "
        />
        <input
          type="text"
          placeholder="Search Your Writes...."
          className=" pl-6 border-none focus:outline-none bg-slate-200"
          onChange={(event)=>{
            console.log(event.target.value)
            setSearchNote(event.target.value)
            
          }}
        />
      </div>
    </>
  );
}

export default SearchNote;
