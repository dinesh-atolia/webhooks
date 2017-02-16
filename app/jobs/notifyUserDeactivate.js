var request = require('request');

export const = notifyUserDeactivate = {
  perform: function(userId, callback) {
    // with userId we can fetch the deactivated user from db and after that we can fetch the
    // webhooks that we need to call from it.

    // If we have fewer url to call we can just iterate and acll urls one by one.

    // if we have more than 100 urls to call, we should consider breaking that in to multiple jobs.

    // callback(null, answer);
  },
},
