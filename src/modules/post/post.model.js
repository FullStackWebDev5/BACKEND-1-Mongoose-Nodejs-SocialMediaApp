const mongoose = require('mongoose')

// # Many Post(s): One User
// const postSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   imageUrl: String,
//   caption: String
// })

const postSchema = new mongoose.Schema({
  imageUrl: String,
  caption: String
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post


/* 
  # Many to One relationship
    - Many Post(s): One User
      - Multiple posts can belong to one user
      - Add a field 'userId' to Post schema which has reference to the document in User model
*/