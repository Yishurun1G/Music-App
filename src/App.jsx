// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import RecentlyPlayed from './components/RecentlyPlayed';
import TopGenres from './components/TopGenres';
import TopGlobalMusic from './components/TopGlobalMusic';
import PopularPodcasts from './components/PopularPodcasts';
import Details from './components/Details';
import Footer from './components/Footer'; // Import footer here

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white font-sans">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Topbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <RecentlyPlayed />
                    <TopGenres />
                    <TopGlobalMusic />
                    <PopularPodcasts />
                  </>
                }
              />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/details/:id" element={<Details />} />
              {/* add other routes here */}
            </Routes>
          </main>
        </div>

        <Footer />  {/* Footer outside of Routes and main content */}
      </div>
    </Router>
  );
};

export default App;
