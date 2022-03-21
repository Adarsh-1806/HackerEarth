const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 9000;

const db = require("./util/database");
const Blog = require("./models/blog");
const Author = require("./models/author");
const { schema } = require("./util/validation");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Author.hasMany(Blog);
db.authenticate()
  .then(() => console.log("Database Connected.."))
  .catch((err) => console.log("err", err));

app.use("/blogs", require("./routes/blogs"));
app.post("/signup", (req, res) => {
  const result = schema.validate(req.body);

  if (!result.error) {
    console.log(result.value);
    Author.create(result.value)
      .then((result) => {
        return res.status(200).json({ msg: "Aythor added..." });
      })
      .catch((err) => {
        return res
          .status(422)
          .json({ err: "Error accoured in adding new Author..." });
      });
  } else {
    res.status(422).json({ err: result.error });
  }
});

app.post("/addblog", (req, res) => {
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
app.listen(PORT, console.log("Server running @ ", { PORT }));
