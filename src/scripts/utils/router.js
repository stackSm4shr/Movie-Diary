import Navigo from "navigo";
import { initHome } from "../pages/home.js";
import { initJournal } from "../pages/journal.js";

export const router = new Navigo("/", { hash: false });

export function initRoutes() {
  router
    .on({
      "/": () => {
        initHome();
      },
      "/journal": () => {
        initJournal();
      },
    })
    .notFound(() => {
      document.querySelector("#app").innerHTML = `<h1>404 - Not Found</h1>`;
    })
    .resolve();
}
