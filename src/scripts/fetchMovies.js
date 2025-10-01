import { API_KEY, BASE_URL } from "./config.js";
import { displayMovies } from "./createMovieCard.js";
// function to fetch popular movies
export async function fetchPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  document.getElementById("section-title").textContent = "Popular Movies";
  displayMovies(data.results);
}
