# Assets de Imágenes

Este directorio contiene todas las imágenes y recursos visuales utilizados en el proyecto.

## Estructura de directorios

- **logo/**: Logotipos e identidad visual de la marca
- **hero/**: Imágenes para la sección principal (hero section)
- **features/**: Imágenes relacionadas con características o beneficios
- **testimonials/**: Fotos de clientes para testimonios
- **icons/**: Iconos utilizados en toda la aplicación
- **misc/**: Imágenes misceláneas que no encajan en otras categorías

## Ubicación del Logo

Para el logo de la cabecera, debes colocarlo en:

```
public/images/logo/
```

Formatos recomendados para el logo:

- SVG (preferido para mejor escalabilidad)
- PNG con fondo transparente
- Versiones alternativas (para fondos claros/oscuros)

Nombres sugeridos:

- `logo.svg` o `logo.png` (versión principal)
- `logo-dark.svg` (para usar en fondos claros)
- `logo-light.svg` (para usar en fondos oscuros)
- `favicon.ico` o `favicon.png` (para el icono del navegador)

## Buenas prácticas para imágenes

### Formatos recomendados

- **SVG**: Para logotipos, iconos e ilustraciones (escalables sin pérdida de calidad)
- **WebP**: Formato moderno con mejor compresión para fotografías
- **PNG**: Para imágenes que requieren transparencia
- **JPEG/JPG**: Para fotografías donde no se necesita transparencia

### Optimización

Todas las imágenes deben ser optimizadas antes de ser incluidas en el proyecto:

- Comprimir imágenes JPG y PNG con herramientas como [TinyPNG](https://tinypng.com/)
- Optimizar SVGs con [SVGOMG](https://jakearchibald.github.io/svgomg/)
- Convertir imágenes a WebP cuando sea posible

### Nomenclatura

Usar nombres descriptivos con guiones:

```
feature-collaboration.svg
hero-background-dark.jpg
icon-arrow-right.svg
```

## Cómo usar las imágenes en el proyecto

### En HTML

```html
<!-- Logo en la cabecera -->
<header>
  <div class="logo">
    <img src="public/images/logo/logo.svg" alt="Mi Aplicación Web" />
  </div>
  <!-- resto del contenido de la cabecera -->
</header>
```

### En CSS

```css
.header-logo {
  width: 150px;
  height: auto;
}

.hero-section {
  background-image: url("../images/hero/hero-background.jpg");
  background-size: cover;
  background-position: center;
}
```
