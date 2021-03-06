const router = require('express').Router();


router.get('/notes/' ,(req,res) =>{

    res.send('notas desde las bd');
    
    
    });


module.exports = router;
