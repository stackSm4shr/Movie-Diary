export function SearchBar() {
  return `
    <div class="flex items-center gap-2 mb-6">
      <input
        id="search-input"
        type="text"
        placeholder="Search movie"
        class="flex-grow p-3 bg-ct-surface0 text-ct-text border border-ct-surface1 rounded-jelly placeholder-ct-subtext1 focus:outline-none focus:ring-2 focus:ring-ct-mauve"
      />
      <button
        id="search-btn"
        class="btn-jelly bg-ct-mauve text-ct-text hover:bg-ct-pink hover:text-ct-base"
      >
        Search
      </button>
    </div>
  `;
}
