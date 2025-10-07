import { initRoutes, router } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  initRoutes();

  router.updatePageLinks();
});
