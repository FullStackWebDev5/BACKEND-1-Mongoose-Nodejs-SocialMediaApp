const Post = require('./post.model')
const User = require('../user/user.model')

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()

    res.json({
      status: 'SUCCESS',
      data: posts
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const addPost = async (req, res) => {
  try {
    const { imageUrl, caption } = req.body

    const newPost = {
      imageUrl,
      caption
    }

    const savedPost = await Post.create(newPost)

    const user = await User.findById(req.user._id)
    user.posts.push(savedPost._id)
    user.save()

    res.status(201).json({
      status: 'SUCCESS',
      message: 'Post created successfully'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id
    const { imageURL, caption } = req.body

    await Post.findByIdAndUpdate(postId, { imageURL, caption })

    res.json({
      status: 'SUCCESS',
      message: 'Post updated successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id

    await Post.findByIdAndDelete(postId)

    res.json({
      status: 'SUCCESS',
      message: 'Post deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const getUserPosts = async (req, res) => {
  try {
    // # Many Post(s): One User
    // const posts = await Post.find({ userId: req.user._id }).populate('userId')

    // # One User: Many Post(s)
    const userWithPosts = await User.findById(req.user._id).populate('posts')

    res.json({
      status: 'SUCCESS',
      data: userWithPosts
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}


module.exports = {
  getPosts,
  addPost,
  updatePost,
  deletePost,
  getUserPosts
}


/*
  # Mongoose .populate() method 
    .populate('fieldName'): Replace the ObjectId with actual document reference value from the specified collection
*/