const express = require('express'),
    bodyParser      = require("body-parser");
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

var TVShowCtrl = require('./controllers/controller');


//initiliazations

const app = express();
require('./database');

//setings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout : 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir :path.join(app.get('views'),'partials') , 
    extname:'.hbs'
}));

app.set('view engine' , '.hbs');


//middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretApp',
    resave: true,
    saveUninitialized : true
}));

//global variables



// routes

var router = express.Router();

router.get('/', function(req, res) {
       res.send("Hello World!");
});





app.use(router);


//routes api




router.route('/tvshows')
.get(TVShowCtrl.findAllTVShows)
.post(TVShowCtrl.addTVShow);


router.route('/tvshows/:id')
.get(TVShowCtrl.findById)
.put(TVShowCtrl.updateTVShow)
.delete(TVShowCtrl.deleteTVShow);

 
app.use('/api', router);

// static files 
app.use(express.static(path.join(__dirname , 'public')));


//server is listennig
app.listen(app.get('port') , () => {

console.log('server on port'  , app.get('port'));
});
