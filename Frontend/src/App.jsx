import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../src/app/Slices/authSlice.js';

import Home from './pages/Home.jsx';
import Notes from './pages/Notes/DSA/Notes.jsx';
import CreateNote from './pages/Notes/DSA/CreateNote.jsx';
import NoteDetail from './pages/Notes/DSA/NoteDetail.jsx';
import Canva from './pages/Notes/DSA/Canva.jsx';
import Menu  from './pages/Menu.jsx';
import Login from './components/Auth/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser()); // ✅ fetch user once when app loads
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notes/dsa" element={<Notes />} />
          <Route path="/notes/new" element={<CreateNote />} />
          <Route path="/notes/:category/:subCategory/:question" element={<NoteDetail />} />
          <Route path="/canva" element={<Canva />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;

