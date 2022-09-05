const aupat = require('./json/pat.json')

function pat() {
  const random = aupat[Math.floor(Math.random() * (aupat.length))];
  return { url: random }
}

pat();

module.exports = pat;