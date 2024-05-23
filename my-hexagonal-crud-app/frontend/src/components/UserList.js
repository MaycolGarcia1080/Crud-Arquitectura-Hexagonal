import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';

const UserList = ({ selectUser, refresh }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [refresh]);

    const loadUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        loadUsers();
    };

    return (
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => selectUser(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
