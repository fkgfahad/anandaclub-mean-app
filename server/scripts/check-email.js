const emailCheck = require('email-check');

emailCheck('mail@example.com').then(function (res) {
  // Returns "true" if the email address exists, "false" if it doesn't.
}).catch(function (err) {
  if (err.message === 'refuse') {
    // The MX server is refusing requests from your IP address.
  } else {
    // Decide what to do with other errors.
  }
});
