const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/errors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const path = require('path');

//setting up config file 
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

//import all routes
const auth = require('./routes/authRoutes')

app.use('/backend', auth)

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

app.use(errorMiddleware)

module.exports = app