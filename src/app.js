const express = require('express');
const rutaIndex = require('./routs');
const app = express();
const PORT = 3000;

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(rutaIndex)


app.listen(PORT,(req,res)=>{
    console.log(`Servidor andando en el puerto ${PORT}`);
})