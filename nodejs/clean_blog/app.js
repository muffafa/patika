const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require("method-override")

const ejs = require("ejs")

//Controllers
const postController = require("./controllers/postController")
const pageController = require("./controllers/pageController")

const app = express()
const port = 4000

//Database connect
mongoose.connect("mongodb://localhost/cleanblog-test-db")

//Middlewares
app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
)

//Route
app.get("/", postController.getAllPosts)
app.get("/posts/:id", postController.getPost)
app.post("/posts", postController.createPost)
app.delete("/posts/:id", postController.deletePost)
app.put("/posts/:id", postController.updatePost)

app.get("/about", pageController.getAboutPage)
app.get("/add_post", pageController.getAddPage)
app.get("/edit/:id", pageController.getEditPage)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
