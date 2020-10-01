const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//EXPRESS HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    /*
    let salida = {
        nombre: 'Uriel Mansilla',
        edad: 29,
        url: req.url
    }
    res.send(salida);
    */

    res.render('home', {
        nombre: 'Uriel Mansilla'
    })
})


app.get('/about', (req, res) => {

    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})