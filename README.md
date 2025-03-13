# Aplicación Web con Clean Architecture

Este proyecto es una aplicación web desarrollada con HTML, CSS y JavaScript puro, siguiendo los principios de Clean Architecture.

## Estructura del Proyecto

El proyecto está organizado siguiendo los principios de Clean Architecture, con las siguientes capas:

- **Domain**: Contiene las entidades y casos de uso del negocio.

  - `entities`: Objetos de negocio con reglas de validación.
  - `usecases`: Lógica de aplicación específica.
  - `repositories`: Interfaces para acceso a datos.

- **Infrastructure**: Implementaciones concretas de repositorios y servicios.

  - `repositories`: Implementaciones concretas de los repositorios definidos en el dominio.

- **Interfaces**: Adaptadores que convierten datos entre la capa de dominio y las capas externas.

  - `controllers`: Controladores que manejan las solicitudes y respuestas.
  - `presenters`: Formateadores de datos para la presentación.

- **Presentation**: Interfaz de usuario y componentes visuales.

  - `views`: Vistas de la aplicación.
  - `components`: Componentes reutilizables.

- **Public**: Archivos estáticos.
  - `css`: Hojas de estilo.
  - `fonts`: Fuentes tipográficas.

## Características

- Arquitectura limpia y modular
- Separación clara de responsabilidades
- Independencia de frameworks
- Fácilmente testeable
- Diseño responsivo
- Tipografía personalizada con Clash Display

## Cómo ejecutar el proyecto

1. Clona este repositorio:

   ```
   git clone <url-del-repositorio>
   ```

2. Navega al directorio del proyecto:

   ```
   cd nombre-del-proyecto
   ```

3. Abre el archivo `index.html` en tu navegador web.

Alternativamente, puedes usar un servidor local como Live Server de VS Code o cualquier otro servidor HTTP simple.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage para persistencia de datos
- Fuentes personalizadas (Clash Display)

## Fuentes tipográficas

El proyecto utiliza la familia de fuentes Clash Display en todas sus variantes:

- **Clash Display Extralight** (peso 200)
- **Clash Display Light** (peso 300)
- **Clash Display Regular** (peso 400)
- **Clash Display Medium** (peso 500)
- **Clash Display Semibold** (peso 600)
- **Clash Display Bold** (peso 700)

Esta familia de fuentes proporciona una apariencia moderna y profesional a la aplicación, con suficiente variedad para crear jerarquías visuales claras.

Para más información sobre cómo gestionar las fuentes, consulta el archivo `public/fonts/README.md`.

## Principios de Clean Architecture aplicados

1. **Independencia de frameworks**: La aplicación no depende de la existencia de alguna biblioteca o framework.
2. **Testeable**: Las reglas de negocio se pueden probar sin la interfaz de usuario, base de datos, servidor web o cualquier elemento externo.
3. **Independencia de la UI**: La interfaz de usuario puede cambiar fácilmente sin cambiar el resto del sistema.
4. **Independencia de la base de datos**: Se puede cambiar LocalStorage por cualquier otra tecnología de persistencia sin afectar las reglas de negocio.
5. **Independencia de cualquier agente externo**: Las reglas de negocio no saben nada sobre el mundo exterior.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
