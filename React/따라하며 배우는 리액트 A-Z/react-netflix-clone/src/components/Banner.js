import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import requests from './../api/requests';
import "./Banner.css";
import styled from 'styled-components';

export default function Banner() {

  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기(여러 영화)
    const request = await axios.get(requests.fetchNowPlaying);
    // 여러 영화 중 하나의 영화의 ID를 가져오기
    const movieId = request.data.results[
      Math.floor(Math.random() * request.data.results.length)
    ].id;

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    // movieDetail이라는 이름으로 결과를 저장한다.
    const {data: movieDetail} = await axios.get(`movie/${movieId}`,{
      // 보내는 Parameter
      params: { append_to_response: "video" },
    });
    // movie 상세정보 설정
    setMovie(movieDetail);
  }

  // 문장의 길이가 n보다 크면 ...붙이고 자르기
  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)} ...` : str;
  }

  // play 버튼 클릭 확인
  if(!isClicked) {
    console.log(`movie.video : ${movie.video}`);
    console.log(`movie.videos : ${movie.videos}`);
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
  
          <div className="banner__buttons">
            {/* movie의 video가 없으면 버튼 감추기 */}
            { movie.videos ?
              <button
                className="banner__button play"
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
              : null
            }
            <button className="banner__button info">More Information</button>
          </div>
  
          <h1 className="banner__description">
            {truncate(movie.overview, 100)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
