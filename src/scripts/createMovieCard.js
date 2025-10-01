import { fetchTrailer } from "./fetchTrailer";
import { IMAGE_BASE_URL } from "./config";

export async function displayMovies(movies) {
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
    const title = document.createElement("h3");
    title.textContent = movie.title;
    card.appendChild(title);

    // create relasedate
    if (movie.release_date) {
      const release = document.createElement("p");
      release.textContent = "Release: " + (movie.release_date || "Unknown");
      card.appendChild(release);
    }
    //create description
    if (movie.overview) {
      const overview = document.createElement("p");
      //check with ternary operator if truthy if not show "No description available."
      overview.textContent = movie.overview
        ? movie.overview.slice(0, 100) + "..."
        : "No description available.";
      card.appendChild(overview);
    }

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
