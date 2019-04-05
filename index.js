const express = require('express')
const app = express()
const port = 3000

var fs = require('fs');

app.use(express.static('public'));

var contador = {
    home: 0,
    contacto: 0,
};



//app.get('/', (req, res) => res.sendFile(__dirname + '/public/home.html'))
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/home.html');
    contador.home++;
    console.log('pagina vista: ', contador);

    let contenido = 'home:' + contador.home + '\ncontacto: ' + contador.contacto;
    fs.writeFile('contador.txt', contenido, 'utf8', function () {
        console.log('archivo escrito');
    });
});
app.get('/contacto', function (req, res) {
    res.send('contacto');
    contador.contacto++;

    let contenido = 'home:' + contador.home + '\ncontacto: ' + contador.contacto;
    fs.writeFile('contador.txt', contenido, 'utf8', function () {
        console.log('archivo escrito');
    });
});
app.get('/sobre-mi', function (req, res) {
    res.json({
        name: 'Juan',
        age: 27
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))