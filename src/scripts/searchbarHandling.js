import { BASE_URL, API_KEY } from "./utils/config";
import { displayMovies } from "./createMovieCard";
import { fetchPopularMovies } from "./fetchMovies";

export async function searchHandler(query) {
  if (!query) {
    // If input is empty, go back to homepage/popular movies
    const movies = await fetchPopularMovies();
    document.getElementById("section-title").textContent = "Popular Movies";
    return displayMovies(movies);
  }

  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
      query
    )}&page=1`
  );
  const data = await res.json();
  document.getElementById(
    "section-title"
  ).textContent = `Search Results for "${query}"`;
  displayMovies(data.results);
}

export function searchMovies() {
  const inputEl = document.getElementById("search-input");
  const btnEl = document.getElementById("search-btn");

  if (!inputEl || !btnEl) return;

  // TODO:debounce to avoid multiple uneccesary API calls on input
  let debounceTimeout;
  const debounce = (func, delay = 400) => {
    return (...args) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = debounce((query) => {
    searchHandler(query);
  }, 400);

  // OnClick
  btnEl.addEventListener("click", () => {
    const query = inputEl.value.trim();
    searchHandler(query);
  });

  // OnInput
  inputEl.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    debouncedSearch(query);
  });
}
