import networkgame from './src/Network.js'
import databasegame from './src/Database.js'

const Network = new networkgame;
const Database = new databasegame;

Network.subscribe(Database.loginCheck)

console.log(Network.observers)