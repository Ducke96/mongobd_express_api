const router = require('express').Router();


router.get('/users/signin' ,(req,res) =>{

    res.send('ingresando');
    
    
    });

    
router.get('/users/singup' ,(req,res) =>{

    res.send('formulario de autentificacion');
    
    
    });



module.exports = router;
