import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "537124f0c7cb9457158a71e716d2af4e",
    language: "ko-KR",
  }
});

export default instance;