const app = require('./app')
const connectDatabase = require('./config/database')

//handle uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR : ${err.messege}`);
    console.log('Shutting down the server due to uncaught exception');
    process.exit(1);
})

//settingup config file
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })

// Connection to database
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})

//handle unhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`)
    console.log('Shutting down the server due to unhandled promise rejections');
    server.close(() => {
        process.exit(1)
    })
})