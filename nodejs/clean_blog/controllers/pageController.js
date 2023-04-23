const Post = require("../models/Post")

exports.getAboutPage = (req, res) => {
    res.render("about")
  }

  exports.getAddPage = (req, res) => {
    res.render("add_post")
  }

  exports.getEditPage = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render("edit", {
      post,
    })
  }