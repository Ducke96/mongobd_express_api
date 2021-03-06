var mongoose = require('mongoose'),
   Schema = mongoose.Schema;

var tvshowSchema = new Schema({
  title:    { type: String },
  year:     { type: Number },
  rated:    { type: String },
  runtime:  { type: Number },
  countries:    { type: Array, "default":  []  },
 genre:   { type: Array, "default":  []  },
  director:  { type: String },
  writers:   { type: Array, "default":  []  },
  actors:  { type: Array, "default":  []  },
 
  plot:  { type: String },
  poster:  { type: String },
  imdb : {type: Object} ,
  tomato : {type : Object},
  metacritic : {type : Number},
  awards : {type : Object},
  type : {type:String}

});

module.exports = mongoose.model('video', tvshowSchema);