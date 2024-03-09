# session-flash
en index:
Creando una sesion puedo guardar informacion para pasar desde una ruta a otra.
const session=require('express-session')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'primeraSesion',
    resave: false,
    saveUninitialized: false
}))

en routes:
en post tomamos la informacion del cuerpo del formulario, que sera envidada a otra ruta...
router.post('/register', (req, res) => {
    req.session.my_variable = req.body;
    res.redirect('/profile'); 
});

vemos que luego de enviar redirige a esa misma pagina, es decir, le envia informacion y luego redirige hacia ella, para poder ver dicha informacion en la pagina redirigida es necesito guardarla para luego mostrarla en una plantilla:

router.get('/profile', (req, res) => {
    const userData=req.session.my_variable; 
    delete req.session.userData;/**esta es la funcion una sesion, register le paso datos a profile,
    datos que luego se borraran*/
    res.render('profile.ejs', {
        userData
    });
});

ya la tenemos en otro pagina, ahora simplemente lo pintamos:
<!--
<body>
    <span><%= userData.email %></span>
    <span><%= userData.password %></span>
</body>
-->

el problema es que en esta estructura de codigo cada vez que queramos pasar una sesion debemos guardarla, enviarla, recibirla, y luego borrarla, una herramienta que nos facilita esto es connect-flash

