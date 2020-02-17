const express = require('express');
const checkListRouter = require('./src/routes/checklists');
require('./config/database');

const app = express();

app.use(express.json());
app.use('/checklists', checkListRouter);

app.get('/', (req, res) =>{
    res.send('<h1>Hello World </h1>')
})