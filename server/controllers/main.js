const Projects = require('../models/main');
const Emails = require('../models/emails');
const nodemailer = require('nodemailer');

exports.appPost = (req, res, next) => {
  console.log(req.body.message);
  const em = new Emails({
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  })
  em
    .save()
    .then(result => {
      res.status(201).json({
        message: "Email was send succesffully."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Email was not send."
      })
    })

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Bboy1598721@gmail.com",
        pass: "Kolopka321",
      },
    });

    let mailOptions = {
      from: req.body.email,
      to: "Bboy1598721@gmail.com",
      subject: req.body.subject,
      text: req.body.message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
}

exports.appGet = (req, res, next) => {
    Projects
  .find()
  .then((doc) => {
    res.status(200).json({
      message: "Project fetched successfully!",
      documents: doc,
    })
  })
  .catch((err) => {
    res.status(500).json({
      message: "Fetching posts failed!"
    })
  });
}
