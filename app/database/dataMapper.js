const {client} = require('./client');

const dataMapper = {
    /**
     * 
     * @returns {Promise} la liste des cafés
     */
    async getCoffees(){
        const query = 'SELECT * FROM coffee'; 

        const coffees = await client.query(query);

        return coffees.rows; 
    }, 
    /**
     * 
     * @param {number} id 
     * @returns {Promise} un café
     */
    async getOneCoffeeById(id){
        const query = {
            text: `SELECT * FROM coffee WHERE id =$1`,
            values:[id]
        };

        const coffee = await client.query(query); 

        return coffee.rows[0];
    }, 
    /**
     * 
     * @returns {Promise} les catégories de café
     */
    async getCoffeesCategories() {
        const query = 'SELECT main_feature FROM coffee GROUP BY main_feature;'

        const coffeesCategories = await client.query(query);

        return coffeesCategories.rows;
    }

};

module.exports = dataMapper;

