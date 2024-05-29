const Mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { generateAccesToken, generateRefreshToken } = require('../auth/generateTokens');
const { getUserInfo } = require('../lib/getUserInfo'); 
const Token = require('../schema/token')

const UserSchema = new Mongoose.Schema({
    id: {type: Object},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cart: {type: Array, required: true},
})


UserSchema.pre('save', function(next) {
    if(this.isModified('password') || this.isNew) {
        const document = this

        bcrypt.hash(document.password, 10, (err, hashedPassword) => {
            if(err) {
                next(err)
            } else {
                document.password = hashedPassword
                next()
            }
        })
    } else {
        next()
    }
})

UserSchema.methods.usernameExist = async function(username) {
    const result = await Mongoose.model('User').findOne({username})

    return result !== null
}

UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.createAccessToken = function() {
    return generateAccesToken(getUserInfo(this))
}

UserSchema.methods.createRefreshToken = async function() {
    const refreshToken = generateRefreshToken(getUserInfo(this))

    try {
        await new Token({token: refreshToken}).save()
        console.log("Token saved", refreshToken)
        return refreshToken
    } catch (error) {
        console.log(error)
    }
}


module.exports = Mongoose.model('User', UserSchema)