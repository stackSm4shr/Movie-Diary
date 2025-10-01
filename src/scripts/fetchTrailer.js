import { BASE_URL } from "./config";

export async function fetchTrailer(movieId, baseUrl) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  const data = await res.json();
  const trailer = data.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );
  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
}
