let config;

if (window.location.hostname === 'localhost') {
  console.log('env local')
  config = require("./local.config.js");  
}

if (window.location.hostname === 'meli-facturin-652baafb21fd.herokuapp.com') {
  console.log('env dev')
  config = require("./dev.config.js");  
}

if (window.location.hostname === 'meli-facturin-652baafb21fd.herokuapp.com') {
  console.log('env prod')
  config = require("./prod.config.js");  
}

module.exports = config;