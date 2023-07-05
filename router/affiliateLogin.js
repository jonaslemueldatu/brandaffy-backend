const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const affiliateProfile = require('../model/affiliateProfile')
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    affiliateProfile.findOne({ email: req.body.email }).then((data) => {
        if (data) {
            if (data.password == req.body.password) {
                const token = jwt.sign({ data: data }, 'topulchraes', { expiresIn: "1h" });
                data.logged_in = true
                data.save().then(
                    res.status(200),
                    res.json({
                        msg: 'User has logged-in successfully',
                        token: token,
                        user_profile: {
                            first_name: data.first_name,
                            last_name: data.last_name,
                            email: data.email,
                            birthdate: data.birthdate,
                            province: data.province,
                            country: data.country,
                            id: data._id
                        }
                    })
                )
            } else {
                res.status(200)
                res.json({
                    error: "Incorrect password!"
                })
            }
        } else {
            res.status(200)
            res.json({
                error: "Email is not registered yet!"
            })
        }
    })
})

module.exports = router;