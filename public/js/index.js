
// gestion du menu déroulant en responsive 


//callback pour afficher le menu 

function showMenu(event){
    event.preventDefault();
    const hidden_items = document.querySelectorAll('.nav_item_responsive');
    
    for (const item of hidden_items) {
        item.classList.toggle('show__menu');        
    };
    
}

//event listener 

const menu = document.querySelector('#menu__responsive');
if(menu){
    menu.addEventListener('click', showMenu); 
};

// gestion de l'affichage des articles 

function showMoreOrLessArticles(event) {
    event.preventDefault();
    const hidden_articles = document.querySelectorAll('.article__hidden');
    const btn = document.querySelector('#show__more__btn a');
    const articlesContainer = document.querySelector('.catalog__articles'); 

    for (const article of hidden_articles) {
        if(article.classList.contains('show__more')){
            article.classList.remove('show__more');
            btn.textContent = 'Voir moins';
        } else {
            article.classList.add('show__more');
            btn.textContent = 'Voir plus';
            articlesContainer.scrollIntoView({behavior:'smooth'});
        }
        
    };
}


const showMoreButton = document.querySelector('#show__more__btn'); 

if(showMoreButton){
    showMoreButton.addEventListener('click', showMoreOrLessArticles); 
};


// gestion de l'affichage par catégories

function showCoffeesByCategory(){
    const category = document.querySelector('#category').value;
    const articles = document.querySelectorAll('.article');

    for (const article of articles) {
        if(!article.classList.contains(category)){
            article.classList.add('show__more');
        }
        if(article.classList.contains(category) && article.classList.contains('show__more')){
            article.classList.remove('show__more');
        }
        
    };

    const btn = document.querySelector('#show__more__btn a');
    btn.classList.add('show__more');

}

const categorySelect = document.querySelector('#category');

if(categorySelect){
    categorySelect.addEventListener('change', showCoffeesByCategory);
};

// gestion retour page précédente

const goBackLink = document.getElementById('go__back');
goBackLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('coucou');
    history.back();
})

