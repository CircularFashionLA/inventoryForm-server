const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('aye you made it to the clothing route! Welcome :)'))

module.exports = router