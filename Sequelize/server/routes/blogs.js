const express = require("express");
const router = express.Router();
const db = require("../util/database");
const Blog = require("../models/blog");
// const Author = require("./models/author");
router.get("/", (req, res) => {
  Blog.findAll()
    .then((blog) => {
      console.log(blog);
      res.status(200).send({ blogs: blog });
    })
    .catch((err) => console.log(err));
});
router.post("/addblog", (req, res) => {
  console.log(req.body);
  Blog.create({
    title: req.body.title,
    technology: req.body.technology,
    description: req.body.description,
  })
    .then((result) => {
      return res.status(200).json({ msg: "Blog added..." });
    })
    .catch((err) => {
      return res
        .status(422)
        .json({ err: "Error accoured in adding new Blog..." });
    });
});

module.exports = router;
