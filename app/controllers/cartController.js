const dataMapper = require('../database/dataMapper');

const cartController = {

    cartPage(req, res) {
        res.render('cart');
    },

    async addTocart(req, res, next) {
        const id = Number.parseInt(req.params.id);

        if (Number.isNaN(id)) {
            next();
            return;
        }

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const existingProduct = req.session.cart.find(article => article.id === id);
        const result = await dataMapper.getOneCoffeeById(id);

        if (!result) {
            next();
            return;
        }
        req.session.cart.push(result);
        console.log(req.session.cart);

        res.redirect('/cart');
    }

};

module.exports = cartController;