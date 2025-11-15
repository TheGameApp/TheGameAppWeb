/**
 * Clase HomeView
 * Vista para la página de inicio
 */
export class HomeView {
    constructor() {
        // No necesitamos template ya que todo es estático
    }

    render() {
        // No hacemos nada ya que todo el contenido es estático
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