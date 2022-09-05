const aucry = require('./json/cry.json')

function cry() {
  const random = aucry[Math.floor(Math.random() * (aucry.length))];
  return { url: random }
}

cry();

module.exports = cry;