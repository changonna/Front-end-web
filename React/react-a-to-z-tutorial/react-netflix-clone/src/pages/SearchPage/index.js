import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "../../api/axios";
import "./SearchPage.css";
import { useDebounce } from '../../hooks/useDebounce';

function SearchPage() {
	const [searchResults, setSearchResults] = useState([]);
	
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	}

	let query = useQuery();
	const searchTerm = query.get("q");
	const debounceSearchTerm = useDebounce(searchTerm, 500);
	

	useEffect(() => {
		if(debounceSearchTerm) {
			fetchSearchMovie(debounceSearchTerm);
			console.log(debounceSearchTerm);
		}
	}, [debounceSearchTerm]);

	/**
	 * 영화검색
	 * @param searchTerm : 영화검색어
	 * @returns {Promise<void>}
	 */
	const fetchSearchMovie = async (searchTerm) => {
		try {
			const request = await axios.get(
				`/search/multi?include_adult=false&query=${searchTerm}` // 성인 영화 제외
			)
			console.log(request);
			setSearchResults(request.data.results);
		} catch (e) {
			console.log("error", e);
		}
	}

	/**
	 * 검색결과 렌더링 함수
	 * @returns {Element}
	 */
	const renderSearchResults = () => {
		return searchResults.length > 0 ? (
			<section className="search-container">
				{searchResults.map((movie) => {
					if(movie.backdrop_path !== null && movie.media_type !== "person") {
						const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
						return (
							<div className="movie">
								<div className="movie__column-poster">
									<img
										src={movieImageUrl} alt="movie image"
										className="movie__poster"
										/>
								</div>
							</div>
						)
					}
				})}
			</section>
		) : (
			<section className="no-results">
				<div className="no-results__text">
					<p>찾고자하는 검색어"{debounceSearchTerm}"에 맞는 영화가 없습니다.</p>
				</div>
			</section>
		)
	}

	return renderSearchResults();
}

export default SearchPage;