//Carregando Modulos

const express  = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
const exphbs  = require('express-handlebars');
const Path = require("path")
//body parser
app.engine('handlebars', exphbs({defaultLayout: 'main.handlebars'}));
app.set('view engine', 'handlebars');

//Handlebars

app.engine('handlebars',handlebars({defaultLayout: 'main.handlebars'}))
app.set('view engime', 'handlebars');

//mogoose

   //em breve
   //public app.use(express.static(path.join(__dirname,"public")))
   
         app.use(express.static('public'));
//rotas

app.get('/', (req, res) =>{
	res.send('Rota Principal')
})

app.get('/post', (req, res) =>{
	res.send('Lista Posts')

})

app.use('/admin', admin)


const PORT = 8001
app.listen(PORT,() =>{
	console.log("Servidor Rodando");
})
