// src/components/Banner.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../api';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header className="banner" style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Assistir</button>
          <button className="banner__button">Minha Lista</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
