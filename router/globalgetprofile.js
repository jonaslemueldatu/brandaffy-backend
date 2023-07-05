const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const affiliateProfile = require('../model/affiliateProfile')

router.get('/', (req, res) => {
    console.log(req.query.email)
    affiliateProfile.findOne({ email: req.query.email }).then((data) => {
        if (data) {
            const date = new Date(data.birthdate)
            res.status(200),
                res.json({
                    user_profile: {
                        firstname: data.first_name,
                        lastname: data.last_name,
                        birthdate: date.toISOString().substring(0, 10),
                        email: data.email,
                        country: data.country,
                        province: data.province,
                        platform: data.platform
                    },
                    msg: "Profile found!"
                })
        } else {
            res.status(400)
            res.json({
                error: "Profile cannot be found!"
            })
        }

    })
})

module.exports = router;