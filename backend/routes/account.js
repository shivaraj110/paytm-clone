const express = require('express')
const { authMiddleware } = require("../middleware")
const { BankAccount } = require("../db")
const { default: mongoose } = require('mongoose')
const router = express.Router()
router.get("/balance",authMiddleware,async (req,res) => {
    try{const acc = await BankAccount.findOne({
        userId : req.userId
    })
    res.json({
        balance : acc.balance
        
    })
}
catch{
    res.status(411).json({
        msg: 'invalid transfer... try again!'
    })
}
})
router.post("/transfer",authMiddleware,async (req,res) => {
    try{
    const session = await mongoose.startSession()
    session.startTransaction()
    const amt  = Number(req.body.ammount)
    const fromAcc  = await BankAccount.findOne({
        userId : req.userId
    }).session(session)

    if(!fromAcc || fromAcc.balance < amt){
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
            balance : -amt
        }
    }).session(session)


    await BankAccount.updateOne({
        userId : toId
    },{
        $inc : {
            balance : amt
        }
    }).session(session)

    session.commitTransaction()    
    
res.json({
    msg : 'transaction successful!',
    })
}
catch(e){
res.status(411).json({
    msg : 'transaction failed!'
})
console.log("err :"+e);

}
}
)


module.exports = router
    