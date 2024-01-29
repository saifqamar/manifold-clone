import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DevelopersPage from './pages/developersPage';
import CreatorsPage from './pages/CreatorsPage';
import AboutPage from './pages/AboutPage';




function App() {
  return (
    <div className='bg-black w-full max-w-[1600px] mx-auto'>
      <BrowserRouter className="App controlling-flow">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
