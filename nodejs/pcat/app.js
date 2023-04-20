const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const myLogger = (req, res, next) => {
//     console.log('logging 1')
//     next()
// }

app.use(express.static('public'))
// app.use(myLogger)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'))
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
