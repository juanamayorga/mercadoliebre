const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public')
const port = process.env.PORT || 3035
const rutasProductos = require('./routes/productos.js')
const rutasMain = require('./routes/main.js')

app.use(express.static(publicPath))

app.use('/productos', rutasProductos)

app.use('/,', rutasMain);

app.listen (port, () => console.log (`Servidor corriendo en puerto ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})