const express = require('express')
const app = express()

app.use('/clothing', require('./routes/clothing'))

const PORT = 8080

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))
