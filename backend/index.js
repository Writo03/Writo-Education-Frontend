const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const mentorRoutes = require('./routes/mentorRoutes')
const paymentRoutes = require('./routes/payment')
const quizRouter = require('./routes/quiz')
const cookiesParser = require('cookie-parser')
const { app, server } = require('./socket/index')
const session = require('express-session')

// const app = express()
const allowedOrigins = ['http://localhost:3000', 'https://writo-education-frontend.onrender.com'];
app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json())
app.use(cookiesParser())

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:true,
        maxAge:1000*60*60*24
    }
}))

const PORT = process.env.PORT || 8080

app.get('/',(request,response)=>{
    response.json({
        message : "Server running at " + PORT
    })
})

app.get('/id',(req,res)=>{
    if(req.session.Id){
        res.json({valid:true,id:req.session.Id})
    }
    else{
        res.json({valid:false})
    }
})

app.get('/remove-id',(req,res)=>{
    console.log(req.session.Id)
    req.session.Id=null
    res.json({message:req.session.Id})
    
})

//api endpoints
app.use('/api',router)
app.use('/api/mentors', mentorRoutes);
app.use("/api/payment/", paymentRoutes);
app.use('/api/quiz',quizRouter)

connectDB().then(()=>{
    server.listen(PORT,()=>{
        console.log("server running at " + PORT)
    })
})
