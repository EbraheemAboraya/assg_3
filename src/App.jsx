import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetAllShelters from './components/getShelters';
import ShelterManagement from './components/main';
import AddShelter from './components/addShelter';
import GetShelterById from './components/getshelterid'
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShelterManagement />} />
          <Route path="/shelter" element={<GetAllShelters />} />
          <Route path="shelter/add" element={<AddShelter />} />
          <Route path="/shelter/:shelterId" element={<GetShelterById />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
