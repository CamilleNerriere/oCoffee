const dataMapper = require('../database/dataMapper');

const mainController = {
    async homePage(req, res) {
        try {
            const coffees = await dataMapper.getCoffees();
            res.render('index', {coffees : coffees});
        } catch (error) {
            console.log('NAME', error.name);
            console.log('CAUSE', error.cause);
            console.log('STACK', error.stack);

            res.send(error.message);
        };
        
    }, 
    async articles(req,res) {
        try {
            const coffees = await dataMapper.getCoffees();
            const categories = await dataMapper.getCoffeesCategories();
    
            res.render('articles', {coffees, categories});
        } catch (error) {
            console.log('NAME', error.name);
            console.log('CAUSE', error.cause);
            console.log('STACK', error.stack);

            res.send(error.message);
        };
        
    }, 
    async article(req, res){
        try {
            const id = req.params.id;
            const coffee = await dataMapper.getOneCoffeeById(id);
            res.render('article', {coffee});
        } catch (error) {
            console.log('NAME', error.name);
            console.log('CAUSE', error.cause);
            console.log('STACK', error.stack);

            res.send(error.message);
        };
    }, 

};

module.exports = mainController; 