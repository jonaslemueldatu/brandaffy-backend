const express = require('express')
const cors = require('cors')
const PORT = 3000
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const affiliateRegisterRoute = require('./router/affiliateRegister')
const AffiliateLoginRoute = require('./router/affiliateLogin')
const AffiliateLogoutRoute = require('./router/affiliateLogout')
const AffiliateUpdateRoute = require('./router/affiliateUpdate')
const Globalgetprofile = require('./router/globalgetprofile')


mongoose.connect("mongodb+srv://jcdatu1:Temp1234x@cluster0.btb30ed.mongodb.net/brandaffydb?retryWrites=true&w=majority", {useNewUrlParser: true},{useUnifiedTopology: true})

mongoose.connection.on('connected', () => {
    console.log("MongoDB has been connected")
})
function logger(req, res, next) {
    console.log(`[${Date.now()}] ${req.method} ${req.url} `)
    next()
}

app.use(logger)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/affiliate/register', affiliateRegisterRoute)
app.use('/api/affiliate/login', AffiliateLoginRoute)
app.use('/api/affiliate/logout', AffiliateLogoutRoute)
app.use('/api/affiliate/update', AffiliateUpdateRoute)
app.use('/api/global/getprofile', Globalgetprofile)


app.listen(PORT, () => console.log("App is now running!"))