import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'; 
import NewNotes from './NewNotes'; // Ensure the New component is correctly imported
import './App.css';

function App() {

  const handleAddItems = (newItem) => {
    console.log("Item added:", newItem);
  }
  return (
    <div className='container my-4'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        
        <Route path="/new" element={<NewNotes  onAddItems={handleAddItems} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
