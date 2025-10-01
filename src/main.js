import "./main.css";
import "./scripts/journal.js";
import { fetchPopularMovies } from "./scripts/fetchMovies.js";
import { searchMovies } from "./scripts/searchbarHandling.js";

// call function to fetch popular Movies
fetchPopularMovies();
searchMovies();
