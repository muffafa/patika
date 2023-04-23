const Photo = require('../models/Photo')
const fs = require('fs')

exports.getAllPhotos = async (req, res) => {
  const pageNumber = req.query.page ?? 1
  const photosPerPage = 3

  const totalPhotos = await Photo.find().countDocuments()

  const photos = await Photo.find({})
  .sort('-dateCreated')
  .skip((pageNumber-1) * photosPerPage)
  .limit(photosPerPage)

  res.render('index', {
    photos: photos,
    currentPage: pageNumber,
    totalPageNumber: Math.ceil(totalPhotos / photosPerPage)
  })
}

exports.getPhoto = async (req, res) => {
  //console.log(req.params.id)
  const photo = await Photo.findById(req.params.id)
  res.render('photo', {
    photo,
  })
}

exports.createPhoto = async (req, res) => {
  const uploadDir = 'public/uploads'

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
  }

  let uploadedImage = req.files.image
  let uploadedImagePath = __dirname + '/../public/uploads/' + uploadedImage.name

  uploadedImage.mv(uploadedImagePath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    })
    res.redirect('/')
  })
}

exports.updatePhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id)
  photo.title = req.body.title
  photo.description = req.body.description
  photo.save()

  res.redirect(`/photos/${req.params.id}`)
}

exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id)
  let imagePath = __dirname + '/../public' + photo.image
  fs.unlinkSync(imagePath)
  await Photo.findByIdAndRemove(req.params.id)

  res.redirect('/')
}
