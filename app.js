const express=require('express')
const bodyParser=require('body-parser');

const nodemailer=require('nodemailer')
const app=express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.listen(3000)

app.get('/',(req, res) =>{
      res.render("contact")
      });

app.post('/sendmail',(req, res)=>{
   var sender=nodemailer.createTransport({
       service:'gmail',
        auth  : {
           user:'123@gmail.com',//sender mail address
           pass:'********'//your mail password
        }
       });
    var composemail={
        from:'123@gmail.com',//sender mail address
        to:'456@gmail.com',//to mail address
        subject:"CONTACT DETAIL",
        text:'NAME:'+ `${req.body.Name}`+'/' + 'ADDRESS:'+ `${req.body.Address}`+'/'+'MOBILE:'+ `${req.body.Mobile}`
    }   
    sender.sendMail(composemail,function(err,info){
        if(err){
            console.log(err);
        }else{
            console.log("MAIL SEND SUCCESSFULLY");
            return res.end("submitted successfully")
        }
    });
    
    });
    