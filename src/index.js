const express = require('express');
const bodyParser = require("body-parser");

const TVShowCtrl = require('./controllers/controller');
const ActorCtrl = require('./controllers/ActorController');

//initiliazations

const app = express();
require('./database');

//setings
app.set('port', process.env.PORT || 3000);


//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

router.route('/actor')
.get(ActorCtrl.getActor)
.post(ActorCtrl.postActor)

router.route('/actor/:id')
.get(ActorCtrl.getActorId)
.delete(ActorCtrl.deleteActor)

app.use('/api', router);

//server is listennig
app.listen(app.get('port') , () => {

console.log(`Server running on http://localhost:${app.get('port')}`);
});