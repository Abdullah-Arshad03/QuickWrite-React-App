import React, { useState } from "react";

function AddNote({savenote}) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 165;



  const saveNote = () =>{
    if(noteText.trim().length>0){
        savenote(noteText)
        setNoteText('')
     }

  }

  return (
    <>
      <div className="note flex flex-col justify-between bg-yellow-200 drop-shadow p-2 rounded-lg h-44">
        <textarea
          className=" font-mono textarea border-none resize-none focus:outline-none bg-yellow-200 "
          rows="8"
          cols="10"
          placeholder="Quickly write here..."
          onChange={(event)=>{
            const text = event.target.value.length
                 if (characterLimit - text >=0 ){
                setNoteText(event.target.value)
             }
          }}
          value={noteText}
        ></textarea>
        <div className="note-footer flex justify-between">
          <small className="font-semibold">{characterLimit - noteText.length} Remaining</small>
          <button className="bg-white pr-2 pl-2  rounded-xl text-center pb-1 cursor-pointer hover:bg-green-200"
          onClick={saveNote}>
            save
          </button>
        </div>
      </div>
    </>
  );
}
export default AddNote;
