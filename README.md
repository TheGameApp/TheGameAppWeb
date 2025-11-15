# 🎮 TheGameApp Web - Monorepo

<div align="center">
  <h3>Multi-Project Web Platform</h3>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Clean Architecture](https://img.shields.io/badge/Clean%20Architecture-6DB33F?style=flat&logoColor=white)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
</div>

## 📋 Overview

This monorepo contains multiple web projects for TheGameApp ecosystem, each following Clean Architecture principles.

## 🗂️ Projects

### 🎯 [Aura Alpha Web](./apps/aura_alpha_web)
Landing page for promoting the Aura Alpha app - a revolutionary platform designed to help users master social connections and improve their dating game.

**Key Features:**
- 🤖 Smart Response AI
- 🎯 Status Bait Creator
- 🔥 Attraction Mastery
- 📊 Progress Tracking
- 🌐 Multi-language Support (English & Spanish)

[View Project →](./apps/aura_alpha_web)

---

### 🌍 [Destinated Web](./apps/destinated_web)
Landing page for promoting the Destinated app - an innovative application that helps users discover and plan their perfect destinations.

**Key Features:**
- Coming soon...

[View Project →](./apps/destinated_web)

---

## 🏗️ Monorepo Structure

```
TheGameAppWeb/
├── apps/
│   ├── aura_alpha_web/      # Aura Alpha landing page
│   │   ├── src/
│   │   │   ├── domain/
│   │   │   ├── infrastructure/
│   │   │   ├── interfaces/
│   │   │   └── presentation/
│   │   ├── public/
│   │   └── index.html
│   │
│   └── destinated_web/      # Destinated landing page
│       ├── src/
│       │   ├── domain/
│       │   ├── infrastructure/
│       │   ├── interfaces/
│       │   └── presentation/
│       ├── public/
│       └── index.html
│
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript
- Git (for cloning the repository)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TheGameApp/TheGameAppWeb.git
   cd TheGameAppWeb
   ```

2. **Navigate to a specific project**

   For Aura Alpha Web:
   ```bash
   cd apps/aura_alpha_web
   ```

   For Destinated Web:
   ```bash
   cd apps/destinated_web
   ```

3. **Serve the application**

   Since the applications use ES6 modules, you'll need to serve them through a local web server:

   Using Python:
   ```bash
   python -m http.server 8000
   ```

   Or using Node.js with a package like `serve`:
   ```bash
   npx serve
   ```

4. **Open in your browser**

   Navigate to `http://localhost:8000`

## 🏛️ Architecture

All projects in this monorepo follow **Clean Architecture** principles:

<div align="center">
  <img src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg" alt="Clean Architecture Diagram" width="400" />
</div>

### Clean Architecture Layers

1. **Domain Layer** - Business entities and rules
2. **Infrastructure Layer** - External frameworks and tools
3. **Interfaces Layer** - Adapters between layers
4. **Presentation Layer** - UI components and views

### Benefits

- ✅ **Framework Independence**: Core logic doesn't depend on external frameworks
- ✅ **Testability**: Business rules can be tested in isolation
- ✅ **UI Independence**: Interface can change without affecting business logic
- ✅ **Database Independence**: Storage technology can be swapped easily
- ✅ **Maintainability**: Clear separation of concerns

## 👨‍💻 Contributing

We welcome contributions to any project in this monorepo! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>© 2025 TheGameApp. All Rights Reserved</p>
  <p>
    <a href="https://github.com/TheGameApp">GitHub</a> •
    <a href="mailto:thegameapp00@gmail.com">Contact</a>
  </p>
</div>
