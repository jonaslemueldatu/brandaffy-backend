const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const affiliateProfile = require('../model/affiliateProfile')

router.post('/', (req, res) => {
    console.log(req.body)
    const newaffiliateProfile = new affiliateProfile({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        platform: req.body.platform
    })

    newaffiliateProfile.save().then(res.json({
        msg: "Saved!"
    }))
 
})

module.exports = router;