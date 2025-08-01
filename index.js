const express = require('express');
const app = express();
const uuid = require('uuid');
app.use(express.json());
const port = 3000;

const users = [];

app.get('/users/', (request ,  response ) => {
    return response.json({users}); 
});

app.post('/users/', (request ,  response ) => {
    const { name, age } = request.body;
    const user = {
        id: uuid.v4(),
        name,
        age};
    users.push(user);
    return response.status(201).json({ user }); 
});

app.put('/users/:id', (request ,  response ) => {
    const {id} = request.params;
    const { name, age } = request.body;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex < 0) { return response.status(404).json({ error: 'User not found' }); }

    const updatedUser = { id, name, age };
    users[userIndex] = updatedUser 

    return response.json({updatedUser}); 
});

app.delete('/users/:id', (request ,  response ) => {
    const {id} = request.params;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex < 0) { return response.status(404).json({ error: 'User not found' }); }

    users.splice(userIndex, 1);

    return response.json({users}); 
});





app.listen(port, () => {
    console.log(`✔ Port: ${port} - Navegar é preciso`);
});