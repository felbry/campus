const User = require('../db/user');

module.exports = {
    find (opts) {
        return User.findAll({
            where: opts
        }).then(v => v);
    },
    insert (opts) {
        return User.create(opts).then(v => v);
    },
}