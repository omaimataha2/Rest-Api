const Article = require('../models/Article.js')

const createArticle = async (req, res, next) => {
    const newArticle = new Article({...req.body, date: Date.now()});

    try {
        const savedArticle = await newArticle.save()
        res.status(201).json(savedArticle)
    } catch (error) { next(error) }
}

const getAllArticles = async (req, res, next) => {
    try {
        const articles = await Article.find()
        res.status(201).json(articles)
        // res.json({
        //     message: 'success',
        //     data: articles
        // } )
    } catch (error) { next(error) }
}

const getArticle = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.id)
        res.status(201).json(article)
    } catch (error) { next(error) }
}


const updateArticle = async (req, res, next) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true }
        )
        res.status(201).json(updatedArticle)
    } catch (error) { next(error) }
}


const deleteArticle = async (req, res, next) => {
    try {
        await Article.findByIdAndDelete(req.params.id)
        res.status(201).json("Article has been deleted!")
    } catch (error) { next(error) }
}

module.exports ={createArticle , getAllArticles , getArticle , updateArticle , deleteArticle}






