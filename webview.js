const path = require('path');

module.exports = Franz => {
  const getNumberOfElements = function getNumberOfElements() {
	var badge = document.getElementsByClassName("bring-list-selector-list-item-count selected")[0];
	var count = badge.innerText;

    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getNumberOfElements);
};