# ✨ Destined Web

<div align="center">
  <h3>Find Your Cosmic Soulmate</h3>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
</div>

## 📱 About Destined

Destined is a revolutionary dating app that uses the power of astrology and cosmic connections to help you find your perfect soulmate. By analyzing your birth chart, planetary positions, and personal preferences, Destined connects you with cosmically compatible partners destined to be in your life.

### ✨ Key Features

- **🌟 Cosmic Compatibility**: Advanced astrological algorithms analyze birth charts for perfect matches
- **📖 Manifestation Journal**: Digital journal to set intentions and track your journey to love
- **🌙 Birth Chart Matching**: Complete natal chart analysis based on exact birth time and location
- **💫 Synchronicity Tracking**: Monitor cosmic signs and meaningful coincidences
- **🌐 Multi-language Support**: Available in English and Spanish

## 🏗️ Project Architecture

This project follows **Clean Architecture** principles, ensuring a modular, maintainable, and testable codebase.

### 📂 Project Structure

```
destined_web/
├── domain/               # Business entities and rules
│   ├── entities/         # Core business objects
│   ├── usecases/         # Application-specific business rules
│   └── repositories/     # Data access interfaces
├── infrastructure/       # External frameworks and tools
│   └── repositories/     # Data access implementations
├── interfaces/           # Adapters between layers
│   ├── controllers/      # Request/response handlers
│   └── presenters/       # Data formatters
├── presentation/         # UI components
│   ├── views/            # Application views
│   ├── components/       # Reusable UI components
│   └── html/             # HTML pages
├── public/               # Static assets
│   ├── css/              # Stylesheets
│   ├── js/               # Client-side scripts
│   ├── images/           # Images and icons
│   └── fonts/            # Typography
└── index.html            # Main entry point
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript
- Git (for cloning the repository)

### Installation

1. **Navigate to the project directory**

   ```bash
   cd apps/destined_web
   ```

2. **Serve the application**

   Using Python:

   ```bash
   python -m http.server 8000
   ```

   Or using Node.js with a package like `serve`:

   ```bash
   npx serve
   ```

3. **Open in your browser**

   Navigate to `http://localhost:8000`

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  <p>© 2025 Destined. All Rights Reserved</p>
</div>
