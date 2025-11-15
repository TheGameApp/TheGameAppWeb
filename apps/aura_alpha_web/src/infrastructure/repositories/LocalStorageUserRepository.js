import { UserRepository } from '../../domain/repositories/UserRepository.js';
import { User } from '../../domain/entities/User.js';

/**
 * Implementación concreta del repositorio de usuarios usando localStorage
 */
export class LocalStorageUserRepository extends UserRepository {
    constructor() {
        super();
        this.storageKey = 'users';
    }

    async getById(id) {
        const users = this._getUsers();
        const user = users.find(user => user.id === id);

        if (!user) {
            return null;
        }

        return new User(user.id, user.name, user.email);
    }

    async getAll() {
        const users = this._getUsers();
        return users.map(user => new User(user.id, user.name, user.email));
    }

    async create(userData) {
        const users = this._getUsers();
        const newUser = {
            id: this._generateId(),
            name: userData.name,
            email: userData.email
        };

        users.push(newUser);
        this._saveUsers(users);

        return new User(newUser.id, newUser.name, newUser.email);
    }

    async update(id, userData) {
        const users = this._getUsers();
        const index = users.findIndex(user => user.id === id);

        if (index === -1) {
            return null;
        }

        const updatedUser = {
            ...users[index],
            ...userData
        };

        users[index] = updatedUser;
        this._saveUsers(users);

        return new User(updatedUser.id, updatedUser.name, updatedUser.email);
    }

    async delete(id) {
        const users = this._getUsers();
        const filteredUsers = users.filter(user => user.id !== id);

        if (filteredUsers.length === users.length) {
            return false;
        }

        this._saveUsers(filteredUsers);
        return true;
    }

    _getUsers() {
        const usersJson = localStorage.getItem(this.storageKey);
        return usersJson ? JSON.parse(usersJson) : [];
    }

    _saveUsers(users) {
        localStorage.setItem(this.storageKey, JSON.stringify(users));
    }

    _generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
} 