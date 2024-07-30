const client = require('./client');

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
    }

};

module.exports = dataMapper;

