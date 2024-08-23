const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ADMIN:w1MrRCDSfEv4eKei@cluster0.xf85mlc.mongodb.net/paytm?")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
}
)
const User  =  mongoose.model('user',userSchema)
const BankAccount = mongoose.model('bank',({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : User,
        required : true
    },
    balance : {
        type : Number,
        required : true,
    }
}))
module.exports = {
    User,BankAccount
}    