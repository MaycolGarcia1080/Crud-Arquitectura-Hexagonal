const UserService = require('../../application/service/UserService');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteUser(req, res) {
        try {
            await UserService.deleteUser(req.params.id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new UserController();
