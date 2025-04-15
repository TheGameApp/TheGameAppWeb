import { Router } from "./components/Router.js";
import i18n from "../../public/js/i18n/i18n.js";

/**
 * Clase App
 * Punto de entrada de la aplicación
 */
class App {
  constructor() {
    console.log("App constructor initialized");

    // Inicializar el enrutador
    this.initRouter();

    // Configurar eventos de navegación
    this.setupNavigation();

    // Manejo del menú móvil
    this.setupMobileMenu();

    // Configurar internacionalización
    this.setupI18n();

    console.log("App initialization completed");
  }

  initRouter() {
    this.router = new Router();

    // Configurar rutas
    this.router
      .addRoute("home", "home.html")
      .addRoute("terms", "terms.html")
      .addRoute("privacy", "privacy-policy.html")
      .addRoute("delete-account", "delete-account.html");

    // Configurar la ruta por defecto
    this.router.setDefaultRoute("home");

    // Iniciar el enrutador
    this.router.init();
  }

  setupNavigation() {
    // Lista de enlaces de navegación
    const links = ["home", "about", "pricing", "features", "terms", "privacy"];

    links.forEach((link) => {
      document
        .getElementById(`${link}-link`)
        ?.addEventListener("click", (e) => {
          e.preventDefault();
          this.router.navigateTo(link);
          console.log(`${link} link clicked`);
        });
    });
  }

  setupMobileMenu() {
    console.log("Setting up mobile menu - start");
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    console.log("Mobile menu elements:", {
      mobileMenuToggle: mobileMenuToggle,
      navLinks: navLinks,
      body: body,
    });

    if (mobileMenuToggle && navLinks) {
      // Toggle menu on button click
      mobileMenuToggle.addEventListener("click", (e) => {
        console.log("Mobile menu clicked - current state:", {
          menuToggleActive: mobileMenuToggle.classList.contains("active"),
          navLinksActive: navLinks.classList.contains("active"),
        });
        e.stopPropagation();
        mobileMenuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
        body.style.overflow = navLinks.classList.contains("active")
          ? "hidden"
          : "";
        body.classList.toggle(
          "mobile-menu-open",
          navLinks.classList.contains("active")
        );
        console.log("Menu state after click:", {
          menuToggleActive: mobileMenuToggle.classList.contains("active"),
          navLinksActive: navLinks.classList.contains("active"),
          bodyOverflow: body.style.overflow,
        });
      });

      // Close menu when clicking on a link
      const navItems = navLinks.querySelectorAll("a");
      console.log("Nav items found:", navItems.length);
      navItems.forEach((item) => {
        item.addEventListener("click", () => {
          console.log("Nav item clicked - closing menu");
          mobileMenuToggle.classList.remove("active");
          navLinks.classList.remove("active");
          body.classList.remove("mobile-menu-open");
          body.style.overflow = "";
        });
      });

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (
          !navLinks.contains(e.target) &&
          !mobileMenuToggle.contains(e.target) &&
          navLinks.classList.contains("active")
        ) {
          console.log("Clicking outside menu - closing");
          mobileMenuToggle.classList.remove("active");
          navLinks.classList.remove("active");
          body.classList.remove("mobile-menu-open");
          body.style.overflow = "";
        }
      });

      // Prevent menu from closing when clicking inside
      navLinks.addEventListener("click", (e) => {
        console.log("Clicking inside menu - preventing propagation");
        e.stopPropagation();
      });
    } else {
      console.warn("Mobile menu elements not found:", {
        mobileMenuToggle: !!mobileMenuToggle,
        navLinks: !!navLinks,
      });
    }
    console.log("Setting up mobile menu - complete");
  }

  setupI18n() {
    console.log("Setting up internationalization");

    // Escuchar eventos de cambio de idioma
    window.addEventListener("languageChanged", (event) => {
      console.log(`Language changed to: ${event.detail}`);

      // Actualizar el atributo lang del HTML
      document.documentElement.lang = event.detail;

      // Actualizar clases activas en los botones de idioma
      document.querySelectorAll(".language-btn").forEach((btn) => {
        btn.classList.toggle(
          "active",
          btn.getAttribute("data-lang") === event.detail
        );
      });
    });

    // Aplicar traducciones iniciales
    i18n.applyTranslations();

    console.log("Current language:", i18n.currentLanguage);
  }
}

// Iniciar la aplicación cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
});
