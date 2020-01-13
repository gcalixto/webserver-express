const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helper');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

// Express HBS engine
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
    // res.send('Hello World');

    // let salida = {
    //     nombre: 'Galet',
    //     edad: 33,
    //     url: req.url
    // }

    // res.send(salida)

    res.render('home', {
        nombre: 'Galet' // ,
            // anio: new Date().getFullYear()
    });


})

app.get('/about', (req, res) => {
    res.render('about'
        /*, {
                anio: new Date().getFullYear()
           }*/
    );
})

// app.get('/data', (req, res) => {
//     res.send('Hela Data');
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port }`);
});