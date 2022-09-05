const auhug = require('./json/hug.json')

function hug() {
  const random = auhug[Math.floor(Math.random() * (auhug.length))];
  return { url: random }
}

hug();

module.exports = hug;