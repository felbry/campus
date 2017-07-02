const Email = require('../db/verify_email');

module.exports = {
    insert (opts) {
        return Email.create(opts).then(v => v);
    }
}