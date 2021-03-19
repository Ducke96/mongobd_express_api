const mongoose = require('mongoose');
let actorSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String}
});
let Actor = mongoose.model('actor',actorSchema)
module.exports.Actor = Actor;

module.exports.getActor = function ( req, res) {
    Actor.find(function(err,actores) {
        if(err) return res.status(500).send(err.message);
        return res.status(200).send(actores);
    })
}
module.exports.getActorId = function ( req, res) {
    Actor.findById(req.params.id,function(err,actores) {
        if(err) return res.status(500).send(err.message);
        return res.status(200).send(actores);
    })
}
module.exports.postActor = function ( req, res){
    let newActor = new Actor({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    newActor.save(function(err,newAct){
        if(err) return res.status(500).send(err.message);
        return res.status(200).jsonp(newAct)
    })
}

module.exports.deleteActor = function ( req, res) {
    Actor.findById(req.params.id, function (err, actor) {
        actor.remove(req.body.id,function(err,actores) {
            if(err) return res.status(500).send(err.message);
            return res.status(200).send(actores);
        })
    })
}
