const ContactModel = require("../models/contact.model.js")

const registerContactRequest = async (req, res) => {
    try {
        const { name, email, phoneNo, message } = req.body
        const newContact = await ContactModel.create({
            name, email, phoneNo, message
        })
        res.status(200).json({ success: true, message: "Request submitted successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Error submitting request" })
    }
}

module.exports = {registerContactRequest}