const express = require("express");
const db = require("./connection");
const path = require("path");
var bodyParser = require("body-parser");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/createtable", (req, res) => {
  let sql =
    "CREATE TABLE post(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255),PRIMARY KEY(id));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table Post Created...");
  });
});

app.get("/readposts", (req, res) => {
  let sql = "SELECT * FROM post";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

app.get("/", (req, res) => {
  let sql = "SELECT * FROM post";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.render("index", { title: "ADARSH", posts: result });
  });
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
    if (err) throw err;
    res.redirect("/");
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

app.post("/updatepost", (req, res) => {
  let data = { id: req.body.id, title: req.body.title, body: req.body.content };
  console.log(data)
  let sql =`UPDATE post SET title=?,body=? WHERE id=?`;
  db.query(sql,[data.title,data.body,data.id], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("/");
  });
});
app.listen("3000", () => {
  console.log("Server Started @ port:3000");
});
