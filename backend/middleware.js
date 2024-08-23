const { JWT_SECRET } = require("./config");
const jwt = require('jsonwebtoken');



const authMiddleware  = async(req,res,next) => {
const  authToken  = req.headers.authorization
const token = authToken.split(" ")[1]
try{   
    const verified = jwt.verify(token,JWT_SECRET)
    req.userId = verified.userId
    next()
 }
catch(err){
    return res.status(400).json({
    msg : 'something went wrong!'
        })
    }
}

module.exports = {
    authMiddleware
}