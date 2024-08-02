const catalog = {
    init(){
        const showMoreButton = document.querySelector('#show__more__btn');
        const categorySelect = document.querySelector('#category');
        
        if (showMoreButton) {
            showMoreButton.addEventListener('click', catalog.showMoreOrLessArticles);
        };
        
        if (categorySelect) {
            categorySelect.addEventListener('change', catalog.showCoffeesByCategory);
        };   
    },
    showMoreOrLessArticles(event){
        event.preventDefault();
        const hidden_articles = document.querySelectorAll('.article__hidden');
        const btn = document.querySelector('#show__more__btn a');
        const articlesContainer = document.querySelector('.catalog__articles');

        for (const article of hidden_articles) {
            if (article.classList.contains('show__more')) {
                article.classList.remove('show__more');
                btn.textContent = 'Voir moins';
            } else {
                article.classList.add('show__more');
                btn.textContent = 'Voir plus';
                articlesContainer.scrollIntoView({ behavior: 'smooth' });
            }

        };
        }, 
        showCoffeesByCategory(){
            const category = document.querySelector('#category').value;
            const articles = document.querySelectorAll('.article');
            
            for (const article of articles) {
                if (!article.classList.contains(category)) {
                    article.classList.add('show__more');
                }
                if (article.classList.contains(category) && article.classList.contains('show__more')) {
                    article.classList.remove('show__more');
                }
                
            };
        
            const btn = document.querySelector('#show__more__btn a');
            btn.classList.add('show__more');
        },
};