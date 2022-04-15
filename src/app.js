const cors = require('cors')
const express = require('express')
require('dotenv').config()

const app = express()

require('./config/connectDB')()

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use('/clothing', require('./routes/clothing'))
app.use('/images', require('./routes/images'))

const { PORT } = process.env
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`💻 Server running on port ${PORT}`))
