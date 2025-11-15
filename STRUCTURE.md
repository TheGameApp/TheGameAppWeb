# 📁 Repository Structure

## Complete Directory Tree

```
TheGameAppWeb/                          # Root monorepo
│
├── 📄 README.md                        # Main documentation
├── 📄 CONTRIBUTING.md                  # Contribution guidelines
├── 📄 QUICK_START.md                   # Quick reference guide
├── 📄 MIGRATION_NOTES.md               # Migration documentation
├── 📄 STRUCTURE.md                     # This file
├── 📄 .gitignore                       # Git ignore patterns
│
└── 📁 apps/                            # Applications directory
    │
    ├── 📁 aura_alpha_web/              # Aura Alpha landing page
    │   │
    │   ├── 📄 index.html               # Main entry point
    │   ├── 📄 README.md                # Project documentation
    │   │
    │   ├── 📁 src/                     # Source code (Clean Architecture)
    │   │   │
    │   │   ├── 📁 domain/              # Business logic layer
    │   │   │   ├── 📁 entities/        # Business entities
    │   │   │   │   └── User.js
    │   │   │   ├── 📁 usecases/        # Use cases
    │   │   │   │   └── UserUseCase.js
    │   │   │   └── 📁 repositories/    # Repository interfaces
    │   │   │       └── UserRepository.js
    │   │   │
    │   │   ├── 📁 infrastructure/      # External dependencies
    │   │   │   └── 📁 repositories/    # Repository implementations
    │   │   │       └── LocalStorageUserRepository.js
    │   │   │
    │   │   ├── 📁 interfaces/          # Adapters layer
    │   │   │   ├── 📁 controllers/     # Controllers
    │   │   │   │   └── UserController.js
    │   │   │   └── 📁 presenters/      # Presenters
    │   │   │
    │   │   └── 📁 presentation/        # UI layer
    │   │       ├── 📁 views/           # View components
    │   │       │   ├── HomeView.js
    │   │       │   ├── AboutView.js
    │   │       │   └── ContactView.js
    │   │       ├── 📁 components/      # Reusable components
    │   │       │   └── Router.js
    │   │       ├── 📁 html/            # HTML pages
    │   │       │   ├── home.html
    │   │       │   ├── stores.html
    │   │       │   ├── privacy-policy.html
    │   │       │   ├── terms.html
    │   │       │   └── delete-account.html
    │   │       └── app.js              # App initialization
    │   │
    │   └── 📁 public/                  # Static assets
    │       │
    │       ├── 📁 css/                 # Stylesheets
    │       │   ├── main.css
    │       │   ├── styles.css
    │       │   ├── 📁 base/            # Base styles
    │       │   │   ├── reset.css
    │       │   │   ├── variables.css
    │       │   │   └── typography.css
    │       │   ├── 📁 layout/          # Layout styles
    │       │   │   ├── header.css
    │       │   │   ├── footer.css
    │       │   │   └── grid.css
    │       │   ├── 📁 components/      # Component styles
    │       │   │   ├── buttons.css
    │       │   │   ├── cards.css
    │       │   │   ├── navigation.css
    │       │   │   └── language-switcher.css
    │       │   ├── 📁 sections/        # Section styles
    │       │   │   ├── hero.css
    │       │   │   ├── features.css
    │       │   │   ├── testimonials.css
    │       │   │   ├── cta.css
    │       │   │   └── stores.css
    │       │   └── 📁 utils/           # Utility styles
    │       │       ├── helpers.css
    │       │       ├── animations.css
    │       │       └── responsive.css
    │       │
    │       ├── 📁 js/                  # JavaScript files
    │       │   ├── carousel.js
    │       │   └── 📁 i18n/            # Internationalization
    │       │       ├── i18n.js
    │       │       └── translations.js
    │       │
    │       ├── 📁 images/              # Images and icons
    │       │   └── README.md
    │       │
    │       └── 📁 fonts/               # Typography files
    │           └── README.md
    │
    └── 📁 destinated_web/              # Destinated landing page
        │
        ├── 📄 index.html               # Main entry point
        ├── 📄 README.md                # Project documentation
        │
        ├── 📁 src/                     # Source code (Clean Architecture)
        │   │
        │   ├── 📁 domain/              # Business logic layer
        │   │   ├── 📁 entities/        # Business entities
        │   │   ├── 📁 usecases/        # Use cases
        │   │   └── 📁 repositories/    # Repository interfaces
        │   │
        │   ├── 📁 infrastructure/      # External dependencies
        │   │   └── 📁 repositories/    # Repository implementations
        │   │
        │   ├── 📁 interfaces/          # Adapters layer
        │   │   ├── 📁 controllers/     # Controllers
        │   │   └── 📁 presenters/      # Presenters
        │   │
        │   └── 📁 presentation/        # UI layer
        │       ├── 📁 views/           # View components
        │       ├── 📁 components/      # Reusable components
        │       └── 📁 html/            # HTML pages
        │
        └── 📁 public/                  # Static assets
            ├── 📁 css/                 # Stylesheets
            │   └── main.css
            ├── 📁 js/                  # JavaScript files
            │   └── main.js
            ├── 📁 images/              # Images and icons
            └── 📁 fonts/               # Typography files
```

## Key Directories Explained

### Root Level
- **Documentation files**: Guides and references for the monorepo
- **apps/**: Contains all web projects

### Project Structure (Each App)
Each project follows Clean Architecture with these layers:

#### 1. **Domain Layer** (`src/domain/`)
- Core business logic
- Independent of frameworks
- Contains entities, use cases, and repository interfaces

#### 2. **Infrastructure Layer** (`src/infrastructure/`)
- External dependencies
- Database implementations
- Third-party service integrations

#### 3. **Interfaces Layer** (`src/interfaces/`)
- Adapters between layers
- Controllers handle requests
- Presenters format data

#### 4. **Presentation Layer** (`src/presentation/`)
- UI components and views
- User-facing elements
- HTML pages

#### 5. **Public Assets** (`public/`)
- Static files (CSS, JS, images, fonts)
- Organized by type
- Directly accessible by browser

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| HTML | kebab-case | `privacy-policy.html` |
| CSS | kebab-case | `main-styles.css` |
| JavaScript | camelCase | `userController.js` |
| Images | kebab-case | `hero-banner.jpg` |
| Folders | kebab-case | `user-profile/` |

## Adding New Files

### Adding a Component
```bash
# For Aura Alpha Web
touch apps/aura_alpha_web/src/presentation/components/NewComponent.js

# For Destinated Web
touch apps/destinated_web/src/presentation/components/NewComponent.js
```

### Adding a Style
```bash
# For Aura Alpha Web
touch apps/aura_alpha_web/public/css/components/new-component.css

# For Destinated Web
touch apps/destinated_web/public/css/new-component.css
```

### Adding an HTML Page
```bash
# For Aura Alpha Web
touch apps/aura_alpha_web/src/presentation/html/new-page.html

# For Destinated Web
touch apps/destinated_web/src/presentation/html/new-page.html
```

## Navigation

- **Main docs**: `README.md`
- **Quick start**: `QUICK_START.md`
- **Contributing**: `CONTRIBUTING.md`
- **Migration info**: `MIGRATION_NOTES.md`
- **This structure**: `STRUCTURE.md`

## Project-Specific Docs

- **Aura Alpha**: `apps/aura_alpha_web/README.md`
- **Destinated**: `apps/destinated_web/README.md`

---

Last updated: November 14, 2025
