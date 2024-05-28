const { jsonResponse } = require('../lib/jsonResponse');

const router = require('express').Router()

const User = require('../schema/user')

router.post('/', async (req, res)=> {
    const {username, password} = req.body;

    if(!!!username || !!!password) {
        return res.status(400).json(jsonResponse(400, {
            error: "Todos los campos son requeridos"
        }))
    } 

    try {
        const user = new User()
        const exists = await user.usernameExist(username)
   

        if(exists) {
            return res.status(400).json(
                jsonResponse(400, { 
                error: "El usuario ya existe"
            })
        )}

        const newUser = new User({
            username,
            password
        })

        newUser.save()

        const accessToken = user.createAccessToken();
        const refreshToken = await user.createRefreshToken();

        res.status(200).json(jsonResponse(200, {
            accessToken,
            refreshToken,
            message: "User Created Successfully"
        }))
        // res.send('signup')
    } catch (error) {
        res.status(500).json(jsonResponse(500, {
            error: "Error creating user"
        }))

        console.log(error)
    }
})

module.exports = router