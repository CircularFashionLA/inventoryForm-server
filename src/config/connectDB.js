require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {
  const mongoUrl = process.env.mongoUri
  mongoose
    .connect(mongoUrl)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(`Failed to connect to db: ${err.message}`))
}

module.exports = connectDB
