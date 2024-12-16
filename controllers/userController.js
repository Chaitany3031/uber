const User = require('../models/user')
const userService = require('../services/userServices')
const {validationResult} = require('express-validator')

module.exports.resgisterUser = async (req,res,next) => {

    const errors = validationResult(req)
// Suggested code may be subject to a license. Learn more: ~LicenseLog:382106366.
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    console.log(req.body)

    const {fullname,email,password} = req.body

    const hashedPassword = await User.hashPassword(password)

    const user = await userService.createUser({
        
// Suggested code may be subject to a license. Learn more: ~LicenseLog:393490111.
            firstname:fullname.firstname,
            lastname:fullname.lastname,
        email,
        password:hashedPassword
    })

    const token = user.generateAuthToken()

    res.status(201).json({token,user})
    
}

