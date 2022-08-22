//creating sign up route 
const express = require("express")
const {signup} = require("../controllers/user")
const {check} = require('express-validator')
const router = express.Router()

router.post('/signup',signup)
module.exports = router 