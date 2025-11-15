/**
 * Clase AboutView
 * Vista para la página Acerca de
 */
export class AboutView {
    constructor() {
        this.template = `
            <div class="about-container">
                <h2>Acerca de</h2>
                <p>Esta aplicación fue desarrollada como un ejemplo de implementación de Clean Architecture en una aplicación web.</p>
                
                <div class="about-section">
                    <h3>¿Qué es Clean Architecture?</h3>
                    <p>Clean Architecture es un enfoque de diseño de software que separa las preocupaciones en capas distintas, 
                    permitiendo que el sistema sea independiente de frameworks, bases de datos, interfaces de usuario y 
                    cualquier agente externo.</p>
                </div>
                
                <div class="about-section">
                    <h3>Capas de la aplicación</h3>
                    <ul>
                        <li><strong>Dominio:</strong> Contiene las entidades y casos de uso del negocio.</li>
                        <li><strong>Interfaces:</strong> Adaptadores que convierten datos entre la capa de dominio y las capas externas.</li>
                        <li><strong>Infraestructura:</strong> Implementaciones concretas de repositorios y servicios.</li>
                        <li><strong>Presentación:</strong> Interfaz de usuario y componentes visuales.</li>
                    </ul>
                </div>
                
                <div class="about-section">
                    <h3>Tecnologías utilizadas</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript (ES6+)</li>
                    </ul>
                </div>
            </div>
        `;
    }

    render() {
        const appContainer = document.getElementById('app-container');
        appContainer.innerHTML = this.template;
    }
} 