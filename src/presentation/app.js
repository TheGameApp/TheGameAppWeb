import { LocalStorageUserRepository } from '../infrastructure/repositories/LocalStorageUserRepository.js';
import { UserUseCase } from '../domain/usecases/UserUseCase.js';
import { UserController } from '../interfaces/controllers/UserController.js';
import { HomeView } from './views/HomeView.js';
import { AboutView } from './views/AboutView.js';
import { ContactView } from './views/ContactView.js';
import { Router } from './components/Router.js';

/**
 * Clase App
 * Punto de entrada de la aplicación
 */
class App {
    constructor() {
        // Inicializar dependencias (Inyección de dependencias)
        this.initDependencies();

        // Inicializar el enrutador
        this.initRouter();

        // Configurar eventos de navegación
        this.setupNavigation();
    }

    initDependencies() {
        // Repositorio
        this.userRepository = new LocalStorageUserRepository();

        // Caso de uso
        this.userUseCase = new UserUseCase(this.userRepository);

        // Controlador
        this.userController = new UserController(this.userUseCase);

        // Vistas
        this.homeView = new HomeView();
        this.aboutView = new AboutView();
        this.contactView = new ContactView(this.userController);
    }

    initRouter() {
        this.router = new Router();

        // Configurar rutas
        this.router
            .addRoute('home', this.homeView)
            .addRoute('about', this.aboutView)
            .addRoute('contact', this.contactView)
            .setDefaultRoute('home');

        // Iniciar el enrutador
        this.router.init();
    }

    setupNavigation() {
        // Configurar eventos de clic en los enlaces de navegación
        document.getElementById('home-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.router.navigateTo('home');
        });

        document.getElementById('about-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.router.navigateTo('about');
        });

        document.getElementById('contact-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.router.navigateTo('contact');
        });
    }
}

// Iniciar la aplicación cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
}); 