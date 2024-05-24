const Mongo = require('mongoose');

const TokenSchema = new Mongo.Schema({  
    id: {type: Object},
    token: {type: String, required: true},
})

module.exports = Mongo.model('Token', TokenSchema)