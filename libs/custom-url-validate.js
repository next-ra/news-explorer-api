const { isURL } = require('validator');

const urlValidate = (link) => {
  if (!isURL(link)) {
    throw new Error('bad link');
  }
  return link;
};

module.exports = {
  urlValidate,
};
