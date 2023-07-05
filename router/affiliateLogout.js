const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const affiliateProfile = require('../model/affiliateProfile')


router.post('/', (req, res) => {
    affiliateProfile.findOne({ email: req.body.email }).then((data) => {
        if (data) {
            data.logged_in = false
            data.save().then(
                res.status(200),
                res.json({
                    msg: "Successfully Logged-out!"
                })
            )
        } else {
            res.status(400)
            res.json({
                error: "id cannot be found"
            })
        }

    })
})

module.exports = router;