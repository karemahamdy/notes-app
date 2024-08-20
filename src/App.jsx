import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'; 
import NewNotes from './NewNotes'; 
import Notes from './Notes'; 
import './App.css';
import {useState} from "react"

function App() {

  const [items, setItems] = useState([]); // State to hold the added items

  // Function to handle adding new items
  const handleAddItems = (newItem) => {
    setItems([...items, newItem]); // Add the new item to the items array
  };

  return (
    <div className='container my-4'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes/>} />
        
        <Route path="/new" element={<NewNotes  onAddItems={handleAddItems} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
