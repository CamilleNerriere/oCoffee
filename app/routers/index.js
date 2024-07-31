const router = require('express').Router(); 

const mainController = require('../controllers/mainController'); 

router.get('/', mainController.homePage); 

router.get('/articles', mainController.articles);

router.get('/article/:id', mainController.article);


module.exports = router;