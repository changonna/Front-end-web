import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);
	
		return () => {
			clearTimeout(handler);
		}
	}, [value, delay]); // value나 delay가 바뀌면 다시 한 번 호출

	return debounceValue;
}