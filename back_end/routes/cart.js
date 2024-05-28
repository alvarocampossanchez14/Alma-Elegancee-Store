const express = require('express');
const router = express.Router();    
const User = require('../schema/user');
const {jsonResponse} = require('../lib/jsonResponse')   

router.post('/add-to-cart', async(req, res)=>{
    const {userId, productId} = req.body

    try {
        const user = await User.findById(userId)
        user.cart.push(productId)

        await user.save()

        res.status(200).send(jsonResponse(200, {message: 'Product added to cart'}))
    } catch(error) {
        console.error('Error adding product to cart', error)
        res.status(500).send(jsonResponse(500, {error: 'Error adding product to cart'}))
    }
})

router.delete('/remove-from-cart', async(req, res)=>{  
    const {userId, productId} = req.body

    try {
        const user = await User.findById(userId)
        user.cart = user.cart.filter(item => item !== productId)

        await user.save()

        res.status(200).send(jsonResponse(200, {message: 'Product removed from cart'}))
    } catch(error) {
        console.error('Error removing product from cart', error)    
        res.status(500).send(jsonResponse(500, {error: 'Error removing product from cart'}))
    }
 })


 router.get('/', (req, res)=> {
        res.send('Cart route')
 })

 module.exports = router