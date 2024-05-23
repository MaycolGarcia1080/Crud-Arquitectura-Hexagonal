const UserRepository = require('../../infrastructure/repository/UserRepository');

class UserService {
    async getAllUsers() {
        return await UserRepository.getAllUsers();
    }

    async getUserById(id) {
        return await UserRepository.getUserById(id);
    }

    async createUser(user) {
        return await UserRepository.createUser(user);
    }

    async updateUser(id, user) {
        return await UserRepository.updateUser(id, user);
    }

    async deleteUser(id) {
        return await UserRepository.deleteUser(id);
    }
}

module.exports = new UserService();
