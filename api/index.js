import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import noteRouter from "./routes/note.js"
import authRouter from "./routes/auth.js"
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser"
import path from 'path'
dotenv.config()

mongoose.connect(process.env.DB_URL)
.then(()=>(console.log("DB Connected Successfully")))
.catch(()=>(console.log("DB Connection Failed")))

const __dirname = path.resolve()

const app = express()

app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port 4000")
})

app.use(express.json())
app.use(cookieParser())

//temporary code starts
app.get('/test', (req,res)=>{
    res.json({
        name:"Vinay",
        success:true
    })
}) 
//temporary code ends

app.use('/api/note', noteRouter)
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.use(express.static(path.join(__dirname, '/client/build')))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'

    return res.status(statusCode).json({
        success:false,
        statusCode, 
        message
    })
})