const express = require('express');
const cors = require('cors');

const app = express()
const mongoose = require('mongoose');

require('dotenv').config(); 


const port = process.env.PORT || 3100

async function connect() {
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    console.log("Connected to DB")
}

connect().catch(console.error)

app.use(cors({
    origin: 'https://alma-elegancee-store.vercel.app/'
}));
app.use(express.json());


const authenticate = require('./auth/authenticate');

const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const refreshTokenRouter = require('./routes/refreshToken');
const signoutRouter = require('./routes/signout');
const userRouter = require('./routes/user');
const testRouter = require('./routes/test');
const cart = require('./routes/cart');

// app.use('/api/test', testRouter);
app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);
app.use('/api/refreshToken', refreshTokenRouter);
app.use('/api/signout', signoutRouter);
app.use('/api/user', authenticate, userRouter);
app.use('/api/cart', cart);





app.get('/api', (req, res) =>{
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})