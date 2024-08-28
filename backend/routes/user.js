const express = require('express');
const router = express.Router();
const { User, BankAccount } = require("../db");
const { authMiddleware } = require("../middleware");
const { userValidator ,updateBody } = require("../types");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
router.post("/signup",async(req,res)=>{
    const userPayload = req.body
    const isValid = userValidator.safeParse(userPayload)
   try{ if(!isValid.success){
        res.status(411).json({
            msg : 'invalid inputs',
            uname : userPayload.username,
            fname : userPayload.firstName,
            lname : userPayload.lastName,
            pass : userPayload.password
        })
    }
   const foundUser = await User.findOne({
        username : userPayload.username
    })
    if(foundUser){
        res.status(400).json({
            msg : 'user already exists!'
        })
    }
    const user = await User.create({
        username : userPayload.username,
        firstName : userPayload.firstName,
        lastName : userPayload.lastName,
        password : userPayload.password
    })
    
    const userId = user._id

    await BankAccount.create({
        userId,
        balance : Math.floor(Math.random()*10000) + 1
    })
    const acc = await BankAccount.findOne({
        userId : userId
    })
    const balance = acc.balance
    const token = jwt.sign({userId},JWT_SECRET)
    res.status(200).json({
        msg : 'user created successfully!',
        token : token,
        balance : balance,
        fname : user.firstName,
        lname : user.lastName,
        email : user.username,
    })}
    catch(e){
        console.log('signup error: ' + e);
        
    }
})

router.post("/signin",async (req,res)=>{
    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })
    if(user){
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET)
        res.json({
            msg : 'signed in!',
            token: token,
            fname : user.firstName,
            lname : user.lastName,
            email : user.username,
        })
        return
    }
        res.status(400).json({
            msg : 'err logging in!'
        })
})

//update route : 



router.put("/",authMiddleware ,async (req,res) => {
    const updatePlayload = req.body
    const isValid = updateBody.safeParse(updatePlayload)
    if(!isValid.success){
        res.status(411).json({
            msg : 'invalid inputs!'
        })
    }
    await User.updateOne({
        firstName : updatePlayload.firstName,
        lastName : updatePlayload.lastName,
        password : updatePlayload.password,
        username : updatePlayload.username
    })
    res.json({
        msg : 'updated the user info!'
    })
})

// filter for getting users in db

router.get("/bulk",authMiddleware, async (req, res) => {
    const filter = req.query.filter || ""

    const users = await User.find({
        $or: [{
            firstName : {
                "$regex" : filter
            }
        },
        {
        lastName : {
                "$regex" : filter
            }
        }]
    })

    res.json({
        user : users.map(user => ({
            username : user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id
        }))
    })
})
router.get('/',authMiddleware, async (req,res) => {
    const userId = req.userId
    try {   const foundUser = await User.findOne({
            _id : userId
            })
            res.json({
                user : foundUser.firstName
            })
        }
catch{
    res.status(411).json({
        msg : 'something went wrong!'
    })
}

})
module.exports = router;