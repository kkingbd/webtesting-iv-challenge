const express = require('express');
const server = express();

const users = require('./router/users');
server.use(express.json());
server.use('/api/users', users);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));