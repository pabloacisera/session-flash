const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs');
});

router.post('/register', (req, res) => {
    req.flash('user', req.body);
    res.redirect('/profile'); 
});

router.get('/profile', (req, res) => {
    const user=req.flash('user')[0]/**esta es la funcion una sesion, register le paso datos a profile,
    datos que luego se borraran*/
    /**nos referimos al valor cero porque ha un solo dato, si pasara mas de uno deberiamos recorrerlo*/
    res.render('profile.ejs', {
        user
    });
});

module.exports = router;
