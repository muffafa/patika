const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    res.send(blog)
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})