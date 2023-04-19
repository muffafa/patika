import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.get('/about', (req, res) => {
    res.status(200).send('About')
})

app.get('/contact', (req, res) => {
    res.status(200).send('Contact')
})

app.get('*', (req, res) => {
    res.status(404).send('404 Page Not Found')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})