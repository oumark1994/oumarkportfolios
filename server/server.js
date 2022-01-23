const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
require('dotenv').config()
const cors = require('cors')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

// const path = require('path')
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','index.html'));
// })
app.post('/api/sent',(req,res)=>{
    //todo
    //send email here
    // console.log('Data',req.body)
    let data = req.body;
    // res.json({message:"message received!!!"});
    let smtpTransport = nodemailer.createTransport(
        {
            service:'gmail',
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
          
        }
    )
    //mail option
    let  mailOptions = {
        from:data.email,
        to:process.env.EMAIL,
        subject:`Subject ${data.subject}`,
        html:`
        <h3>Informations</h3>
        <ul>
        <li>Subject:${data.subject}</li>
        <li>Email:${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `
    };
smtpTransport.sendMail(mailOptions,function(err,data){
    if(err){
        console.log('Error Occurs',err);
    }else{
        console.log('Email sent !!!')
    }
})
smtpTransport.close();
});
const PORT = process.env.PORT;
app.listen(PORT,()=>console.log(`Server is running on Port ${PORT}`));