import React from 'react';

// components
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

// pages
import { Home } from './pages/home/Home';
import { Characters } from './pages/characters/Characters';
import { SignUp } from './pages/signUp/SignUp';
import { LogIn } from './pages/logIn/LogIn';

// styles
import './Marvel.css';

export const Marvel = () => {
  return (
    <div className="Marvel">
      <Header />
      <Home />
      <Characters />
      <SignUp />
      <LogIn />
      <Footer />
    </div>
  );
};
