const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

// const myLogger = (req, res, next) => {
//     console.log('logging 1')
//     next()
// }

app.use(express.static('public'))
// app.use(myLogger)

app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  res.render('index')
})

app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  res.render('about')
})

app.get('/add', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  res.render('add')
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
