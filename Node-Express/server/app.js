const express = require("express");
const db = require("./connection");
const path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  let sql = "SELECT * FROM post";
  db.query(sql, (err, result) => {
    if (err) throw err;
    // res.render("index", { title: "Adarsh", posts: result });
    res.send({ user: "Adarsh", posts: result });
  });
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/addpost", (req, res) => {
  res.render("addpost");
});

app.get("/editpost/:id", (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM post WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.render("editpost", { post: result[0] });
  });
});
app.get("/deletepost/:id", (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM post WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(422).json({ err: "Error...." });
    } else {
      return res.status(200).json(result);
    }
  });
});

app.post("/savepost", (req, res) => {
  let data = { title: req.body.title, body: req.body.content };
  let sql = "INSERT INTO post SET?";
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

const jwt = require("jsonwebtoken");
const createToken = async () => {
  const token = await jwt.sign({ id: 1 }, "adarshmoradiyaadarsaskijwhlklkflih");
  console.log(token);
};
createToken();
app.post("/savepost", (req, res) => {
  let data = { title: req.body.title, body: req.body.content };
  let sql = "INSERT INTO post SET?";
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});
app.post("/updatepost", (req, res) => {
  let data = { id: req.body.id, title: req.body.title, body: req.body.content };
  console.log(data);
  let sql = `UPDATE post SET title=?,body=? WHERE id=?`;
  db.query(sql, [data.title, data.body, data.id], (err, result) => {
    if (err) {
      return res.status(422).json({ err: "Error accoured" });
    } else {
      return res.status(200).json({ msg: "ok done..." });
    }
  });
});
app.listen("9000", () => {
  console.log("Server Started @ port:9000");
});
