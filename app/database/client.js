// import de pg et récupération du client 
const pg = require('pg'); 

const {Client} = pg;

// branchement du client sur la DB

const client = new Client(process.env.PG_URL); 

client.connect();

module.exports = client; 
