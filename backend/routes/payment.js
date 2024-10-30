const router = require("express").Router()
const Razorpay = require("razorpay")
const crypto = require("crypto")
const UserModel = require("../models/UserModel.js")

router.post("/orders", async (req, res) => {
  try {
    const { amount } = req.body
    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    })


    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    }

    const order = await instance.orders.create(options)
    if (!order) {
      return res.status(500).json({ message: "Something went wrong!" })
    }

    return res.status(200).json({
      message: "order created successfully",
      order,
    })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" })
    console.log(error)
  }
})

router.post("/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      order_id,
      userId,
      service,
    } = req.body
    const sha = crypto.createHmac("sha256", process.env.KEY_SECRET)
    sha.update(`${order_id}|${razorpay_payment_id}`)
    const digest = sha.digest("hex")

    if (digest !== razorpay_signature) {
      return res.status(400).send("Transaction not legit!")
    }

    const user = await UserModel.findById(userId)

    if (service === "neet") {
      user.student_services.neetTestSeries = true
    } else if (service === "jee") {
      user.student_services.jeeTestSeries = true
    } else {
      user.student_services.doubtClearing = true
    }
    await user.save({ validateBeforeSave: false })
    return res.status(200).json({
      message: "Payment verified successfully!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phoneNo: user.phone,
        avatar: user.profile_pic,
        student_services: user.student_services,
      },
    })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" })
    console.log(error)
  }
})

module.exports = router
