import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Notes from './pages/Notes.jsx';
import CreateNote from './pages/CreateNote.jsx';
import NoteDetail from './pages/NoteDetail.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/notes/new' element={<CreateNote/>}/>
        <Route path="/notes/:category/:subCategory/:question" element={<NoteDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
