const nodemailer=require('nodemailer')

const authConfig = {
    secret: "KAM-secret-key",
    user: "sulisteszteles@gmail.com", 
    pass: "suli@teszt123", 
  };

const user=authConfig.user
const pass=authConfig.pass
//email service configuration
const transport=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:user,
        pass:pass
    },
    tls:{
        rejectUnauthorized:false
    }
})
module.exports = {transport,user,pass}