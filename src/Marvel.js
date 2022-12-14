import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// hooks
import { useAuthContext } from './hooks/useAuthContext';

// components
import { Intro } from './components/intro/Intro';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Feedback } from './components/feedback/Feedback';
import { Subscription } from './components/subscription/Subscription';

// pages
import { Home } from './pages/home/Home';
import { ComicsList } from './pages/comicsList/ComicsList';
import { ComicDetails } from './pages/comicDetails/ComicDetails';
import { CharactersList } from './pages/charactersList/CharactersList';
import { CharacterDetails } from './pages/characterDetails/CharacterDetails';
import { FavoritesList } from './pages/favoritesList/FavoritesList';
import { UserProfile } from './pages/userProfile/UserProfile';
import { SignUp } from './pages/signUp/SignUp';
import { LogIn } from './pages/logIn/LogIn';
import { AboutMe } from './pages/aboutMe/AboutMe';

// styles
import './Marvel.css';

export const Marvel = () => {
  const [subscriptionVisibility, setSubscriptionVisibility] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const { authIsReady, user } = useAuthContext();

  // intro unmounting
  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 6000);
  }, []);

  // timed subscription visibility
  useEffect(() => {
    const timedSubscription = () =>
      setTimeout(() => {
        setSubscriptionVisibility(true);
      }, 10000);

    timedSubscription();
  }, []);

  const closeSubscription = () => {
    setSubscriptionVisibility(false);
  };

  return (
    <div className="Marvel">
      {authIsReady && (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {isIntro && <Intro />}
                  <Home />
                </>
              }
            />
            <Route path="/comics" element={<ComicsList />} />
            <Route path="/comics/:id" element={<ComicDetails />} />
            <Route path="/characters" element={<CharactersList />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
            <Route
              path="/favorites"
              element={user ? <FavoritesList /> : <Navigate to="/login" />}
            />
            <Route
              path="/userprofile"
              element={user ? <UserProfile /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <LogIn /> : <Navigate to="/userprofile" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/userprofile" />}
            />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
          <Footer />
          <Feedback />
          {subscriptionVisibility && !user && (
            <Subscription closeSubscription={closeSubscription} />
          )}
        </>
      )}
    </div>
  );
};
