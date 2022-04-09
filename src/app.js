const express = require('express')
const app = express()

require('./config/connectDB')()

app.use('/clothing', require('./routes/clothing'))

const PORT = 8080

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))
