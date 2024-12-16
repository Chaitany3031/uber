// Suggested code may be subject to a license. Learn more: ~LicenseLog:2209217198.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4055712920.
const mongoose = require('mongoose')


function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT
    ).then(()=>{console.log('Connected to database')
    }).catch(err=>console.log(err))
}

module.exports = connectToDb;
