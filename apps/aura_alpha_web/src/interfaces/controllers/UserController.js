/**
 * Clase UserController
 * Maneja las operaciones relacionadas con los usuarios
 */
export class UserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
    }

    async getUser(id) {
        try {
            return await this.userUseCase.getUserById(id);
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            throw error;
        }
    }

    async getAllUsers() {
        try {
            return await this.userUseCase.getAllUsers();
        } catch (error) {
            console.error('Error al obtener todos los usuarios:', error);
            throw error;
        }
    }

    async createUser(userData) {
        try {
            return await this.userUseCase.createUser(userData);
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            throw error;
        }
    }

    async updateUser(id, userData) {
        try {
            return await this.userUseCase.updateUser(id, userData);
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            return await this.userUseCase.deleteUser(id);
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
            throw error;
        }
    }
} 