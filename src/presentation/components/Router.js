/**
 * Clase Router
 * Maneja la navegación entre vistas
 */
export class Router {
    constructor() {
        this.routes = {};
        this.currentView = null;

        // Manejar eventos de navegación
        window.addEventListener('hashchange', this.handleRouteChange.bind(this));
    }

    addRoute(path, view) {
        this.routes[path] = view;
        return this;
    }

    setDefaultRoute(path) {
        this.defaultRoute = path;
        return this;
    }

    init() {
        this.handleRouteChange();
    }

    handleRouteChange() {
        // Obtener la ruta actual del hash de la URL
        let path = window.location.hash.slice(1);

        // Si no hay ruta, usar la ruta por defecto
        if (!path || !this.routes[path]) {
            path = this.defaultRoute;
            window.location.hash = `#${path}`;
        }

        // Obtener la vista correspondiente a la ruta
        const view = this.routes[path];

        // Renderizar la vista
        if (view) {
            if (this.currentView !== view) {
                this.currentView = view;
                view.render();
            }
        }
    }

    navigateTo(path) {
        window.location.hash = `#${path}`;
    }
} 