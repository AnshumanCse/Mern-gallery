import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import web from './routes/web.js'
import connectDB from './db/connectdb.js'

const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL

// middlware
app.use(cors())
app.use(express.json())

// routes 

app.use("/api/v1",web)

app.use(express.static("public/upload"))

// db

connectDB(DATABASE_URL)





app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})