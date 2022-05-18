const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const usersRoute = require('./routes/users.js')
const articlesRoute = require('./routes/articles.js')
const commentsRoute = require('./routes/comments.js')
const hateoasLinker = require("express-hateoas-links");


const app = express()
dotenv.config()
const port = process.env.PORT
app.use(express.json());
app.use(hateoasLinker);



app.use("/api/articles", articlesRoute)
app.use("/api/comments", commentsRoute)
app.use("/api/users", usersRoute)


app.get("/", function (req, res) {
var personSchema = {
    name: "omaima",
    description:
      "This JSON Schema defines the parameters required to create a Person object",
   
  };

res.json(personSchema, [
    { rel: "self", method: "GET", href: "http://127.0.0.1" },
    {
      rel: "create",
      method: "POST",
      title: "Create article",
      href: "http://127.0.0.1/api/articles/:id",
    },
    {
      rel: "Get",
      method: "GET",
      title: "get all articles",
      href: "http://127.0.0.1/api/articles",
    },
    {
      rel: "Delete",
      method: "DELETE",
      title: "Delete article",
      href: "http://127.0.0.1/api/articles/:id",
    },
    {
      rel: "update",
      method: "PUT",
      title: "update article",
      href: "http://127.0.0.1/api/articles/:id",
    },
    {
      rel: "create",
      method: "POST",
      title: "Create comment",
      href: "http://127.0.0.1/api/comments/:id",
    },
    {
      rel: "get",
      method: "GET",
      title: "get all comments",
      href: "http://127.0.0.1/api/comments",
    },
    {
      rel: "Delete",
      method: "DELETE",
      title: "Delete comments",
      href: "http://127.0.0.1/api/comments/:id",
    },
    {
      rel: "update",
      method: "PUT",
      title: "update comment",
      href: "http://127.0.0.1/api/comments/:id",
    },
  ]);
});



const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error
    }
}

app.listen(port, ()=> {
    connect()
    console.log(`Connected to API on port ${port}`);
})