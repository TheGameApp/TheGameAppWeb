# 🚀 Quick Start Guide

## Running Projects Locally

### Aura Alpha Web

```bash
cd apps/aura_alpha_web
python -m http.server 8000
# Open http://localhost:8000
```

### Destinated Web

```bash
cd apps/destinated_web
python -m http.server 8001
# Open http://localhost:8001
```

## Project Structure

```
TheGameAppWeb/
├── apps/
│   ├── aura_alpha_web/          # Aura Alpha landing page
│   │   ├── src/
│   │   │   ├── domain/          # Business logic
│   │   │   ├── infrastructure/  # External integrations
│   │   │   ├── interfaces/      # Adapters
│   │   │   └── presentation/    # UI components
│   │   ├── public/              # Static assets
│   │   │   ├── css/
│   │   │   ├── js/
│   │   │   ├── images/
│   │   │   └── fonts/
│   │   ├── index.html
│   │   └── README.md
│   │
│   └── destinated_web/          # Destinated landing page
│       ├── src/
│       │   ├── domain/
│       │   ├── infrastructure/
│       │   ├── interfaces/
│       │   └── presentation/
│       ├── public/
│       │   ├── css/
│       │   ├── js/
│       │   ├── images/
│       │   └── fonts/
│       ├── index.html
│       └── README.md
│
├── README.md                    # Main documentation
├── CONTRIBUTING.md              # Contribution guidelines
├── QUICK_START.md              # This file
└── .gitignore                  # Git ignore rules
```

## Common Commands

### Development Server Options

**Python (recommended for simplicity)**
```bash
python -m http.server [port]
```

**Node.js serve**
```bash
npx serve -p [port]
```

**PHP**
```bash
php -S localhost:[port]
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: your feature description"

# Push to remote
git push origin feature/your-feature
```

## File Naming Conventions

- **HTML files**: `kebab-case.html` (e.g., `about-us.html`)
- **CSS files**: `kebab-case.css` (e.g., `main-styles.css`)
- **JS files**: `camelCase.js` (e.g., `mainController.js`)
- **Images**: `kebab-case.ext` (e.g., `hero-banner.jpg`)

## Clean Architecture Layers

1. **Domain** - Core business logic (entities, use cases)
2. **Infrastructure** - External dependencies (APIs, storage)
3. **Interfaces** - Adapters (controllers, presenters)
4. **Presentation** - UI components (views, components)

## Tips

- Each project is independent
- Shared resources can be added to a `shared/` folder if needed
- Follow existing code style in each project
- Test changes in multiple browsers
- Keep commits atomic and descriptive

## Need Help?

- Check project-specific README: `apps/[project-name]/README.md`
- Review CONTRIBUTING.md for detailed guidelines
- Contact: thegameapp00@gmail.com
