const User = require('../models/user')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')

//register user => /backend/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { firstname, lastname, email, password, points } = req.body
    const user = await User.create({
        firstname,
        lastname,
        email,
        password,
        points
    })

    sendToken(user, 200, res)
})

//login user => /backend/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body

    //check if email and password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Masukan Email dan Password', 400))
    }

    //finding user in database
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Email dan Password Salah', 401));
    }

    //checks password is correct or not
    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Email dan Password Salah', 401));
    }

    sendToken(user, 200, res)
})

// forgot password => /backend/forgot
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return next(new ErrorHandler('User Tidak Ditemukan', 404));
    }

    //get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false })

    //create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/backend/password/reset/${resetToken}`

    const message = `Reset password ikuti link berikut:\n\n${resetUrl}\n\nApabila anda tidak mengirim reset token abaikan`

    try {

        await sendEmail({
            email: user.email,
            subject: 'Amanda Kemasan Password Recovery',
            message,
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({ validateBeforeSave: false })

        return next(new ErrorHandler(error.message, 500))
    }
})

// reset password => /backend/password/reset/:token
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    //hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt: Date.now()
        }
    })

    if (!user) {
        return next(new ErrorHandler('Password reset token salah atau sudah kaldaluarsa', 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password tidak cocok', 400))
    }

    //setup new password
    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    sendToken(user, 200, res)
})

//logout => /backend/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: 'Akun sudah Keluar'
    })
})

//get currently loginUser details => /backend/profile
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id)
    res.status(200).json({
        success: true,
        user
    })
})