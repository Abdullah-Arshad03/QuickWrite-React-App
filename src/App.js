import React, { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import {nanoid} from 'nanoid'
import SearchNote from "./components/SearchNote";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {


  const [notes , setnotes] = useState([])
 

  useEffect(()=>{
     const savedNotes = JSON.parse(localStorage.getItem('app-data'))
     if(savedNotes){
      setnotes(savedNotes)
     }
  }, [])
useEffect(()=>{
      localStorage.setItem('app-data' , JSON.stringify(notes))
}, [notes])

  const [searchNote , setSearchNote] = useState('')

  const saveNote = (text) =>{
        const date = new Date()
        const datee = date.toLocaleDateString()
        const newNote = {
          id : nanoid(),
          text : text,
          date : datee
        }
        const newNotes = [...notes , newNote]
        setnotes(newNotes)
  } 

  const deleteNote = (id) =>{
      const newNotes =   notes.filter((note)=>{
         return note.id !== id
        })
        setnotes(newNotes)
  }
  return (
    <>
    <div className="container max-w-[960px] mr-auto ml-auto pl-4 pr-4">
      <Header/>
      <SearchNote setSearchNote={setSearchNote}/>
      <NoteList  notes={notes.filter((note)=>{
        return note.text.toLowerCase().includes(searchNote)
      })}  savenote={saveNote} deleteNote={deleteNote}/>
      </div>
      <Footer/>
    </>

  );
}

export default App;
