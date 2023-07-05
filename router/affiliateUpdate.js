const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const affiliateProfile = require('../model/affiliateProfile')


router.post('/', (req, res) => {
    affiliateProfile.findOne({ email: req.body.email }).then((data) => {
        if (data) {
            if (data.birthdate != req.body.birthdate) {
                data.birthdate = req.body.birthdate
            }
            if (data.first_name != req.body.firstname) {
                data.first_name = req.body.firstname
            }
            if (data.last_name != req.body.lastname) {
                data.last_name = req.body.lastname
            }
            if (data.province != req.body.province) {
                data.province = req.body.province
            }
            if (data.country != req.body.country) {
                data.country = req.body.country
            }
            data.save().then(
                res.status(200),
                res.json({
                    msg: "Update successful",
                    user_profile: data
                })
            )
        } else {
            res.status(400)
            res.json({
                error: "Failed to update"
            })
        }
    })
})

module.exports = router;