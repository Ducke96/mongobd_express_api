const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/video' ,{
useUnifiedTopology: true,
useCreateIndex : true ,
useNewUrlParser : true,
useFindAndModify : false
}).then(db => console.log('----->>>>> db is connect')).catch(err => console.log(err));