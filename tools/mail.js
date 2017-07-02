const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 25,
    auth: {
        user: '13290967808@163.com',
        pass: 'Jing050966'
    }
});

function sendMail (opts) {
    let mailOptions = {
        from: '"Sun School 👻" <13290967808@163.com>', // sender address
        to: opts.receiver, // list of receivers
        subject: 'Sun School验证邮件 ✔', // Subject line
        html: '<p>您正在进行Sun School注册</p><p>验证码为：<b>' + opts.code + '</b></p><p>请继续后续操作</p>' // html body
    };

    return transporter.sendMail(mailOptions);
}

module.exports = sendMail;
