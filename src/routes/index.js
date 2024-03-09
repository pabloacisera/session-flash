const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs');
});

router.post('/register', (req, res) => {
    req.session.my_variable = req.body;
    res.redirect('/profile'); 
});

router.get('/profile', (req, res) => {
    const userData=req.session.my_variable; 
    delete req.session.userData;/**esta es la funcion una sesion, register le paso datos a profile,
    datos que luego se borraran*/
    res.render('profile.ejs', {
        userData
    });
});

module.exports = router;
