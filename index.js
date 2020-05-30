const express = require('express');

// const blogRoutes = require('./blogRoutes');
const server = express(); 

server.use(express.json());

// server.use('/api/url', urlRoutes);

server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})