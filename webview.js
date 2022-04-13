const path = require('path');

module.exports = ferdi => {
  ferdi.injectCSS(path.join(__dirname, 'service.css'));
};