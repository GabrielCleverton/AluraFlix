

// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Originais da Netflix" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Em Alta" fetchUrl={requests.fetchTrending} />
      <Row title="Mais Assistidos" fetchUrl={requests.fetchTopRated} />
      <Footer />
    </div>
  );
};

export default App;

