const dataMapper = require('../database/dataMapper');

const mainController = {
    homePage(req, res) {
        res.render('index');
    }, 
    async articles(req,res) {
        try {
            const coffees = await dataMapper.getCoffees();
            console.log(coffees);
            res.render('articles', {coffees});
        } catch (error) {
            console.log('NAME', error.name);
            console.log('CAUSE', error.cause);
            console.log('STACK', error.stack);

            res.send(error.message);
        }
        
    }, 
    article(req, res){
        res.render('article');
    }

};

module.exports = mainController; 