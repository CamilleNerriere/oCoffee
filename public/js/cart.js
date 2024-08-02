const cart ={
    init(){
        const raws = document.querySelectorAll('.recap__row-product');

        if (document.querySelectorAll('.quantity').length > 0) {
            const quantities = document.querySelectorAll('.quantity');
        
            quantities.forEach(quantity => {
                quantity.addEventListener('change', () => {
                    cart.showAllTotals();
                })
            });
        };

        if (raws) {
            raws.forEach(raw => {
                raw.querySelector('.recap__delete').addEventListener('click', (event) => {
                    event.preventDefault();
                    raw.remove();
                    cart.showAllTotals();
                }
                );
            }
            );
        };
    },
    showTotalPrice(){
        const recapPrice = document.querySelector('#recap__total_price-number');
        const subtotals = document.querySelectorAll('.total__price');
    
        let total = 0;
    
        subtotals.forEach(nb => {
            total = total + Number.parseFloat(nb.textContent);
        });
    
        recapPrice.textContent = total.toString(); 
    }, 
    showSubtotalPrice(){
        const raws = document.querySelectorAll('.recap__row-product');
        raws.forEach(raw => {
            const price = Number.parseFloat(raw.querySelector('.price').textContent);
            const quantity = Number.parseInt(raw.querySelector('.quantity').value);
            const subtotal = price * quantity;
            raw.querySelector('.total__price').textContent = subtotal.toString();
    
        });
    },
    showNumberOfProduct(){
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
    },
    showAllTotals(){
        cart.showSubtotalPrice();
        cart.showTotalPrice();
        cart.showNumberOfProduct();
    } 
};