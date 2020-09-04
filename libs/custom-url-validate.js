const { isURL } = require('validator');

const urlValidate = (link) => {
  if (!isURL(link)) {
    throw new Error();
  }
  return link;
};

module.exports = {
  urlValidate,
};
