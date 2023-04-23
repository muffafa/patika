const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const methodOverride = require('method-override')

const ejs = require('ejs')
const path = require('path')
const fs = require('fs')

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
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload())
app.use(methodOverride('_method'))
// app.use(myLogger)

app.get('/', async (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  const photos = await Photo.find({}).sort('-dateCreated')
  res.render('index', {
    photos,
  })
})

app.get('/photos/:id', async (req, res) => {
  //console.log(req.params.id)
  const photo = await Photo.findById(req.params.id)
  res.render('photo', {
    photo,
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

  const uploadDir = 'public/uploads'

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
  }

  let uploadedImage = req.files.image
  let uploadedImagePath = __dirname + '/public/uploads/' + uploadedImage.name

  uploadedImage.mv(uploadedImagePath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    })
    res.redirect('/')
  })
})

app.get('/photos/edit/:id', async (req, res) => {
  const photo = await Photo.findById(req.params.id)
  res.render('edit', {
    photo,
  })
})

app.put('/photos/:id', async (req, res) => {
  const photo = await Photo.findById(req.params.id)
  photo.title = req.body.title
  photo.description = req.body.description
  photo.save()

  res.redirect(`/photos/${req.params.id}`)
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
