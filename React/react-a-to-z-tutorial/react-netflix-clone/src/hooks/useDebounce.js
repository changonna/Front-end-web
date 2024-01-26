import { useState, useEffect } from "react";

/**
 * useDebounce 커스텀 훅
 * @param {*} value debounce 적용값
 * @param {*} delay 지연시간
 * @returns debounce가 적용된 값
 */
export const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		// delay 이후에 value를 debounceValue로 설정
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);
	
		// 컴포넌트가 unmount되거나 value나 delay가 변경될 때, 
		// 그리고 디바운스 효과가 적용되기 전에 타임아웃이 완료되지 않도록 하는데 사용
		return () => {
			clearTimeout(handler);
		}
	}, [value, delay]); // value나 delay가 변경될 때 재실행

	return debounceValue;
}