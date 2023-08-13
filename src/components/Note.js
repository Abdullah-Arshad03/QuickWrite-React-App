import React from "react";
import {MdDeleteForever} from 'react-icons/md'


function Note ({id , text , date , deleteNote})
{
    return(   <>
        <div className="note flex flex-col justify-between bg-[#E6DADA] drop-shadow p-2 rounded-lg h-44" >
           <span>{text}</span>
           <div className="note-footer flex justify-between">
            <small className="font-semibold">{date}</small>
            <MdDeleteForever className="cursor-pointer hover:text-red-500" onClick={()=>{
                deleteNote(id)
            }} size='1.3em' />
           </div>
        </div>
    </>)
 
}

export default Note