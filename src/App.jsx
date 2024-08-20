import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'; 
import NewNotes from './NewNotes'; 
import Notes from './Notes'; 
import NoteDetail from "./NoteDetail"
import './App.css';
import { useState } from "react";


function App() {
  const [notes, setNotes] = useState([]); 
  
  const handleAddItems = (newNote) => {
    setNotes([...notes, newNote]); 
  };

  return (
    <div className='container my-4'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} /> } />
          <Route path="/new" element={<NewNotes onAddItems={handleAddItems} />} />
          <Route path="/notes/:id" element={<NoteDetail notes={notes} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
