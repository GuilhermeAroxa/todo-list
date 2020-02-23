const express = require('express');
const checkListRouter = require('./src/routes/checklists');
const rootRouter = require('./src/routes/index');

const path = require('path')
require('./config/database');

const app = express();

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs');

app.use(express.json());
app.use('/checklists', checkListRouter);
app.use('/', rootRouter);
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>{
    res.send('<h1>Hello World </h1>')
})

app.listen(3000, () => {
    console.log('Servidor Iniciado');
})