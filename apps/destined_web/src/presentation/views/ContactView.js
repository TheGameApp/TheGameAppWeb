/**
 * Clase ContactView
 * Vista para la página de contacto
 */
export class ContactView {
    constructor(userController) {
        this.userController = userController;
        this.template = `
            <div class="contact-container">
                <h2>Contacto</h2>
                <p>Completa el formulario para ponerte en contacto con nosotros.</p>
                
                <form id="contact-form" class="contact-form">
                    <div class="form-group">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit" class="btn">Enviar</button>
                </form>
                
                <div id="message-container" class="message-container"></div>
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
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }

    async handleSubmit(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const messageContainer = document.getElementById('message-container');

        try {
            // Crear un nuevo usuario con los datos del formulario
            const userData = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            };

            // Guardar el usuario utilizando el controlador
            await this.userController.createUser(userData);

            // Mostrar mensaje de éxito
            messageContainer.innerHTML = '<div class="success-message">¡Mensaje enviado con éxito!</div>';

            // Limpiar el formulario
            contactForm.reset();

        } catch (error) {
            // Mostrar mensaje de error
            messageContainer.innerHTML = `<div class="error-message">Error: ${error.message}</div>`;
        }
    }
} 