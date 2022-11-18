import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Feedback } from './components/feedback/Feedback';

// pages
import { Home } from './pages/home/Home';
import { CharactersList } from './pages/charactersList/CharactersList';
import { CharacterDetails } from './pages/characterDetails/CharacterDetails';
import { SignUp } from './pages/signUp/SignUp';
import { LogIn } from './pages/logIn/LogIn';

// styles
import './Marvel.css';

export const Marvel = () => {
  return (
    <div className="Marvel">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <Feedback />
    </div>
  );
};
