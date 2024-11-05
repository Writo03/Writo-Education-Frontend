const ContactModel = require("../models/contact.model.js")
const User = require("../models/UserModel");
const Doubt = require("../models/Doubtsection.model.js")
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
const registerDoubtsection = async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email: email });
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // Check if a doubt already exists for this user
      const existingDoubt = await Doubt.findOne({ user: user._id });
      if (existingDoubt) {
        return res.status(400).json({
          success: false,
          message: "A doubt section already registered by the user",
        });
      }
  
      const doubt = await Doubt.create({
        user: user._id,
        createdAt: new Date(),
      });
  
      if (!doubt) {
        return res
          .status(500)
          .json({ success: false, message: "Error creating doubt section" });
      }
  
      res.status(201).json({
        success: true,
        message: "Doubt section submitted successfully",
        doubt: doubt,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Error submitting doubt request" });
    }
  };
module.exports = {registerContactRequest,registerDoubtsection}