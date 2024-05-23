const db = require('../database/connection');

class UserRepository {
    async getAllUsers() {
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    }

    async getUserById(id) {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    async createUser(user) {
        const [result] = await db.query('INSERT INTO users SET ?', user);
        return { id: result.insertId, ...user };
    }

    async updateUser(id, user) {
        await db.query('UPDATE users SET ? WHERE id = ?', [user, id]);
        return { id, ...user };
    }

    async deleteUser(id) {
        await db.query('DELETE FROM users WHERE id = ?', [id]);
    }
}

module.exports = new UserRepository();
