const ausnow = require('./json/snow.json')

function snow() {
  const random = ausnow[Math.floor(Math.random() * (ausnow.length))];
  return { url: random }
}

snow();

module.exports = snow;