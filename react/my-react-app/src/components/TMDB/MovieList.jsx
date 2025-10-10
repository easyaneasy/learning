import { useEffect, useState } from "react";
//import axiosInstance from "../../api/index";
// 모듈화 된 API 요청 함수 불러오기
import { getPopularMovies } from "../../api/tmdb";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res =  await getPopularMovies();
      setMovies(res.results);
    }

    fetchData();
  }, []);

  return (
    <div>
        <h1>인기 영화 목록</h1>
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
    </div>
  );
}
