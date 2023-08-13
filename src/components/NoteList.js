import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function NoteList (props){
 const {notes , savenote , deleteNote } = props


    return( <>
        <div className="notes-list grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] "> 
           {notes.map((note)=>{
           return <Note id={note.id} text={note.text} date={note.date} deleteNote={deleteNote} />
           })}
           <AddNote  savenote = {savenote}/>
            </div>
         
        </>)
   
}
export default NoteList