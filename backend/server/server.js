const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/route')
const quizRouter = require('./routes/quizRoute')
const cors=require('cors')

app.use(cors({
    origin : 'http://localhost:3000',
    methods:["GET","POST","PUT","DELETE"],
    credentials : true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true})); 

// const posts =[
//     {
//         name:'kyle',
//         title:'post1'
//     },
//     {
//         name:'jim',
//         title:'post2'
//     }
// ]

// app.get('/posts',authenticateToken,(req,res)=>{
//     res.json(posts.filter(post=>post.name===req.body.username))
// })

// app.post('/login',(req,res)=>{
//     const username = req.body.username
//     const user = {name: username}
//     const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
//     res.json({accessToken:accessToken})
// })

// function authenticateToken(req,res,next){
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if(token==null) return res.sendStatus(401)

//     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
//         if(err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }

const URL='mongodb+srv://sivamanik:A12345678b@cluster0.nsc1if7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(URL)
.then(()=>{
    app.listen(8080)
    console.log('8080')
})

app.use(router)
app.use(quizRouter)