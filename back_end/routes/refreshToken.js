const router = require('express').Router()

router.get('/', (get, res)=> {
    res.send('refreshToken')
})

module.exports = router