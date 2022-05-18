const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const usersRoute = require('./routes/users.js')
const articlesRoute = require('./routes/articles.js')
const commentsRoute = require('./routes/comments.js')


const app = express()
dotenv.config()
const port = process.env.PORT


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error
    }
}



app.use(express.json());

app.use("/api/articles", articlesRoute)
app.use("/api/comments", commentsRoute)
app.use("/api/users", usersRoute)



app.listen(port, ()=> {
    connect()
    console.log(`Connected to API on port ${port}`);
})