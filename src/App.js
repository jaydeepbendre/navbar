import './App.css';
import Home from './components/Pages/home'
import Navbar from './components/navbar.jsx'
import Instagram from './components/Pages/instagram.jsx';
import Github from './components/Pages/github.jsx'
import Skype from './components/Pages/skype'
import Flipkart from './components/Pages/flipkart'
import Netflix from './components/Pages/netflix'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/instagram" element={<Instagram/>} />
    <Route path="/github" element={<Github/>} />  
    <Route path="/skype" element={<Skype/>} />  
    <Route path="/flipkart" element={<Flipkart/>} />  
    <Route path="/netflix" element={<Netflix/>} />  

  </Routes>
  </BrowserRouter>

}

export default App;

