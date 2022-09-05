exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

module.exports = {
    AuClient: {
        hug: require('./dist/hug.js'),
        pat: require('./dist/pat.js'),
        cry: require('./dist/cry.js'),
        snow: require('./dist/snow.js')
    }
}