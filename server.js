const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models')

//Middleware
const PORT=3000
const app=express()
app.use(express json())

//Connecting Mongodb Atlas
mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB connected successfully...")
).catch(
    (err)=>console.log(err)
)

//API Handling 
app.get('/',async(req, res)=>{
    try{
        res.send("<h1 align=center>Welcome to the backend and Week 2</h1>")
    }
    catch(err)
    {
        console.log(err)
    }
})

//API Registeration page
app.post('/register',async(req,res)=>{
    const {user, email,password}=req.body
    try{
        const newUser=new User({user,email,password})
        await newUser.save()
        console.log("New user is registered successfully...")
        res.json({message:'User created...'})
    }
    catch(err)
    {
        console.log(err)
    }
})

//Server learning and Testing
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is running on port | This server:"+PORT)
})