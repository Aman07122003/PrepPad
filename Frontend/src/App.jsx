import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Notes from './pages/Notes/DSA/Notes.jsx';
import CreateNote from './pages/Notes/DSA/CreateNote.jsx';
import NoteDetail from './pages/Notes/DSA/NoteDetail.jsx';
import Canva from './pages/Notes/DSA/Canva.jsx';
import Menu  from './pages/Menu.jsx';
import Index from './pages/Notes/Index/Index.jsx';
import AptitudeContent from './pages/Notes/Content/AptitudeContent.jsx';

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
          <Route path="/notes/:section" element={<Index />} />
          <Route path="/menu/:section/:chapter/:topic" element={<AptitudeContent />} />
        </Routes>
    </Router>
  );
};

export default App;

