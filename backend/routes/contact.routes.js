const experss = require("express")
const router = experss.Router()
const control = require("../controller/contact.controller.js")

router.route("/submit-request").post(control.registerContactRequest)

module.exports = router