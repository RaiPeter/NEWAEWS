const express = require("express");
const router = express.Router();
const Volunteer = require("../models/volunteerModel");
const Help = require("../models/helpModel");
var nodemailer = require('nodemailer');

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
console.log(email);
    mail(email);

})

function mail(addres){
  let transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
          user:'samaptirouth180@gmail.com',
          pass:'9749101235@'
      }
  });
  
  let mailoptions ={
      from:'samaptirouth180@gmail.com',
      to:`${addres}`,
      subject:'testing',
      text:'Thank you for contacting. We will get back to you'
  };
  
  transporter.sendMail(mailoptions, function (err, info) {
      if(err){
          console.log(err)
      }else{
          console.log("it worked")
      }
   });
  
  }

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