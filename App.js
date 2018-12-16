//const http = require('http');
const path = require('path');
const express = require('express');
const app = express(); //creating app by usig express() as a function
//const expressHbs = require('express-handlebars');

//app.engine('hbs', 'ejs'
 //expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' })); //html
app.set('view engine', 'ejs'); //pug bud , be ja handlebars
app.set('View', 'views'); //second views is the folder

const bodyParser = require('body-parser');
const shopRoute = require('./routes/shop');
const adminDRoute = require('./routes/admin');
const errors = require('./controllers/error');


app.use(bodyParser.urlencoded( {extended: false} ));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminDRoute.route); // reg as first.. 
app.use(shopRoute); //register as second.. oreder matters




app.use(errors.getError404 );

app.listen(3000);
//const server = http.createServer(route);
// const server = http.createServer(app);
// server.listen(3000);