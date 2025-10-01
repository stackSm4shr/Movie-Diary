import { BASE_URL, API_KEY } from "./config";
import { displayMovies } from "./createMovieCard";

export async function searchHandler(query) {
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
  // event listener for search bar button
  document.getElementById("search-btn").addEventListener("click", () => {
    const query = document.getElementById("search-input").value.trim();
    if (query) searchHandler(query);
  });

  // event listener for search bar input field
  document.getElementById("search-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.trim();
      if (query) searchHandler(query);
    }
  });
}
