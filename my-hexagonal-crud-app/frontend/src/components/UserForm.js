import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/api';

const UserForm = ({ userToEdit, refresh, setRefresh }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (userToEdit) {
            setIsEditing(true);
            setName(userToEdit.name);
            setEmail(userToEdit.email);
        } else {
            setIsEditing(false);
            setName('');
            setEmail('');
        }
    }, [userToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await updateUser(userToEdit.id, { name, email });
        } else {
            await createUser({ name, email });
        }
        setName('');
        setEmail('');
        setRefresh(!refresh);
        setIsEditing(false); // Resetear el estado de isEditing después de la operación
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit" className={isEditing ? 'update' : ''}>{isEditing ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default UserForm;
