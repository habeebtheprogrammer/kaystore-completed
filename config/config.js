module.exports = process.env.PORT ? require("./production.json") : require("./development.json")
// module.exports = require("./production.json")