const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/home.html'))
app.get('/contacto', function(req, res){
    res.send('contacto');
});
app.get('/sobre-mi',function(req,res){
   res.json({
       name:'Juan',
       age:27
   })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))