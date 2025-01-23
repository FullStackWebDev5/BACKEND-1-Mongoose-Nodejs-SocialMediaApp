const express = require('express')
const bodyParser = require('body-parser')
const { connectToDb } = require('./src/config/db')
const userRoutes = require('./src/modules/user/user.route')
const postRoutes = require('./src/modules/post/post.route')
// const commentRoutes = require('./src/modules/comment/comment.route')

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
// app.use('/api/comments', commentRoutes)

app.get('/', (req, res) => {
  res.json({
    message: 'Server is up',
    currentTime: new Date().toLocaleString()
  })
})

app.listen(3000, async () => {
  console.log('Server is up ✅')
  connectToDb()
})


/*
  # Mongoose
    - Relationships: 
      - The connecting factor between different documents in MongoDB
      - Types:
        - ONE  : ONE
        - ONE  : MANY
        - MANY : ONE
        - MANY : MANY

      - Importance:
        - Efficiently organize data
        - Ensure data integrity
        - Optimize queries and improve performance

      - Syntax:
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Model'
        }

*/