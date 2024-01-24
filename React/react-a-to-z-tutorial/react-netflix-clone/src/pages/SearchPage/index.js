import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "../../api/axios";

function SearchPage() {
	const [searchResults, setSearchResults] = useState([]);

	console.log('useLocation()', useLocation());
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	}

	let query = useQuery();
	const searchTerm = query.get("q");
	console.log(searchTerm);

	useEffect(() => {
		if(searchTerm) {
			fetchSearchMovie(searchTerm);
		}
	}, [searchTerm]);

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

	return (
		<div></div>
	)
}

export default SearchPage;