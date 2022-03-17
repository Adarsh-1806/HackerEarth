const express = require("express");
const router = express.Router();
const db = require("../util/database");
const Blog = require("../models/blog");
// const Author = require("./models/author");
router.get("/", (req, res) => {
  Blog.findAll()
    .then((blog) => {
      console.log(blog);
      res.send(200, { blogs: blog });
    })
    .catch((err) => console.log(err));
});
router.post("/addblog", (req, res) => {
  Blog.create({
    title: req.body.title,
    technology: req.body.technology,
    description: req.body.description,
  })
    .then((result) => {
      console.log(result);
      res.send(200);
    })
    .catch((err) => {
      console.log(err);
      res.send(422);
    });
});

module.exports = router;
