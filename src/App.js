import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import { Projects } from './pages/Projects/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
