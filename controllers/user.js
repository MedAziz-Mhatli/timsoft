//creating a signup controller 

const User = require('../models/user')
const {validationResult} = require('express-validator')

var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')

const router = require('../routes/user')

exports.signup = (req, res) => {
    const user = new User(req.body)
    user.save((err, user)=> { 
         if (err) { 
            return res.status(400).json({ 
                error:"Unable to add user"
    })
}
    return res.json({
        message : "Success", 
        user
        })
    })
}