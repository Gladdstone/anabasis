import { useState } from 'react'
import corborgle from './assets/carbuncle.png';
import './App.css'
import Admin from './components/admin.jsx';
import Planner from './components/planner.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <>
      <div className='primary-header'>
        <div>
        <h1>Anabasis</h1>
        <h3>Raid Coordination Platform</h3>
        </div>
        <a href="https://vite.dev" target="_blank">
          <img src={corborgle} className="logo" alt="corborgle" />
        </a>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Planner />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
