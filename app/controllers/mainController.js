const dataMapper = require('../database/dataMapper');

const mainController = {
    async homePage(req, res) {

        const coffees = await dataMapper.getCoffees();
        res.render('index', { coffees: coffees });

    },
    async articles(req, res) {

        const coffees = await dataMapper.getCoffees();
        const categories = await dataMapper.getCoffeesCategories();

        res.render('articles', { coffees, categories });

    },
    async article(req, res, next) {

        const id = req.params.id;
        const coffeeId = /\d+$/.test(id);

        if(!coffeeId){
            return next();
        }

        const coffee = await dataMapper.getOneCoffeeById(id);
        res.render('article', { coffee });

    },
    shop(req, res) {
        res.render('shop');
    }

};

module.exports = { mainController }; 