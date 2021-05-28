const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

app.listen(4000, () => console.log("App listening on port 4000"))