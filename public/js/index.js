
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
menu.addEventListener('click', showMenu); 


