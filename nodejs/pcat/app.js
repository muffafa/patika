const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const methodOverride = require('method-override')

const ejs = require('ejs')

const photoController = require('./controllers/photoController')
const pageController = require('./controllers/pageController')

const app = express()
const port = process.env.PORT || 5001

mongoose.connect('mongodb+srv://mmsavar:sftrS62aP1j9Sub6@cluster0.79vtxkq.mongodb.net/pcat-db?retryWrites=true&w=majority')
  .then(()=> {
    console.log('mongodb connected successfully')
  }).catch(err => {
    console.error(err)
  })

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload())
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}))

app.get('/', photoController.getAllPhotos)
app.get('/photos/:id', photoController.getPhoto)
app.post('/photos', photoController.createPhoto)
app.put('/photos/:id', photoController.updatePhoto)
app.delete('/photos/:id', photoController.deletePhoto)

app.get('/about', pageController.getAboutPage)
app.get('/add', pageController.getAddPage)
app.get('/photos/edit/:id', pageController.getEditPage)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
