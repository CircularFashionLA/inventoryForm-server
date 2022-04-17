const cors = require('cors')
const express = require('express')
require('dotenv').config()

const app = express()

require('./config/connectDB')()

app.use(
  cors({
    origin: '*',
  }),
)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})
app.use(express.json({ limit: '50mb' }))
app.use('/clothing', require('./routes/clothing'))
app.use('/images', require('./routes/images'))

const { PORT } = process.env
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`💻 Server running on port ${PORT}`))
