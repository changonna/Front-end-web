import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "../../api/axios";

/**
 * 영화 상세 페이지
 */
export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setmovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${movieId}`
      )
      setmovie(request.data);
    }

    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster" />
    </section>
  )
}