import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SystemDesign from '../src/pages/Notes/SystemDesign/SystemDesign.jsx';

import Home from './pages/Home.jsx';
import Notes from './pages/Notes/DSA/Notes.jsx';
import CreateNote from './pages/Notes/DSA/CreateNote.jsx';
import NoteDetail from './pages/Notes/DSA/NoteDetail.jsx';
import Canva from './pages/Notes/DSA/Canva.jsx';
import Menu  from './pages/Menu.jsx';
import SystemDesignMenu from './pages/Notes/SystemDesign/SystemDesignMenu.jsx';
import Interview from './pages/Notes/Interview/Interview.jsx';
import OperatingSystem from './pages/Notes/OperatingSystem/OperatingSystem.jsx';
import ComputerNetwork from './pages/Notes/CN/ComputerNetwork.jsx';
import Aptitude from './pages/Notes/Aptitude/Aptitude.jsx';
import LogicalReasoning from './pages/Notes/LogicalReasoning/LogicalReasoning.jsx';
import VerbalAbility from './pages/Notes/VerbalAbility/VerbalAbility.jsx';
import LogicalReasoningTheory from './pages/Notes/LogicalReasoning/LogicalReasoningTheory.jsx';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/notes/dsa" element={<Notes />} />
          <Route path="/notes/new" element={<CreateNote />} />
          <Route path="/notes/:category/:subCategory/:question" element={<NoteDetail />} />
          <Route path="/canva" element={<Canva />} />
          <Route path="/notes/system-design" element={<SystemDesign />} />
          <Route path="/notes/system-design/menu" element={<SystemDesignMenu />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/notes/os" element={<OperatingSystem />} />
          <Route path="/notes/computer-networks" element={<ComputerNetwork />} />
          <Route path="/notes/aptitude" element={<Aptitude />} />
          <Route path="/notes/logical-reasoning" element={<LogicalReasoning />} />
          <Route path="/notes/verbal-ability" element={<VerbalAbility />} />
          <Route path="/notes/logical-reasoning/theory" element={<LogicalReasoningTheory />} />
        </Routes>
    </Router>
  );
};

export default App;

