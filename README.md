# 🎬 Movie Diary

A **Movie Diary** web app built with **JavaScript**, **Tailwind CSS**, and the **TMDB API**.  
Browse popular movies, search for titles, save your favourites, and add personal notes to build your own movie journal.

---

## 🚀 Features

- **Two-page navigation**
  - `index.html` ↔ `main.js`: Homepage to browse and search movies.
  - `journal.html` ↔ `journal.js`: Journal page to view and manage favourites.
- **Navigation bar** on both pages to switch between Homepage and Journal.
- **Fetch popular movies** from the [TMDB API](https://developer.themoviedb.org/docs).
- **Search functionality** with a dialog to display results/feedback.
- **Movie cards** showing poster, title, and key info.
- **Add to favourites**:
  - Save movies to localStorage as objects.
  - Persist data across sessions.
- **Journal page**:
  - View your saved favourites.
  - Add and edit **personal notes** for each movie (persisted in localStorage).

---

## 📂 File Structure

├── index.html # Homepage
├── main.js # Homepage logic (fetch, search, favourites)
├── journal.html # Journal page
├── journal.js # Journal logic (favourites, notes)
└── README.md

---

## ⚡️ Getting Started

### 1. Clone the Repository

```console
git clone https://github.com/stackSm4shr/movie-diary.git
cd movie-diary
```

### 2. Setup TMDB API Key

Create a free account at TMDB.

Generate an API key from your profile settings.

In main.js, replace:

```js
const API_KEY = "YOUR_TMDB_API_KEY";
```
