var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var videoSchema = new Schema({
    
    title: { type: String },
    year: { type: Number },
    rated: { type: String },
    runtime: { type: Number },
    countries: { type: Array, "default": [] },
    genre: { type: Array, "default": [] },
    director: { type: String },
    writers: { type: Array, "default": [] },
    actors: { type: Array, "default": [] },
    plot: { type: String },
    poster: { type: String },
    imdb: { type: Object },
    tomato: { type: Object },
    metacritic: { type: Number },
    awards: { type: Object },
    type: { type: String }

});


TVShow = mongoose.model('video', videoSchema);

//GET - Return all tvshows in the DB    

exports.findAllTVShows = function (req, res) {

    TVShow.find(function (err, tvshows) {
        if (err) res.send(500, err.message);
        console.log('GET /videosPeliculas');
        res.status(200).jsonp(tvshows);
    });
};




//GET - Return a TVShow with specified ID

exports.findById = function (req, res) {
    TVShow.findById(req.params.id, function (err, tvshow) {
        if (err) return res.send(500, err.message);

        console.log('GET /videosPeliculas/' + req.params.id);
        res.status(200).jsonp(tvshow);
    });
};

//POST - Insert a new TVShow in the DB
exports.addTVShow = function (req, res) {
    console.log('POST');
    console.log(req.body);



    var tvshow = new TVShow({

        title: req.body.title,
        year: req.body.year,
        rated: req.body.rated,
        runtime: req.body.runtime,
        countries: req.body.countries,
        genre: req.body.genre,
        director: req.body.director,
        writers: req.body.writers,
        actors: req.body.actors,
        plot: req.body.plot,
        poster: req.body.poster,
        imdb: req.body.imdb,
        tomato: req.body.tomato,
        metacritic: req.body.metacritic,
        awards: req.body.awards,
        type: req.body.type,
    });

    console.log(tvshow);
    tvshow.save(function (err, tvshow) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(tvshow);
    });
};
//PUT - Update a register already exists
exports.updateTVShow = function (req, res) {
    TVShow.findById(req.params.id, function (err, tvshow) {



        tvshow.title = req.body.title;
        tvshow.year = req.body.year;
        tvshow.rated = req.body.rated;
        tvshow.runtime = req.body.runtime,
            tvshow.countries = req.body.countries;
        tvshow.genre = req.body.genre;
        tvshow.director = req.body.director;
        tvshow.writers = req.body.writers;
        tvshow.actors = req.body.actors;

        tvshow.plot = req.body.plot;
        tvshow.poster = req.body.poster;
        tvshow.imdb = req.body.imdb;
        tvshow.tomato = req.body.tomato;
        tvshow.metacritic = req.body.metacritic;
        tvshow.awards = req.body.awards;
        tvshow.type = req.body.type;

        tvshow.save(function (err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).jsonp(tvshow);
        });
    });
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function (req, res) {
    TVShow.findById(req.params.id, function (err, tvshow) {
        tvshow.remove(function (err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        })
    });
};