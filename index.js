const express = require('express');

const projectRoutes = require('./data/projectRoutes');
const server = express(); 

server.use(express.json());

server.use('/api/', projectRoutes);

server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})