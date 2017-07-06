const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    secure: true,
    port: 465,
    auth: {
        user: '505792925@qq.com',
        pass: 'ehtymxicikjtbiie'
    }
});

function sendMail (opts) {
    let mailOptions = {
        from: '"Sun School 👻" <505792925@qq.com>', // sender address
        to: opts.receiver, // list of receivers
        subject: 'Sun School ✔', // Subject line
        html: '<p>您正在进行Sun School注册</p><p>验证码为：<b>' + opts.code + '</b></p><p>请继续后续操作</p>'
    };

    return transporter.sendMail(mailOptions);
}

module.exports = sendMail;
