const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})