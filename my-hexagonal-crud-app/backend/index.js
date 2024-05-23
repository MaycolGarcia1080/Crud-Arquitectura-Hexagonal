const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UserController = require('./src/infrastructure/controller/UserController');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/users', UserController.getAllUsers);
app.get('/api/users/:id', UserController.getUserById);
app.post('/api/users', UserController.createUser);
app.put('/api/users/:id', UserController.updateUser);
app.delete('/api/users/:id', UserController.deleteUser);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
