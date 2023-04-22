const express = require('express')
const mongoose = require('mongoose')

const ejs = require('ejs')
const path = require('path')

const Post = require('./models/Post')

const app = express()
const port = 4000


mongoose.connect('mongodb://localhost/cleanblog-test-db')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
    // const blog = { id: 1, title: "Blog title", description: "Blog description" }
    // res.send(blog)
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/add_post', (req, res) => {
    res.render('add_post')
})

app.post('/blogs', async (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
    await Post.create(req.body)
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})