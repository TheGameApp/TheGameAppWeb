/**
 * Interfaz UserRepository
 * Define los métodos que debe implementar cualquier repositorio de usuarios
 */
export class UserRepository {
    async getById(id) {
        throw new Error('Método getById no implementado');
    }

    async getAll() {
        throw new Error('Método getAll no implementado');
    }

    async create(userData) {
        throw new Error('Método create no implementado');
    }

    async update(id, userData) {
        throw new Error('Método update no implementado');
    }

    async delete(id) {
        throw new Error('Método delete no implementado');
    }
} 