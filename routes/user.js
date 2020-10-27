var express = require('express');
var router = express.Router();
var path = require("path")
var jwt = require("jsonwebtoken")
const { React } = require("react");
var User = require("../model/user")
const nodemailer = require('nodemailer');

/* GET home page. */
router.post('/login', function (req, res, next) {
    var { email, password } = req.body;
    var error = {}
    console.log(req.body)
    if (email == "") error.email = "This field is required";
    if (password == "") error.password = "This field is required";
    if (error.password || error.email) {
        return res.json({ "error": error })
    }
    var data = {
        email: email
    }
    // User.findOne({
    //     email: email
    // }).then((user) => {
    //     if (user) {
    //        console.log(password,user.password)
    //             bcrypt.compare(password, user.password).then((valid) => {
    //                 if (valid) {
    //                         var token = jwt.sign(data, "h1a2b3e4e5b6").toString();
    //                         res.header('x-auth', token).json({ "token": token });
    //                     } else res.json({ "error": { "email": "This email has not been verified. please check your inbox " } })
    //             }).catch((error) => (console.log(error)));
    //     } else res.json({ "error": { "email": "Please enter a valid email/password", password: "incorrect password" } })
    // })
})
router.post('/register', function (req, res, next) {
    const { email, cpassword, password } = req.body;
    let time = new Date();
    let error = {}
    let newbio;
    let text = "This field is required";
    if (email === "") error.email = text
    if (password === "") error.password = text
    if (error.email || error.password)
        return res.json({ error })
        if(password === cpassword)
    // bcrypt.hash(password, 10).then((hash) => {
    //     User.findOne({email}).then((check)=>
    // {
    //     if(check){
    //         res.json({error:{server:"This user already exist"}})
    //     }else{
    //         User.create({
    //             email, password:hash,
    //             date: time,
    //         }).then((user) => {
    //             if (user) {
    //                 const nodemailer = require('nodemailer');

    //                 // Generate test SMTP service account from ethereal.email
    //                 // Only needed if you don't have a real mail account for testing
    //                 // nodemailer.createTestAccount((err, account) => {
    //                 // create reusable transporter object using the default SMTP transport
    //                 // mail.tamtamtools.com
    //                 let transporter = nodemailer.createTransport({
    //                     //   tls: {
    //                     //     rejectUnauthorized: false
    //                     //   },
    //                     //   host: 'mail.tamtamtools.com',
    //                     //   port: 465,
    //                     //   secure: true, // true for 465, false for other ports
    //                     //   auth: {
    //                     //     user: "info@tamtamtools.com", // generated ethereal user
    //                     //     pass: "q#sui?ql)lsY@d_Tz%" // generated ethereal password
    //                     //   }
    //                     // });
    //                     tls: {
    //                         rejectUnauthorized: false
    //                     },
    //                     host: 'mail.tamtamtools.com',
    //                     port: 465,
    //                     secure: true, // true for 465, false for other ports
    //                     auth: {
    //                         user: "info@tamtamtools.com", // generated ethereal user
    //                         pass: "q#sui?ql)lsY@d_Tz%" // generated ethereal password
    //                     }
    //                 });
    //                 // setup email data with unicode symbols
    //                 let mailOptions = {
    //                     from: '"Kaystore 👻" <info@kaystore.com>', // sender address
    //                     to: `${email},habibmail31@gmail.com`, // list of receivers
    //                     subject: 'Account Registration ✔', // Subject line
    //                     text: 'Hello?', // plain text body
    //                     headers: {
    //                         "X-SMTPAPI": {
    //                             "category": [
    //                                 "Orders"
    //                             ]
    //                         }
    //                     },
    //                     html: ' <body style="background:#f7f7f7"><div style="width:90%; background:#fff; margin:10px auto 20px;font-family:Verdana, Geneva, Tahoma, sans-serif"><div style="background:#F4EEE2; padding:10px;color:rgb(248, 150, 166)"><center><h3>Kaystore</h3></center></div><div style="padding:30px"><center><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"><small>Congratulations! your Kaystore account has successfully been created</small></p><h2>Please login to continue</h2><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"></p><p style="margin: 30px"> <a href="https://Kaystore.herokuapp.com/login" style="font-size:0.9em;text-decoration:none;color:#000;border:1px solid #777;background:transparent;padding:10px 50px;font-family:Verdana"> Verify Email</a></p></center></div><div style="background:#eee;height:2px;margin:10px 0px"></div><div style="padding:40px 20px;font-size:0.7em;color:#bbb"><center>Questions? Get your answers here: <a href="https://kaystore.herokuapp.com/faq" style="color:blue">Help Center</a></a>.</center></div></div><div style="font-size:0.7em;text-align:center;color:#bbb;width:35%;margin:auto">Off University road | Tanke Ilorin, Nigeria, 11201 | Copyright © 2018 | All rights reserved</div></body>' // html body
    //                 };

    //                 // send mail with defined transport object
    //                 transporter.sendMail(mailOptions, (error, info) => {
    //                     if (error) {
    //                         return console.log(error);
    //                     }
    //                     console.log('Message sent: %s', info.messageId);
    //                     // Preview only available when sending through an Ethereal account
    //                     console.log(info);

    //                     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //                     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    //                 });
    //                 res.json({ "success": "Account created successfully. please login to continue" })

    //             }
    //         }).catch((error) => { console.log(error); res.json({ error: { "server": "An error has occured" } }); })

    //     }
    // })
      
    // })
        else res.json({ error: { password: "Password do not match", cpassword:"Password do not match"}})

})

module.exports = router;
