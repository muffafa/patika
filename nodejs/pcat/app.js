const express = require('express')
const mongoose = require('mongoose');

const ejs = require('ejs')
const path = require('path')

const Photo = require('./models/Photo')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/pcat-test-db')

app.set('view engine', 'ejs')

// const myLogger = (req, res, next) => {
//     console.log('logging 1')
//     next()
// }

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
// app.use(myLogger)

app.get('/', async (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  const photos = await Photo.find({})
  res.render('index', {
    photos
  })
})

app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  res.render('about')
})

app.get('/add', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  res.render('add')
})

app.post('/photos', async (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  await Photo.create(req.body)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
