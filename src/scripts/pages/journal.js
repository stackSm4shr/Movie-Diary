import { Navbar } from "../../components/navbar";

export function initJournal() {
  const app = document.getElementById("app");
  app.innerHTML = `
    ${Navbar()}
    <main class="container mx-auto px-4 text-ct-subtext1">
      <h1 class="text-3xl font-bold mb-6">Journal</h1>
      <section id="journal-entries" class="p-4"></section>
    </main>
  `;
}
