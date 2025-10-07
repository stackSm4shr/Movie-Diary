import { Navbar } from "../../components/navbar.js";
import { SearchBar } from "../../components/searchBar.js";
import { searchMovies } from "../searchbarHandling.js";
import { fetchPopularMovies } from "../fetchMovies.js";
import { displayMovies } from "../createMovieCard.js";

export async function initHome() {
  const app = document.getElementById("app");
  if (!app) return;

  // Inject homepage structure
  app.innerHTML = `
    ${Navbar()}
    <main class="container mx-auto px-4 text-ct-subtext1">
      ${SearchBar()}
      <h1 class="text-3xl font-bold mb-6" id="section-title">Popular Movies</h1>
      <section id="movie-cards" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        <p id="loading-message">Loading...</p>
      </section>
    </main>
  `;

  // Attach search listeners
  searchMovies();

  // Fetch popular movies
  const movies = await fetchPopularMovies();

  // Remove loading message
  const loadingMessage = document.getElementById("loading-message");
  if (loadingMessage) loadingMessage.remove();

  // Reset section title
  const sectionTitle = document.getElementById("section-title");
  if (sectionTitle) sectionTitle.textContent = "Popular Movies";

  // Display movies
  await displayMovies(movies);
}
