const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Database connected ✅')
  } catch (error) {
    console.log('Database error: ', error)
  }
}

module.exports = {
  connectToDb,
}