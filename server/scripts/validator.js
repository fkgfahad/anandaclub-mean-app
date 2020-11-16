const Validator = require('password-validator');

const schema = new Validator();

schema
  .is().min(8)
  .is().max(16)
  .has().lowercase()
  .has().digits()
  .has().not().spaces()
  .is().not().oneOf(['password', 'abcdefgh', '12345678', 'hgfedcba', '87654321', 'abcd1234', '1234abcd']);

module.exports = schema;
