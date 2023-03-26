const mongoose=require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    id: String,
    name: String,
    description: String,
    image: String,
    category: String,
    tag: String,
});

module.exports = mongoose.model('Blog', blogSchema)