const mongoose = require('mongoose')

let dt = new Date();
dt.setMonth(dt.getMonth() + 1)

const Schema = mongoose.Schema;
const affiliateProfileSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    platform: Array,
    birthdate: Date,
    province: String,
    country: String,
    registerDate: {
        type: Date,
        default: Date.now
    },
    logged_in: {
        type: Boolean,
        default: true
    },
    plan: {
        type: String,
        default: "Free"
    },
    expirationDate: {
        type: Date,
        default: dt
    }
})

const affiliateProfile = mongoose.model('affiliateProfile', affiliateProfileSchema)

module.exports = affiliateProfile;