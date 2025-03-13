# Fuentes del Proyecto

Este directorio contiene las fuentes personalizadas utilizadas en el proyecto.

## Fuentes actuales

### Clash Display

La fuente principal de este proyecto es **Clash Display**, una familia de fuentes sans-serif moderna y elegante con múltiples pesos:

- Clash Display Extralight (200)
- Clash Display Light (300)
- Clash Display Regular (400)
- Clash Display Medium (500)
- Clash Display Semibold (600)
- Clash Display Bold (700)

Esta fuente se utiliza en toda la aplicación para proporcionar una experiencia visual coherente y profesional.

### Open Sans

Se mantiene como fuente de respaldo en caso de que Clash Display no se cargue correctamente.

## Cómo añadir fuentes personalizadas

Hay tres formas principales de incluir fuentes en tu proyecto web:

### 1. Usando Google Fonts (recomendado para fuentes comunes)

1. Visita [Google Fonts](https://fonts.google.com/)
2. Selecciona las fuentes que deseas usar
3. Copia el código HTML proporcionado y pégalo en el `<head>` de tu archivo HTML
4. Usa las fuentes en tu CSS con `font-family`

Ejemplo (ya implementado en este proyecto):

```html
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
  rel="stylesheet"
/>
```

### 2. Usando fuentes locales (recomendado para fuentes personalizadas)

1. Coloca los archivos de fuentes (.woff, .woff2, .otf, .ttf, etc.) en este directorio
2. Declara la fuente en tu CSS usando `@font-face`
3. Usa la fuente en tu CSS con `font-family`

Ejemplo (implementado para Clash Display):

```css
@font-face {
  font-family: "ClashDisplay";
  src: url("../fonts/ClashDisplay-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: "ClashDisplay", sans-serif;
}
```

Para una familia de fuentes con múltiples pesos, se debe declarar cada variante:

```css
@font-face {
  font-family: "ClashDisplay";
  src: url("../fonts/ClashDisplay-Light.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "ClashDisplay";
  src: url("../fonts/ClashDisplay-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "ClashDisplay";
  src: url("../fonts/ClashDisplay-Bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### 3. Usando fuentes del sistema

También puedes usar fuentes que ya están instaladas en el sistema del usuario:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
```

## Formatos de fuentes

- `.woff2`: El formato más moderno y eficiente (mejor compresión)
- `.woff`: Compatible con la mayoría de navegadores modernos
- `.otf`: Formato OpenType, ampliamente compatible
- `.ttf`: Para compatibilidad con navegadores más antiguos
- `.eot`: Para compatibilidad con IE antiguo

## Consideraciones de rendimiento

- Usa `font-display: swap` para mejorar la experiencia de carga
- Limita el número de fuentes y variantes para mejorar el rendimiento
- Considera usar subconjuntos de fuentes si solo necesitas caracteres específicos

## Dónde encontrar fuentes

- [Google Fonts](https://fonts.google.com/) (gratuito)
- [Adobe Fonts](https://fonts.adobe.com/) (requiere suscripción)
- [Font Squirrel](https://www.fontsquirrel.com/) (gratuito)
- [Fontspring](https://www.fontspring.com/) (comercial)

## Licencias

Asegúrate de verificar la licencia de cualquier fuente que utilices en tu proyecto, especialmente para uso comercial.
