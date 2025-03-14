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
        // Solo inicializamos las rutas sin intentar renderizar
        let path = window.location.hash.slice(1);
        if (!path || !this.routes[path]) {
            path = this.defaultRoute;
            window.location.hash = `#${path}`;
        }
    }

    handleRouteChange() {
        // Solo manejamos el cambio de ruta sin intentar renderizar
        let path = window.location.hash.slice(1);
        if (!path || !this.routes[path]) {
            path = this.defaultRoute;
            window.location.hash = `#${path}`;
        }
    }

    navigateTo(path) {
        window.location.hash = `#${path}`;
    }
} 