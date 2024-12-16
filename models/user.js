// Suggested code may be subject to a license. Learn more: ~LicenseLog:3297365132.
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// Suggested code may be subject to a license. Learn more: ~LicenseLog:2687932073.
const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[2,'Must be atleast 2 characters'],
            maxlength:20
        },
        lastname:{
            type:String
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
        },
        password:{
            type:String,
            required:true,
            select:false
        },
        socketId:{
            type:String
        }
        })


        userSchema.methods.generateAuthToken = function(){
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4040692579.
            const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
            return token
        }
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2262078446.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3421702208.
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password) 
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const User = mongoose.model('User',userSchema)

module.exports = User;

        
        