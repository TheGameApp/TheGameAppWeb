/**
 * Clase UserUseCase - Caso de uso
 * Contiene la lógica de negocio relacionada con los usuarios
 */
export class UserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getUserById(id) {
        return await this.userRepository.getById(id);
    }

    async getAllUsers() {
        return await this.userRepository.getAll();
    }

    async createUser(userData) {
        return await this.userRepository.create(userData);
    }

    async updateUser(id, userData) {
        return await this.userRepository.update(id, userData);
    }

    async deleteUser(id) {
        return await this.userRepository.delete(id);
    }
} 