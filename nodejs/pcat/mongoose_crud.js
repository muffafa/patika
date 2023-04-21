const mongoose = require('mongoose')
const Schema = mongoose.Schema

//connect to Database
mongoose.connect('mongodb://localhost/pcat-test-db') // mongodb://127.0.0.1:27017/pcat-test-db

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
})

const Photo = mongoose.model('Photo', PhotoSchema)

//create a photo
// Photo.create({
//   title: 'Photo Title 4',
//   description: 'Photo Description 4',
// })

//read a photo
// Photo.find()
//     .then(photo => console.log(photo))
//     .catch(err => console.log(err))

//update a photo
// const id = '644306aaf852690c4a7c5a5b';

// Photo.findByIdAndUpdate( id, {title : 'Photo Title 1'}, { new: true})
//     .then(photo => console.log(photo))
//     .catch(err => console.log(err))

//delete a photo
const id = '6443087172b71ecc39bfcbb2';
Photo.findByIdAndDelete(id)
    .then(console.log("Photo is deleted"))
    .catch(err => console.log(err))