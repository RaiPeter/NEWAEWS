import React, { useState } from 'react'
import './help.css';
import axios from "axios"


function Help() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [mobile, setMobile] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email,aadhar, mobile,reason);
        
        var user = {
          name: name,
          email :email,
          aadhar : aadhar,
          mobile : mobile,
          reason : reason
      }

          axios
            .post("http://localhost:3001/help", user)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      }

    return (
        <form onSubmit={handleSubmit}>
            Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
            Email: <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  />
            Aadhar: <input type="text" name="aadhar" value={aadhar} onChange={e => setAadhar(e.target.value)}/>
            Mobie No: <input type="number" name="mobileno" value={mobile} onChange={e => setMobile(e.target.value)}/>
            Reason <input type="text" name="reason" value={reason} onChange={e => setReason(e.target.value)} />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Help
