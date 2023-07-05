const mongoose = require('mongoose')

let dt = new Date();
dt.setMonth(dt.getMonth() + 1)

const Schema = mongoose.Schema;
const subscriptionDataSchema = new Schema({
    email: String,
    plan: {
        type: String,
        default: "Free"
    },
    expirationDate: {
        type: Date,
        default: dt
    }
})

const subscriptionData = mongoose.model('subscriptionData', subscriptionDataSchema)

module.exports = subscriptionData;
