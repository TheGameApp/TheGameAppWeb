/**
 * Internationalization (i18n) module for AuraAlphaApp
 * Handles language detection and text translation
 */
import translations from "./translations.js";

class I18n {
  constructor() {
    // Available languages
    this.languages = ["en", "es"];
    this.defaultLanguage = "en";

    // Detect browser language
    this.currentLanguage = this.detectLanguage();

    // Initialize translations
    this.init();
  }

  /**
   * Detect the browser language and match it with available languages
   * @returns {string} The detected language code or default language
   */
  detectLanguage() {
    // Get browser language (e.g. 'en-US', 'es-ES', etc.)
    const browserLang = navigator.language || navigator.userLanguage;

    // Extract the language code (e.g. 'en', 'es', etc.)
    const langCode = browserLang.split("-")[0];

    // Check if the language is supported
    if (this.languages.includes(langCode)) {
      return langCode;
    }

    // Return default language if not supported
    return this.defaultLanguage;
  }

  /**
   * Get a translation by key
   * @param {string} key - The translation key
   * @returns {string} The translated text
   */
  t(key) {
    // Get the current language translations
    const langData = translations[this.currentLanguage];

    // Return the translation or the key if not found
    return langData && langData[key] ? langData[key] : key;
  }

  /**
   * Change the current language
   * @param {string} langCode - The language code to switch to
   */
  changeLanguage(langCode) {
    if (this.languages.includes(langCode)) {
      this.currentLanguage = langCode;
      this.applyTranslations();

      // Store the language preference
      localStorage.setItem("app_language", langCode);

      // Dispatch an event to notify language change
      window.dispatchEvent(
        new CustomEvent("languageChanged", { detail: langCode })
      );
    }
  }

  /**
   * Initialize the i18n module
   */
  init() {
    // Check for stored language preference
    const storedLang = localStorage.getItem("app_language");
    if (storedLang && this.languages.includes(storedLang)) {
      this.currentLanguage = storedLang;
    }

    // Apply translations
    this.applyTranslations();

    // Add language switcher functionality
    this.setupLanguageSwitcher();
  }

  /**
   * Apply translations to all elements with data-i18n attribute
   */
  applyTranslations() {
    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.t(key);

      // Check if the translation contains HTML
      if (translation.includes("<") && translation.includes(">")) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Handle placeholders
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      element.placeholder = this.t(key);
    });
  }

  /**
   * Set up language switcher functionality
   */
  setupLanguageSwitcher() {
    // Create language switcher if it doesn't exist
    if (!document.querySelector(".language-switcher")) {
      this.createLanguageSwitcher();
    }

    // Add event listeners to language switcher buttons
    document.querySelectorAll(".language-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        this.changeLanguage(lang);

        // Update active state
        document.querySelectorAll(".language-btn").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-lang") === lang);
        });
      });
    });
  }

  /**
   * Create language switcher UI
   */
  createLanguageSwitcher() {
    const switcher = document.createElement("div");
    switcher.className = "language-switcher";

    // Create buttons for each language
    this.languages.forEach((lang) => {
      const btn = document.createElement("button");
      btn.className = `language-btn ${
        lang === this.currentLanguage ? "active" : ""
      }`;
      btn.setAttribute("data-lang", lang);
      btn.textContent = lang.toUpperCase();
      switcher.appendChild(btn);
    });

    // Add to the header
    const header = document.querySelector("header .header-container");
    if (header) {
      header.appendChild(switcher);
    }
  }
}

// Create and export a singleton instance
const i18n = new I18n();
export default i18n;
