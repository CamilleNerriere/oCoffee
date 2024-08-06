const router = require('express').Router(); 

const {mainController} = require('../controllers/mainController'); 

const {cartController} = require('../controllers/cartController'); 

const { catchErrors } = require('../middlewares/errorHandlers');


router.get('/', catchErrors(mainController.homePage)); 

router.get('/articles', catchErrors(mainController.articles));

router.get('/article/:id', catchErrors(mainController.article));

router.get('/cart', catchErrors(cartController.cartPage));

router.get('/cart/:id', catchErrors(cartController.addTocart));

router.get('/boutique', catchErrors(mainController.shop));

module.exports = router;
