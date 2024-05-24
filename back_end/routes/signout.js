const { jsonResponse } = require('../lib/jsonResponse');

const router = require('express').Router()

router.get('/', (get, res)=> {
    
    res.send('signout')
})

module.exports = router