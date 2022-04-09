/* eslint-disable no-console */
require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {
  mongoose
    .connect(process.env.mongoUri)
    .then(() => console.log('🗃️Connected to DB'))
    .catch((err) => console.log(`❌ Failed to connect to db: ${err.message}`))
}

module.exports = connectDB
