// import de dotenv 

require('dotenv').config(); 

// import de path pour les routes sécurisées

const path = require('path'); 

// import de express

const express = require('express'); 
const app = express(); 

//import des sessions 

const session = require('express-session');

// import du router 

const router = require('./app/routers'); 

// configuration des statics

app.set('view engine', 'ejs'); 

const securedPathToViews = path.join(__dirname, 'app/views');
app.set('views', securedPathToViews); 

const securedPathToAssets = path.join(__dirname, 'public'); 
app.use(express.static(securedPathToAssets)); 

// mise en place des sessions 

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET,
    cookie: {
      secure: false,
      maxAge: (1000*60*60*24) // ça fait 24h
    }
  }))
  
  app.use((req, res, next) => {
    if (req.session.cart){
      app.locals.cart = req.session.cart;
    }
    next();
  });
  

// branchement du router

app.use(router); 

// middleware 404 à importer et créer dans les middlewares

const notFound = require('./app/middlewares/404')

app.use(notFound); 

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server listening on ${process.env.BASE_URL}:${port}`);
});