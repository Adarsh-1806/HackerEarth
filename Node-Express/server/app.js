const express = require("express");
const db = require("./connection");
const path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  let sql = "SELECT * FROM post";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ user: "Adarsh", posts: result });
  });
});
app.get("/login", (req, res) => {
  res.render("login");
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
    if (err) {
      return res.status(422).json({ err: "Error accoured in adding new post" });
    } else {
      return res.status(200).json({ msg: "ok done... post added" });
    }
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
app.post("/signup", async (req, res) => {
  let hashPass = await bcrypt.hash(req.body.password, 8);
  let new_user = { username: req.body.username, pass: hashPass };
  let sql = "INSERT INTO users SET?";
  db.query(sql, new_user, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(422).json({ err: "Error accoured in sign up" });
    } else {
      return res.status(200).json({ msg: "ok done...user created" });
    }
  });
});
app.post("/login", (req, res) => {
  let sql = `SELECT * FROM users WHERE username='${req.body.username}'`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(422).json({ err: "Error accoured in Login" });
    } else {
      const isMatch = bcrypt.compare(req.body.password, result[0].pass);
      if (!isMatch)
        return res.status(400).json({ msg: "Error in Login credential" });
      else {
        const token = jwt.sign(
          { id: result[0].username },
          "adarshmoradiyauseingjsonwebtokenforauthenticartion"
        );
        res.cookie("jwt", token, () => {
          console.log("inside...");
        });
        return res.status(200).json({ msg: "ok Login Completed" });
      }
    }
  });
});
app.get("/cookie", (req, res) => {
  console.log("cookie....");
  res.cookie("adarsh", "Moradiya");
  res.redirect("/");
});
app.listen("9000", () => {
  console.log("Server Started @ port:9000");
});
