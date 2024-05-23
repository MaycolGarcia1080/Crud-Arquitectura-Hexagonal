import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './app.css';

const App = () => {
    const [userToEdit, setUserToEdit] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const selectUser = (user) => {
        setUserToEdit(user);
    };

    return (
        <div className="app-container">
            <div className="app-header">
                <h1>My Hexagonal CRUD App</h1>
            </div>
            <div className="app-content">
                <div className="user-management">
                    <div className="user-form">
                        <UserForm userToEdit={userToEdit} refresh={refresh} setRefresh={setRefresh} />
                    </div>
                    <div className="user-list">
                        <UserList selectUser={selectUser} refresh={refresh} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
