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
            req.session.cart = {};
        }
        
        const result = await dataMapper.getOneCoffeeById(id);

        if (!result) {
            next();
            return;
        }

        const idString = id.toString();

        if(req.session.cart.hasOwnProperty(idString)){
            req.session.cart[idString].quantity+=1;
            console.log ('+1');
        } else {
            req.session.cart[idString] = result;
                req.session.cart[idString].quantity = 1;
        }
        
        console.log('panier', req.session.cart)


        res.redirect('/cart');
    }

};

module.exports = cartController;