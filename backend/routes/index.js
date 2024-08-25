const express = require('express')
const userRouter = require("./user")
const accRouter = require("./account")
const router = express.Router()
router.use("/account",accRouter)
router.use("/user",userRouter)

module.exports = router
    