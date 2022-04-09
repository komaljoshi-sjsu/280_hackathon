const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

// Init Middleware
app.use(express.json({ extended: false }))

//Define all the routes
app.use(require('./routes/macroservices'))
app.use(require('./routes/debitservices'))
app.use(require('./routes/agriservices'))

const PORT = process.env.PORT || 5000
//Server code will be running on port 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
