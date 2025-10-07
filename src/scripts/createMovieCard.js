import { fetchTrailer } from "./fetchTrailer";
import { IMAGE_BASE_URL } from "./utils/config";
import placeholderImg from "../assets/img/placeholder-img.png";

export async function displayMovies(movies) {
  const container = document.getElementById("movie-cards");
  if (!container) return;
  container.textContent = "";

  if (!Array.isArray(movies) || movies.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No movies found.";
    container.appendChild(message);
    return;
  }

  for (const movie of movies) {
    const trailerUrl = await fetchTrailer(movie.id);

    // create movie card
    const card = document.createElement("div");
    card.className = "card jelly-card";

    // create image (flush to card edges)
    const img = document.createElement("img");
    img.src = movie.poster_path
      ? IMAGE_BASE_URL + movie.poster_path
      : placeholderImg;
    card.appendChild(img);

    // create content container for text + button
    const contentContainer = document.createElement("div");
    contentContainer.className = "card-content";

    // movie title
    const title = document.createElement("h3");
    title.textContent = movie.title;
    contentContainer.appendChild(title);

    // release date
    if (movie.release_date) {
      const release = document.createElement("p");

      const date = new Date(movie.release_date);
      const formattedDate = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);

      release.textContent = "Release: " + formattedDate; // e.g., "2 October 2024"
      contentContainer.appendChild(release);
    }

    // overview
    const overview = document.createElement("p");
    overview.textContent = movie.overview
      ? movie.overview.slice(0, 100) + "..."
      : "No description available.";
    contentContainer.appendChild(overview);

    // trailer button
    if (trailerUrl) {
      const trailerBtn = document.createElement("a");
      trailerBtn.href = trailerUrl;
      trailerBtn.target = "_blank";
      trailerBtn.className = "btn";
      trailerBtn.textContent = "Watch Trailer";
      contentContainer.appendChild(trailerBtn);
    }

    // append content container to card
    card.appendChild(contentContainer);

    // append card to container
    container.appendChild(card);
  }
}
