const nodemailer = require('nodemailer');

// Generate SMTP service account from ethereal.email

let sendForgotPasswordEmail = (toEmail,code)=>{
nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
       
        auth: {
            user: 'zim3f6btkcrawlnx@ethereal.email',
            pass: 'X9tw8CZMXv9CUeUA13'
        }
    });

    // Message object
    let message = {
        from: 'MahedraSingh@gmail.com',
        to: `${toEmail}`,
        subject: 'Forgot password',
        text: `Hi your secure code is -${code}`,

    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Email sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Email Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
}


module.exports = {
    sendForgotPasswordEmail:sendForgotPasswordEmail
}