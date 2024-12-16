// Suggested code may be subject to a license. Learn more: ~LicenseLog:704992555.
const express = require('express');
const router = express.Router()
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3929333859.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2451093346.
const {body} = require('express-validator')
const userController = require('../controllers/userController')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:2}).withMessage
    ('First name should be at least 2 characters'),
    body('password').isLength({min:6}).withMessage
    ('Password should be at least 6 characters'),
    userController.resgisterUser
])



module.exports = router;