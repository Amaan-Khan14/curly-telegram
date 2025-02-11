const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
require('dotenv').config()

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/path', (req, res) => { res.send('Hello from path') })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
