const express = require('express')
const router = express.Router()

const { registerUser, loginUser, getUserProfile, logout, forgotPassword, resetPassword } = require('../controllers/authController')
const { isAuthenticatedUser } = require('../middlewares/auth')

//auth routes
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)

router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)

//profile routes
router.route('/profile').get(isAuthenticatedUser, getUserProfile)

module.exports = router