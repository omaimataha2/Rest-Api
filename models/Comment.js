const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
},{timestamps: true}); 


const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment