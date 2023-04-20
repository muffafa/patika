const express = require('express')
const app = express()
const port = 4000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    // const blog = { id: 1, title: "Blog title", description: "Blog description" }
    // res.send(blog)
    res.render('index')
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

app.listen(port, () => {
    console.log(`listening on ${port}`)
})