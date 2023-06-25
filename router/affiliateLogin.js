const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const affiliateProfile = require('../model/affiliateProfile')
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    console.log(req.body)
    affiliateProfile.findOne({email:req.body.email}).then((data) => {
        if (data) {
            if (data.password == req.body.password) {
                const token = jwt.sign({data: data}, 'hello', { expiresIn: "1h" });
                console.log(token)
                res.status(200)
                res.json({
                    msg: 'User has logged-in successfully',
                    token: token,
                    user_profile: {
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        id: data._id
                    }
                })
            } else {
                res.status(401)
                res.json({
                    error: "Incorrect Password!"
                })
            }
        } else {
            res.status(40)
            res.json({
                error: "User does not Exist!"
            })
        }
    })        
})

module.exports = router;