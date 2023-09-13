import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import { Projects } from './pages/Projects/Projects';

import Signup from './components/Login/Signup';
import Sigin from './components/Login/Sigin';
import Account from './components/Login/Account';
import { AuthContextProvider } from './context/AuthContext';
import CenteredContactForm from './components/ContactForm/CenteredContactForm';
import Teams from './pages/Services/Teams/Teams';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/teams' element={<Teams />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/login' element={<Sigin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={<Account />} />
            <Route path='/contactus' element={<CenteredContactForm />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
