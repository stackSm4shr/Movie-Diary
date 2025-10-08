import { Navbar } from "../../components/navbar";
import { favoriteButton } from "../favorite";

export function initJournal() {
  const app = document.getElementById("app");
  app.innerHTML = `
    ${Navbar()}
    <main class="container mx-auto px-4 text-ct-subtext1">
      <h1 class="text-3xl font-bold mb-6" id="section-title">Popular Movies</h1>
      <section id="movie-cards" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        <p id="loading-message">Loading...</p>
      </section>
    </main>
  `;

  const container = document.getElementById("movie-cards");

  function getFavorites() {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  }

  function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  const favorites = getFavorites();
  console.log(favorites);

  const loadingMessage = document.getElementById("loading-message");
  if (loadingMessage) loadingMessage.remove();

  if (favorites.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No favorite movies found.";
    message.className = "col-span-full text-center text-gray-500";
    container.appendChild(message);
    return;
  }

  for (const movie of favorites) {
    const card = document.createElement("div");
    card.className = "card jelly-card";

    const img = document.createElement("img");
    img.src = movie.poster;
    card.appendChild(img);

    const contentContainer = document.createElement("div");
    contentContainer.className = "card-content";

    const title = document.createElement("h3");
    title.textContent = movie.title;
    contentContainer.appendChild(title);

    const textarea = document.createElement("textarea");
    textarea.placeholder = "Notes";
    textarea.className = "w-full p-2 mt-2 border rounded text-sm resize-none";
    textarea.rows = 4;
    textarea.value = movie.text || ""; // Load saved journal text
    contentContainer.appendChild(textarea);

    textarea.addEventListener("blur", () => {
      const updatedFavorites = getFavorites();
      const index = updatedFavorites.findIndex((fav) => fav.id === movie.id);
      if (index !== -1) {
        updatedFavorites[index].text = textarea.value;
        saveFavorites(updatedFavorites);
      }
    });

    // Favorite button
    favoriteButton(movie.title, movie.poster, contentContainer, movie.id);

    card.appendChild(contentContainer);
    container.appendChild(card);
  }
}

