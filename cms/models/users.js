const db = require('../utils/mongo-client');
const Schema = db.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    userId:ObjectId,
    name:String,
    contactNumber:Number,
    fathersName:String,
    address:String
})