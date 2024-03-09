const express=require('express');
const app=express();
const path=require('path')
const session=require('express-session')

/**setting */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**middlewares */
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'primeraSesion',
    resave: false,
    saveUninitialized: false
}))

/**init sever */

app.listen(3000,()=>{
    console.log('Server on port: 3000')
})

/**routes */
app.use(require('./routes/index'));

/**manejador de errores */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  