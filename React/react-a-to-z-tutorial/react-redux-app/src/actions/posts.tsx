import axios from "axios";

// export const fetchPosts = (): any => {
//   return async function fetchPostsThunk(dispatch: any, getState: any) {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     dispatch({ type: "FETCH_POSTS", payload: response.data });
//   }
// }

// modern ES2015 형태로 변경
// fetchPosts is the "thunk action creator"
export const fetchPosts = (): any => async(dispatch: any, getState: any) => {
  // logic here tha can dispatch actions or read state
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
}