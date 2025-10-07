export function favoriteButton(title, poster, contentContainer, id) {
  const iconContainer = document.createElement("div");
  iconContainer.className = "flex justify-center mt-3";

  const icon = document.createElement("i");

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isFavorited = favorites.some((fav) => fav.id === id);

  icon.className = `${
    isFavorited ? "fa-solid" : "fa-regular"
  } fa-heart text-xl cursor-pointer ${
    isFavorited ? "text-red-500" : "text-gray-800"
  }`;

  icon.addEventListener("click", () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.some((fav) => fav.id === id);

    if (exists) {
      favorites = favorites.filter((fav) => fav.id !== id);
      icon.className =
        "fa-regular fa-heart text-xl text-gray-800 cursor-pointer";
    } else {
      favorites.push({ id, title, poster, text: "" });
      icon.className = "fa-solid fa-heart text-xl text-red-500 cursor-pointer";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  iconContainer.appendChild(icon);
  contentContainer.appendChild(iconContainer);
}
