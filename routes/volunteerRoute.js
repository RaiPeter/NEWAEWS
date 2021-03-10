const express = require("express");
const router = express.Router();
const Volunteer = require("../models/volunteerModel");
const Help = require("../models/helpModel");
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rai.peter2@gmail.com',
    pass: 'peter319645296'
  }
});

var mailOptions = {
  from: 'rai.peter2@gmail.com',
  to: 'raipeter1@hotmail.com, 7829028295@nma.Vodafone.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});




// adding volunteer
router.route("/add-volunteer").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pan = req.body.pan;
    const aadhar = req.body.aadhar;
    const mobile = req.body.mobile;
    const occupation = req.body.occupation;
    console.log(name,email,pan,aadhar,mobile,occupation);

    const newVolunteer = new Volunteer({
        name,
        email,
        pan,
        aadhar,
        mobile,
        occupation
    });
    newVolunteer.save();
})

// adding help form
router.route("/help").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const aadhar = req.body.aadhar;
    const mobile = req.body.mobile;
    const reason = req.body.reason;
    console.log(name,email,aadhar,mobile,reason);

    const newHelp = new Help({
        name,
        email,
        aadhar,
        mobile,
        reason
    });
    newHelp.save();
})

router.route("/show-volunteers").get((req,res)=>{
    Volunteer.find()
    .then(foundVolunteer => res.json(foundVolunteer))
})

module.exports = router;