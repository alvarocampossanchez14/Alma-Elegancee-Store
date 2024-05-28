function getUserInfo(user) {
    return {
        username: user.username,
        id: user.id,
        cart: user.cart
    }
}

module.exports = {getUserInfo}
