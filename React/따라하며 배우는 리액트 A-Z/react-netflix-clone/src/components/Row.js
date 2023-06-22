import React, { useEffect, useState } from 'react';
import axios from "../api/axios";
import "./Row.css";

export default function Row({ title, isLargeRow, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);
  
  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log(request);
    setMovies(request.data.results);
  }
  
  return (
    <section className='row'>
      {/** TITLE */}
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className='arrow'
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}>{"<"}</span>
        </div>
    <div id={id} className='row__posters'>
      {/**SEVERAL ROW__POSTER */}
      {movies.map((movie) => (
        <img
          key={movie.id}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          alt={movie.name}
        />
      ))}
    </div>
        <div className="slider__arrow-right">
          <span className='arrow'
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}>{">"}</span>
        </div>
      </div>
    </section>
  )
}
