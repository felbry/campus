const crypto = require('crypto');
const config = require('./config');

module.exports = {
    random (n) {
        let code = '';
        for (let i = 0; i < n; i++) {
            code += Math.floor((Math.random() * 9) + 1);
        }
        return code;
    },
    encryption (pwd) {
        let md5 = crypto.createHash('md5');
        md5.update(md5.update('' + pwd) + config.pwdMixing);
        
        return md5.digest('hex');
    },
    handleError () {
        return (ctx, next) => next().catch((err) => {
            if (err.status) {
                ctx.status = err.status;
                ctx.body = {
                    code: 1,
                    msg: err.message
                };
            } else {
                throw err;
            }
        });
    }
}