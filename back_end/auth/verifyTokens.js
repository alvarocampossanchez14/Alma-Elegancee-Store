const jsonwebtoken = require("jsonwebtoken")

function verifyAccessToken(token) {
    return jsonwebtoken.verify(token, process.env.ACCES_TOKEN_SECRET)
}

function verifyRefreshToken(token) {
    return jsonwebtoken.verify(token, process.env.REFRESH_TOKEN_SECRET)
}

module.exports = {verifyAccessToken, verifyRefreshToken}