const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Masukan Nama Awal Anda']
    },
    lastname: {
        type: String,
        required: [true, 'Masukan Nama Terakhir Anda']
    },
    email: {
        type: String,
        required: [true, 'Masukan Email Anda'],
        unique: true,
        validate: [validator.isEmail, 'Masukan Email Yang Benar']
    },
    password: {
        type: String,
        required: [true, 'Masukan Password Anda'],
        select: false,
    },
    points: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

//encrypting password before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

//compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

//Return JWT token 
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

//generate password reset token
userSchema.methods.getResetPasswordToken = function () {
    //generate token
    const resetToken = crypto.randomBytes(20).toString('hex')
    //hash and set to reset password resetToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    //set token expired time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000
    return resetToken
}

module.exports = mongoose.model('User', userSchema);