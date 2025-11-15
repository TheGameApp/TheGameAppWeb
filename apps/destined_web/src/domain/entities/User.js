/**
 * Clase User - Entidad de dominio
 * Representa un usuario en el sistema
 */
export class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    validate() {
        if (!this.name || this.name.trim() === '') {
            throw new Error('El nombre del usuario es requerido');
        }

        if (!this.email || !this.isValidEmail(this.email)) {
            throw new Error('El email del usuario no es válido');
        }

        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
} 