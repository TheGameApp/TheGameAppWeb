import i18n from "../../../public/js/i18n/i18n.js";

/**
 * Clase Router
 * Maneja la navegación entre vistas
 */
export class Router {
  constructor() {
    this.routes = {};
    this.currentView = null;

    window.addEventListener("hashchange", this.handleRouteChange.bind(this));
  }

  addRoute(path, view) {
    this.routes[path] = `/src/presentation/html/${view}`;
    return this;
  }

  setDefaultRoute(path) {
    this.defaultRoute = path;
    return this;
  }

  async handleRouteChange() {
    let path = window.location.hash.slice(1);
    if (!path || !this.routes[path]) {
      path = this.defaultRoute;
      window.location.hash = `#${path}`;
    }

    const view = this.routes[path];
    if (view) {
      try {
        const response = await fetch(view);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const content = await response.text();
        document.getElementById("app-content").innerHTML = content;
        
        // Aplicar traducciones al contenido cargado dinámicamente
        i18n.applyTranslations();
      } catch (error) {
        console.error("Error cargando la vista:", error);
        document.getElementById("app-content").innerHTML =
          "<h2>Error cargando la página</h2>";
      }
    }
  }

  navigateTo(path) {
    window.location.hash = `#${path}`;
  }

  init() {
    this.handleRouteChange();
  }
}
