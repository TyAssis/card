const readline = require('readline');
const Card = require('./models/card');

var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// reader.question("Qual nome da carta para inserir?\n", function(cardName) {
//     Card.create({ name: cardName });
//     reader.close();
// });

reader.question("Qual nome da carta para buscar?\n", function(cardName) {
  const card = Card.findOne({ where: { name: cardName } });
  reader.close();
});