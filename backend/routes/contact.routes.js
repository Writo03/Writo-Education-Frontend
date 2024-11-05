const experss = require("express")
const router = experss.Router()
const control = require("../controller/contact.controller.js")

router.route("/submit-request").post(control.registerContactRequest)
router.route("/register-doubtsection").post(control.registerDoubtsection)
module.exports = router