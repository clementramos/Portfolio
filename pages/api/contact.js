export default function(req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'ramosclement.pro@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: 'ramosclement.pro@gmail.com',
        to: 'ramos.clement@outlook.fr',
        subject: `Nouveau message de ${req.body.name}`,
        text: req.body.message + " | Envoyé depuis: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Envoyé depuis : ${req.body.email}</p>`
    }

    const mailSend = {
        from: 'ramosclement.pro@gmail.com',
        to: `${req.body.email}`, // to check
        subject: `Thanks for contacting me ${req.body.name}!`,
        text: "hello, world",
        html: `<div style="text-align:center">Hello ! Thanks for contacting me! <br> I'll get back to you as soon as possible. If you want, you can also check my <a href="http://#> CV </a> for more informations."</div><div>Please don't reply to this email.</div>`
    }
    transporter.sendMail(mailData, mailSend, function(err, info) {
        if (err)
            console.error(err)
        else
            console.log(info)
    })

    res.status(200)
}