const express = require("express");
const { authMiddleware } = require("../middleware");
const { BankAccount } = require("../db");
const { default: mongoose } = require("mongoose");
const router = express.Router();
router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const acc = await BankAccount.findOne({
      userId: req.userId,
    });
    res.json({
      balance: acc.balance,
    });
  } catch {
    res.status(411).json({
      msg: "invalid transfer... try again!",
    });
  }
});
router.post("/transfer", authMiddleware, async (req, res) => {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const amt = Number(req.body.ammount);
    const fromAcc = await BankAccount.findOne({
      userId: req.userId,
      pin: req.body.pin,
    }).session(session);
    if (!fromAcc || fromAcc.balance < amt) {
      await session.abortTransaction();
      return res.status(400).json({
        msg: "no account found or insufficient balance or incorrect pin",
      });
    }
    const toId = req.body.to;
    await BankAccount.updateOne(
      {
        userId: req.userId,
        pin: req.body.pin,
      },
      {
        $inc: {
          balance: -amt,
        },
      }
    ).session(session);

    await BankAccount.updateOne(
      {
        userId: toId,
      },
      {
        $inc: {
          balance: amt,
        },
      }
    ).session(session);

    session.commitTransaction();

    res.json({
      msg: "transaction successful!",
    });
  } catch (e) {
    res.status(411).json({
      msg: "transaction failed!",
    });
    console.log("err :" + e);
  }
});
router.post("/setpin", authMiddleware, async (req, res) => {
  try {
    await BankAccount.updateOne(
      {
        userId: req.userId,
      },
      {
        pin: req.body.pin,
      }
    );
    res.json({
      msg: "pin is all set !",
    });
  } catch {
    res.status(400).json({ msg: "something went wrong!" });
  }
});
module.exports = router;
