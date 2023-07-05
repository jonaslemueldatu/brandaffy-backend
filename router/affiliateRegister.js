const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const affiliateProfile = require('../model/affiliateProfile')
const subscriptionData = require('../model/subscriptionData')
const jwt = require('jsonwebtoken')


router.post('/', (req, res) => {
    affiliateProfile.findOne({ email: req.body.email }).then((data) => {
        if (data) {
            res.status(200)
            res.json({
                error: "Email already exists!"
            })
        } else {
            const newaffiliateProfile = new affiliateProfile({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                platform: req.body.platform
            })

            const newsubscriptionData = new subscriptionData({
                email: req.body.email
            })
            const token = jwt.sign({ email: req.body.email }, 'topulchraes', { expiresIn: "1h" });

            newaffiliateProfile.save()
            newsubscriptionData.save().then(
                res.status(200),
                res.json({
                    msg: "Registration successful!",
                    token: token,
                    user_profile: {
                        email: req.body.email
                    }
                })
            )
        }
    })
})

module.exports = router;