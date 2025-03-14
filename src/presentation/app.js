import { Router } from './components/Router.js';

/**
 * Clase App
 * Punto de entrada de la aplicación
 */
class App {
    constructor() {
        console.log('App constructor initialized');

        // Inicializar el enrutador
        this.initRouter();

        // Configurar eventos de navegación
        this.setupNavigation();

        // Manejo del menú móvil
        this.setupMobileMenu();

        console.log('App initialization completed');
    }

    initRouter() {
        this.router = new Router();
        // Configurar rutas básicas
        this.router
            .setDefaultRoute('home');
        // Iniciar el enrutador
        this.router.init();
    }

    setupNavigation() {
        // Configurar eventos de clic en los enlaces de navegación
        const links = ['home', 'about', 'pricing', 'features'];
        links.forEach(link => {
            document.getElementById(`${link}-link`)?.addEventListener('click', (e) => {
                e.preventDefault();
                this.router.navigateTo(link);
                console.log(`${link} link clicked`);
            });
        });
    }

    setupMobileMenu() {
        console.log('Setting up mobile menu - start');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;

        console.log('Mobile menu elements:', {
            mobileMenuToggle: mobileMenuToggle,
            navLinks: navLinks,
            body: body
        });

        if (mobileMenuToggle && navLinks) {
            // Toggle menu on button click
            mobileMenuToggle.addEventListener('click', (e) => {
                console.log('Mobile menu clicked - current state:', {
                    menuToggleActive: mobileMenuToggle.classList.contains('active'),
                    navLinksActive: navLinks.classList.contains('active')
                });
                e.stopPropagation();
                mobileMenuToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
                body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
                console.log('Menu state after click:', {
                    menuToggleActive: mobileMenuToggle.classList.contains('active'),
                    navLinksActive: navLinks.classList.contains('active'),
                    bodyOverflow: body.style.overflow
                });
            });

            // Close menu when clicking on a link
            const navItems = navLinks.querySelectorAll('a');
            console.log('Nav items found:', navItems.length);
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    console.log('Nav item clicked - closing menu');
                    mobileMenuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target) && navLinks.classList.contains('active')) {
                    console.log('Clicking outside menu - closing');
                    mobileMenuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                }
            });

            // Prevent menu from closing when clicking inside
            navLinks.addEventListener('click', (e) => {
                console.log('Clicking inside menu - preventing propagation');
                e.stopPropagation();
            });
        } else {
            console.warn('Mobile menu elements not found:', {
                mobileMenuToggle: !!mobileMenuToggle,
                navLinks: !!navLinks
            });
        }
        console.log('Setting up mobile menu - complete');
    }
}

// Iniciar la aplicación cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
}); 