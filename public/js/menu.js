const menu = {
    init(){
        const menuNav = document.querySelector('#menu__responsive');
        if (menuNav) {
            menuNav.addEventListener('click', menu.showMenu);
        };
    },
    showMenu(event){
        event.preventDefault();
        const hidden_items = document.querySelectorAll('.nav_item_responsive');
    
        for (const item of hidden_items) {
            item.classList.toggle('show__menu');
        };
    }
};