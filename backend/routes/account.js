const express = require('express')
const { authMiddleware } = require("../middleware")
const { BankAccount } = require("../db")
const { default: mongoose } = require('mongoose')
const router = express.Router()
router.get("/balance",authMiddleware,async (req,res) => {
    const acc = await BankAccount.findOne({
        userId : req.userId
    })
    res.json({
        balance : acc.balance
    })
})

router.post("/transfer",authMiddleware,async (req,res) => {
    const session = await mongoose.startSession()
    session.startTransaction()

    const fromAcc  = await BankAccount.findOne({
        userId : req.userId
    }).session(session)

    if(!fromAcc || fromAcc.balance < req.body.ammount){
        await session.abortTransaction()
       return res.status(400).json({
            msg : 'no account found or insufficient balance'
        })
    }

    const toId = req.body.to
  await BankAccount.updateOne({
        userId : req.userId
    },{
        $inc : {
            balance : -req.body.ammount
        }
    }).session(session)


    await BankAccount.updateOne({
        userId : toId
    },{
        $inc : {
            balance : req.body.ammount
        }
    }).session(session)

    session.commitTransaction()    
    
res.json({
    msg : 'transaction successful!'
    })
})


module.exports = router
    