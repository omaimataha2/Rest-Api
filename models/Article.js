const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: {
        type: [String],
    },
    date: {
        type: String,
        required: true
    },
},{timestamps: true}); 


const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article