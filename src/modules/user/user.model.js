const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// })

// # One User: Many Post(S)
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
})

const User = mongoose.model('User', userSchema)

module.exports = User


/* 
  # One to Many relationship
    - One User: Many Post(s)
      - Multiple posts can belong to one user
      - Add a field 'posts' which is an array and has ObjectId which has reference to the documents in the Post model
*/