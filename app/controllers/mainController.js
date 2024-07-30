const mainController = {
    homePage(req, res) {
        res.render('index');
    }, 
    articles(req,res) {
        res.render('articles');
    }, 
    article(req, res){
        res.render('article');
    }

};

module.exports = mainController; 