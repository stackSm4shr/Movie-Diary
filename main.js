const API_KEY = "9b06866fcad71d8b66f39ef400f9591d";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// function to fetch popular movies
async function fetchPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  document.getElementById("section-title").textContent = "Popular Movies";
  displayMovies(data.results);
}

// function to fetch searched movies
async function searchMovies(query) {
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

// function to fetch trailer link
async function fetchTrailer(movieId) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  const trailer = data.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );
  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
}

// function to display movies
async function displayMovies(movies) {
  const container = document.getElementById("movie-cards");

  // reset content
  container.textContent = "";

  // check if movie is found in search if no, show message
  if (movies.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No movies found.";
    container.appendChild(message);
    return;
  }

  // building cards for fetched movies with for loop
  for (const movie of movies) {
    const trailerUrl = await fetchTrailer(movie.id);

    // create movie card
    const card = document.createElement("div");
    card.className = "card";

    // create image
    const img = document.createElement("img");
    //check with ternary operator if truthy if not show placeholder
    img.src = movie.poster_path
      ? IMAGE_BASE_URL + movie.poster_path
      : "https://via.placeholder.com/200x300?text=No+Image";
    card.appendChild(img);

    // create Movie Title
    const title = document.createElement("h2");
    title.textContent = movie.title;
    card.appendChild(title);

    // create relasedate
    const release = document.createElement("p");
    release.textContent = "Release: " + (movie.release_date || "Unknown");
    card.appendChild(release);

    //create description
    const overview = document.createElement("p");
    //check with ternary operator if truthy if not show "No description available."
    overview.textContent = movie.overview
      ? movie.overview.slice(0, 100) + "..."
      : "No description available.";
    card.appendChild(overview);

    // check if there is a trailer and append button if true
    if (trailerUrl) {
      const trailerBtn = document.createElement("a");
      trailerBtn.href = trailerUrl;
      trailerBtn.target = "_blank";
      trailerBtn.className = "btn";
      trailerBtn.textContent = "Watch Trailer";
      card.appendChild(trailerBtn);
    }

    container.appendChild(card);
  }
}

// event listener for search bar button
document.getElementById("search-btn").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.trim();
  if (query) searchMovies(query);
});

// event listener for search bar input field
document.getElementById("search-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = e.target.value.trim();
    if (query) searchMovies(query);
  }
});

// call function to fetch popular Movies
fetchPopularMovies();
