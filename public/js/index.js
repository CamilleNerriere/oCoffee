
// gestion du menu déroulant en responsive 


//callback pour afficher le menu 

function showMenu(event) {
    event.preventDefault();
    const hidden_items = document.querySelectorAll('.nav_item_responsive');

    for (const item of hidden_items) {
        item.classList.toggle('show__menu');
    };

}

//event listener 

const menu = document.querySelector('#menu__responsive');
if (menu) {
    menu.addEventListener('click', showMenu);
};

//---------------------Page articles----------------------------

// gestion de l'affichage des articles 

function showMoreOrLessArticles(event) {
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
}


const showMoreButton = document.querySelector('#show__more__btn');

if (showMoreButton) {
    showMoreButton.addEventListener('click', showMoreOrLessArticles);
};


// gestion de l'affichage par catégories

function showCoffeesByCategory() {
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

}

const categorySelect = document.querySelector('#category');

if (categorySelect) {
    categorySelect.addEventListener('change', showCoffeesByCategory);
};


// --------------------------Page article---------------------------------

// gestion retour page précédente

const goBackLink = document.getElementById('go__back');

if (goBackLink) {

    goBackLink.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('coucou');
        history.back();
    });
}

// ---------------------------Page Panier-------------------------------

// gestion du panier (mise à jour de l'affichage du prix total)



//* Fonction pour modifier l'affichage du prix total 


function showTotalPrice() {
    const recapPrice = document.querySelector('#recap__total_price-number');
    const subtotals = document.querySelectorAll('.total__price');

    let total = 0;

    subtotals.forEach(nb => {
        total = total + Number.parseFloat(nb.textContent);
    });

    recapPrice.textContent = total.toString();
}

// Modifier les sous-totaux 

const raws = document.querySelectorAll('.recap__row-product');

function showSubtotalPrice() {


    raws.forEach(raw => {
        const price = Number.parseFloat(raw.querySelector('.price').textContent);
        const quantity = Number.parseInt(raw.querySelector('.quantity').value);
        const subtotal = price * quantity;
        raw.querySelector('.total__price').textContent = subtotal.toString();

    });
}

// *Afficher le nombre d'article dans le panier



function showNumberOfProduct() {
    const quantitiesAsStr = Array.from(document.querySelectorAll('.quantity'));
    const quantitiesAsNb = quantitiesAsStr.map((quantity) => parseInt(quantity.value));

    console.log(quantitiesAsStr, quantitiesAsNb)

    let numberOfProduct = 0;

    if (!quantitiesAsNb.length){
        document.querySelector('#recap__total_products').textContent = `0 produit`;
    } else {
        quantitiesAsNb.forEach(quantity => {
            numberOfProduct += quantity;
            console.log(numberOfProduct);
            document.querySelector('#recap__total_products').textContent = `${numberOfProduct} produit(s)`;
        });
    };
}

//* Fonction générale de mise à jour des totaux 

function showTotals(){
    showSubtotalPrice();
    showTotalPrice();
    showNumberOfProduct();
};


// Event Listeners 

if (document.querySelectorAll('.quantity').length > 0) {
    const quantities = document.querySelectorAll('.quantity');

    quantities.forEach(quantity => {
        quantity.addEventListener('change', () => {
            showTotals();
        })
    });
};

//------------------

// Supprimer l'article du panier

if (raws) {
    raws.forEach(raw => {
        raw.querySelector('.recap__delete').addEventListener('click', (event) => {
            event.preventDefault();
            raw.remove();
            showTotals();
        }
        );
    }
    );
};





