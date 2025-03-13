/**
 * Clase HomeView
 * Vista para la página de inicio
 */
export class HomeView {
    constructor() {
        this.template = `
            <div class="home-container">
                <h2>Bienvenido a nuestra aplicación</h2>
                <p>Esta es una aplicación de ejemplo construida con Clean Architecture.</p>
                <div class="features">
                    <div class="feature">
                        <h3>Clean Architecture</h3>
                        <p>Separación de responsabilidades en capas bien definidas.</p>
                    </div>
                    <div class="feature">
                        <h3>JavaScript Moderno</h3>
                        <p>Utilizando las últimas características de JavaScript.</p>
                    </div>
                    <div class="feature">
                        <h3>Diseño Responsivo</h3>
                        <p>Interfaz adaptable a diferentes dispositivos.</p>
                    </div>
                </div>
                <button id="start-button" class="btn">Comenzar</button>
            </div>
        `;
    }

    render() {
        const appContainer = document.getElementById('app-container');
        appContainer.innerHTML = this.template;

        // Añadir eventos después de renderizar
        this.addEventListeners();
    }

    addEventListeners() {
        const startButton = document.getElementById('start-button');
        if (startButton) {
            startButton.addEventListener('click', () => {
                console.log('Botón de inicio clickeado');
                // Aquí podríamos navegar a otra vista o realizar alguna acción
            });
        }
    }
} 