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

        // Manejo del menú móvil
        this.setupMobileMenu();
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

        document.getElementById('contact-link')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.router.navigateTo('contact');
        });

        // Soporte para el enlace de features
        document.getElementById('features-link')?.addEventListener('click', (e) => {
            e.preventDefault();
            // Por ahora, redirigir a home ya que no tenemos una vista de features
            this.router.navigateTo('home');
            console.log('Features link clicked - redirecting to home for now');
        });

        // Soporte para el enlace de pricing
        document.getElementById('pricing-link')?.addEventListener('click', (e) => {
            e.preventDefault();
            // Por ahora, redirigir a home ya que no tenemos una vista de pricing
            this.router.navigateTo('home');
            console.log('Pricing link clicked - redirecting to home for now');
        });
    }

    setupMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;

        if (mobileMenuToggle && navLinks) {
            // Toggle menu on button click
            mobileMenuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenuToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
                body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
            });

            // Close menu when clicking on a link
            const navItems = navLinks.querySelectorAll('a');
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    mobileMenuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target) && navLinks.classList.contains('active')) {
                    mobileMenuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                }
            });

            // Prevent menu from closing when clicking inside
            navLinks.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }
}

// Iniciar la aplicación cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
}); 