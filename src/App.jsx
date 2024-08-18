import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'; // Corrected import
import New from './new'; // Ensure the New component is correctly imported
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        
        <Route path="/new" element={<New />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
