const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const affiliateProfileSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    platform: Array,
    registerDate: {
        type: Date,
        default: Date.now
    },
    logged_in: {
        type: Boolean,
        default: true
    }
})

const affiliateProfile = mongoose.model('affiliateProfile', affiliateProfileSchema)

module.exports = affiliateProfile;