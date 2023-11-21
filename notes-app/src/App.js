import React, { useEffect } from 'react';
import NoteContainer from './components/NotesContainer/NoteContainer';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
}




  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote=(id)=>{
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  }


  const updateText=(text,id)=>{
    const tempNotes=[...notes];
    const index=tempNotes.findIndex((item)=>item.id===id);
    if(index<0)return;
    tempNotes[index].text=text;
    setNotes(tempNotes);
  }

  useEffect(()=>{
    localStorage.setItem('notes-app',JSON.stringify(notes))
  },[notes])




  return (
    <div className="App">
      <Sidebar addNote={addNote}     darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <NoteContainer    notes={notes}  deleteNote={deleteNote}  updateText={updateText}   darkMode={darkMode}  toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
