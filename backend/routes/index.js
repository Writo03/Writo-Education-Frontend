const express = require('express')
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const userDetails = require('../controller/userDetails')
const logout = require('../controller/logout')
const updateUserDetails = require('../controller/updateUserDetails')
const searchUser = require('../controller/searchUser')
const registerStudent = require('../controller/registerStudent')
const registerMentor = require('../controller/registerMentor')
const getMentorInSearch = require('../controller/getMentorsInSearch')
const User = require('../models/User')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET='hellothisissecretkey'


const router = express.Router()

//create student api
router.post('/student_register',registerStudent)
//create mentor api
router.post('/mentor_register',registerMentor)
// get mentor details of a student4
router.post('/search-user',getMentorInSearch);
//create user api
router.post('/register', async (req, res) => {
    const { username, password} = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        console.error('User not found');
        return res.status(400).json({ message: 'Invalid username ' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.error('Password mismatch');
        return res.status(400).json({ message: 'Invalid password' });
      }
  
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '24h' });
      res.json({ token });
    } catch (error) {
      console.error('Login error:', error.message);
      res.status(500).json({ error: error.message });
    }
  });

  const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Optional chaining for safety
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // decoded should contain user information, including ID
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // Use ID from the token
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ id: user._id, name: user.name, email: user.email }); // Adjust fields as needed
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
  


// //check user email
// router.post('/email',checkEmail)
// //check user password
// router.post('/password',checkPassword)
//login user details
router.get('/user-details',userDetails)
//logout user
router.get('/logout',logout)
//update user details
router.post('/update-user',updateUserDetails)


module.exports = router