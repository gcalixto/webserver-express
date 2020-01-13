const http = require('http');


http.createServer((req, res) => {

        // de esta manera vamos a mandar un archivo json
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Galet',
            edad: 32,
            url: req.url
        }

        // mando la salida en fomra json
        res.write(JSON.stringify(salida));

        // con esta forma ecribimos un texto y lo hace ver como una pagina web
        // res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el prueto 8080');