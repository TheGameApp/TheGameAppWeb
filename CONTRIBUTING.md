# Contributing to TheGameApp Web Monorepo

Thank you for your interest in contributing to TheGameApp Web projects!

## 🗂️ Monorepo Structure

This repository contains multiple web projects:

- **apps/aura_alpha_web** - Landing page for Aura Alpha app
- **apps/destinated_web** - Landing page for Destinated app

## 🚀 Development Workflow

### Working on a Specific Project

1. **Navigate to the project directory**
   ```bash
   cd apps/[project-name]
   ```

2. **Start a local development server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx serve
   ```

3. **Make your changes**
   - Follow the existing code style
   - Maintain Clean Architecture principles
   - Keep changes focused and atomic

### Adding a New Project

1. **Create project directory**
   ```bash
   mkdir -p apps/[new-project-name]
   ```

2. **Set up Clean Architecture structure**
   ```bash
   cd apps/[new-project-name]
   mkdir -p src/{domain,infrastructure,interfaces,presentation}
   mkdir -p public/{css,js,images,fonts}
   ```

3. **Create initial files**
   - `index.html` - Main entry point
   - `README.md` - Project-specific documentation
   - `public/css/main.css` - Main stylesheet
   - `public/js/main.js` - Main JavaScript file

4. **Update root README.md**
   - Add project to the projects list
   - Include brief description and key features

## 📋 Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Include appropriate meta tags
- Use meaningful class names

### CSS
- Follow BEM naming convention when applicable
- Use CSS custom properties for theming
- Keep selectors specific but not overly complex
- Organize styles logically (reset → layout → components → utilities)

### JavaScript
- Use ES6+ features
- Follow functional programming patterns
- Use descriptive variable names
- Add comments for complex logic
- Handle errors appropriately

## 🏛️ Clean Architecture Guidelines

Each project should follow Clean Architecture layers:

1. **Domain Layer** (`src/domain/`)
   - Business entities
   - Use cases
   - Repository interfaces

2. **Infrastructure Layer** (`src/infrastructure/`)
   - Repository implementations
   - External service integrations

3. **Interfaces Layer** (`src/interfaces/`)
   - Controllers
   - Presenters
   - Adapters

4. **Presentation Layer** (`src/presentation/`)
   - Views
   - Components
   - UI-specific logic

## 🔍 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the code style guidelines
   - Test your changes thoroughly
   - Update documentation if needed

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Request review from maintainers

## 🐛 Reporting Bugs

When reporting bugs, please include:

- Project name (which app in the monorepo)
- Browser and version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

## 💡 Suggesting Features

We welcome feature suggestions! Please:

- Check if the feature has already been suggested
- Clearly describe the feature and its benefits
- Explain how it fits with the project's goals
- Provide examples or mockups if possible

## 📞 Getting Help

If you need help:

- Check the project-specific README
- Review existing issues and discussions
- Contact: thegameapp00@gmail.com

---

Thank you for contributing to TheGameApp Web projects! 🎉
