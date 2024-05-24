const router = require('express').Router()
// const { getUserInfo } = require('../lib/getUserInfo');
const { jsonResponse } = require('../lib/jsonResponse');
const User = require('../schema/user')
const { getUserInfo }= require('../lib/getUserInfo')

router.post('/', async(req, res) => {
    const {username, password} = req.body;


    try {
        let user = new User();
        const userExists = await user.usernameExist(username);
    
        if (userExists) {
          user = await User.findOne({ username: username });
    
          const passwordCorrect = await user.comparePassword(
            password,
            user.password
          );
    
          if (passwordCorrect) {
            const accessToken = user.createAccessToken();
            const refreshToken = await user.createRefreshToken();
    
            console.log({ accessToken, refreshToken });
    
            return res.json(
              jsonResponse(200, {
                accessToken,
                refreshToken,
                user: getUserInfo(user),
              })
            );
          } else {
            //res.status(401).json({ error: "username and/or password incorrect" });
    
            return res.status(401).json(
              jsonResponse(401, {
                error: "username and/or password incorrect",
              })
            );
          }
        } else {
          return res.status(401).json(
            jsonResponse(401, {
              error: "username does not exist",
            })
          );
        }
      } catch (err) {
        console.log(err);
      }

})

module.exports = router