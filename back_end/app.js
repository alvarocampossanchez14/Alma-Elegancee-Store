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

app.use(cors());
app.use(express.json());



const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const refreshTokenRouter = require('./routes/refreshToken');
const signoutRouter = require('./routes/signout');

app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);
app.use('/api/refreshToken', refreshTokenRouter);
app.use('/api/signout', signoutRouter);





app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})