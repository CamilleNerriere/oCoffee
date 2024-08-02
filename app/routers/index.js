const router = require('express').Router(); 

const mainController = require('../controllers/mainController'); 

const cartController = require('../controllers/cartController'); 

router.get('/', mainController.homePage); 

router.get('/articles', mainController.articles);

router.get('/article/:id', mainController.article);

router.get('/cart', cartController.cartPage);

router.get('/cart/:id', cartController.addTocart);

router.get('/boutique', mainController.shop);

module.exports = router;
